import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import BasicSearchSelect from './components/sample/BasicSearchSelect'
import ErrorSearchSelect from './components/sample/ErrorSearchSelect'
import ResetSearchSelect from './components/sample/ResetSearchSelect'
import MultiSearchSelect from './components/sample/MultiSearchSelect'

Vue.use(VueRouter)
var router = new VueRouter()

router.map({
  '/Basic': {
    component: BasicSearchSelect
  },
  '/Error': {
    component: ErrorSearchSelect
  },
  '/Reset': {
    component: ResetSearchSelect
  },
  '/Multi': {
    component: MultiSearchSelect
  }
})
router.start(App, '#container')

