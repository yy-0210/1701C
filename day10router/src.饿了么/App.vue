<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <He> -->
    <router-view/>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;

  padding: 0;
  list-style: none;
}
html,body,#app{
  height: 100%;
  width: 100%;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
#app>div{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.page{
  flex: 1;
}
footer{
  height: 50px;
  width: 100%;
  display: flex;
  line-height: 50px;
  background: cornflowerblue;
}
footer a{
  flex: 1;
  text-align: center;
}
</style>
