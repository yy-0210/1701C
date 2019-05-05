<template>
    <div>
        正在热映
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

    },
    created(){
        this.$http.get('/api/receive')
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>