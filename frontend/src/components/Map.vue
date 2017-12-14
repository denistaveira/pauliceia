<template>
  <div></div>
</template>

<script>
  /* global ol */

  import { mapState } from 'vuex'

  export default {
    name: 'Map',
    data () {
      return {
        olmap: null,
        view: new ol.View({
          projection: 'EPSG:4326',
          center: [-46.63576816, -23.54308645],
          zoom: 14.98
        }),
      }
    },
    computed: mapState({
      mapLayers: state => Object.values(state.mapLayers)
    }),
    mounted () {
      this.olmap = new ol.Map({
        target: this.$el,
        layers: this.mapLayers,
        view: this.view
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "~openlayers/css/ol.css";
</style>
