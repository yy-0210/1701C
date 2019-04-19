<template>
  <div class="wrapper">
     <ul>
         <my-li v-for="(item,index) in arr" 
         :key="index"
         :title="item.title"
         :price="item.price"
         :count="item.count"
         :id="item.id"
         ></my-li>
     </ul>
     <div>总价：{{totalPrice}}</div>
  </div>
</template>

<script>
import myLi from './components/li';
import Eventbus from './js/eventbus';
export default {
    name: "App",
    data() {
        return {
            arr:[
                {
                    title:'苹果',
                    price:10,
                    count:0,
                    id:1
                },
                 {
                    title:'香蕉',
                    price:5,
                    count:0,
                    id:2
                }
            ],
            buyList:[]
        };
    },
    components: {
        myLi
    },
    methods:{
      
    },
    created(){
        // console.log(1111);
        
       this.$bus.$on('addCount',(num,ind)=>{
        //    console.log(2222);
        //    console.log(num,ind);
           let index = this.arr.findIndex(item => item.id==ind);
           this.arr[index].count = num;
           
           let current = this.buyList.findIndex(item => item.id == ind);
           if(current  == -1){
               this.buyList.push(this.arr[index]);
           }
            console.log(this.buyList);
       });
    },
    computed:{
        totalPrice(){// [1,2,3,4] // 0,1  1,2 3,3
            return this.buyList.reduce((prev,cur) => {
                return prev + cur.price * cur.count;
            },0);
        }
    }
};
</script>

<style lang="scss">
@import './scss/common.scss';
@import './scss/_mixin.scss';
.wrapper{
    font-size: pxTorem(16px);
    height: 100%;
    width: 100%;
    @include box_flex;
    @include direction(column);
    ul{
        // @include box_flex;
    }
}
/* #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
} */
</style>
