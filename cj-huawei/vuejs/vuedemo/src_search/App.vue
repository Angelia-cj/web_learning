<template>
  <div class="container">
    <Search></Search>
    <UsersMian></UsersMian>
  </div>
</template>

<script>
import Search from './components/Search'
import Main from './components/Main'

export default {
  //映射成标签
  components: {
    Search,
    UsersMian: Main
  }

}
</script>

<style scoped>
</style>
