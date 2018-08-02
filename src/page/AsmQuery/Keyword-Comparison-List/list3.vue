<style lang='less' scoped>
@import url("../../../base/commonCSS/table.less");
.kcll2_index {
    width: 100%;
    .kcll2_table_box {
        width: 100%;
        display: flex;
    }
    .kcll2_table1 {
        width: 100%;
        box-shadow: 0 2px 2px @boxshado;
        .table_th_wei {
            th {
                font-size: 16px;
                color: @color;
            }
        }
    }
    .page_index {
        div {
            width: 100%;
            display: flex;
            justify-content: center !important;
        }
    }
    .table_data_tr {
        th,
        td {
            background: #fff !important;
            //height: 60px !important;
            padding: 9px 0;
            &.rou {
                color: @color;
                cursor: pointer;
            }
        }
        .table_tandb1 {
            span {
                &:first-child {
                    top: 23px !important;
                }
                &:last-child {
                    bottom: -19px !important;
                }
            }
        }
    }
    .kcll2_table_fu {
        width: 50%;
    }
    .excel_out {
        display: flex;
        justify-content: flex-end;
        .apl_checketout_one, .apl_checketout_two{
            margin-bottom: 25px;
            span {
                display: block;
                height: 32px;
                border: 1px solid #dee2e6;
                border-radius: 4px;
                line-height: 32px;
                padding: 0 12px; 
                cursor: pointer;
                &.checked {
                    background: #f7f7f7;
                    cursor: wait;
                }
            }
        }
    }
}
</style>
<template>
    <div class="kcll2_index">
        <div class="excel_out">
            <div class="apl_checketout_one">
                <span @click="excelOut(1)" :class="{checked: checkouting}">
                    <i class="iconfont icon-download"></i>{{checkouting ? '导出中' : '导出'}}
                </span>
            </div> 
        </div>
        <div class="kcll2_table_box">
            <div class="kcll2_table_fu">
                <table class="kcll2_table1">
                    <tr class="table_th_wei">
                        <th colspan="5">已选APP关键词(左)</th>
                    </tr>
                    <tr class="table_data_tr">
                        <td style="width: 9%">#</td>
                        <td style="width: 30%">关键词</td>
                        <td style="width: 28%" class="sl_table_po">
                            <div class="sl_table_flex">
                                <div>
                                    <p>搜索指数</p>
                                    <p>流行度</p>
                                </div>
                                <div class="table_tandb table_tandb1">
                                    <span @click="paiClick(0,'one')" :class="{bandb_one: showList[0].one}"></span>
                                    <span @click="paiClick(0,'two')" :class="{bandb_two: showList[0].two}"></span>
                                </div>
                            </div>
                        </td>
                        <td style="width: 18%">
                            <div class="sl_table_flex">
                                展示量占比
                                <!-- <div class="table_tandb">
                    <span @click="paiClick(1,'one')" :class="{bandb_one: showList[1].one}"></span>
                    <span @click="paiClick(1,'two')" :class="{bandb_two: showList[1].two}"></span>
                </div> -->
                            </div>
                            <td style="width: 14%">操作</td>
                    </tr>

                    <!-- 表格内容 -->
                    <tr class="table_data_tr" v-for="(ele,index) in tableInner1" :key="index" v-if="tableShow && userType">
                        <td>{{index | pageNum(currentPage3)}}</td>
                        <td class="rou">
                            <span>{{ele.keywordName}}</span>
                        </td>
                        <td>{{ele.searchIndex}}/{{ele.popularityIndex}}</td>
                        <td>{{ele.selectedAppRatio | percentage}}</td>
                        <td>
                            <div class="sl_t_dis" v-if="ele.hotKeywordTemStatus == 0">
                                <i class="iconfont icon-plus-add" @click="addCiClick1(index)"></i>
                                <span class="sl_t_is" style="width:114px;">
                                    添加至新建词组
                                </span>
                                <span class="sl_t_san"></span>
                            </div>
                            <div class="sl_t_dis" v-if="ele.hotKeywordTemStatus == 1">
                                <i class="iconfont icon-xuanze" style="color:#43c2ac;" @click="addCiClick1(index)"> </i>
                                <span class="sl_t_is" style="width:114px;">
                                    从新建词组删除
                                </span>
                                <span class="sl_t_san"></span>
                            </div>
                        </td>
                    </tr>
                    <!-- 暂无关键词 -->
                    <tr v-if="!tableShow">
                        <td colspan="5">该关键词暂无竞价数据</td>
                    </tr>
                    <!-- loading -->
                    <tr v-if="loadingfirst1 && userType">
                        <td colspan="7" style="height: 80px;">
                            <img src="../../../images/components/loading.gif" alt="">
                        </td>
                    </tr>
                </table>
                <!-- 分页 -->
                <div class="page_index" v-if="userType">
                    <div>
                        <el-pagination background @size-change="handleSizeChange3" @current-change="handleCurrentChange3" :current-page.sync="currentPage3" :page-size="20" layout="prev, pager, next, jumper" :total="total3">
                        </el-pagination>
                    </div>
                </div>
            </div>

            <div class="kcll2_table_fu">
                <table class="kcll2_table1">
                    <tr class="table_th_wei">
                        <th colspan="5">已选APP关键词(右)</th>
                    </tr>
                    <tr class="table_data_tr">
                        <td style="width: 9%">#</td>
                        <td style="width: 30%">关键词</td>
                        <td style="width: 28%" class="sl_table_po">
                            <div class="sl_table_flex">
                                <div>
                                    <p>搜索指数</p>
                                    <p>流行度</p>
                                </div>
                                <div class="table_tandb table_tandb1">
                                    <span @click="paiClick1(0,'one')" :class="{bandb_one: showList1[0].one}"></span>
                                    <span @click="paiClick1(0,'two')" :class="{bandb_two: showList1[0].two}"></span>
                                </div>
                            </div>
                        </td>
                        <td style="width: 18%">
                            <div class="sl_table_flex">
                                展示量占比
                                <!-- <div class="table_tandb">
                    <span @click="paiClick1(1,'one')" :class="{bandb_one: showList1[1].one}"></span>
                    <span @click="paiClick1(1,'two')" :class="{bandb_two: showList1[1].two}"></span>
                </div> -->
                            </div>
                            <td style="width: 14%">操作</td>
                    </tr>

                    <!-- 表格内容 -->
                    <tr class="table_data_tr" v-for="(ele,index) in tableInner2" :key="index" v-if="tableShow && userType">
                        <td>{{index | pageNum(currentPage4)}}</td>
                        <td class="rou">
                            <span>{{ele.keywordName}}</span>
                        </td>
                        <td>{{ele.searchIndex}}/{{ele.popularityIndex}}</td>
                        <td>{{ele.selectedAppRatio | percentage}}</td>
                        <td>
                            <div class="sl_t_dis" v-if="ele.hotKeywordTemStatus == 0">
                                <i class="iconfont icon-plus-add" @click="addCiClick2(index , ele.hotKeywordTemStatus , ele.keywordName)"></i>
                                <span class="sl_t_is" style="width:114px;">
                                    添加至新建词组
                                </span>
                                <span class="sl_t_san"></span>
                            </div>
                            <div class="sl_t_dis" v-if="ele.hotKeywordTemStatus == 1">
                                <i class="iconfont icon-xuanze" style="color:#43c2ac;" @click="addCiClick2(index , ele.hotKeywordTemStatus , ele.keywordName)"> </i>
                                <span class="sl_t_is" style="width:114px;">
                                    从新建词组删除
                                </span>
                                <span class="sl_t_san"></span>
                            </div>
                        </td>
                    </tr>
                    <!-- 暂无关键词 -->
                    <tr v-if="!tableShow">
                        <td colspan="5">该关键词暂无竞价数据</td>
                    </tr>
                    <!-- loading -->
                    <tr v-if="loadingfirst2 && userType">
                        <td colspan="7" style="height: 80px;">
                            <img src="../../../images/components/loading.gif" alt="">
                        </td>
                    </tr>
                </table>
                <!-- 分页 -->
                <div class="page_index" v-if="userType">
                    <div>
                        <el-pagination background @size-change="handleSizeChange4" @current-change="handleCurrentChange4" :current-page.sync="currentPage4" :page-size="20" layout="prev, pager, next, jumper" :total="total4">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { datefn } from "@commonJS/dateList";
import { AjaxRemove } from "@commonJS/ajaxServes";
import { excelCheckout } from "@commonJS/excelCheckout";
export default {
    data() {
        return {
            showList: [
                {
                    //控制排序的三角
                    one: true,
                    two: false
                },
                {
                    one: false,
                    two: false
                }
            ],
            showList1: [
                {
                    //控制排序的三角
                    one: true,
                    two: false
                },
                {
                    one: false,
                    two: false
                }
            ],
            tableInner1: [],
            tableInner2: [],
            currentPage3: 1, //当前页
            currentPage4: 1, //当前页
            total3: 0, //总数
            total4: 0, //总数
            tableShow: true,
            loadingfirst1: true,
            loadingfirst2: true,
            sortDate3: {
                //排序
                one: "searchIndex",
                two: 0
            },
            sortDate4: {
                //排序
                one: "searchIndex",
                two: 0
            },
            checkouting: false, 
        };
    },

    props: {
        userType: {},
        max: {},
        min: {}
    },

    watch: {
        max: function() {
            this.removeSort();
            this.Ajax();
        },
        min: function() {
            this.removeSort();
            this.Ajax();
        }
    },

    filters: {
        pageNum: function(value, currentPage3) {
            let num2 = currentPage3 - 1;
            let num = value + 1 + num2 * 20;
            return num;
        },
        percentage: function(value) {
            let num = (value * 100).toFixed(2);
            return num + "%";
        }
    },

    mounted() {
        this.Ajax();
    },

    methods: {
        removeSort() {
            this.showList.map(ele => {
                ele.one = false;
                ele.two = false;
            });
            this.showList[0].one = true;
            this.showList1.map(ele => {
                ele.one = false;
                ele.two = false;
            });
            this.showList1[0].one = true;
        },
        excelOut(num) {
            //表格导出
            if (!this.userType) {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "请先登录在操作",
                    type: 3
                });
                return false;
            }
            if (this.total3 == 0 || this.total4 == 0) {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "暂无数据，无法导出",
                    type: 3
                });
                return false;
            }
            if (this.checkouting) {
                return false;
            }
            this.checkouting = true;
            if (this.$parent.IsManager) {
                let num = this.total3 / 2000;
                let num1 = this.total4 / 2000;
                let ajaxarr = []
                for (var i = 0; i < num; i++) {
                    ajaxarr.push(excelCheckout(
                        this.ajaxEcecl().url,
                        this.ajaxEcecl(i + 1, 2000 , 'left').obj,
                        num < 1 ? '所有竞价词（' + this.$parent.dataLeft.appName +'）' : '所有竞价词（' + this.$parent.dataLeft.appName +'）' + "第" + (i + 1) + "页"
                    )) 
                }
                for (var i = 0; i < num1; i++) {
                    ajaxarr.push(excelCheckout(
                        this.ajaxEcecl().url,
                        this.ajaxEcecl(i + 1, 2000 , 'right').obj,
                        num1 < 1 ? '所有竞价词（' + this.$parent.dataRight.appName +'）' : '所有竞价词（' + this.$parent.dataRight.appName +'）' + "第" + (i + 1) + "页"
                    ))
                }
                Promise.all(ajaxarr).then((result) => {
                    this.checkouting = false 
                }).catch((error) => { 
                    this.checkouting = false 
                })
            } else {
                excelCheckout(
                    this.ajaxEcecl().url,
                    this.ajaxEcecl(1, 2000 , 'left').obj,
                    '所有竞价词（' + this.$parent.dataLeft.appName +'）'
                ).then(() => {
                    this.checkouting = false;
                });
                excelCheckout(
                    this.ajaxEcecl().url,
                    this.ajaxEcecl(1, 2000 , 'right').obj,
                    '所有竞价词（' + this.$parent.dataRight.appName +'）'
                ).then(() => {
                    this.checkouting = false;
                });
            }
        },
        ajaxEcecl(page, count , lorr) {
            let url =
                "/api/v1/IntellSearchApi/CompetitiveAppAnalysis/ExportCompetitiveAppAnalysis";
            var newobj = {};
            if (lorr == "left") {
                newobj[this.sortDate3.one] = this.sortDate3.two;
            } else if (lorr == "right") {
                newobj[this.sortDate4.one] = this.sortDate4.two;
            }
            let obj = { 
                pageSize: 20,
                requestPar: {
                    nationId: this.$parent.countryNow,
                    selectedAppId: this.$parent.idLeft,
                    competitiveAppId: this.$parent.idRight,
                    beginTime: datefn(4)[this.$parent.value1].data.beginTime,
                    endTime: datefn(4)[this.$parent.value1].data.endTime,
                    competitiveType: 1,
                    maxSearchIndex: this.$parent.max,
                    minSearchIndex: this.$parent.min,
                    orderType: lorr == "left" ? 1 : 2
                },
                orderByParDic: newobj
            };  
            if(lorr == 'left') {
                if (this.$parent.IsManager) {  
                    obj.pageIndex = 1
                }else{
                    obj.pageIndex = this.currentPage3
                } 
            }else{
                if (this.$parent.IsManager) {  
                    obj.pageIndex = 1
                }else{
                    obj.pageIndex = this.currentPage4
                } 
            }
            if (this.$parent.IsManager) {
                obj.exportPar = {
                    exportIndex: page,
                    exportCount: count
                }; 
            }
            if (this.$parent.max == "") {
                delete obj.requestPar.maxSearchIndex;
            }
            if (this.$parent.min == "") {
                delete obj.requestPar.minSearchIndex;
            }
            return { url, obj };
        },
        paiClick(num, name) {
            //排序的按钮
            this.showList.map((ele, index) => {
                ele.one = false;
                ele.two = false;
            });
            this.showList[num][name] = true;
            if (num == 0) {
                this.sortDate3 = {
                    one: "searchIndex",
                    two: name == "one" ? 0 : 1
                };
            } else if (num == 1) {
                this.sortDate3 = {
                    one: "selectedAppRatio",
                    two: name == "one" ? 0 : 1
                };
            }
            this.AjaxClass(this.currentPage3, "left");
        },

        paiClick1(num, name) {
            //排序的按钮
            this.showList1.map((ele, index) => {
                ele.one = false;
                ele.two = false;
            });
            this.showList1[num][name] = true;
            if (num == 0) {
                this.sortDate4 = {
                    one: "searchIndex",
                    two: name == "one" ? 0 : 1
                };
            } else if (num == 1) {
                this.sortDate4 = {
                    one: "selectedAppRatio",
                    two: name == "one" ? 0 : 1
                };
            }
            this.AjaxClass(this.currentPage4, "right");
        },

        //添加至收藏
        addCiClick1(index) {
            if (!this.userType) {
                this.$message({
                    message: "请先登录！",
                    type: "warning"
                });
                return false;
            }
            let obj = this.tableInner1[index] 
            if (this.tableInner1[index].hotKeywordTemStatus == 0) {
                this.tableInner1[index].hotKeywordTemStatus = 1;
                AjaxRemove(obj.keywordName, 0, obj.searchIndex, obj.popularityIndex, 0); //添加
            } else {
                this.tableInner1[index].hotKeywordTemStatus = 0;
                AjaxRemove(obj.keywordName, 1, obj.searchIndex, obj.popularityIndex, 0); //删除
            } 
        },

        addCiClick2(index) {
            if (!this.userType) {
                this.$message({
                    message: "请先登录！",
                    type: "warning"
                });
                return false;
            }
            let obj = this.tableInner2[index] 
            if (this.tableInner2[index].hotKeywordTemStatus == 0) {
                this.tableInner2[index].hotKeywordTemStatus = 1;
                AjaxRemove(obj.keywordName, 0, obj.searchIndex, obj.popularityIndex, 0); //添加
            } else {
                this.tableInner2[index].hotKeywordTemStatus = 0;
                AjaxRemove(obj.keywordName, 1, obj.searchIndex, obj.popularityIndex, 0); //删除
            }
        },

        handleSizeChange3(val) {
            this.AjaxClass(val, "left");
        },

        handleCurrentChange3(val) {
            this.AjaxClass(val, "left");
        },

        handleSizeChange4(val) {
            this.AjaxClass(val, "right");
        },

        handleCurrentChange4(val) {
            this.AjaxClass(val, "right");
        },

        Ajax() {
            this.AjaxClass(1, "left");
            this.AjaxClass(1, "right"); 
        },

        AjaxClass(pageIndex, lorr) {
            if (lorr == "left") {
                this.loadingfirst1 = true;
                this.tableInner1 = [];
            } else {
                this.loadingfirst2 = true;
                this.tableInner2 = [];
            }
            $(window).scrollTop($(".kcl_table_btn").offset().top);
            let url =
                "/api/v1/IntellSearchApi/CompetitiveAppAnalysis/GetCompetitiveAppAnalysisList";
            var newobj = {};
            if (lorr == "left") {
                newobj[this.sortDate3.one] = this.sortDate3.two;
            } else if (lorr == "right") {
                newobj[this.sortDate4.one] = this.sortDate4.two;
            }
            let obj = {
                pageIndex,
                pageSize: 20,
                requestPar: {
                    nationId: this.$parent.countryNow,
                    selectedAppId: this.$parent.idLeft,
                    competitiveAppId: this.$parent.idRight,
                    beginTime: datefn(4)[this.$parent.value1].data.beginTime,
                    endTime: datefn(4)[this.$parent.value1].data.endTime,
                    competitiveType: 1,
                    maxSearchIndex: this.$parent.max,
                    minSearchIndex: this.$parent.min,
                    orderType: lorr == "left" ? 1 : 2
                },
                orderByParDic: newobj
            };
            if (this.$parent.max == "") {
                delete obj.requestPar.maxSearchIndex;
            }
            if (this.$parent.min == "") {
                delete obj.requestPar.minSearchIndex;
            }

            this.$https.post(url, JSON.stringify(obj)).then(res => {
                if (lorr == "left") {
                    this.loadingfirst1 = false;
                    this.tableInner1 = res.data.data.list;
                    this.total3 = res.data.data.totalCount;
                } else if (lorr == "right") {
                    this.loadingfirst2 = false;
                    this.tableInner2 = res.data.data.list;
                    this.total4 = res.data.data.totalCount;
                }
            });
        }
    }
};
</script>