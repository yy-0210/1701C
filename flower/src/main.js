import Vue from 'vue'
import App from './App'
import router from './router'
import myFooter from './components/footer'
import axios from 'axios'
import store from './store'
import 'swiper/dist/css/swiper.min.css'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.component('myFooter',myFooter);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
