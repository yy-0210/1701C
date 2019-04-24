<template>
    <div class="page">
        <div>
            <ul class="list">
                <li @click="$router.push({name:'live'})">直播</li>
                <li @click="$router.push({name:'newest'})">最新</li>
                <li @click="$router.push({name:'hottest'})">最热</li>
                <li>NBA</li>
                <li>CBA</li>
            </ul>
            <router-view></router-view>
        </div>
        <Footer />
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
.list{
    height: 44px;
    width: 100%;
    display: flex;
    background: darksalmon;
    color: #fff;
}
.list li{
    flex: 1;
    line-height: 44px;
    text-align: center;
}
</style>