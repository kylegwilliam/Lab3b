import Vue from 'vue'
import App from './App.vue'
import router from './router'

import mock from './mock-data.js'
import shooting from './shot-data.js'

let data = {
  players: mock,
  shot: null,
  shotdata: shooting,
  cart: [],
  bucket: []

}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
