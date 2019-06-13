<style>
@import url("../css/detail1.css");
@import url("../css/detail2.css");
</style>

<template>
    <div class="detail">
        <DetailContent/>
        <DetailMore/>
    </div>
</template>
<script>
import DetailContent from "../components/DetailContent.vue";
import DetailMore from "../components/DetailMore.vue";
export default {
  components: {
    DetailContent,
    DetailMore
  },
  
};
</script>
