<template>
  <div>
    <h2>This is a Vue form</h2>
    <h3>Add values to the chart and grid below</h3>
    <label for="xaxis">X axis</label>
    <input id="xaxis" type="number" v-model="xxx">
    <label for="yaxis">Y axis</label>
    <input id="yaxis" type="number" v-model="yyy">
    <button v-on:click="$emit('vueaddvalues', {x: xxx, y: yyy})">Add</button>
  </div>
</template>
<script>
    export default {
        props: ["msg"]
    };
</script>