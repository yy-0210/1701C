<template>
    <div>
        <my-header>
            <ul>
                <router-link to="/bookcity" tag="li">书城</router-link>
                <router-link to="/bookshelf" tag="li">书架</router-link>
            </ul>
            <span>个人</span>
        </my-header>
        <section>
            <Search :flag="flag" />
            <div class="swiper-container banner">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
                        <img :src="item.ad_pic_url" alt="">
                    </div>
                </div>
            </div>
            <div>
                <h3>本周最火</h3>
                <div class="content">
                    <my-list v-for="(item1,index1) in hotList" :key="index1" 
                    :img="item1.cover" 
                    :title="item1.title" 
                    :authors="item1.authors" 
                    :content="item1.summary" 
                    :id="item1.fiction_id" classname="downlist"></my-list>
                </div>
            </div>
             <div>
                <h3>重磅推荐</h3>
                <div class="content">
                    <my-list v-for="(item1,index1) in remodeList" :key="index1" :img="item1.cover" :title="item1.title" :authors="item1.authors" :content="item1.summary" :id="item1.fiction_id" classname="leftlist"></my-list>
                </div>
            </div>
        </section>

    </div>
</template>
<script>
import Swiper from "swiper";

export default {
    props: {},
    components: {},
    data() {
        return {
            flag: false,
            bannerList: [],
            hotList: [],
            remodeList:[]
        };
    },
    computed: {},
    methods: {},
    created() {
        this.$http.get("/api/home").then(res => {
            console.log(res.data);
            this.bannerList = res.data.items[0].data.data;
            this.hotList = res.data.items[1].data.data;
            this.remodeList = res.data.items[2].data.data;
            console.log(this.bannerList);
            //数据更新之后，dom更新之后触发的
            this.$nextTick(() => {
                new Swiper(".banner");
            });
        });
    },
    mounted() {}
};
</script>
<style scoped lang="">
.content{
    display: flex;
    flex-wrap: wrap;
}
</style>