//exports.name = "孙悟空";
// exports.name = "孙悟空";
// exports.age = 18;
// exports.sayName = function () {
//   console.log("我是孙悟空~~~~");
// };

/*
  exports和module.exports
    - 通过exports只能使用.的方式来向外部暴露内部变量
      exports.xxx = xxx
      
    - 通过module.exports既可以通过.的形式，也可以直接赋值
      module.exports.xxx = xxx
      module.exports = {}

*/

module.exports = {
  name: "猪八戒",
  age: 24,
  sayName: function () {
    console.log("我是猪八戒~~~~");
  },
};
