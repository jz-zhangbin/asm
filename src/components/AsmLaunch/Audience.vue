<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.audience_index {
    margin-top: 10px;
    width: 540px;
    height: 530px;
    border: 1px solid @border;
    box-sizing: border-box;
    padding: 40px 40px 0 60px;
    background: #fff;
    section {
        display: flex;
        margin-bottom: 18px;
        p {
            margin-right: 14px;
            line-height: 40px;
        }
        &:nth-child(1) {
            margin-left: -28px;
            input {
                width: 240px;
                height: 38px;
                outline: none;
                border: 1px solid @border;
                border-radius: 4px;
                margin-bottom: 8px;
                padding-left: 10px;
                &:focus {
                    border: 1px solid @color;
                }
            }
            div {
                color: red;
                font-size: 12px;
            }
        }
        .check {
            display: flex;
            span {
                display: block;
                border: 1px solid @border;
                border-radius: 4px;
                display: flex;
                align-items: center;
                padding: 10px 10px;
                cursor: pointer;
                margin-right: 14px;
                float: left;
                cursor: pointer;
                &.span_checked {
                    border: 1px solid @color;
                }
            }
        }
        .select_div {
            display: flex;
            align-items: center;
            height: 40px;
            select {
                width: 70px;
                padding-left: 10px;
                height: 40px;
                border: 1px solid @border;
                border-radius: 4px;
            }
            span {
                margin: 0 10px;
            }
            button {
                height: 40px;
                margin-left: 30px;
            }
        }
        .select_spandiv {
            margin-top: 20px;
            display: flex;
            width: 400px;
            padding-top: 15px;
            border-top: 1px solid @border;
            flex-wrap: wrap;
            max-height: 100px;
            overflow-y: auto;
            max-width: 320px;
            span {
                height: 38px;
                width: 90px;
                padding-left: 18px;
                box-sizing: border-box;
                line-height: 38px;
                margin-right: 14px;
                position: relative;
                display: block;
                background: #f7f7f7;
                margin-bottom: 14px;
                i {
                    position: absolute;
                    right: 6px;
                    top: 1px;
                    cursor: pointer;
                }
            }
        }
    }
    .bom_btn {
        display: flex;
        justify-content: center;
        button {
            width: 120px;
            margin: 0 16px;
        }
    }
}
</style>
<template>
    <div class="audience_index">
        <section>
            <p>设置模板名称</p>
            <div>
                <input type="text" v-model="audienceName" placeholder="请设置模板名称">
                <div>确定后自动保存为受众模板，设置名称方便选择</div>
            </div>
        </section>
        <section>
            <p>投放设备</p>
            <div class="check">
                <el-checkbox-group v-model="equipment1">
                    <span v-for="(ele,index) in equipment2" :key="index" :class="{span_checked: equipment1.indexOf(ele) != -1}">
                        <el-checkbox :label="ele">{{ele=='ALL' ? 'IPHONE/IPAD' : ele}}</el-checkbox>
                    </span>
                </el-checkbox-group>
            </div>
        </section>
        <section>
            <p>受众类型</p>
            <div class="check">
                <el-checkbox-group v-model="audienceType1">
                    <span v-for="(ele,index) in audienceType2" :key="index" :class="{span_checked: audienceType1.indexOf(ele) != -1}">
                        <el-checkbox :label="ele">
                            {{ele == 'ND' ? '未下载用户' : '所有用户'}}
                        </el-checkbox>
                    </span>
                </el-checkbox-group>
            </div>
        </section>
        <section>
            <p>受众性别</p>
            <div class="check">
                <el-checkbox-group v-model="sex1">
                    <span v-for="(ele,index) in sex2" :key="index" :class="{span_checked: sex1.indexOf(ele) != -1}">
                        <el-checkbox :label="ele">
                            {{ele == 'ALL' ? '所有' : ''}} {{ele == 'M' ? '男' : ''}} {{ele == 'F' ? '女' : ''}}
                        </el-checkbox>
                    </span>
                </el-checkbox-group>
            </div>
        </section>
        <section>
            <p>受众年龄</p>
            <div>
                <div class="select_div">
                    <select v-model="age1">
                        <option :value="ele" v-for="(ele,index) in selection1" :key="index">{{ele}}</option>
                    </select>
                    <span v-if="age1 != '不限'">-</span>
                    <select v-if="age1 != '不限'" v-model="age2">
                        <option :value="ele" v-for="(ele,index) in selection2" :key="index">{{ele}}</option>
                    </select>
                    <el-button type="primary" @click="add">添加</el-button>
                </div>
                <div class="select_spandiv">
                    <span v-for="(ele,index) in agelist" :key="index">{{ele.star}}{{ele.end == '' ? '' : '-'+ele.end}}
                        <i class="iconfont icon-icon-test1" @click="remove(index)"></i>
                    </span>
                </div>
            </div>
        </section>
        <div class="bom_btn">
            <el-button @click="cancel">取消</el-button>
            <el-button type="primary" @click="ok">确定</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selection1: [
                "不限",
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31,
                32,
                33,
                34,
                35,
                36,
                37,
                38,
                39,
                40,
                41,
                42,
                43,
                44,
                45,
                45,
                46,
                47,
                48,
                49,
                50,
                51,
                52,
                53,
                54,
                55,
                56,
                57,
                58,
                59,
                60,
                61,
                62,
                63,
                64,
                65
            ],
            selection2: [
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31,
                32,
                33,
                34,
                35,
                36,
                37,
                38,
                39,
                40,
                41,
                42,
                43,
                44,
                45,
                45,
                46,
                47,
                48,
                49,
                50,
                51,
                52,
                53,
                54,
                55,
                56,
                57,
                58,
                59,
                60,
                61,
                62,
                63,
                64,
                65
            ],
            equipment1: ["ALL"],
            equipment2: ["ALL", "IPHONE", "IPAD"],
            audienceType1: ["ND"],
            audienceType2: ["ND", "ALL"],
            agelist: [],
            audienceName: "",
            sex1: ["ALL"],
            sex2: ["ALL", "M", "F"],
            age1: "不限",
            age2: "65"
        };
    },

    props: {
        AudienceTemplateEditList: {}
    },

    components: {},

    computed: {},

    created() {
        if (this.$parent.radio == "1") {
            this.audienceName = this.AudienceTemplateEditList.templateName;
            let arr = [];
            this.AudienceTemplateEditList.audienceAge.map((ele, index) => {
                if (ele == null) {
                    arr.push({
                        star: "不限",
                        end: ""
                    });
                } else {
                    arr.push({
                        star: ele.minAge,
                        end: ele.maxAge
                    });
                }
            });
            this.equipment1 = this.AudienceTemplateEditList.audienceDevice;
            this.audienceType1 = this.AudienceTemplateEditList.audienceType;
            this.agelist = arr;
            this.sex1 = this.AudienceTemplateEditList.audienceGender;
        }
    },

    updated() {},

    mounted() {},

    destroyed() {},

    methods: {
        cancel() {
            if (this.$parent.radio == "1") {
                this.$parent.setmoShow = false;
            }
            this.$parent.radio = "1";
        },
        add() {
            if (this.age1 == "不限") {
                let obj = { star: "不限", end: "" };
                for (var i = 0; i < this.agelist.length; i++) {
                    if (
                        JSON.stringify(this.agelist[i]) == JSON.stringify(obj)
                    ) {
                        this.$store.commit("SET_SHOW_TRUE", {
                            value: "年龄不能重复",
                            type: 1
                        });
                        return false;
                        break;
                    }
                }
                this.agelist.push({ star: "不限", end: "" });
            } else {
                let obj = { star: this.age1, end: this.age2 };
                for (var i = 0; i < this.agelist.length; i++) {
                    if (
                        JSON.stringify(this.agelist[i]) == JSON.stringify(obj)
                    ) {
                        this.$store.commit("SET_SHOW_TRUE", {
                            value: "年龄不能重复",
                            type: 1
                        });
                        return false;
                        break;
                    }
                }
                this.agelist.push({ star: this.age1, end: this.age2 });
            }
        },
        fn() {},
        remove(index) {
            this.agelist.splice(index, 1);
        },
        ok() {
            if (this.audienceName == "") {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "模板名称不能为空",
                    type: 1
                });
                return false;
            }
            if (this.equipment1.length == 0) {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "请选择投放设备",
                    type: 1
                });
                return false;
            }
            if (this.audienceType1.length == 0) {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "请选择受众类型",
                    type: 1
                });
                return false;
            }
            if (this.sex1.length == 0) {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "请选择受众性别",
                    type: 1
                });
                return false;
            }
            if (this.agelist.length == 0) {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "请选择受众年龄",
                    type: 1
                });
                return false;
            }
            if (this.$parent.radio == "1") {
                this.AjaxAdd();
            } else {
                this.AjaxAdd();
            }
        },
        AjaxAdd() {
            this.$parent.loading = this.$loading(this.$parent.loadingopaction);
            let url =
                "/api/v1/IntellAdvertiseApi/AdGroup/AddAudienceTemplateModel";
            let arr = [];

            this.agelist.map((ele, index) => {
                if (ele.star == "不限") {
                    arr.push(null);
                } else {
                    arr.push({
                        Minage: this.agelist[index].star,
                        Maxage: this.agelist[index].end
                    });
                }
            });
            let obj = {
                templateName: this.audienceName,
                audienceDevice: this.equipment1,
                audienceType: this.audienceType1,
                audienceGender: this.sex1,
                audienceAge: arr
            };
            if (this.$parent.radio == "1") {
                obj.audienceTemplateId = this.AudienceTemplateEditList.audienceTemplateId;
            }

            this.$https.post(url, JSON.stringify(obj)).then(res => {
                if (res.data.resultCode == 1000) {
                    this.$parent.audienceListObj = res.data.data;
                    this.$parent.loading.close();
                    this.$parent.moclle = true;
                    this.$parent.setmoShow = false;
                    this.$parent.AjaxGetAudienceTemplatesByName();
                }
            });
        }
    }
};
</script>