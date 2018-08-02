//Vue.use(Router)
let routes = [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: resolve => require(["@page/AsmQuery/Home"], resolve),
  }, {
    path: '/rankingList', //关键词
    component: resolve => require(["@page/AsmQuery/Ranking-List"], resolve)
  }, {
    path: '/rankingDetails-List', //关键词详情
    component: resolve => require(["@page/AsmQuery/Ranking-Details-List"], resolve)
  }, {
    path: '/application', //应用详情
    component: resolve => require(["@page/AsmQuery/Application"], resolve)
  }, {
    path: '/keyword-comparison-list', //应用对比
    component: resolve => require(["@page/AsmQuery/Keyword-Comparison-List"], resolve)
  }, {
    path: '/agent', //代理投放
    component: resolve => require(["@page/AsmQuery/agent"], resolve)
  }, {
    path: '/login', //登陆
    component: resolve => require(["@page/Login/login"], resolve)
  }, {
    path: '/modif-password', //修改密码
    component: resolve => require(["@page/Login/ModifyPassword"], resolve)
  }, {
    path: '/reset', //重置密码
    component: resolve => require(["@page/Login/reset"], resolve)
  }, {
    path: '/register', //注册账号
    component: resolve => require(["@page/Login/register"], resolve)
  }, {
    path: '/activatingSuccess', //账号激活成功
    component: resolve => require(["@page/Login/activatingSuccess"], resolve)
  }, {
    path: '/advertising-center', //广告中心
    redirect: '/advertising-center/home',
	component: resolve => require(["@page/AsmLaunch/Advertising-Center"], resolve),
	meta: {
        requiresAuth: true
    },
    children: [{
        path: '/advertising-center/home', //广告中心首页
        component: resolve => require(["@page/AsmLaunch/Advertising-Center/Advertising-Center-Home"], resolve),
      },
      {
        path: '/advertising-center/usersetting', //账户的编辑于修改
        component: resolve => require(["@page/AsmLaunch/Advertising-Center/Advertising-Center-UserSetting"], resolve),
      },
      {
        name: 'account',
        path: '/advertising-center/account/:accountName/:id/:orgId', //账户首页
        component: resolve => require(["@page/AsmLaunch/Advertising-Center/Advertising-Center-account"], resolve),
      },
      {
        name: 'datacenter',
        path: '/advertising-center/datacenter/:accountName/:id/:orgId', //数据中心
        component: resolve => require(["@page/AsmLaunch/Advertising-Center/Data-Center"], resolve),
      },
      {
        name: 'advertising-list',
        path: '/advertising-center/advertising-list/:accountName/:id/:orgId', //创建广告系列
        component: resolve => require(["@page/AsmLaunch/Advertising-Center/Advertising-Center-account/Create-advertising-list"], resolve),
      },
      {
        name: 'list',
        path: '/advertising-center/list/:accountName/:id/:orgId/:listName/:listId/:listType', //广告系列
        redirect: '/advertising-center/list/:accountName/:id/:orgId/:listName/:listId/:listType/home',
        component: resolve => require(["@page/AsmLaunch/Advertising-Center/Advertising-Center-List"], resolve),
        children: [{
            name: 'list-home',
            path: '/advertising-center/list/:accountName/:id/:orgId/:listName/:listId/:listType/home', //广告系列首页 
            component: resolve => require(["@page/AsmLaunch/Advertising-Center/Advertising-Center-List/Advertising-Center-List-Home.vue"], resolve),
          },
          {
            name: 'list-keyword',
            path: '/advertising-center/list/:accountName/:id/:orgId/:listName/:listId/:listType/keyword', //广告系列所有关键词
            component: resolve => require(["@page/AsmLaunch/Advertising-Center/Advertising-Center-List/Advertising-Center-List-KeyWord.vue"], resolve),
          },
          {
            name: 'list-search-terms',
            path: '/advertising-center/list/:accountName/:id/:orgId/:listName/:listId/:listType/search-terms', //广告系列searchTerms
            component: resolve => require(["@page/AsmLaunch/Advertising-Center/Advertising-Center-List/Advertising-Center-List-SearchTerms.vue"], resolve),
          },
          {
            name: 'list-negative-keyword',
            path: '/advertising-center/list/:accountName/:id/:orgId/:listName/:listId/:listType/negative-keyword', //广告系列否定关键词
            component: resolve => require(["@page/AsmLaunch/Advertising-Center/Advertising-Center-List/Advertising-Center-List-Negative.vue"], resolve),
          }
        ]
      },
      {
        name: 'create-list',
        path: '/advertising-center/:accountName/:id/:orgId/:listName/:listId/:listType/create-list', //创建广告组
        component: resolve => require(["@page/AsmLaunch/Advertising-Center/Advertising-Center-List/Create-advertising-list"], resolve),
      }, {
        name: 'settings-list',
        path: '/advertising-center/:accountName/:id/:orgId/:listName/:listId/:listType/settings-list', //编辑广告系列
        component: resolve => require(["@page/AsmLaunch/Advertising-Center/Advertising-Center-List/Settings-advertising-account"], resolve),
      }, {
        name: 'group',
        path: '/advertising-center/keyword/:accountName/:id/:orgId/:listName/:listId/:listType/:keyName/:keyId/:groupType', //广告组
        redirect: '/advertising-center/keyword/:accountName/:id/:orgId/:listName/:listId/:listType/:keyName/:keyId/home/:groupType',
        component: resolve => require(["@page/AsmLaunch/Advertising-Center/Advertising-Center-Keyword"], resolve),
        children: [{
            name: 'group-home',
            path: '/advertising-center/keyword/:accountName/:id/:orgId/:listName/:listId/:listType/:keyName/:keyId/home/:groupType',
            component: resolve => require(["@page/AsmLaunch/Advertising-Center/Advertising-Center-Keyword/Advertising-Center-Keyword-Home.vue"], resolve),
          },
          {
            name: 'group-negative-keyword',
            path: '/advertising-center/keyword/:accountName/:id/:orgId/:listName/:listId/:listType/:keyName/:keyId/negative-keyword/:groupType',
            component: resolve => require(["@page/AsmLaunch/Advertising-Center/Advertising-Center-Keyword/Advertising-Center-Keyword-Negative.vue"], resolve),
          },
          {
            name: 'group-search-terms',
            path: '/advertising-center/keyword/:accountName/:id/:orgId/:listName/:listId/:listType/:keyName/:keyId/search-terms/:groupType', //广告系列searchTerms
            component: resolve => require(["@page/AsmLaunch/Advertising-Center/Advertising-Center-keyword/Advertising-Center-keyword-SearchTerms.vue"], resolve),
          },
        ]
      }, {
        name: 'settings-keyword',
        path: '/advertising-center/settings-keyword/:accountName/:id/:orgId/:listName/:listId/:listType/:keyName/:keyId/:groupType', //编辑广告组
        component: resolve => require(["@page/AsmLaunch/Advertising-Center/Advertising-Center-Keyword/Settings-advertising-List.vue"], resolve),
      }
    ]
  }, {
	path: '/key-lexicon', //关键词库
	meta: {
        requiresAuth: true
    },
    component: resolve => require(["@page/AsmLaunch/Key-Lexicon"], resolve)
  }, {
	path: '/KeyWordList', //关键词列表
	meta: {
        requiresAuth: true
    },
    component: resolve => require(["@page/AsmLaunch/Key-Lexicon/KeyWordList"], resolve)
  }, {
    path: '/intgentMitorLibrary', //智能监测库
    redirect: '/intgentMitorLibrary/main',
	component: resolve => require(["@page/AsmLaunch/intgentMitorLibrary"], resolve),
	meta: {
        requiresAuth: true
    },
    children: [{
        path: '/intgentMitorLibrary/main', //智能检测库
        component: resolve => require(["@page/AsmLaunch/intgentMitorLibrary/intgentMitorLibrary-main"], resolve),
      }, {
        path: '/intgentMitorLibrary/public', //智能检测库修改、添加、查看
        component: resolve => require(["@page/AsmLaunch/intgentMitorLibrary/publicintgentMitor-public"], resolve),
      }, {
        path: '/intgentMitorLibrary/MonitoringRules', //监测规则列表
        component: resolve => require(["@page/AsmLaunch/intgentMitorLibrary/MonitoringRules"], resolve),
      }, {
        path: '/intgentMitorLibrary/MRpublic', //监测规则列表
        component: resolve => require(["@page/AsmLaunch/intgentMitorLibrary/MonitoringRules-public"], resolve),
      }

    ]
  }

  , {
    path: '*', //404
    component: resolve => require(["@page/404"], resolve)
  }
]  
export default new VueRouter({
	//去#号
	//mode: 'history',
	routes
  })


 
// VueRouter.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         //匹配元路由中的meta字段，如果设置了需要校验用户信息
//         //如果用户本地没有登录状态，跳转到登录页面
//         if (localStorage.Adjuz_UserInfoNEW) {
//             if (JSON.parse(localStorage.Adjuz_UserInfoNEW)) {
//                 next()
//             } else {
//                 next({
//                     path: '/login',
//                     query: {
//                         redirect: to.fullPath
//                     }
//                 })
//             }
//         } else {
//             next({
//                 path: '/login',
//                 query: {
//                     redirect: to.fullPath
//                 }
//             })
//         }
//     } else {
//         next() // 确保一定要调用 next()
//     }
// })