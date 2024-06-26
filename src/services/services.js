import axios from "axios";
const baseUrl = "http://evr.bjst.uz/api";
export default {
  getBannerNews() {
    return axios.get(`${baseUrl}/corusel/index`);
  },
  getLatestNews() {
    return axios.get(`${baseUrl}/news/last-news`);
  },
  getNewsDetail(slug) {
    return axios.post(`${baseUrl}/news/news-detail/`, {
      headers: {
        Accept: "aplication/json",
        "Content-Type": "application/json",
      },
      slug: slug,
    });
  },
  getCategorys() {
    return axios.get(`${baseUrl}/category/index`)
  },
  getDetailCategory(id, slug, page) {
    return axios.post(`${baseUrl}/category/category/?id=${id}&page=${page}`, {
      slug: slug,
    })
  }
};
