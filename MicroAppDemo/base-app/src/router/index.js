import { createRouter, createWebHistory } from "vue-router";
import SubApp01 from "../views/SubApp01.vue";
import SubApp02 from "../views/SubApp02.vue";

const routes = [
  {
    path: "/subApp01",
    component: SubApp01,
  },
  {
    path: "/subApp02",
    component: SubApp02,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
