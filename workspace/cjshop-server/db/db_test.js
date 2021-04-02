/*
  使用 mongoose 操作 mongodb 的测试文件
    1. 连接数据库
      1.1. 引入 mongoose
      1.2. 连接指定数据库(URL 只有数据库是变化的)
      1.3. 获取连接对象
      1.4. 绑定连接完成的监听(用来提示连接成功)
    2. 得到对应特定集合的 Model
      2.1. 字义 Schema(描述文档结构)
      2.2. 定义 Model(与集合对应, 可以操作集合)
    3. 通过 Model 或其实例对集合数据进行 CRUD 操作
      3.1. 通过 Model 实例的 save()添加数据
      3.2. 通过 Model 的 find()/findOne()查询多个或一个数据
      3.3. 通过 Model 的 findByIdAndUpdate()更新某个数据
      3.4. 通过 Model 的 remove()删除匹配的数据
*/
// 引入blueimp-md5加密
const md5 = require('blueimp-md5')  // md5加密的函数

// 1.连接数据库
// 1.1.引入 mongoose
const mongoose = require('mongoose')
// 1.2.连接指定数据库(URL 只有数据库是变化的)
mongoose.connect('mongodb://localhost:27017/cj-waimai')
// 1.3.获取连接对象
const conn = mongoose.connection
// 1.4.绑定连接完成的监听(用来提示连接成功)
conn.on('connected', function () {
  console.log('数据库连接成功！');
})

// 2. 得到对应特定集合的 Model
// 2.1.字义 Schema(描述文档结构)
const userSchema = mongoose.Schema({
  // 指定文档的结构：属性名/属性值的类型；是否是必须的，默认值
  username: { type: String, required: true },  // 用户名
  password: { type: String, required: true },  // 密码
  type: { type: String, required: true },  // 用户类型：dashen/laoban 
})
// 2.2.定义 Model(与集合对应, 可以操作集合)
const UserModel = mongoose.model('user', userSchema)  // 集合名：users

// 3. 通过 Model 或其实例对集合数据进行 CRUD 操作
// 3.1.通过 Model 实例的 save()添加数据
function testSave () {
  // 创建UserModel的实例
  const userModel = new UserModel({ username: 'Bob', password: md5('345'), type: 'laoban' })
  // 调用save()保存
  userModel.save(function (error, user) {
    console.log('save()', error, user);
  })
}
// testSave()
// 3.2.通过 Model 的 find() / findOne()查询多个或一个数据
function testFind () {
  // 查询多个
  UserModel.find(function (error, users) {
    // 回调函数：得到的是包含所有匹配文档对象的数组，如果没有匹配的就是[]
    console.log('find()', error, users);
  })
  // 查询一个
  UserModel.findOne({ _id: '5fd1dc4ffa1aa12a9486f066' }, function (error, user) {
    // 回调函数：得到的是匹配的文档对象，如果没有匹配得到的就是null
    console.log('find()', error, user);
  })
}
// testFind()
// 3.3.通过 Model 的 findByIdAndUpdate()更新某个数据
function testUpdate () {
  UserModel.findByIdAndUpdate({ _id: '5fd1dc4ffa1aa12a9486f066' }, { username: 'Jack' }, function (error, doc) {
    console.log('findByIdAndUpdate()', error, doc);
  })
}
// testUpdate()
// 3.4.通过 Model 的 remove()删除匹配的数据
function testDelete () {
  UserModel.remove({ _id: '5fd1dc4ffa1aa12a9486f066' }, function (error, doc) {
    // { n: 1, ok: 1, deletedCount: 1 } n代表删除的个数 0或者1  
    console.log('remove()', error, doc);
  })
}
testDelete()