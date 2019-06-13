<template>
    <div>
        <div class="mint-swipe foodentry">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- <div class="mint-swipe-items-wrap"> -->
                <swiper-slide>
                    <!-- <div class="mint-swipe-item"> -->
                    <a v-for="(item,index) of (menuList.slice(0,10))" href="/list" role="button">
                        <div ubt-visit-key="1" :ubt-data-title="item.name" class="container">
                            <img :src="item.imgUrl">
                            <!---->
                        </div>
                        <span class="title" v-text="item.name"></span>
                    </a>

                    <!-- </div> -->
                </swiper-slide>
                <swiper-slide>
                    <!-- <div class="mint-swipe-item"> -->
                    <a v-for="(item,index) of menuList.slice(10)" href="/list" role="button">
                        <div ubt-visit-key="1" :ubt-data-title="item.name" class="container">
                            <img :src="item.imgUrl">
                            <!---->
                        </div>
                        <span class="title" v-text="item.name"></span>
                    </a>

                    <!-- </div> -->
                </swiper-slide>
                <!-- </div> -->
            </swiper>
            <div class="swiper-pagination"></div>
            <!-- <div class="mint-swipe-indicators" style>
                <div class="mint-swipe-indicator is-active"></div>
                <div class="mint-swipe-indicator"></div>
            </div>-->
        </div>
    </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: ".swiper-pagination"
                }
            },
            menuList: [
                {
                    path: "/",
                    name: "美食",
                    imgUrl:
                        "https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                },
                {
                    path: "/",
                    name: "早餐",
                    imgUrl:
                        "https://fuss10.elemecdn.com/1/48/bf1a859bf81553bbcfd6cf4ac42cbjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                },
                {
                    path: "/",
                    name: "商超便利",
                    imgUrl:
                        "https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                },
                {
                    path: "/",
                    name: "水果",
                    imgUrl:
                        "https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                },
                {
                    path: "/",
                    name: "医药健康",
                    imgUrl:
                        "https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                },
                {
                    path: "/",
                    name: "浪漫鲜花",
                    imgUrl:
                        "https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                },
                {
                    path: "/",
                    name: "跑腿代购",
                    imgUrl:
                        "https://fuss10.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                },
                {
                    path: "/",
                    name: "汉堡披萨",
                    imgUrl:
                        "https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                },
                {
                    path: "/",
                    name: "厨房生鲜",
                    imgUrl:
                        "https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                },
                {
                    path: "/",
                    name: "炸鸡炸串",
                    imgUrl:
                        "https://fuss10.elemecdn.com/a/78/0fb469b2da210827ec16896e00420jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                },
                {
                    path: "/",
                    name: "地方菜系",
                    imgUrl:
                        "https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                },
                {
                    path: "/",
                    name: "麻辣烫",
                    imgUrl:
                        "https://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                },
                {
                    path: "/",
                    name: "速食简餐",
                    imgUrl:
                        "https://fuss10.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                },
                {
                    path: "/",
                    name: "地方小吃",
                    imgUrl:
                        "https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                },
                {
                    path: "/",
                    name: "大牌惠吃",
                    imgUrl:
                        "https://fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                },
                {
                    path: "/",
                    name: "米粉面馆",
                    imgUrl:
                        "https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                },
                {
                    path: "/",
                    name: "包子粥店",
                    imgUrl:
                        "https://fuss10.elemecdn.com/5/1a/dc885d2ce022d2ee60495acafb795jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
                }
            ]
        };
    },
    components: {
        swiper,
        swiperSlide
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
@import "../../../node_modules/swiper/dist/css/swiper.css";
.swiper-pagination {
    left: 50%;
    transform: translateX(-50%);
    // bottom: 10%;
}
</style>