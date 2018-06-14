import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true
  },
  mutations: {
    vuex_m_loading (state, key) {
      state.loading = key || 'done'
    }
  },
  getters: {

  },
  actions: {

  }
})
