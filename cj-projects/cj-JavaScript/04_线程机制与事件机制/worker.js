// 斐波那契数列
function fibonacci(n) {
    return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(this);
var onmessage = function(event) {
    var number = event.data
    console.log('分线程向主线程发送数据：' + number);

    // 计算
    var result = fibonacci(number)
    postMessage(result)
    console.log('分线程向主线程返回数据：' + result);

    // alert(result) alert是 window 的方法。在分线程不能调用
    // 分线程中的全局
}