<template>
    <div class="detailmore" v-if="isAppearence">
        <div data-v-425277ec="" class="foodpanel-root_SzxU5" style="position:fixed;z-index:5">
            <div class="foodpanel-close_1_uql" @click="close">
                <img src="../assets/close.png" alt="">
            </div>
            <div class="foodpanel-body_2RnD3">
                <div class="foodpanel-foodimg_15mlk">
                    <img :src="getImg(data.image_path)" alt=".1个鸡腿堡+1条鸡肉卷.">
                </div>
                <div class="foodpanel-foodinfo_3TGO2">
                    <div class="foodpanel-foodname_1WIeM">
                        <!---->
                        <p class="foodpanel-content_1evFj" v-text="data.name"></p>
                        <!---->
                    </div>
                    <div class="foodpanel-foodsales_1RSMf">
                        <span v-text="data.tips.slice(4)"></span>
                        <span v-text="`好评率${data.satisfy_rate}%`"></span>
                    </div>
                    <div class="foodpanel-priceLine_17q14">
                        <span class="salesInfo-price_3_oc1_0 foodpanel-salesInfo_3pRJz" style="color: rgb(255, 83, 57);">
                            <span v-text="data.lowest_price"></span>
                            <!---->
                            <del class="salesInfo-originPrice_3GIqu_0">
                                ¥19.8
                            </del>
                        </span>
                        <div class="foodpanel-activityRow_39KPY">
                            <span class="foodcommon-activity_2wCAV">
                                <span class="mini-tag-tag_1I2lF_0">5.5折
                                    <span class="foodcommon-rateGhost_1xmLU mini-tag-ghost_2_w2f_0">5.5折</span>
                                </span>
                                <!---->
                            </span>
                            <!---->
                        </div>
                        <span class="foodpanel-cartBtn_2n3F_">
                            <!---->
                            <span class="cartbutton-entitybutton_9fUdS">
                                <a href="javascript:" role="button" aria-label="删减商品" class="btns" @click="data.type=reduce(data.name,data.type,data.lowest_price)" v-if="data.type"><img src="../assets/reduce.png" alt=""></a>
                                <span role="button" aria-label="已选1份" class="cartbutton-entityquantity_-YXiq buynum" v-text="data.type=data.type<0?0:data.type&&data.type>10?10:data.type" v-if="data.type">
                                    1
                                </span>
                                <a href="javascript:" role="button" aria-label="添加商品" class="btns" @click="data.type=plus(data.name,data.type,data.lowest_price)">
                                    <img src="../assets/add.png" alt="">
                                </a>
                            </span>
                        </span>
                    </div>
                    <!---->
                </div>
                <!---->
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    isAppearence() {
      return this.$store.state.isAppearence;
    },
    data() {
      return this.$store.state.dataObj;
    }
  },
  methods: {
    close() {
      this.$store.state.isAppearence = 0;
    },
    getImg(img) {
      var houzhui = img.slice(-3);
      // console.log(houzhui)
      if (houzhui != "png") {
        houzhui = "jpeg";
      }
      var newImg = `https://fuss10.elemecdn.com/${img.slice(0, 1)}/${img.slice(
        1,
        3
      )}/${img.slice(
        3,
        32
      )}${houzhui}.${houzhui}?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`;
      return newImg;
    },
    plus(commodity, num, price) {
      if (num < 10) {
        num++;
        this.$store.state.sum -= -price;
        this.$store.state.sum = this.$store.state.sum.toFixed(2);
        console.log(this.$store.state.sum);
        return num;
      } else {
        return 10;
      }
    },
    reduce(commodity, num, price) {
      if (num > 0) {
        num--;
        this.$store.state.sum -= price;
        this.$store.state.sum = this.$store.state.sum.toFixed(2);
        return num;
      }else{
          return 0
      }
    }
  }
};
</script>
