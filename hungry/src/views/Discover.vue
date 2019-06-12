<template>
    <div class>
        <HUdiscover></HUdiscover>
        <Footer></Footer>
    </div>
</template>

<script type="text/javascript">
import HUdiscover from "../components/discover/HUdiscover.vue";
import Footer from "./Footer.vue";
export default {
    data() {
        return {};
    },
    created() {
        this.$store.state.active = 1;
    },
    components: {
        HUdiscover,
        Footer
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/discover/discover.css";
@import "../assets/style/discover/vendor.css";
</style>