/**
 * 路由器模块对象
*/

import Vue from 'vue'
import VueRouter from 'vue-router'

// import Msite from '../pages/Msite/Msite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'
// import Login from '../pages/Login/Login.vue'
// import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'

// 一级路由组件懒加载使用到import函数
const Msite = () => import('../pages/Msite/Msite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
const Login = () => import('../pages/Login/Login.vue')
const Shop = () => import('../pages/Shop/Shop.vue')
// const ShopGoods = () => import('../pages/ShopGoods/ShopGoods.vue')
// const ShopRatings = () => import('../pages/ShopRatings/ShopRatings.vue')
// const ShopInfo = () => import('../pages/ShopInfo/ShopInfo.vue')

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/msite',
      component: Msite, // 返回路由组件的函数，只有执行此函数才会加载路由组件，这个函数在请求对应的函数时才会执行
      meta: { // 添加源路由，控制显示谁
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: { // 添加源路由，控制显示谁
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: { // 添加源路由，控制显示谁
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: { // 添加源路由，控制显示谁
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    }

  ]
})
