//声明全局变量

var index = 0, //当前显示图片的索引，默认值为0
  // prev = byId(prev);
  // next = byId(next);
  pics = byId('banner').getElementsByTagName('div');//获取每一张图片
num = pics.length;//获取图片的个数
  console.log(num);


// 封装getElementById()
function byId (id) {
  return typeof (id) == 'string' ? document.getElementById(id) : id;
}

/* 封装通用事件绑定方法
    element绑定时间的DOM元素
    事件名
    事件处理程序
*/
function addHandler (element, type, handler) {
  // 非IE浏览器
  if (element.addEventListener) {
    element.addEventListener(type, handler, true);
  } else if (element.attachEvent) {//IE浏览器支持DOM2级
    element.attachEvent('on' + type, handler);
    // IE浏览器不支持DOM2级
  } else {
    element['on' + type] = handler;
  }
}

// 点击下一张按钮显示下一张图片
addHandler(next, 'click', function () { 
  index++;
  if (index >= num) index = 0;
})


