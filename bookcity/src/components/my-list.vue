<template>
   <dl>
       <dt>
           <img :src="item.img" alt="">
       </dt>
       <dd>
           <p>{{item.title}}</p>
           <p>{{item.content}}</p>
           <p>{{item.price}}</p>
           <span @click="goToShop(item)">购物</span>
       </dd>
   </dl>
</template>
<script>
import {mapGetters,mapMutations} from 'vuex';
export default {
    props:{
        item:Object
    },
    components:{

    },
    data(){
        return {
            // buyList:[]
        }
    },
    computed:{
        ...mapGetters(['getBuyList'])
    },
    methods:{
        ...mapMutations(['shop']),
        goToShop(obj){
            let index = this.getBuyList.findIndex(item => item.id == obj.id);
            if(index == -1){
                // obj.count = 1;
                this.$set(obj,'count',1); //后添加进来的数据，需要追踪，用this.$set(要改变的对象,对象下边要添加哪个属性，当前属性的值是多少)
                this.$set(obj,'flag',false); //后添加进来的数据，需要追踪，用this.$set(要改变的对象,对象下边要添加哪个属性，当前属性的值是多少)
            } else {
                obj.count++;
            }
            this.shop(obj);
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>