<template>
  <div>
    <h1>My Vue Web Component</h1>
    <div>{{ msg }}</div>
    <input v-on:input="$emit('vueevent', {value: $event.target.value, msg: msg})">
  </div>
</template>
<script>
  export default {
    props: ['msg']
  }
</script>