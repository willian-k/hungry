<template>
    <div class>
        我的
        <Footer></Footer>
    </div>
</template>

<script type="text/javascript">
import Footer from "./Footer.vue";
export default {
    data() {
        return {};
    },
    created() {
        this.$store.state.active = 3;
    },
    components: {
        Footer
    }
};
</script>

<style lang="scss" scoped>
</style>