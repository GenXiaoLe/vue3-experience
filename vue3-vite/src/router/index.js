/*
 * @Author: your name
 * @Date: 2020-09-30 11:47:39
 * @LastEditTime: 2020-10-20 15:04:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-vite/src/router/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../page/home.vue'
import Count from '../page/firstPage.vue'
import Test from '../page/test.vue'

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
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router