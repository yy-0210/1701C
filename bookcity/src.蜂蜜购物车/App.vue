<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
    <my-footer></my-footer>
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
  overflow: hidden;

}
#app {
  display: flex;
  flex-direction: column;
}
#app>div{
  flex: 1;
}


</style>
