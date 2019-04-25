<template>
    <div>
        <span @click="del(id)">-</span>
        <span>{{num}}</span>
        <span @click="add(id)">+</span>


        <div>count:{{getTotalPrice}}</div>
    </div>
</template>
<script>
import {mapMutations,mapGetters} from 'vuex';
export default {
    props:['num','id'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapGetters(['getTotalPrice'])
    },
    methods:{
        ...mapMutations(['add','del'])
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>