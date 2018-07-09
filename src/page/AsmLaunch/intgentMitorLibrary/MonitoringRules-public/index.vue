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
        padding: 0px 20px 15px;
        margin: 0 12px;
        h2 {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            padding: 15px 0 0 0px;
        }
        .sostyle {
            padding: 22px 0 0 15px;
        }
        #textinput {
            width: 120px;
            height: 40px;
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
        margin-top: 30px;
        margin-bottom: 12px;
    }
    .advuser_form_ps {
        font-weight: 600;
        margin-top: 36px;
        margin-bottom: 8px;
        span {
            color: red;
        }
    }
    .advuser_form_ps_border {
        font-weight: 600;
        margin-top: 30px;
        margin-bottom: 8px;
        border-bottom: 1px solid #dee2e6;
        padding-bottom: 23px;
        span {
            color: red;
        }
    }
    .advuser_form_ps_borders {
        font-weight: 100;
        margin-top: 30px;
        margin-bottom: 8px;
        span {
            color: red;
        }
    }
    .advuser_form_input {
        height: 40px;
        border: 1px solid @border;
        border-radius: 4px;
        outline: none;
        padding-left: 12px;
        line-height: 40px;
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
                    border: 1px solid @btnhover;
                    background-color: @btnhover;
                }
                &:active {
                    border: 1px solid @btnhover;
                    background-image: none;
                    outline: 0;
                    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                }
            }
        }
    }

    .boxwidth {
        width: 100%;
        height: 300px;
        overflow-y: scroll;
        margin-top: 10px;
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
.el-tree-node__content {
    height: 32px !important;
}
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
        width: 100px;
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
        padding-left: 11px;
    }
    .ceatdate {
        color: #868686;
        padding-left: 34px;
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
    .ele_botton_my {
        button {
            width: 54px;
            height: 54px;
            background: #fff;
            border: 1px solid #e3e3e3;
            span {
                i {
                    color: #000;
                    font-size: 20px;
                }
            }
        }
    }
    .ruleList {
        width: 900px;
        ul {
            li {
                width: 100%;
                height: auto;
                padding: 8px;
                background: #f7f7f7;
                margin-bottom: 20px;
                position: relative;
                i {
                    position: absolute;
                    right: -4px;
                    top: -6px;
                }
                select {
                    width: 74px;
                    height: 40px;
                    margin-right: 10px;
                    line-height: 40px;
                    border: 1px solid #dee2e6;
                    border-radius: 5px;
                    margin-bottom: 10px;
                }
                .inputs {
                    box-sizing: border-box;
                    width: 90px;
                    height: 40px;
                    line-height: 40px;
                    padding-left: 5px;
                    border: 1px solid #dee2e6;
                    border-radius: 5px;
                    //display: none;
                    margin-left: 10px;
                }
                .inputs1 {
                    box-sizing: border-box;
                    width: 90px;
                    height: 40px;
                    line-height: 40px;
                    padding-left: 5px;
                    border: 1px solid #dee2e6;
                    border-radius: 5px;
                    margin-right: 10px;
                    margin-bottom: 10px;
                }
                .radio1 {
                    //display: none;
                }
                .SaveModificationBS {
                    height: 40px;
                    width: 120px;
                    white-space: nowrap;
                    background: #fff;
                    border: 1px solid #dcdfe6;
                    text-align: center;
                    line-height: 40px;
                    border-radius: 5px;
                    margin: 0 auto;
                    cursor: pointer;
                    box-sizing: border-box;
                    &:hover {
                        color: #409eff;
                        border-color: #c6e2ff;
                        background-color: #ecf5ff;
                    }
                }
                .SaveModification {
                    height: 40px;
                    width: 120px;
                    color: #fff;
                    background-color: #409eff;
                    border-color: #409eff;
                    text-align: center;
                    line-height: 40px;
                    border-radius: 5px;
                    margin: 0 auto;
                    cursor: pointer;
                    &:hover {
                        background: #66b1ff;
                        border-color: #66b1ff;
                        color: #fff;
                    }
                }
            }
        }
    }
}
.input_search {
    border-radius: 4px;
    height: 28px;
    display: flex;
    position: relative;
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
    <div class="publicintgentMitor">
        <v-header></v-header>
        <div class="adver_nav">
            <v-nav :pageName='pageName' :routeList='routeList'></v-nav>
        </div>
        <div class="advuer_content">
            <h2>添加</h2>
            <div class="advuer_content_top">
                <div class="advuser_form">
                    <p class='advuser_form_ps'>智能监测名称：{{topData.monitorOrgUserName}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日预算：
                        <span v-if="$route.query.parame=='add'">{{topData.operator == '1' ? '≥' : '＜'}} ${{topData.amount}}</span>
                        <span v-else>{{topData.dailyBudget}}</span>
                    </p>
                    <p class='advuser_form_ps_border'>监测账户：
                        <span>{{topData.intelMonitorName}}</span>
                    </p>

                    <p class='advuser_form_p'>监测规则</p>
                    <div class="ruleList">
                        <ul>
                            <li v-for="(ele,index) in ruleList" :key="index">
                                <div class="prentlist" v-for="(ele2,index2) in ele.list" :key="index2">
                                    <i class="el-icon-error" @click="Close(index,index2)" v-if="ele.show"></i>
                                    <div class="rulelistkmain">
                                        <select v-model="ele2.huafei" :disabled='!ele.show'>
                                            <option :value="ele3" v-for="(ele3,index3) in ele2.huafeiList" :key="index3">{{ele3}}</option>
                                        </select>
                                        <select v-model="ele2.fanwei" :disabled='!ele.show'>
                                            <option :value="ele4" v-for="(ele4,index4) in ele2.fanweiList" :key="index4">{{ele4}}</option>
                                        </select>
                                        <input type="text" v-model="ele2.fanweiValue" class="inputs1" placeholder="请输入" :disabled='!ele.show'>
                                        <select style="width:130px" :disabled='!ele.show' class="seclectclick" v-model="ele2.type" @change="typeChange(index,index2,ele2.type)">
                                            <option :value='ele5' v-for="(ele5,index5) in ele2.typeList" :key="index5">{{ele5}}</option>
                                        </select>
                                        <span v-if="index2 == ele.list.length-1 && ele2.type != '并且' && ele2.type != '暂停关键词' && ele2.type != '暂停广告组'">
                                            <label class="radio1"><input :disabled='!ele.show' type="radio" class="radio1" v-model="ele2.adjustment" value='num1' checked="checked" />数值调整</label>
                                            <label class="radio1"><input :disabled='!ele.show' type="radio" class="radio1" v-model="ele2.adjustment" value='num2' checked="checked" />比例调整</label>
                                            <input type="text" :disabled='!ele.show' class="inputs" placeholder="请输入" v-model="ele2.adjustmentValue">
                                            <span>调整次数</span>
                                            <input type="text" :disabled='!ele.show' class="inputs" placeholder="请输入" v-model="ele2.adjustmentNum">
                                        </span>
                                    </div>
                                </div>
                                <div class="SaveModification" @click="rulebtnClick(index,index2)" v-if="!isdisabledFns">
                                    {{ele.show ? '保存' : '编辑'}}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="ele_botton_my" v-if="!isdisabledFns">
                        <el-button size="small" type="primary" @click="addrulrList">
                            <i class="el-icon-plus"></i>
                        </el-button>
                    </div>

                    <p class='advuser_form_p' style="  border-top: 1px solid #dee2e6;padding-top: 18px;">选择监测对象</p>
                    <div class="bootonstyle">
                        <el-button v-show="Monitor" @click="centerDialogVisible = true">选择监测对象</el-button>
                        <span v-if="detectionObjectList.length != 0">
                            状态：已选择
                            <span class="red">{{detectionObjectList.length}}个</span>对象
                        </span>
                        <span v-if="detectionObjectList.length == 0">
                            状态：
                            <span class="red">未选择监测对象</span>
                        </span>
                    </div>

                    <p class='advuser_form_ps_borders'>监测频率
                        <span>（设置时间后将定时监测投放状态）</span>
                    </p>
                    <div class="publicstyle">
                        <span class="pubspan">每</span>
                        <el-select v-model="value" placeholder="请选择" :disabled="isdisabledFn">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" readonly>
                            </el-option>
                        </el-select>
                    </div>
                    <p class='advuser_form_p'>监测执行时间</p>
                    <div class="publicstyle">
                        <span class="pubspan"></span>
                        <el-select v-model="values" placeholder="请选择" :disabled="isdisabledFn">
                            <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value" readonly>
                            </el-option>
                        </el-select>
                        <p class='advuser_form_p'>
                            <span class="pubspan"></span> 选择时间段
                        </p>
                        <div>
                            <span class="pubspan"></span>
                            <el-time-select placeholder="起始时间" :disabled="isdisabledFns" v-model="startTime" :picker-options="{
                              start: '00:00',
                              step: '00:30',
                              end: '24:00'
                            }">
                            </el-time-select>
                            &nbsp;&nbsp;&nbsp;
                            <el-time-select placeholder="结束时间" :disabled="isdisabledFns" v-model="endTime" :picker-options="{
                              start: '00:00',
                              step: '00:30',
                              end: '24:00',
                              minTime: startTime
                            }">
                            </el-time-select>
                        </div>
                    </div>
                    <p class='advuser_form_p'>监测规则名称</p>
                    <div>
                        <input type="text" :disabled="isdisabledFn" placeholder="设置智能监测名称" class="advuser_form_input" style="width: 300px" v-model="userName">
                        <span class="warning" v-if="warnuserName">监测规则名称不能为空</span>
                    </div>
                    <h5>设置名称后将自动保存至智能监测库，便于再次使用</h5>
                    <p class='advuser_form_p'>智能监测调整反馈邮箱</p>
                    <div>
                        <input type="text" :disabled="isdisabledFn" placeholder="设置反馈邮箱" class="advuser_form_input" style="width: 300px" v-model="userEmail">
                        <span class="warning" v-if="warnuserEmail">邮箱不能为空</span>
                    </div>
                    <h5>设置邮箱后将及时反馈智能监测调整结果</h5>
                    <div class="adver_btn">
                        <div class="one" v-show="show" @click="$router.go(-1)">取消</div>
                        <div class="two" @click="okBtn(status)">{{status}}</div>
                    </div>
                </div>
            </div>
        </div>

        <el-dialog title="选择监测对象" :visible.sync="centerDialogVisible" width="527" left>
            <h5>所属账户名称：
                <span style="color:red;">{{topData.intelMonitorName}}</span>
            </h5>
            <div class="boxwidth">
                <el-tree :props="props1" @check='check' @check-change='checkChange' :load="loadNode1" lazy show-checkbox ref="trees" node-key="id" @node-expand='nodeExpand'>
                </el-tree>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="treeokBtn">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
let moban = {
    show: true,
    list: [
        {
            huafei: "花费",
            huafeiList: [
                "花费",
                "平均CPC",
                "平均CPA",
                "曝光数",
                "点击数",
                "下载数",
                "点击率",
                "转化率"
            ],
            fanwei: "≥",
            fanweiList: ["≥", "＜"],
            fanweiValue: "",
            type: "调高出价/广告组",
            typeList: [
                "调高出价/广告组",
                "调低出价/广告组",
                "暂停广告组",
                "调高出价/关键词",
                "调低出价/关键词",
                "暂停关键词",
                "并且"
            ],
            adjustment: "num1",
            adjustmentValue: "",
            adjustmentNum: "",
            intellMonitorRuleId: "", //编辑传给后台
            intellMonitorRuleName: ""
        }
    ]
};
import NavList from "@components/AsmLaunch/Nav-List";
import KeySearch from "@components/AsmLaunch/Key-Search";
export default {
    data() {
        return {
            select: "",
            value: "",
            values: "",
            show: false,
            Monitor: false,
            pageName: "广告中心",
            checked: false,
            status: "",
            centerDialogVisible: false,
            isdisabledFn: true,
            isdisabledFns: false,
            ruleList: ["11111"],
            length: 1,
            startTime: "",
            endTime: "",
            userName: "",
            userEmail: "",
            routeList: [
                //面包屑
                {
                    name: "广告中心",
                    path: "/advertising-center"
                },
                {
                    name: "智能监测库",
                    path: "/intgentMitorLibrary"
                },
                {
                    name: "",
                    path: "/intgentMitorLibrary/public"
                }
            ],
            multipleSelection: [],
            show: false, //控制搜索显示
            valuedata: "", //搜索内容
            placevaluedata: "请输入智能监测名称", //搜索提示
            inputList: [], //搜索列表
            value: "",
            ruleLists: [],
            options: [
                {
                    value: 1,
                    label: "30分钟"
                },
                {
                    value: 2,
                    label: "1小时"
                },
                {
                    value: 4,
                    label: "2小时"
                },
                {
                    value: 6,
                    label: "3小时"
                },
                {
                    value: 12,
                    label: "6小时"
                },
                {
                    value: 24,
                    label: "12小时"
                },
                {
                    value: 48,
                    label: "24小时"
                }
            ],
            options1: [
                {
                    value: 1,
                    label: "立即"
                },
                {
                    value: 2,
                    label: "周一至周五"
                },
                {
                    value: 3,
                    label: "每周末"
                }
            ],
            radio: "1",
            props1: {
                label: "name",
                children: "zones",
                isLeaf: "leaf"
            },
            topData: {},
            detectionObjectList: [],
            ruleList: [],
            guroupList: [],
            checkedGroupList: [],
            loading: null,
            loadingopaction: {
                lock: true,
                text: "请稍后",
                spinner: "el-icon-loading",
                background: "rgba(0, 0, 0, 0.7)"
            },
            checkedKeys: []
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
                this.show = true;
                this.Monitor = true;
                this.isdisabledFn = false;
                this.AjaxGetTop();
                break;
            case "modify":
                this.status = "确定";
                this.show = true;
                this.Monitor = true;
                this.isdisabledFn = false;
                this.AjaxGetRule();
                break;
            case "see":
                this.status = "确定";
                this.isdisabledFns = true;
                this.AjaxGetRule();
                break;
            default:
                return false;
        }
    },

    destroyed() {},

    methods: {
        changeInputList(value) {
            //input-list点击请求
            this.valuedata = this.inputList[value].name;
        },
        loadNode1(node, resolve) {
            //插入子节点
            if (node.level === 0) {
                return resolve(this.guroupList);
            }
            if (node.level > 1) return resolve([]);
            //如果下面有子集可以选中，如果没有自己不可选择
            this.AjaxGetAdGroups(node, resolve, node.data.id);
        },
        typeChange(index1, index2, value) {
            if (value == "并且") {
                this.ruleList[index1].list.push(
                    JSON.parse(JSON.stringify(moban.list[0]))
                );
            } else {
                this.ruleList[index1].list.splice(
                    index2 + 1,
                    this.ruleList[index1].list.length
                );
            }
        },
        rulebtnClick(index1, index2) {
            this.ruleList[index1].show = !this.ruleList[index1].show;
        },
        Close(index1, index2) {
            this.ruleList.splice(index1, 1);
        },
        addrulrList() {
            this.ruleList.push(JSON.parse(JSON.stringify(moban)));
        },
        nodeExpand(a, node, c) {
            //节点展开时间
            node.childNodes.map(ele => {
                this.detectionObjectList.map(ele2 => {
                    if (ele.data.id == ele2.adGroupId) {
                        this.checkedKeys.push(ele2.adGroupId);
                    }
                });
            });
            this.checkedKeys = [...new Set(this.checkedKeys)];
            this.$refs.trees.setCheckedKeys(this.checkedKeys);
        },
        check(a, b, c) {
            //复选框被点击时
            //console.log(a)
            this.checkedKeys.push(...b.checkedKeys);
            this.checkedKeys = [...new Set(this.checkedKeys)];
        },
        checkChange(a, b, c) { 
            //节点被取消
            if (!b) {
                this.checkedKeys.splice(this.checkedKeys.indexOf(a.id), 1);
            }
        },
        treeokBtn() {
            this.detectionObjectList = [];
            this.checkedGroupList = this.$refs.trees.getCheckedNodes();
            this.checkedGroupList.map(ele => {
                if (ele.campaignId) {
                    this.detectionObjectList.push(ele);
                }
            });
            this.centerDialogVisible = false;
        },
        okBtn(status) {
            if (this.$route.query.parame == "see") {
                this.$router.go(-1);
            } else {
                let num = 0;
                let ls = 0;
                let zheng = /^\d+(?=\.{0,1}\d+$|$)/;
                var emailTest = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/;
                this.ruleList.map((ele, index) => {
                    if (ele.show) {
                        num++;
                    }
                    ele.list.map((ele2, index2) => {
                        if (!zheng.test(ele2.fanweiValue)) {
                            ls++;
                        }
                        if (index2 == ele.list.length - 1) {
                            if (
                                !zheng.test(ele2.adjustmentValue) &&
                                ele2.adjustmentValue != ""
                            ) {
                                ls++;
                            }
                            if (
                                !zheng.test(ele2.adjustmentNum) &&
                                ele2.adjustmentNum != ""
                            ) {
                                ls++;
                            }
                        }
                    });
                });
                if (num != 0) {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "请设置监测规则",
                        type: 3
                    });
                    return false;
                }
                if (ls != 0) {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "所填内容必须大于等于0",
                        type: 3
                    });
                    return false;
                }
                if (this.detectionObjectList.length == 0) {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "选择监测对象",
                        type: 3
                    });
                    return false;
                }
                if (this.value == "") {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "请设置监测频率",
                        type: 3
                    });
                    return false;
                }
                if (this.values == "") {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "请设置执行时间",
                        type: 3
                    });
                    return false;
                }
                if (this.startTime == "" || this.endTime == "") {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "请设置时间段",
                        type: 3
                    });
                    return false;
                }
                if (this.userName == "") {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "请设置监测名称",
                        type: 3
                    });
                    return false;
                }
                if (this.userEmail == "") {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "请设置反馈邮箱",
                        type: 3
                    });
                    return false;
                }
                if (!emailTest.test(this.userEmail)) {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "邮箱格式不正确",
                        type: 3
                    });
                    return false;
                }
                let ajaxArr = [];
                this.ruleList.map((ele, index) => {
                    let obj = {
                        ruleIndex: index,
                        condition: []
                    };
                    ele.list.map((ele2, index2) => {
                        obj.condition.push({
                            ActionType:
                                ele2.huafeiList.indexOf(ele2.huafei) + 1,
                            Operator: ele2.fanweiList.indexOf(ele2.fanwei) + 1,
                            ActionVal: ele2.fanweiValue
                        });
                        if (index2 == ele.list.length - 1) {
                            if (
                                ele2.typeList.indexOf(ele2.type) == 2 ||
                                ele2.typeList.indexOf(ele2.type) == 5
                            ) {
                                obj.NumberOfOperations = 1;
                                obj.OperateType =
                                    ele2.typeList.indexOf(ele2.type) + 1;
                            } else {
                                obj.OperateType =
                                    ele2.typeList.indexOf(ele2.type) + 1;
                                obj.AdjustType =
                                    ele2.adjustment == "num1" ? 1 : 2;
                                obj.AdjustVal = ele2.adjustmentValue;
                                obj.NumberOfOperations =
                                    ele2.adjustmentNum == ""
                                        ? 1
                                        : ele2.adjustmentNum;
                            }
                        }
                    });
                    obj.condition = JSON.stringify(obj.condition);
                    ajaxArr.push(obj);
                });
                let ruleAdGroups = [];
                this.detectionObjectList.map(ele => {
                    if (ele.campaignId) {
                        ruleAdGroups.push({
                            ruleId: 0,
                            monitorId: this.topData.intelMonitorId,
                            campaignId: ele.campaignId,
                            adGroupId: ele.id
                        });
                    }
                });
                let ajaxObj = {
                    feedbackEmail: this.userEmail,
                    iupr: this.value * 30, //检测频率
                    executeTime: this.values, //执行时间
                    monitorStartTime: this.startTime,
                    monitorEndTime: this.endTime,
                    intelMonitorId: this.topData.intelMonitorId, //头部id
                    intellMonitorRuleName: this.userName,
                    ruleAdGroups: ruleAdGroups,
                    ruleActions: ajaxArr //规则
                };
                if (this.$route.query.parame == "modify") {
                    ajaxObj.intellMonitorRuleId = this.intellMonitorRuleId;
                    ajaxObj.intellMonitorRuleName = this.intellMonitorRuleName;
                }
                this.AjaxSaveRule(ajaxObj);
            }
        },
        AjaxSaveRule(obj) {
            this.loading = this.$loading(this.loadingopaction);
            let url = "/api/v1/IntellAdvertiseApi/Monitor/SaveRule";
            this.$https.post(url, JSON.stringify(obj)).then(res => {
                this.loading.close();
                if (res.data.resultCode == 1000) {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "创建成功",
                        type: 3
                    });
                    if (this.$route.query.id) {
                        this.$router.go(-1);
                    } else {
                        this.$router.push({
                            path: "/intgentMitorLibrary/main"
                        });
                    }
                } else {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "创建失败",
                        type: 3
                    });
                }
            });
        },
        AjaxGetTop() {
            this.loading = this.$loading(this.loadingopaction);
            let url =
                "/api/v1/IntellAdvertiseApi/Monitor/Get?id=" +
                this.$route.query.id;
            this.$https.get(url).then(res => {
                this.topData = res.data.data;
                //this.AjaxGetCampaignObject(415960)
                this.AjaxGetCampaignObject(res.data.data.orgId);
            });
        },
        AjaxGetCampaignObject(id) {
            let url =
                "/api/v1/IntellAdvertiseApi/Campaign/GetCampaignObjectByOrgId?orgid=" +
                id;
            this.$https.get(url).then(res => {
                this.loading.close();
                if (res.data.resultCode == 1000) {
                    let arr = res.data.data;
                    arr.map(ele => {
                        ele.disabled = true;
                    });
                    this.guroupList = arr;
                }
            });
        },
        AjaxGetAdGroups(node, resolve, id) {
            let url = "/api/v1/IntellAdvertiseApi/Monitor/GetAdGroups?id=" + id;
            this.$https.get(url).then(res => {
                if (res.data.resultCode == 1000) {
                    let data = res.data.data;
                    data.map(ele => {
                        ele.leaf = true;
                    });
                    resolve(data);
                    node.data.disabled = false;
                    data.map(ele => {
                        this.detectionObjectList.map(ele2 => {
                            if (ele.id == ele2.adGroupId) {
                                this.checkedKeys.push(ele2.adGroupId);
                            }
                        });
                    });
                    this.checkedKeys = [...new Set(this.checkedKeys)];
                    this.$refs.trees.setCheckedKeys(this.checkedKeys);
                } else {
                    resolve([]);
                }
            });
        },
        AjaxGetRule() {
            this.loading = this.$loading(this.loadingopaction);
            let url =
                "/api/v1/IntellAdvertiseApi/Monitor/GetRule?ruleId=" +
                this.$route.query.intellMonitorRuleId;
            this.$https.get(url).then(res => {
                let data = res.data.data;
                this.AjaxGetCampaignObject(data.orgId);
                this.intellMonitorRuleId = data.intellMonitorRuleId; //编辑传给后台
                this.intellMonitorRuleName = data.intellMonitorRuleName;
                this.value = parseInt(data.iupr / 30) + 1;
                this.values = data.executeTime * 1;
                this.startTime = data.monitorStartTime;
                this.endTime = data.monitorEndTime;
                this.userName = data.intellMonitorRuleName;
                this.userEmail = data.feedbackEmail;
                this.detectionObjectList = data.ruleAdGroups;
                //this.detectionObjectList = [];
                this.topData = {
                    monitorOrgUserName: data.monitorOrgUserName,
                    intelMonitorName: data.monitorName,
                    dailyBudget: data.dailyBudget,
                    intelMonitorId: data.intelMonitorId
                };
                let obj = res.data.data.ruleActions;
                obj.map((ele, index) => {
                    let obj = {
                        show: false,
                        list: []
                    };
                    ele.condition = JSON.parse(ele.condition);
                    ele.condition.map((ele2, index2) => {
                        let newobj = {
                            huafeiList: [
                                "花费",
                                "平均CPC",
                                "平均CPA",
                                "曝光数",
                                "点击数",
                                "下载数",
                                "点击率",
                                "转化率"
                            ],
                            fanweiList: ["≥", "＜"],
                            typeList: [
                                "调高出价/广告组",
                                "调低出价/广告组",
                                "暂停广告组",
                                "调高出价/关键词",
                                "调低出价/关键词",
                                "暂停关键词",
                                "并且"
                            ],
                            adjustmentNum: ele.numberOfOperations,
                            adjustmentValue: ele.adjustVal,
                            adjustment: ele.adjustType == 1 ? "num1" : "num2",
                            type:
                                moban.list[0].typeList[ele.operateType * 1 - 1],
                            fanwei:
                                moban.list[0].fanweiList[ele2.Operator * 1 - 1],
                            huafei:
                                moban.list[0].huafeiList[
                                    ele2.ActionType * 1 - 1
                                ],
                            fanweiValue: ele2.ActionVal
                        };
                        if (index2 != ele.condition.length - 1) {
                            newobj.type = "并且";
                        }
                        obj.list.push(newobj);
                    });
                    this.ruleList.push(obj);
                });
                //console.log(this.ruleList)
            });
        }
    }
};
</script>