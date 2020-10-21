/*
 * vuex的核心管理对象模块
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 状态对象
const state = { // 初始化状态
  count: 0
}
// 包含多个更新state函数的对象
const mutations = {
  // 增加的mutation
  INCREMENT (state) {
    state.count++
  },
  // 减少的mutation
  DECREMENT (state) {
    state.count--
  }
}

// 包含对各对应事件回调函数的对象
const actions = {
  // 增加的action
  increment ({ commit }) {
    // 提交增加的mutation
    commit('INCREMENT')
  },
  // 减少到decrement
  decrement ({ commit }) {
    commit('DECREMENT')
  },
  // 带条件的action
  incrementIfOdd ({ commit, state }) {
    if (state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },
  // 异步的action
  incrementAsync ({ commit }) {
    // 再action中直接就可以执行异步代码
    setTimeout(() => {
      // 提交增加的mutation
      commit('INCREMENT')
    }, 1000)
  }
}

// 包含多个getter计算属性函数的对象
const getters = {
  evenOrOdd (state) { // 不需要调用，只需要读取属性值
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

// 创建vuex对象
export default new Vuex.Store({
  state, // 状态
  mutations, // 包含多个更新state函数的对象
  actions, // 包含对各对应事件回调函数的对象
  getters // 包含多个getter计算属性函数的对象
})
