<style lang='less' scoped>
@import url("../../../base/commonCSS/table.less");
.rl_index {
    box-sizing: border-box;
    padding: 60px 0 20px;
    .sl_center {
        min-width: 1200px;
        padding: 36px 45px 0 45px;
        height: 96px;
        box-sizing: border-box;
        position: relative;
        display: flex;
        .sl_center_p,
        .sl_center_p2 {
            margin-right: 11px;
            line-height: 34px;
        }
        .sl_center_p2 {
            margin-left: 34px;
        }
        .sl_center_btn {
            width: 60px;
            height: 34px;
            background: @color;
            color: #fff;
            border-radius: 4px;
            line-height: 34px;
            text-align: center;
        }
        .sl_checkeout {
            display: block;
            height: 32px;
            border: 1px solid @border;
            border-radius: 4px;
            line-height: 32px;
            padding: 0 12px;
            margin-left: 16px;
            cursor: pointer;
            position: absolute;
            right: 46px;
            cursor: pointer;
            top: 35px;
            &.checked {
                background: #f7f7f7;
                cursor: wait;
            }
        }
    }
    .sl_loading {
        min-width: 1200px;
        margin: 25px auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
            margin-top: 14px;
        }
    }
    .sl_table {
        min-width: 1200px;
        padding: 0 45px;
        box-sizing: border-box;
        min-height: 100px;
        table {
            box-shadow: 0 2px 2px @boxshado;
        }
    }
    .sl_from_top {
        position: fixed;
        display: none;
        bottom: 100px;
        right: 50px;
        width: 34px;
        height: 34px;
        background: @border;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        i {
            font-size: 20px;
        }
        &:hover {
            background: @color;
            i {
                color: #fff;
            }
        }
    }
    .page_index {
        min-width: 1200px;
        margin: 25px 45px 0;
    }
}
</style>
<style lang="less">
.rl_index {
    .el-select {
        width: 114px;
        height: 34px;
    }
    .el-input,
    .el-input--suffix,
    .el-input__inner {
        height: 34px;
    }
    .el-input__icon {
        line-height: 34px !important;
    }
}
</style>

<template>
    <div class="rl_index">
        <v-search-top></v-search-top>
        <!-- 粒子效果图 -->
        <banner :bannerName='bannerName'></banner>
        <div class="sl_main">
            <div class="sl_center">
                <p class="sl_center_p">地区</p>
                <el-select v-model="countryNow" placeholder="请选择" @change="changeFun(countryNow)">
                    <el-option v-for="item in countryList" :key="item.nationId" :label="item.nationCHSName" :value="item.nationId">
                    </el-option>
                </el-select>
                <!-- <p class="sl_center_p2">类别</p>
                <div class="sl_center_btn">总榜</div> -->
                <span :class="{sl_checkeout: ls, checked: checkouting}" @click="excelOut">
                    <i class="iconfont icon-download"></i>
                    {{checkouting ? '导出中' : '导出'}}
                </span>
            </div>
            <!-- 表格数据 -->
            <div class="sl_table">
                <table id="ta">
                    <tr>
                        <th style="width: 8%" class="sl_table_po"> # </th>
                        <th style="width: 32%">关键词</th>
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
                        <th style="width: 8%" class="sl_table_po">操作</th>
                    </tr>
                    <tr v-for="(ele,index) in tableData" :key="index" class="table_td_cont">
                        <td style="width: 8%">{{index + 1 + (currentPage3-1) * 50}}</td>
                        <td style="width: 32%" class="sl_dt_name a_router" @click="routerLickClick(ele.keywordName)">{{ele.keywordName}}</td>
                        <td style="width: 8%">{{ele.popularityIndex}}</td>
                        <td style="width: 22%">{{ele.searchIndex}}</td>
                        <td style="width: 22%" class="sl_dt_img">
                            <div>
                                <!-- 最多显示四个 -->
                                <img alt="" v-for="(item,index2) in ele.hotKeywordAppList" :key="index2" :src="item.appImgUrl" @click="imgRouterClick(item.appStoreId)">
                                <span v-if="ele.appLength>4" @click="routerLickClick(ele.keywordName)">{{ele.appLength}}
                                    <i class="iconfont icon-gengduo"></i>
                                </span>
                            </div>
                        </td>
                        <td style="width: 8%">
                            <div class="sl_t_dis" v-if="ele.hotKeywordTemStatus == 0">
                                <i class="iconfont icon-plus-add" @click="addCiClick(index)"></i>
                                <span class="sl_t_is" style="width:114px;">添加至新建词组</span>
                                <span class="sl_t_san"></span>
                            </div>
                            <div class="sl_t_dis" v-if="ele.hotKeywordTemStatus == 1">
                                <i class="iconfont icon-xuanze" style="color:#43c2ac;" @click="addCiClick(index)"></i>
                                <span class="sl_t_is" style="width:114px;">从新建词组删除</span>
                                <span class="sl_t_san"></span>
                            </div>
                        </td>
                    </tr>

                    <!-- loading -->
                    <tr v-if="loadingfirst">
                        <td colspan="6" style="height: 80px;">
                            <img src="../../../images/components/loading.gif" alt="">
                        </td>
                    </tr>
                </table>
            </div>
            <!-- 分页 -->
            <div class="page_index">
                <div>{{pagedata}}</div>
                <div>
                    <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="50" layout="prev, pager, next, jumper" :total="2000">
                    </el-pagination>
                </div>
            </div>
            <div class="sl_from_top" @click="fromTop">
                <i class="iconfont icon-ico-top1"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import banner from "@components/AsmQuery/Banner";
import { AjaxRemove } from "@commonJS/ajaxServes";
import usersign from "@components/AsmQuery/User-Sign";
import { excelCheckout } from "@commonJS/excelCheckout";
export default {
    data() {
        return {
            bannerName: "竞价热词榜",
            countryNow: "", //选中的国家
            tableData: [], //表格数据
            loadingfirst: true,
            loading: null,
            currentPage3: 1,
            loadingopaction: {
                lock: true,
                text: "加载中",
                spinner: "el-icon-loading",
                background: "rgba(0, 0, 0, 0.7)"
            },
            zong: 0,
            ls: true,
            checkouting: false
        };
    },

    components: {
        usersign,
        banner
    },

    computed: {
        ...mapState({
            countryList: state => state.Home.countryList,
            userType: state => state.Sign.userType,
            IsManager: state => state.Sign.IsManager
        }),
        pagedata() {
            if (this.currentPage3 * 50 <= 2000) {
                let ls =
                    "当前第 " +
                    ((this.currentPage3 - 1) * 50 + 1) +
                    "-" +
                    this.currentPage3 * 50 +
                    ", 共 " +
                    2000;
                return ls;
            } else {
                let ls =
                    "当前第 " +
                    ((this.currentPage3 - 1) * 50 + 1) +
                    "-" +
                    2000 +
                    ", 共" +
                    2000;
                return ls;
            }
        }
    },

    created() {
        this.$store.dispatch("GET_COUNTRYLIST").then(() => {
            this.countryNow = this.$store.state.Home.countryList[0].nationId;

            this.AjaxInit(this.countryNow);
        });
    },

    updated() {},

    mounted() {
        let _this = this;
        // 滚动事件
        $(window).scroll(function() {
            var scrollTop = $(this).scrollTop();
            if (scrollTop >= 500) {
                $(".sl_from_top").css("display", "flex");
            } else {
                $(".sl_from_top").css("display", "none");
            }
        });
    },

    destroyed() {},

    methods: {
        routerLickClick(id) {
            //路由跳转
            this.$router.push({
                path: "/rankingDetails-List",
                query: {
                    key: id,
                    country: this.countryNow
                }
            });
        },
        imgRouterClick(id) {
            //图片应用跳转
            this.$router.push({
                path: "/application",
                query: {
                    id,
                    country: this.countryNow
                }
            });
        },

        fromTop() {
            //回到顶部
            $("html,body").animate(
                {
                    scrollTop: 0
                },
                800
            );
        },

        addCiClick(index) {
            //操作关键词
            if (!this.userType) {
                this.$message({
                    message: "请先登录！",
                    type: "warning"
                });
                return false;
            }
            let obj = this.tableData[index] 
            if (this.tableData[index].hotKeywordTemStatus == 0) {
                this.tableData[index].hotKeywordTemStatus = 1;
                AjaxRemove(obj.keywordName, 0, obj.searchIndex, obj.popularityIndex, obj.appLength); //添加
            } else {
                this.tableData[index].hotKeywordTemStatus = 0;
                AjaxRemove(obj.keywordName, 1, obj.searchIndex, obj.popularityIndex, obj.appLength); //删除
            }
        },

        changeFun(countryNow) {
            this.tableData = [];
            this.currentPage3 = 1;
            this.AjaxInit(countryNow);
        },

        excelOut() {
            //导出
            if (!this.userType) {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "请先登录在操作",
                    type: 3
                });
                return false;
            }
            if (this.checkouting) {
                return false;
            }
            this.checkouting = true;
            let url = "/api/v1/IntellSearchApi/HotKeyword/ExportHotKeywords";
            let obj = {
                pageIndex: this.IsManager ? 1 : this.currentPage3,
                pageSize: 50,
                requestPar: {
                    nationId: this.countryNow
                }
            };
            if (this.IsManager) {
                obj.exportPar = {
                    exportIndex: 1,
                    exportCount: 2000
                };
            }
            excelCheckout(url, obj, "竞价词榜").then(() => {
                this.checkouting = false;
            });
        },

        AjaxInit(id, pageindex) {
            this.tableData = [];
            this.loadingfirst = true;
            //初始化列表ajax
            let url = "/api/v1/IntellSearchApi/HotKeyword/GetHotKeywordList";
            let data = {
                pageIndex: this.currentPage3,
                pageSize: 50,
                requestPar: {
                    nationId: id
                }
            };
            let data1 = JSON.stringify(data);
            this.$https.post(url, data1).then(res => {
                this.loadingfirst = false;
                if (res.data.resultCode == 1000) {
                    this.tableData = res.data.data;
                } else {
                    this.tableData = [];
                }
            });
        },

        handleSizeChange(val) {
            this.currentPage3 = val * 1;
            this.AjaxInit(this.countryNow);
        },

        handleCurrentChange(val) {
            this.currentPage3 = val * 1;
            this.AjaxInit(this.countryNow);
        }
    }
};
</script>