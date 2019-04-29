import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        buyList:[]
    },
    getters:{
        getBuyList(state){
            return state.buyList
        },
        getTotalCount(state){
            return state.buyList.reduce((prev,cur) => prev + cur.count,0);
        },
        getTotalPrice(state){
            return state.buyList.reduce((prev,cur) => prev + cur.count* cur.price,0);
        }
    },
    mutations:{
        shop(state,item){
            let index = state.buyList.findIndex(item1 => item1.id == item.id);
            if(index == -1){
                state.buyList.push(item);
            }
            console.log(state.buyList);
        },
        checkClick(state,ind){
            state.buyList[ind].flag = !state.buyList[ind].flag;
            console.log(state.buyList[ind]);
        },
        allClickMutaions(state,flag){
            state.buyList.forEach(item => item.flag = flag);
        }
    },
    actions:{

    }
})