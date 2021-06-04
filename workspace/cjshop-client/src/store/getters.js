/* 包含多个基于state的getter计算属性的对象 */
export default {
  // 总数量
  totalCount (state) {
    return state.shopCart.reduce((preTotal, food) => { // reduce统计
      return preTotal + food.count
    }, 0)
  },
  // 总价格
  totalPrice (state) {
    return state.shopCart.reduce((preTotal, food) => {
      return preTotal + food.count * food.price
    }, 0)
  }
}
