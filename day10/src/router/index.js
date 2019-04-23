import Vue from 'vue';
import VueRouter from 'vue-router'; //vue插件
import Home from '../views/home';
import Discover from '../views/discover';
import Order from '../views/order';
import Profile from '../views/profile';

Vue.use(VueRouter);

const routes= [
    {
        path:'/',
        component:Home
    },
    {
        path:'/discover',
        component:Discover
    },
    {
        path:'/order',
        component:Order
    },
    {
        path:'/profile',
        component:Profile
    }
]


export default new VueRouter({
    mode:'hash',
    routes
});