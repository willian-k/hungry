<template>
  <div id="app" ref="app">
    <router-view/>
    <!-- footer组件与Home路由同级，为了底部组件一直出现-->
    <Footer/>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<script>
//导入组件
import Footer from './components/Footer.vue'
import Vue from 'vue'
export default {
  components:({
    //注册组件
    Footer
  })
}
</script>
