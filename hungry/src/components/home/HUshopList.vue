<template>
    <div>
        <section class="NoDataTip-wrapper_1Gwf0tm" v-if="online()">
            <img src="//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png">
            <h3>没有结果</h3>
            <p>登录后查看更多商家</p>
            <button @click="toLogin">登录</button>
        </section>
        <section class="shoplist" v-if="!online()">
            <section
                class="index-container_10L_lQb shop-0"
                v-for="(item,index) of shopList"
                :key="index"
            >
                <div class="index-shopInfo_1RRTZ0d">
                    <div class="logo-container_XoH2Vit_0">
                        <div class="logo-main_21aInWJ_0">
                            <img
                                :alt="item.restaurant.name"
                                class="logo-logo_3S1eSkn_0"
                                :src="item.restaurant.image_path"
                            >
                            <!---->
                            <!---->
                        </div>
                        <!---->
                    </div>
                    <div class="index-main_N3FfcSz">
                        <section class="index-line_2-iYR1A">
                            <h3 class="index-shopname_39Y7e3U">
                                <i content="品牌" class="index-premium_39rl0v9">品牌</i>
                                <span v-text="item.restaurant.name"></span>
                            </h3>
                            <ul class="index-supportWrap_2lTcxr2">
                                <!---->
                                <span class="index-omit_1q3Tw0_">···</span>
                            </ul>
                        </section>
                        <section class="index-line_2-iYR1A">
                            <div class="index-rateWrap_39dWx_g">
                                <div class="Rating-wrapper_TYbDrku_0 index-stars_vPkk9Vv">
                                    <div class="Rating-gray_1kpffd5_0">
                                        <img
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
                                        >
                                    </div>
                                    <div class="Rating-actived_GBtiHkB_0" style="width: 92%;">
                                        <img
                                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeDI9IjEwMCUiIHkyPSI1MCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZERTAwIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGQjAwMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
                                        >
                                    </div>
                                </div>
                                <span class="index-rate_WsK58g8">4.6</span>
                                <span>月售2781单</span>
                            </div>
                            <div class="delivery-delivery_3gyT50e_0">
                                <!---->
                                <div
                                    content="蜂鸟专送"
                                    alt="蜂鸟专送"
                                    class="delivery-icon-hollow_3q8_B5r_0"
                                >蜂鸟专送</div>
                            </div>
                        </section>
                        <section class="index-line_2-iYR1A">
                            <div class="index-moneylimit_2fCq9W5">
                                <span>¥20起送</span>
                                <span>配送费¥4</span>
                                <!---->
                            </div>
                            <div class="index-timedistanceWrap_2Dp_kzY">
                                <span class="index-distanceWrap_1EPAlti">512m</span>
                                <span>30分钟</span>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="index-activityWrap_3mo1GyG">
                    <!---->
                    <section class="index-tagLine_1rJw_lq">
                        <!---->
                        <span class="mini-tag-tag_3Tm_6bw_0 index-tag_3oprLi5">
                            汉堡薯条
                            <span
                                class="index-tagGhost_1KCu_KY mini-tag-ghost_3DwLU8E_0"
                                style="color: rgb(102, 102, 102); border-color: rgb(221, 221, 221);"
                            >汉堡薯条</span>
                        </span>
                        <span class="mini-tag-tag_3Tm_6bw_0 index-tag_3oprLi5">
                            品质联盟
                            <span
                                class="index-tagGhost_1KCu_KY mini-tag-ghost_3DwLU8E_0"
                                style="color: rgb(51, 51, 51); border-color: rgb(221, 221, 221);"
                            >品质联盟</span>
                        </span>
                        <!---->
                    </section>
                    <span>
                        <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4="
                            class="index-dashedline_7B79b3W"
                        >
                    </span>
                    <section class="index-activities_25AUDsx">
                        <div class="index-activityList_1wvwwUY">
                            <div class="index-actRow_2f_uNNA">
                                <span class="index-iconWrap_1xJuKaY">
                                    <span
                                        class="index-icon_1fBCxBk"
                                        style="background-color: rgb(240, 115, 115);"
                                    >减</span>
                                </span>
                                <span class="index-desc_JLha7Vr">满55减10，满79减25</span>
                            </div>
                            <div class="index-actRow_2f_uNNA">
                                <span class="index-iconWrap_1xJuKaY">
                                    <span
                                        class="index-icon_1fBCxBk"
                                        style="background-color: rgb(241, 136, 79);"
                                    >换</span>
                                </span>
                                <span class="index-desc_JLha7Vr">特价商品5.9元起</span>
                            </div>
                            <div class="index-actRow_2f_uNNA" style="display: none;">
                                <span class="index-iconWrap_1xJuKaY">
                                    <span
                                        class="index-icon_1fBCxBk"
                                        style="background-color: rgb(112, 188, 70);"
                                    >首</span>
                                </span>
                                <span class="index-desc_JLha7Vr">新用户下单立减27元</span>
                            </div>
                            <div class="index-actRow_2f_uNNA" style="display: none;">
                                <span class="index-iconWrap_1xJuKaY">
                                    <span
                                        class="index-icon_1fBCxBk"
                                        style="background-color: rgb(153, 153, 153);"
                                    >票</span>
                                </span>
                                <span class="index-desc_JLha7Vr">该商家支持开发票，请在下单时填写好发票抬头</span>
                            </div>
                        </div>
                        <div class="index-activityBtn_tMk-e1C">
                            <span>4个活动</span>
                            <img
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
                                class
                            >
                        </div>
                    </section>
                </div>
                <!---->
            </section>

            <div class="LoadMore-wrapper_3WFhfHy">
                <!---->
                <div style class="LoadMore-loading_1ZyT4BS"></div>
                <span>正在加载...</span>
                <!---->
                <!---->
            </div>
            <div class="spinner" style="display: none;"></div>
        </section>
    </div>
</template>

<script type="text/javascript">
export default {
    data() {
        return {
            shopList: []
        };
    },
    components: {},
    created() {
        this.getShopList();
    },
    mounted() {
        this.reGetShopList();
    },
    methods: {
        online() {
            return this.$store.state.cookie;
        },
        toLogin() {
            // this.$router.push("login");
            let routeData = this.$router.resolve({
                name: "login",
                query: { goodsId: "1111" }
            });
            window.open(routeData.href, "_self");
        },
        async getShopList() {
            let data = await this.$axios(
                "https://www.easy-mock.com/mock/5cff741394f7562cd246c6bd/restaurants"
            );
            this.shopList = [...this.shopList, ...data.data.items];
        },
        reGetShopList() {
            let isok = true;
            window.onscroll = () => {
                if (scrollY > this.$el.offsetHeight - 50) {
                    if (isok) {
                        isok = false;
                        setTimeout(() => {
                            this.getShopList();
                            isok = true;
                        }, 500);
                    }
                }
            };
        }
    }
};
</script>

<style lang="scss" scoped>
</style>