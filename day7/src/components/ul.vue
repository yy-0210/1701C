<template>
    <div>
        <list></list>
    </div>
</template>
<script>
export default {
    data(){
        return{
            grade: "1612B",
            count: 24,
            style: {
                height: "120px",
                width: "120px"
            },
            img: [
                "https://t11.baidu.com/it/u=3139249624,1759339035&fm=173&app=49&f=JPEG?w=218&h=146&s=66F1C27E48C0CC4906AB8FA90200E00E",
                "https://t10.baidu.com/it/u=3783537696,1132800417&fm=173&app=49&f=JPEG?w=218&h=146&s=CF926D8DD9733382513984970300C0C2",
                "https://t12.baidu.com/it/u=3769686320,1705006586&fm=173&app=49&f=JPEG?w=218&h=146&s=AC52AB4697140C77C2C5ED1B0100C083"
            ]
        }
    },
    components:{
        list
    }
}
</script>
