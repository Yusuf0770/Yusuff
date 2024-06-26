<template>
  <div class="container">
    <h2>{{ detail?.data?.news_detail?.title }}</h2>
    <div
      class="news"
      style="width: 700px"
      v-html="detail?.data?.news_detail?.content"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import services from "@/services/services";

const route = useRoute();

const detail = ref({});

const getDetail = async () => {
  const res = await services.getNewsDetail(route.params.slug);
  detail.value = res.data;
  console.log(res.data);
};
getDetail();

// async function getNewsDetail() {
//   const res = await services.getNewsDetail(route.params.slug);
//   detail.value = res.data;
// }
</script>

<style lang="scss">
.news {
  * {
    font-family: sans-serif !important;
  }
}
</style>