<template>
    <div>
        <h3>店铺{{$route.params.id}}</h3>
        <ul class="list">
            <li @click="$router.push({name:'dican'})">点餐</li>
            <li @click="$router.push({name:'comment'})">评价</li>
            <li @click="$router.push({name:'bussi'})">商家</li>
        </ul>
        <keep-alive include="dican">
            <router-view></router-view>
        </keep-alive>
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
        console.log(this.$route);
        // axios.get('/api/list',{});
    },
    mounted(){

    },
    beforeRouteEnter(to,from,next){ //当前实例还没被创建，在这里拿不到this
        console.log(to);
        console.log(from);
        console.log(next);
        if(to.params.id < 10){
            next();
        } else {
            next('/');
        }
    },
    beforeRouteUpdate(to,from,next){//路由发生变化，但是组件被复用的时候触发
        next();
        console.log('beforeRouteUpdate');
    },
    beforeRouteLeave (to, from, next) {
        // ...
        console.log('beforeRouteLeave');
    }
}
</script>
<style scoped lang="">
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
.list{
    height: 44px;
    width: 100%;
    background: coral;
    display: flex;
}
.list li{
    flex: 1;
    line-height: 44px;
    text-align: center;
}
</style>