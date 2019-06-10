<style>

/* @import url("../css/cssm.css"); */
@import "../css/cssm.css";
</style>
<template>
    <div class="app">
      <!-- 3.使用组件 -->
        <MyHeader/>
        <MyMain/>
        <MyLoading/>
         <MyFooter/>
    </div>
</template>
<script lang="js">
//1.引入组件
import { Component, Vue } from 'vue-property-decorator';
import MyHeader from '../components/MyHeader.vue';
import MyMain from '../components/MyMain.vue';
import MyFooter from '../components/MyFooter.vue';
import MyLoading from '../components/MyLoading.vue'
@Component({
  //2.注册组件
  components: {
    MyHeader,
    MyMain,
    MyFooter,
    MyLoading,
  }
})
//export default class "组件名" extends Vue
export default class Home extends Vue {
  created() {
     this.$store.state.isShowFooter = 1;
  }
}
</script>
