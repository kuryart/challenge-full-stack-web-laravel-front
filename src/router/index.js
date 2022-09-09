import { createRouter, createWebHistory } from "vue-router";
import ConsultaAlunos from "../views/ConsultaAlunos.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: ConsultaAlunos,
    },
  ],
});