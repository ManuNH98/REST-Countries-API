import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/detail", name: "Detail", component: Detail },
];

const history = createWebHistory();

const router = new createRouter({
  history, // DEFAULT: '/'
  routes,
});

export default router;
