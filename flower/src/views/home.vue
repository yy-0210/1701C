<template>
    <div>
        <button @click="goToDetail()">开始答题</button>
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
        goToDetail(){
            this.$router.push({path:'/detail'});
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