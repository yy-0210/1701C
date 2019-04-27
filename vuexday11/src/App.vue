<template>
    <div class="wrapper">
        <div class="content">
            <div class="left">
                <ul class="leftlist">
                    <li v-for="(item,index) in getClassify" :key="index" :class="{'active':index == ind}" @click="change(index,item.type)">{{item.title}}</li>
                </ul>
            </div>
            <div class="right">
                <my-list v-for="(item1,index1) in getList(getClassify[ind].type)" :key="index1"
                :title="item1.title"
                :price="item1.price"
                :num="item1.num"
                :id="item1.id"
                :type="item1.type"
                ></my-list>
            </div>
        </div>
        <footer>
            <my-dialog v-show="isShow" :buyList="getBuyList"></my-dialog>
            <div @click="showDialog">
                <span>总数：{{getTotalPrice}}</span>
                <span>总价：{{getTotalCount}}</span>
            </div> 
        </footer>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
import myList from './components/my-list';
import myDialog from './components/dialog';
export default {
    props:{

    },
    components:{
        myList,
        myDialog
    },
    data(){
        return {
            // classify:[],
            // list:[],
            // buyList:[],
            ind:0,
            isShow:false
        }
    },
    computed:{
        ...mapGetters(['getClassify','getList','getTotalPrice','getTotalCount','getBuyList'])
    },
    methods:{
        change(ind,type){ //切换
            this.ind = ind;
        },
        showDialog(){
            this.isShow = !this.isShow;
        }
    },
    created(){
        console.log(this);
       
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
    .leftlist li{
        height: 80px;
        line-height: 80px;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }
   .leftlist li.active{
        color: red;
    }
    .right{
        flex: 1;
    }
</style>