import App from './App'
import store from '@vuex'
import https from '@axios'
import router from '@router'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import cookie from '@commonJS/cookie'  
import './assets/element-ui/index.css'
import ls from '@commonJS/localStorage'
import height from '@commonJS/windowHeight'
import Footer from '@components/AsmQuery/footer'
import Hdader from '@components/AsmLaunch/header'
import SIdentify from './components/AsmQuery/canvas'
import searchTop from '@components/AsmQuery/Search-Top'
import Message from '@components/AsmLaunch/Message-Box-Tiip'
import VueParticles from '@components/AsmQuery/vue-particles'
Vue.prototype.$ls = ls
Vue.prototype.$https = https
Vue.prototype.$cookie = cookie
Vue.prototype.$height = height
Vue.prototype.$echarts = echarts
Vue.component('v-header', Hdader)
Vue.component('v-footer', Footer)
Vue.component('v-message', Message)
Vue.component('s-identify', SIdentify)
Vue.component('v-search-top', searchTop)
Vue.component('vue-particles', VueParticles)
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
Vue.filter('numTofixed', function (value) {
  if (value == 0) {
    return "0";
  } else {
    let num = (value * 100).toFixed(2);
    return num + "%";
  }
})
Vue.filter('numTo$', function (value) {
  if (value == 0) {
    return "0";
  } else {
    return "$" + (value * 1).toFixed(2);
  }
})
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      //匹配元路由中的meta字段，如果设置了需要校验用户信息
      //如果用户本地没有登录状态，跳转到登录页面
      if (cookie.get('Adjuz_UserInfoNEW')) {
          if (cookie.get('Adjuz_UserInfoNEW')) {
              next()
          } else {
              next({
                  path: '/login',
                  query: {
                      redirect: to.fullPath
                  }
              })
          }
      } else {
          next({
              path: '/login',
              query: {
                  redirect: to.fullPath
              }
          })
      }
  } else {
      next() // 确保一定要调用 next()
  }
}) 