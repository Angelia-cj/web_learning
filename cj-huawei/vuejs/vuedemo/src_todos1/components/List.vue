<template>
  <ul class="main">
    <Item
      v-for="(todo ,index) in todos"
      :key="index"
      :todo='todo'
      :index='index'
      :deleteTodo='deleteTodo'
    />
  </ul>
</template>

<script>
import Item from './Item.vue'
export default {
  components: {
    Item
  },
  props: {
    // 指定属性值和属性名的类型
    todos: Array,
    deleteTodo: Function
  }
}
</script>

<style>
/* main */
.main {
  margin-left: 0px;
  border: 1px solid #dddddd;
  border-radius: 2px;
  padding: 0px;
}
.empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #dddddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
