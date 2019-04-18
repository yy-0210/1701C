<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <list v-for="(item,index) in arr" 
    :key="index" 
    :grade="item.grade" 
    :count="item.count" 
    :img="item.img" 
    :styles="item.styles"
    :ind="index"
    @addCount="add"
    ></list>
  </div>
</template>

<script>
import list from "./components/list";
export default {
    name: "App",
    data() {
        return {
            arr: [
                {
                    grade: "1701C",
                    count: 24,
                    styles: {
                        height: "120px",
                        width: "120px",
                        display: "inline-block"
                    },
                    img: [
                        "http://fc-feed.cdn.bcebos.com/0/pic/01b120fe2ef8ac32434ea85f8a2a4b57.jpg",
                        "http://fc-feed.cdn.bcebos.com/0/pic/9c7efec6a4d68655b97e7cb1ba9dde24.jpg",
                        "http://fc-feed.cdn.bcebos.com/0/pic/2956c0fdca0fecb290feaa14f1b039c4.jpg"
                    ]
                },
                {
                    grade: "1701B",
                    count: 40,
                    styles: {
                        height: "120px",
                        width: "120px",
                        display: "inline-block"
                    },
                    img: [
                        "http://fc-feed.cdn.bcebos.com/0/pic/01b120fe2ef8ac32434ea85f8a2a4b57.jpg",
                        "http://fc-feed.cdn.bcebos.com/0/pic/9c7efec6a4d68655b97e7cb1ba9dde24.jpg",
                        "http://fc-feed.cdn.bcebos.com/0/pic/2956c0fdca0fecb290feaa14f1b039c4.jpg"
                    ]
                }
            ]
        };
    },
    components: {
        list
    },
    methods:{
      add(count,ind){
        console.log(count,ind);
      }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
