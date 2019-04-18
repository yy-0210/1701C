<template>
  <div class="wrapper">
      <my-header>
          <b>京东超市</b>
          <template v-slot:search>
                <button>搜索</button> 
          </template>
      </my-header>
      <my-header>
          <input type="text" placeholder="请输入">
      </my-header>
      <my-header>
          <!-- <span>商品</span><span>详情</span> -->
          <template v-slot:default="{list,num}">
              <ul>
                  <li v-for="(item,index) in list" :key="index">{{item.title}}</li>
              </ul>

          </template>
      </my-header>
  </div>
</template>

<script>
import myHeader from './components/my-header';
export default {
    name: "App",
    data() {
        return {
            list:[]
        };
    },
    components: {
        myHeader
    },
    methods:{
      
    },
    created(){
      
    }
};
</script>

<style lang="scss">
@import './scss/common.scss';
@import './scss/_mixin.scss';
.wrapper{
    font-size: pxTorem(16px);
    height: 100%;
    width: 100%;
    @include box_flex;
    @include direction(column);
    ul{
        @include box_flex;
    }
}
/* #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
} */
</style>
