import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/faq",
    name: "faq",
    component: () => import(/* webpackChunkName: "faq" */ "../views/FAQ.vue"),
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => 
    import(/* webpackChunkName: "privacy" */ "../views/Privacy.vue"),
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (to.path === "/profile" && !isLoggedIn) {
    // Redirect to login if trying to access Imprint and not logged in
    next("/login");
  } else if (to.path === "/management" && !isLoggedIn) {
    // Redirect to login if trying to access Imprint and not logged in
    next("/login");
  } else if (to.path === "/logout" && !isLoggedIn) {
    // Redirect to login if trying to access Imprint and not logged in
    next("/login");
  } else if (to.path === "/Modal" && !isLoggedIn) {
    // Redirect to login if trying to access Imprint and not logged in
    next("/login");
  } else {
    // Continue to the requested route
    next();
  }
});

export default router;
