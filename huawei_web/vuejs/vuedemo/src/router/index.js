/**
 * 路由器模块
 * 映射成路由
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'

import News from '../views/News.vue'
import Message from '../views/Message.vue'

import MessageDetail from '../views/MessageDetail.vue'

Vue.use(VueRouter)

export default new VueRouter({
  // n个路由
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home', // path最左侧的 / 永远代表根路由，不对
      component: Home,
      children: [
        {
          // path: '/home/news', 简写如下
          path: 'news',  // 简写
          component: News,
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              path: '/home/message/detail/:id',  // :id  占位符，获取动态路由
              component: MessageDetail,
            }
          ]
        },
        {
          path: '/',
          redirect: '/home/news'  // 重定向请求about，默认请求和显示about
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'  // 重定向请求about，默认请求和显示about
    }
  ]
})
