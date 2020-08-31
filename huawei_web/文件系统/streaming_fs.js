/*
    同步,异步,简单文件的写入都不适合大文件的写入,性能比较差,容易导致内存溢出

    流式文件写入

        fs.createWriteStream(path[, options])
            - 可以用来创建一个可写流
            - path 文件路径
            - options 配置的参数


 */

var fs = require('fs');

//流式文件写入
//创建以一个可写流

var ws = fs.createWriteStream('hello4.txt');

//可以通过监听流的open和close事件来监听流的打开和关闭
/*
    on(事件字符串,回调函数)
        - 可以为对象绑定一个事件
    once(事件字符串,回调函数)
        - 可以为对象绑定一个一次性的事件,该事件将会在触发一次以后自动失效
 */
ws.once('open',function () {
    console.log('流打开了~~~');
});
ws.once('close',function () {
    console.log('流关闭了~~~');
});

//通过ws向文件中输入内容
ws.write('通过可写流向文件中写入内容');
ws.write('今天天气真不错');
ws.write('红掌拨清波');
ws.write('白日依山尽');

//关闭流
ws.en;