/* 通过mutations间接更新state的多个方法的对象 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types.js'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopInfo,
  reqShopRatings,
  reqShopGoods,
  reqSearchShops
} from '../api'

export default {
  // 异步获取地址
  async getAddress ({ commit, state }) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, { address })
    }
  },
  // 异步获取食品分类列表
  async getCategorys ({ commit }) {
    // 发送异步ajax请求
    const result = await reqFoodCategorys()
    // 提交一个mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, { categorys })
    }
  },
  // 异步获取商家列表
  async getShops ({ commit, state }) {
    // 发送异步ajax请求
    const { longitude, latitude } = state
    const result = await reqShops(longitude, latitude)
    // 提交一个mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, { shops })
    }
  },
  // 同步记录用户信息
  recordUser ({ commit }, userInfo) {
    commit(RECEIVE_USER_INFO, { userInfo })
  },
  // 异步获取用户信息
  async getUserInfo ({ commit }) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, { userInfo })
    }
  },
  async logout ({ commit }) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },
  // 异步获取商家信息
  async getShopInfo ({ commit }, cb) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      info.score = 3.5
      commit(RECEIVE_INFO, { info })
      cb && cb()
    }
  },
  // 异步获取商家评价列表
  async getShopRatings ({ commit }, cb) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, { ratings })
      cb && cb()
    }
  },
  // 异步获取商家商品列表
  async getShopGoods ({ commit }, callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, { goods })
      // 数据更新了，通知一下组件
      // 如果组件中传递了接收消息的回调函数，数据更新后，调用回调通知调用的组件
      callback && callback()
    }
  },
  // 同步更新指定 food 的 count
  updateFoodCount ({ commit }, { food, isAdd }) {
    if (isAdd) { // 增加
      commit(INCREMENT_FOOD_COUNT, { food })
    } else { // 减少
      commit(DECREMENT_FOOD_COUNT, { food })
    }
  },
  // 清空购物车
  clearCart ({ commit }) {
    commit(CLEAR_CART)
  },
  // 异步搜索商家列表
  async searchShops ({ commit, state }, keyword) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShops(geohash, keyword)
    commit(RECEIVE_SEARCH_SHOPS, { searchShops: result.data })
  }
}
