<template>
    <div>
        电影
    <ul>
        <router-link to="release">正在热映</router-link>
        <router-link to="received">即将上映</router-link>
    </ul>
    <router-view></router-view>
    <my-footer></my-footer>
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

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>