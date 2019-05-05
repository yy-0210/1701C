import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import myFooter from './components/footer'

Vue.config.productionTip = false
// Vue.component('myHeader',myHeader); vue-resource
Vue.prototype.$http = axios

Vue.component('myFooter',myFooter);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
