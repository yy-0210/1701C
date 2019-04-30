<template>
    <div class="list">
        <header>
            <span><</span>
            <span>{{title}}</span>
        </header>
        <ul>
            <li>综合</li>
            <li @click="sortClick('sales')">销量</li>
            <li @click="sortClick('price')">价格</li>
            <li>最新</li>
        </ul>
        <div class="listContent">
            <my-list v-for="(item,index) in list" 
                :key="index"
                :Image="item.Image"
                :Introduction="item.Introduction"
                :Name="item.Name"
                :NowPromo="item.NowPromo"
                :Price="item.Price"
                :Sales="item.Sales"
            ></my-list>
        </div>

    </div>
</template>
<script>
import myList from '../components/my-list';
export default {
    props:{

    },
    components:{
        myList
    },
    data(){
        return {
            title:'',
            list:[]
        }
    },
    computed:{

    },
    methods:{
        sortClick(type){
            if(type == 'price'){
                this.list.sort((a,b)=>{
                    return b.Price -a.Price
                });
            } else if(type == 'sales'){
                this.list.sort((a,b)=>{
                    // console.log(a.Sales.includes('万'));
                    let aSales = a.Sales.includes('万') ? a.Sales.slice(0,a.Sales.length-1)*10000 : a.Sales;
                    let bSales = b.Sales.includes('万') ? b.Sales.slice(0,b.Sales.length-1)*10000 : b.Sales;
                    // if(a.Sales.includes('万')){
                    //     console.log(a.Sales.slice(0,a.Sales.length-1)*10000);
                    // } else {

                    // }
                    return bSales - aSales;
                });
            }
        }
    },
    created(){
        this.$http.get('/api/list').then((res)=>{
            console.log(res.data.Datas);
            this.title = res.data.Datas.FlowerListBanners.Title;
            this.list = res.data.Datas.FlowerList;
        });
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.list{
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.listContent{
    flex: 1;
    overflow-y: auto;
}
    header{
        height: 44px;
        width: 100%;
        background: coral;

    }
    ul{
        display: flex;
        height: 50px;
        width: 100%;
        border-bottom: 1px solid #ccc;
    }
    ul li{
        flex: 1;
        line-height: 50px;
        text-align: center;
    }
</style>