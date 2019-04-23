<template>
    <div class="listcontent">
        <div class="title">
            <h3>{{title}}</h3>
            <span>{{txt}}</span>
        </div>
        <p>{{content}}</p>
        <div class="time">
            <p>面试时间：{{time}}</p>
            <span>已提醒</span>
        </div>
    </div>
</template>
<script>
export default {
    props:['title','content','time','num'],
    components:{

    },
    data(){
        return {
            txt:''
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        console.log(this.num);
        if(this.num ==1){
            this.txt="未开始"
        }
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .listcontent .title{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        align-items: center;
        box-sizing: border-box;
    }
    .listcontent .time{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        box-sizing: border-box;
    }
</style>
