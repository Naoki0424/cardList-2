<template>
  <div class="container">
    <!-- ヘッダー -->
    <headder></headder>
    <maincontent></maincontent>
  </div>
</template>

<script>
import headder from './headder.vue'
import mainContent from './mainContent.vue'
// import axios from 'axios'
export default {
  name: 'container',
  components: {
    'headder': headder,
    'maincontent': mainContent
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
}
</style>
