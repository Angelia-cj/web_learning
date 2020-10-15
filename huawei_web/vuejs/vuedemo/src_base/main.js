// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/**
 *  入口js：创建vue实例
 */
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', // 1.引入
  components: { App }, // 2.映射组件标签
  template: '<App/>' // 3.使用组件标签
})
