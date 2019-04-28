<template>
    <div class="dialog">
        666
        <my-list v-for="(item1,index) in getbuyList" :key="index"
         :img="item1.img"
                :title="item1.title"
                :price="item1.price"
                :num="item1.num"
                :id="item1.id"
        ></my-list>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
import myList from './my-list';
export default {
    props:['buylist'],
    components:{
        myList
    },
    data(){
        return {

        }
    },
    computed:{
        ...mapGetters(['getbuyList'])
    },
    methods:{

    },
    created(){
        console.log(this.buylist);
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.dialog{
    position: absolute;
    left: 0;
    bottom:50px;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.3)
}
</style>