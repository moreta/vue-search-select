import { createRouter, createWebHashHistory } from "vue-router"
import Model from "./views/Model.vue"
import ModelAjax from "./views/ModelAjax.vue"
import ModelList from "./views/ModelList.vue"
import Multi from "./views/Multi.vue"
import MultiList from "./views/MultiList.vue"

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/model",
    },
    // model
    { path: "/model", name: "model", component: Model },
    { path: "/model-list", component: ModelList },
    { path: "/model-ajax", component: ModelAjax },
    // multi
    { path: "/multi", component: Multi },
    { path: "/multi-list", component: MultiList },
  ],
})
