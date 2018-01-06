import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Basic from './components/sample/Basic/Basic.vue'
import ErrorBasic from './components/sample/Basic/ErrorBasic.vue'
import CustomFilter from './components/sample/Basic/CustomFilter.vue'
import List from './components/sample/List/List.vue'
import ListCustomText from './components/sample/List/ListCustomText.vue'
import Multi from './components/sample/Multi/Multi.vue'
import MultiList from './components/sample/MultiList/MultiList.vue'
import ErrorMultiList from './components/sample/MultiList/ErrorMultiList.vue'
import Model from './components/sample/Model/Model.vue'
import ModelList from './components/sample/Model/ModelList.vue'
import ModelAjax from './components/sample/Model/ModelAjax.vue'

Vue.use(VueRouter)
Vue.config.devtools = true

const routes = [
  { path: '/Basic', component: Basic },
  { path: '/ErrorBasic', component: ErrorBasic },
  { path: '/CustomFilter', component: CustomFilter },
  { path: '/List', component: List },
  { path: '/ListCustomText', component: ListCustomText },
  { path: '/Multi', component: Multi },
  { path: '/MultiList', component: MultiList },
  { path: '/ErrorMultiList', component: ErrorMultiList },
  { path: '/Model', component: Model },
  { path: '/ModelList', component: ModelList },
  { path: '/ModelAjax', component: ModelAjax }
]
const router = new VueRouter({
  routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

