<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.negative_index {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    animation: animation1 0.5s ease-out;
    -webkit-animation: animation1 0.5s ease-out;
    .ad_section {
        border: 1px solid #ebeef5;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 6px;
        background: #fff;
        width: 600px;
        height: 510px;
        position: absolute;
        margin: auto;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0; 
        &.ad_te_section {
            height: 460px;
        }
        h1 {
            font-size: 16px;
            margin-bottom: 10px;
        }
        h2 {
            width: 100%;
            border-bottom: 1px solid @border;
            line-height: 40px;
            display: flex;
            justify-content: center;
            span {
                display: block;
                line-height: 39px;
                width: 120px;
                text-align: center;
                margin: 0 14px;
                cursor: pointer;
                border: none;
                &.span_checked {
                    color: @color;
                    font-weight: bold;
                    border-bottom: 1px solid @color;
                }
            }
        }
    }
    @keyframes animation1 {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @-webkit-keyframes animation1 {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    .reaio_index {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        padding: 20px 30px;
        position: relative; 
    }
    .add_index {
        box-sizing: border-box;
        padding-left: 150px;
        margin-top: 10px;
    }
    .add_input {
        display: flex;
        input {
            width: 290px;
            height: 40px;
            border: 1px solid @border;
            border-radius: 4px;
            padding-left: 14px;
            box-sizing: border-box;
            margin-right: 14px;
            outline: none;
            &:focus {
                border: 1px solid @color;
            }
        }
        span {
            width: 60px;
            height: 40px;
            box-sizing: border-box;
            border: 1px solid @border;
            text-align: center;
            line-height: 40px;
            cursor: pointer;
            border-radius: 4px;
            &:active {
                border: 1px solid @color;
            }
        }
    }
    .keyword_list {
        width: 100%;
        border: 1px solid @border;
        height: 160px;
        margin-top: 20px;
        overflow-y: auto;
        li {
            width: 100%;
            height: 40px;
            display: flex;
            &:nth-child(1) {
                background: #f7f7f7;
            }
            span {
                display: block;
                text-align: center;
                line-height: 40px;
                border-right: 1px solid @border;
                border-bottom: 1px solid @border;
                &:nth-child(1) {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                &:nth-child(3) {
                    cursor: pointer;
                    border-right: none;
                }
            }
        }
    }
    .btn1 {
        display: flex;
        width: 600px;
        height: 40px;
        position: absolute;
        bottom: 20px;
        left: 0;
        justify-content: center;
        button {
            width: 100px;
            margin: 0 10px;
        }
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
            border: 1px solid @border;
            text-align: center;
            line-height: 70px;
            i {
                font-size: 40px;
            }
        }
    }
    .file_ul_box {
        width: 100%;
        max-height: 100px;
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
            border: 1px solid @border;
            color: @color;
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
    .div_kong{
        text-align: center;
        line-height: 120px;
    }
    .a_class{
            position: absolute;
            cursor: pointer;
            color: @color;
            right: 30px;
            top: 100px;
        }
}
</style>
<style lang="less">
.negative_index {
    .add_index {
        .el-select {
            width: 290px !important;
            margin-bottom: 5px;
        }
    }
    .keyword_list {
        .el-select {
            width: 120px;
        }
        .el-select {
            height: 32px !important;
        }
        .el-input__inner {
            height: 32px !important;
        }
        .el-input .el-input--suffix .is-focus {
            height: 32px !important;
        }
    }
}
</style>

<template>
    <div class="negative_index">
        <div :class="{ad_section: ls, ad_te_section: type == '广告组'}">
            <h1>添加否定关键词</h1>
            <h2>
                <span :class="{span_checked: commonts == 1}" @click="commonts = 1">手动添加</span>
                <span :class="{span_checked: commonts == 2}" @click="commonts = 2">上传否定关键词</span>
            </h2>
            <div class="reaio_index" v-if="type == '广告系列'">
                <el-radio v-model="radio" label="1">添加至广告系列</el-radio>
                <el-radio v-model="radio" label="2">添加至广告组</el-radio> 
            </div>
            <div class="add_index">
                <el-select v-model="value" placeholder="请选择" v-if="radio == '2'">
                    <el-option v-for="item in options" :key="item.value" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
                <div class="add_input" v-if="commonts == 1">
                    <input type="text" class="add_name" placeholder="请输入关键词" v-model="keyName">
                    <span @click="addClick">添加</span>
                </div>
                <a href="../../../static/否定关键词示例.xlsx" class="a_class" download="" v-if="commonts == 2">下载示例</a>
            </div>
            <ul class="keyword_list" v-if="commonts == 1">
                <li>
                    <span style="width: 50%">关键词</span>
                    <span style="width: 30%">匹配类型</span>
                    <span style="width: 20%">操作</span>
                </li>
                <div v-if="keywordList.length == 0" class="div_kong">
                        暂无数据
                </div>
                <li v-for="(ele,index) in keywordList" :key="index">
                    <span style="width: 50% ; color: #2d76ed">{{ele.keyName}}</span>
                    <span style="width: 30%">
                        <el-select v-model="ele.value" placeholder="请选择">
                            <el-option v-for="item in ele.options" :key="item" :label="item" :value="item.id">
                            </el-option>
                        </el-select>
                    </span>
                    <span style="width: 20%" @click="remove(index)">删除</span>
                </li>
            </ul>

            <!-- 文件列表 -->
            <div class="file_ul_box" v-if="commonts == 2">
                <ul class="file_ul"> 
                    <li v-for="(ele,index) in fileList" :key="index">
                        {{ele.name}}
                        <img src="../../images/components/u132.png" alt="" @click="removefile(index)">
                    </li>
                </ul>
            </div>
            <!-- 多个上传 -->
            <div class="file_input" v-if="commonts == 2">
                <input type="file" name="" id="" multiple @change="getFile($event)" v-if="commonts == 2">
                <span>
                    <i class="iconfont icon-adds"></i>
                </span>
            </div> 
            <div class="btn1" v-if="commonts == 1">
                <el-button @click="$parent.NegativeShow = false">取消</el-button>
                <el-button type="primary" @click="ok">确定</el-button>
            </div>
            <div class="btn1" v-if="commonts == 2">
                <el-button @click="$parent.NegativeShow = false">取消</el-button>
                <el-button type="primary" @click="up">上传</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ls: true,
            commonts: 1,
            radio: "1",
            options: [],
            value: "",
            keyName: "",
            keywordList: [
                // {
                //     keyName: '',
                //     options:['广泛匹配','精准匹配'],
                //     value: '广泛匹配'
                // }
            ],
            fileList: []
        };
    },

    props: {
        type: {}
    },

    components: {},

    computed: {},

    created() {
        this.AjaxGetList();
    },

    updated() {},

    mounted() {},

    destroyed() {},

    methods: {
        addClick() {
            let num = 0;
            if (this.keyName != "") {
                this.keywordList.map((ele, index) => {
                    if (ele.keyName == this.keyName) {
                        this.$store.commit("SET_SHOW_TRUE", {
                            value: "不能插入重复关键词",
                            type: 3
                        });
                        num = 1;
                    }
                });
                if (num != 1) {
                    this.keywordList.push({
                        keyName: this.keyName,
                        options: ["广泛匹配", "精准匹配"],
                        value: "广泛匹配"
                    });
                }
            }
            this.keyName = "";
        },
        remove(index) {
            this.keywordList.splice(index, 1);
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
        ok() {
            if (this.keywordList.length == 0) {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "添加数据不能为空",
                    type: 3
                });
                return false;
            }
            let arr = [];
            this.keywordList.map(ele => {
                let obj = {
                    CampaignId: this.$route.params.listId,
                    MatchType: ele.value == "广泛匹配" ? "EXACT" : "BROAD",
                    Text: ele.keyName
                };
                if (this.radio == "2") {
                    obj.AdgroupId = this.value;
                }
                if (this.type == "广告组") {
                    obj.AdgroupId = this.$route.params.keyId;
                }
                arr.push(obj);
            });
            this.$emit("callback", { data: arr, type: "添加" });
            this.$parent.NegativeShow = false;
        },
        up() {
            if (this.fileList.length == 0) {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "上传文件不能为空",
                    type: 3
                });
                return false;
            }
            let obj = {
                campaignid: this.$route.params.listId,
                filelist: this.fileList
            };
            if (this.radio == "2") {
                obj.AdgroupId = this.value;
            }
            if (this.type == "广告组") {
                obj.AdgroupId = this.$route.params.keyId;
            }
            //console.log(obj)
            this.$emit("callback", { data: obj, type: "上传" });
            this.$parent.NegativeShow = false;
        },
        AjaxGetList() {
            let url =
                "/api/v1/IntellAdvertiseApi/AdGroup/GetAdGroupList?cid=" +
                this.$route.params.listId;
            this.$https.get(url).then(res => {
                this.options = res.data.data;
            });
        }
    }
};
</script>