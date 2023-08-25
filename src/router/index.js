import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("../views/HomePage.vue");
// const SocialMedia = () => import("../views/SocialMedia.vue");
// const UiUx = () => import("../views/UiUx.vue");

export const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  // {
  //   path: "/social-media",
  //   name: "Social Media",
  //   component: SocialMedia,
  // },
  // {
  //   path: "/ui-ux",
  //   name: "UI/UX",
  //   component: UiUx,
  // },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: HomePage },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
