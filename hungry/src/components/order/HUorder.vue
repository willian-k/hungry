<template>
    <div>
        <section data-v-1ec2d114 class="nodatatipWrap NoDataTip-wrapper_1Gwf0tm" style>
            <img src="//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png">
            <h3>登录后查看外卖订单</h3>
            <!---->
            <button @click="toLogin">立即登录</button>
        </section>
        <div data-v-1ec2d114 infinite-scroll-distance="20" class="orderbody">
            <!---->
            <div data-v-1ec2d114 class="orderbody-bottom">
                <p data-v-1ec2d114 class="loading" style="display: none;">
                    <svg data-v-1ec2d114 class="loading-svg">
                        <use data-v-1ec2d114 xlink:href="#loading"></use>
                    </svg>
                </p>
                <!---->
                <!---->
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    data() {
        return {};
    },
    components: {},
    methods: {
        toLogin() {
            // this.$router.push("login");
            let routeData = this.$router.resolve({
                name: "login",
                query: { goodsId: "1111" }
            });
            window.open(routeData.href, "_self");
        }
    }
};
</script>

<style lang="scss" scoped>
</style>