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
 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

var explorer =navigator.userAgent ; 

if (explorer.indexOf("MSIE") >= 0) {
	//alert("ie");

}else{
	//alert('not ie') 
	// import VueParticles from 'vue-particles'
	// Vue.use(VueParticles)  
}
/**
 * 粒子效果,源码不兼容ie浏览器，"git+https://github.com/jz-zhangbin/vue-particles.git",修改并fork
 */ 
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
/**
 * 全局组件
 */
import searchTop from '@components/Search-Top'
import SIdentify from './components/canvas'
Vue.component('s-identify', SIdentify)
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