<template>
    <div class="detail">
        <h1>详情页</h1>
        <button @click="goBack">返回</button>
        <br/>
        <br/>
        <p v-text="shopId"></p>
    </div>
</template>
<style>
h1 {
  text-align: center;
}
</style>


<script>
import Vue from "vue";
import router from "../router";
export default Vue.extend({
  created() {
    this.$store.state.isShowFooter = 0;
    this.getShopId();
  },
  data() {
    return {
      shopId: null,
      loading:false,
      error:null,
    };
  },
  methods: {
    goBack() {
      router.go(-1);
    },
    getShopId() {
        console.log(this.$route.params.index);
        this.shopId=this.$route.params.index
    //   this.error = this.shopId = null;
    //   this.loading = true;
    //   // replace getPost with your data fetching util / API wrapper
    //   getPost(this.$route.params.index, (err, post) => {
    //     this.loading = false;
    //     if (err) {
    //       this.error = err.toString();
    //     } else {
    //       this.shopId = post;
    //     }
    //   });
    }
  }
});
</script>