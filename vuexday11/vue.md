1. 下载  npm i vuex
2.  store.js

- 引入vue
- 引入vuex
- 注册vuex  Vue.use(Vuex)
- 抛出vuex实例
    ```
        export default new Vuex.Store({

        });
    ```
3. 在main.js挂载到vue实例上边


在组件\视图里面获取store（仓库）里面的值

1. this.$store.state.count 



属性              不使用map辅助函数                            使用map辅助函数
state             this.$store.state.count                     ...mapState(['count'])  //在computed使用
getter            this.$store.getters.getList                 ...mapGetters(['getList'])  //在computed使用
mutations         this.$store.commit('add')                  ...mapMutations(['add']) // @click="add(参数)"
actions           this.$store.dispatch('addActions')         ...mapActions(['addActions'])  //在methodshi使用