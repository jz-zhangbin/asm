<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.list_father_index {
    box-sizing: border-box;
    padding: 60px 0 20px;
    background: #edf1f5;
    .adver_nav {
        margin: 0px 12px 0;
        min-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 90px;
    }
    .btn {
        width: 158px;
        height: 45px;
        cursor: pointer;
        background: #2d76ed;
        color: #f7f7f7;
        text-align: center;
        line-height: 45px;
        border-radius: 6px;
        cursor: pointer;
        &:hover {
            background: @btnhover;
        }
    }
    .father_head {
        min-width: 1200px;
        margin: 0 12px;
        box-sizing: border-box;
        padding: 30px 30px;
        background: #fff;
        display: flex;
        position: relative;
        img {
            width: 100px;
            height: 100px;
            margin-right: 20px;
            border-radius: 16px;
        }
        h1 {
            font-size: 18px;
            color: @color;
            margin-bottom: 20px;
        }
        section div {
            display: flex;
            p {
                margin-right: 40px;
                span {
                    display: block;
                    margin-bottom: 14px;
                    &:nth-child(1) {
                        color: #777;
                    }
                    &:nth-child(2) {
                        color: #333;
                        margin-bottom: 0;
                    }
                    &.red_type {
                        color: red;
                    }
                }
            }
        }
    }
    .right_absolute_btn {
        width: 108px;
        height: 38px;
        border: 1px solid @color;
        border-radius: 4px;
        line-height: 38px;
        text-align: center;
        color: @color;
        cursor: pointer;
        position: absolute;
        right: 30px;
        top: 30px;
        &:hover {
            background: @color;
            color: #fff;
        }
    }
    .right_absolute_text {
        position: absolute;
        top: 80px;
        right: 70px;
        button {
            color: @color;
        }
    }
    .right_absolute_select {
        width: 260px;
        height: 40px;
        z-index: 10;
        position: absolute;
        right: 160px;
        top: 40px;
        display: flex;
        justify-content: flex-end;
    }

    .checket_time {
        position: relative;
        display: flex;
        div {
            cursor: pointer;
            margin-left: 10px;
            i {
                margin-left: 10px;
            }
        }
        section {
            width: 140px;
            position: absolute;
            top: 24px;
            right: -16px;
            background: #fff;
            border: 1px solid @border;
            padding: 6px 0;
            border-radius: 4px;
            span {
                display: block;
                height: 30px;
                text-align: center;
                line-height: 30px;
                cursor: pointer;
                &:hover {
                    background: #f7f7f7;
                }
            }
        }
    }

    .router_list {
        min-width: 1200px;
        margin: 6px 12px 0;
        padding: 0px 20px;
        background: #fff;
        display: flex;
        margin-top: 20px;
        height: 50px;
        line-height: 49px;
        border-bottom: 1px solid @border;
        a {
            padding: 0 20px;
            height: 49px;
            color: @font_color;
        }
    }
    .router_box {
        min-width: 1200px;
        margin: 0 12px;
        box-sizing: border-box;
        background: #fff;
    }
    .activeclass {
        font-weight: bold;
        color: @color !important;
        border-bottom: 1px solid @color;
    }
    //任务列表
    .task_box {
        position: fixed;
        right: 50px;
        bottom: 18px;
        z-index: 10;
    }
}
</style>
<template>
    <div class="list_father_index">
        <!-- 导航 -->
        <v-header></v-header>

        <!-- 面包屑 -->
        <div class="adver_nav">
            <v-nav :pageName='pageName' :routeList='routeList'></v-nav>
            <div class="btn" @click="createAdvertising">
                <!-- <i class="iconfont icon-plus-add"></i> -->
                <span>创建广告组</span>
            </div>
        </div>

        <!-- 父级头部 -->
        <div class="father_head">
            <img src="../../../../images/moni/comon_loading.png" alt="" v-if="!loadingimg">
            <img :src="adverImg" alt="" v-else>
            <section v-if="!loading">
                <h1>广告系列 ：{{$route.query.listName}}</h1>
                <div>
                    <p>
                        <span>投放地区</span>
                        <span>-</span>
                    </p>
                    <p>
                        <span>总预算</span>
                        <span>-</span>
                    </p>
                    <p>
                        <span>日预算</span>
                        <span>-</span>
                    </p>
                    <p>
                        <span>广告状态</span>
                        <span class="red_type">-</span>
                    </p>
                </div>
            </section>
            <section v-else>
                <h1>广告系列 ：{{$route.query.listName}}</h1>
                <div>
                    <p>
                        <span>投放地区</span>
                        <span>{{topDate.storefront | country}}</span>
                    </p>
                    <p>
                        <span>总预算</span>
                        <span>{{topDate.budgetAmount | numTo$}}</span>
                    </p>
                    <p>
                        <span>日预算</span>
                        <span>{{topDate.dailyBudgetAmount | numTo$}}</span>
                    </p>
                    <p>
                        <span>广告状态</span>
                        <span :class="{red_type : topDate.status != 'ENABLED'}">{{topDate.status == 'ENABLED' ? '启用' : '暂停'}}</span>
                    </p>
                </div>
            </section>

            <!-- 右面固定 -->
            <div class="right_absolute_btn" @click="zhinengRouter">智能监测</div>
            <div class="right_absolute_text">
                <el-button type="text" @click="routerTosettings">编辑</el-button>
            </div>
            <div class="right_absolute_select">
                <div class="checket_time">
                    时区：
                    <!-- @click="timeNowClick" -->
                    <div >
                        <span>{{timeNow}}</span>
                        <i class="iconfont icon-xia"></i>
                    </div>
                    <transition name="el-zoom-in-top">
                        <section v-show="timeNowShow" @mouseout="timeNowShow = false" @mousemove="timeNowShow = true">
                            <span v-for="(ele,index) in timeNowList" :key="index" @click="timeNowListClick(index)">{{ele}}</span>
                        </section>
                    </transition>
                </div>
            </div>
        </div>

        <!-- 导航 -->
        <div class="router_list">
            <router-link :to="{path: '/advertising-center/list/home' , query: $route.query}" active-class="activeclass">所有广告组</router-link>
            <router-link :to="{path: '/advertising-center/list/keyword' , query: $route.query}" active-class="activeclass">所有关键词</router-link>
            <router-link :to="{path: '/advertising-center/list/search-terms' , query: $route.query}" active-class="activeclass">Search Terms</router-link>
            <router-link :to="{path: '/advertising-center/list/negative-keyword' , query: $route.query}" active-class="activeclass">否定关键词</router-link>
        </div>
        <div class="router_box">
            <router-view></router-view>
        </div>

        <!-- 任务列表 -->
        <div class="task_box" v-if="taskShow">
            <!-- 任务列表 -->
            <v-task :taskData='taskData'></v-task>
        </div> 
    </div>
</template>

<script>
import NavList from "@components/AsmLaunch/Nav-List";
import Task from "@components/AsmLaunch/Task-List";
import documentClick from "@commonJS/documentSettings";
import { countryTwo } from "@commonJS/country";
export default {
    data() {
        return {
            pageName: "广告中心",
            routeList: [
                {
                    name: "广告中心",
                    path: "/advertising-center/home",
                    query: ""
                }
            ], //面包屑
            timeNow: "UTC",
            timeNowList: ["UTC", "America/New_York"],
            timeNowShow: false,
            loading: false,
            loadingimg: "",
            adverImg: "",
            topDate: {
                storefront: "",
                budgetAmount: 0,
                dailyBudgetAmount: 0,
                status: ""
            },
            adaMid: "",
            taskShow: false,
            taskData: {
                createCount: 0,
                editCount: 0,
                pauseCount: 0, //暂停
                pulseCount: 0 //启动
            },
            timer: null, 
        };
    },

    components: {
        "v-nav": NavList,
        "v-task": Task
    },

    filters: {
        country: function(value) {
            return countryTwo(value);
        }
    },

    computed: {},

    created() {
        let queryData = this.$route.query;
        this.routeList.push(
            ...[
                {
                    name: "账户",
                    path: "/advertising-center/account",
                    query: {
                        accountName: queryData.accountName,
                        orgId: queryData.orgId,
                        id: queryData.id
                    }
                },
                {
                    name: "广告系列",
                    path: "/advertising-center/list",
                    query: queryData
                }
            ]
        );

        this.GetCampaignObject();
    },

    updated() {},

    mounted() {
        documentClick("checket_time", this, "timeNowShow");
        if (this.$ls.get("adjuz_img")) {
           // this.$ls.clear("adjuz_img");
        }
        this.AjaxGetCampaignOperateResult();
    },

    destroyed() {
        clearInterval(this.timer);
    },

    methods: {
        createAdvertising() {
            this.$router.push({
                path: "/advertising-center/create-list",
                query: this.$route.query
            });
        },
        timeNowClick() {
            //点击时区
            this.timeNowShow = !this.timeNowShow;
        },
        timeNowListClick(index) {
            //切换时区
            this.timeNow = this.timeNowList[index];
            this.timeNowShow = false;
        },
        routerTosettings() {
            this.$router.push({
                path: "/advertising-center/settings-list",
                query: this.$route.query
            });
        },
        GetCampaignObject() {
            this.loading = false;
            let url =
                "/api/v1/IntellAdvertiseApi/Campaign/GetCampaignObject?id=" +
                this.$route.query.listId;
            this.$https.get(url).then(res => {
                this.loading = true;
                if (res.data.resultCode == 1000) {
                    this.topDate = res.data.data;
                    this.adaMid = res.data.data.adaMid;
                    this.GetImgUrl(res.data.data.adaMid,res.data.data.storefront);
                    this.$ls.set("adaMid", res.data.data.adaMid); 
                } else {
                    this.topDate = {
                        img: "",
                        storefront: 0,
                        budgetAmount: 0,
                        dailyBudgetAmount: 0
                    };
                }
            });
        },
        GetImgUrl(id,country) {
            this.loadingimg = false;
            let url = "/api/v1/IntellAdvertiseApi/Campaign/GetAppByAppidCountrys";
            this.$https.post(url, JSON.stringify([{
                 appId: id,
                 countryCode: country.toLowerCase()
            }])).then(res => {
                this.loadingimg = true;
                if (res.data.resultCode == 1000) {
                    this.adverImg = res.data.data[0].logoAdress;
                    this.$ls.set("adjuz_img", res.data.data[0]);
                } else {
                    this.adverImg = "";
                    this.$ls.set("adjuz_img", "null");
                }
            });
        },
        zhinengRouter() {
            let url =
                "/api/v1/IntellAdvertiseApi/Monitor/GetIntellMonitorByOrgId?orgId=" +
                this.$route.query.orgId
            this.$https.get(url).then(res => {
                if (res.data.resultCode == 404) {
                    this.$store.commit('SET_SHOW_TRUE',{
                        value: "该广告系列未被监控", 
                        type: 3
                    }); 
                } else {
                    this.$router.push({
                        path: "/intgentMitorLibrary/public",
                        query: {
                            parame: "see",
                            id: res.data.data.intelMonitorId,
                            type: "list"
                        }
                    });
                }
            });
        },
        AjaxGetCampaignOperateResult() {
            //5秒一次获取状态列表
            let url =
                "/api/v1/IntellAdvertiseApi/AdGroup/GetAdGroupOperateResult?orgid=" + this.$route.query.orgId;
            let _this = this;
            clearInterval(this.timer);
            this.timer = setInterval(() => {
                _this
                    .$https({
                        method: "get",
                        url: url,
                        timeout: 5000
                    })
                    .then(res => {
                        if (res) {
                            if (res.data.resultCode == 1000) {
                                if (
                                    res.data.data == null ||
                                    res.data.data == ""
                                ) {
                                    _this.taskShow = false;
                                    //this.taskData = res.data.data
                                } else {
                                    _this.taskShow = true;
                                    this.taskData = res.data.data;
                                    // _this.taskData = {
                                    //     createCount: 10,
                                    //     editCount: 10,
                                    //     pauseCount: 10, //暂停
                                    //     pulseCount: 10 //启动
                                    // };
                                }
                            } else {
                                _this.taskShow = false;
                                this.taskData = [];
                            }
                        }
                    });
            }, 5000);
        }, 
    }
};
</script>