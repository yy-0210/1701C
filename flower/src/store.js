import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        num: 0,
        ind: Number,
        answerList: [
            {
                title: '以下不属于我国年画重要产地的是？',
                type: '福',
                flag: null,
                id: 1111,
                answer: [
                    {
                        answer_name: '苏州桃花坞',
                        is_stand_answer: 0,
                        id: 1111

                    },
                    {
                        answer_name: '天津杨柳青',
                        is_stand_answer: 0,
                        id: 1111

                    },
                    {
                        answer_name: '四川攀枝花',
                        is_stand_answer: 1,
                        id: 1111

                    },
                    {
                        answer_name: '山东廊坊',
                        is_stand_answer: 0,
                        id: 1111

                    }
                ]
            },
            {
                title: '春节贴福字有什么习俗',
                type: '禄',
                flag: null,
                id: 2222,
                answer: [
                    {
                        answer_name: '斜着贴',
                        is_stand_answer: 0,
                        id: 2222

                    },
                    {
                        answer_name: '倒着贴',
                        is_stand_answer: 1,
                        id: 2222

                    },
                    {
                        answer_name: '竖着贴',
                        is_stand_answer: 0,
                        id: 2222

                    },
                    {
                        answer_name: '正着贴',
                        is_stand_answer: 0,
                        id: 2222

                    }
                ]
            },
            {
                title: '以下哪个是二月初二的习俗？',
                type: '寿',
                id: 3333,
                flag: null,
                answer: [
                    {
                        answer_name: '逛庙会',
                        is_stand_answer: 0,
                        id: 3333

                    },
                    {
                        answer_name: '回娘家',
                        is_stand_answer: 1,
                        id: 3333

                    },
                    {
                        answer_name: '大扫除',
                        is_stand_answer: 0,
                        id: 3333

                    },
                    {
                        answer_name: '讨欠债',
                        is_stand_answer: 0,
                        id: 3333

                    }
                ]
            }
        ],
        list: []
    },
    getters: {
        getList(state){
            return state.list.filter(item => item.is_stand_answer == 1);
        },
        getLength(state,getters){
            return getters.getList.length;
        }
    },
    mutations: {
        changeInd(state,ind){ //改变点击题目时的样式
            state.ind = ind;
        },
        addNum(state,item1){
            if(state.num < state.answerList.length -1){
                state.num++;
            }
            let index = state.answerList.findIndex(item =>item.id == item1.id);
           //为1说明选择正确
            state.answerList[index].flag = item1.is_stand_answer == 1 ? true :false;
            //把选择的结果放入list数组中
            state.list.push(item1);
            state.ind = null; //初始化，防止下一题时还没点击就有样式
        }
    },
    actions: {
        changeActions({commit},item1){
            setTimeout(()=>{
                commit('addNum',item1);
            },1000);
        }
    }
});