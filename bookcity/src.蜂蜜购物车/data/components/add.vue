<template>
    <div class="addinput">
        <input type="text" v-model="val">
        <!-- <p>{{val}}</p> -->
        <button @click="addList(val)">添加</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            val:''
        }
    },
    computed:{

    },
    methods:{
        ...mapActions(['addList'])
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.addinput {
    width: 80%;
    margin: 0 10%;
    display: flex;
}
input {
    flex: 4;
}
button {
    flex: 1;
}
</style>