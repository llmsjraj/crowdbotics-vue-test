import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/dashboard",
    name: "dashboard",
    component: () => import("./pages/Dashboard.vue"),
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("./components/TutorialDetails.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddTutorial.vue"),
  },
  {
    path: "/add_application",
    name: "add",
    component: () => import("./components/AddApplication.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/Register.vue"),
  },
  {
    path: "/resetpassword",
    name: "resetpassword",
    component: () => import("./pages/Resetpassword.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
