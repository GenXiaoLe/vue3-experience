import { createRouter, createWebHistory } from 'vue-router'

import Home from '../page/home.vue'
import Count from '../page/firstPage.vue'

const routes = [
  {
    path: '/',
    name: '首页',
    component: Home
  },
  {
    path: '/count',
    name: '计数页',
    component: Count
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router