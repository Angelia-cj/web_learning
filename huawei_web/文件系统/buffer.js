/*
       Buffer（缓冲区）
        - Buffer的结构和数组很像，操作的方法也和数组类似
        - 数组中不能存储二进制的文件，而Buffer就是专门用来存储二进制数据
        - 使用buffer模块，不需要引入，直接使用即可
        - 在buffer中存储的都是二进制数据，但是在显示时都是以十六进制的形式显示
            buffer中的每一个元素的范围是从00 - ff  0 - 255
            00000000 - 11111111

            计算机中 一个0 或一个1 我们称为1位（bit）
            8bit = 1byte（字节）
            1024byte = 1kb
            1024kb = 1mb
            1024mb = 1gb
            1024gb = 1tb
            buffer中的一个元素，占用内存的一个字节
         - Buffer的大小一旦确定，则不能修改，buffer实际上是对底层内层的直接操作


         Buffer.form(str) 将以恶搞字符串转换为buffer
         Buffer.alloc(size) 创建一个指定大小的Buffer
         Buffer.allocUnsafe(size) 创建一个指定大小的Buffer，但是可能包含敏感数据
         buf.toString() 将缓冲区的数据转换成字符串
*/

var str = "Hello 华为云";

//将一个字符串保存到buffer文件中
var buf = Buffer.from(str);

console.log(buf.length);//占用内存的大小
console.log(str.length);//字符串的长度
console.log(buf);


//创建一个指定大小的buffer
//buffer构造函数都是不推荐使用的
// var buf2 = new Buffer(10);//10个字节的buffer
// console.log(buf2.length);

//创建一个10个字节的buffer
var buf3 = Buffer.alloc(10);
console.log(buf3);
//通过索引，来操作buf中的元素
buf3[0] = 88;
buf3[1] = 255;
buf3[2] = 0xaa;
// buf3[10]=15;
buf3[3] = 255;
console.log(buf3);
//只要数字在控制台或页面中输出一定是十进制
console.log(buf3[2]);
//转换为指定的进制数
console.log(buf3[2].toString(2));


for(var i = 0;i < buf3.length;i++) {
    console.log(buf3[i]);
}

//Buffer.allocUnsafe(size)创建一个指定大小的buffer，但是buffer中可能含有敏感数据
// var buf4 = Buffer.alloc(10);
var buf4 = Buffer.allocUnsafe(10);
console.log(buf4);




