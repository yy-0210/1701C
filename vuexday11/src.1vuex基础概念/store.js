import Vue from 'vue';
import Vuex from 'vuex';
console.log(Vuex);
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        count:1,
        list:[
            {
                grade:'1701C',
                count:24
            },
            {
                grade:'1612B',
                count:40
            },
            {
                grade:'1612A',
                count:32
            }
        ]
    },
    mutations:{
        add(state,num){
            // state.count++;
            // setTimeout(()=>{
                state.count += num;
            // },2000);
        },
        del(state){
            state.count--;
        },
        addlist(state,obj){
            console.log(obj);
            state.list.push(obj);
        }
    },
    getters:{
        getList(state){
            return state.list.filter(item => item.count > 30);
        },
        getLength(state,getters){
            return getters.getList.length;
        }
    },
    actions:{
       addActions({commit},num){
        //    console.log(context);
           setTimeout(()=>{
              commit('add',num);
           },2000);
       } 
    }
});