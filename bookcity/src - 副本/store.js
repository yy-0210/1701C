import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        list:[]
    },
    getters:{
        getlist(state){
            console.log('getters');
            return state.list;
        },
        getTotalPrice(state,getters){
            let sum = 0;
           state.list.forEach((item)=>{
                sum += item.res.reduce((prev,val)=>{
                    return prev + val.num * val.price
               },0)
           });
           return sum;
        }
    },
    mutations:{
        getlistMutations(state,list){
            state.list = list;
        },
        add(state,{ind,index,n}){
            console.log(ind,index,n);
            n = n<=0?0:n;
            state.list[ind].res[index].num= n;
        }
        
    },

    actions:{
        getList({commit}){
            console.log(1111);
            axios.get('/api/list').then((res)=>{
                console.log(res.data);
                commit('getlistMutations',res.data);
            });
        }
    }
});