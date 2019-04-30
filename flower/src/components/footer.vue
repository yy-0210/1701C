<template>
   <footer>
       <router-link to="/home">首页</router-link>
       <router-link to="/classify">分类</router-link>
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
    display: flex;
}
footer a{
    flex:1;
    line-height: 50px;
    text-align: center;
}
</style>