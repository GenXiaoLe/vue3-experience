<!--
 * @Author: your name
 * @Date: 2020-09-30 11:48:55
 * @LastEditTime: 2020-10-19 17:44:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-vite/src/page/home.vue
-->
<template>
  <div>
    <p>home</p>
    <div>
      <h3>vuex</h3>
      <p>{{count}}</p>
      <button @click="addCount">增加count</button>
    </div>
    <div>
      <button @click="log">打印相关</button>
      <button @click="setLog">设置打印</button>
      <button @click="getLog">获取打印</button>
      <p>{{logText}}</p>
    </div>
    <button @click="changeView">跳转路由</button>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { logger, errorText, setLogger, getLogger } from '../utils/logger'

export default {
  setup () {
    const { ctx } = getCurrentInstance()
    const router = useRouter()
    const store = useStore()
    const count = ref(store.state.Count.count)

    const logText = ref('')

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

    const log = () => {
      logger('打印一个log', 'blue')
    }

    const setLog = () => {
      const texts = {
        typeDesc: '服务资源加载错误',
        originDesc: '获取资源微服务名称不能为空',
        suggestDesc: '添加资源为服务的名称',
      }
      setLogger(texts)
    }

    const getLog = () => {
      const texts = {
        typeDesc: '服务资源加载错误',
        originDesc: '获取资源微服务名称不能为空',
        suggestDesc: '添加资源为服务的名称',
      }
      logger(errorText(texts), 'red')
      setLogger(texts)
      // const texts = getLogger()
      // const text = texts.find(item => item.type == 1)

      // if (text) {
      //   logText.value = text.text
      //   logger(text.text, 'red')
      // }
    }

    return {
        changeView,
        addCount,
        count,
        setLog,
        getLog,
        log,
        logText
    }
  }
}
</script>