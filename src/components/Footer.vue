<style>
@import url("../css/footer.css");
</style>

<template>
  <div class="_3jvb2nTFcJZaKfGT3jLO-N" v-show="isShowFooter">
    <div class="_2_zO9X158TTb_XBigSBXaa">
      <a @click="hightLight(index)" v-for="(item,index) in tabs" :key="index" class="vhHLSLSvFKDyfNbVNtOGV" :class="{' _1XFdFVvdIV2Kk5DvkemeIS':tab==index}">
        <div class="_3qJAJgmwFK8XUy7QH5OT8t" :class="item.className"></div>
        <div class="_2q_OgZBvsix_vxRGtxelUo" v-text="item.name"></div>
      </a>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      tabs: [
        {
          name: "首页",
          url: "home",
          className: "_2JMxUK2tV5fNkgpziy4SwV"
        },
        {
          name: "订单",
          url: "order",
          className: "_26drFUnsVh-214x7eRutxe"
        },
        {
          name: "我的",
          url: "mine",
          className: "NofT5VOaEk7jwz6aM-096"
        }
      ],
      tab: 0
    };
  },
  computed: {
    isShowFooter() {
      return this.$store.state.isShowFooter;
    }
  },
  methods: {
    hightLight(index) {
      //router push
      //策略者模式，代替了传统的<router link>
      this.tab = index;
      this.$router.push({ name: this.tabs[index].url });
      console.log(this.$router);
      //你点击的当前位置
    }
  }
});
</script>
