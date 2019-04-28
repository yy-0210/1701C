<template>
    <div class="dialog">

    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    props:['buylist'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapGetters(['getbuyList'])
    },
    methods:{

    },
    created(){
        console.log(this.buylist);
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.dialog{
    position: absolute;
    left: 0;
    bottom:50px;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.3)
}
</style>