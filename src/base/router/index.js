import Vue from 'vue'
import Router from 'vue-router'   
/**
 * 引入其他路由表插入主路由
 */
Vue.use(Router)

/**
 * 首页、登陆、注册路由
 */
let routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  component: resolve => require(["@page/Home"], resolve),
  meta: {
      requiresAuth: true
  },
}, {
  path: '/rankingList',//关键词
  component: resolve => require(["@page/Ranking-List"], resolve)
}, {
  path: '/rankingDetails-List',//关键词详情
  component: resolve => require(["@page/Ranking-Details-List"], resolve)
}, {
  path: '/application',//应用详情
  component: resolve => require(["@page/Application"], resolve)
}, {
  path: '/keyword-comparison',//搜索应用
  component: resolve => require(["@page/Keyword-Comparison"], resolve)
}, {
  path: '/keyword-comparison-list',//应用对比
  component: resolve => require(["@page/Keyword-Comparison-List"], resolve)
},
{
  path: '*',//404
  component: resolve => require(["@page/404"], resolve)
}]

//routes.push()

export default new Router({
  //去#号
  mode: 'history',
  routes
})
 
