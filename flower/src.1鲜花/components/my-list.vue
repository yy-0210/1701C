<template>
    <dl>
        <dt>
            <img :src="Image" alt="">
        </dt>
        <dd>
            <h3>{{Name}}</h3>
            <p>{{Introduction}}</p>
            <p v-if="NowPromo">{{NowPromo[0]}}</p>
            <p>{{Price}}</p>
            <p>{{Sales}}</p>
        </dd>
    </dl>
</template>
<script>
export default {
    props:['Image','Introduction','Name','NowPromo','Price','Sales'],
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
dl{
    display: flex;
}
dl dt{
    height: 120px;
    width: 100px;
}
dl dt img{
    height: 100%;
    width: 100%;
}
</style>