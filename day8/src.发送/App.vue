<template>
  <div class="wrapper">
     <my-header></my-header>
     <my-content :list="list"></my-content>
     <my-footer @send="send"></my-footer>
  </div>
</template>

<script>
import myHeader from './components/my-header';
import myContent from './components/my-content';
import myFooter from './components/my-footer';
export default {
    name: "App",
    data() {
        return {
            list:[]
        };
    },
    components: {
        myHeader,
        myContent,
        myFooter
    },
    methods:{
      send(val){
          console.log(val);
          this.list.push(val);
      }
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
