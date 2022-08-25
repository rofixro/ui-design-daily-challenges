import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/home.vue"),
    },
    {
      path: "/excel",
      name: "Excel",
      component: () => import("@/views/excel/index.vue"),
    },
  ],
});

export default router;
