<template>
    <div>
        <div class="page">
            <choose-item v-for="(item,index) in list"
            :key="index"
            :Subject="item.Subject"
            :Content="item.Content"
            :Layout="item.Layout"
            ></choose-item>
        </div>
        <my-footer></my-footer>
    </div>
</template>
<script>
import chooseItem from '../components/choose-item';
export default {
    props: {},
    components: {
        chooseItem
    },
    data() {
        return {
            list:[]
        };
    },
    computed: {},
    methods: {},
    created() {
        this.$http.get('/api/catagory').then((res)=>{
            console.log(res.data);
            this.list = res.data;
        });
    },
    mounted() {}
};
</script>
<style scoped lang="">
.page{
    overflow-y: auto;
}
</style>