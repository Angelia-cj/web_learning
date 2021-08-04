<template>
  <div class="footer">
    <label>
      <!-- <input type="checkbox" v-model="isAllTick" /> -->
      <slot name="checkAll"></slot>
    </label>
    <span>
      <!-- <span>已完成{{completeSize}} / 全部{{todos.length}}</span> -->
      <slot name="count"></slot>
    </span>
    <!-- <button class="btn btn-danger" v-show="completeSize"  @click='deleteCompleteTodos' itemtype="">清除已完成任务</button> -->
    <slot name="delete"></slot>
  </div>
</template>

<script>
export default {
  props: {
    // todos: Array,
    // selectAllTodos: Function,
    // deleteCompleteTodos: Function
  },
  computed: {

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
