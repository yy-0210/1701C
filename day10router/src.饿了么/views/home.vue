<template>
    <div>
        <div class="page">
            <p>首页</p>
            <!-- <router-link to="/search">去搜索</router-link> -->
            <div>
                <p @click="goToSearch">去搜索</p>
            </div>
            <ul>
                <li v-for="(item,index) in list" :key="index" @click="goToShop(item.id)">{{item.title}}</li>
            </ul>
        </div>

        <Footer />
    </div>
</template>
<script>
export default {
    props: {},
    components: {},
    data() {
        return {
            list:[
                {
                    title:"本味轻食馆(二七店)",
                    id:1
                },
                {
                    title:"蜀厢荣记麻辣烫(二七店)",
                    id:2
                },
                {
                    title:"阿里茄汁面",
                    id:13
                }
            ]
        };
    },
    computed: {},
    methods: {
        goToSearch() {
            console.log("goToSearch");
            // this.$router.push('search');
            // this.$router.push({path:'/search'});
            this.$router.replace({ path: "/search", query: { val: 111 } });
            // this.$router.push({name:'search'});
        },
        goToShop(id){//动态路由要用name来做跳转，通过params
            this.$router.push({name:'shop',params:{id:id}});
        }
    },
    created() {
        console.log(this.$router, this.$route);
    },
    mounted() {}
};
</script>
<style scoped lang="">
</style>