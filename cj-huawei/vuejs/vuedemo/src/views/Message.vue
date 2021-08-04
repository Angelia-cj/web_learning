<template>
  <div>
    <ul>
      <!-- 如果数据本身存在有特殊标识，如id，颗直接使用，不需要继续使用index -->
      <li
        v-for="message in messages"
        :key="message.id"
      ><a href="???">{{message.title}}</a>
        <!-- ${message.id} 通过路经参数获取数据，`` 是es6语法 拼串使用js方式实现-->
        <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
        <button @click="pushShow(message.id)">push查看</button>
        <button @click="replaceShow(message.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">回退</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messages: []
    }
  },

  mounted () {
    //  模拟ajax请求从后台获取数据
    setTimeout(() => {
      const messages = [
        {
          id: 1,
          title: 'message001',
        },
        {
          id: 2,
          title: 'message002',
        },
        {
          id: 3,
          title: 'message003',
        },
        {
          id: 4,
          title: 'message004',
        }
      ]
      this.messages = messages
    }, 1000);
  },

  methods: {
    pushShow (id) {
      this.$router.push(`/home/message/detail/${id}`)
    },
    replaceShow (id) {
      this.$router.push(`/home/message/detail/${id}`)
    }
  },

}
</script>

<style>
</style>
