<template>
  <div>
    <h2 v-if="firstView">输入用户名搜索</h2> <!--第一种情况-->
    <h2 v-if="loading">LOADING......</h2> <!--第二种情况-->
    <h2 v-if="errorMsg">{{ errorMsg }}</h2> <!--第三种情况-->
    <div class="row"> <!--第四种情况-->
      <div class="card" v-for="(user,index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{ user.name }}</p>
      </div>
    </div>
  </div>

</template>

<script>
import PubSub from 'pubsub-js'
import axios from 'axios'
export default {
  data () {
    return {
      // 搜索的整个过程有四种状态：搜索前(firstView)，搜索中(loading)，搜索成功(users)，搜索失败(errorMsg)
      firstView: true,
      loading: false,
      users: [], // [{url: '', avatar_url: '',name: ''}]
      errorMsg: ''
    }
  },
  mounted () {
    // 是否在次发ajax请求，  不是，而是在点击search之后
    // 订阅搜索的消息
    PubSub.subscribe('search',(msg,searchName) => { // 说明需要发ajax请求进行搜索
      // 更新状态（请求中）
      this.firstView = false
      this.loading = true
      this.users = []
      this.errorMsg = ''

      // 发ajax请求
      const url = ` https://api.github.com/search/users?q=${searchName}`
      axios.get(url).then(response => {
        // const result = response.data
        // 成功，更新状态（成功）
        this.loading = false
        this.users = response.data.items.map(item => ({
          url: item.html_url,
          avatar_url: item.avatar_url,
          name: item.login
        }))

      }).catch( error => {
        // 失败，更新状态（失败）
          this.loading = false
          this.errorMsg = '请求失败'
        }
      )
    })
  }
}
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>
