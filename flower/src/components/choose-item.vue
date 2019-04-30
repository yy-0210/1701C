<template>
    <div>
        <h3>{{Subject}}</h3>
        <div class="list">
            <dl v-for="(item,index) in Content" 
            :key="index"
            :class="[{'border':Layout=='border'},{'active':index == ind}]"
            @click="listChange(index,Subject,item.Label)"
            >
                <dt>
                    <img :src="item.Icon" alt="">
                </dt>
                <dd>
                    <span>{{item.Label}}</span>
                </dd>
            </dl>
        </div>

    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    props: ["Subject", "Content","Layout"],
    components: {},
    data() {
        return {
            ind:null
        };
    },
    computed: {},
    methods: {
        ...mapMutations(['getList']),
        listChange(ind,Subject,Label){
            this.ind = ind;
            let obj={
                Subject,
                Label
            }
            this.getList(obj);
            console.log(obj);
        }
    },
    created() {},
    mounted() {}
};
</script>
<style scoped lang="">
.list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
dl {
    width: 33.3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
dl.border {
    border: 1px solid #ccc;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
}
dl.active{
    border: 1px solid red;
    box-sizing: border-box;
}
</style>