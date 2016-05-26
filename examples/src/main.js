import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import BasicSearchSelect from './components/sample/BasicSearchSelect'
import MultipleSearchSelect from './components/sample/MultipleSearchSelect'

Vue.use(VueRouter)
var router = new VueRouter()

router.map({
  '/Basic': {
    component: BasicSearchSelect
  },
  '/Multiple': {
    component: MultipleSearchSelect
  }
})
router.start(App, '#container')

