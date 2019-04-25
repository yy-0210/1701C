<template>
    <div>
        <div>add组件：{{count}}</div>
        <button>递增</button>
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
        ...mapState(['count'])
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

</style>