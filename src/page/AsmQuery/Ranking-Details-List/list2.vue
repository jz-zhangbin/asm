<style lang='less' scoped>
@import url("../../../base/commonCSS/table.less");
.rdlh_index {
    width: 100%;
    margin-top: 25px;
    .rdlh_checketout {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 25px;
        span {
            display: block;
            height: 32px;
            border: 1px solid #dee2e6;
            border-radius: 4px;
            line-height: 32px;
            padding: 0 12px;
            margin-left: 16px;
            cursor: pointer;
            &.checked {
                background: #f7f7f7;
                cursor: wait;
            }
        }
    }
    .rdlh_table {
        width: 100%;
        table {
            width: 100%;
            border: 1px solid #dee2e6;
            box-shadow: 0 2px 2px @boxshado;
        }
    }
}
</style>
<template>
    <div class="rdlh_index">
        <div class="rdlh_checketout">
            <span :class="{checked: checkouting}" @click="excelOut">
                <i class="iconfont icon-download"></i>
                {{checkouting ? '导出中' : '导出'}}
            </span>
        </div>
        <div class="rdlh_table">
            <table id="table1">
                <tr>
                    <th style="width: 40%">关键词</th>
                    <th style="width: 8%" class="sl_table_po">
                        <div class="sl_table_flex">
                            流行度
                            <div class="sl_t_dis">
                                <i class="iconfont icon-wenhao-fill"> </i>
                                <span class="sl_t_is" style="width:280px;">流行度来源于App Store官方数据。该指数代表此关键词在App Store中的搜索流行度，数值最高为100。</span>
                                <span class="sl_t_san"></span>
                            </div>
                        </div>
                    </th>
                    <th style="width: 22%" class="sl_table_po">
                        <div class="sl_table_flex">
                            搜索指数
                            <div class="sl_t_dis">
                                <i class="iconfont icon-wenhao-fill"> </i>
                                <span class="sl_t_is" style="width:280px;">搜索指数来源于App Store官方数据。该指数代表此关键词在App Store中的搜索热度。一般来说，指数越高，则该词在每天被搜索的次数也越多。</span>
                                <span class="sl_t_san"></span>
                            </div>
                        </div>
                    </th>
                    <th style="width: 22%" class="sl_table_po">
                        <div class="sl_table_flex">
                            近期竞价APP
                            <div class="sl_t_dis">
                                <i class="iconfont icon-wenhao-fill"> </i>
                                <span class="sl_t_is" style="width:280px;">近7天竞价过该关键词APP数量</span>
                                <span class="sl_t_san"></span>
                            </div>
                        </div>
                    </th>
                    <th style="width: 8%" class="sl_table_po">
                        操作
                    </th>
                </tr>
                <tr v-for="(ele,index) in tableMoreData" :key="index" class="table_td_cont" v-if="tableMoreCode.resultCode==1000">
                    <td style="width: 40%" class="sl_dt_name" @click="routerClick(ele.keywordName)">{{ele.keywordName}}</td>
                    <td style="width: 8%">{{ele.popularityIndex}}</td>
                    <td style="width: 22%">{{ele.searchIndex}}</td>
                    <td style="width: 22%" class="sl_dt_img">
                        <div>
                            <!-- 最多显示四个 -->
                            <img :src="item.appImgUrl" alt="" v-for="(item,index2) in ele.hotKeywordAppList" :key="index2" v-if="index2<4" @click="imgRouterClick(item.appStoreId)">
                            <span v-if="ele.appLength>4" @click="routerClick(ele.keywordName)">{{ele.appLength}}
                                <i class="iconfont icon-gengduo"></i>
                            </span>
                        </div>
                    </td>
                    <td style="width: 8%">
                        <div class="sl_t_dis" v-if="ele.hotKeywordTemStatus == 0">
                            <i class="iconfont icon-plus-add" @click="addCiClick(index)"></i>
                            <span class="sl_t_is" style="width:114px;"> 添加至新建词组</span>
                            <span class="sl_t_san"></span>
                        </div>
                        <div class="sl_t_dis" v-if="ele.hotKeywordTemStatus == 1">
                            <i class="iconfont icon-xuanze" style="color:#43c2ac;" @click="addCiClick(index)"> </i>
                            <span class="sl_t_is" style="width:114px;">从新建词组删除</span>
                            <span class="sl_t_san"></span>
                        </div>
                    </td>
                </tr>
                <!-- 当列表未空时 -->
                <tr v-if="tableMoreCode.resultCode==404">
                    <td colspan="5" style="height: 150px">暂无更多关联词</td>
                </tr>
                <!-- loading -->
                <tr v-if="loadingfirst2">
                    <td colspan="6" style="height: 80px;">
                        <img src="../../../images/components/loading.gif" alt="">
                    </td>
                </tr>
            </table>
            <!-- 分页 -->
            <div class="page_index" v-if="userType && tableMoreCode.data">
                <div>{{pagedata}}</div>
                <div>
                    <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="20" layout="prev, pager, next, jumper" :total="tableMoreCode.data.totalCount">
                    </el-pagination>
                </div>
            </div>
            <usersign v-if="!userType"></usersign>
        </div>
    </div>
</template>

<script> 
import { datefn } from "@commonJS/dateList"; 
import { AjaxRemove } from "@commonJS/ajaxServes";
import { excelCheckout } from "@commonJS/excelCheckout";
import usersign from "@components/AsmQuery/User-Sign";
export default {
    data() {
        return {
            currentPage3: 1 //当前页
        };
    },

    components: {
        usersign
    },
    props: {
        valueData: {},
        userType: {},
        tableMoreData: {},
        tableMoreCode: {
            type: Object,
            default: {
                data: {
                    totalCount: 0
                }
            }
        },
        loadingfirst2: {},
        checkouting: false
    },

    computed: {
        pagedata() {
            if (this.currentPage3 * 20 <= this.tableMoreCode.data.totalCount) {
                let ls =
                    "当前第 " +
                    ((this.currentPage3 - 1) * 20 + 1) +
                    "-" +
                    this.currentPage3 * 20 +
                    ", 共 " +
                    this.tableMoreCode.data.totalCount;
                return ls;
            } else {
                let ls =
                    "当前第 " +
                    ((this.currentPage3 - 1) * 20 + 1) +
                    "-" +
                    this.tableMoreCode.data.totalCount +
                    ", 共" +
                    this.tableMoreCode.data.totalCount;
                return ls;
            }
        }
    },

    methods: {
        imgRouterClick(id) {
            //图片应用跳转
            this.$router.push({
                path: "/application",
                query: {
                    id,
                    country: this.$parent.countryNow
                }
            });
        },

        addCiClick(index) {
            //收藏操作
            if (!this.userType) {
                this.$message({
                    message: "请先登录！",
                    type: "warning"
                });
                return false;
            }
            let obj = this.tableMoreData[index] 
            if (this.tableMoreData[index].hotKeywordTemStatus == 0) {
                this.tableMoreData[index].hotKeywordTemStatus = 1;
                AjaxRemove(obj.keywordName, 0, obj.searchIndex, obj.popularityIndex, obj.appLength); //添加
            } else {
                this.tableMoreData[index].hotKeywordTemStatus = 0;
                AjaxRemove(obj.keywordName, 1, obj.searchIndex, obj.popularityIndex, obj.appLength); //删除
            } 
        },

        excelOut() {
            //表格导出
            if (!this.userType) {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "请先登录在操作",
                    type: 3
                });
                return false;
            }
            if (this.tableMoreCode.data.totalCount == 0) {
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
                let num = this.tableMoreCode.data.totalCount / 2000; 
                let ajaxarr = []
                for (var i = 0; i < num; i++) { 
                    ajaxarr.push(
                        excelCheckout(
                            this.ajaxEcecl().url,
                            this.ajaxEcecl(i + 1, 2000).obj,
                            num < 1
                                ? '更多关联词（' + this.$route.query.key + '）'
                                : '更多关联词（' + this.$route.query.key + '）' + "第" + (i + 1) + "页"
                        ) 
                    )
                } 
                Promise.all(ajaxarr).then((result) => {
                    this.checkouting = false 
                }).catch((error) => { 
                    this.checkouting = false 
                }) 
            } else {
                excelCheckout(
                    this.ajaxEcecl().url,
                    this.ajaxEcecl(1, 20).obj,
                    '更多关联词（' + this.$route.query.key + '）'
                ).then(() => {
                    this.checkouting = false;
                });
            }
        },
        ajaxEcecl(page, count) {
            let url =
                "/api/v1/IntellSearchApi/KeywordDetail/ExportAssociatedWords";
            let obj = {
                pageIndex: this.$parent.IsManager ? 1 : this.currentPage3,
                pageSize: 20,
                requestPar: {
                    nationId: this.$parent.countryNow,
                    keywordName: this.$route.query.key,
                    beginTime: datefn(0).beginTime,
                    endTime: datefn(0).endTime
                }
            };
            if (this.$parent.IsManager) {
                obj.exportPar = {
                    exportIndex: page,
                    exportCount: count
                };
            }
            return { url, obj };
        },
        routerClick(id) {
            //点击跳转，回到顶部，切换回历史列表
            this.$router.push({
                path: "/rankingDetails-List",
                query: {
                    key: id,
                    country: this.$parent.countryNow
                }
            });
            $(window).scrollTop(0);
            this.$parent.components_index = 0;
            this.$parent.currentView = this.$parent.components_list[0].com;
        },

        handleSizeChange(val) {
            this.$emit("pageMoreDate", val);
            $(window).scrollTop($("#table1").offset().top);
        },

        handleCurrentChange(val) {
            this.$emit("pageMoreDate", val);
            $(window).scrollTop($("#table1").offset().top);
        }
    }
};
</script>