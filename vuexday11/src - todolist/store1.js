import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
console.log(Vuex);
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        list:[]
    },
    getters:{
        getlistGetters(state){
            console.log(state);
            return state.list;
        }
    },
    mutations:{ //同步函数
        getlistMutations(state,arr){
            state.list = arr;
        },
        addlistMutations(state,obj){
            state.list.unshift(obj);
        },
        removeMutations(state,id){
            state.list = state.list.filter(item => item.id != id);
        },
        updateMutations(state,data){
            let index = state.list.findIndex(item => item.id == data.id);
            state.list.splice(index,1,data);
            console.log(data);
        },
        filterMutations(state,data){
            state.list = data;
        }
    },
    actions:{ //异步函数
        getList({commit}){
            console.log('getlist');
            axios.get('http://jsonplaceholder.typicode.com/todos').then((res)=>{
                commit('getlistMutations',res.data);
                console.log(res);
            });
        },
        addList({commit},title){
            axios.post('http://jsonplaceholder.typicode.com/todos',{title,completed:false,userId:1}).then((res)=>{
                console.log(res);
                commit('addlistMutations',res.data);
            });
        },
        removeList({commit},id){
            axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`).then((res)=>{
                console.log(res);
                commit('removeMutations',id);
            });
        },
        updateList({commit},obj){
            axios.put(`http://jsonplaceholder.typicode.com/todos/${obj.id}`,obj).then((res)=>{
                console.log(res);
                commit('updateMutations',res.data);
            });
        },
        filterList({commit},count){
            axios.get('http://jsonplaceholder.typicode.com/todos?_limit='+count).then((res)=>{
                console.log(res.data);
                commit('filterMutations',res.data);
            });
        }
    }
   
});