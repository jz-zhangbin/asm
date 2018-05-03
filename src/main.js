// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@router'
import store from '@vuex'

import https from '@axios'
Vue.prototype.$https = https

import ls from '@commonJS/localStorage'
Vue.prototype.$ls = ls

/**
 * 按需引入，减小打包体积
 *  import ElementUI from 'element-ui'
 * //import 'element-ui/lib/theme-chalk/index.css'
 * import '../theme/index.css' 
 * Vue.use(ElementUI)
 */
import { Select, Option, Pagination } from 'element-ui'
Vue.use(Select)
Vue.use(Option)
Vue.use(Pagination)

/**
 * 粒子效果
 */
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
/**
 * 全局组件
 */
import searchTop from '@components/Search-Top'
Vue.component('v-search-top', searchTop)

/**
 * echarts
 */
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

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