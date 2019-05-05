<template>
    <footer>
        <router-link to="/film">电影</router-link>
        <router-link to="/cinema">影院</router-link>
        <router-link to="/preferential">特惠</router-link>
        <router-link to="/my">我的</router-link>
    </footer>
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
footer{
    height: 50px;
    width: 100%;
    background: cornflowerblue;
    display:flex;

}
footer a{
    flex: 1;
}
</style>