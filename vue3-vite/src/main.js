import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index.js'

const app = createApp(App)

// 注册路由 注意：一定要在mount之前注册
app.use(router)

app.mount('#app')
