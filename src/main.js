import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Basic from './components/sample/Basic/Basic.vue'
import ErrorBasic from './components/sample/Basic/ErrorBasic.vue'
import CustomFilter from './components/sample/Basic/CustomFilter.vue'
import List from './components/sample/List/List.vue'
import CustomTextList from './components/sample/List/CustomTextList.vue'
import Multi from './components/sample/Multi/Multi.vue'
import MultiList from './components/sample/MultiList/MultiList.vue'
import ErrorMultiList from './components/sample/MultiList/ErrorMultiList.vue'
import Model from './components/sample/Model/Model.vue'
import ModelList from './components/sample/Model/ModelList.vue'

Vue.use(VueRouter)
Vue.config.devtools = true
Vue.config.keyCodes = {
  anyKeyCode: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
    78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
}

const routes = [
  { path: '/Basic', component: Basic },
  { path: '/ErrorBasic', component: ErrorBasic },
  { path: '/CustomFilter', component: CustomFilter },
  { path: '/List', component: List },
  { path: '/CustomTextList', component: CustomTextList },
  { path: '/Multi', component: Multi },
  { path: '/MultiList', component: MultiList },
  { path: '/ErrorMultiList', component: ErrorMultiList },
  { path: '/Model', component: Model },
  { path: '/ModelList', component: ModelList }
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

