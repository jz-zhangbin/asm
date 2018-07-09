<style lang='less' scoped>
@import url("../../../../base/commonCSS/AsmLaunchTable.less");
.noe_a{
    cursor: none !important;
}
</style> 

<template>
    <div class="account_index">
        <div class="account_contant">
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
                    <el-table-column fixed align='center' label="广告系列名称" min-width="320">
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.name}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="status" label="状态" sortable='custom' align='center' min-width="85">
                        <template slot-scope="scope">
                            <div v-if="scope.row.status == 'ACTIVE'">启用</div>
                            <div v-else>暂停</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="matchType" label="匹配类型" align='center' min-width="120">
                        <template slot-scope="scope">
                            <div v-if="scope.row.matchType == 'EXACT'">精准</div>
                            <div v-else>广泛</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="CPC出价" align='center' min-width="120" sortable='id' prop="localspendAmount">
                        <template slot-scope="scope">
                            <span>{{scope.row.bidamount | numTo$}}</span>
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
                                {{scope.row.status == 'ACTIVE' ? '暂停' : '启用'}}
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
        <v-budget v-if="budgetShow" @budgetBack='budgetBack' :budgetDate='budgetDate'></v-budget>
    </div>
</template>

<script>
import { mapState } from "vuex";
import documentClick from "@commonJS/documentSettings";
import { excelCheckout } from "@commonJS/excelCheckout";
import KeySearch from "@components/AsmLaunch/Key-Search";
import Budget from "@components/AsmLaunch/Budget-Editor-Key";
import AdvanSearch from "@components/AsmLaunch/Advanced-Search";
export default {
    data() {
        return {
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
                    label: "广泛匹配"
                },
                {
                    value: 4,
                    label: "精准匹配"
                }
            ],
            unlimited: 0,
            valuedata: "", //搜索内容
            placevaluedata: "关键词搜索", //搜索提示
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
            searchType: "所有关键词", //高级搜索是否要国家
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
            idAll: "",
            userAll: [],
            setType: "",
            messageData: ""
        };
    },

    components: {
        "v-search": KeySearch,
        "v-advan-search": AdvanSearch,
        "v-budget": Budget
    },

    filters: {
        country: function(value) {
            return countryTwo(value);
        }
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
    },

    destroyed() {},

    methods: {
        selectchange(index) {
            //筛选
            this.advancedFunList = [];
            this.$refs.multipleTable.clearSort();
            this.$refs.multipleTable.sort("status", "descending");
        },
        changeInput() {
            //input搜索
            this.advancedFunList = [];
            this.$refs.multipleTable.clearSort();
            this.$refs.multipleTable.sort("status", "descending");
        },

        changeFun(value) {
            //切换时间进行请求
            this.advancedFunList = [];
            this.dateData = value;
            this.$refs.multipleTable.clearSort();
            this.$refs.multipleTable.sort("status", "descending");
        },

        advancedFun(data) {
            //高级搜索
            this.advancedFunList = data;
            this.$refs.multipleTable.clearSort();
            this.$refs.multipleTable.sort("status", "descending");
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

        handleCurrentChange(val) {
            this.pageIndex = val * 1;
            this.toggleSelection();
            this.AjaxGetInfor();
        },
        AjaxGetInfor() {
            this.loading = true;
            let obj3 = {};
            obj3[this.sortObj.prop] = this.sortObj.order;

            let url =
                "/api/v1/IntellAdvertiseApi/KeywordsSearch/SearchKeywords";
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
                "/api/v1/IntellAdvertiseApi/KeywordsSearch/GetAllKeywordsIdStrs";
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
                        values: ["ACTIVE"]
                    };
                    break;
                case 3:
                    obj = {
                        code: "MatchType ",
                        operator: "equals",
                        valueType: 1,
                        values: ["BROAD"]
                    };
                    break;
                case 4:
                    obj = {
                        code: "MatchType ",
                        operator: "equals",
                        valueType: 1,
                        values: ["EXACT"]
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
            arr.push({
                code: "ov.campaignid",
                operator: "equals",
                valueType: 3,
                values: [this.$route.query.listId]
            });
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
                                    objJson: this.IdStrPin().arr,
                                    status: "ACTIVE"
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
                            objJson: this.userAll,
                            status: "ACTIVE"
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
                        _this.budgetShow = true;
                    }
                    break;
                case "编辑所有":
                    _this.budgetShow = true;
                    break;
                case "导出":
                    this.AjaxExcelOut();
            }
        },

        budgetBack(value) {
            this.AjaxSetType({
                bidAmount: value * 1,
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
            let type = rows.status == "ACTIVE" ? "暂停" : "启用";
            this.$confirm("是否" + type + "所选广告系列？", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                center: true
            }).then(() => {
                this.AjaxSetType({
                    objJson: JSON.stringify([
                        {
                            name: rows.name,
                            id: rows.id,
                            campaignId: this.$route.query.listId,
                            adGroupId: rows.adgroupid
                        }
                    ]),
                    status: rows.status == "ACTIVE" ? "PAUSED" : "ACTIVE"
                });
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "正在" + type + "，请等待...",
                    type: 3
                });
            });
        },
        AjaxSetType(obj) {
            //Ajax编辑
            let url =
                "/api/v1/IntellAdvertiseApi/KeywordsSearch/EditKeywordsRecords";
            this.$https.post(url, JSON.stringify(obj));
        },
        IdStrPin() {
            //拼接id
            let id = "";
            let arr = [];
            this.multipleSelection.map(ele => {
                id += ele.id + ",";
                arr.push({
                    id: ele.id,
                    name: ele.name,
                    campaignId: this.$route.query.listId,
                    adGroupId: ele.adgroupid
                });
            });
            arr = JSON.stringify(arr);
            id = id.substring(0, id.length - 1);
            return { id, arr };
        },
        AjaxExcelOut() {
            let obj3 = {};
            obj3[this.sortObj.prop] = this.sortObj.order;

            let url =
                "/api/v1/IntellAdvertiseApi/KeywordsSearch/ExportKeywords";
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
        handleSelectionChange(val) {
            //选中
            this.multipleSelection = val;
        },
        toggleSelection() {
            //清楚选中
            this.$refs.multipleTable.clearSelection();
        }
    }
};
</script>