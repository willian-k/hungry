<template>
    <div class="detailcontent">
        <div class="app-dps8r">
            <div class="index-2guaN">
                <nav class="index-2g0nR index-2TCKU index-3dvSM" style="background-image: url(https://fuss10.elemecdn.com/d/a4/6fa25d26362cdc7d1a6adac56d7abpng.png?imageMogr/format/webp/thumbnail/750x/&quot;);">
                    <a href="http://localhost:8080" class="index--iRT3"></a>
                    <!---->
                </nav>
                <div class="index-ccm5A">
                    <div class="index-3X8sl">
                        <!----><img class="index-3eDRn" :src="getImg(rst.image_path)">
                    </div>
                    <!---->
                    <div class="index-2uv7r">
                        <h2 class="index-3jRsK">
                            <span class="index-UYhnL" v-text="rst.name"></span>
                            <i class="index-1_VRD"></i>
                        </h2>
                        <div class="index-24KTi">
                            <span class="index-2u0xV">评价4.8</span>
                            <span class="index-2u0xV">月售966单</span>
                            <span class="index-2u0xV">商家配送
                                <span>约42分钟</span>
                            </span>
                        </div>
                    </div>
                    <!---->
                    <div ubt-click="101178" class="index-2Ea3o">
                        <div class="index-2Gi26">
                            <div class="activity-1hPHa activity-2JHFT">
                                <span class="mini-tag-1Lyw4 activity-N5WvH" style="background-color: rgb(240, 115, 115);">满减
                                    <span class="activity-yP-9y mini-tag-1ezSQ" style="color: rgb(255, 255, 255);">满减</span>
                                </span>
                                <span class="activity-3dUjU">满20减1，满40减4，满60减8</span>
                            </div>
                        </div>
                        <div class="index-jk0Mt">2个优惠</div>
                    </div>
                    <p class="index-TmrYy">公告：本店在十五栋全家后面，欢迎小可爱们登陆月球探索更多秘密⊙∀⊙！</p>
                </div>
            </div>
            <!---->
            <!---->
        </div>
        <!---->
        <div id="shoptab" style="position: sticky; top: 0px; z-index: 2;">
            <div class="shop-tab-1MgBk">
                <div class="shop-tab-2ipt1 shop-tab-nD6jp">
                    <p class="shop-tab-2H0qT">
                        点餐
                        <span class="shop-tab-1GaSq" style="background-color: rgb(35, 149, 255);"></span>
                    </p>
                </div>
                <div class="shop-tab-2ipt1">
                    <p class="shop-tab-2H0qT">
                        评价
                        <span class="shop-tab-1GaSq" style="background-color: rgb(35, 149, 255);"></span>
                    </p>
                </div>
                <div class="shop-tab-2ipt1">
                    <p class="shop-tab-2H0qT">
                        商家
                        <span class="shop-tab-1GaSq" style="background-color: rgb(35, 149, 255);"></span>
                    </p>
                </div>
            </div>
        </div>
        <div>

            <div class="index-2yB8n">
                <div class="menuview-menuview_2hUkG">
                    <!---->
                    <div class="menuview-menuviewMain_17K3g">
                        <main class="menuview-main_i6fQ3">
                            <div class="menucategory-category_29kyE menuview-menuNav_2_lFf">
                                <ul class="menucategory-categoryWrapper_2z0aj">
                                    <li v-for="(item,index) in shopList" :key="index" role="button" aria-label="优惠" class=" menucategory-hasicon_2MBNs menucategory-categoryItem_3e27M levelNav" :class="{'menucategory-active_JnDmc':num==index}" @click="toLevel(index)">
                                        <!----><img class="menucategory-categoryIcon_375ij" src="https://fuss10.elemecdn.com/b/91/8cf4f67e0e8223931cd595dc932fepng.png?imageMogr/format/webp/thumbnail/26x/" v-if="index==0">
                                        <span class="menucategory-categoryName_qwsbd" v-text="item.name"></span>
                                    </li>

                                </ul>
                            </div>
                            <section data-v-425277ec="" class="container menuview-menuList_JqDMu" coupons-data="[object Object]">
                                <div data-v-425277ec="" class="scroller">
                                    <dl data-v-425277ec="" role="menu" v-for="(item,index) in shopList" :key="index" class="level">
                                        <dt data-v-425277ec="" role="heading" aria-label="优惠，美味又实惠，大家快来抢">
                                            <div data-v-425277ec="" class="category-title">
                                                <strong data-v-425277ec="" class="category-name" v-text="item.name"></strong>
                                                <span data-v-425277ec="" class="category-desc" v-text="item.description"></span>
                                            </div>
                                            <!---->
                                        </dt>
                                        <dd aria-label="月球煎饺，特，现价12元。" role="menuitem" v-for="(f,i) in item.foods" :key="i" @click="toDetailMore(f)">
                                            <div data-v-425277ec="" class="fooddetails-root_2HoY2">
                                                <span class="fooddetails-logo_2Q0S7">
                                                    <span class="attrTag-attrTag_2f7Ms_0 mini-tag-tag_1I2lF_0 fooddetails-attrTag_2TNes">新品
                                                        <span class="attrTag-newGhost_3oqLj_0 mini-tag-ghost_2_w2f_0">新品</span>
                                                    </span>
                                                    <img :src="getImg(f.image_path)" alt="月球煎饺" title="月球煎饺"></span>
                                                <section class="fooddetails-info_1fBtn">
                                                    <p class="fooddetails-name_P4hpW">
                                                        <!---->
                                                        <span class="fooddetails-nameText_250s_" v-text="f.name"></span>
                                                        <!---->
                                                    </p>
                                                    <p class="fooddetails-desc_3tvBJ" v-text="f.description"></p>
                                                    <p class="fooddetails-sales_1ETVq">
                                                        <span v-text="f.tips.slice(4)"></span>
                                                        <span v-text="`好评率${f.satisfy_rate}%`"></span>
                                                    </p>
                                                    <div class="fooddetails-activityRow_1FKti">
                                                        <span class="foodcommon-activity_2wCAV">
                                                            <span class="mini-tag-tag_1I2lF_0">7.5折
                                                                <span class="foodcommon-rateGhost_1xmLU mini-tag-ghost_2_w2f_0">7.5折</span>
                                                            </span>
                                                            <span class="mini-tag-tag_1I2lF_0">每单限1份优惠
                                                                <span class="foodcommon-rateTextGhost_1a27R mini-tag-ghost_2_w2f_0">每单限1份优惠</span>
                                                            </span>
                                                        </span>
                                                        <!---->
                                                    </div>
                                                    <span class="salesInfo-price_3_oc1_0 fooddetails-salesInfo_MPG41" style="color: rgb(255, 83, 57);">
                                                        <span v-text="f.lowest_price"></span>
                                                        <!---->
                                                        <del class="salesInfo-originPrice_3GIqu_0">
                                                            ¥12
                                                        </del>
                                                    </span>
                                                    <div class="fooddetails-button_RwKqC">
                                                        <span>
                                                            <!---->
                                                            <span class="cartbutton-entitybutton_9fUdS">
                                                                <a href="javascript:" role="button" aria-label="删减商品" class="btns reduce" :data-plus-id="i" @click.stop="f.type=reduce(f.name,f.type,f.lowest_price)" v-if="f.type">
                                                                    <img src="../assets/reduce.png" alt="">
                                                                </a>
                                                                <span role="button" aria-label="已选1份" class="cartbutton-entityquantity_-YXiq buynum" :data-commodity-num="i" v-text="f.type=f.type<0?0:f.type&&f.type>10?10:f.type" v-if="f.type">

                                                                </span>
                                                                <a href=" javascript: " role="button " aria-label="添加商品 " class="btns " :data-reduce-id="i " @click.stop="f.type=plus(f.name,f.type,f.lowest_price)">
                                                                    <img src="../assets/add.png" alt=" ">
                                                                </a>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </section>
                                            </div>
                                        </dd>

                                        <!---->
                                    </dl>

                                </div>
                                <div data-v-425277ec=" ">
                                    <div class="specpanel-mask_1zC4L " style="display: none; "></div>
                                    <div class="specpanel-root_QLZIb " style="display: none; ">
                                        <!---->
                                    </div>
                                </div>
                                <!---->
                            </section>
                        </main>
                        <div z-index="10 ">

                            <footer class="cartview-cartview_m8q55 " style="position:relative;z-index:9999999999">
                                <div class="cartview-cartmask_39Pun " style="z-index: 10; display: none; "></div>
                                <div class="cartview-cartbody_3QIXw " style="z-index: 11; ">
                                    <section class="discount-tip-discountTip_3QgtV_0 ">
                                        <span style="color: #333333; ">满20减1元，满40减4元，满60减8元</span>
                                    </section>
                                    <div style="opacity: 0; ">
                                        <div class="cartview-cartheader_1Wk12 ">
                                            <div class="cartview-headerText_1pEZG ">
                                                <span>已选商品</span>
                                                <!---->
                                                <!---->
                                            </div>
                                            <a href="javascript: " ubt-click="101179 " class="cartview-cartheaderRemove_1Xg8n ">
                                                <span>清空</span>
                                            </a>
                                        </div>
                                        <div class="entityList-cartbodyScroller_nZp54_0 ">
                                            <!---->
                                            <ul class="entityList-cartlist_1hnWi_0 "> </ul>
                                            <!---->
                                        </div>
                                    </div>
                                </div>
                                <div class="bottomNav-cartfooter_1Xb8t_0 " style="z-index: 11; ">
                                    <span role="button " aria-label="购物车 " attr-quantity="0 " class="bottomNav-carticon_E1nII_0 bottomNav-empty_3zwfj_0 ">
                                        <!---->
                                    </span>
                                    <div role="button " aria-label="购物车有商品0件，共0元，另需配送费1元。 " class="bottomNav-cartInfo_3l5zP_0 ">
                                        <p class="bottomNav-carttotal_1DJt5_0 ">
                                            <span :class="{'bottomNav-carttotalOriginal_2tu8R_0':total==0}" v-text="total!=0?'￥'+total:'未选购商品'"></span>
                                            <!---->
                                        </p>
                                        <p class="bottomNav-cartdelivery_1TjrT_0 ">另需配送费1元</p>
                                    </div>
                                    <a role="button " href="javascript:; " class="submit-btn-submitbutton_3t114_0 submit-btn-disabled_1DLSl_0 ">
                                        <span>¥10起送</span>
                                    </a>
                                </div>
                            </footer>
                            <!---->
                        </div>
                    </div>
                </div>
            </div>
            <!---->
        </div>
        <div class="index-AcI9j " style="display: none; ">
            <div class="Load-wrapper_3h35P-W index-2Djwj ">
                <div class="Load-loading-main_1LVs9py ">
                    <div class="Load-loading-icon_2LvpNhI "></div>
                </div>
            </div>
        </div>
        <div data-v-a153d4ac=" " class="shop-info " style="display: none; ">
            <!---->
            <section data-v-a153d4ac=" " class="section ">
                <h3 class="section-title ">配送信息</h3>
                <div class="delivery-2eZxp ">
                    <div>
                        <!---->
                        <span>由商家配送提供配送，约42分钟送达，距离173m</span>
                    </div>
                    <!---->
                    <div>配送费￥1</div>
                </div>
            </section>
            <section data-v-a153d4ac=" " class="section ">
                <h3 class="section-title ">商家服务</h3>
                <div class="activity-34NE9 ">
                    <div class="activity-1hPHa activity-25cwN ">
                        <span class="mini-tag-1Lyw4 activity-N5WvH " style="border: 1px solid rgb(153, 153, 153); ">保
                            <span class="activity-yP-9y mini-tag-1ezSQ " style="color: rgb(153, 153, 153); ">保</span>
                        </span>
                        <span class="activity-3dUjU ">该商户食品安全已由国泰产险承担，食品安全有保障</span>
                    </div>
                </div>
            </section>
            <section data-v-a153d4ac=" " class="section album-3hu5e ">
                <h3 class="section-title ">商家实景</h3>
                <div class="album-3VrB9 ">
                    <a href="javascript: "><img src="https://fuss10.elemecdn.com/4/cd/5bff4f5f7be1aec1381f1c5db7b5ejpeg.jpeg?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/ ">
                        <span class="album-3mg0R ">门面(2张)</span>
                    </a>
                    <a href="javascript: "><img src="https://fuss10.elemecdn.com/1/62/4f58d6cbd64986f3e458aa953ca03jpeg.jpeg?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/ ">
                        <span class="album-3mg0R ">大堂(3张)</span>
                    </a>
                </div>
            </section>
            <div data-v-a153d4ac=" ">
                <section class="section ">
                    <h3 class="section-title ">商家信息</h3>
                    <ul class="detail-3mz9N ">
                        <li>听说月球背面有许多的秘密哦！那我们一起去共同研究它吧！欢迎各位同学加入月球背面研究所，愿我们一起共同成长！</li>
                        <li>
                            <span>品类</span>
                            <span>其他快餐, 奶茶果汁</span>
                        </li>
                        <li>
                            <span>商家电话</span>
                            <span>
                                <span>18025187986</span>
                                <span class="detail-3m0Xz "></span>
                            </span>
                        </li>
                        <li>
                            <span>地址</span>
                            <span>东莞市麻涌镇麻三村中山大学新华学院东莞校区学生公寓15号楼层中间8号商铺</span>
                        </li>
                        <li>
                            <span>营业时间</span>
                            <span>10:50-22:00</span>
                        </li>
                    </ul>
                </section>
                <section class="section ">
                    <a href="https://h5.ele.me/shop/certification/#/?restaurant_id=E9310301041011211393 " class="section-title detail-XxlGz ">营业资质
                        <span class="detail-3m0Xz "></span>
                    </a>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      shopListNav: [],
      shopList: [],
      num: 0,
      rst: null,
      total: 0,
      totalContainer: 0,
      commodity: null,
    };
  },
  computed: {
    sum() {
      return this.$store.state.sum;
    }
  },
  created() {
    this.getList(() => {});
    (() => {
      this.$store.state.total = this.total;
      console.log(this.$store.state.total);
    })();
  },
  watch: {
    sum(oldNum,newNum){
       this.updateTotal(oldNum)
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        var scroller = document.querySelector(".scroller");
        console.log(scroller);
        scroller.onscroll = e => {
          // console.log(scroller.scrollTop);
          this.jumpLevel();
        };
      }, 3000);
    });
  },
  methods: {
    updateTotal(sum){
        this.total = sum
    },
    async getList() {
      this.$store.state.loading += 1;
      const list = await this.$axios(
        `https://www.easy-mock.com/mock/5cf69ea7ecc71a7ce6a6ad8a/example/detail1`
      );
      //   console.log(list);
      this.$store.state.loading -= 1;
      this.shopList = [...this.shopList, ...list.data.menu];
      this.rst = list.data.rst;
      console.log(this.shopList);
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
    toLevel(index) {
      var scroller = document.querySelector(".scroller");
      let levelNav = document.querySelectorAll(".levelNav");
      let level = document.querySelectorAll(".level");
      this.num = index;
      var tall = level[index].offsetTop;
      var itall = 100;
      clearInterval(distallTimer);
      var distallTimer = setInterval(function() {
        if (scroller.scrollTop >= tall) {
          //   console.log(1);
          var distall = scroller.scrollTop - itall;
          if (distall >= tall) {
            scroller.scrollTo(0, distall);
          } else {
            scroller.scrollTo(0, tall);
            clearInterval(distallTimer);
          }
        } else if (scroller.scrollTop < tall) {
          //   console.log(2);
          var distall = scroller.scrollTop + itall;
          if (distall <= tall) {
            scroller.scrollTo(0, distall);
          } else {
            scroller.scrollTo(0, tall);
            clearInterval(distallTimer);
          }
        }
      }, 20);
    },
    jumpLevel() {
      var scroller = document.querySelector(".scroller");
      let levelNav = document.querySelectorAll(".levelNav");
      let level = document.querySelectorAll(".level");
      //   console.log(level);
      for (var i = 0; i < levelNav.length; i++) {
        if (
          scroller.scrollTop <=
          level[i].offsetTop + level[i].offsetHeight - 10
        ) {
          this.num = i;
          //   console.log(scroller.scrollTop)
          //   console.log(this.num)
          break;
        }
      }
    },
    plus(commodity, num, price) {
      if (num < 10) {
          console.log('if')
        this.total = this.$store.state.sum;
        num++;
        console.log(num);
        this.total -= -price;
        this.total = this.total.toFixed(2);
        this.$store.state.sum = this.total;
        return num;
      }else{
          console.log('else')
         return 10
      }
    },
    reduce(commodity, num, price) {
      if (num > 0) {
        this.total = this.$store.state.sum;
        num--;
        this.total -= price;
        this.total = this.total.toFixed(2);
        this.$store.state.sum = this.total;
        return num;
      } else {
        return 0;
      }
    },
    toDetailMore(data) {
      this.$store.state.dataObj = data;
      this.$store.state.isAppearence = 1;
      console.log(this.$store.state.dataObj);
    }
  }
};
</script>