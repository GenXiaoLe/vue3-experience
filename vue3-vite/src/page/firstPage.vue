<template>
  <div>
    <p>count: {{state.count}}</p>
    <p>doubleCount: {{doubleCount}}</p>
    <p>number: {{number}}</p>
    <div><button @click="add">add</button></div>
  </div>

  <h3>体验一把Fragment</h3>

  <div>
    <h3>类react传送门Teleport</h3>
    <p><button @click="isOpen = !isOpen">打开/关闭弹窗</button></p>
    <Teleport to="#app">
      <div v-if="isOpen">一个传送门弹窗!!!!!!</div>
    </Teleport>
  </div>
</template>

<script>
import { reactive, computed, ref } from 'vue'

export default {
  name: 'App',
  setup () {
    const state = reactive({
      count: 1
    })

    const number = ref(0)

    const doubleCount = computed(() => state.count * 2)

    function add () {
      state.count++
      number.value += 10
    }

    const isOpen = ref(false)

    return { state, doubleCount, add, number, isOpen }
  }
}
</script>
