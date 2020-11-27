<template>
  <div id="app">
    <container></container>
  </div>
</template>

<script>
import container from './components/container.vue'
export default {
  name: 'app',
  components: {
    'container': container
  }
}
</script>

<style>
body {
  /* background-color: #DDD; */
}
</style>
