<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.advertisting_index {
    box-sizing: border-box;
    padding: 60px 0 20px;
    background: #edf1f5;
    min-height: 100%;
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
    .adver_content {
        min-width: 1200px;
        background: #fff;
        padding: 25px 20px 40px;
        margin: 0 12px;
    }
    .adver_content_top {
        height: 40px;
    }
    .content_search {
        float: left;
    }
    .content_date {
        float: right;
    }
    .content_refresh {
        float: right;
        display: flex;
        line-height: 40px;
        margin-right: 36px;
        i {
            margin: 0 10px;
            cursor: pointer;
        }
    }
    .content_table {
        width: 100%;
        margin-top: 30px;
    }
    .table_username {
        cursor: pointer;
        color: @color;
        &:hover {
            text-decoration: underline;
        }
    }
    .content_page {
        margin-top: 40px;
        display: flex;
        justify-content: center;
    }
    .item {
        i {
            font-size: 18px;
        }
    }
}
</style>
<style lang='less'>
.advertisting_index {
    .el-select {
        width: 230px;
    }
    .el-table th {
        background: #f7f7f7 !important;
        font-size: large;
        color: #666 !important;
    }
    .el-table--enable-row-transition .el-table__body td {
        transition: background-color 0.25s ease;
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
    <div class="advertisting_index">
        <!-- 导航 -->
        <v-header></v-header>

        <!-- 面包屑 -->
        <div class="adver_nav">
            <v-nav :pageName='pageName' :routeList='routeList'></v-nav>
            <div class="btn" @click="addUserClick">
                <i class="iconfont icon-plus-add"></i>
                <span>添加账户</span>
            </div>
        </div>

        <!-- 内容 -->
        <div class="adver_content">
            <div class="adver_content_top">

                <div class="content_search">
                    <div class="advuer_content">
                        <div class="advuer_content_top">
                            <v-search :show='show' :valuedata='valuedata' :placevaluedata='placevaluedata' :inputList='inputList' @changeInputList='changeInputList' @changeInput='changeInput'>
                            </v-search>
                        </div>
                    </div>
                </div>

                <div class="content_date">
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

                <div class="content_refresh">
                    <p>数据更新时间为：{{dateNow}}</p>
                </div>
            </div>

            <div class="content_table">
                <el-table :data="tableData" border v-loading="loading" :empty-text='emptyText' style="width: 100%">
                    <el-table-column fixed label="账户名称" align='center' min-width="320">
                        <template slot-scope="scope">
                            <div class="table_username" :alt="scope.row.name" @click="accountRoute(scope.row , scope.row.userId , scope.row.orgUserInfoId)">{{scope.row.companyName}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="orgId" label="账户ID" align='center' min-width="110">
                    </el-table-column>
                    <el-table-column label="添加时间" align='center' min-width="210">
                        <template slot-scope="scope">
                            <span>{{scope.row.addTime | dateFormat}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="花费" align='center' min-width="100">
                        <template slot-scope="scope">
                            <span>{{scope.row.localspendAmount | numTo$}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="平均CPA" align='center' min-width="100">
                        <template slot-scope="scope">
                            <span>{{scope.row.avgCPA | numTo$}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="平均CPC" align='center' min-width="100">
                        <template slot-scope="scope">
                            <span>{{scope.row.avgCPC | numTo$}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="曝光数" align='center' min-width="100">
                        <template slot-scope="scope">
                            <span>{{scope.row.impressions}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="点击数" align='center' min-width="100">
                        <template slot-scope="scope">
                            <span>{{scope.row.taps}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="下载数" align='center' min-width="100">
                        <template slot-scope="scope">
                            <span>{{scope.row.conversions}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="点击率" align='center' min-width="100">
                        <template slot-scope="scope">
                            <span>{{scope.row.ttr | numTofixed}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="转化率" align='center' min-width="100">
                        <template slot-scope="scope">
                            <span>{{scope.row.conversionRate | numTofixed}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" align='center' min-width="120">
                        <template slot-scope="scope">
                            <el-tooltip class="item" effect="dark" content="删除" placement="top">
                                <el-button @click="handleClick(scope.row.orgUserInfoId,scope.$index)" type="text" size="small">
                                    <i class="iconfont icon-shanchu"></i>
                                </el-button>
                            </el-tooltip>
                            <el-tooltip class="item" effect="dark" content="编辑" placement="top">
                                <el-button type="text" size="small" @click="userEdit(scope.row.orgUserInfoId)">
                                    <i class="iconfont icon-bianji-copy"></i>
                                </el-button>
                            </el-tooltip>
                        </template>
                    </el-table-column>
                </el-table> 
                <div class="content_page">
                    <el-pagination :current-page="pageIndex" background :page-size="20" @current-change="handleCurrentChange" layout="prev, pager, next" :total="total">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavList from "@components/AsmLaunch/Nav-List";
import KeySearch from "@components/AsmLaunch/Key-Search";
import { mapState } from "vuex";
import { date , dateUtc} from "@commonJS/date";
import { datefn } from "@commonJS/dateList";
export default {
    data() {
        return {
            pageName: "广告中心",
            routeList: [], //面包屑
            valuedata: "", //搜索内容
            placevaluedata: "账户名称或ID", //搜索提示
            //dateData: 0, //当前时间
            dateNow: "", //请求时间段
            pageIndex: 1,
            emptyText: "当前暂无数据",
            total: 0,
            loading: false,
            tableData: [], 
            dateTime: ''
        };
    },

    components: {
        "v-nav": NavList,
        "v-search": KeySearch
    },

    computed: {
        ...mapState({
            datelist: state => state.Date.DateRange
        })
    },

    filters: {
        dateFormat: function(value) {
            return date(value);
        }
    },

    created() {
        //console.log([datefn(3).beginTime , datefn(3).endTime])
        if(!this.$ss.get('TIME_UTC')) {
            this.dateTime = [datefn(3).beginTime , datefn(3).endTime]
            this.$ss.set('TIME_UTC', this.dateTime)
        }else{
            this.dateTime = this.$ss.get('TIME_UTC')
        }  
        this.AjaxGetUserList();
    },

    updated() {},

    mounted() {},

    destroyed() {},

    methods: {
        changeInput() {
            //input搜索
            this.pageIndex = 1;
            this.total = 0;
            this.AjaxGetUserList();
        },
        changeDate() {
            this.$ss.set('TIME_UTC',this.dateTime)  
            this.pageIndex = 1;
            this.total = 0;
            this.AjaxGetUserList();
        }, 

        handleClick(id, index) {
            //删除
            let _this = this;
            this.$confirm("是否删除所选账户？", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                center: true
            })
                .then(() => {
                    _this.AjaxRemoveUser(id, index);
                })
                .catch(() => {});
        },

        handleCurrentChange(val) {
            this.pageIndex = val;
            this.AjaxGetUserList();
        },

        addUserClick() {
            //添加账户
            this.$router.push({
                path: "/advertising-center/usersetting",
                query: {
                    type: "add"
                }
            });
        },

        userEdit(index) {
            //编辑账户
            this.$router.push({
                path: "/advertising-center/usersetting",
                query: {
                    type: "edit",
                    id: index
                }
            });
        },

        accountRoute(data) {
            //跳转账户详情
            this.$router.push({
                path: "/advertising-center/account",
                query: {
                    accountName: data.companyName,
                    id: data.orgUserInfoId,
                    orgId: data.orgId 
                }
            });
        },

        AjaxGetUserList() {
            this.loading = true;

            let url = "/api/v1/IntellAdvertiseApi/AdCenter/SearchUser";
            let obj = {
                pageIndex: this.pageIndex,
                pageSize: 20,
                requestPar: {
                    keyword: this.valuedata,
                    startTime: dateUtc(this.dateTime[0]),
                    endTime: dateUtc(this.dateTime[1])
                }
            };

            this.$https.post(url, JSON.stringify(obj)).then(res => {
                this.loading = false;
                if (res.data.resultCode == 1000) {
                    if (res.data.data == null) {
                        this.tableData = [];
                        this.emptyText = "暂无账户数据";
                    } else {
                        this.tableData = res.data.data.list;
                        //this.pageIndex = res.data.data.returnCount;
                        this.total = res.data.data.totalCount;
                        this.dateNow = res.data.message;
                    }
                } else {
                    this.tableData = [];
                    this.emptyText = "暂无账户数据";
                }
            });
        },

        AjaxRemoveUser(id, index) {
            let url = "/api/v1/IntellAdvertiseApi/AdCenter/DeleteUser?id=" + id;
            this.$https.get(url).then(res => {
                if (res.data.resultCode == 1000) {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "删除成功",
                        type: 1
                    });
                    this.tableData.splice(index, 1);
                } else {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "删除失败",
                        type: 1
                    });
                }
            });
        }
    }
};
</script>