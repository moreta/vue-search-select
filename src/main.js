import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

// model
import Model from './components/sample/Model/Model'
import ModelList from './components/sample/Model/ModelList'
import ModelAjax from './components/sample/Model/ModelAjax'
// multi
import Multi from './components/sample/Multi/Multi'
import MultiList from './components/sample/MultiList/MultiList'
// basic & list
import Basic from './components/sample/Basic/Basic'
import CustomFilter from './components/sample/Basic/CustomFilter'
import List from './components/sample/List/List'
import ListCustomText from './components/sample/List/ListCustomText'

Vue.use(VueRouter)
Vue.config.devtools = true

const routes = [
  // model
  { path: '/Model', component: Model },
  { path: '/ModelList', component: ModelList },
  { path: '/ModelAjax', component: ModelAjax },
  // multi
  { path: '/Multi', component: Multi },
  { path: '/MultiList', component: MultiList },
  // basic
  { path: '/Basic', component: Basic },
  { path: '/CustomFilter', component: CustomFilter },
  { path: '/List', component: List },
  { path: '/ListCustomText', component: ListCustomText }
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

