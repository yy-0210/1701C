<template>
   <section>
       <my-list v-for="(item,index) in list" :key="index"
        :item="item"
       ></my-list>
       <!-- <my-list></my-list>
       <my-list></my-list>
       <my-list></my-list> -->
   </section>
</template>
<script>
import myList from './list';
export default {
    props:{
        list:Array
    },
    components:{
        myList
    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import '../scss/common.scss';
@import '../scss/_mixin.scss';
section{
    @include flex;
}
</style>