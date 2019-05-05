import Vue from 'vue';
import Router from 'vue-router';
const Home = () => import('@/views/home');
const Cinema = () => import('@/views/cinema');
const Preferential = () => import('@/views/preferential');
const My = () => import('@/views/my');
const Release = () => import('@/views/release');
const Received = () => import('@/views/received');

Vue.use(Router);

const routes= [
  {
    path:'/',
    redirect:{name:'release'}
  },
  {
    path:'/home',
    name:'home',
    component:Home,
    children:[
      {
        path:'release',
        name:'release',
        component:Release
      },
      {
        path:'received',
        name:'received',
        component:Received
      }
    ]
  },
  {
    path:'/cinema',
    name:'cinema',
    component:Cinema
  },
  {
    path:'/preferential',
    name:'preferential',
    component:Preferential
  },
  {
    path:'/my',
    name:'my',
    component:My
  }
]

export default new Router({
  routes
});