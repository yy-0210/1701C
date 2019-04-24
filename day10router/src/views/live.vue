<template>
    <div>
        <my-list v-for="(item,index) in list" :key="index"
        :img="item.img"
        :title="item.title"
        :time="item.time"
        :num="item.num"
        :id="item.id"
        :flag="item.flag"
        @changeColor ="change"
        ></my-list>
    </div>
</template>
<script>
import myList from '../components/mylist';
import data from '../data/list';
export default {
    props:{

    },
    components:{
        myList
    },
    data(){
        return {
            list:[]
        }
    },
    computed:{

    },
    methods:{
        change(id){
            console.log(id);
            let ind = this.list.findIndex(item => item.id == id);
            this.list[ind].flag = false;
        }
    },
    created(){
        this.list = data;
        console.log(this.list);
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>