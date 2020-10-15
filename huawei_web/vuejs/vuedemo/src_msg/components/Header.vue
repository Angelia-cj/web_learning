<template>
  <div class="header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter='addItem'
    >
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  methods: {
    addItem () {
      // 1.检查输入的合法性
      const title = this.title.trim()
      if (!title) {
        alert('必须输入')
        return
      }
      // 2.根据输入生成一个todo对象
      const todo = {
        title,
        complete: false
      }
      // 3.添加到todos
      // this.addTodo(todo)
      // 触发自定义事件：addTodo
      this.$emit('addTodo', todo)
      // 4.清除数据
      this.title = ''
    }
  },
  props: {
    // addTodo: Function
  }
}
</script>

<style>
/* header */
.header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 4px 7px;
}
.header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
