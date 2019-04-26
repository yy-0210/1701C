import Vue from 'vue';
import Vuex from 'vuex';
import count from './modules/count';
import list from './modules/list';
import * as types from './types';
console.log(Vuex);
Vue.use(Vuex);


export default new Vuex.Store({
    modules:{
        count,
        list
    }
})