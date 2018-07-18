<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.account_index {
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
    .account_contant {
        min-width: 1200px;
        margin: 0 12px;
        box-sizing: border-box;
        padding: 0 20px 40px;
        background: #fff;
        position: relative;
    }

    .account_ul {
        width: 100%;
        margin: 30px 0;
        ul {
            width: 100%;
            display: flex;
            justify-content: space-around;
        }
        li {
            width: 13%;
            height: 100px;
            border: 1px solid @border;
            box-shadow: 0 0 2px @border;
            box-sizing: border-box;
            padding: 22px 0;
            line-height: 28px;
            text-align: center;
            span {
                color: @color;
                font-weight: 600;
                font-size: 16px;
            }
            p {
                font-size: 16px;
            }
        }
    }
    .account_search {
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        section {
            display: flex;
        }
        p {
            margin-right: 10px;
        }
    }
    .account_search_one {
        margin-right: 10px;
    }
    .account_gao {
        margin-left: 30px;
        font-weight: 600;
        color: @color;
        cursor: pointer;
    }
    //时区css
    .account_contant_top {
        padding-top: 20px;
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
    }
    //操作css
    .account_search_cao {
        cursor: pointer;
        display: flex;
        position: relative;
        margin-right: 30px;
        i {
            line-height: 40px;
            cursor: pointer;
        }
        section {
            width: 80px;
            position: absolute;
            top: 42px;
            left: 0;
            padding: 6px 0;
            background: #fff;
            border: 1px solid @border;
            border-radius: 4px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            z-index: 10;
            span {
                display: block;
                height: 30px;
                line-height: 30px;
                text-align: center;
                cursor: pointer;
                &:hover {
                    background: #f7f7f7;
                }
            }
        }
    }
    .account_table {
        width: 100%;
        margin-top: 30px;
    }
    .acconut_table_a {
        width: 100%;
        margin: 0 auto;
        color: @color;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:hover {
            text-decoration: underline;
        }
    }
    .content_page {
        margin-top: 40px;
        display: flex;
        justify-content: center;
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

<style lang="less" >
.account_index {
    .account_search_one {
        .el-select {
            width: 120px;
        }
    }
    .el-table th {
        background: #f7f7f7 !important;
        font-size: large;
        color: #666 !important;
    }
    .el-table th > .cell {
        line-height: 34px;
    }
    .el-table td,
    .el-table th {
        padding: 8px 0;
    }
}
</style>

<template>
    <div class="account_index">
        <!-- 导航 -->
        <v-header></v-header>

        <!-- 面包屑 -->
        <div class="adver_nav">
            <v-nav :pageName='pageName' :routeList='routeList'></v-nav>
            <div class="btn" @click="createAdvertising">
                <!-- <i class="iconfont icon-plus-add"></i> -->
                <span>创建广告系列</span>
            </div>
        </div>

        <div class="account_contant">
            <div class="account_contant_top">
                <h1>{{$route.query.accountName}}</h1>
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
            <!-- 表头 -->
            <div class="account_ul">
                <ul>
                    <li>
                        <span>{{accountData.localspendAmount | numTo$}}</span>
                        <p>花费</p>
                    </li>
                    <li>
                        <span>{{accountData.avgCPA | numTo$}}</span>
                        <p>平均CPA</p>
                    </li>
                    <li>
                        <span>{{accountData.avgCPC | numTo$}}</span>
                        <p>平均CPC</p>
                    </li>
                    <li>
                        <span>{{accountData.conversions}}</span>
                        <p>下载数</p>
                    </li>
                    <li>
                        <span>{{accountData.ttr | numTofixed}}</span>
                        <p>平均点击率</p>
                    </li>
                    <li>
                        <span>{{accountData.conversionRate | numTofixed}}</span>
                        <p>平均转化率</p>
                    </li>
                </ul>
            </div>
            <!-- 搜索筛选 -->
            <div class="account_search">
                <section>
                    <p>筛选</p>
                    <div class="account_search_one">
                        <el-select v-model="unlimited" @change='selectchange(unlimited)'>
                            <el-option v-for="(item , index) in unlimitedList" :key="index" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div>
                        <v-search :valuedata='valuedata' :placevaluedata='placevaluedata' :inputList='inputList' @changeInput='changeInput'>
                        </v-search>
                    </div>
                    <div class="account_gao" @click="advanShow = true">
                        高级搜索
                    </div>
                </section>
                <section>
                    <div class="account_search_cao" @click="caoShow = !caoShow">
                        操作：
                        <i class="iconfont icon-xia"></i>
                        <transition name="el-zoom-in-top">
                            <section v-show="caoShow" @mouseout="caoShow = false" @mousemove="caoShow = true">
                                <span v-for="(ele,index) in caoList" :key="index" @click="caoClick(index)">{{ele}}</span>
                            </section>
                        </transition>
                    </div>

                    <div class="account_search_date">
                        <el-date-picker
                            v-model="dateTime"
                            type="daterange"
                            align="right"
                            unlink-panels
                            :clearable = false
                            @change = 'changeDate'
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            value-format='yyyy-MM-dd'
                            :picker-options="datelist">
                        </el-date-picker>
                    </div>
                </section>
            </div>

            <!-- 表格 -->
            <div class="account_table">
                <el-table ref="multipleTable" :data="tableData4" style="width: 100%" highlight-current-row border @selection-change="handleSelectionChange" @sort-change='sortchange' v-loading="loading" :default-sort="sortInfor">
                    <el-table-column type="selection" fixed align='center' width="55">
                    </el-table-column>
                    <el-table-column fixed align='center' label="广告系列名称" min-width="320">
                        <template slot-scope="scope">
                            <div class="acconut_table_a" :title="scope.row.name" @click="advaerTolist(scope.row.name,scope.row.id)">
                                {{scope.row.name}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="status" label="状态" sortable='custom' align='center' min-width="85">
                        <template slot-scope="scope">
                            <div v-if="scope.row.status == 'ENABLED'">启用</div>
                            <div v-else>暂停</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="智能监测" align='center' min-width="105">
                        <template slot-scope="scope">
                            <div v-if="scope.row.monitorCount > 0" style="color: #2d76ed">监测中</div>
                            <div v-else>未监测</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="id" label="广告系列ID" align='center' min-width="110">
                    </el-table-column>
                    <el-table-column label="地区" align='center' min-width="120">
                        <template slot-scope="scope">
                            <span>{{scope.row.storefront | country}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="总预算" align='center' min-width="130">
                        <template slot-scope="scope">
                            <span>{{scope.row.budgetAmount | numTo$}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="dailyBudgetAmount" label="日预算" sortable='custom' align='center' min-width="110">
                        <template slot-scope="scope">
                            <span>{{scope.row.dailyBudgetAmount | numTo$}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="花费" align='center' min-width="100" sortable='custom' prop="localspendAmount">
                        <template slot-scope="scope">
                            <span>{{scope.row.localspendAmount | numTo$}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="平均CPA" align='center' min-width="120" sortable='custom' prop="avgCPA">
                        <template slot-scope="scope">
                            <span>{{scope.row.avgCPA | numTo$}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="平均CPC" align='center' min-width="120" sortable='custom' prop="avgCPC">
                        <template slot-scope="scope">
                            <span>{{scope.row.avgCPC | numTo$}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="曝光数" align='center' min-width="100" sortable='custom' prop="impressions">
                        <template slot-scope="scope">
                            <span>{{scope.row.impressions }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="点击数" align='center' min-width="100" sortable='custom' prop="taps">
                        <template slot-scope="scope">
                            <span>{{scope.row.taps }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="下载数" align='center' min-width="100" sortable='custom' prop="conversions">
                        <template slot-scope="scope">
                            <span>{{scope.row.conversions }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="点击率" align='center' min-width="100" sortable='custom' prop="ttr">
                        <template slot-scope="scope">
                            <span>{{scope.row.ttr | numTofixed}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="转化率" align='center' min-width="100" sortable='custom' prop="conversionRate">
                        <template slot-scope="scope">
                            <span>{{scope.row.conversionRate | numTofixed}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" align="center" min-width="120">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="deleteRow(scope.$index, scope.row)" type="text" size="small">
                                {{scope.row.status == 'ENABLED' ? '暂停' : '启用' }}
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>

            <!-- 分页 -->
            <div class="content_page">
                <el-pagination :current-page="pageIndex" background :page-size="20" @current-change="handleCurrentChange" layout="prev, pager, next" :total="total">
                </el-pagination>
            </div>

        </div>

        <div class="task_box" v-if="taskShow">
            <!-- 任务列表 -->
            <v-task :taskData='taskData'></v-task>
        </div>

        <!-- 高级搜索 -->
        <v-advan-search v-if="advanShow" :searchType='searchType' @advancedFun='advancedFun'></v-advan-search>

        <!-- 编辑弹窗 -->
        <v-budget v-if="budgetShow" @budgetBack='budgetBack' :budgetDate='budgetDate'></v-budget>

    </div>
</template>

<script>
import { mapState } from "vuex"; 
import { datefn } from "@commonJS/dateList";
import { date , dateUtc} from "@commonJS/date";
import { countryTwo } from "@commonJS/country";
import Task from "@components/AsmLaunch/Task-List";
import NavList from "@components/AsmLaunch/Nav-List";  
import documentClick from "@commonJS/documentSettings";
import { excelCheckout } from "@commonJS/excelCheckout"; 
import KeySearch from "@components/AsmLaunch/Key-Search";
import Budget from "@components/AsmLaunch/Budget-Editor";
import AdvanSearch from "@components/AsmLaunch/Advanced-Search";

 
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
            accountData: {
                avgCPA: 0,
                avgCPC: 0,
                conversionRate: 0,
                conversions: 0,
                impressions: 0,
                localspendAmount: 0,
                taps: 0,
                ttr: 0
            },
            unlimitedList: [
                {
                    value: 0,
                    label: "不限"
                },
                {
                    value: 1,
                    label: "暂停"
                },
                {
                    value: 2,
                    label: "启用"
                },
                {
                    value: 3,
                    label: "监测中"
                },
                {
                    value: 4,
                    label: "未监测"
                }
            ],
            unlimited: 0,
            valuedata: "", //搜索内容
            placevaluedata: "系列名称/系列ID", //搜索提示
            caoShow: false,
            caoList: [
                "编辑",
                "启用",
                "暂停",
                "导出",
                "编辑所有",
                "启用所有",
                "暂停所有"
            ],
            dateTime: '',
            advanShow: false,
            searchType: "国家", //高级搜索是否要国家
            tableData4: [],
            multipleSelection: [],
            indexMethod: 0,
            loading: false,
            loadingAll: null,
            loadingopaction: {
                lock: true,
                text: "加载中",
                spinner: "el-icon-loading",
                background: "rgba(0, 0, 0, 0.7)"
            },
            budgetShow: false, //编辑弹窗
            budgetDate: {
                one: {
                    is: true,
                    value: ""
                },
                two: {
                    is: true,
                    value: ""
                }
            }, //编辑数据
            pageIndex: 1,
            total: 0,
            advancedFunList: [], //高级搜索返回来的数据
            sortInfor: { prop: "status", order: "descending" },
            sortObj: {
                prop: "status",
                order: 1
            },
            idAll: "",
            userAll: [],
            setType: "",
            messageData: "",
            taskShow: false,
            taskData: {
                createCount: 0,
                editCount: 0,
                pauseCount: 0, //暂停
                pulseCount: 0 //启动
            },
            timer: null
        };
    },

    components: {
        "v-nav": NavList,
        "v-search": KeySearch,
        "v-advan-search": AdvanSearch,
        "v-budget": Budget,
        "v-task": Task
    },

    computed: {
        ...mapState({
            datelist: state => state.Date.DateRange
        })
    },

    filters: {
        country: function(value) {
            return countryTwo(value);
        }
    },

    created() {
        if(!this.$ss.get('TIME_UTC')) {
            this.dateTime = [datefn(3).beginTime , datefn(3).endTime]
            this.$ss.set('TIME_UTC', this.dateTime)
        }else{
            this.dateTime = this.$ss.get('TIME_UTC')
        } 
        let queryData = this.$route.query;
        this.routeList.push({
            name: "账户",
            path: "/advertising-center/account",
            query: queryData
        });
    },

    updated() {},

    mounted() {
        this.dateData = this.$route.query.date * 1;
        documentClick("account_search_cao", this, "caoShow");
        documentClick("checket_time", this, "timeNowShow");
        this.AjaxStatisticCampaign();
        this.AjaxGetCampaignOperateResult();
    },

    destroyed() {
        clearInterval(this.timer);
    },

    methods: {  
        timeNowListClick(index) {
            //切换时区
            this.advancedFunList = [];
            this.timeNow = this.timeNowList[index];
            this.timeNowShow = false;
        },
        selectchange(index) {
            //筛选
            this.advancedFunList = [];
            this.$refs.multipleTable.clearSort();
            this.$refs.multipleTable.sort("status", "descending");
            this.AjaxStatisticCampaign();
        },
        changeInput() {
            //input搜索
            this.advancedFunList = [];
            this.$refs.multipleTable.clearSort();
            this.$refs.multipleTable.sort("status", "descending");
            this.AjaxStatisticCampaign();
        },
        changeDate() {
            //切换时间进行请求
            this.$ss.set('TIME_UTC',this.dateTime)  
            this.advancedFunList = []; 
            this.$refs.multipleTable.clearSort();
            this.$refs.multipleTable.sort("status", "descending");
            this.AjaxStatisticCampaign(); 
        },  
        advancedFun(data) {
            //高级搜索
            this.advancedFunList = data;
            this.$refs.multipleTable.clearSort();
            this.$refs.multipleTable.sort("status", "descending");
            this.AjaxStatisticCampaign();
        },
        budgetBack(value) {
            //编辑
            this.AjaxSetType({
                id: this.setType == "编辑" ? this.IdStrPin().id : this.idAll,
                budgetAmount:
                    this.budgetDate.one.value == ""
                        ? -1
                        : this.budgetDate.one.value * 1,
                dailyBudgetAmount:
                    this.budgetDate.two.value == ""
                        ? -1
                        : this.budgetDate.two.value * 1,
                objJson:
                    this.setType == "编辑" ? this.IdStrPin().arr : this.userAll
            });
            this.$store.commit("SET_SHOW_TRUE", {
                value: "正在编辑请等待",
                type: 3
            });
            this.toggleSelection();
        },
        deleteRow(index, rows) {
            //单独操作按钮
            let _this = this;
            let type = rows.status == "ENABLED" ? "暂停" : "启用";
            this.$confirm("是否" + type + "所选广告系列？", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                center: true
            }).then(() => {
                this.AjaxSetType({
                    id: rows.id,
                    objJson: JSON.stringify([{ name: rows.name, id: rows.id }]),
                    status: rows.status == "ENABLED" ? "PAUSED" : "ENABLED"
                });
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "正在" + type + "，请等待",
                    type: 3
                });
            });
        },
        handleSelectionChange(val) {
            //选中
            this.multipleSelection = val;
        },
        sortchange(a) {
            //排序
            if (a.order != null) {
                this.sortObj = {
                    prop: a.prop,
                    order: a.order == "descending" ? "0" : "1"
                };
                this.pageIndex = 1;
                this.total = 0;
                this.toggleSelection();
                this.AjaxGetInfor();
            }
        },
        toggleSelection() {
            //清除选中
            this.$refs.multipleTable.clearSelection();
        },
        handleCurrentChange(val) {
            this.pageIndex = val * 1;
            this.toggleSelection();
            this.AjaxGetInfor();
        },
        AjaxGetInfor() {
            this.loading = true;
            let obj3 = {};
            obj3[this.sortObj.prop] = this.sortObj.order;

            let url = "/api/v1/IntellAdvertiseApi/Campaign/SearchCampaign";
            let Ajaxobj = {
                pageIndex: this.pageIndex,
                pageSize: 20,
                requestPar: {
                    keyword: this.valuedata,
                    authId: this.$route.query.orgId,
                    conditions: this.AjaxSetArgument()
                },
                orderByParDic: obj3
            };

            this.$https.post(url, JSON.stringify(Ajaxobj)).then(res => {
                this.loading = false;
                if (res.data.resultCode == 1000) {
                    this.tableData4 = res.data.data.list;
                    this.total = res.data.data.totalCount;
                } else {
                    this.tableData4 = [];
                    this.total = 0;
                }
            });

            //索取所有id
            let url1 =
                "/api/v1/IntellAdvertiseApi/Campaign/GetAllCampaignIdStrs";
            let Ajaxobj1 = {
                pageIndex: 1,
                pageSize: 9,
                requestPar: {
                    keyword: this.valuedata,
                    authId: this.$route.query.orgId,
                    conditions: this.AjaxSetArgument()
                },
                orderByParDic: null
            };
            this.$https.post(url1, JSON.stringify(Ajaxobj1)).then(res => {
                if (res.data.resultCode == 1000) {
                    this.idAll = res.data.data.id;
                    this.userAll = res.data.data.objJson;
                    this.messageData = JSON.parse(res.data.message);
                }
            });
        },
        AjaxStatisticCampaign() {
            this.loadingAll = this.$loading(this.loadingopaction);
            let url = "/api/v1/IntellAdvertiseApi/Campaign/StatisticCampaign";
            let obj = {
                authId: this.$route.query.orgId,
                keyword: this.valuedata,
                conditions: this.AjaxSetArgument()
            };

            this.$https.post(url, JSON.stringify(obj)).then(res => {
                this.loadingAll.close();
                if (res.data.resultCode == 1000) {
                    this.accountData = res.data.data;
                } else {
                    this.accountData = {
                        avgCPA: 0,
                        avgCPC: 0,
                        conversionRate: 0,
                        conversions: 0,
                        impressions: 0,
                        localspendAmount: 0,
                        taps: 0,
                        ttr: 0
                    };
                }
            });
        },
        AjaxSetArgument() {
            //整合搜索参数
            let obj = {};
            let obj2 = {};
            let obj3 = {};
            let arr = [];
            //status 1  equals 值 PAUSED/ENABLED
            //monitorcount 2 equals 1/0
            //statisdate 1 inrange 值 "2018-02-01","201802-02"
            switch (this.unlimited) {
                case 0:
                    obj = null;
                    break;
                case 1:
                    obj = {
                        code: "status",
                        operator: "equals",
                        valueType: 1,
                        values: ["PAUSED"]
                    };
                    break;
                case 2:
                    obj = {
                        code: "status",
                        operator: "equals",
                        valueType: 1,
                        values: ["ENABLED"]
                    };
                    break;
                case 3:
                    obj = {
                        code: "monitorcount",
                        operator: "greaterthanorequals",
                        valueType: 2,
                        values: ["1"]
                    };
                    break;
                case 4:
                    obj = {
                        code: "monitorcount",
                        operator: "equals",
                        valueType: 2,
                        values: ["0"]
                    };
            }
            obj2 = {
                code: "statisdate",
                operator: "inrange",
                valueType: 1,
                values: [
                    dateUtc(this.dateTime[0]),
                    dateUtc(this.dateTime[1])
                ]
            };
            arr.push(obj2);
            if (obj != null) {
                arr.push(obj);
            }
            if (this.advancedFunList.length != 0) {
                arr.push(...this.advancedFunList);
            }
            return arr;
        },
        caoClick(index) {
            //操作按钮
            this.caoShow = false;
            this.setType = this.caoList[index];
            if (this.tableData4.length == 0) {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "无数据无法操作",
                    type: 3
                });
                return false;
            }
            let type = this.caoList[index];
            let _this = this;

            switch (type) {
                case "启用":
                    if (this.multipleSelection.length == 0) {
                        _this.$store.commit("SET_SHOW_TRUE", {
                            value: "请选择广告系列",
                            type: 3
                        });
                    } else {
                        this.$confirm("是否启用所选广告系列？", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            center: true
                        })
                            .then(() => {
                                this.AjaxSetType({
                                    id: this.IdStrPin().id,
                                    objJson: this.IdStrPin().arr,
                                    status: "ENABLED"
                                });
                                _this.$store.commit("SET_SHOW_TRUE", {
                                    value: "正在启用请等待",
                                    type: 3
                                });
                                _this.toggleSelection();
                            })
                            .catch(() => {});
                    }
                    break;
                case "暂停":
                    if (this.multipleSelection.length == 0) {
                        _this.$store.commit("SET_SHOW_TRUE", {
                            value: "请选择广告系列",
                            type: 3
                        });
                    } else {
                        this.$confirm("是否暂停所选广告系列？", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            center: true
                        }).then(() => {
                            this.AjaxSetType({
                                id: this.IdStrPin().id,
                                objJson: this.IdStrPin().arr,
                                status: "PAUSED"
                            });
                            _this.$store.commit("SET_SHOW_TRUE", {
                                value: "正在暂停请等待",
                                type: 3
                            });
                            _this.toggleSelection();
                        });
                    }
                    break;
                case "启用所有":
                    this.$confirm("是否启用所有广告系列？", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        center: true
                    }).then(() => {
                        _this.AjaxSetType({
                            id: this.idAll,
                            objJson: this.userAll,
                            status: "ENABLED"
                        });
                        _this.$store.commit("SET_SHOW_TRUE", {
                            value: "正在启用请等待",
                            type: 3
                        });
                        _this.toggleSelection();
                    });
                    break;
                case "暂停所有":
                    this.$confirm("是否暂停所有广告系列？", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        center: true
                    }).then(() => {
                        _this.AjaxSetType({
                            id: this.idAll,
                            objJson: this.userAll,
                            status: "PAUSED"
                        });
                        _this.$store.commit("SET_SHOW_TRUE", {
                            value: "正在暂停请等待",
                            type: 3
                        });
                        _this.toggleSelection();
                    });
                    break;
                case "编辑":
                    if (this.multipleSelection.length == 0) {
                        _this.$store.commit("SET_SHOW_TRUE", {
                            value: "请选择广告系列",
                            type: 3
                        });
                    } else {
                        this.isAllTrue();
                        _this.budgetShow = true;
                    }
                    break;
                case "编辑所有":
                    this.budgetDate = {
                        one: {
                            is: this.messageData.budgetMsg == "" ? true : false,
                            value:
                                this.messageData.budgetMsg == ""
                                    ? this.tableData4[0].budgetAmount
                                    : ""
                        },
                        two: {
                            is: this.messageData.dailyMsg == "" ? true : false,
                            value:
                                this.messageData.dailyMsg == ""
                                    ? this.tableData4[0].dailyBudgetAmount
                                    : ""
                        }
                    };
                    _this.budgetShow = true;
                    break;
                case "导出":
                    this.AjaxExcelOut();
                    break;
            }
        },
        isAllTrue() {
            //判断总预算，跟日预算是否相同
            let one = true;
            let two = true;
            this.multipleSelection.map(ele => {
                if (
                    ele.budgetAmount != this.multipleSelection[0].budgetAmount
                ) {
                    one = false;
                }
            });
            this.multipleSelection.map(ele => {
                if (
                    ele.dailyBudgetAmount !=
                    this.multipleSelection[0].dailyBudgetAmount
                ) {
                    two = false;
                }
            });
            this.budgetDate = {
                one: {
                    is: one,
                    value: one ? this.multipleSelection[0].budgetAmount : ""
                },
                two: {
                    is: two,
                    value: two
                        ? this.multipleSelection[0].dailyBudgetAmount
                        : ""
                }
            }; //编辑数据
        },
        IdStrPin() {
            //拼接id
            let id = "";
            let arr = [];
            this.multipleSelection.map(ele => {
                id += ele.id + ",";
                arr.push({
                    id: ele.id,
                    name: ele.name
                });
            });
            id = id.substring(0, id.length - 1);
            arr = JSON.stringify(arr);
            return { id, arr };
        },
        AjaxSetType(obj) {
            //Ajax编辑
            let url = "/api/v1/IntellAdvertiseApi/Campaign/EditCampaign";
            this.$https.post(url, JSON.stringify(obj));
        },
        AjaxExcelOut() {
            let obj3 = {};
            obj3[this.sortObj.prop] = this.sortObj.order;
            let url = "/api/v1/IntellAdvertiseApi/Campaign/ExportCampaign";
            let Ajaxobj = {
                pageIndex: 1,
                pageSize: 9,
                requestPar: {
                    keyword: this.valuedata,
                    authId: this.$route.query.orgId,
                    conditions: this.AjaxSetArgument()
                },
                orderByParDic: obj3
            };
            excelCheckout(url, Ajaxobj);
        },
        AjaxGetCampaignOperateResult() {
            //5秒一次获取状态列表
            let url =
                "/api/v1/IntellAdvertiseApi/Campaign/GetCampaignOperateResult?orgid=" +
                this.$route.query.orgId;
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
                        if (res.data.resultCode == 1000) {
                            if (res.data.data == null || res.data.data == "") {
                                _this.taskShow = false;
                                //this.taskData = res.data.data
                            } else {
                                _this.taskShow = true;
                                this.taskData = res.data.data;
                            }
                        } else {
                            _this.taskShow = false;
                        }
                    });
            }, 5000);
        },
        createAdvertising() {
            //创建广告系列
            this.$router.push({
                path: "/advertising-center/advertising-list",
                query: this.$route.query
            });
        },
        advaerTolist(name, id) {
            //跳转广告系列
            this.$router.push({
                path: "/advertising-center/list",
                query: {
                    accountName: this.$route.query.accountName,
                    orgId: this.$route.query.orgId,
                    listName: name,
                    listId: id, 
                    id: this.$route.query.id
                }
            });
        }
    }
};
</script>