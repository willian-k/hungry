<template>
    <footer class="index-wrapper_1Rsz2pX">
        <div class="index-footer_Gtduid_">
            <a
                v-for="(item,index) of content"
                :href="item.path"
                class="index-footerTab_bl0lbJN"
                :class="{
                    'index-footerTabTextActive_3gjOLc6':bool == index
                }"
            >
                <i :class="item.icon"></i>
                <span class="index-footerTabText_1It8yh0" v-text="item.name"></span>
            </a>
        </div>
    </footer>
</template>

<script type="text/javascript">
export default {
    data() {
        return {
            bool: null,
            content: [
                {
                    name: "首页",
                    icon: "iconfont icon-faxian",
                    path: "/"
                },
                {
                    name: "发现",
                    icon: "iconfont icon-faxian",
                    path: "discover"
                },
                {
                    name: "订单",
                    icon: "iconfont icon-icondd1",
                    path: "order"
                },
                {
                    name: "我的",
                    icon: "iconfont icon-wode",
                    path: "my"
                }
            ]
        };
    },
    components: {},
    beforeMount() {
        this.bool = this.$store.state.active;
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
</style>