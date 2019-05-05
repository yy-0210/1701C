<template>
    <div>
        <h3>代办事项</h3>
        <ul>
            <li v-for="(item,index) in getListGetters" :key="index" :class="{'active':item.completed}" @dblclick="update(item)">
                <span>{{item.title}}</span>
                <span @click="delList(item.id)">删除</span>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    props: {},
    components: {},
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["getListGetters"])
    },
    methods: {
        ...mapActions(["getList", "updateList",'delList']),
        update(item) {
            const todos = {
                id: item.id,
                userId: item.userId,
                title: item.title,
                completed: !item.completed
            };
            this.updateList(todos);
        }
    },
    created() {
        this.getList();
    },
    mounted() {}
};
</script>
<style scoped lang="">
* {
    list-style: none;
}
ul {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 10%;
}
li {
    width: 33%.3%;
    height: 44px;
    line-height: 44px;
    background: seagreen;
    flex-shrink: 0;
    text-align: center;
    margin: 10px;
    padding: 5px 10px;
    box-sizing: border-box;
    color: #fff;
}
li.active {
    background: darkslateblue;
}
</style>