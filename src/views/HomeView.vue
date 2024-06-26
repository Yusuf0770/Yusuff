<template>
  <main>
    <div class="reklama">
      <div class="container">
        <img src="@/assets/images/jpg/rekklama.jpg" alt="" />
      </div>
    </div>
    <div class="politics">
      <div class="container" v-for="banner in bannerNews?.data" :key="banner">
        <div class="politicy-tex-wrap">
          <p class="poloticy-info">
            {{ banner?.title }}
          </p>
        </div>
        <img
          :src="store.baseUrl + banner?.image"
          :alt="banner?.title"
          class="politict-img"
        />
      </div>
    </div>

    <div class="uzb">
      <div class="container">
        <div class="uzb-tt-wrap">
          <h3 class="all-title">Барчаси</h3>
        </div>

        <hr />

        <div class="uzb-card-wrap">
          <news-card
            v-for="item in newsCard?.data?.last_news"
            :key="item"
            :cards="item"
          />
        </div>
      </div>
    </div>
  </main>
</template>


<script setup>
import { useStore } from "@/store/store";
import Services from "@/services/services";
import NewsCard from "@/components/NewsCard.vue";
import { onMounted, ref } from "vue";

const store = useStore();

const bannerNews = ref({});

const newsCard = ref({});

async function getBannerNews() {
  const res = await Services.getBannerNews();
  bannerNews.value = res.data;
}

async function getLatestNews() {
  const res = await Services.getLatestNews();
  newsCard.value = res.data;
}
getBannerNews();
getLatestNews();
</script>

<style lang="scss" scoped>
</style>

