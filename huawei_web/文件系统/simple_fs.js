/*
    简单文件写入
        fs.writeFile(file, data[, options], callback)
        fs.writeFileSync(file, data[, options])
            - file 要操作文件的路径
            - data 要写入的数据
            - options 选项,可以对写入进行一些设置
            - callback 当写入完成以后执行的函数

            - flag
                r 只读
                w 可写
                a 追加
 */

//引入fs模块
var fs = require('fs');


//在指定的路径下写入文件  路径:C:\Users\CX\Desktop
// 因为在程序中 \ 被当成转义字符,所以需要写成C:\\Users\\CX\\Desktop\\fs.js,主要是让转义字符转义它自己
// 或者可以直接写成  C:/Users/CX/Desktop/fs.js

fs.writeFile('hello3.txt','这是通过write File写入的内容',{flag:'a'},function (err) {
    if (!err){
        console.log('写入成功~~~~');
    }else{
        console.log(err);
    }
});