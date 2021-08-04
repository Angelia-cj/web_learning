<template>
  <div>
    <p>click {{count}} times, count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment of odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
// mapGetters()返回值
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    /*  evenOrOdd () { // this代表组件对象
      return this.$store.getters.evenOrOdd
      // return this.count % 2 === 0 ? '偶数' : '奇数'
    },
    count () {
      return this.$store.state.count
    }, */
    ...mapState(['count']), // mapState()返回值：{count(){return this.$store.state['count]}}
    ...mapGetters(['evenOrOdd']) // mapGetters()返回值：{evenOrOdd() {return this.$store.getters['evenOrOdd]}}
  },

  methods: {
    ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
  }
  /* methods: {
    // 增加
    increment () {
      // const count = this.count
      // this.count = count + 1
      // 通知vuex去增加
      this.$store.dispatch('increment') // 触发store中对应的action调用
    },
    // 减少
    decrement () {
      // const count = this.count
      // this.count = count - 1
      this.$store.dispatch('decrement')
    },
    // 如果是奇数才增加
    incrementIfOdd () {
      // const count = this.count
      // if (count % 2 === 1) {
      //   this.count = count + 1
      // }
      this.$store.dispatch('incrementIfOdd')
    },
    // 过一秒才增加
    incrementAsync () {
      // setTimeout(() => {
      //   const count = this.count
      //   this.count = count + 1
      // }, 1000)
      this.$store.dispatch('incrementAsync')
    }
  } */
}
</script>

<style>
</style>
