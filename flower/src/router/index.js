import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Home = () => import('@/views/home')
const Detail = () => import('@/views/detail')
const Last = () => import('@/views/last')
const List = () => import('@/views/list')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    ,{
      path: '/last',
      name: 'last',
      component: Last
    },{
      path: '/list/:type',
      name: 'list',
      component: List
    }
  ]
})
