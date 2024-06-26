import { defineStore } from "pinia";

export const useStore = defineStore("store", ()=> {
  const baseUrl = "https://evr.bjst.uz";
  return {
    baseUrl
  }
});
