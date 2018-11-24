<template>
  <VueWC msg="Outside Msg"></VueWC>
</template>

<script>
import VueWC from './components/VueWC.vue'

export default {
  name: 'app',
  components: {
    VueWC
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
