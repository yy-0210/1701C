<template>
    <header>
        <span><</span>
        <slot>666</slot>
        <slot :list="list" :num="1111"></slot>
        <div>
            <slot name="search"></slot>
        </div>
        <span>...</span>
    </header>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            list:[
                {
                    title:'商品'
                },
                {
                    title:'详情'
                },
                {
                    title:'评价'
                }
            ]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        console.log(this);
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    header{
        height: 44px;
        width: 100%;
        background: cornflowerblue;
        margin-bottom: 10px;
    }
</style>