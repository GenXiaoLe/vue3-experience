<template>
  <div>
    <!-- <FirstPage />
    <button @click="changeView">跳转路由</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
import FirstPage from './page/firstPage.vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'App',
  components: { FirstPage },
  setup () {
    const router = useRouter()
    const route = useRoute()
    const changeView = () => {
      router.push({
          path:'/count',
          query:{name:'阿强呀'}
      })
    }
    return {
        changeView
    }
  }
}
</script>
