import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // state 是什么？哪里来的？
    add: (state, payload = 1) => {
      state.count += payload
    }
  },
  actions: {
    // commit 哪里来的？为什么actions的函数的第一个参数是对象？并且对象里有commit？
    // payload从哪里来，为什么外面dispatch的第二个参数会到这里来？
    asyncAdd: ({commit}, payload) => {
      setTimeout(() => {
        commit('add', payload)
      }, 1000)
    }
  },
  getters: {
    doubleCount: (state) => {
      return state.count * 2
    }
  },
  modules: {}
})
