<template>
    <div class="list">
        <div class="left">
            <ul>
                <li v-for="(item,index) in getlist" :key="index" :class="{'active':index== ind}" @click="goToRight(index)">{{item.title}}</li>
            </ul>

        </div>
        <div class="right">
            <div v-if="!getlist[ind]">
                loading....
            </div>
            <div v-else>
                <my-list v-for="(item1,index1) in getlist[ind].res" :key="index1" :img="item1.img" :title="item1.title" :price="item1.price" :id="item1.id" :num="item1.num" :index="index1" :ind="ind"></my-list>
            </div>
            <div>{{getTotalPrice}}</div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    props: {},
    components: {},
    data() {
        return {
            ind: 0,
            list: []
        };
    },
    computed: {
        ...mapGetters(["getlist",'getTotalPrice','getBuyList'])
    },
    methods: {
        ...mapActions(["getList"]),
        goToRight(ind) {
            this.ind = ind;
        }
    },
    created() {
        console.log(this.getlist, "999");
        this.getList();
    },
    mounted() {}
};
</script>
<style scoped lang="">
.list {
    display: flex;
}
.left {
    height: 100%;
    width: 120px;
}
.left li {
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #ccc;
}
.left li.active {
    background: #fff;
}
.right {
    height: 100%;
    flex: 1;
}
.right > div {
    display: flex;
    flex-wrap: wrap;
}
</style>