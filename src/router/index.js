import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
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
    path: "/terms",
    name: "terms",
    component: () =>
      import(/* webpackChunkName: "terms" */ "../views/Terms.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
  },
  {
    path: "/logout",
    name: "logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/Logout.vue"),
  },
  {
    path: "/management",
    name: "management",
    component: () =>
      import(/* webpackChunkName: "management" */ "../views/Management.vue"),
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
