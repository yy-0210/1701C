state: 共享的数据
getters:  对state里面的数据派生出一个新的数据的时候
mutations: 同步函数，修改state里面的状态的时候，只能通过mutations里面的方法来修改
actions: 异步函数

怎么在视图或者组件里面使用


state
1. this.$store.state.属性名
2. 放在计算属性里面
3. ...mapState(['名字'])

getters

1. computed  //缺点：会产生代码冗余
2. this.$store.getters.属性名   
3. ...mapGetters(['属性1','属性2'])



mutations

1. this.$store.commit('方法名',参数); //
2. ...mapMutations(['方法名']) // @click="方法名(参数)"



actions

1. this.$store.dispatch('方法名',参数);
2. ....mapActions(['方法名'])  @click="方法名(参数)"



在store.js

state:{
    数据1,
    数据2
}

getters:{
    属性名1(state){

    },
    属性名2(state,getters){
        getters.属性名1
    }
}

mutations:{
    方法1(state){
        修改state里面的数据状态
    },
    方法2(state,参数){ //第二个参数就是传递过来的参数，没有第三个参数

    }
}


actions:{
    方法1(context,参数){
        //context是一个对象，这个对象里面有commit,dispatch,state
        异步操作成功之后，context.commit(mutations里面的方法,参数);
    },
    方法2({commit},参数){
         异步操作成功之后，commit(mutations里面的方法,参数);
    }
}


// modules






