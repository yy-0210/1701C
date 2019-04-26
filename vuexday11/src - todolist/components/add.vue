<template>
    <div class="add">
        <input type="text" v-model="val">
        <button @click="addList(val)">点击</button>
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
            val:''
        }
    },
    computed:{

    },
    methods:{
        ...mapActions(['addList'])
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.add {
    display: flex;
    width: 80%;
    margin:0 10% ;

}
input{
    flex: 1;
}
button{
    width: 200px;
    height: 44px;
    line-height: 44px;
    text-align: center;
}
</style>