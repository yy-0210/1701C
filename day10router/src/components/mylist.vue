<template>
    <dl @click="goToDetail" :class="{'active': !flag}">
        <dt>
            <img :src="img" alt="">
        </dt>
        <dd>
            <p>{{title}}</p>
            <span>{{time}}</span>
            <span>{{num}}</span>
        </dd>
    </dl>
</template>
<script>
export default {
    props:['img','title','num','time','id','flag'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        goToDetail(){
            console.log('goToDetail');
            this.$router.push({name:'detail',params:{id:this.id}});
            this.$emit('changeColor',this.id);
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
dl{
    display: flex;
}
dl dt{
    height: 120px;
    width: 120px;
}
dl dt img{
    height: 100%;
    width: 100%;
}
dl.active{
    color: #ccc;
}
</style>