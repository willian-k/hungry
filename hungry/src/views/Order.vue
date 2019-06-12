<template>
    <div>
        <HUorder></HUorder>
        <Footer></Footer>
    </div>
</template>

<script type="text/javascript">
import HUorder from "../components/order/HUorder.vue";
import Footer from "./Footer.vue";
export default {
    data() {
        return {};
    },
    created() {
        this.$store.state.active = 2;

        console.log(this.$store.state.active);
    },
    components: {
        HUorder,
        Footer
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/order/order.css";
</style>