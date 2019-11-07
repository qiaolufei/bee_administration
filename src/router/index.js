import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import index from '@/pages/index'
import vip from '@/pages/vip'
import change from '@/pages/change'
import suggest from '@/pages/suggest'
import setMeal from '@/pages/setMeal'
import user from '@/pages/user'
import finance from '@/pages/finance'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip
    },
    {
      path: '/change',
      name: 'change',
      component: change
    },
    {
      path: '/suggest',
      name: 'suggest',
      component: suggest
    },
    {
      path: '/setMeal',
      name: 'setMeal',
      component: setMeal
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/finance',
      name: 'finance',
      component: finance
    }
  ]
})
