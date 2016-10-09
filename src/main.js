import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Basic from './components/sample/Basic/Basic.vue'
import ErrorBasic from './components/sample/Basic/ErrorBasic.vue'
import List from './components/sample/List/List.vue'
import CustomTextList from './components/sample/List/CustomTextList.vue'
import Multi from './components/sample/Multi/Multi.vue'
import MultiList from './components/sample/MultiList/MultiList.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/Basic', component: Basic },
  { path: '/ErrorBasic', component: ErrorBasic },
  { path: '/List', component: List },
  { path: '/CustomTextList', component: CustomTextList },
  { path: '/Multi', component: Multi },
  { path: '/MultiList', component: MultiList }
]
const router = new VueRouter({
  routes // short for routes: routes
})

/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')

