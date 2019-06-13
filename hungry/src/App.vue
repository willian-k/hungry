<template>
    <div id="app">
        <router-view/>
        <MyLoading/>
    </div>
</template>

<style lang="scss">
@import "./assets/style/home/home.css";
// @import "./assets/style/home/vue-swiper.css";
@import "./assets/style/home/vendor.css";
@import "./assets/style/iconfont.css";
.index-wrapper_1Rsz2pX i {
    // height: 5.333333vw;
    // width: 5.333333vw;
    font-size: 0.45222rem;
}

.index-footerTabText_1It8yh0 {
    margin-bottom: 0.1rem;
}
.icon-changyonglogo40 {
    transform: scale(2);
}
</style>
<script>
import Vue from "vue";
import MyLoading from "./components/MyLoading";
export default Vue.extend({
    components: {
        MyLoading
    }
});
</script>
