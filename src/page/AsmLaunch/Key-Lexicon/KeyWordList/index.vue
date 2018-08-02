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
    .arlstyle {
        text-align: center;
        width: 100%;
        display: block;
        padding: 15px 0;
    }
    .adver_nav {
        margin: 0 15px 0;
        min-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
    }
    .btn {
        width: 158px;
        height: 40px;
        cursor: pointer;
        background: #2d76ed;
        color: #f7f7f7;
        text-align: center;
        line-height: 40px;
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
        position: relative;
        h2 {
            font-size: 18px;
            font-weight: bold;
            padding: 20px 0 0 0;
            color: #333;
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
        padding-top: 25px;
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
            // margin-right: 20px;
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
    .KeyWord {
        margin-right: 14px;
        line-height: 32px;
        position: absolute;
        right: 0;
        top: 14px;
        .el-button {
            border: 1px solid @color;
            color: @color;
        }
    }
}
</style>
<style lang='less'>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;

.kl_index {
    .el-dialog__body {
        text-align: center;
        padding: 0;
        #textinput {
            width: 228px;
            height: 40px;
            margin: 20px auto;
            display: block;
            border: 1px solid #dee2e6;
            padding: 0 7px;
            line-height: 40px;
            color: #6c757d;
            outline: none;
        }
    }
    .el-dialog__footer {
        text-align: center;
        padding: 16px 20px 20px;
    }
    .Downloadsample {
        float: right;
        padding-right: 10px;
        color: #6c757d;
        font-size: 13px;
    }
    .upload-demo {
        clear: both;
        text-align: center;
        button {
            width: 54px;
            height: 54px;
            background: #fff;
            border: 1px solid rgb(227, 227, 227);
            span {
                i {
                    color: #000;
                }
            }
        }
    }
    .el-select {
        width: 250px;
        .el-input {
            width: 250px;
            margin: 0 auto;
        }
        text-align: center;
    }
    .file_input {
        width: 100%;
        height: 60px;
        position: relative;
        display: flex;
        justify-content: center;
        margin: 20px 0;
        input {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            display: block;
            width: 70px;
            height: 70px;
            opacity: 0;
            cursor: pointer;
        }
        span {
            display: block;
            width: 70px;
            height: 70px;
            border: 1px solid #dee2e6;
            text-align: center;
            line-height: 70px;
            i {
                font-size: 40px;
            }
        }
    }
    .file_ul_box {
        width: 100%;
        max-height: 150px;
        overflow-y: auto;
        margin-top: 20px;
    }
    .file_ul {
        display: flex;
        box-sizing: border-box;
        padding: 10px 20px;
        flex-wrap: wrap;
        li {
            padding: 8px 20px;
            border: 1px solid #dee2e6;
            color: #2d76ed;
            border-radius: 4px;
            position: relative;
            margin: 0 14px 14px 0;
            img {
                position: absolute;
                right: -8px;
                top: -8px;
                cursor: pointer;
            }
        }
    }

    .table {
        padding: 50px 0 0;
        tr td,
        th { 
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
    }
}
.el-message-box {
    width: 300px;
}
</style>

<template>
    <div class="kl_index">
        <v-header></v-header>
        <div class="adver_nav">
            <v-nav :pageName='pageName' :routeList='routeList'></v-nav>
        </div>
        <div class="advuer_content">
            <h2>{{$route.query.name}}</h2>
            <div class="KeyWord">
                <el-button @click="addkeywork">添加关键词</el-button>
            </div>
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

            <div class="table">
                <el-table border ref="multipleTable" :data="tableData3" v-loading="loading" :empty-text='emptyText' tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" min-width="55">
                    </el-table-column>
                    <el-table-column label="关键词" min-width="420" show-overflow-tooltip>
                        <template slot-scope="scope">
                            <span style="color:rgb(0,158,252)">{{ scope.row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="searchIndex" label="搜索指数" min-width="158">
                    </el-table-column>
                    <el-table-column prop="popularityIndex" label="流行度" width="260">
                    </el-table-column>
                    <el-table-column prop="maxCurrentAppNum" label="近期竞价APP" min-width="260">
                    </el-table-column>
                    <el-table-column label="操作" min-width="99">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="deleteRow(scope.$index,scope.row.id)" type="text" size="small">
                                <span>删除</span>
                            </el-button>
                        </template>
                    </el-table-column>

                </el-table>

                <el-pagination :current-page="pageIndex" background :page-size="20" @current-change="handleCurrentChange" layout="prev, pager, next" :total="total">
                </el-pagination>
            </div>
        </div>

        <el-dialog title='添加关键词' :visible.sync="centerDialogVisible" width="30%" left>

            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="" name=""></el-tab-pane>
                <el-tab-pane label="" name=""></el-tab-pane>
                <el-tab-pane label="" name=""></el-tab-pane>
                <el-tab-pane label="手动添加" name="first">
                    <input type="text" name="" id="textinput" placeholder=" 输入关键词" v-model="keyWordDate">
                </el-tab-pane>
                <el-tab-pane label="上传关键词" name="second">
                    <div class="Downloadsample">
                        <a href="../../../../../static/关键词示例.xlsx" download=""> 下载示例</a>
                    </div>
                    <div class="file_ul_box">
                        <ul class="file_ul">
                            <li v-for="(ele,index) in fileList" :key="index">
                                {{ele.name}}
                                <img src="../../../../images/components/u132.png" alt="" @click="removefile(index)">
                            </li>
                        </ul>
                    </div>
                    <div class="file_input">
                        <input type="file" name="" id="" multiple @change="getFile($event)">
                        <span>
                            <i class="iconfont icon-adds"></i>
                        </span>
                    </div>
                </el-tab-pane>
            </el-tabs>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addBtn">添加</el-button>
            </span>

        </el-dialog>
        <el-dialog :title="title" :visible.sync="centerDialogVisibles" :before-close="handleClose" width="30%" left>
            <span class="arlstyle" style="text-align:center" v-html="statement"></span>
            <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.index" :label="item.name" :value="item.id">
                </el-option>
            </el-select>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisibles = false,options=[],value=null">取 消</el-button>
                <el-button type="primary" @click="CopyOrMove">确 定</el-button>
            </span>
        </el-dialog>
    </div>

</template>

<script>
import NavList from "@components/AsmLaunch/Nav-List";
import KeySearch from "@components/AsmLaunch/Key-Search";
import KeyWordList from "@components/AsmLaunch/KeyWordList";
import documentClick from "@commonJS/documentSettings";
export default {
    data() {
        return {
            title: "",
            statement: "",
            activeName: "first",
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
                },
                {
                    name: "关键词列表",
                    path: "/KeyWordList"
                }
            ],
            show: false, //控制搜索显示
            valuedata: "", //搜索内容
            placevaluedata: "关键词名称", //搜索提示
            inputList: [
                //搜索列表
            ],
            settingShow: false,
            centerDialogVisible: false,
            centerDialogVisibles: false,
            fileList: [],
            options: [],
            value: "",
            fileList: [],
            tableData3: [],
            caoShow: false,
            caoList: ["删除", "复制至", "移动至"],
            pageIndex: 1,
            pageSize: 20,
            total: "",
            emptyText: "当前暂无数据",
            keyWordDate: "",
            loading: false,
            multipleSelection: [],
            tabName: "first",
            loadingAll: null,
            loadingopaction: {
                lock: true,
                text: "正在上传",
                spinner: "el-icon-loading",
                background: "rgba(0, 0, 0, 0.7)"
            }
        };
    },

    components: {
        "v-nav": NavList,
        "v-search": KeySearch,
        "v-KeyWordList": KeyWordList
    },
    computed: {},

    created() {},

    updated() {},

    mounted() {
        documentClick("account_search_cao", this, "caoShow");
        this.listdata();
    },

    destroyed() {},
    methods: {
        changeid(val) {
            //console.log(val);
        },
        changeInput(value) {
            //input搜索
            this.listdata();
        },
        changeInputList(value) {
            //input-list点击请求
        },
        CopyOrMove() {
            let url = "";
            if (this.title == "复制关键词") {
                url = "api/v1/IntellAdvertiseApi/KeywordInfo/Copy";
            } else {
                url = "api/v1/IntellAdvertiseApi/KeywordInfo/Move";
            }
            let ids = "";
            for (let id of this.multipleSelection) {
                if ("" == ids) {
                    ids += id.id;
                } else {
                    ids = ids + "," + id.id;
                }
            }
            url +=
                "?keywordIds=" +
                ids +
                "&targetGroupId=" +
                this.value +
                "&sourceGroupId=" +
                this.$route.query.id +
                "";
            this.loading = true;
            this.$https.get(url).then(
                res => {
                    this.centerDialogVisibles = false;
                    this.loading = false;
                },
                err => {
                    this.centerDialogVisibles = false;
                    console.log(err);
                }
            );
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
        handleClose() {
            this.centerDialogVisibles = false;
            this.options = [];
            this.value = "";
        },
        handleCommand(command) {
            if (this.multipleSelection.length > 0) {
                switch (command) {
                    case 0:
                        this.$confirm("是否删除所选关键词？", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            //   type: 'warning',
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
                        break;
                    case 1:
                        this.title = "复制关键词";
                        this.GetGroupList();
                        this.statement =
                            "复制<i style='color:red;'>" +
                            this.multipleSelection.length +
                            "</i>个关键词至";
                        this.centerDialogVisibles = true;
                        break;
                    case 2:
                        this.title = "移动关键词";
                        this.GetGroupList();
                        this.statement =
                            "移动<i style='color:red;'>" +
                            this.multipleSelection.length +
                            "</i>个关键词至";
                        this.centerDialogVisibles = true;
                        break;
                    default:
                        return false;
                }
            } else {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "请选择关键词",
                    type: 3
                });
            }
        },
        getFile($event) {
            if (event.target.files.length == 1) {
                let num = 0;
                this.fileList.map((ele, index) => {
                    if (event.target.files[0].name == ele.name) {
                        num = 1;
                    }
                });
                if (num != 1) {
                    this.fileList.push(event.target.files[0]);
                } else {
                    event.target.files = null;
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "不能上传重复文件",
                        type: 3
                    });
                }
            } else {
                let arr = [];
                let num = 0;
                //console.log(event.target.files);
                for (var i in event.target.files) {
                    if (i != "length" && i != "item") {
                        arr.push(event.target.files[i]);
                    }
                }
                this.fileList.map(ele => {
                    arr.map(ele2 => {
                        if (ele.name == ele2.name) {
                            num = 1;
                        }
                    });
                });
                if (num != 1) {
                    this.fileList.push(...arr);
                } else {
                    event.target.files = null;
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "不能上传重复文件",
                        type: 3
                    });
                }
            }
        },
        removefile(index) {
            this.fileList.splice(index, 1);
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleCurrentChange(val) {
            //分页编辑
            this.emptyText = "加载中请稍后";
            this.loading = true;
            this.pageIndex = val;
            this.listdata(); 
        },
        addkeywork() {
            this.centerDialogVisible = true;
            this.fileList = [];
            this.keyWordDate = "";
        },
        addBtn() { 
            if (this.tabName == "second") {
                if (this.fileList.length == 0) {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "请上传文件",
                        type: 3
                    });
                } else {
                    this.AjaxUpLoade();
                }
            } else {
                if (this.keyWordDate == "") {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "请上传关键词",
                        type: 3
                    });
                } else {
                    this.AjaxUpKeyWord();
                }
            }
        },
        AjaxUpLoade() {
            this.centerDialogVisible = false;
            this.loadingAll = this.$loading(this.loadingopaction);
            let url = "/api/v1/IntellAdvertiseApi/KeywordInfo/FileUpload";
            var zipFormData = new FormData();
            this.fileList.map((ele, index) => {
                zipFormData.append(index, ele);
            });
            zipFormData.append("groupId", this.$route.query.id);
            let config = { headers: { "Content-Type": "multipart/form-data" } };
            this.$https.post(url, zipFormData).then(res => {
                this.loadingAll.close()
                if (res.data.resultCode == 1000) {
                    this.listdata();
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
        AjaxUpKeyWord() {
            let url = "/api/v1/IntellAdvertiseApi/KeywordInfo/SaveKeyword";
            this.$https
                .post(
                    url,
                    JSON.stringify({
                        groupId: this.$route.query.id,
                        name: this.keyWordDate
                    })
                )
                .then(res => {
                    if (res.data.resultCode == 1000) {
                        this.listdata();
                    } else {
                        if (res.data.resultCode == 1600) {
                            this.$store.commit("SET_SHOW_TRUE", {
                                value: "该关键词已存在",
                                type: 3
                            });
                        }else{
                            this.$store.commit("SET_SHOW_TRUE", {
                                value: "关键词添加失败",
                                type: 3
                            });
                        }
                    }
                });
        },
        GetGroupList() {
            //获取关键词组列表
            let url = "api/v1/IntellAdvertiseApi/Keyword/GetGroupList";
            this.$https.get(url).then( 
                res => {  
                    this.options = res.data.data;
                },
                err => { 
                    console.log(err);
                }
            );
        },
        listdata() {
            // 关键词列表
            this.loading = true;
            let url = "api/v1/IntellAdvertiseApi/KeywordInfo/SearchKeyword";
            let obj = {
                pageIndex: this.pageIndex,
                pageSize: this.pageSize,
                requestPar: {
                    groupId: this.$route.query.id,
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
            let url =
                "api/v1/IntellAdvertiseApi/KeywordInfo/DeleteKeywordInfo?ids=" +
                id +
                "";
            this.$https.get(url).then(
                res => {
                    this.listdata();
                },
                err => {
                    console.log(err);
                }
            );
        },
        handleClick(evt) {
            this.tabName = evt.name;
        }
    }
};
</script>