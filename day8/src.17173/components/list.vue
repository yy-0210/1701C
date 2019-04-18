<template>
    <div>
        <dl>
            <dt>
                <img :src="img" alt="">
            </dt>
            <dd>
                <span>{{title}}</span>
                <span>{{getTime}}</span>
            </dd>
        </dl>
    </div>

</template>
<script>
export default {
    props: ["img", "title", "time"],
    data() {
        return {};
    },
    computed: {
        getTime() {
            return new Date(this.time).toLocaleDateString();
        }
    }
};
</script>

<style scoped lang="scss">
    @import '../scss/common.scss';
    @import '../scss/_mixin.scss';
    div{
       dl{
           @include box_flex;
       } 
    }

</style>

