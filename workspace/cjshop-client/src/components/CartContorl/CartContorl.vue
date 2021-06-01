<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-minus_circle" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-show="food.count">{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click.stop="updateFoodCount(true)"></div>
  </div>
</template>

<script>
export default {
  props: {
    food: Object
  },
  methods: {
    // 更新 food 的 count
    updateFoodCount (isAdd) {
      const { food } = this
      // 通知 action 更新
      this.$store.dispatch('updateFoodCount', { food, isAdd })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.cartcontrol
  font-size 0
  .cart-decrease
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color rgb(0, 160, 220)
  .icon-minus_circle
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color $green
    &.move-enter-active, &.move-leave-active
      transition all 0.3s
    &.move-enter, &.move-leave-to
      opacity 0
      transform translateX(15px) rotate(180deg)
  .cart-count
    display inline-block
    vertical-align top
    width 12px
    padding-top 6px
    line-height 24px
    text-align center
    font-size 12px
    color rgb(147, 153, 159)
  .icon-add_circle
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color $green
// 阿里字体图标设置*/
.iconfont
  font-family 'iconfont' !important
  font-size 16px
  font-style normal
  -webkit-font-smoothing antialiased
  -webkit-text-stroke-width 0.2px
  -moz-osx-font-smoothing grayscale
</style>
