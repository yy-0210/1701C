import Vue from 'vue';
import Router from 'vue-router';
// import Home from '../views/home';
// import Vedio from '../views/vedio';
// import News from '../views/news';
// import Frum from '../views/frum';
// import List from '../views/list';
// import Live from '../views/live';
import Newest from '../views/newest';
import Hottest from '../views/hottest';
import Detail from '../views/detail';


const Home = () => import('../views/home'); //按需加载
const Vedio = () => import('../views/vedio'); //按需加载
const News = () => import('../views/news'); //按需加载
const Frum = () => import('../views/frum'); //按需加载
const List = () => import('../views/list'); //按需加载
const Live = () => import('../views/live'); //按需加载
// const Newest = resolve = ()=> require(['../views/newest'],resolve); //异步加载
// const Newest = resolve =  require(['../views/newest'],resolve); //异步加载

Vue.use(Router);


const routes = [
  {
    path:'/',
    name:'home',
    component:Home,
    redirect:{name:'live'},
    children:[
      {
        path:'live',
        name:'live',
        component:Live
      },
      {
        path:'newest',
        name:'newest',
        component:Newest
      },
      {
        path:'hottest',
        name:'hottest',
        component:Hottest
      }
    ]
  },
  {
    path:'/vedio',
    name:'vedio',
    component:Vedio
  },
  {
    path:'/news',
    name:'news',
    component:News
  },
  {
    path:'/frum',
    name:'frum',
    component:Frum
  },{
    path:'/list',
    name:'list',
    component:List
  },{
    path:'/detail/:id',
    name:'detail',
    component:Detail
  }
];


const router = new Router({
  routes
});


export default router;