import Vue from 'vue'
import Router from 'vue-router'
import Tab from '@/views/tab'
import Home from '@/views/home'
import Discover from '@/views/discover'
import Order from '@/views/order'
import Profile from '@/views/profile'
import Search from '@/views/search'
import Shop from '@/views/shop'
import Dican from '@/views/dican'
import Comment from '@/views/comment'
import Bussi from '@/views/bussi'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{
        title:'首页'
      },
      component: Home
    },
    {
      path: '/discover',
      name: 'discover',
      meta:{
        title:'发现'
      },
      component: Discover
    },
    {
      path: '/order',
      name: 'order',
      meta:{
        title:'订单'
      },
      component: Order
    },
    {
      path: '/profile',
      name: 'profile',
      meta:{
        title:'我的'
      },
      component: Profile
    }, {
      path: '/search',
      name: 'search',
      component: Search
    },{
      path:'/shop',
      component:Shop,
      beforeEnter(to,from,next){
        next('/');
      }
    },
    {
      path: '/shop/:id',
      name: 'shop',
      component: Shop,
      children:[ //子路由
        {
          path:'dican',
          name:'dican',
          component:Dican
        },
        {
          path:'comment',
          name:'comment',
          component:Comment
        },
        {
          path:'bussi',
          name:'bussi',
          component:Bussi
        }
      ]
    }
  ]
})


export default  router;


const login = ['order','profile'];
//全局前置守卫
router.beforeEach((to,from,next)=>{
  // console.log(to);
  // console.log(from);
  // console.log(next);
  //  next();
  if(login.includes(to.name)){ //权限验证
      let useId = window.localStorage.getItem('userId');
      if(useId){
        next();
      } else {
        next('/');
      }
  } else {
    next();
  }
});


//全局后置守卫
router.afterEach((to, from) => {
  // ...
  console.log(to)
  console.log(from)
  if(to.meta && to.meta.title){
    document.title = to.meta.title;
  } else {
    document.title = '1701C'
  }
})