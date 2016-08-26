import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import BasicSearchSelect from './components/sample/BasicSearchSelect'
import ErrorSearchSelect from './components/sample/ErrorSearchSelect'
import MultipleSearchSelect from './components/sample/MultipleSearchSelect'

Vue.use(VueRouter)
var router = new VueRouter()

router.map({
  '/Basic': {
    component: BasicSearchSelect
  },
  '/Error': {
    component: ErrorSearchSelect
  },
  '/Multiple': {
    component: MultipleSearchSelect
  }
})
router.start(App, '#container')

