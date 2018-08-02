<style lang='less' scoped>
@import url("../../../../base/commonCSS/AsmLaunchTable.less");
.stop {
    cursor: not-allowed !important;
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
                        <el-select v-model="unlimited" :disabled="$route.params.groupType == 'remove'" @change='selectchange(unlimited)'>
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
                            <section style="width:130px;" v-show="caoShow" @mouseout="caoShow = false" @mousemove="caoShow = true">
                                <span :class="{stop: $route.params.groupType == 'remove' && index != 0}" v-for="(ele,index) in caoList" :key="index" @click="caoClick(index)">{{ele}}</span>
                            </section>
                        </transition>
                    </div>

                    <div class="account_search_date">
                        <el-date-picker v-model="dateTime" type="daterange" align="right" unlink-panels :clearable=false @change='changeDate' range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format='yyyy-MM-dd' :picker-options="datelist">
                        </el-date-picker>
                    </div>
                </section>
            </div>

            <!-- 表格 -->
            <div class="account_table" id="account_tablete">
                <el-table ref="multipleTable" :data="tableData4" style="width: 100%" highlight-current-row border @selection-change="handleSelectionChange" @sort-change='sortchange' v-loading="loading" :default-sort="sortInfor">
                    <el-table-column type="selection" fixed align='center' width="55">
                    </el-table-column>
                    <el-table-column fixed align='center' label="搜索词" min-width="260">
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.searchTermText}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="matchType" label="匹配来源" align='center' min-width="120">
                        <template slot-scope="scope">
                            <div v-if="scope.row.matchtype == 'EXACT'">精准</div>
                            <div v-else>广泛</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="关键词" align='center' min-width="260">
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.keyword}}
                            </div>
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
                            <span style=" display: block;height:34px; line-height: 34px;">{{scope.row.ttr | numTofixed}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="转化率" align='center' min-width="100" sortable='custom' prop="conversionRate">
                        <template slot-scope="scope">
                            <span>{{scope.row.conversionRate | numTofixed}}</span>
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

        <v-nokeyword :state='state' @callback='callback' v-if="negativeShow" :type='NoKeyWordType' :NoKeyWordList='NoKeyWordList'></v-nokeyword>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { datefn } from "@commonJS/dateList";
import { date, dateUtc } from "@commonJS/date";
import documentClick from "@commonJS/documentSettings";
import { excelCheckout } from "@commonJS/excelCheckout";
import KeySearch from "@components/AsmLaunch/Key-Search";
import AdvanSearch from "@components/AsmLaunch/Advanced-Search";
import NoKeyWord from '@components/AsmLaunch/removeKeyWord';//移动否定关键词 
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
                    label: "智能匹配"
                },
                {
                    value: 2,
                    label: "关键词"
                }
            ],
            unlimited: 0,
            valuedata: "", //搜索内容
            placevaluedata: "关键词搜索", //搜索提示
            caoShow: false,
            caoList: ["导出","添加至投放关键词","添加至否定关键词"], //"添加至投放关键词", "添加至否定关键词",
            dateTime: "",
            advanShow: false,
            searchType: "匹配来源", //高级搜索是否要国家
            tableData4: [],
            multipleSelection: [],
            indexMethod: 0,
            loading: false,
            pageIndex: 1,
            total: 0,
            negativeShow: false,
            advancedFunList: [], //高级搜索返回来的数据
            sortInfor: { prop: "localspendAmount", order: "descending" },
            sortObj: {
                prop: "localspendAmount",
                order: 1
            },
            isReomve: false,
            NoKeyWordType: '广告组',
            NoKeyWordList: []
        };
    },

    components: {
        "v-search": KeySearch,
        "v-advan-search": AdvanSearch, 
        "v-nokeyword": NoKeyWord
    },

    filters: {
        country: function(value) {
            return countryTwo(value);
        }
    },

    computed: {
        ...mapState({
            datelist: state => state.Date.DateRange
        })
    },

    created() {
        if (!this.$ss.get("TIME_UTC")) {
            this.dateTime = [datefn(3).beginTime, datefn(3).endTime];
            this.$ss.set("TIME_UTC", this.dateTime);
        } else {
            this.dateTime = this.$ss.get("TIME_UTC");
        }

        if(this.$route.params.groupType == 'remove') {
            this.unlimitedList = [{value:0 , label: '已移除'}]
        }
    },

    updated() {},

    mounted() {
        documentClick("account_search_cao", this, "caoShow");
    },

    destroyed() {},

    methods: {
        selectchange(index) {
            //筛选
            this.advancedFunList = [];
            this.$refs.multipleTable.clearSort();
            this.$refs.multipleTable.sort("localspendAmount", "descending");
        },
        changeInput() {
            //input搜索
            this.advancedFunList = [];
            this.$refs.multipleTable.clearSort();
            this.$refs.multipleTable.sort("localspendAmount", "descending");
        },

        changeDate() {
            //切换时间进行请求
            this.$ss.set("TIME_UTC", this.dateTime);
            this.advancedFunList = [];
            this.$refs.multipleTable.clearSort();
            this.$refs.multipleTable.sort("localspendAmount", "descending");
            this.AjaxStatisticCampaign();
        },

        advancedFun(data) {
            //高级搜索
            this.advancedFunList = data;
            this.$refs.multipleTable.clearSort();
            this.$refs.multipleTable.sort("localspendAmount", "descending");
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
        callback(value) { 
            this.$store.commit("SET_SHOW_TRUE", {
                value: "正在添加请等待",
                type: 3
            });
            if(this.state == '否定') {
                this.AjaxAddNegative({
                    objJson: JSON.stringify(value.data)
                });
            }else{ 
                this.AjaxSetType({
                    objJson: JSON.stringify(value.data)
                });
            } 
        },
        AjaxSetType(obj) {
            //Ajax编辑
            let url =
                "/api/v1/IntellAdvertiseApi/KeywordsSearch/CreateKeywordsRecords";
            this.$https.post(url, JSON.stringify(obj));
        },
        AjaxAddNegative(obj) { 
            let url =
                "/api/v1/IntellAdvertiseApi/KeywordsSearch/CreateNegativeTerm";
            this.$https.post(url, JSON.stringify(obj));
        },
        AjaxGetInfor() {
            this.loading = true;
            let obj3 = {};
            obj3[this.sortObj.prop] = this.sortObj.order;

            let url = "/api/v1/IntellAdvertiseApi/KeywordsSearch/SearchTerms";
            let Ajaxobj = {
                pageIndex: this.pageIndex,
                pageSize: 20,
                requestPar: {
                    keyword: this.valuedata,
                    authId: this.$route.params.orgId,
                    conditions: this.AjaxSetArgument(),
                    IsRemove: this.isReomve
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
        },
        AjaxSetArgument() {
            let obj = {};
            let obj2 = {};
            let obj3 = {};
            let arr = [];
            //status 1  equals 值 PAUSED/ENABLED
            //monitorcount 2 equals 1/0
            //statisdate 1 inrange 值 "2018-02-01","201802-02"
            if (this.$route.params.groupType == "remove") {
                this.isReomve = true;
                obj = null;
            } else {
                switch (this.unlimited) {
                    case 0:
                        obj = null;
                        break;
                    case 1:
                        obj = {
                            code: "SearchTermSource ",
                            operator: "equals",
                            valueType: 2,
                            values: [0]
                        };
                        break;
                    case 2:
                        obj = {
                            code: "SearchTermSource ",
                            operator: "equals",
                            valueType: 2,
                            values: [1]
                        };
                        break;
                }
            } 
            obj2 = {
                code: "statisdate",
                operator: "inrange",
                valueType: 1,
                values: [dateUtc(this.dateTime[0]), dateUtc(this.dateTime[1])]
            };
            arr.push(obj2);
            if (obj != null) {
                arr.push(obj);
            }
            arr.push(
                ...[
                    {
                        code: "ov.campaignid",
                        operator: "equals",
                        valueType: 3,
                        values: [this.$route.params.listId]
                    },
                    {
                        code: "ov.adgroupid",
                        operator: "equals",
                        valueType: 3,
                        values: [this.$route.params.keyId]
                    }
                ]
            );
            if (this.advancedFunList.length != 0) {
                arr.push(...this.advancedFunList);
            }
            return arr;
        },
        caoClick(index) {
            //操作按钮
            this.caoShow = false;
            let type = this.caoList[index];
            if (this.$route.params.groupType == "remove" && type != "导出") {
                this.caoShow = false;
                return false;
            }
            switch (type) {
                case "导出":
                    this.AjaxExcelOut();
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "正在导出",
                        type: 3
                    });
                    break;
            }
            if (type == "添加至否定关键词") {  
                if (this.multipleSelection.length == 0) {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "请选择关键词",
                        type: 3
                    });
                } else { 
                    this.state = '否定'
                    this.NoKeyWordList = this.IdStrPin().arr
                    if(this.NoKeyWordList.length == 0) {
                        this.$store.commit("SET_SHOW_TRUE", {
                            value: "所选搜索词全部为空",
                            type: 3
                        });
                        return false
                    }else{
                        this.negativeShow = true;
                    } 
                }
            }

            if (type == "添加至投放关键词") {
                if (this.multipleSelection.length == 0) {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "请选择关键词",
                        type: 3
                    });
                } else {
                    this.state = '非否定'
                    this.NoKeyWordList = this.IdStrPin().arr
                    if(this.NoKeyWordList.length == 0) {
                        this.$store.commit("SET_SHOW_TRUE", {
                            value: "所选搜索词全部为空",
                            type: 3
                        });
                        return false
                    }else{
                        this.negativeShow = true;
                    } 
                }
            }
        },
        AjaxExcelOut() {
            let obj3 = {};
            obj3[this.sortObj.prop] = this.sortObj.order;

            let url =
                "/api/v1/IntellAdvertiseApi/KeywordsSearch/ExportSearchTerm";
            let Ajaxobj = {
                pageIndex: 1,
                pageSize: 9,
                requestPar: {
                    keyword: this.valuedata,
                    authId: this.$route.params.orgId,
                    conditions: this.AjaxSetArgument(),
                    IsRemove: this.isReomve
                },
                orderByParDic: obj3
            };
            excelCheckout(url, Ajaxobj, 'SearchTerms列表');
        },
        handleSelectionChange(val) {
            //选中
            this.multipleSelection = val;
        },
        IdStrPin() {
            //拼接id
            let id = "";
            let arr = [];
            this.multipleSelection.map(ele => {
                id += ele.id + ",";
                if(ele.searchTermText != '') {
                    arr.push({ 
                        Name: ele.searchTermText, 
                    });
                } 
            });
            //arr = JSON.stringify(arr);
            id = id.substring(0, id.length - 1);
            return { id, arr };
        },
        toggleSelection() {
            //清楚选中
            this.$refs.multipleTable.clearSelection();
        }
    }
};
</script>