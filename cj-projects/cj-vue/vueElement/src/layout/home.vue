<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>功能链接</h2>
    <ul>
      <li>
        <router-view />
        <Eltable v-show="$route.meta.showFooter" />
      </li>
    </ul>
  </div>
</template>

<script>
import Eltable from '@/pages/element/eltable/Eltable.vue'

export default {
  name: 'home',
  components:{
    Eltable
  },
  data () {
    return {
      msg: 'vue + element 开发页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
