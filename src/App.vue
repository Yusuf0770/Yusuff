<template>
  <div>
    <div class="header-top">
      <div class="container">
        <div class="heaeder-top-wrap">
          <div class="header-top-lan">
            <h3 class="header-top-language">
              Узбекча<img src="@/assets/images/svg/bottom.svg" alt="" />
            </h3>
          </div>
          <div class="header-top-sp">
            <h3 class="header-top-info">
              <span>«Фарғоналикларни»</span>телеграмда кузатинг!
            </h3>
          </div>
          <div class="header-top-ser">
            <img
              src="@/assets/images/svg/header-search.svg"
              alt=""
              class="header-top-search"
            />
          </div>
        </div>
      </div>
    </div>

    <header>
      <div class="container">
         <div class="header-wrap">
          <img src="@/assets/images/svg/header-logo.svg" alt="" class="header-logo" />
          <nav>
            <ul>
              <li><router-link to="/">home</router-link></li>
              <li v-for="link in categorys?.data" :key="link">
              <router-link :to="`/category/${link.slug}/${link.id}`">{{ 
              link.title
               }}</router-link></li>
            </ul>
          </nav>
         </div>
      </div>
    </header>
    <router-view />

    <footer>
      <div class="container">
        <div class="footer-wrapper">
          <div class="header-wrap">
          <img src="@/assets/images/svg/header-logo.svg" alt="" class="header-logo" />
          <nav>
            <ul>
              <li>
                <a href="#"><span>Ўзбекистон</span></a>
              </li>
              <li><a href="#">Технология</a></li>
              <li><a href="#">Жахон</a></li>
              <li><a href="#">Фарғона</a></li>
              <li><a href="#">Жамият</a></li>
              <li><a href="#">Сиёсат</a></li>
              <li><a href="#">Муҳокама</a></li>
              <li><a href="#">Спорт</a></li>
            </ul>

            <h1 class="footer-info">
              2021 © Фарғоналиклар Барча ҳуқуқлар ҳимоя қилинган
            </h1>
          </nav>
        </div>

        <div class="footer-site-wrap">
          <img class="footer-logo" src="@/assets/images/svg/telegram.svg" alt="" />
          <img src="@/assets/images/svg/Insta.svg" alt="" />
          <img src="@/assets/images/svg/Face.svg" alt="" />
          <img src="@/assets/images/svg/youtube 1.svg" alt="" />
        </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import services from "./services/services";
import { ref } from "vue";

const categorys = ref({});

async function getCategorys() {
  const res = await services.getCategorys();
  categorys.value = res.data
  console.log(res.data)
}
getCategorys();
</script>

<style lang="scss" scoped>
.footer-wrapper {
  display: flex;
  padding-bottom: 35px;
}
</style>