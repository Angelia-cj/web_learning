// alert("login");

// 登录页面的逻辑js代码

// 获取到登录按钮
var btn = document.getElementById("btn");
var account = "";
var pwd = "";

// 在btn上的点击上获取到相应的节点
btn.onclick = function () {
  account = document.getElementById("account").value; //获取账号姓名
  pwd = document.getElementById("pwd").value; //获取账号密码

  ajax({
    type: "post",
    url: "/login",
    data: {
      account: account,
      pwd: pwd,
    },
    success: function (data) {
      alert(data);
    },
  });
};

function ajax(opt) {
  // 请求时，默认传的一些参数。实际没有给参数时，直接使用默认参数
  var defaultParam = {
    type: "get",
    url: "#", //默认空值，
    data: {}, //默认空对象
    async: true, //默认是异步参数
    success: function () {}, //请求成功时，把服务器端请求的数据返回到页面上
  };

  // 通过循环使用默认参数值
  for (var key in opt) {
    //给默认参数赋值  用用户给的参数覆盖默认参数
    defaultParam[key] = opt[key];
  }

  // AJAX方法的四步走：
  // 第一步，首先new一个XMLHttpRequest对象
  var xhr = null;
  if (window.XMLHttpRequest) {
    //用来判断低版本的ie5，ie6  兼容
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  // url传过来的值是object对象，需要转换成字符串类型
  var paramStr = "";
  for (var k in defaultParam.data) {
    // 把object类型的参数进行字符串拼接
    paramStr += k + "=" + defaultParam.data[k] + "&"; //使用&符号将不同的对象进行分隔；两组之间的拼接符号
  }
  // 截掉最后一个拼接符
  paramStr = paramStr.substr(0, paramStr.length - 1);
  console.log(paramStr);//验证参数拼接是否正确

  // 第二步，调用对象的初始化
  if (defaultParam.type == "get") {
    // 处理参数的放置位置。如果是get请求，参数放在url后面；
    xhr.open(
      defaultParam.type,
      defaultParam.url + "?" + paramStr,
      defaultParam.async
    );
    //第三步，发送数据
    xhr.send();
  } else {
    // 如果是post请求，参数放置在请求体中
    xhr.open(defaultParam.type, defaultParam.url, defaultParam.async); //post请求
    // 用来设置请求头 post
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(paramStr);
  }

  // 第四步，监听返回的数据
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        defaultParam.success(xhr.responseText);
      }
    }
  };
}
