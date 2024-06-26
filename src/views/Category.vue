<template>
    <div>
        <div class="cards">
            <div class="container">
                <h1>{{ detail?.data?.category }}</h1>

                <div class="cards-wrappper">
                    <NewsCard 
                      v-for="item in detail?.data?.news_list" :key="item" :cards="item">
                   </NewsCard>
                </div>

                <div class="add-btn-wrap">
                  <button class="addCard" @click="addPageCategory()">Яна</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
 import NewsCard from "@/components/NewsCard.vue";
 import services from "@/services/services"
 import {useRoute} from "vue-router"
 import {ref, watchEffect} from "vue"
 import {useStore} from "@/store/store"

 const route = useRoute()
 const store = useStore()
 
 const detail = ref({})
 const news = ref([])
 const page = ref(1)

 async function addPageCategory() {
    page.value += 1
    const res = await services.getDetailCategory(
        route.params.id,
        route.params.slug,
        page.value
    )
    news.value.push(...res.data?.data?.news_list)
 }
 
 async function getDetailCatigory() {
    const res = await services.getDetailCategory(
        route.params.id,
        route.params.slug,
    )
    detail.value = res.data
    news.value = res.data?.data?.news_list
    console.log(res.data)
 }

 watchEffect(()=> {
    getDetailCatigory()
 })
</script>

<style lang="scss" scoped>
 .cards-wrappper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
 }
 .addCard {
    padding: 4px 20px;
    border: none;
    background: #DFAD2A;;
    color: #fff;
    cursor: pointer;
    border-radius: 2px;
    &:hover {
        opacity: 0.9;
    }
    &:active {
        opacity: 0.8;
    }
 }

 .add-btn-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
 }
</style>