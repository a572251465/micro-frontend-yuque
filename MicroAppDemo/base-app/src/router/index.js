import { createRouter, createWebHistory } from "vue-router";
import SubApp01 from "../views/SubApp01.vue";
import SubApp02 from "../views/SubApp02.vue";
import SubApp03 from "../views/SubApp03.vue";

const routes = [
  {
    path: "/subApp01",
    component: SubApp01,
  },
  {
    path: "/subApp02",
    component: SubApp02,
  },
  {
    path: "/subApp03",
    component: SubApp03,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
