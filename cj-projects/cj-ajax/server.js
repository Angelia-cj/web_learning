// 引入express
const express = require('express')
const cors = require('cors')

// 创建app实例对象
const app = express()

// post请求时，使用中间件解析urlencoded形式的body请求体参数
app.use(express.urlencoded({ extended: true }))

// 使用cors中间件解决跨域问题
app.use(cors())

// post请求时，使用中间件解析json形式的body请求体参数
app.use(express.json())

// 暴露静态资源
app.use(express.static(__dirname + '/src'))

// 响应GET请求 ----- 可以接收query参数
app.get('/test_get', (request, response) => {
    console.log('有人请求test_get了--携带的query参数是：', request.query);
    // response.setHeader('Access-Control-Allow-Origin', '*');
    // response.setHeader('Access-Control-Expose-Headers', '*');
    // request.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8080')
    response.send('hello_test_get')
})

// 欲请求的方式(检查服务器性能)
/* app.options('/test_put', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Expose-Headers', '*');
    response.setHeader('Access-Control-Allow-methods', '*');
    response.send()
}) */

// 响应put请求
app.put('/test_put', (request, response) => {
    // response.setHeader('Access-Control-Allow-Origin', '*');
    // response.setHeader('Access-Control-Expose-Headers', '*');
    response.send("hello_test_put")
})

// 响应Get请求 -----可以接收params参数
app.get('/test_get2/:name/:age', (request, response) => {
    console.log('有人请求test_get2了', request.params);
    response.setHeader("Access-Control-Allow-Origin", '*')
    response.send('hello_test_get2')
})

// 响应get请求
app.get('/get_person', (request, response) => {
    console.log("有人请求get_person了！");
    let person = { name: 'Tom', age: 19, sex: "女" }
    response.send(JSON.stringify(person))
})

// 响应get请求
app.get('/get_person_delay', (request, response) => {
    console.log("有人请求get_person_delay了！");
    let person = { name: 'Tom', age: 19, sex: "女" }
    setTimeout(() => {
        response.send(JSON.stringify(person))
    }, 3000);
})

// 响应post请求 ---可以接收query参数
app.post('/test_post1', (request, response) => {
    // 函数体
    console.log('有人请求test_post了! --携带的query参数是：', request.query);
    // request.setHeader('Access-Control-Allow-Origin', '*')
    response.send('hello_test_post1')
})

// 响应post请求 -----可以接收params参数
app.post('/test_post2/:name/:age', (request, response) => {
    console.log('有人请求test_post了! --携带的params参数是：', request.params);
    request.setHeader("Access-Control-Allow-Origin", '*')
    response.send('hello_test_post2')
})

// 响应post请求 -----可以接收body请求体
app.post('/test_post', (request, response) => {
    console.log('有人请求test_post了! --携带的body参数是：', request.body);
    request.setHeader("Access-Control-Allow-Origin", '*')
    response.send('hello_test_post')
})

// 响应post请求
app.post('/test_post2', (request, response) => {
    console.log('有人请求test_post2了！');
    let person = { name: '小常', age: 19, sex: "女" }
    response.send(person)
})

// 响应get请求 ----- jquery
app.get('/test_jquery_get', (request, response) => {
    console.log("有人请求test_jquery_get了！", request.query);
    let car = { name: '迈巴赫', price: "200万" }
    response.send(JSON.stringify(car))
})

// 响应post请求 ----- jquery
app.post('/test_jquery_post', (request, response) => {
    console.log("有人请求test_jquery_post了！", request.body);
    let car = { name: '迈巴赫', price: "200万" }
    response.send(JSON.stringify(car))
})

// 响应get请求 --- jsonp
app.get('/test_jsonp', (request, response) => {
    // response.send(alert(1))
    // 解构赋值
    let { callback } = request.query // 等价于 let a = request.query.a
    console.log(callback);
    let person = [{ name: 'tom', age: 17 }, { name: 'Jim', age: 16 }]

    // 动态获取函数名
    response.send(`${callback}(${JSON.stringify(person)})`)
})


// 监听
app.listen(8080, (err) => {
    if (!err) {
        console.log('测试ajax请求的服务器开启成功了，测试地址如下：');
        console.log('http://127.0.0.1:8080/1_ajax小试牛刀.html');
        console.log('http://127.0.0.1:8080/2_xhr的5种状态.html');
        console.log('http://127.0.0.1:8080/3_ajax_get请求.html');
        console.log('http://127.0.0.1:8080/4_ajax_post请求.html');
        console.log('http://127.0.0.1:8080/5_ajax_解析json数据.html');
        console.log('http://127.0.0.1:8080/6_ajax_处理IE浏览器-get请求缓存问题.html');
        console.log('http://127.0.0.1:8080/7_ajax请求的异常与超时处理.html');
        console.log('http://127.0.0.1:8080/8_ajax取消请求.html');
        console.log('http://127.0.0.1:8080/9_避免多次重复请求.html');
        console.log('http://127.0.0.1:8080/10_jQuery封装的ajax.html');
        console.log('http://127.0.0.1:8080/11_演示回调地狱.html');
        // console.log('http://127.0.0.1:8080/11_演示回调地狱.html');
    }
})