<template>
    <div>
        首页
        <div>home组件{{$store.state.count}}</div>
        <div>$store:{{$store.state.list}}</div>
        <div>computed::{{getList}}</div>
        <div>getters::{{$store.getters.getList}}</div>
        <my-add></my-add>
        <my-del></my-del>
        <button @click="add">点击</button>
        <button @click="addList">添加</button>
        <div>班级人数超过30的有{{$store.getters.getLength}}个</div>
    </div>
</template>
<script>
import myAdd from '../components/add';
import myDel from '../components/del';
export default {
    props:{

    },
    components:{
        myAdd,
        myDel
    },
    data(){
        return {

        }
    },
    computed:{
        getList(){
            return this.$store.state.list.filter(item => item.count >30);
        }
    },
    methods:{
        add(){
            console.log(this);
            this.$store.dispatch('addActions',6);
        },
        addList(){
            this.$store.commit('addlist',{grade:'1610A',count:50});
        }
    },
    created(){
        console.log(this);
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>
