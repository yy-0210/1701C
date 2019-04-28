import Vue from 'vue'
import App from './App'
import router from './router'
import plugins from './plugins' //vue插件
import axios from 'axios';
// import myHeader from './components/my-header'  静态加载
import 'swiper/dist/css/swiper.min.css'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
// Vue.component('myHeader',myHeader); vue-resource
Vue.prototype.$http = axios
Vue.use(plugins,{
  aa:12
}); //注册插件
// Vue.use(VueLazyload);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('./assets/timg.gif'), //如果图片放在assets文件夹下边，需要用require()来引入，如果放在static下边，直接按照路径引入
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
