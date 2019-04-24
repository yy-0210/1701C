<template>
    <div class="tab">
        <ul  class="list">
            <li v-for="(item,index) in headerList" :key="index" :class="{'active':index == ind}" @click="change(item.id)">{{item.title}}</li>
        </ul>
        <div>
            <my-list v-for="(item1,index1) in list" :key="index1"
            :title="item1.title"
            :content="item1.content"
            :num="item1.num"
            :time="item1.time"
            ></my-list>
            <div v-show="list.length == 0">没有更多数据</div>
        </div>
    </div>
</template>
<script>
import myList from '../components/list';
import data from '../mock';
export default {
    props: {},
    components: {
        myList
    },
    data() {
        return {
            headerList: [
                {
                    title: "未开始",
                    id: 1
                },
                {
                    title: "已打卡",
                    id: 2
                },
                {
                    title: "已放弃",
                    id: 3
                },
                {
                    title: "全部",
                    id: 4
                }
            ],
            ind:0,
            list:[]
        };
    },
    computed: {},
    methods: {
        getList(list,id){
            return list.filter(item => item.num == id);
        },
        change(id){
            this.list = this.getList(data.list,id);
            console.log(this.getList(data.list,id));
            this.ind = id-1;
        }
    },
    created() {
        console.log(data);
        //初始值
        this.list = this.getList(data.list,1);
        console.log(this.list);

    },
    mounted() {}
};
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
    display: flex;
}
.list li{
    flex: 1;
    line-height: 44px;
    text-align: center;
}
.list li.active{
    border-bottom: 1px solid red;
}
</style>