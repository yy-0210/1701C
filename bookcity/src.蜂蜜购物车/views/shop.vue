<template>
    <div>
        <div class="shop" v-for="(item,index) in getBuyList" :key="index">
            <span :class="['check',{'active': item.flag}]" @click="check(index)"></span>
           <dl>
               <dt>
                   <img :src="item.img" alt="">
               </dt>
               <dd>
                   <p>{{item.title}}</p>
                   <p>{{item.price}}</p>
                   <span @click="add({index,n:item.count-1})">-</span>
                   <span>{{item.count}}</span>
                   <span @click="add({index,n:item.count+1})">+</span>
               </dd>
           </dl>
        </div>
        <div>
            <span :class="['check',{'active':allCheck}]" @click="allClick"></span>
            <span>全选</span>
            <span>总价{{getTotalPrice}}</span>
        </div>
    </div>
</template>
<script>
import {mapGetters,mapMutations} from 'vuex';
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            allCheck:false
        }
    },
    computed:{
        ...mapGetters(['getBuyList','getTotalPrice'])
    },
    methods:{
        ...mapMutations(['checkClick','allClickMutaions','add']),
        check(ind){
            this.checkClick(ind);
            this.allCheck = this.getBuyList.every(item => item.flag);
            // console.log(this.allCheck);
        },
        allClick(){
            this.allCheck = !this.allCheck;
            this.allClickMutaions(this.allCheck);
        }
    },
    created(){
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.shop{
    display: flex;
}
.check{
    display: inline-block;
    height: 36px;
    width: 36px;
    border: 1px solid #ccc;
    border-radius: 100%;
}
.active{
    background: coral;
}
</style>