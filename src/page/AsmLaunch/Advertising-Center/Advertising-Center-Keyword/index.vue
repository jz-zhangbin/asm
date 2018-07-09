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
        z-index: 200;
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
        margin: 0 12px;
        padding: 6px 20px 0;
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
        color: @color !important;
        font-weight: bold;
        border-bottom: 1px solid @color;
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
        </div>

        <!-- 父级头部 -->
        <div class="father_head">
            <!-- <img src="../../../../images/moni/comon_loading.png" alt="" v-if="!loading"> -->
            <img :src="adjuz_img" alt="">
            <section v-if="!loading">
                <h1>广告组 ：{{$route.query.keyName}}</h1>
                <div>
                    <p>
                        <span>默认CPC</span>
                        <span>-</span>
                    </p>
                    <p>
                        <span>搜索匹配</span>
                        <span>-</span>
                    </p>
                    <p>
                        <span>广告状态</span>
                        <span class="red_type">-</span>
                    </p>
                    <p>
                        <span>投放周期</span>
                        <span>-</span>
                    </p>
                </div>
            </section>
            <section v-else>
                <h1>广告组 ：{{$route.query.keyName}}</h1>
                <div>
                    <p>
                        <span>默认CPC</span>
                        <span>{{topDate.defaultCPCBidAmount | numTo}}</span>
                    </p>
                    <p>
                        <span>搜索匹配</span>
                        <span>{{topDate.automatedKeywordsOptIn == true ? '是' : '否'}}</span>
                    </p>
                    <p>
                        <span>广告状态</span>
                        <span :class="{red_type : topDate.status != 'ENABLED'}">{{topDate.status == 'ENABLED' ? '启用' : '暂停'}}</span>
                    </p>
                    <p>
                        <span>投放周期</span>
                        <span>{{topDate.starttime}}-{{topDate.endtime}}</span>
                    </p>
                </div>
            </section>

            <!-- 右面固定 -->
            <div class="right_absolute_btn" @click="zhinengroute">智能检测</div>
            <div class="right_absolute_text">
                <el-button type="text" @click="routerTosettings">编辑</el-button>
            </div>
            <div class="right_absolute_select">
                <div class="checket_time">
                    时区：
                    <div @click="timeNowClick">
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
            <router-link :to="{path: '/advertising-center/keyword/home' , query: $route.query}" active-class="activeclass">关键词列表</router-link>
            <router-link :to="{path: '/advertising-center/keyword/search-terms' , query: $route.query}" active-class="activeclass">Search Terms</router-link>
            <router-link :to="{path: '/advertising-center/keyword/negative-keyword' , query: $route.query}" active-class="activeclass">否定关键词</router-link>

        </div>
        <div class="router_box">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavList from "@components/AsmLaunch/Nav-List";
import documentClick from "@commonJS/documentSettings";
import { date } from "@commonJS/date";
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
            topDate: {
                img: "",
                state: "",
                automatedKeywordsOptIn: "",
                defaultCPCBidAmount: "",
                starttime: "",
                endtime: ""
            },
            adjuz_img: ""
        };
    },

    components: {
        "v-nav": NavList
    },

    filters: {
        dateSet: function(value) {
            return date(value);
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
                        date: queryData.date,
                        id: queryData.id
                    }
                },
                {
                    name: "广告系列",
                    path: "/advertising-center/list",
                    query: {
                        accountName: queryData.accountName,
                        orgId: queryData.orgId,
                        listName: queryData.listName,
                        listId: queryData.listId,
                        date: queryData.date,
                        id: queryData.id
                    }
                },
                {
                    name: "广告组",
                    path: "/advertising-center/keyword",
                    query: queryData
                }
            ]
        );
        this.AjaxGetAdgroupObject();
        if (this.$ls.get("adjuz_img")) {
            this.adjuz_img = this.$ls.get("adjuz_img").logoAdress;
        } else {
            this.GetImgUrl();
        }
    },

    updated() {},

    mounted() {
        documentClick("checket_time", this, "timeNowShow");
    },

    destroyed() {},

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
        zhinengroute() {
            let url =
                "/api/v1/IntellAdvertiseApi/Monitor/GetRuleIdByAdGroupId?adgroupId=" +
                this.$route.query.keyId;
            this.$https.get(url).then(res => {
                if (res.data.resultCode == 1000) {
                    if (res.data.data.status == 0) {
                        this.$store.commit("SET_SHOW_TRUE", {
                            value: "该广告组未被监测",
                            type: 3
                        });
                    } else {
                        this.$router.push({
                            path: "/intgentMitorLibrary/MRpublic",
                            query: {
                                parame: "see",
                                intellMonitorRuleId: res.data.data.status
                            }
                        });
                    }
                }
            });
        },
        routerTosettings() {
            this.$router.push({
                path: "/advertising-center/settings-keyword",
                query: this.$route.query
            });
        },
        AjaxGetAdgroupObject() {
            let url =
                "/api/v1/IntellAdvertiseApi/AdGroup/GetAdgroupObject?id=" +
                this.$route.query.keyId;
            this.loading = false;
            this.$https.get(url).then(res => {
                this.loading = true;
                if (res.data.resultCode == 1000) {
                    this.topDate = res.data.data;
                } else {
                    this.topDate = {
                        img: "",
                        state: "",
                        automatedKeywordsOptIn: "",
                        defaultCPCBidAmount: "",
                        starttime: "",
                        endtime: ""
                    };
                }
            });
        },
        GetImgUrl(id) {
            let url = "/api/v1/IntellAdvertiseApi/Campaign/GetAppByAppids";
            this.$https
                .post(url, JSON.stringify([this.$ls.get("adaMid")]))
                .then(res => {
                    if (res.data.resultCode == 1000) {
                        this.adjuz_img = res.data.data[0].logoAdress;
                    }
                });
        }
    }
};
</script>