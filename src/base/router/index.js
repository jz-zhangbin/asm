//Vue.use(Router)
let routes = [{
	path: '/',
	redirect: '/home'
}, {
	path: '/home',
	component: resolve => require(["@page/AsmQuery/Home"], resolve), 
}, {
	path: '/rankingList',//关键词
	component: resolve => require(["@page/AsmQuery/Ranking-List"], resolve)
}, {
	path: '/rankingDetails-List',//关键词详情
	component: resolve => require(["@page/AsmQuery/Ranking-Details-List"], resolve)
}, {
	path: '/application',//应用详情
	component: resolve => require(["@page/AsmQuery/Application"], resolve)
}, {
	path: '/keyword-comparison',//搜索应用
	component: resolve => require(["@page/AsmQuery/Keyword-Comparison"], resolve)
}, {
	path: '/keyword-comparison-list',//应用对比
	component: resolve => require(["@page/AsmQuery/Keyword-Comparison-List"], resolve)
}, {
	path: '/agent',//代理投放
	component: resolve => require(["@page/AsmQuery/agent"], resolve)
},{
	path: '/login',//登陆
	component: resolve => require(["@page/Login/login"], resolve)
}, {
	path: '/modif-password',//修改密码
	component: resolve => require(["@page/Login/ModifyPassword"], resolve)
}, {
	path: '/reset',//重置密码
	component: resolve => require(["@page/Login/reset"], resolve)
}, {
	path: '/register',//注册账号
	component: resolve => require(["@page/Login/register"], resolve)
}, {
	path: '/activatingSuccess',//账号激活成功
	component: resolve => require(["@page/Login/activatingSuccess"], resolve)
}, {
	path: '/advertising-center',//广告中心首页
	component: resolve => require(["@page/AsmLaunch/Advertising-Center"], resolve)
}, {
	path: '/key-lexicon',//关键词库
	component: resolve => require(["@page/AsmLaunch/Key-Lexicon"], resolve)
} 

// {
// 	path: '/moni',//404
// 	component: resolve => require(["@page/AsmLaunch/moni"], resolve)
// }
, {
	path: '*',//404
	component: resolve => require(["@page/404"], resolve)
} 
]

//routes.push()

export default new VueRouter({
	//去#号
	//mode: 'history',
	routes
})
 
