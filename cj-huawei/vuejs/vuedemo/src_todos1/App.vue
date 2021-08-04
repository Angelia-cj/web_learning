<template>
  <div class="container">
    <div class="wrap">
      <!-- 3.使用组件标签 -->
      <Header :addTodo='addTodo' />
      <List
        :todos='todos'
        :deleteTodo='deleteTodo'
      />
      <Footer
        :todos='todos'
        :deleteCompleteTodos='deleteCompleteTodos'
        :selectAllTodos='selectAllTodos'
      />
    </div>
  </div>
</template>

<script>
// 1.引入组件
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/footer.vue'

export default {
  data () {
    return {
      // 从localStorage读取todos
      // JSON.parse将字符串解析成数组
      todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
      // todos: [
      //   { title: '吃饭', complete: false },
      //   { title: '睡觉', complete: true },
      //   { title: '看电视', complete: false },
      // ]
    }
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    // 删除所有选择的todo
    deleteCompleteTodos () {
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    //全选或者全不选 tick打勾
    selectAllTodos (tick) {
      this.todos.forEach(todo => todo.complete = tick)
    }
  },

  // 深度监视
  watch: {
    todos: {
      deep: true, //深度监视
      handler: function (value) {
        // 将todos最新的值的json数据，保存到localStorage
        window.localStorage.setItem('todos_key', JSON.stringify(value))
      }
    }
  },
  // 2.映射成标签
  components: {
    Header,
    List,
    Footer
  }
}
</script>

<style>
/* app */
.container {
  width: 600px;
  margin: 0 auto;
}
.container .wrap {
  padding: 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;
}
</style>

