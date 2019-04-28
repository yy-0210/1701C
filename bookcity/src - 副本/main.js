import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
const myCount = ()=> import('@/components/count');
const myList = ()=> import('@/components/my-list');

Vue.config.productionTip = false
// Vue.component('myHeader',myHeader); vue-resource
Vue.prototype.$http = axios

Vue.component('myCount',myCount);
Vue.component('myList',myList);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
