import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/imprint",
    name: "imprint",
    component: () =>
      import(/* webpackChunkName: "imprint" */ "../views/Imprint.vue"),
  },
  {
    path: "/plural",
    name: "plural",
    component: () =>
      import(/* webpackChunkName: "plural" */ "../views/Plural.vue"),
  },
  {
    path: "/time",
    name: "time",
    component: () =>
      import(/* webpackChunkName: "time" */ "../views/Time.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export default router;
