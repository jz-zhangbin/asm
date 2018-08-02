<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.publicintgentMitor {
    .el-dialog__footer {
        text-align: center !important;
    }
    box-sizing: border-box;
    padding: 60px 0 20px;
    background: #edf1f5;
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
        padding: 0px 20px 15px;
        margin: 0 12px;
        h2 {
            font-size: 18px;
            font-weight: bold;
            padding: 22px 0 0 0px;
            color: #333;
        }
        .sostyle {
            padding: 15px 0 0 15px;
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
        height: auto;
        display: flex;
        justify-content: space-between;
    }
    .advuer_settings {
        margin-right: 14px;
        line-height: 32px;
        position: relative;
        p {
            cursor: pointer;
            i {
                margin-left: 8px;
            }
        }
    }

    .advuser_form {
        padding-left: 200px;
        h5,
        h6 {
            font-size: 12px;
            color: #aaa;
            margin-top: 8px;
        }
        h6 {
            color: @color;
            cursor: pointer;
            margin-top: 4px;
        }
    }
    .advuser_form_p {
        margin-top: 36px;
        margin-bottom: 12px;
    }
    .advuser_form_input {
        height: 36px;
        border: 1px solid @border;
        border-radius: 4px;
        outline: none;
        padding-left: 12px;
        line-height: 36px;
        &::-webkit-input-placeholder {
            color: #9a9a9a;
        }
    }
    .advuser_form_fil {
        text-align: center;
        padding: 0 5px;
        cursor: pointer;
        overflow: hidden;
    }
    .advuser_form_boxfil {
        position: relative;
        display: flex;
        line-height: 40px;
    }
    .imgclose {
        position: absolute;
        top: -10px;
        left: 126px;
        z-index: 200;
        cursor: pointer;
    }
    .advuser_form_none {
        position: absolute;
        opacity: 0;
        width: 122px;
        height: 40px;
        top: 0;
        left: 0;
        cursor: pointer;
        z-index: 100;
    }
    .warning {
        color: red;
        margin-left: 10px;
    }
    .advuser_istype {
        margin-top: 20px;
        h2 {
            color: @color;
        }
        section {
            margin-left: 30px;
        }
    }
    .adver_btn {
        display: flex;
        margin-top: 40px;
        margin-bottom: 30px;
        div {
            width: 160px;
            height: 44px;
            border-radius: 4px;
            margin-right: 30px;
            cursor: pointer;
            text-align: center;
            line-height: 44px;
            &.one {
                border: 1px solid @border;
                &:hover {
                    color: #333;
                    background-color: #ebebeb;
                    border-color: #adadad;
                }
                &:active {
                    background-image: none;
                    outline: 0;
                    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                }
            }
            &.two {
                border: 1px solid @color;
                color: #fff;
                background: @color;
                &:hover {
                    background-color: @btnhover;
                    border: 1px solid @btnhover;
                }
                &:active {
                    background-image: none;
                    outline: 0;
                    border: 1px solid @btnhover;
                    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                }
            }
        }
    }
}
</style>
<style lang="less">
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.publicstyle {
    .pubspan {
        padding: 0 10px;
    }
    .advuser_form_input {
        height: 40px;
        border: 1px solid #dee2e6;
        border-radius: 4px;
        outline: none;
        padding-left: 12px;
        line-height: 40px;
        width: 100px !important;
        &::-webkit-input-placeholder {
            color: #9a9a9a;
        }
    }
    .el-select {
        width: 120px;
        margin-right: 10px;
    }
    .operation {
        color: rgb(0, 158, 251);
        padding: 0 15px 0 45px;
    }
    .el-button {
        margin-right: 30px;
    }
}
.bootonstyle {
    .el-button {
        color: #2d76ed;
        margin-right: 10px;
    }
    .red {
        color: red;
    }
}
.publicintgentMitor {
    .khgx {
        color: #000;
        padding-left: 11px;
        width: 45%;
        float: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .ceatdate {
        color: #868686;
        width: 43%;
        float: left;
    }
    .el-table {
        margin-top: 16px;
    }
    .el-dialog__body {
        padding: 0 30px 9px 20px;
    }
    .el-table td,
    .el-table th {
        padding: 8px 0;
    }
    .el-table th.is-leaf {
        background: rgb(251, 251, 251);
    }
    .el-dialog__footer {
        text-align: center !important;
    }
}
.input_search {
    border-radius: 4px;
    height: 28px;
    display: flex;
    position: relative;
    margin-bottom: 25px;
    input {
        width: 210px;
        height: 28px;
        outline: none;
        padding-left: 10px;
        border-radius: 4px;
        border: 1px solid @border;
        &::-webkit-input-placeholder {
            color: #9a9a9a;
        }
    }
    span {
        display: block;
        width: 32px;
        height: 32px;
        box-sizing: border-box;
        border: 1px solid @border;
        border-radius: 4px;
        margin-left: 14px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        &:hover {
            border: 1px solid @color;
        }
        i {
            line-height: 32px;
            text-align: center;
            font-size: 15px;
        }
    }
    ul {
        width: 220px;
        box-sizing: border-box;
        padding: 6px 12px;
        background: #fff;
        top: 42px;
        left: 0;
        position: absolute;
        border: 1px solid @border;
        z-index: 100;
        li {
            height: 30px;
            line-height: 30px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:hover {
                background: #f7f7f7;
                color: green;
                cursor: pointer;
            }
        }
    }
}
</style>

<template>
  <div class="publicintgentMitor" v-loading.fullscreen.lock="fullscreenLoading">
    <v-header></v-header>
    <div class="adver_nav">
      <v-nav :pageName='pageName' :routeList='routeList'></v-nav>
    </div>
    <div class="advuer_content">
      <h2>{{Title}}</h2>
      <div class="advuer_content_top">
        <div class="advuser_form">
          <p class='advuser_form_p'>智能监测名称</p>
          <div>
            <input type="text" :disabled="isdisabledFn" placeholder="设置智能监测名称" class="advuser_form_input" style="width: 300px" v-model="userName">
            <span class="warning" v-if="warnuserName">账户名称不能为空</span>
          </div>
          <h5>设置名称后将自动保存至智能监测库，便于再次使用</h5>

          <p class='advuser_form_p'>监测账户花费</p>
          <div class="publicstyle">
            <span class="pubspan">日花费</span>
            <el-select v-model="value" placeholder="设置" :disabled="isdisabledFn">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" >
              </el-option>
            </el-select>
            <!-- readonly -->
            <input type="text" placeholder="" class="advuser_form_input" :disabled="isdisabledFn" :onkeyup="budgetvalue=budgetvalue.replace(/[^\d]/g,'')" v-model="budgetvalue"> $
            <span class="operation">操作</span>
            <el-button plain disabled>暂停投放</el-button>
            <el-checkbox v-model="checked" :disabled="isdisabledFns">次日开启</el-checkbox>
          </div>
          <span class="warning" v-if="accountnull">监测账户花费不能为空</span>

          <p class='advuser_form_p'>选择监测账户</p>
          <div class="bootonstyle">
            <el-button v-show="Monitor" @click="GetUserList">{{DetectionTitle}}</el-button>
            <span v-show="Monitorstatus1">
              状态：已选择
              <span class="red" v-html="users"></span> 账户
            </span>
            <span v-show="Monitorstatus2">
              状态：
              <span class="red">未选择监测对象</span>
            </span>
          </div>
          <span class="warning" v-if="Monitornull">{{Detectiondescribe}}</span>
          <div class="adver_btn">
            <div class="one" v-show="shows" @click="$router.go(-1)">取消</div>
            <div class="two" @click="commitMethod">{{status}}</div>
          </div>
        </div>
      </div>
    </div>

    <el-dialog title="选择监测账户" :visible.sync="centerDialogVisible" width="527" left>
      <div class="input_search">
        <v-search :show='show' :valuedata='valuedata' :placevaluedata='placevaluedata' :inputList='inputList' @changeInputList='changeInputList' @changeInput='changeInput'>
        </v-search>
      </div>
      <el-table :data="tableData4" style="width: 100%" max-height="300" v-loading="loading">
        <el-table-column prop="date" label="账户列表">
          <template slot-scope="scope">
            <span class="khgx">
              账户名称： {{scope.row.companyName}}
            </span>
            <span class="ceatdate">
              创建时间：{{scope.row.addTime}}
            </span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="" width="60">
          <template slot-scope="scope">
            <input type="radio" name="1" id="" @click="SelectedItem(scope.$index, tableData4)">
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="GetUserListstatus">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import NavList from "@components/AsmLaunch/Nav-List";
import KeySearch from "@components/AsmLaunch/Key-Search";
import { date } from "@commonJS/date";
export default {
    data() {
        return {
            loading: false,
            select: "",
            value: "",
            shows: false,
            Monitor: false,
            pageName: "广告中心",
            checked: false,
            status: "",
            Title: "",
            centerDialogVisible: false,
            isdisabledFn: true,
            isdisabledFns: false,
            Monitorstatus1: false,
            Monitorstatus2: false,
            accountnull: false,
            Monitornull: false,
            fullscreenLoading: false,
            DetectionTitle: "选择监测对象",
            Detectiondescribe: "请选择监测账户",
            MymonitorOrgUserId: "",
            routeList: [
                //面包屑1
                {
                    name: "广告中心",
                    path: "/advertising-center"
                },
                {
                    name: "智能监测库",
                    path: "/intgentMitorLibrary"
                },
                {
                    name: "新建智能监测",
                    path: "/intgentMitorLibrary/public"
                }
            ],
            multipleSelection: [],
            show: false, //控制搜索显示
            valuedata: "", //搜索内容
            placevaluedata: "请输入智能监测名称", //搜索提示
            inputList: [], //搜索列表
            budgetvalue: "", //日结算输入框
            options: [
                {
                    //{value: '设置', label: '设置'},
                    value: 1,
                    label: "大于等于"
                } 
            ],
            value: 1,
            tableData4: [],
            Arrayreceiving: "",
            userName: "",
            users: "",
            warnuserName: false
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
        //modify 修改  add 添加  see 查看
        //this.$height('.publicintgentMitor');
        switch (this.$route.query.parame) {
            case "add":
                this.status = "确定";
                this.shows = true;
                this.Monitor = true;
                this.isdisabledFn = false;
                this.Monitorstatus2 = true;
                this.Title = "新建智能监测";
                break;
            case "modify":
                this.fullscreenLoading = true;
                this.Getmodify();
                this.status = "确定";
                this.shows = true;
                this.isdisabledFn = false;
                this.Monitorstatus1 = true;
                this.Title = "编辑智能监测";
                break;
            case "see":
                this.fullscreenLoading = true;
                this.Getmodify();
                this.status = "确定";
                this.isdisabledFns = true;
                this.Title = "查看智能监测";
                this.Monitorstatus1 = true;
                break;
            default:
                return false;
        }
    },

    destroyed() {},

    methods: {
        changeInput(value) {
            //input搜索 
            this.inputList.push({
                name: "某某某公司",
                id: "123"
            });
        },
        changeInputList(value) {
            //input-list点击请求
            this.valuedata = this.inputList[value].name;
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        change(val) {},
        SelectedItem(index, tableData4) {
            this.Arrayreceiving = tableData4[index];
        },
        GetUserList() {
            this.tableData4 = [];
            this.centerDialogVisible = true;
            this.loading = true;
            let url = "api/v1/IntellAdvertiseApi/OrgUser/GetUserList";
            this.$https.get(url).then(
                res => {
                    for (let arraylist of res.data.data) {
                        arraylist.addTime = date(arraylist.addTime);
                    }
                    this.tableData4 = res.data.data;
                    this.loading = false;
                },
                err => {
                    console.log(err);
                }
            );
        },
        GetUserListstatus() {
            if (JSON.stringify(this.Arrayreceiving) == "{}") {
                alert("请选择账号名称");
            } else {
                this.DetectionTitle = "修改监测对象";
                this.Detectiondescribe = "请修改监测账户";
                this.Monitorstatus1 = true;
                this.Monitorstatus2 = false;
                this.users = this.Arrayreceiving.companyName;
                this.centerDialogVisible = false;
            }
        },
        commitMethod() {
            if (this.$route.query.parame == "see") {
                this.$router.push({
                    path: "/intgentMitorLibrary"
                });
            } else {
                this.warnuserName = true;
                this.accountnull = true;
                this.Monitornull = true;
                if (
                    this.status == "确定" ||
                    this.$route.query.parame == "modify"
                ) {
                    if (this.userName != "") {
                        this.warnuserName = false;
                    }
                    if (this.budgetvalue != "" && this.value != "") {
                        this.accountnull = false;
                    }
                    if (this.users != "") {
                        this.Monitornull = false;
                    }
                    if (
                        this.userName != "" &&
                        this.budgetvalue != "" &&
                        this.value != "" &&
                        this.users != ""
                    ) {
                        if (this.$route.query.parame == "modify") {
                            this.MonitorSave(this.MymonitorOrgUserId);
                            this.$router.push({
                                path: "/intgentMitorLibrary"
                            });
                        } else {
                            this.MonitorSave(
                                this.Arrayreceiving.orgUserInfoId
                            ).then(res => {
                                // //完成后走下一步
                                // this.$router.push({
                                //     path: "/intgentMitorLibrary/MRpublic",
                                //     query: {
                                //         parame: "add",
                                //         id: res.data.data.status,
                                //         type: 'up'
                                //     }
                                // });
                                this.$router.go(-1)
                            });
                        }
                    }
                }
            }
        },
        MonitorSave(orgUserInfoId) { 
            return new Promise(success => {
                let url = "api/v1/IntellAdvertiseApi/Monitor/Save"; 
                let operator;
                if (this.value == 1) {
                    operator = 1;
                } else {
                    operator = 2;
                }
               
                let obj = {
                    intelMonitorId: this.$route.query.id,
                    intelMonitorName: this.userName,
                    operator: operator,
                    amount: this.budgetvalue,
                    monitorOrgUserId: orgUserInfoId,
                    userId: 0,
                    IsOpen: this.checked ? 1 : 0
                }; 
                 //console.log(obj)
                this.$https.post(url, JSON.stringify(obj)).then(res => {
                    success(res);
                });
            });
        },
        Getmodify() {
            let  url =
                    "/api/v1/IntellAdvertiseApi/Monitor/Get?id=" +
                    this.$route.query.id +
                    ""; 
            this.$https.get(url).then(
                res => { 
                    this.userName = res.data.data.intelMonitorName;
                    this.budgetvalue = "" + res.data.data.amount;
                    if (res.data.data.operator == 1) {
                        this.value = 1;
                    } else {
                        this.value = '小于等于';
                    }
                    this.checked = res.data.data.isOpen == 0 ? false : true
                    this.users = res.data.data.monitorOrgUserName;
                    this.fullscreenLoading = false;
                    this.MymonitorOrgUserId = res.data.data.monitorOrgUserId;
                },
                err => {
                    console.log(err);
                }
            );
        }
    }
};
</script>