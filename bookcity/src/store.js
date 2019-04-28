import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);


export default new Vuex.Store({
    state:{},
    getters:{},
    mutations:{},
    actions:{
        getList({commit}){
            console.log(1111);
            axios.get('/api/list').then((res)=>{
                console.log(res.data);
            });
        }
    }
});