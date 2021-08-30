<template>
  <div id="app">
    <h1>{{ $store.state.count }}</h1>
    <h2>{{ $store.getters.doubleCount }}</h2>
    <button @click="$store.commit('add')">+1</button>
    <button @click="$store.dispatch('asyncAdd', 2)">async +2</button>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
