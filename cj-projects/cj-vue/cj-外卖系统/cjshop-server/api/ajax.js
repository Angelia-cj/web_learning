/*
  ajax请求函数模式
*/
const axios = require('axios')
const { response } = require('express')

module.exports = function ajax (url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise

    if (type === 'GET') {
      //准备url query参数数据

      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }

    promise.then(response => {
      // 返货成功的回调函数
      resolve(response.data)
    })

      .catch(error => {
        // 返回失败的回调函数
        reject(error)
      })
  })
}