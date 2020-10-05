<template>
  <div>
    <p>home</p>
    <button @click="changeView">跳转路由</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup () {
    const router = useRouter()
    const changeView = () => {
      router.push({
          path:'/count',
          query:{name:'count'}
      })
    }
    return {
        changeView
    }
  }
}
</script>