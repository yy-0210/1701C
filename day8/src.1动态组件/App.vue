<template>
    <div>
        <!-- <my-list :list="list"></my-list> -->
        <header>
            <span @click="componentId = 'myClassify'">分类</span>
            <span @click="componentId = 'myBrand'">品牌</span>
        </header>
        <section>
            <keep-alive include="myClassify">
                <component :is="componentId"></component>
            </keep-alive>
        </section>
    </div>
</template>
<script>
import myList from './components/list';
import axios from 'axios';
import myClassify from './components/classify';
import myBrand from './components/brand';
export default {
    props:{

    },
    components:{
        myList,
        myClassify,
        myBrand
    },
    data(){
        return {
            list:[],
            componentId:'myClassify'
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        axios.get('/api/data').then((res)=>{
            this.list = res.data;
            console.log(this.list);
        });
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    header{
        height: 44px;
        width: 100%;
        background: aquamarine;
        display: flex;
    }
    header span{
        flex:1;
        text-align: center;
        line-height: 44px;
    }
    section{
        flex: 1;
        width: 100%;
    }
</style>