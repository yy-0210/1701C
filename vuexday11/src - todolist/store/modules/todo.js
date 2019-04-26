import axios from 'axios';
import * as types from '../types';
const state = {
    list:[]
};
const getters = {
    getlistGetters(state){
        console.log(state);
        return state.list;
    }
};
const mutations = {
    [types.GETLISTMUTATIONS](state,arr){
        state.list = arr;
    },
    [types.ADDLISTMUTATIONS](state,obj){
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
};
const actions = {
    getList({commit}){
        console.log('getlist');
        axios.get('http://jsonplaceholder.typicode.com/todos').then((res)=>{
            commit(types.GETLISTMUTATIONS,res.data);
            console.log(res);
        });
    },
    addList({commit},title){
        axios.post('http://jsonplaceholder.typicode.com/todos',{title,completed:false,userId:1}).then((res)=>{
            console.log(res);
            commit(types.ADDLISTMUTATIONS,res.data);
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
};


export default {
    state,
    getters,
    mutations,
    actions
}