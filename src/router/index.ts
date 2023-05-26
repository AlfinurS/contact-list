import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/product/:id",
    name: "ProductPage",
    component: () => import("@/pages/ProductPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
