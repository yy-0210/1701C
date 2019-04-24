<template>
    <div class="content">
        <div class="left">
            <ul>
                <li v-for="(item,index) in list" :key="index" :class="{'active':index ==ind}" @click="goToRight(index)">{{item.name}}</li>
            </ul>
        </div>
        <div class="right">
            <div class="rightList" ref="rightList">
                <my-list v-for="(item1,index1) in list" :key="index1" :name="item1.name" :foods="item1.foods"></my-list>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import myList from "../components/my-list";
import BScroll from "better-scroll";
export default {
    props: {},
    components: {
        myList
    },
    data() {
        return {
            list: [],
            ind: 0,
            scrollY: 0,
            scrollH: [],
            leftBScroll: null,
            rightBScroll: null
        };
    },
    computed: {},
    methods: {
        init() {
            //better 初始化
            this.leftBScroll = new BScroll(".left", {
                click: true
            });
            this.rightBScroll = new BScroll(".right", {
                probeType: 3
            });

            this.rightBScroll.on("scroll", res => {
                console.log(1111);
                this.scrollY = Math.abs(res.y);
                console.log(this.scrollY);
            });
        },
        goToRight(ind) {
            //点击左侧
            let child = this.$refs.rightList.children;
            console.log(child[ind]);
            this.ind = ind;
            this.rightBScroll.scrollToElement(child[ind], 200);
        },
        scrollHeight() {
            //计算右侧高度
            let child = this.$refs.rightList.children;
            let height = 0;
            this.scrollH.push(height); // [0, 1000,1200]
            for (let i = 0; i < child.length; i++) {
                let item = child[i].offsetHeight; // 1000 200
                height += item;
                this.scrollH.push(height);
            }
            console.log(this.scrollH);
        }
    },
    created() {
        axios.get("/api/list").then(res => {
            this.list = res.data.goods;
            console.log(this.list);
            this.$nextTick(() => {
                this.init();
                this.scrollHeight();
            });
        });
    },
    mounted() {}
};
</script>
<style scoped lang="">
.content {
    flex: 1;
    width: 100%;
    overflow: hidden;
    display: flex;
}
.left {
    width: 120px;
    height: 100%;
}
.left li {
    height: 50px;
    line-height: 50px;
    text-align: center;
    width: 100%;
    background: cornflowerblue;
    color: #fff;
}
.left li.active {
    background: burlywood;
}
.right {
    flex: 1;
    height: 100%;
}
</style>