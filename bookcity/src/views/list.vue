<template>
    <div class="list">
        <div>
            <div class="left">
                <ul>
                    <li v-for="(item,index) in getlistGetters" :key="index" :class="{'active':index == ind}" @click="goToRight(index)">{{item.title}}</li>
                </ul>
            </div>
            <div class="right">
                <div v-if="!getlistGetters[ind]">
                    loading...
                </div>
                <my-list v-for="(item1,index1) in getlistGetters[ind].res" :key="index1" :img="item1.img" :title="item1.title" :price="item1.price" :num="item1.num" :id="item1.id" :index="index1" :ind="ind" v-else></my-list>
            </div>
        </div>
        <div class="footer">
            <div v-if="!getbuyList"></div>
            <my-dialog :buylist="getbuyList" v-show="flag" v-else></my-dialog>
            <span @click="showDialog">总价:{{getTotalPrice}}</span>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
import myList from "../components/my-list";
import myDialog from "../components/my-dialog";
export default {
    props: {},
    components: {
        myList,
        myDialog
    },
    data() {
        return {
            ind: 0,
            flag:false
        };
    },
    computed: {
        ...mapGetters(["getlistGetters","getTotalPrice","getbuyList"])
    },
    methods: {
        ...mapActions(["getList"]),
        goToRight(ind) {
            this.ind = ind;
        },
        showDialog(){
            console.log(999);
            this.flag = !this.flag;
            console.log(this.getbuyList);
        }
    },
    created() {
        
        this.getList();
    },
    mounted() {}
};
</script>
<style scoped lang="">
.list {
    display: flex;
    flex-direction: column;
}
.list>div:nth-child(1){
    display: flex;
    flex: 1;
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
    overflow-y: auto;
}
.footer{
    height: 50px;
    width: 100%;
    background: #ccc;
}
</style>