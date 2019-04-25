<template>
    <div>
        <div>del组件：{{$store.state.count}}</div>
        <button @click="del">递减</button>
    </div>
</template>
<script>
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

    },
    methods:{
        del(){
            this.$store.commit('del');
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>