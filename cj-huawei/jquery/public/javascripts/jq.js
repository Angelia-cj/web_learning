// alert("我是jq");

// 所有的页面已经渲染好之后再改变document的节点
// $(document).ready(function () {
//   $("#name").html("classroom");
// });

$(function () {
  $("#name").html("classroom");

  /*
  $.get('/ajax', function () {
    console.log(huawei);
  }, 'script')
  */

  $.ajax({
    url: "/ajax",
    dataType: "script",
    success: function () {
      console.log(huawei);
    },
  });
});
