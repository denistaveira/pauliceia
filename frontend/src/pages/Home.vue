<template>
  <ol-map class="fullpage"></ol-map>
</template>

<script>
  import OlMap from '../components/Map.vue'

  export default {
    components: {
      OlMap
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/style";

  .fullpage {
    flex-grow: 1;
    overflow: hidden;
  }
</style>
