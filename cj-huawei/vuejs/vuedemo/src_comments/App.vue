<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment='addComment' />
      <List
        :comments='comments'
        :deleteComment='deleteComment'
      /> <!-- deleteComment逐层传递 -->

    </div>
  </div>
</template>

<script>
import Add from './components/Add'
import List from './components/List'
export default {
  data () {
    return {
      comments: [ //数据在哪个组件，更新数据的行为（方法）就应该定义在那个组件
        {
          name: 'Bob',
          content: 'Vue 还不错。'
        },
        {
          name: 'Tom',
          content: 'Vue 有点困难。'
        },
        {
          name: 'Bob',
          content: 'Vue 非常简单。'
        }
      ]
    }
  },
  components: {
    Add,
    List
  },
  methods: {
    //添加评论
    addComment (comment) {
      this.comments.unshift(comment)
    },
    //删除指定下标评论
    deleteComment (index) {
      this.comments.splice(index, 1)
    }
  }
}
</script>

<style>
</style>
