// // alert("ajax");

// var btn = document.getElementById("btn");
// btn.onclick = function () {
//   // alert("ajax");
//   // ajax底层四步走
//   // 创建对象
//   var xhr = null;
//   // 判断IE浏览器是否支持XMLHttpRequest
//   if (window.XMLHttpRequest) {
//     xhr = new XMLHttpRequest();
//   } else if (window.ActiveXObject) {
//     xhr = new ActiveXObject("Microsoft.XMLHTTP");
//   }
//   // 初始化请求参数  get方式请求，/ajax接口，true异步请求，false同步请求
//   // xhr.open("get", "/ajax", true);

//   xhr.open("post", "http://localhost:3000/ajax", true);
//   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   // 发送请求
//   xhr.send();
//   // 接收返回的数据
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4) {
//       if (xhr.status == 200) {
//         console.log(xhr.responseText);
//       }
//     }
//   };
// };
