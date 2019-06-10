<style>
@import "../assets/weui.css";
</style>
<template>
    <div id="loadingToast" :style="{
    opacity: loading?1:0, 
     display: loading?'block':'none'
     }">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <i class="weui-loading weui-icon_toast"></i>
            <p class="weui-toast__content">数据加载中</p>
        </div>
    </div>
</template>
<script>
export default {
  computed: {
    loading() {
      // console.log(this);
      return this.$store.state.loading;
    }
  }
};
</script>
