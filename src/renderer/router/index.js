import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import routes from './router.js'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: routes
})

router.beforeEach((to, from, next) => {
  console.log('redirect to route of ' + to.fullPath)
  store.commit('vuex_m_loading', 'start')
  next()
})

router.afterEach(route => {
  store.commit('vuex_m_loading', 'done')
  window.scrollTo(0, 0)
})

export default router
