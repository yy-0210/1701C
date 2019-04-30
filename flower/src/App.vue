<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
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
#app,html,body {
    height: 100%;
    width: 100%;
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
</style>
