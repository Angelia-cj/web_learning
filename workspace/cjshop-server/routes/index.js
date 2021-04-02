var express = require('express');
var router = express.Router();

const md5 = require('blueimp-md5')
// const UserModel = require('../db/models').UserModel
const { UserModel } = require('../db/models')
const filter = { password: 0, __v: 0 } // 查询时过滤出指定的属性

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

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


module.exports = router;





















