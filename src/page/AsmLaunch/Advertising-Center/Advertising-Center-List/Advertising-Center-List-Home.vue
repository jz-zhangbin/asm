<style lang='less' scoped>
@import url("../../../../base/commonCSS/AsmLaunchTable.less");
.account_ul {
    width: 100%;
    margin-bottom: 30px;
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
        font-size: 16px;
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
</style> 

<template>
    <div class="account_index">
        <div class="account_contant">
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
                        <el-select v-model="dateData" @change="changeFun(dateData)">
                            <el-option v-for="item in datelist" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </div>
                </section>
            </div>

            <!-- 表格 -->
            <div class="account_table">
                <el-table ref="multipleTable" :data="tableData4" style="width: 100%" highlight-current-row border @selection-change="handleSelectionChange" @sort-change='sortchange' v-loading="loading" :default-sort="sortInfor">
                    <el-table-column type="selection" fixed align='center' width="55">
                    </el-table-column>
                    <el-table-column fixed align='center' label="广告组名称" min-width="320">
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
                            <div v-if="scope.row.monitorCount == '1'" style="color: #2d76ed">监测中</div>
                            <div v-else>未监测</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="id" label="广告系列ID" align='center' min-width="110">
                    </el-table-column>
                    <el-table-column label="搜索匹配" align='center' min-width="110" prop="automatedKeywordsOptIn">
                        <template slot-scope="scope">
                            <span>{{scope.row.automatedKeywordsOptIn == true ? '是' : '否'}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="默认CPC" align='center' min-width="110" sortable='custom' prop="defaultCPCBidAmount">
                        <template slot-scope="scope">
                            <span>{{scope.row.defaultCPCBidAmount | numTo$}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="目标CPA" align='center' min-width="110" sortable='custom' prop="cpaGoalamount">
                        <template slot-scope="scope">
                            <span>{{scope.row.cpaGoalamount | numTo$}}</span>
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
                                {{scope.row.status != 'ENABLED' ? '启用' : '暂停' }}
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

        <!-- 高级搜索 -->
        <v-advan-search v-if="advanShow" :searchType='searchType' @advancedFun='advancedFun'></v-advan-search>

        <!-- 编辑弹窗 -->
        <v-budget v-if="budgetShow" @budgetBack='budgetBack' :editObjType='editObjType' :editObj='editObj' :budgetDate='budgetDate'></v-budget>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { datefn } from "@commonJS/dateList";
import { countryTwo } from "@commonJS/country";
import documentClick from "@commonJS/documentSettings";
import { excelCheckout } from "@commonJS/excelCheckout";
import KeySearch from "@components/AsmLaunch/Key-Search";
import Budget from "@components/AsmLaunch/Budget-Editor-Ad";
import AdvanSearch from "@components/AsmLaunch/Advanced-Search";
export default {
    data() {
        return {
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
            placevaluedata: "广告组名称/广告组ID", //搜索提示
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
            dateData: 0, //当前时间
            advanShow: false,
            searchType: "所有广告组", //高级搜索是否要国家
            tableData4: [],
            multipleSelection: [],
            indexMethod: 0,
            loading: false,
            budgetShow: false, //编辑弹窗
            budgetDate: {}, //编辑数据
            pageIndex: 1,
            total: 0,
            advancedFunList: [], //高级搜索返回来的数据
            sortInfor: { prop: "status", order: "descending" },
            sortObj: {
                prop: "status",
                order: 1
            },
            loadingAll: null,
            loadingopaction: {
                lock: true,
                text: "加载中",
                spinner: "el-icon-loading",
                background: "rgba(0, 0, 0, 0.7)"
            },
            idAll: "",
            userAll: [],
            setType: "",
            messageData: "",
            editObj: {},
            editObjType: {}
        };
    },
    filters: {
        country: function(value) {
            return countryTwo(value);
        }
    },
    components: {
        "v-search": KeySearch,
        "v-advan-search": AdvanSearch,
        "v-budget": Budget
    },

    computed: {
        ...mapState({
            datelist: state => state.Date.DateListAll
        })
    },

    created() {},

    updated() {},

    mounted() {
        this.dateData = this.$route.query.date * 1;
        documentClick("account_search_cao", this, "caoShow");
        this.AjaxStatisticCampaign();
    },

    destroyed() {},

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
        changeFun(value) {
            //切换时间进行请求
            this.advancedFunList = [];
            this.dateData = value;
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
            if (this.setType == "编辑") {
                this.AjaxEditAdGroup({
                    objJson: this.IdStrPin().arr,
                    paramJson: JSON.stringify(value)
                });
            } else {
                this.AjaxEditAdGroup({
                    objJson: this.userAll,
                    paramJson: JSON.stringify(value)
                });
            }
            this.$store.commit("SET_SHOW_TRUE", {
                value: "正在编辑请等待",
                type: 3
            });
            this.toggleSelection();
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
        IdStrPin() {
            //拼接id
            let id = "";
            let arr = [];
            this.multipleSelection.map(ele => {
                id += ele.id + ",";
                arr.push({
                    Id: ele.id,
                    Name: ele.name,
                    DeviceClass: ele.deviceClass,
                    AppDownLoaders: ele.appDownLoaders,
                    Age: ele.age,
                    Gender: ele.gender
                });
            });
            arr = JSON.stringify(arr);
            id = id.substring(0, id.length - 1);
            return { id, arr };
        },
        DeitListAllUserTableAll() {
            if (this.messageData.age == -1) {
                this.editObjType.ageType = false;
            } else {
                this.editObjType.ageType = true;
            }
            if (this.messageData.appDownLoaders == -1) {
                this.editObjType.appDownLoadersType = false;
            } else {
                this.editObjType.appDownLoadersType = true;
            }
            if (this.messageData.cpaGoalamount == -1) {
                this.editObjType.cpaGoalamountType = false;
            } else {
                this.editObjType.cpaGoalamountType = true;
            }
            if (this.messageData.defaultCPCBidAmount == -1) {
                this.editObjType.defaultCPCBidAmountType = false;
            } else {
                this.editObjType.defaultCPCBidAmountType = true;
            }
            if (this.messageData.deviceClass == -1) {
                this.editObjType.deviceClassType = false;
            } else {
                this.editObjType.deviceClassType = true;
            }
            if (this.messageData.gender == -1) {
                this.editObjType.genderType = false;
            } else {
                this.editObjType.genderType = true;
            }
            this.editObj = this.messageData;
        },
        DeitListAllUserTable() {
            let defaultCPCBidAmountType = true;
            let cpaGoalamountType = true;
            let deviceClassType = true;
            let appDownLoadersType = true;
            let ageType = true;
            let genderType = true;
            let obj = {
                defaultCPCBidAmount: null,
                cpaGoalamount: null,
                deviceClass: null,
                appDownLoaders: null,
                age: null,
                gender: null
            };
            this.multipleSelection.map(ele => {
                if (
                    ele.defaultCPCBidAmount !=
                    this.multipleSelection[0].defaultCPCBidAmount
                ) {
                    defaultCPCBidAmountType = false;
                }
                if (
                    ele.cpaGoalamount != this.multipleSelection[0].cpaGoalamount
                ) {
                    cpaGoalamountType = false;
                }
                if (ele.deviceClass != this.multipleSelection[0].deviceClass) {
                    deviceClassType = false;
                }
                if (
                    ele.appDownLoaders !=
                    this.multipleSelection[0].appDownLoaders
                ) {
                    appDownLoadersType = false;
                }
                if (ele.age != this.multipleSelection[0].age) {
                    ageType = false;
                }
                if (ele.gender != this.multipleSelection[0].gender) {
                    genderType = false;
                }
            });
            if (defaultCPCBidAmountType) {
                obj.defaultCPCBidAmount = this.multipleSelection[0].defaultCPCBidAmount;
            } else {
                obj.defaultCPCBidAmount = -1;
            }
            if (cpaGoalamountType) {
                obj.cpaGoalamount = this.multipleSelection[0].cpaGoalamount;
            } else {
                obj.cpaGoalamount = -1;
            }
            if (deviceClassType) {
                obj.deviceClass = this.multipleSelection[0].deviceClass;
            } else {
                obj.deviceClass = -1;
            }
            if (appDownLoadersType) {
                obj.appDownLoaders = this.multipleSelection[0].appDownLoaders;
            } else {
                obj.appDownLoaders = -1;
            }
            if (ageType) {
                obj.age = this.multipleSelection[0].age;
            } else {
                obj.age = -1;
            }
            if (genderType) {
                obj.gender = this.multipleSelection[0].gender;
            } else {
                obj.gender = -1;
            }
            this.editObj = obj;
            this.editObjType = {
                defaultCPCBidAmountType,
                cpaGoalamountType,
                deviceClassType,
                appDownLoadersType,
                ageType,
                genderType
            };
            // this.editObj = {
            //     defaultCPCBidAmount: -1,
            //     cpaGoalamount: -1,
            //     deviceClass: -1,//IPHONE IPAD
            //     appDownLoaders: -1,//[] [123454354]
            //     age: -1,//[{minAge:-1,maxAge:-1}]
            //     gender: -1//M  []
            // };
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

            let url = "/api/v1/IntellAdvertiseApi/AdGroup/SearchAdgroup";
            let Ajaxobj = {
                pageIndex: this.pageIndex,
                pageSize: 20,
                requestPar: {
                    keyword: this.valuedata,
                    authId: this.$route.query.orgId,
                    campaignId: this.$route.query.listId,
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
            let url1 = "/api/v1/IntellAdvertiseApi/AdGroup/GetAllAdGroupIdStrs";
            let Ajaxobj1 = {
                pageIndex: 1,
                pageSize: 9,
                requestPar: {
                    keyword: this.valuedata,
                    authId: this.$route.query.orgId,
                     campaignId: this.$route.query.listId,
                    conditions: this.AjaxSetArgument()
                },
                orderByParDic: null
            };
            this.$https.post(url1, JSON.stringify(Ajaxobj1)).then(res => {
                if (res.data.resultCode == 1000) {
                    this.idAll = res.data.data.id;
                    this.userAll = res.data.data.objJson;
                    this.messageData = JSON.parse(res.data.message);
                    for (var i in this.messageData) {
                        if (this.messageData[i] != -1) {
                            this.messageData[i] = JSON.parse(
                                this.messageData[i]
                            );
                        }
                    }
                }
            });
        },
        AjaxStatisticCampaign() {
            this.loadingAll = this.$loading(this.loadingopaction);
            let url = "/api/v1/IntellAdvertiseApi/AdGroup/StatisticAdGroup";
            let obj = {
                authId: this.$route.query.orgId,
                 campaignId: this.$route.query.listId,
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
                        operator: "equals",
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
                    break;
            }
            obj2 = {
                code: "statisdate",
                operator: "inrange",
                valueType: 1,
                values: [
                    this.datelist[this.dateData].data.beginTime,
                    this.datelist[this.dateData].data.endTime
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
        toggleSelection() {
            //清楚选中
            this.$refs.multipleTable.clearSelection();
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
                this.AjaxEditAdGroup({
                    objJson: JSON.stringify([{ Name: rows.name, Id: rows.id }]),
                    paramJson: JSON.stringify({
                        Status: rows.status == "ENABLED" ? "PAUSED" : "ENABLED",
                        CampaignId: this.$route.query.listId
                    })
                });
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "正在" + type + "，请等待",
                    type: 3
                });
            });
        },
        caoClick(index) {
            //操作按钮
            let _this = this;
            this.caoShow = false;
            let type = this.caoList[index];
            this.setType = this.caoList[index];
            if (this.tableData4.length == 0) {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "无数据无法操作",
                    type: 3
                });
                return false;
            }

            switch (type) {
                case "启用":
                    if (this.multipleSelection.length == 0) {
                        _this.$store.commit("SET_SHOW_TRUE", {
                            value: "选择广告组",
                            type: 3
                        });
                    } else {
                        this.$confirm("是否启用所选广告组？", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            center: true
                        })
                            .then(() => {
                                this.AjaxEditAdGroup({
                                    objJson: this.IdStrPin().arr,
                                    paramJson: JSON.stringify({
                                        Status: "ENABLED",
                                        CampaignId: this.$route.query.listId
                                    })
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
                            value: "请选择广告组",
                            type: 3
                        });
                    } else {
                        this.$confirm("是否暂停所选广告组？", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            center: true
                        })
                            .then(() => {
                                this.AjaxEditAdGroup({
                                    objJson: this.IdStrPin().arr,
                                    paramJson: JSON.stringify({
                                        Status: "PAUSED",
                                        CampaignId: this.$route.query.listId
                                    })
                                });
                                _this.$store.commit("SET_SHOW_TRUE", {
                                    value: "正在暂停请等待",
                                    type: 3
                                });
                                _this.toggleSelection();
                            })
                            .catch(() => {});
                    }
                    break;
                case "启用所有":
                    this.$confirm("是否启用所有广告组？", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        center: true
                    })
                        .then(() => {
                            this.AjaxEditAdGroup({
                                objJson: this.userAll,
                                paramJson: JSON.stringify({
                                    Status: "ENABLED",
                                    CampaignId: this.$route.query.listId
                                })
                            });
                            _this.$store.commit("SET_SHOW_TRUE", {
                                value: "正在启用请等待",
                                type: 3
                            });
                            _this.toggleSelection();
                        })
                        .catch(() => {});
                    break;
                case "暂停所有":
                    this.$confirm("是否暂停所有广告组？", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        center: true
                    })
                        .then(() => {
                            this.AjaxEditAdGroup({
                                objJson: this.userAll,
                                paramJson: JSON.stringify({
                                    Status: "PAUSED",
                                    CampaignId: this.$route.query.listId
                                })
                            });
                            _this.$store.commit("SET_SHOW_TRUE", {
                                value: "正在暂停请等待",
                                type: 3
                            });
                            _this.toggleSelection();
                        })
                        .catch(() => {});
                    break;
                case "编辑":
                    if (this.multipleSelection.length == 0) {
                        _this.$store.commit("SET_SHOW_TRUE", {
                            value: "请选择广告组",
                            type: 3
                        });
                    } else {
                        this.DeitListAllUserTable();
                        _this.budgetShow = true;
                    }
                    break;
                case "编辑所有":
                    this.DeitListAllUserTableAll();
                    _this.budgetShow = true;
                    break;
                case "导出":
                    this.AjaxExcelOut();
                    break;
            }
        },
        AjaxEditAdGroup(obj) {
            let url = "/api/v1/IntellAdvertiseApi/AdGroup/EditAdGroup";
            this.$https.post(url, JSON.stringify(obj));
        },
        AjaxExcelOut() {
            let obj3 = {};
            obj3[this.sortObj.prop] = this.sortObj.order;
            let url = "/api/v1/IntellAdvertiseApi/AdGroup/ExportAdGroup";
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
        createAdvertising() {
            //创建广告组
            this.$router.push({
                path: "/advertising-center/advertising-list",
                query: this.$route.query
            });
        },

        advaerTolist(name, id) {
            //跳转广告组
            this.$router.push({
                path: "/advertising-center/keyword",
                query: {
                    accountName: this.$route.query.accountName,
                    orgId: this.$route.query.orgId,
                    listName: this.$route.query.listName,
                    listId: this.$route.query.listId,
                    date: this.dateData,
                    id: this.$route.query.id,
                    keyName: name,
                    keyId: id
                }
            });
        }
    }
};
</script>