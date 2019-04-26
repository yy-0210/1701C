import * as types from '../types';
const state = {
    count:1
};

const getters = {}

const mutations= {
    [types.ADD](state,obj){
        state.count+=obj;
    },
    del(state){
        state.count--;
    },
    add(state,num){
        state.count+=num;
    }
};


const actions = {
    addActions({commit},num){
        setTimeout(()=>{
            commit(types.ADD,num);
        },2000);
    },
};



export default {
    state,
    getters,
    mutations,
    actions
}