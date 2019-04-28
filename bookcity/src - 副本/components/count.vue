<template>
    <div>
        <template v-if="num">
            <span @click="add({ind:ind,index:index,n:num-1})">-</span>
            <span>{{num}}</span>
        </template>
        <span @click="add({ind:ind,index:index,n:num+1})">+</span>
    </div>
</template>
<script>
import {mapActions,mapMutations} from 'vuex';
export default {
    props:['num','id','ind','index'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        ...mapMutations(['add'])
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