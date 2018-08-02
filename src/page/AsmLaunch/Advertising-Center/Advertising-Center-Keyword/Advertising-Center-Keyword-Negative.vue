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
                </section>
                <section>
                    <div class="account_search_cao" @click="caoShow = !caoShow">
                        操作：
                        <i class="iconfont icon-xia"></i>
                        <transition name="el-zoom-in-top">
                            <section v-show="caoShow" @mouseout="caoShow = false" @mousemove="caoShow = true">
                                <span :class="{stop: $route.params.groupType == 'remove'}" v-for="(ele,index) in caoList" :key="index" @click="caoClick(index)">{{ele}}</span>
                            </section>
                        </transition>
                    </div>
                </section>
                <div :class="{add_negative: classBool , stop: $route.params.groupType == 'remove'}" @click="addNegative">
                    添加否定关键词
                </div>
            </div>

            <!-- 表格 -->
            <div class="account_table">
                <el-table ref="multipleTable" :data="tableData4" style="width: 100%" highlight-current-row border @selection-change="handleSelectionChange" v-loading="loading">
                    <el-table-column type="selection" fixed align='center' width="55">
                    </el-table-column>
                    <el-table-column fixed align='center' label="关键词" min-width="300">
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.text}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="adGroupId" label="类型" align='center' min-width="120">
                        <template slot-scope="scope">
                            <div>
                                {{scope.row.adGroupId == 0 ? '广告系列' : '广告组'}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="groupName" label="广告组名称" align='center' min-width="300">
                    </el-table-column>
                    <el-table-column prop="adGroupId" label="广告组ID" align='center' min-width="120">
                    </el-table-column>
                    <el-table-column prop="matchType" label="匹配类型" align='center' min-width="120">
                        <template slot-scope="scope">
                            <div v-if="scope.row.matchType == 'EXACT'">精准</div>
                            <div v-else>广泛</div>
                        </template>
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" align="center" min-width="70">
                        <template slot-scope="scope">
                            <el-button :class="{stop : $route.params.groupType == 'remove'}" @click.native.prevent="deleteRow(scope.$index,scope.row)" type="text" size="small">
                                删除
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

        <!-- 添加否定关键词 -->
        <v-negative v-if="NegativeShow" :type="setType" @callback='callback'></v-negative>
    </div>
</template>

<script>
import KeySearch from "@components/AsmLaunch/Key-Search";
import { datefn } from "@commonJS/dateList";
import Budget from "@components/AsmLaunch/Budget-Editor-Key";
import Negative from "@components/AsmLaunch/Advanced-Negative";
import documentClick from "@commonJS/documentSettings";
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
                    label: "广泛匹配"
                },
                {
                    value: 2,
                    label: "精准匹配"
                }
            ],
            unlimited: 0,
            valuedata: "", //搜索内容
            placevaluedata: "关键词搜索", //搜索提示
            caoShow: false,
            caoList: ["删除", "删除所有"],
            tableData4: [],
            multipleSelection: [],
            indexMethod: 0,
            loading: false,
            pageIndex: 1,
            total: 0,
            NegativeShow: false,
            setType: "广告组",
            idAll: "",
            isRemove: false,
            classBool: true
        };
    },

    components: {
        "v-search": KeySearch,
        "v-negative": Negative
    },

    computed: {},

    created() {
        if(this.$route.params.groupType == 'remove') {
            this.unlimitedList = [{value:0 , label: '已移除'}]
        }
    },

    updated() {},

    mounted() {
        documentClick("account_search_cao", this, "caoShow");
        this.AjaxGetInfor();
    },

    destroyed() {},

    methods: {
        selectchange(index) {
            //筛选
            this.$refs.multipleTable.clearSort();
            this.AjaxGetInfor();
        },
        changeInput() {
            //input搜索
            this.$refs.multipleTable.clearSort();
            this.AjaxGetInfor();
        },
        handleCurrentChange(val) {
            this.pageIndex = val * 1;
            this.AjaxGetInfor();
        },
        callback(value) {
            if (value.type == "添加") {
                this.AjaxAddNegative({
                    objJson: JSON.stringify(value.data)
                });
            } else {
                this.AjaxUpNegative(value.data);
            }
        },
        AjaxGetInfor() {
            this.loading = true;

            let url =
                "/api/v1/IntellAdvertiseApi/KeywordsSearch/SearchNegative";
            let Ajaxobj = {
                pageIndex: this.pageIndex,
                pageSize: 20,
                requestPar: {
                    keyword: this.valuedata,
                    authId: this.$route.params.orgId,
                    conditions: this.AjaxSetArgument(),
                    IsRemove: this.isRemove
                }
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

            let url1 =
                "/api/v1/IntellAdvertiseApi/KeywordsSearch/GetAllNegativeIdStrs";
            let Ajaxobj1 = {
                pageIndex: 1,
                pageSize: 9,
                requestPar: {
                    keyword: this.valuedata,
                    authId: this.$route.params.orgId,
                    conditions: this.AjaxSetArgument(),
                    IsRemove: this.isRemove
                }
            };

            this.$https.post(url1, JSON.stringify(Ajaxobj1)).then(res => {
                if (res.data.resultCode == 1000) {
                    this.idAll = JSON.parse(res.data.data.objJson);
                }
            });
        },
        AjaxSetArgument() {
            let obj = {};
            let arr = [];
            //status 1  equals 值 PAUSED/ENABLED
            //monitorcount 2 equals 1/0
            //statisdate 1 inrange 值 "2018-02-01","201802-02"
            if (this.$route.params.groupType == "remove") {
                this.isRemove = true;
                obj = null;
            } else {
                switch (this.unlimited) {
                    case 0:
                        obj = null;
                        break;
                    case 1:
                        obj = {
                            code: "MatchType ",
                            operator: "equals",
                            valueType: 1,
                            values: ["BROAD"]
                        };
                        break;
                    case 2:
                        obj = {
                            code: "MatchType ",
                            operator: "equals",
                            valueType: 1,
                            values: ["EXACT"]
                        };
                        break;
                }
            }
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
            return arr;
        },
        caoClick(index) {
            //操作按钮
            this.caoShow = false;
            if (this.$route.params.groupType == "remove") {
                this.caoShow = false;
                return false;
            }
            let type = this.caoList[index];
            let _this = this;
            if (this.tableData4.length == 0) {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "无数据无法操作",
                    type: 3
                });
                return false;
            }
            if (type == "删除") {
                if (this.multipleSelection.length == 0) {
                    _this.$store.commit("SET_SHOW_TRUE", {
                        value: "请选择关键词",
                        type: 3
                    });
                } else {
                    this.$confirm("是否删除所选关键词？", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        center: true
                    })
                        .then(() => {
                            let arr = [];
                            this.multipleSelection.map(ele => {
                                arr.push({
                                    Id: ele.id,
                                    Text: ele.text,
                                    CampaignId: ele.CampaignId,
                                    AdGroupId: ele.AdGroupId
                                });
                            });
                            this.AjaxRemoveNegative(arr);
                            _this.$store.commit("SET_SHOW_TRUE", {
                                value: "正在删除请等待",
                                type: 3
                            });
                            _this.toggleSelection();
                        })
                        .catch(() => {});
                }
            }

            if (type == "删除所有") {
                this.$confirm("是否删除所有关键词？", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    center: true
                })
                    .then(() => {
                        _this.AjaxRemoveNegative(this.idAll);
                        _this.$store.commit("SET_SHOW_TRUE", {
                            value: "正在删除请等待",
                            type: 3
                        });
                        _this.toggleSelection();
                    })
                    .catch(() => {});
            }
        },

        deleteRow(index, rows) {
            if (this.$route.params.groupType == "remove") {
                return false;
            }
            let _this = this;
            let obj = [
                {
                    Id: rows.id,
                    Text: rows.text,
                    CampaignId: rows.campaignId,
                    AdGroupId: rows.adGroupId
                }
            ];
            this.$confirm("是删除所选关键词？", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                center: true
            })
                .then(() => {
                    _this.AjaxRemoveNegative(obj);
                    _this.$store.commit("SET_SHOW_TRUE", {
                        value: "正在删除请等待",
                        type: 3
                    });
                })
                .catch(() => {});
        },
        AjaxAddNegative(obj) {
            this.$store.commit("SET_SHOW_TRUE", {
                value: "正在添加请等待",
                type: 3
            });
            let url =
                "/api/v1/IntellAdvertiseApi/KeywordsSearch/CreateNegativeTerm";
            this.$https.post(url, JSON.stringify(obj)).then(res => {
                if (res.data.resultCode == 1000) {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "上传成功",
                        type: 3
                    });
                } else {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "上传失败",
                        type: 3
                    });
                }
            });
        },
        AjaxUpNegative(obj) {
            this.$store.commit("SET_SHOW_TRUE", {
                value: "正在上传请等待",
                type: 3
            });
            let url =
                "/api/v1/IntellAdvertiseApi/KeywordsSearch/UploadNKeywords";
            var zipFormData = new FormData();
            obj.filelist.map((ele, index) => {
                zipFormData.append(index, ele);
            });
            zipFormData.append("CampaignId", obj.campaignid);
            if (obj.AdgroupId) {
                zipFormData.append("AdgroupId", obj.AdgroupId);
            }
            //zipFormData.append("GroupId", this.$route.params.id);
            let config = { headers: { "Content-Type": "multipart/form-data" } };
            this.$https.post(url, zipFormData).then(res => {
                if (res.data.resultCode == 1000) {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "上传成功",
                        type: 3
                    });
                } else {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "上传失败",
                        type: 3
                    });
                }
            });
        },
        AjaxRemoveNegative(obj) {
            let url = "/api/v1/IntellAdvertiseApi/KeywordsSearch";
            this.$https.post(url, JSON.stringify(obj)).then(res => {
                this.AjaxGetInfor();
            });
        },
        handleSelectionChange(val) {
            //选中
            this.multipleSelection = val;
        },
        toggleSelection() {
            //清楚选中
            this.$refs.multipleTable.clearSelection();
        },
        addNegative() {
            //添加否定关键词
            if(this.$route.params.groupType == 'remove') {
                return false
            }
            this.NegativeShow = true;
        }
    }
};
</script>