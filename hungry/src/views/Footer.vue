<template>
    <footer class="index-wrapper_1Rsz2pX" v-if="1">
        <div class="index-footer_Gtduid_">
            <a
                v-for="(item,index) of content"
                :href="item.path"
                class="index-footerTab_bl0lbJN"
                :class="{
                    'index-footerTabTextActive_3gjOLc6':bool == index
                }"
                :key="index"
            >
                <i :class="item.icon"></i>
                <!-- <svg class="index-footerTabIcon_1EbB8wS">
                        <use xlink:href="#h5-component-index">
                        <svg viewBox="0 0 22 22" id="h5-component-index" width="100%" height="100%">
                            <path
                                fill="url(#h5-component-index-a)"
                                fill-rule="evenodd"
                                d="M16.822 17.089l.456.707c.212.33.14.778-.174 1.033a9.91 9.91 0 0 1-.767.555 9.817 9.817 0 0 1-7.473 1.395 9.867 9.867 0 0 1-6.265-4.334C-.383 11.822.927 5.618 5.52 2.616a9.81 9.81 0 0 1 7.475-1.394 9.866 9.866 0 0 1 6.264 4.334c.166.258.323.528.466.803.19.385.072.82-.262 1.039l-9.05 5.916a.783.783 0 0 1-1.086-.232l-.47-.73a1.668 1.668 0 0 1 .484-2.295l5.766-3.769a.286.286 0 0 0 .03-.455 6.576 6.576 0 0 0-7.821-.434 6.636 6.636 0 0 0-2.877 4.213 6.671 6.671 0 0 0 .926 5.026c1.99 3.085 6.104 3.968 9.17 1.969a1.65 1.65 0 0 1 2.288.482zm3.878-5.445c.56.863.314 2.02-.549 2.58l-.906.59a.786.786 0 0 1-1.086-.232l-1.177-1.812a.787.787 0 0 1 .23-1.086l1.813-1.176a.783.783 0 0 1 1.086.23l.589.906z"
                            ></path>
                        </svg>
                        </use>
                </svg>-->

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