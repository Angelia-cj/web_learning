/*
*  通过npm下载的包都放在node_modules文件夹中
*   我们可以通过npm下载的包，直接通过包名引入即可
*
*   node在使用模块名字来引入模块时，它会首先在当前目录的node_modules中寻找是否含有该模块
*       如果有则直接使用，如果没有则去上一级目录的node_modules中寻找
*       如果有则直接使用，如果没有则再去上一级目录中寻找，直到找到为止
*       直到找到磁盘的根目录，如果依然没有，则报错
*/


var math=require('../node_modules/math');
console.log(math.add(23,2));