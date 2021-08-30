// 1. 实现插件，挂在到$store里
// 2. 实现我们的Store

let Vue

class Store {
  constructor(options) {
    this._vm = new Vue({
      data: {
        $$state: options.state
      }
    })

    this._mutations = options.mutations
    this._actions = options.actions

    this.getters = {
      doubleCount: {}
    }

    options.getters && this.handleGetters(options.getters)
  }

  handleGetters = (getters) => {
    Object.keys(getters).map(key => {
      Object.defineProperty(this.getters, key, {
        get: () => getters[key](this.state)
      })
    })
  }

  get state() {
    return this._vm._data.$$state
  }

  set state(v) {
    console.error('不让你set state')
  }

  commit = (type, payload) => {
    const entry = this._mutations[type]
    if (!entry) {
      console.error('commit type 不对')
    }
    entry(this.state, payload)
  }

  dispatch = (type, payload) => {
    const entry = this._actions[type]
    if (!entry) {
      console.error('dispatch type 不对')
    }
    entry(this, payload)
  }
}

const install = (_Vue) => {
  Vue = _Vue

  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default {Store, install}
