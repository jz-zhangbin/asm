<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.dc_index {
    box-sizing: border-box;
    padding: 60px 0 20px;
    background: #edf1f5;
    .adver_nav {
        margin: 0px 12px 0;
        min-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
    }
    .account_contant {
        min-width: 1200px;
        margin: 0 12px;
        box-sizing: border-box;
        position: relative;
        .account_contant_top {
            margin-bottom: 12px;
            padding: 20px;
            background: #fff;
            h1 {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            h2 {
                text-align: center;
                line-height: 40px;
                font-weight: bold;
            }
            .appList {
                margin: 12px auto;
                height: 190px;
                ul {
                    min-width: 1200px;
                    overflow-x: auto;
                    height: 190px;
                    display: flex;
                    box-sizing: border-box;
                    padding: 0 20px;
                    justify-content: center;
                    li {
                        width: 144px;
                        padding: 15px 20px;
                        cursor: pointer;
                        box-sizing: border-box;
                        margin: 0 12px;
                        border: 2px solid transparent;
                        img {
                            width: 100px;
                            height: 100px;
                            border-radius: 16px;
                            margin-bottom: 4px;
                        }
                        &.li_checkde {
                            border: 2px solid @color !important;
                        }
                        &.hov {
                            border: 2px solid @border;
                        }
                        p {
                            width: 108px;
                            height: 40px;
                            overflow: hidden;
                            line-height: 21px;
                            color: @color;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
        .account_contant_total {
            padding: 20px;
            background: #fff;
            .title {
                display: flex;
                justify-content: space-between;
                h1 {
                    font-size: 16px;
                    font-weight: bold;
                    color: #333;
                }
                .checket_time {
                    position: relative;
                    display: flex;
                    div {
                        cursor: pointer;
                        i {
                            margin-top: 2px;
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
            }
            .seclect_time {
                display: flex;
                justify-content: space-between;
                margin: 30px 0px;
                align-items: center;
            }
        }
        .account_table {
            min-width: 1200px;
        }
        .account_countant_echarts {
            min-width: 1200px;
            background: #fff;
            padding: 30px 20px 30px 20px;
            h1 {
                font-size: 16px;
                font-weight: bold;
                color: #333;
                margin-bottom: 30px;
            }
            #myChart1 {
                width: 100%;
                height: 500px;
            }
        }
        .account_countant_performance {
            min-width: 1200px;
            background: #fff;
            padding: 30px 20px 40px 20px;
            h1 {
                font-size: 16px;
                font-weight: bold;
                color: #333;
                margin-bottom: 20px;
            }
            h2 {
                border-bottom: 1px solid @border;
                span {
                    display: inline-block;
                    width: 110px;
                    height: 50px;
                    text-align: center;
                    line-height: 53px;
                    cursor: pointer;
                    &.common_span {
                        color: @color;
                        font-weight: bold;
                        border-bottom: 2px solid @color;
                    }
                }
            }
        }
    }
    .nav_header {
        position: fixed; 
        top: 60px;
        right: 0;
        left: 0;
        background: #fff;
        z-index: 10;
        height: 100px;
        box-sizing: border-box;
        padding: 10px 14px;
        box-shadow: 1px 2px 2px @border;
        .nav_header_cont {
            width: 100%;
            position: relative;
        }
        .nav_header_left {
            display: flex;
            img {
                width: 80px;
                height: 80px;
                border-radius: 8px;
                margin-right: 20px;
            }
            p {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                span {
                    display: block;
                    &:nth-child(1) {
                        color: @color;
                        font-weight: bold;
                    }
                }
            }
        }
        .nav_header_right {
            position: absolute;
            right: -14px;
            top: -10px;
            height: 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .to_top {
                width: 48px;
                background: #4282ec;
                cursor: pointer;
                color: #fff;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100px;
                margin-left: 40px;
                span {
                    font-size: 12px;
                    display: block;
                    border: 8px solid transparent;
                    border-bottom: 8px solid #fff;
                    margin-bottom: 4px;
                }
            }
        }
        .nav_header_center {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .seclct_div {
        display: flex;
        align-items: center;
        div {
            margin-left: 10px;
        }
    }
    .select_input {
        width: 154px;
        height: 40px;
        border: 1px solid @border;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 0 12px;
        line-height: 38px;
        overflow: hidden;
        cursor: pointer;
        &:hover {
            border: 1px solid @color;
        }
    }
}
</style>
<style lang='less'>
.dc_index {
    .el-select {
        width: 120px;
    }
    .el-table th {
        background: #f7f7f7 !important;
        font-size: large;
        color: #666 !important;
    }
    .el-table th > .cell {
        line-height: 20px;
    }
    .el-table td,
    .el-table th {
        padding: 8px 0;
    }
}
</style>

<template>
    <div class="dc_index">
        <!-- 导航 -->
        <v-header></v-header>

        <!-- 面包屑 -->
        <div class="adver_nav">
            <v-nav :pageName='pageName' :routeList='routeList'></v-nav>
        </div>

        <div class="account_contant">
            <div class="account_contant_top">
                <h1>{{$route.params.accountName}}</h1>
                <h2>已投放应用</h2>
                <div class="appList">
                    <ul>
                        <li v-apphove="index" @click="selectApp(index)" :class="{li_checkde : ele.show , hov: ele.hov}" v-for="(ele,index) in appList" :key="index">
                            <img :src="ele.logoAdress" alt="">
                            <p>{{ele.appName}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="account_contant_total">
                <div class="title">
                    <h1>数据总览</h1>
                    <div class="checket_time">
                        时区：
                        <!-- @click="timeNowClick" -->
                        <div>
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
                <div class="seclect_time">
                    <div class="seclct_div">
                        选择
                        <div class="select_input" @click="alllistShow = true">{{listName}}</div>
                    </div>
                    <el-select v-model="dataValue" @change="changeFundate(value)">
                        <el-option v-for="item in dataOptions" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <!-- <el-date-picker v-model="dateTime" type="daterange" align="right" unlink-panels :clearable=false @change='changeDate' range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format='yyyy-MM-dd' :picker-options="datelist">
          </el-date-picker> -->
                </div>
                <!-- 表格 -->
                <div class="account_table account_table1">
                    <el-table :data="tableData4" style="width: 100%" highlight-current-row border @selection-change="handleSelectionChange" @sort-change='sortchange' v-loading="loading" :default-sort="sortInfor">
                        <el-table-column fixed align='center' label="国家" min-width="120">
                            <template slot-scope="scope">
                                {{scope.row.storefront | countryset}}
                            </template>
                        </el-table-column>
                        <el-table-column align='center' label="花费" min-width="100">
                            <template slot-scope="scope">
                                <span>{{scope.row.localSpend | numTo$}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align='center' label="平均CPA" min-width="100">
                            <template slot-scope="scope">
                                <span>{{scope.row.avgCPA | numTo$}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align='center' label="平均CPC" min-width="100">
                            <template slot-scope="scope">
                                <span>{{scope.row.avgCPC | numTo$}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align='center' label="曝光数" min-width="100">
                            <template slot-scope="scope">
                                <span>{{scope.row.impressions}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align='center' label="点击数" min-width="100">
                            <template slot-scope="scope">
                                <span>{{scope.row.taps}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align='center' label="下载数" min-width="100">
                            <template slot-scope="scope">
                                <span>{{scope.row.conversions}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align='center' label="点击率" min-width="100">
                            <template slot-scope="scope">
                                <span>{{scope.row.ttr | numTofixed}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align='center' label="转化率" min-width="100">
                            <template slot-scope="scope">
                                <span>{{scope.row.conversionRate | numTofixed}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column align='center' label="第三方平均CPA" min-width="130">
                            <template slot-scope="scope">
                                -
                            </template>
                        </el-table-column>
                        <el-table-column align='center' label="当日回收" min-width="100">
                            <template slot-scope="scope">
                                -
                            </template>
                        </el-table-column>
                        <el-table-column align='center' label="单日回收率" min-width="100">
                            <template slot-scope="scope">
                                -
                            </template>
                        </el-table-column>
                        <el-table-column align='center' label="七日回" min-width="100">
                            <template slot-scope="scope">
                                -
                            </template>
                        </el-table-column>
                        <el-table-column align='center' label="七日回收率" min-width="100">
                            <template slot-scope="scope">
                                -
                            </template>
                        </el-table-column>
                        <el-table-column align='center' label="30日回收" min-width="100">
                            <template slot-scope="scope">
                                -
                            </template>
                        </el-table-column>
                        <el-table-column align='center' label="30日回收率" min-width="100">
                            <template slot-scope="scope">
                                -
                            </template>
                        </el-table-column>
                        <el-table-column align='center' label="折损率" min-width="100">
                            <template slot-scope="scope">
                                -
                            </template>
                        </el-table-column>
                        <el-table-column align='center' label="次留" min-width="100">
                            <template slot-scope="scope">
                                -
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <!-- echarts -->
            <div class="account_countant_echarts">
                <h1>数据曲线图</h1>
                <el-select v-model="countryValue" @change="changeFun(countryValue)">
                    <el-option v-for="item in countryOptions" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <div id="myChart1"></div>
            </div>

            <!-- 表现数据 -->
            <div class="account_countant_performance">
                <h1>表现数据</h1>
                <h2>
                    <span @click="commonClick(index)" :class="{common_span: index == components_index}" v-for="(ele,index) in components_list" :key="index">{{ele.name}}</span>
                </h2>
                <component ref="tablerefs" :is="currentView" :loadingkeyWord='loadingkeyWord' :tablekeyWordtotal='tablekeyWordtotal' :tablekeyWord='tablekeyWord' :tableGrouptotal='tableGrouptotal' :tableGroup='tableGroup' :loadingGroup='loadingGroup'> </component>
            </div>
        </div>
        <!--吸顶导航  -->
        <transition name="el-zoom-in-top">
            <div class="nav_header" id="nav_header" v-show="nav_header">
                <div class="nav_header_cont">
                    <div class="nav_header_left" v-if="appList.length != 0">
                        <img :src="appList[appIndex].logoAdress" alt="">
                        <p>
                            <span>{{appList[appIndex].appName}}</span>
                            <span>ID: {{appList[appIndex].appId}}</span>
                            <span>开发商: {{appList[appIndex].developerName}}</span>
                        </p>
                    </div>
                    <div class="select_input nav_header_center" @click="alllistShow = true">{{listName}}</div>
                    <div class="nav_header_right">
                        <el-select v-model="dataValue" @change="changeFundate(dataValue)">
                            <el-option v-for="item in dataOptions" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                        <div class="to_top" @click="fromTop">
                            <span></span>
                            TOP
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <!-- 所有广告系列 -->
        <v-alllist v-if="alllistShow" :list='allSeries' :checkedAll='checkedAll'></v-alllist>
    </div>
</template>

<script>
import group from "./group";
import keyword from "./keyword";
import { mapState } from "vuex";
import alllist from "./alllist";
import { dateUtc } from "@commonJS/date";
import { datefn } from "@commonJS/dateList";
import { countryTwo } from "@commonJS/country";
import NavList from "@components/AsmLaunch/Nav-List";
import { excelCheckout } from "@commonJS/excelCheckout";
export default {
    data() {
        return {
            appadimad: "",
            pageName: "广告中心",
            routeList: [
                {
                    name: "广告中心",
                    path: "/advertising-center/home",
                    query: ""
                }
            ],
            appList: [],
            appIndex: 0,
            timeNow: "UTC",
            timeNowList: ["UTC", "America/New_York"],
            timeNowShow: false,
            //dateTime: "",
            dataValue: "",
            dataOptions: [],
            tableData4: [],
            tableGroup: [],
            tableGrouptotal: 0,
            tablekeyWord: [],
            tablekeyWordtotal: 0,
            loading: false,
            loadingAll: null,
            loadingopaction: {
                lock: true,
                text: "加载中",
                spinner: "el-icon-loading",
                background: "rgba(0, 0, 0, 0.7)"
            },
            loadingGroup: false,
            loadingkeyWord: false,
            countryOptions: [],
            countryValue: 0,
            myChart: null,
            currentView: group,
            components_list: [
                {
                    name: "所有广告组",
                    com: group
                },
                {
                    name: "所有关键词",
                    com: keyword
                }
            ],
            components_index: 0,
            allSeries: [],
            checkedAll: true,
            listName: "所有广告系列",
            alllistShow: false,
            listAllId: [],
            nav_header: false
        };
    },

    components: {
        "v-nav": NavList,
        "v-group": group,
        "v-keyword": keyword,
        "v-alllist": alllist
    },
    filters: {
        countryset: function(value) {
            if (value == null) {
                return "总和";
            } else {
                return countryTwo(value);
            }
        }
    },
    directives: {
        apphove: {
            bind(ele, node, vue) {
                $(ele).mouseover(function(e) {
                    if (!vue.context.appList[node.value].show) {
                        vue.context.appList[node.value].hov = true;
                    }
                });
                $(ele).mouseout(function(e) {
                    if (!vue.context.appList[node.value].show) {
                        vue.context.appList[node.value].hov = false;
                    }
                });
            }
        }
    },
    computed: {
        ...mapState({
            //datelist: state => state.Date.DateRange
        })
    },

    created() {
        // if (!this.$ss.get("TIME_UTC")) {
        //     this.dateTime = [datefn(3).beginTime, datefn(3).endTime];
        //     this.$ss.set("TIME_UTC", this.dateTime);
        // } else {
        //     this.dateTime = this.$ss.get("TIME_UTC");
        // }
        this.dataOptions = datefn(5);
        this.dataValue = this.dataOptions[2].value;
        let queryData = this.$route.params;
        this.routeList.push(
            {
                name: "账户",
                routername: "account",
                params: queryData
            },
            {
                name: "数据中心",
                routername: "datacenter",
                params: queryData
            }
        );

        //初始化
        this.AjaxAppListInfor();
    },

    updated() {},

    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },

    destroyed() {
        window.removeEventListener("scroll", this.handleScroll); // 离开页面 关闭监听 不然会报错
    },

    methods: {
        selectApp(index) {
            //选择app
            //初始化
            this.appIndex = index;
            this.checkedAll = true;
            this.listName = "所有广告系列";
            this.dataValue = 0;
            this.listAllId = [];
            this.appadimad = this.appList[index].appId;
            this.$refs.tablerefs.orderInfor();

            this.appList[index].campaigns.map(ele => {
                ele.country = this.appList[index].storefront;
                ele.name = ele.campaignName;
                ele.checked = true;
                this.listAllId.push(ele.campaignId);
            });
            this.allSeries = this.appList[index].campaigns;
            this.appList.map(ele => {
                ele.show = false;
                ele.hov = false;
            });
            this.appList[index].show = true;
            //切换请求数据总览
            this.AjaxGetDateScreenList(this.appList[index].appId);
        },
        timeNowListClick(index) {
            //切换时区
            this.advancedFunList = [];
            this.timeNow = this.timeNowList[index];
            this.timeNowShow = true;
        },
        commonClick(index) {
            //切换组件
            this.components_index = index;
            this.currentView = this.components_list[index].com;
        },
        changeFundate() {
            //切换时间
            this.$refs.tablerefs.orderInfor();
            this.AjaxGetDateScreenList(this.appList[this.appIndex].appId);
        },
        changeFun(value) {
            //切换国家
            this.AjaxChart();
        },
        AjaxAppListInfor() {
            //app
            this.loadingAll = this.$loading(this.loadingopaction);
            let url =
                "/api/v1/IntellSearchApi/DataCenter/GetDataCenterConfigByOrgId?orgId=" +
                this.$route.params.orgId;
            this.$https.get(url).then(res => {
                let arr = res.data.data;
                let newarr = [];
                this.listAllId = [];
                arr.map(ele => {
                    newarr.push({
                        appId: ele.adamid,
                        countryCode: ele.storefront,
                        campaigns: ele.campaigns
                    });
                });
                arr[0].campaigns.map(ele => {
                    ele.country = arr[0].storefront;
                    ele.name = ele.campaignName;
                    ele.checked = true;
                    this.listAllId.push(ele.campaignId);
                });
                this.allSeries = arr[0].campaigns;
                this.appadimad = arr[0].adamid;
                this.AjaxImg(newarr);
                this.AjaxGetDateScreenList(arr[0].adamid);
            });
        },
        AjaxImg(arr) {
            //图片
            let obj = [];
            arr.map(ele => {
                obj.push({
                    appId: ele.appId,
                    countryCode: ele.countryCode
                });
            });
            let imgurl =
                "/api/v1/IntellAdvertiseApi/Campaign/GetAppByAppidCountrys";
            this.$https.post(imgurl, JSON.stringify(obj)).then(res => {
                if (res.data.resultCode == 1000) {
                    this.loadingAll.close();
                    arr.map((ele, index) => {
                        res.data.data.map((ele2,index2)=>{
                            if(ele.appId == ele2.adamId) {
                                ele.appName = res.data.data[index2].appName;
                                ele.developerName = res.data.data[index2].developerName;
                                ele.logoAdress = res.data.data[index2].logoAdress;
                                ele.hov = false;
                                if (index == 0) {
                                    ele.show = true;
                                } else {
                                    ele.show = false;
                                }
                            } 
                        }) 
                    });
                    this.appList = arr;
                    this.$refs.tablerefs.orderInfor();
                } else {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "加载失败，请刷新页面",
                        type: 3
                    });
                }
            });
        },
        AjaxGetDateScreenList(id) {
            //数据总览
            this.countryOptions = [];
            this.countryValue = 0;
            this.loading = true;
            let url = "/api/v1/IntellSearchApi/DataCenter/GetDateScreenList";
            let obj = {
                adamid: id,
                orgId: this.$route.params.orgId,
                campaignIdList: this.listAllId,
                starDate: dateUtc(
                    this.dataOptions[this.dataValue].data.beginTime
                ),
                endDate: dateUtc(this.dataOptions[this.dataValue].data.endTime)
            };
            this.$https.post(url, JSON.stringify(obj)).then(res => {
                this.loading = false;
                let arr = [];
                res.data.data.dateList.map((ele, index) => {
                    this.countryOptions.push({
                        label: countryTwo(ele.storefront),
                        sx: ele.storefront,
                        value: index + 1
                    });
                });
                this.countryOptions.unshift({
                    label: "所有国家",
                    sx: "",
                    value: 0
                });
                arr = res.data.data.dateList;
                arr.push(res.data.data.totalDate);
                this.tableData4 = arr;
                this.AjaxChart();
            });
        },
        AjaxGroup(id, pageIndex, orderBy, isAsc) {
            //广告组
            this.loadingGroup = true;
            let obj = {
                adamid: id,
                orgId: this.$route.params.orgId,
                campaignIdList: this.listAllId,
                starDate: dateUtc(
                    this.dataOptions[this.dataValue].data.beginTime
                ),
                endDate: dateUtc(this.dataOptions[this.dataValue].data.endTime),
                pageIndex,
                pageSize: 20,
                orderBy,
                isAsc
            };
            let url =
                "/api/v1/IntellSearchApi/DataCenter/GetAdGroupPerformanceDate";
            this.$https.post(url, JSON.stringify(obj)).then(res => {
                this.loadingGroup = false;
                if (res.data.resultCode == 1000) {
                    this.tableGroup = res.data.data.dateList;
                    this.tableGrouptotal = res.data.data.totalCount;
                } else {
                    this.tableGroup = [];
                    this.tableGrouptotal = 0;
                }
            });
        },
        AjaxGroupExcel(type) {
            let obj = {
                adamid: this.appList[this.appIndex].appId,
                orgId: this.$route.params.orgId,
                campaignIdList: this.listAllId,
                starDate: dateUtc(
                    this.dataOptions[this.dataValue].data.beginTime
                ),
                endDate: dateUtc(this.dataOptions[this.dataValue].data.endTime),
                pageIndex: 0,
                pageSize: 0,
                orderBy: "localSpend",
                isAsc: false
            };
            let url = "";
            if (type == "广告组") {
                url =
                    "/api/v1/IntellSearchApi/DataCenter/ExportAdGroupPerformanceDate";
                excelCheckout(url, obj, '广告组列表');
            } else {
                url =
                    "/api/v1/IntellSearchApi/DataCenter/ExportKeywordsPerformanceDate";
                excelCheckout(url, obj, '关键词列表');
            }
            
        },
        AjaxKeyWord(id, pageIndex, orderBy, isAsc) {
            //广告组
            this.loadingkeyWord = true;
            let obj = {
                adamid: id,
                orgId: this.$route.params.orgId,
                campaignIdList: this.listAllId,
                starDate: dateUtc(
                    this.dataOptions[this.dataValue].data.beginTime
                ),
                endDate: dateUtc(this.dataOptions[this.dataValue].data.endTime),
                pageIndex,
                pageSize: 20,
                orderBy,
                isAsc
            };
            let url =
                "/api/v1/IntellSearchApi/DataCenter/GetKeywordsPerformanceDate";
            this.$https.post(url, JSON.stringify(obj)).then(res => {
                this.loadingkeyWord = false;
                if (res.data.resultCode == 1000) {
                    this.tablekeyWord = res.data.data.dateList;
                    this.tablekeyWordtotal = res.data.data.totalCount;
                } else {
                    this.tablekeyWord = [];
                    this.tablekeyWordtotal = 0;
                }
            });
        },
        AjaxChart() {
            let obj = {
                adamid: this.appadimad,
                orgId: this.$route.params.orgId,
                campaignIdList: this.listAllId,
                starDate: dateUtc(
                    this.dataOptions[this.dataValue].data.beginTime
                ),
                endDate: dateUtc(this.dataOptions[this.dataValue].data.endTime),
                storefront: this.countryOptions[this.countryValue].sx,
                granularity: "DAILY"
            };
            let url = "/api/v1/IntellSearchApi/DataCenter/GetDataChartList";
            this.$https.post(url, JSON.stringify(obj)).then(res => {
                if (res.data.resultCode == 1000) {
                    this.echartInfor(res.data.data);
                } else {
                    this.echartInfor([]);
                }
            });
        },
        echartInfor(arr) {
            let dateList = [];
            let avgCPA = [];
            let avgCPC = [];
            let conversionRate = [];
            let conversions = [];
            let impressions = [];
            let localSpend = [];
            let taps = [];
            let ttr = [];
            arr.map(ele => {
                dateList.push(ele.statisdate);
                avgCPA.push((ele.avgCPA * 1).toFixed(2));
                avgCPC.push((ele.avgCPC * 1).toFixed(2));
                conversionRate.push((ele.conversionRate * 100).toFixed(2));
                conversions.push((ele.conversions * 1).toFixed(2));
                impressions.push((ele.impressions * 1).toFixed(2));
                localSpend.push((ele.localSpend * 1).toFixed(2));
                taps.push((ele.taps * 1).toFixed(2));
                ttr.push((ele.ttr * 100).toFixed(2));
            });
            let myChart = this.$echarts.init(
                document.getElementById("myChart1")
            );
            let option = {
                tooltip: {
                    //鼠标提示
                    trigger: "axis",
                    axisPointer: {
                        type: "cross",
                        crossStyle: {
                            color: "#999"
                        }
                    }
                },
                grid: {
                    //绘画内容大小，位置
                    top: 80,
                    left: 50,
                    right: 50
                },
                toolbox: {
                    //工具栏
                    feature: {
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ["line", "bar"] },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                legend: {
                    //标签提示
                    bottom: 0,
                    selected: {
                        花费: true,
                        平均CPA: false,
                        平均CPC: false,
                        曝光数: false,
                        点击数: false,
                        下载数: true,
                        点击率: false,
                        点击率: false,
                        转化率: false
                        // 第三方平均CPA: false,
                        // 回收: false,
                        // 回收率: false
                    },
                    data: [
                        "花费",
                        "平均CPA",
                        "平均CPC",
                        "曝光数",
                        "点击数",
                        "下载数",
                        "点击率",
                        "点击率",
                        "转化率"
                        // "第三方平均CPA",
                        // "回收",
                        // "回收率"
                    ]
                },
                xAxis: [
                    //X轴数据
                    {
                        type: "category",
                        data: dateList,
                        axisPointer: {
                            type: "shadow"
                        }
                    }
                ],
                yAxis: [
                    //两个Y轴数据
                    {
                        type: "value",
                        name: "数值",
                        splitNumber: 10,
                        axisLabel: {
                            formatter: "{value}"
                        }
                    },
                    {
                        type: "value",
                        name: "百分比",
                        min: 0,
                        max: 100,
                        interval: 20,
                        axisLabel: {
                            formatter: "{value} %"
                        }
                    }
                ],
                color:['#f62d51','#dddddd','#ffbc34','#7460ee','#2f3d4a','#009efb','#55ce63','#90a4ae'],
                series: [
                    {
                        name: "花费",
                        type: "line",
                        smooth: true,
                        showSymbol: false,
                        data: localSpend
                    },
                    {
                        name: "平均CPA",
                        type: "line",
                        smooth: true,
                        data: avgCPA
                    },
                    {
                        name: "平均CPC",
                        type: "line",
                        smooth: true,
                        data: avgCPC
                    },
                    {
                        name: "曝光数",
                        type: "line",
                        smooth: true,
                        data: impressions
                    },
                    {
                        name: "点击数",
                        type: "line",
                        smooth: true,
                        data: taps
                    },
                    {
                        name: "下载数",
                        type: "line",
                        smooth: true,
                        data: conversions
                    },
                    {
                        name: "点击率",
                        type: "line",
                        smooth: true,
                        yAxisIndex: 1,
                        data: ttr
                    },
                    {
                        name: "转化率",
                        type: "line",
                        smooth: true,
                        yAxisIndex: 1,
                        data: conversionRate
                    }
                    // {
                    //     name: "第三方平均CPA",
                    //     type: "line",
                    //     smooth: true,
                    //     data: [110, 300]
                    // },
                    // {
                    //     name: "回收",
                    //     type: "line",
                    //     smooth: true,
                    //     data: [200, 100]
                    // },
                    // {
                    //     name: "回收率",
                    //     type: "line",
                    //     smooth: true,
                    //     yAxisIndex: 1,
                    //     data: [70, 25]
                    // }
                ]
            };
            myChart.setOption(option);
        },
        handleScroll() {
            //导航条变色
            var scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            let topnum =
                $(".account_table1")
                    .eq(0)
                    .offset().top - 60;
            if (scrollTop >= topnum) {
                //$("#nav_header").show(300);
                this.nav_header = true
            } else {
                //$("#nav_header").hide(300);
                this.nav_header = false
            }
        },
        fromTop() {
            //回到顶部
            $("html,body").animate(
                {
                    scrollTop: 0
                },
                800
            );
        }
    }
};
</script>