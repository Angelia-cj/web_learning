/*
  模块化
      - 在Node中，一个js文件就是一个模块
      - 在Node中，每一个js文件中的js代码都是独立运行在一个函数中
        而不是全局作用域，所以一个模块中的变量和函数在其它模块中无法访问
*/

console.log("我是一个模块，我是module_1.js");

exports.x = "我是module_1.js中的x";

exports.y = "我是module_1.js中的y";
