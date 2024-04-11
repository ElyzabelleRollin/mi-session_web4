import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("@/views/PageIndex.vue"),
    },
    {
      path: "/pageexpoeharles",
      name: "pageexpocharles.list",
      component: () => import("@/views/PageExpositionCharles.vue"),
    },
    {
      path: "/pagedescharles/:id",
      name: "pagedescharles.details",
      component: () => import("@/views/PageOeuvreCharles.vue"),
    },
    {
      path: "/pageaccueilely",
      name: "pageaccueilely",
      component: () => import("@/views/PageAccueilEly.vue"),
    },
    {
      path: "/pageaccueilgab",
      name: "pageaccueilgab",
      component: () => import("@/views/PageAccueilGab.vue"),
    },
    {
      path: "/pageaccueilmaelle",
      name: "pageaccueilmaelle",
      component: () => import("@/views/PageAccueilMaelle.vue"),
    },
    {
      path: "/pageobjetely",
      name: "pageobjetely",
      component: () => import("@/views/PageObjetEly.vue"),
    },
    {
      path: "/pageobjetgab",
      name: "pageobjetgab",
      component: () => import("@/views/PageObjetGab.vue"),
    },
    {
      path: "/pageobjetmaelle",
      name: "pageobjetmaelle",
      component: () => import("@/views/PageObjetMaelle.vue"),
    },
  ],
});

export default router;
