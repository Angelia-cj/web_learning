/* 直接更新state的多个方法的对象 */
import Vue from 'vue'
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
  CLEAR_CART
} from './mutation-types.js'

export default {
  [RECEIVE_ADDRESS] (state, { address }) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, { categorys }) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, { shops }) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO] (state, { userInfo }) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },
  [RECEIVE_GOODS] (state, { goods }) {
    state.goods = goods
  },
  [RECEIVE_RATINGS] (state, { ratings }) {
    state.ratings = ratings
  },
  [RECEIVE_INFO] (state, { info }) {
    state.info = info
  },
  [INCREMENT_FOOD_COUNT] (state, { food }) {
    if (!food.count) { // 第一次增加时，没有count
      // food.count = 1 添加count属性，并指定位1
      // 问题: 新添加的属性没有数据劫持 ==> 数据绑定 ==> 更新了数据但界面不变
      Vue.set(food, 'count', 1) // 给有数据绑定的对象添加指定属性名和值的属性(有绑定)  对象 属性名 属性值
      state.shopCart.push(food) // 添加到购物车shopCart
    } else { // 有count
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT] (state, { food }) {
    if (food.count) { // count有值才减少1
      food.count--
      if (food.count === 0) { // 如果数量减为0,从购物车中移除
        // 将food从shopCart中移除
        state.shopCart.splice(state.shopCart.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART] (state) {
    // 将所有 food 的 count 置为 0
    // eslint-disable-next-line no-return-assign
    state.shopCart.forEach(food => food.count = 0)
    // 将购物车重置为空数组
    state.shopCart = []
  }
}
