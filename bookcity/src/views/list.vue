<template>
    <div class="list">
        <div class="left">
            <ul>
                <li>1111</li>
                <li>1111</li>
                <li class="active">1111</li>
                <li >1111</li>
            </ul>

        </div>
        <div class="right"></div>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        ...mapActions(['getList'])
    },
    created(){
        console.log(this);
        this.getList();
    //    this.$store.dispatch('getList');
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.list{
    display: flex;
}
.left{
    height: 100%;
    width: 120px;
}
.left li{
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #ccc;
}
.left li.active{
    background: #fff;
}
.right{
    height: 100%;
   flex: 1;
}
</style>