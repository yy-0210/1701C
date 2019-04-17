import Vue from 'vue';
// import Vue from 'vue/dist/vue.esm.js';
console.log(Vue);
let vm =new Vue({
    // el:'#app',
    template:`<span ref="title">{{title}}</span>`,  //模板字符串，会替换掉挂载元素
    data:{
        title:'1701C111'
    },
    beforeCreate() { //初始化，收集配置项
        console.log('beforeCreate');
        console.log(this.$el,this.$data,this.title);
    },
    created() { //分配配置项
        console.log('created');
        console.log(this.$el,this.$data,this.title);
    },
    beforeMount() { //生成dom之前
        console.log('beforeMount');
        console.log(this.$el,this.$data,this.title);
    },
    mounted() { //生成dom之后
        console.log('mounted');
        console.log(this.$el,this.$data,this.title);
    },
    beforeUpdate() {//数据更新之前的操作
        console.log('beforeUpdate');
        //this.$refs 获取的是页面里面所有有ref属性的dom
        // console.log(this);
        console.log(this.$refs.title.innerHTML);
        console.log(this.$el,this.$data,this.title);
    },
    updated() { //更新之后出发的
        console.log('updated');
        console.log(this.$refs.title.innerHTML);
        console.log(this.$el,this.$data,this.title);
    }
});

window.vm = vm;
vm.$mount('#app'); //外部挂载元素
console.log(document.querySelector('span'));