<template>
    <div class="wrapper">
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
        <HUheader></HUheader>
        <HUsearch></HUsearch>
        <HUfoodentry></HUfoodentry>
        <HUbanner></HUbanner>
        <HUshopListTitle></HUshopListTitle>
        <HUfilter></HUfilter>
        <HUshopList></HUshopList>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HUheader from "@/components/home/HUheader.vue";
import HUsearch from "@/components/home/HUsearch.vue";
import HUfoodentry from "@/components/home/HUfoodentry.vue";
import HUbanner from "@/components/home/HUbanner.vue";
import HUshopListTitle from "@/components/home/HUshopListTitle.vue";
import HUfilter from "@/components/home/HUfilter.vue";
import HUshopList from "@/components/home/HUshopList.vue";
import Footer from "./Footer.vue";
@Component({
    components: {
        HUheader,
        HUsearch,
        HUfoodentry,
        HUbanner,
        HUshopListTitle,
        HUfilter,
        HUshopList,
        Footer
    }
})
export default class Home extends Vue {}
</script>
<style lang="scss">
</style>


