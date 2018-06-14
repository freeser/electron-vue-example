import axios from 'axios'
import qs from 'qs'
import { Notification } from 'element-ui'
import store from '@/store'

const errCode = function (code, message, skip) {
  !skip && message && Notification.error({
    message: message,
    customClass: 'notify-no-title',
    duration: 5000
  })
}

// axios 配置
axios.defaults.timeout = 50000
axios.defaults.baseURL = process.env.TARGET

// http 发送请求 拦截器
axios.interceptors.request.use(
  config => {
    store.commit('vuex_m_loading', 'start')
    return config
  },
  err => {
    store.commit('vuex_m_loading', 'fail')
    return Promise.reject(err)
  }
)

// http 接收请求 拦截器
axios.interceptors.response.use(
  (res) => {
    let data = res.data || {}
    data.obj = data.obj || {}
    if (data.success) {
      store.commit('vuex_m_loading', 'done')
    } else {
      store.commit('vuex_m_loading', 'fail')
      data && errCode(data.code, data.msg, res.config.headers.skipAuth)
    }
    return data
  },
  error => {
    store.commit('vuex_m_loading', 'fail')
    if (error.response) {
      errCode(
        error.response.status,
        'Error: ' + error.response.statusText
      )
    }
    return Promise.reject(error)
  }
)

axios.$get = function (url, params) {
  return axios.get(url, { params: params })
}

axios.$post = function (url, params) {
  return axios.post(url, qs.stringify(params))
}

const plugin = {
  install (Vue) {
    Vue.prototype.$axios = axios
    Vue.$axios = axios
  },
  $axios: axios
}

export default plugin
export const install = plugin.install
