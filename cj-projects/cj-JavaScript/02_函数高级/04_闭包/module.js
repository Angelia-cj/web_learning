function myModule() {
    // 私有的数据，外部看不到
    var msg = 'Chang xm'

    //操作数据的函数
    function toUpper() {
        console.log('toUpper() ' + msg.toUpperCase());
    }

    function toLower() {
        console.log('toLower() ' + msg.toLowerCase());
    }
    // return toUpper //向外暴露函数 只能向外暴露一个函数
    // 向外暴露对象(给外部使用的方法)
    return {
        toUpper: toUpper,
        toLower: toLower
    }
}