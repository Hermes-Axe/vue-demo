import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import My from '@/pages/My'
import Order from '@/pages/Order'
import Shop from '@/pages/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/',
      redirect: '/my'
    }
  ]
})
