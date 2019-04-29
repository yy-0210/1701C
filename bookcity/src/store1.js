import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        list:[],
        buyList:[]
    },
    getters:{
        getlistGetters(state){
            return state.list;
            console.log(state.list);
        },
        getTotalPrice(state){
            let sum = 0;
            state.list.forEach(item => {
               sum += item.res.reduce((prev,next) => {
                    return prev + next.num * next.price;
                },0);
            });
            return sum.toFixed(2);
        },
        getbuyList(state){
            return state.buyList;
        }
    },
    mutations:{
        getListMutations(state,arr){
            console.log('getListMutations');
            state.list = arr;
        },
        add(state,{ind,index,n}){
            console.log(ind,index,n);
            state.list[ind].res[index].num = n;
            let id = state.list[ind].res[index].id;
            console.log(id);
            let current = state.buyList.findIndex(item => item.id == id);
            if(current == -1){
                state.buyList.push(state.list[ind].res[index]);
            } 
            console.log(state.buyList);
        }
    },
    actions:{
        getList({commit}){
            console.log('actions');
            axios.get('/api/list').then((res)=>{
                console.log(res.data);
                commit('getListMutations',res.data);
            });
        }
    }
});