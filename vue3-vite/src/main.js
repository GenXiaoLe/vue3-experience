import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index.js'
import store from './store/index.js'

const app = createApp(App)

// 注册路由 注意：一定要在mount之前注册
app.use(router)

// 注册vuex
app.use(store)

app.mount('#app')
