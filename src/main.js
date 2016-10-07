import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import BasicSearchSelect from './components/sample/Basic/BasicSearchSelect'
import ErrorSearchSelect from './components/sample/Basic/ErrorSearchSelect'
import MultiSearchSelect from './components/sample/Multi/MultiSearchSelect'

Vue.use(VueRouter)

const routes = [
  { path: '/Basic', component: BasicSearchSelect },
  { path: '/Error', component: ErrorSearchSelect },
  { path: '/Multi', component: MultiSearchSelect }
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

