<template>
    <div>
        <div>add组件：{{$store.state.count}}</div>
        <button @click="add">递增</button>
    </div>
</template>
<script>
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
        add(){
            console.log(this);
            // this.$store.state.count++;
            this.$store.commit('add',5);//第一参数，就是mutations里面的方法名，第二个参数就是要给这个方法传递的参数
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