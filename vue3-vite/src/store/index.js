import { createStore } from 'vuex'
import Count from './model/count.js'
import getters from './getters.js'

const store = createStore({
  modules: {
    Count
  },
  getters
})

export default store