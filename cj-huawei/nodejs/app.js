//引入其他的模块

/* 
    在Node中，通过require()函数来引入外部的模块
      require()可以传递一个文件的路径作为参数，node将会自动根据该路径来引入外部模块
      这里的路径，如果使用相对路径，必须  以....或....开头

      使用require()引入模块以后，该函数会但会一个对象，这个对象代表的是引入的模块

      我们使用使用require()引入外部模块时，使用的就是模块标识，我们可以通过模块标识来找到指定的模块
      - 模块分为两大类
        核心模块
          - 由node引擎提供的模块
          - 核心模块的标识就是，模块的名字
        文件模块
          - 由用户自己创建的模块
          - 文件模块的标识就是文件的路径（绝对路径）
            相对路径使用 .或..开头
*/

// var md = require("./module_1");

// import { add } from "./math";
// var math = require("./math");
// var fs = require("fs");
// console.log(md);
// console.log(math.add(12, 34));
// console.log(fs);

var hello = require("./module_4");
console.log(hello.name);
console.log(hello.age);
hello.sayName();
