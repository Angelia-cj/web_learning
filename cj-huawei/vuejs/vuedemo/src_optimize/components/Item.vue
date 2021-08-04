<template>
  <li
    @mouseenter="handleEnter(true)"
    @mouseleave="handleEnter(false)"
    :style="{background: bgColor}"
  >
    <label><input
        type="checkbox"
        v-model="todo.complete"
      /><span>{{todo.title}}</span></label>
    <button
      class="btn btn-danger"
      v-if="isShow"
      @click="deleteItem"
    >删除</button>
  </li>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  props: {
    todo: Object,
    index: Number,
    // deleteTodo: Function
  },
  data () {
    return {
      bgColor: 'write', // 默认背景颜色
      isShow: false  // 默认按钮是否显示
    }
  },
  methods: {
    handleEnter (isEnter) {
      // console.log(isEnter);
      if (isEnter) {
        this.bgColor = '#aaaaaa'
        this.isShow = true
      } else {
        this.bgColor = 'write'
        this.isShow = false
      }
    },
    deleteItem () {
      const { todo, index, deleteTodo } = this //从props中取出数据
      if (window.confirm(`确认删除${todo.title}吗？`)) {
        // deleteTodo(index)
        //发布消息
        PubSub.publish('deleteTodo', index)
      }
    }
  },
}
</script>

<style>
/* item */
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #dddddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 8px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li::before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
</style>
