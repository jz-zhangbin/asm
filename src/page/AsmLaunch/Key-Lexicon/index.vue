<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.kl_index {
    box-sizing: border-box;
    padding: 60px 0 20px;
    background: #edf1f5;
    .adver_nav {
        margin: 0px 15px 0;
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
    .advuer_content {
        min-width: 1200px;
        background: #fff;
        padding: 0px 20px 20px;
        margin: 0 12px;
        h2 {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            padding: 20px 0 0 0;
        }
        .sostyle {
            padding: 15px 0 0 0;
        }
        #textinput {
            width: 229px;
            height: 40px;
            border: 1px solid @border;
            line-height: 40px;
            padding-left: 10px;
            box-sizing: border-box;
            font-size: @font_color;
            outline: none;
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
            margin-right: 30px;
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
.kl_index {
    .el-dialog__body {
        text-align: center;
        padding: 30px 20px;
    }
    .el-dialog__footer {
        text-align: center;
    }
    .el-dialog {
        span {
            display: block;
            &.red {
                color: red;
            }
        }
    }
}
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.table {
    padding: 50px 0 0;
    tr td,
    th {
        border-right: 1px solid @border;
        text-align: center;
        padding: 8px 0;
    }
    tr th {
        background: rgb(248, 249, 250);
        line-height: 34px;
    }
    //    .el-table{
    //   border:1px solid @border;
    // }
    a {
        color: @color;
    }
    .el-pagination {
        width: 100%;
        text-align: center;
        margin: 30px auto;
    }
}
</style>
<template>
    <div class="kl_index">
        <v-header></v-header>

        <div class="adver_nav">
            <v-nav :pageName='pageName' :routeList='routeList'></v-nav>
            <div class="btn" @click="centerDialogVisible = true,prentemit('1')">
                <i class="iconfont icon-plus-add"></i>
                <span >新建词组</span>
            </div>
        </div>
        <div class="advuer_content">
            <h2>关键词组</h2>
            <div class="advuer_content_top">
                <v-search :show='show' :valuedata='valuedata' :placevaluedata='placevaluedata' :inputList='inputList' @changeInputList='changeInputList' @changeInput='changeInput' class="sostyle">
                </v-search>
                <div class="advuer_settings">
                    <div class="account_search_cao"  @click="caoShow = !caoShow">
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
            <!-- <v-lexiconList :that="this" :prentemit="prentemit"  ref="lel"></v-lexiconList> -->
            <div class="table">
                <el-table border ref="multipleTable" :data="tableData3" tooltip-effect="dark" v-loading="loading" :empty-text='emptyText' style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column label="词组名称" show-overflow-tooltip min-width="420">
                        <template slot-scope="scope">
                            <span style="color:rgb(0,158,252)">
                                <router-link :to="{path: '/KeyWordList?id='+scope.row.id+''}">
                                    {{ scope.row.name }}
                                </router-link> 
                            </span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="totalCount" label="关键词数" min-width="158">
                    </el-table-column>
                    <el-table-column label="创建时间" min-width="260">
                        <template slot-scope="scope">
                            <span > 
                                {{scope.row.createDate | setdate}}
                            </span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" min-width="150">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="deleteRow(scope.$index,scope.row.id)" type="text" size="small">
                                删除
                            </el-button>
                            <el-button @click.native.prevent="prentemit(2,scope.row)" type="text" size="small">
                                编辑
                            </el-button>
                        </template>
                    </el-table-column>

                </el-table>
                <el-pagination :current-page="pageIndex" background :page-size="pageSize" @current-change="handleCurrentChange" layout="prev, pager, next" :total="total">
                </el-pagination>
            </div>
            <!-- 添加词组/编辑词组 -->
            <el-dialog :title="title" :visible.sync="centerDialogVisible" v-loading="loading" width="30%" left>
                <input type="text" name="" id="textinput" placeholder=" 输入词组名称" v-model="value">
                <span v-show="nullmess" :class="{red : nullmess == true}">词组名称不能为空</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false,nullmess=false">取 消</el-button>
                    <el-button type="primary" @click="Addoredit">确 定</el-button>
                </span>
            </el-dialog>
        </div>
    </div>

</template>

<script>
import NavList from "@components/AsmLaunch/Nav-List";
import KeySearch from "@components/AsmLaunch/Key-Search";
import lexiconList from "@components/AsmLaunch/lexiconList";
import documentClick from "@commonJS/documentSettings";
import { date } from '@commonJS/date'
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
                    name: "关键词库",
                    path: "/key-lexicon"
                }
            ],
            show: false, //控制搜索显示
            valuedata: "", //搜索内容
            placevaluedata: "关键词组名称", //搜索提示
            inputList: [
                //搜索列表
            ],
            settingShow: false,
            centerDialogVisible: false,
            caoShow: false,
            caoList: ["删除"],
            tableData3: [],
            multipleSelection: [],
            loading: false,
            pageIndex: 1,
            total: "",
            emptyText: "当前暂无数据",
            nullmess: false,
            id: "",
            pageSize: 20
        };
    },

    components: {
        "v-nav": NavList,
        "v-search": KeySearch,
        "v-lexiconList": lexiconList
    },

    filters: { 
        setdate: function(value) {
            console.log(value)
            return date(value)
        }
    },
    
    computed: {},

    created() {},

    updated() {},

    mounted() { 
        documentClick("account_search_cao", this, "caoShow");
        this.listdata();
        // this.delete()
    },
    destroyed() {},

    methods: {
        changeInput(value) {
            //input搜索
            this.listdata();
        },
        changeInputList(value) {
            //input-list点击请求
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        prentemit(ststus, data) {
            // 添加、修改按钮弹框
            if (ststus == "1") {
                this.title = "添加词组";
                this.value = "";
            } else {
                this.title = "编辑词组";
                this.centerDialogVisible = true;
                this.value = data["name"];
                this.id = data["id"];
            }
            return false;
        },
        handleCommand(command) {
            //删除关键词
            if (this.multipleSelection.length > 0) {
                this.$confirm("是否删除所选关键词组？", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    width: 50,
                    center: true
                })
                    .then(() => {
                        let ids = "";
                        for (let id of this.multipleSelection) {
                            if ("" == ids) {
                                ids += id.id;
                            } else {
                                ids = ids + "," + id.id;
                            }
                        }
                        this.delete(ids);
                    })
                    .catch(() => {});
            } else {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "请选择关键词组",
                    type: 3
                });
            }
        },
        deleteRow(index, id) {
            //删除按钮删除数据
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
            this.listdata();
        },
        Addoredit() {
            //添加、变价数据操作
            this.loading = true;
            let url = "api/v1/IntellAdvertiseApi/Keyword/Save";
            if (this.id == "") {
                this.id = 0;
            }
            let obj = {
                id: this.id,
                name: this.value,
                userId: 0
            };
            this.$https.post(url, JSON.stringify(obj)).then(
                res => {
                    if (
                        res.statusText == "OK" &&
                        res.status == 200 &&
                        res.data.message == "保存成功!"
                    ) {
                        this.loading = false;
                        this.centerDialogVisible = false;
                        this.listdata();
                    } else {
                        this.loading = false;
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
        listdata() {
            // 关键词列表
            this.loading = true;
            let url = "api/v1/IntellAdvertiseApi/Keyword/SearchKeywordGroup";
            let obj = {
                pageIndex: this.pageIndex,
                pageSize: this.pageSize,
                requestPar: {
                    name: this.valuedata,
                    userId: 0
                }
            };
            this.$https.post(url, JSON.stringify(obj)).then(
                res => {
                    if (res.statusText == "OK" && res.status == 200) {
                        if (res.data.data != null) {
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
            let url = "api/v1/IntellAdvertiseApi/Keyword/Delete?ids=" + id + "";
            this.$https.get(url).then(
                res => {
                    this.listdata();
                },
                err => {
                    console.log(err);
                }
            );
        }
    }
};
</script>