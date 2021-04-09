var express = require('express');
var router = express.Router();

const md5 = require('blueimp-md5')
// const UserModel = require('../db/models').UserModel
// const { UserModel } = require('../db/models')
const models = require('../db/models')
const UserModel = models.getModel('user')
const _filter = { password: 0, __v: 0 } // 查询时过滤出指定的属性
const sms_util = require('../util/sms_util')
const users = {}
const ajax = require('../api/ajax')
var svgCaptcha = require('svg-captcha')



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
// 注册路由
router.post('/register', function (req, res) {
  // 获取请求参数
  const { username, password, type } = req.body
  // 处理：判断用户是否已经存在，如果存在，提示错误信息；如果不存在，保存
  // 查询（根据username查询）
  UserModel.findOne({ username }, function (err, user) {
    // 如果user有值（已存在）
    if (user) {
      // 返回提示错误信息
      res.send({ code: 1, msg: '此用户已存在' })
    } else { // 没值（不存在）
      // 保存
      new UserModel({ username, type, password: md5(password) }).save(function (err, user) {
        // 生成一个cookie(userid : user._id)，并交给浏览器保存  
        res.cookie('userid', user._id, { maxAge: 1000 * 60 * 60 * 24 })  // 持久化 cookie, 浏览器会保存在本地文件

        // 返回包含user的json数据
        const data = { username, type, _id: user._id } // 响应数据中不要携带password
        res.send({ code: 0, data })
      })
    }
  })
  // 返回响应数据
})
// 登录路由
router.post('/login', function (req, res) {
  const { username, password } = req.body
  // 根据username，password查询数据库users，如果没有，返回提示错的信息，如果有，返回登录成功的信息（包含user）
  UserModel.findOne({ username, password: md5(password) }, filter, function (err, user) {
    if (user) { // 登录成功
      // 生成一个cookie(userid : user._id)，并交给浏览器保存  
      res.cookie('userid', user._id, { maxAge: 1000 * 60 * 60 * 24 })  // 持久化 cookie, 浏览器会保存在本地文件
      // 返回登录成功信息（包含uesr）
      res.send({ code: 0, data: user })
    } else {
      // 登录失败
      res.send({ code: 1, msg: '用户名或密码不正确' })
    }
  })
})

/*
  密码登录
*/
router.post('/login_pwd', function (req, res) {
  const name = req.body.name
  const pwd = md5(req.body.pwd)
  const captcha = req.body.captcha.toLowerCase()
  console.log('/login_pwd', name, pwd, captcha, req.session)

  // 可以对用户名/密码格式进行检查，如果非法，返回提示信息
  if (captcha !== req.session.captcha) {
    return res.send({ code: 1, msg: '验证码不正确！' })
  }

  // 删除保存的验证码
  delete req.session.captcha

  UserModel.findOne({ name }, function (err, user) {
    if (user) {
      console.log('findUser', user)
      if (user.pwd !== pwd) {
        res.send({ code: 1, msg: '用户名或密码不正确！' })
      } else {
        req.session.userid = user._id
        req.send({ code: 0, data: { _id: user._id, name: user.name, phone: user.phone } })
      }
    } else {
      const userModel = new UserModel({ name, pwd })
      userModel.save(function (err, user) {
        // 向浏览器端返回cookie(key=value)
        // res.cookie('userid', user._id, {maxAge: 1000*60*60*24*7})
        req.session.userid = user._id
        const data = { _id: user._id, name: user.name }
        // 返回数据(新的user)
        res.send({ code: 0, data })
      })
    }
  })
})

/*
  一次性图形验证码
*/
router.get('/captcha', function (req, res) {
  var captcha = svgCaptcha.create({
    ignoreChars: '0o1l',
    noise: 2,
    color: true
  });
  req.session.captcha = captcha.text.toLowerCase();
  console.log(req.session.captcha);
  /*res.type('svg');
  res.status(200).send(captcha.data);*/
  res.type('svg');
  res.send(captcha.data)
})

/*
  发送验证码短信
*/
router.get('/sendcode', function (req, res, next) {
  // 1.获取请求参数数据
  var phone = req.query.phone
  // 2.处理数据
  // 发送验证码（6位随机数）
  var code = sms_util.randomCode(6)
  // 发送给指定的手机号
  console.log(`向${phone}发送验证码短信: ${code}`);
  sms_util.sendCode(phone, code, function (success) {//success表示是否成功
    if (success) {
      users[phone] = code
      console.log('保存验证码: ', phone, code)
      res.send({ 'code': 0 })
    } else {
      // 3.返回响应数据
      res.send({ 'code': 1, msg: "短信验证码发送失败!" })
    }
  })
})

/*
  短信登录
*/
router.post('/login_sms', function (req, res, next) {
  var phone = req.body.phone;
  var code = req.body.code;
  console.log('/login_sms', phone, code);
  if (users[phone] !== code) {
    res.send({ code: 1, msg: '手机号或验证码不正确!' });
    return;
  }

  // 删除保存的code
  delete users[phone];

  UserModel.findOne({ phone }, function (err, user) {
    if (user) {
      req.session.userid = user._id
      res.send({ code: 0, data: user })
    } else {
      // 存储数据
      const userModel = new UserModel({ phone })
      userModel.save(function (err, user) {
        req.session.userid = user._id
        res.send({ code: 0, data: user })
      })
    }
  })
})

/*
根据sesion中的userid, 查询对应的user
 */
router.get('/userinfo', function (req, res) {
  // 取出userid
  const userid = req.session.userid
  // 查询
  UserModel.findOne({ _id: userid }, _filter, function (err, user) {
    // 如果没有,返回错误提示
    if (!user) {
      // 清除浏览器保存的userid的cookie
      delete req.session.userid

      res.send({ code: 1, msg: '请先登录!' })
    } else {
      // 如果有,返回user
      res.send({ code: 0, data: user })
    }
  })
})

/*
退出登录
 */
router.get('/logout', function (req, res) {
  // 清除浏览器保存的userid的cookie
  delete req.session.userid
  // 返回数据
  res.send({ code: 0 })
})

/*
根据经纬度获取位置详情
 */
router.get('/position/:geohash', function (req, res) {
  const { geohash } = req.params
  ajax(`http://cangdu.org:8001/v2/pois/${geohash}`)
    .then(data => {
      res.send({ code: 0, data })
    })
})

/*
获取首页分类列表
 */
router.get('/food_categorys', function (req, res) {
  setTimeout(() => {
    const data = require('../data/food_categorys.json')
    res.send({ code: 0, data })
  }, 300);
})

/*
根据经纬度获取商铺列表
?latitude=40.10038&longitude=116.36867
 */
router.get('/shops', function (req, res) {
  const latitude = req.query.latitude
  const longitude = req.query.longitude

  setTimeout(() => {
    const data = require('../data/shops.json')
    res.send({ code: 0, data })
  }, 300);
})

/*
搜索商铺
 */
router.get('/search_shops', function (req, res) {
  const { geohash, keyword } = req.query
  ajax(`http://cangdu.org:8001/v4/restaurants`, {
    'extras[]': 'restaurant_activity',
    geohash,
    keyword,
    type: 'search'
  }).then(data => {
    res.send({ code: 0, data })
  })
})

module.exports = router;

// 注册一个路由：用户注册
/**
 * 提供一个用户注册的接口
    a) path 为: /register
    b) 请求方式为: POST
    c) 接收 username 和 password 参数
    d) admin 是已注册用户
    e) 注册成功返回: {code: 0, data: {_id: 'abc', username: 'xxx', password: '123'}
    f) 注册失败返回: {code: 1, msg: '此用户已存在'}
 */
/*
// 回调函数：处理请求，返回响应  三步：1.获取请求参数 2.处理 3.返回响应数据
router.post('/register', function (req, res) {
  // 1.获取请求参数
  const { username, password } = req.body

  // 2.处理
  if (username === 'admin') { // 注册失败
    // 返回响应数据（失败）

    res.send({ code: 1, msg: '此用户已存在' })
  } else { // 注册成功
    // 返回响应数据（成功）
    res.send({ code: 0, data: { _id: 'abc', username, password } })
  }
})*/






















