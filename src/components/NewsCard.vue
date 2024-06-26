<template>
  <div style="display: flex; object-fit: cover;" class="uzb-card">
    <img class="uzb-card-img" :src="store.baseUrl + cards?.image" :alt="cards.title" />
    <router-link class="card-title" :to="`/news/${cards?.slug}`">
      {{ cards.title }}
    </router-link>
    <div class="politicy-view-wrap">
      <img src="@/assets/images/svg/clock.svg" alt="" />
      <span>{{ cards.date}}</span>
      <img src="@/assets/images/svg/glass.svg" alt="" />
      <span>{{ cards.count_view }}</span>
    </div>
  </div>
</template>

<script setup>

import { useStore } from '@/store/store';

const store = useStore()
const {cards} = defineProps(["cards"])
</script>

<style lang="scss" scoped>
.politicy-view-wrap {
  display: flex;
  gap: 5px;
  span {
    font-weight: 400;
    font-size: 16px;
    color: #d2d1d1;
  }
}
.card-title {
  width: 100%;
  max-width: 300px;
}
</style>