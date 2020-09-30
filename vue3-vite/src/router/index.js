import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../page/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    component: Home
  }
]

const Router = new VueRouter({
  routes
})

export default Router