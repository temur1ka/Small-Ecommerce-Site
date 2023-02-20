import { createRouter, createWebHistory } from "vue-router";
import CosmeticViewVue from "@/views/CosmeticView.vue";
import WatchesView from "@/views/WatchesView.vue";
import HomeView from "../views/HomeView.vue";
import GymSups from '@/views/GymSups.vue'
import TestViewVue from "@/views/TestView.vue";
import Technologies from "@/views/TechnologiesView.vue";
import BabyProduct from "@/views/BabyProduct.vue";
import HomeProducts from "@/views/HomeProducts.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/watches",
    name: "watches",
    component: WatchesView,
  },
  {
    path: "/cosmetic",
    name: "cosmetic",
    component: CosmeticViewVue,
  },
  {
    path: "/gymsupplement",
    name: "gymsupplement",
    component: GymSups
  },
  {
    path: "/cosmetic",
    name: "cosmetic",
    component: CosmeticViewVue,
  },
  {
    path: "/technologies",
    name: "technologies",
    component: Technologies,
  },
  {
    path: "/homeproducts",
    name: "homeproducts",
    component: HomeProducts,
  },
  {
    path: "/babyproducts",
    name: "babyproducts",
    component: BabyProduct,
  },
  {
    path: "/test",
    name: "test",
    component: TestViewVue, 
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
