/* global ol */

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueI18n from 'vue-i18n'
import Router from 'vue-router'

import App from '../components/App.vue'
import router from '../pages'
import locale from '../locale'

Vue.use(VueAxios, axios)
Vue.use(VueI18n)
Vue.use(Router)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    mapLayers: {
      osm: new ol.layer.Tile({
        source: new ol.source.OSM(),
        visible: true,
        name: 'openstreetmap'
      })
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({ // eslint-disable-line
  el: '#app',
  router,
  store,
  i18n: new VueI18n({
    locale: 'pt-BR',
    // locale: 'en',
    messages: locale
  }),
  template: '<App/>',
  components: {
    App
  }
})
