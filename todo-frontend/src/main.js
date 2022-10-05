import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import router from './router/index'

Vue.prototype.$http = axios
Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
