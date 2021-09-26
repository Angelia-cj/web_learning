const express = require('express')
const app = express()

// 路由
app.get('/test_get', (request, response) => {
    response.send('hello_test_get')
})

app.listen(8080, (err) => {
    if (!err) {
        console.log('测试ajax请求的服务器开启成功了');
    }
})