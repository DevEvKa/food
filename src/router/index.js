import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("@/pages/main/index.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("@/pages/products/index.vue"),
    },
  ],
});

export default router;
