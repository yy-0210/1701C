<template>
    <div>
        <div>add组件：{{count}}</div>
        <button @click="add(5)">递增</button>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex';
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['count'])
    },
    methods:{
        ...mapMutations(['add']),
        // add(){
        //     // this.$store.commit('add',{})
        // }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>