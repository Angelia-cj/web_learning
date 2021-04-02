<template>
  <!-- 应用根组件vue -->
  <div id="app">
    <router-view />
    <!-- $route.meta.showFooter: $route代表当前路由 -->
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// import { reqFoodTypes } from './api'
export default {
  async mounted () {
    /*  const result = await reqFoodTypes()
     console.log(result) */
    // this.$store.dispatch('getAddress')
    this.$store.dispatch('getCategorys')
  },
  /* mounted () {
    reqFoodTypes().then(response => {
      console.log(response.data)longitude, latitude
    })
  }, */
  components: {
    FooterGuide
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.app
  width 100%
  height 100%
  background #f5f5f5
</style>
<!--<style></style>-->
