// alert("ajax");

var btn = document.getElementById("btn");
btn.onclick = function () {
  // ajax底层四步走
  // 创建对象
  var xhr = null;
  if (window.XMLHttpRequest) {// 判断IE浏览器是否支持XMLHttpRequest
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  // 初始化请求参数  get方式请求，/ajax接口，true异步请求，false同步请求
  // xhr.open("get", "/ajax", true);
  xhr.open("post", "/ajax", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // 发送请求
  xhr.send();
  // 接收返回的数据
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        console.log(xhr.responseText);
      }
    }
  };
};
