import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
let popper = require('popper.js')
let Boostrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
