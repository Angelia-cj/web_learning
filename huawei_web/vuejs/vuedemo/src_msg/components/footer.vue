<template>
  <div class="footer">
    <label><input
        type="checkbox"
        v-model="isAllTick"
      /></label>
    <span><span>已完成{{completeSize}}</span> / 全部{{todos.length}}</span>
    <button
      class="btn btn-danger"
      v-show="completeSize"
      @click='deleteCompleteTodos'
    >清除已完成任务</button>
  </div>
</template> 

<script>
export default {
  props: {
    todos: Array,
    selectAllTodos: Function,
    deleteCompleteTodos: Function
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
}
</script>

<style>
/* footer */
.footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.footer button {
  float: right;
  margin-top: 5px;
}
</style>
