<template>
  <div>
    <p>home</p>
    <div>
      <h3>vuex</h3>
      <p>{{count}}</p>
      <button @click="addCount">增加count</button>
    </div>
    <button @click="changeView">跳转路由</button>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup () {
    const { ctx } = getCurrentInstance()
    const router = useRouter()
    const store = useStore()
    const count = ref(store.state.Count.count)

    console.log(ctx, '---', store)
    const changeView = () => {
      router.push({
          path:'/count',
          query:{name:'count'}
      })
    }


    const addCount = () => {
      store.commit('ADD_NUMBER')
      count.value = store.state.Count.count
    }
    return {
        changeView,
        addCount,
        count
    }
  }
}
</script>