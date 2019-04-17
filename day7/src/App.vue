<template>
    <div>
        <h3>{{grade}}</h3>
        <p>{{count}}</p>
        <button @click="add">点击</button>
        <img :src="item" alt="" v-for="(item,index) in img" :key="index" :style="style">
    </div>
</template>

<script>
export default {
    data() {
        return {
            grade: "1701C",
            count: 24,
            style: {
                height: "120px",
                width: "120px"
            },
            img: [
                "https://t12.baidu.com/it/u=407621486,3327483872&fm=173&app=49&f=JPEG?w=218&h=146&s=A4B35D944ED3B480B62019E70300E072",
                "https://t10.baidu.com/it/u=1529882238,4115127854&fm=173&app=49&f=JPEG?w=218&h=146&s=8450EA215423A51531206F800300808F",
                "https://t11.baidu.com/it/u=9953584,516546664&fm=173&app=49&f=JPEG?w=218&h=146&s=0D408B460886085711F864B90300C092"
            ]
        };
    },
    methods:{
        add(){
            this.count++;
        }
    },
    computed: {
        
    },
    created(){

    }
};
</script>
