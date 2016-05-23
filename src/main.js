import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Hello from './components/Hello'
import SearchSelect from './components/SearchSelect'
import NestedSearchSelect from './components/NestedSearchSelect'

Vue.use(VueRouter)
var router = new VueRouter()

router.map({
  '/Hello': {
    component: Hello
  },
  '/SearchSelect': {
    component: SearchSelect
  },
  '/NestedSearchSelect': {
    component: NestedSearchSelect
  }
})
router.start(App, '#container')

