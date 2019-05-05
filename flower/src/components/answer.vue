<template>
    <div>
        <div>
            <h3>{{answerList[num].title}}</h3>
            <ul>
                <li v-for="(item1,index1) in answerList[num].answer" 
                :key="index1"
                :class="{'active':index1 == ind}"
                @click="change(item1,index1)"
                >
                    {{item1.answer_name}}
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
import { mapState,mapMutations,mapActions } from "vuex";
export default {
    props: {},
    components: {},
    data() {
        return {};
    },
    computed: {
        ...mapState(["answerList", "num","ind"])
    },
    methods: {
        ...mapMutations(['changeInd']),
        ...mapActions(['changeActions']),
        change(item1,index){
            console.log(this.num ,this.answerList.length);
            if(this.num == this.answerList.length -1){ //如果是最后一题，跳转到结果页面
                setTimeout(()=>{
                    this.$router.push({path:'/last'});
                },1500);
            }
            this.changeInd(index);
            this.changeActions(item1);
        }
    },
    created() {},
    mounted() {}
};
</script>
<style scoped lang="">
li{
    padding: 0 10px;
    box-sizing: border-box;
    line-height: 44px;
}
li.active{
    color: red;
}
</style>