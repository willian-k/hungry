<template>
    <div>
        <!---->
        <div class="index-1ECZ3_0">
            <section id="activity-lego" class="index-1y1Q5_0">
                <div class="index-3xB2N_0">
                    <div class="index-Q3GS5_0 index-1xT5J_0">
                        <h3 scan-data="{item.title}" class="index-1qvN6_0">品质套餐</h3>
                        <div class="index-2W67h_0">搭配齐全吃得好</div>
                        <div class="index-1DFa7_0">
                            <!---->
                            立即抢购 &gt;
                        </div>
                        <img
                            src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/"
                        >
                    </div>
                    <!---->
                </div>
            </section>
            <!---->
            <div class="banner index-1-Na3_1">
                <div class="mint-swipe" style="height: 100%;">
                    <swiper :options="swiperOption" ref="mySwiper">
                        <swiper-slide class="slide" v-for="(item,index) of imgUrl">
                            <a href="javascript:;">
                                <img class="index-1eegU_1" :src="item.path">
                            </a>
                        </swiper-slide>
                        <!-- <swiper-slide>
                            <a href="javascript:;">
                                <img
                                    class="index-1eegU_1"
                                    src="https://fuss10.elemecdn.com/5/e6/955bdd098effd615d144441084118jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
                                >
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="javascript:;">
                                <img
                                    class="index-1eegU_1"
                                    src="https://fuss10.elemecdn.com/0/ff/edc9f276114b06237b7b50c21e505jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
                                >
                            </a>
                        </swiper-slide>-->
                    </swiper>
                    <!-- <div class="swiper-scrollbar"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>-->
                    <!-- <div class="swiper-pagination"></div> -->
                </div>
                <div class="index-FVZqI_1">资质证照</div>
            </div>
            <!---->
        </div>
        <div class="backtop BackTop-wrapper_3XDbcaq" style="display: none;">
            <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOCAxMSkiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgeD0iMi4yMzkiIHdpZHRoPSI5OC41MjIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDkwIDUxLjUgNjIuNDE3KSIgeD0iNi43MTciIHk9IjU3Ljk1OCIgd2lkdGg9Ijg5LjU2NSIgaGVpZ2h0PSI4LjkxNyIgcng9IjQuNDU4Ii8+PHJlY3QgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSByb3RhdGUoNDUgMCAtMjUuNzU3KSIgeD0iLTYuNjcxIiB5PSI0MC4xNzEiIHdpZHRoPSI3MS42NTIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDczLjkzOCA0NC42MykiIHg9IjM4LjExMiIgeT0iNDAuMTcxIiB3aWR0aD0iNzEuNjUyIiBoZWlnaHQ9IjguOTE3IiByeD0iNC40NTgiLz48L2c+PC9zdmc+"
                class="BackTop-icon_2Js4K94"
            >
        </div>
        <!---->
    </div>
</template>
<style scoped>
@import "../../../node_modules/swiper/dist/css/swiper.css";
.swiper-pagination {
    left: 50%;
    transform: translateX(-50%);
    bottom: 10%;
}
.swiper-pagination-bullet-active {
    opacity: 1;
    background: #007aff;
}
.swiper-pagination-bullet {
    width: 2.4vw;
    height: 0.4vw;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: 0.2;
}
</style>
<script type="text/javascript">
import Vue from "vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";

// require("swiper/dist/css/swiper.css");
export default {
    data() {
        return {
            swiperOption: {
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                }
            },
            imgUrl: [
                {
                    path:
                        "https://fuss10.elemecdn.com/7/05/bb01f6e34c18a0e12d39b7c98e6f6jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
                },
                {
                    path:
                        "https://fuss10.elemecdn.com/5/e6/955bdd098effd615d144441084118jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
                },
                {
                    path:
                        "https://fuss10.elemecdn.com/0/ff/edc9f276114b06237b7b50c21e505jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"
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

