<template>
    <div>
        <h3>{{grade}}</h3>
        <p>{{count}}</p>
        <button @click="$emit('addCount',count)">点击</button>
        <img :src="item" alt="" v-for="(item,index) in img" :key="index" :style="styles">
    </div>
</template>

<script>
export default {
    // props:['grade','count','styles','img'],
    // props:{
    //     grade:String,
    //     count:Number
    // },
    props: {
        grade: {
            type: String,
            required: true,
            default: "9999"
        },
        count: {
            type: Number,
            validator(val) {
                //自定义的验证函数，如果校验失败的话，开发版本会抛出一个控制台错误。
                return val > 20;
            }
        },
        styles: {
            type: Object
        },
        img: {
            type: Array,
            default() { //如果类型是数组或者对象的时候，default需要是一个函数，并且把结果return
                return [
                    "https://t11.baidu.com/it/u=3139249624,1759339035&fm=173&app=49&f=JPEG?w=218&h=146&s=66F1C27E48C0CC4906AB8FA90200E00E",
                    "https://t10.baidu.com/it/u=3783537696,1132800417&fm=173&app=49&f=JPEG?w=218&h=146&s=CF926D8DD9733382513984970300C0C2",
                    "https://t12.baidu.com/it/u=3769686320,1705006586&fm=173&app=49&f=JPEG?w=218&h=146&s=AC52AB4697140C77C2C5ED1B0100C083"
                ];
            }
        }
    },
    data() {
        return {
            //    grade:'1701X'
        };
    },
    methods: {
        add() {
            // this.count++;
        }
    },
    computed: {},
    created() {
        console.log(this);
    }
};
</script>