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
      path: "/pageaccueilcharles",
      name: "pageaccueilcharles",
      component: () => import("@/views/PageAccueilCharles.vue"),
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
      path: "/pageobjetcharles",
      name: "pageobjetcharles",
      component: () => import("@/views/PageObjetCharles.vue"),
    },
    {
      path: "/pageobjetely/:id",
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
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }, 
    {
      path: '/404',
      name: 'Page404',
      component: () => import("@/views/PageError.vue"),
    }
  ],
});

router.beforeEach((to, from, next) =>{
  window.scrollTo({top: 0}); 
  next(); 
});

export default router;
