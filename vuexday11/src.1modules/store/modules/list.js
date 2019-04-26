const state = {
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
};

const getters = {
    getList(state){
        return state.list.filter(item => item.count >30)
    },
    getLength(state,getters){
        return getters.getList.length;
    }
}

const mutations= {
    addlist(state,obj){
        console.log(state,9999);
        state.list.push(obj);
    },
};


const actions = {};



export default {
    state,
    getters,
    mutations,
    actions
}