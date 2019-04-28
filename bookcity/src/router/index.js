import Vue from 'vue';
import Router from 'vue-router';
const List = () => import('@/views/list');

Vue.use(Router);

const routes= [
  {
    path:'/',
    name:'list',
    component:List
  }
]

export default new Router({
  routes
});