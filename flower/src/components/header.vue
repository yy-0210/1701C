<template>
    <div class="title">
        <div v-for="(item,index) in answerList" :key="index">
            <p v-if="item.flag== true">√</p>
            <p v-if="item.flag == false">×</p>
            <span>{{item.type}}</span>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
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
        ...mapState(['answerList'])
    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.title{
    display: flex;
    width: 100%;
}
.title>div{
    flex: 1;
    text-align: center;
}
</style>