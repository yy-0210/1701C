<template>
    <div>
        <my-list v-for="(item,index) in list" :key="index" :item="item"></my-list>
    </div>
</template>
<script>
import myList from '../components/my-list';
import axios from 'axios';
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

    },
    created(){
        axios.get('/api/shoplist').then((res)=>{
            this.list = res.data;
            console.log(this.list);
        });
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>