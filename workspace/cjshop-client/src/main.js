// 应用入口js

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  // components: { App },
  // template: '<App/>',
  router, // 使用vue-router
  store // 使用上vuex
})
