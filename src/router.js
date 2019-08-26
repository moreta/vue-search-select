import Vue from 'vue'
import Router from 'vue-router'
import Model from './views/Model'
import ModelList from './views/ModelList'
import ModelAjax from './views/ModelAjax'
import Multi from './views/Multi'
import MultiList from './views/MultiList'
import Basic from './views/Basic'
import CustomFilter from './views/CustomFilter'
import List from './views/List'
import ListCustomText from './views/ListCustomText'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/model'
    },
    // model
    { path: '/model', name: 'model', component: Model },
    { path: '/model-list', component: ModelList },
    { path: '/model-ajax', component: ModelAjax },
    // multi
    { path: '/multi', component: Multi },
    { path: '/multi-list', component: MultiList },
    // basic
    { path: '/basic', component: Basic },
    { path: '/custom-filter', component: CustomFilter },
    { path: '/list', component: List },
    { path: '/list-custom-text', component: ListCustomText }
  ]
})
