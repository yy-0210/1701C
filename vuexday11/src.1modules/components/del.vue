<template>
    <div>
        <div>del组件：{{count}}</div>
        <button @click="del">递减</button>
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
        ...mapMutations(['del'])
        // del(){
        //     this.$store.commit('del');
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