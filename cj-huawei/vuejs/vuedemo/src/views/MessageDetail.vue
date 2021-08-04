<template>
  <div>
    <p>ID:{{$route.params.id}}</p>
    <ul>
      <li>id:{{$route.params.id}}</li>
      <li>title:{{detail.title}}</li>
      <li>content:{{detail.content}}</li>
    </ul>
  </div>
</template>

<script>
const messageDetails = [
  {
    id: 1,
    title: 'message001',
    content: 'message001 content .....'
  },
  {
    id: 2,
    title: 'message002',
    content: 'message002 content .....'
  },
  {
    id: 3,
    title: 'message003',
    content: 'message003 content .....'
  },
  {
    id: 4,
    title: 'message004',
    content: 'message004 content .....'
  }
]
export default {
  data () {
    return {
      // messageDetail: {
      //   id: '',
      //   title: '',
      //   content: ''
      // }
      detail: {}
    }
  },
  // mounted一个声明周期只执行一次
  mounted () {
    // this.messageDetails = messageDetails
    // 过滤函数返回来的是数组类型，
    // 得到的id有可能是文本，乘于1或者除以1得到id
    const id = this.$route.params.id * 1
    this.detail = messageDetails.find(detail => detail.id === id)
  },
  watch: {
    $route: function () {// 路由路径（param）发生了改变 value是$route
      const id = this.$route.params.id * 1
      this.detail = messageDetails.find(detail => detail.id === id)
    }
  },
}
</script>

<style>
</style>
