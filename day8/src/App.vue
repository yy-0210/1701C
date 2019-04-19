<template>
    <div class="wrapper">
        <div class="content">
            <div class="left">
                <ul>
                    <li v-for="(item,index) in classify" :key="index" :class="{'active':index == ind}" @click="change(index,item.type)">{{item.title}}</li>
                </ul>
            </div>
            <div class="right">
                <my-list v-for="(item1,index1) in list" :key="index1"
                :title="item1.title"
                :price="item1.price"
                :num="item1.num"
                :id="item1.id"
                :type="item1.type"
                ></my-list>
            </div>
        </div>
        <footer>
            <div>
                <span>总数：{{totalCount}}</span>
                <span>总价：{{totalPrice}}</span>
            </div>
        </footer>
    </div>
</template>
<script>
import classify from './js/classify';
import list from './js/list';
import myList from './components/my-list';
export default {
    props:{

    },
    components:{
        myList
    },
    data(){
        return {
            classify:[],
            list:[],
            buyList:[],
            ind:0
        }
    },
    computed:{
        totalPrice(){//[1,2,3]
            return this.buyList.reduce((prev,cur)=> prev + cur.num * cur.price,0);
        },
        totalCount(){
            return this.buyList.reduce((prev,cur)=> prev + cur.num ,0);
        }
    },
    methods:{
        getList(list,type){ //刷选数据
            return list.filter(item => item.type == type);
        },
        change(ind,type){ //切换
            this.ind = ind;
            this.list = this.getList(list,type);
        }
    },
    created(){
        this.classify = classify;
        //刷新之后的数据
        this.list = this.getList(list,this.classify[0].type);
        console.log(this);
        this.$bus.$on('addCount',(num,id)=>{
            console.log(num);
            let index = this.list.findIndex(item => item.id == id);
            this.list[index].num = num;
            let ind = this.buyList.findIndex(item => item.id==id);
            if(ind == -1){
                this.buyList.push(this.list[index]);
            }
        });
    },
    mounted(){

    }
}
</script>
<style lang="">
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    html,body{
        height: 100%;
        width: 100%;
    }
    .wrapper{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    footer{
        height: 50px;
        width: 100%;
        border-top: 1px solid #ccc;
    }
    .content{
        flex: 1;
        width: 100%;
        display: flex;
    }
    .left{
        width: 120px;
        height: 100%;
        border-right: 1px solid #ccc;;
    }
    li{
        height: 80px;
        line-height: 80px;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }
    li.active{
        color: red;
    }
    .right{
        flex: 1;
    }
</style>