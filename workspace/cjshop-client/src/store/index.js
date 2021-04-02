/*
  vuex最核心的管理对象store
*/
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

// 声明使用
Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state
})
