<template>
  <div id="app">
    <router-view/>
    <MyLoading/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
import Vue from "vue";
import MyLoading from "./components/MyLoading"
export default Vue.extend({
    components:{
      MyLoading,
    }
})
</script>
