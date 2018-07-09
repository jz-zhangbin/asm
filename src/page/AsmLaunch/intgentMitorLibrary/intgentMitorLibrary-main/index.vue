<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.intgentMitorLibrary {
    box-sizing: border-box;
    padding: 60px 0 20px;
    background: #edf1f5;
    .adver_nav {
        margin: 0 15px 0;
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
        span {
            color: #fff;
        }
        &:hover {
            background: @btnhover;
        }
    }
    .advuer_content {
        min-width: 1200px;
        background: #fff;
        padding: 0 20px 20px;
        margin: 0 12px;
        h2 {
            color: #333;
            font-size: 18px;
            font-weight: bold;
            padding: 20px 0 0 0;
        }
        .sostyle {
            padding: 15px 0 0 0;
        }
        #textinput {
            width: 229px;
            height: 32px;
            border: 1px solid @border;
            line-height: 32px;
            padding-left: 10px;
            box-sizing: border-box;
            font-size: @font_color;
        }
    }
    .advuer_content_top {
        height: 32px;
        display: flex;
        justify-content: space-between;
    }
    .advuer_settings {
        margin-right: 14px;
        line-height: 32px;
        position: relative;
        margin-top: 22px;
        p {
            cursor: pointer;
            i {
                margin-left: 8px;
            }
        }
        .account_search_cao {
            display: flex;
            position: relative;
            cursor: pointer;
            i {
                line-height: 33px;
                cursor: pointer;
            }
            section {
                width: 80px;
                position: absolute;
                top: 33px;
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
    }
}
</style>
<style lang="less">
.table {
    padding: 50px 0 0;
    tr td,
    th {
        border-right: 1px solid #dee2e6;
        text-align: center;
        padding: 8px 0;
    }
    tr th {
        background: rgb(248, 249, 250);
        line-height: 34px;
    }
    .el-pagination {
        width: 100%;
        text-align: center;
        margin: 30px auto;
    }
    .fonticon {
        i {
            color: #2d76ed;
            font-size: 18px;
            margin-right: 10px;
        }
    }
}
</style>

<template>
    <div class="intgentMitorLibrary">
        <v-header></v-header>

        <div class="adver_nav">
            <v-nav :pageName='pageName' :routeList='routeList'></v-nav>
            <div class="btn">
                <router-link :to="{path: '/intgentMitorLibrary/public?parame=add'}">
                    <span>添加智能监测</span>
                </router-link>
            </div>
        </div>
        <div class="advuer_content">
            <h2>智能监测库</h2>
            <div class="advuer_content_top">
                <div class="sostyle">
                    <v-search :show='show' :valuedata='valuedata' :placevaluedata='placevaluedata' :inputList='inputList' @changeInputList='changeInputList' @changeInput='changeInput'>
                    </v-search>
                </div>

                <div class="advuer_settings">
                    <div class="account_search_cao" @click="caoShow = !caoShow">
                        操作：
                        <i class="iconfont icon-xia"></i>
                        <transition name="el-zoom-in-top">
                            <section v-show="caoShow" @mouseout="caoShow = false" @mousemove="caoShow = true">
                                <span v-for="(ele,index) in caoList" :key="index" @click="handleCommand(index)">{{ele}}</span>
                            </section>
                        </transition>
                    </div>
                </div>
            </div>
            <!-- 列表 -->
            <div class="table">
                <el-table border v-loading="loading" ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" min-width="55">
                    </el-table-column>
                    <el-table-column label="智能监测名称" min-width="350" show-overflow-tooltip>
                        <template slot-scope="scope">
                            <!--{{ scope.row.intelMonitorId }}-->
                            <router-link :to="{path: '/intgentMitorLibrary/MonitoringRules?id='+scope.row.intelMonitorId+''}">
                                <span style="color:rgb(0,158,252)">{{ scope.row.intelMonitorName }}</span>
                            </router-link>
                        </template>
                    </el-table-column>
                    <el-table-column prop="SearchIndex" label="监测对象" min-width="150" align='center'>
                        <template slot-scope="scope">
                            <div style="text-align:left">
                                账户：
                                <span style="color:red">{{scope.row.monitorOrgUserName}}</span>
                            </div>
                            <div style="text-align:left">
                                广告系列：
                                <span style="color:red">{{scope.row.campaignCount}}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="ruleCount" label="监测规则数" min-width="120">
                    </el-table-column>
                    <el-table-column prop="createDate" label="创建时间" min-width="180">
                    </el-table-column>
                    <el-table-column label="操作" min-width="150">
                        <template slot-scope="scope">
                            <el-button type="text" size="small">
                                <span class="fonticon">
                                    <el-tooltip class="item" effect="dark" content="删除" placement="top" @click.native.prevent="deleteRow(scope.$index,scope.row.intelMonitorId)">
                                        <i class="icon iconfont icon-shanchu" style="margin-left:10px;"></i>
                                    </el-tooltip>
                                    <el-tooltip class="item" effect="dark" content="编辑" placement="top">
                                        <router-link :to="{path: '/intgentMitorLibrary/public?parame=modify&id='+scope.row.intelMonitorId+''}">
                                            <i class="iconfont icon-bianji-copy" style="font-size:17px;"></i>
                                        </router-link>
                                    </el-tooltip>
                                    <el-tooltip class="item" effect="dark" content="查看" placement="top">
                                        <router-link :to="{path: '/intgentMitorLibrary/public?parame=see&id='+scope.row.intelMonitorId+''}">
                                            <i class="icon iconfont icon-eye"></i>
                                        </router-link>
                                    </el-tooltip>
                                </span>
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination :current-page="pageIndex" background :page-size="pageSize" @current-change="handleCurrentChange" layout="prev, pager, next" :total="total">
                </el-pagination>
                <!-- 列表 -->
            </div>
        </div>
    </div>

</template>

<script>
import NavList from "@components/AsmLaunch/Nav-List";
import KeySearch from "@components/AsmLaunch/Key-Search";
import { date } from "@commonJS/date";
import documentClick from "@commonJS/documentSettings";
export default {
    data() {
        return {
            title: "",
            value: "",
            pageName: "广告中心",
            routeList: [
                //面包屑
                {
                    name: "广告中心",
                    path: "/advertising-center"
                },
                {
                    name: "智能监测库",
                    path: "/intgentMitorLibrary"
                }
            ],
            multipleSelection: [],
            show: false, //控制搜索显示
            valuedata: "", //搜索内容
            placevaluedata: "请输入智能监测名称", //搜索提示
            inputList: [
                //搜索列表
            ],
            tableData3: [],
            caoShow: false,
            caoList: ["删除"],
            loading: false,
            pageIndex: 1,
            total: "",
            emptyText: "当前暂无数据",
            pageSize: 20
        };
    },

    components: {
        "v-nav": NavList,
        "v-search": KeySearch
    },

    computed: {},

    created() {},

    updated() {},

    mounted() {
        documentClick("account_search_cao", this, "caoShow");
        this.$height(".intgentMitorLibrary");
        this.intgetMitorLibraryList();
    },

    destroyed() {},

    methods: {
        changeInput(value) {
            //input搜索
            this.intgetMitorLibraryList();
        },
        handleCommand(command) {
            if (this.multipleSelection.length > 0) {
                this.$confirm("是否删除所选智能监测？", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    width: 50,
                    center: true
                })
                    .then(() => {
                        let ids = "";
                        for (let id of this.multipleSelection) {
                            if ("" == ids) {
                                ids += id.intelMonitorId;
                            } else {
                                ids = ids + "," + id.intelMonitorId;
                            }
                        }
                        this.pageIndex = 1;
                        this.delete(ids);
                    })
                    .catch(() => {});
            } else {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "请选择智能检测",
                    type: 3
                });
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        deleteRow(index, id) {
            this.$confirm("是否删除所选关键词？", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                width: 50,
                center: true
            })
                .then(() => {
                    this.delete(id);
                })
                .catch(() => {});
        },
        handleCurrentChange(val) {
            //分页编辑
            this.emptyText = "加载中请稍后";
            this.loading = true;
            this.pageIndex = val;
            this.intgetMitorLibraryList();
        },
        intgetMitorLibraryList() {
            this.loading = true;
            let url = "api/v1/IntellAdvertiseApi/Monitor/Search";
            let obj = {
                pageIndex: this.pageIndex,
                pageSize: this.pageSize,
                requestPar: {
                    intelMonitorName: this.valuedata,
                    userId: 0
                }
            };
            this.$https.post(url, JSON.stringify(obj)).then(
                res => {
                    if (res.statusText == "OK" && res.status == 200) {
                        if (res.data.data != null) {
                            for (let arraylist of res.data.data.list) {
                                arraylist.createDate = date(
                                    arraylist.createDate
                                );
                            }
                            this.tableData3 = res.data.data.list;
                            this.total = res.data.data.totalCount;
                            this.loading = false;
                            return false;
                        }
                        this.tableData3 = [];
                        this.loading = false;
                        this.total = 0;
                    } else {
                        this.$store.commit("SET_SHOW_TRUE", {
                            value: "接口失败",
                            type: 3
                        });
                    }
                },
                err => {
                    console.log(err);
                }
            );
        },
        delete(id) {
            let url = "api/v1/IntellAdvertiseApi/Monitor/Delete?ids=" + id + "";
            this.$https.get(url).then(
                res => {
                    this.intgetMitorLibraryList();
                },
                err => {
                    console.log(err);
                }
            );
        }
    }
};
</script>
