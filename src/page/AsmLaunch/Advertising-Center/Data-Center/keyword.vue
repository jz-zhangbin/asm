<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.group_index {
    width: 100%;
    margin-top: 20px;
    position: relative;
    .content_page {
        margin-top: 40px;
        display: flex;
        justify-content: center;
    }
    .cao_div{
        position: absolute;
        right: -20px;
        top: -50px;
    }
    .account_search_cao {
        cursor: pointer;
        display: flex;
        position: relative;
        margin-right: 30px;
        align-items: center;
        i { 
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
    .torouter {
        color: @color;
        cursor: pointer;
        &:hover{text-decoration:underline;color: @color;}
    }
}
</style>
<style lang='less'>
.group_index {
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
    <div class="group_index">
        <div class="account_table">
            <div class="cao_div">
                <div class="account_search_cao" @click="caoShow = !caoShow">
                    操作：
                    <i class="iconfont icon-xia"></i>
                    <transition name="el-zoom-in-top">
                        <section v-show="caoShow" @mouseout="caoShow = false" @mousemove="caoShow = true">
                            <span :class="{stop: unlimited == 5 && index != 4}" v-for="(ele,index) in caoList" :key="index" @click="caoClick(index)">{{ele}}</span>
                        </section>
                    </transition>
                </div>
            </div>
            <el-table ref="multipleTable" :data="tablekeyWord" style="width: 100%" highlight-current-row border @selection-change="handleSelectionChange" @sort-change='sortchange' v-loading="loadingkeyWord" :default-sort="sortInfor">
                <el-table-column fixed align='center' label="关键词" min-width="240" prop='keywordsText'>
                </el-table-column>
                <el-table-column  align='center' label="所属广告组" min-width="240" prop="adgroupName">
                    <template slot-scope="scope">
                        <div class="torouter" @click="togroup(scope.row)">{{scope.row.adgroupName}}</div>
                    </template>
                </el-table-column>
                <el-table-column align='center' label="所属广告系列" min-width="220">
                    <template slot-scope="scope">
                        <div class="torouter" @click="tolist(scope.row)">{{scope.row.campaignName}}</div>
                    </template>
                </el-table-column>
                <el-table-column  align='center' label="国家" min-width="120">
                    <template slot-scope="scope">
                        {{scope.row.storeFront | countryset}}
                    </template>
                </el-table-column>
                <el-table-column align='center' sortable='custom' label="花费" min-width="100" prop='localSpend'>
                    <template slot-scope="scope">
                        <span>{{scope.row.localSpend | numTo$}}</span>
                    </template>
                </el-table-column>
                <el-table-column align='center' sortable='custom' label="平均CPA" min-width="110" prop='avgCPA'>
                    <template slot-scope="scope">
                        <span>{{scope.row.avgCPA | numTo$}}</span>
                    </template>
                </el-table-column>
                <el-table-column align='center' sortable='custom' label="平均CPC" min-width="110" props='avgCPC'>
                    <template slot-scope="scope">
                        <span>{{scope.row.avgCPC | numTo$}}</span>
                    </template>
                </el-table-column>
                <el-table-column align='center' sortable='custom' label="曝光数" min-width="100" prop='impressions'>
                    <template slot-scope="scope">
                        <span>{{scope.row.impressions}}</span>
                    </template>
                </el-table-column>
                <el-table-column align='center' sortable='custom' label="点击数" min-width="100" prop='taps'>
                    <template slot-scope="scope">
                        <span>{{scope.row.taps}}</span>
                    </template>
                </el-table-column>
                <el-table-column align='center' sortable='custom' label="下载数" min-width="100" prop='conversions'>
                    <template slot-scope="scope">
                        <span>{{scope.row.conversions}}</span>
                    </template>
                </el-table-column>
                <el-table-column align='center' sortable='custom' label="点击率" min-width="100" prop='ttr'>
                    <template slot-scope="scope">
                        <span>{{scope.row.ttr | numTofixed}}</span>
                    </template>
                </el-table-column>
                <el-table-column align='center' sortable='custom' label="转化率" min-width="100" prop='conversionRate'>
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
            <!-- 分页 -->
            <div class="content_page">
                <el-pagination :current-page="pageIndex" background :page-size="20" @current-change="handleCurrentChange" layout="prev, pager, next" :total="tablekeyWordtotal">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { countryTwo } from "@commonJS/country";
import documentClick from "@commonJS/documentSettings";
export default {
    data() {
        return {
            tableData: [],
            sortInfor: { prop: "localSpend", order: "descending" }, 
            pageIndex: 1,
            total: 0,
            caoList: ["导出"],
            caoShow: false,
            sortdata: 'localSpend',
            sortbool: false,
            loading: false
        };
    },
    props: {
        tablekeyWordtotal:{},
        tablekeyWord:{},
        loadingkeyWord:{}
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
    components: {},

    computed: {},

    created() {},

    updated() {},

    mounted() {
        documentClick("account_search_cao", this, "caoShow");
    },

    destroyed() {},

    methods: {
        sortchange(a) {
            //排序
            if (a.order != null) {
                this.sortdata = a.prop
                this.sortbool = a.order == 'descending' ? false : true
                this.pageIndex = 1;
                this.total = 0;
                //进行请求
                if(this.$parent.appList[this.$parent.appIndex].appId) { 
                    this.$parent.AjaxKeyWord(
                    this.$parent.appList[this.$parent.appIndex].appId,
                    this.pageIndex,
                    a.prop,
                    a.order == 'descending' ? false : true
                    );
                }  
            }
        },
        orderInfor() {
            this.$refs.multipleTable.clearSort();
            this.$refs.multipleTable.sort("localSpend", "descending");
        },
        handleCurrentChange(val) {
            this.pageIndex = val * 1;
            this.$parent.AjaxKeyWord(
                this.$parent.appList[this.$parent.appIndex].appId,
                this.pageIndex,
                this.sortdata,
                this.sortbool
            );
        },
        caoClick(index) {
            //操作按钮
            this.caoShow = false;
            this.setType = this.caoList[index];
            let type = this.caoList[index];
            let _this = this;
            if (this.tablekeyWord.length == 0) {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "无数据无法操作",
                    type: 3
                });
                return false;
            }
            switch (type) {
                case "导出":
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "正在导出",
                    type: 3
                });
                this.$parent.AjaxGroupExcel('关键词')
                    break;
            }
        },
        togroup(data) {
            let type = data.campaignDeleted == false ? "normal" : "remove";
            let type2 = data.adgroupDeleted == false ? "normal" : "remove";
            let routeData = this.$router.resolve({
                path:
                    "/advertising-center/keyword/" +
                    this.$route.params.accountName +
                    "/" +
                    this.$route.params.id +
                    "/" +
                    +this.$route.params.orgId +
                    "/" +
                    data.campaignName +
                    "/" +
                    data.campaignId +
                    "/" +
                    type +
                    "/" +
                    data.adgroupName + 
                    "/" +
                    data.adgroupId + 
                    "/" +
                    "home" +
                    "/" +
                    type2
            });
            window.open(routeData.href, "_blank");
        },
        tolist(data) { 
            let type = data.campaignDeleted == false ? "normal" : "remove";
            let routeData = this.$router.resolve({
                path:
                    "/advertising-center/list/" +
                    this.$route.params.accountName +
                    "/" +
                    this.$route.params.id +
                    "/" +
                    +this.$route.params.orgId +
                    "/" +
                    data.campaignName +
                    "/" +
                    data.campaignId +
                    "/" +
                    type
                    +"/" +
                    "home"
            });
            window.open(routeData.href, "_blank");
        }
    }
};
</script>