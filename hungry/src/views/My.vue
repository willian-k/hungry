<template>
    <div class="profile-1vcJW" id="main">
        <div>
            <Main1/>
            <Main2/>
            <Main3/>
            <Main4/>
            <Main5/>
            <Main6/>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
// import '../components/my/html.css';
// import '../components/my/html1.css';
import Main1 from "../components/my/Main1.vue";
import Main2 from "../components/my/Main2.vue";
import Main3 from "../components/my/Main3.vue";
import Main4 from "../components/my/Main4.vue";
import Main5 from "../components/my/Main5.vue";
import Main6 from "../components/my/Main6.vue";
import Footer from "./Footer.vue";
export default {
    created() {
        this.$store.state.active = 3;
    },
    name: "Main",
    components: {
        Main1,
        Main2,
        Main3,
        Main4,
        Main5,
        Main6,
        Footer
    }
};
</script>
<style lang="scss" scoped>
@import url("../components/my/html.css");
@import url("../components/my/html1.css");
.profile-1vcJW {
    min-height: 100vh;
}
</style>

