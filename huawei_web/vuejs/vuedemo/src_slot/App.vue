<template>
  <div class="container">
    <div class="wrap">
      <!-- 3.使用组件标签 -->
      <!-- <Header :addTodo='addTodo' /> -->
      <!--给TodoHeader标签对象绑定addTodo事件加监听-->
      <!-- <Header @addTodo='addTodo' /> -->
      <Header ref="header" />

      <!-- <List
        :todos='todos'
        :deleteTodo='deleteTodo'
      /> -->
      <List :todos='todos' />
      <!-- <Footer
        :todos='todos'
        :deleteCompleteTodos='deleteCompleteTodos'
        :selectAllTodos='selectAllTodos'
      /> -->
      <Footer>
        <input
          type="checkbox"
          v-model="isAllTick"
          slot="checkAll"
        />
        <span slot="count">已完成{{completeSize}} / 全部{{todos.length}}</span>
        <button
          class="btn btn-danger"
          v-show="completeSize"
          @click='deleteCompleteTodos'
          itemtype=""
          slot="delete"
        >清除已完成任务</button>
      </Footer>
    </div>
  </div>
</template>
<!--
  绑定事件监听  ------订阅消息
  触发事件    ------发布消息
-->

<script>
// 1.引入组件
import PubSub from 'pubsub-js'
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

  computed: {
    completeSize () {
      return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
    },
    isAllTick: {
      get () {
        return this.completeSize === this.todos.length > 0
      },
      set (value) {// value是当前checkbox最新的值
        this.selectAllTodos(value)
      }
    }
  },
  // 执行异步代码
  mounted () {
    // 给<TodoHeader/>绑定addTodo事件监听
    // this.$on('addTodo', this.addTodo) // 给App绑定的监听，不对
    this.$refs.header.$on('addTodo', this.addTodo)

    // 订阅消息
    PubSub.subscribe('deleteTodo', (msg, index) => {
      this.deleteTodo(index)
    })
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

