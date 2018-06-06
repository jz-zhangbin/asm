import App from './App'
import router from '@router'
import store from '@vuex'

import https from '@axios'
Vue.prototype.$https = https

import ls from '@commonJS/localStorage'
Vue.prototype.$ls = ls

import cookie from '@commonJS/cookie'
Vue.prototype.$cookie = cookie
/**
 * 
    "axios": "^0.18.0", 
	"vue": "^2.5.2", 
	"vuex": "^3.0.1", 
    "vue-router": "^3.0.1",
 */
/**
 * 全局组件
 */
import searchTop from '@components/Search-Top'
import SIdentify from './components/canvas'
import VueParticles from '@components/vue-particles'
import Footer from '@components/footer'
Vue.component('v-footer', Footer)
Vue.component('vue-particles', VueParticles)
Vue.component('s-identify', SIdentify)
Vue.component('v-search-top', searchTop)

/**
 * echarts
 */
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
