import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
