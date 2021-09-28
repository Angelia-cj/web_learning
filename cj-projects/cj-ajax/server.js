// 引入express
const express = require('express')

// 创建app实例对象
const app = express()

// 暴露静态资源
app.use(express.static(__dirname + '/src'))

// 响应GET请求
app.get('/test_get', (request, response) => {
    console.log('有人请求test_get了--携带的query参数是：', request.query);
    response.send('hello_test_get')
})

app.get('/test_get2/:name/:age', (request, response) => {
    console.log('有人请求test_get2了--携带的params参数是：', request.params);
    response.send('hello_test_get2')
})

// 监听
app.listen(8080, (err) => {
    if (!err) {
        console.log('测试ajax请求的服务器开启成功了，测试地址如下：');
        console.log('http://127.0.0.1:8080/1_ajax小试牛刀.html');
        console.log('http://127.0.0.1:8080/2_xhr的5种状态.html');
        console.log('http://127.0.0.1:8080/3_ajax_get请求.html');
    }
})