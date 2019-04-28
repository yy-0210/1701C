<template>
    <dl>
        <dt>
            <img :src="img" alt="">
        </dt>
        <dd>
            <p>{{title}}</p>
            <span>{{price}}</span>
            <my-count :id="id" :num="num" :ind="ind" :index="index"></my-count>
        </dd>
    </dl>
</template>
<script>

export default {
    props:['img','title','id','num','price','index','ind'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

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
dl dt{
    height: 120px;
    width: 120px;
}
dl dt img{
    height: 100%;
    width: 100%;
}
</style>