<style lang='less' scoped>
@color: #2d76ed;
@font_color: #6c757d;
@border: #dee2e6;
.ad_index {
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
        padding: 20px;
        box-sizing: border-box;
        border-radius: 6px;
        background: #fff;
        width: 600px;
        height: 500px;
        position: absolute;
        margin: auto;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        h1 {
            font-size: 16px;
            margin-bottom: 30px;
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
    .budget_btn {
        display: flex;
        justify-content: center;
        margin-top: 40px;
        button {
            margin-right: 20px;
            width: 120px;
            height: 40px;
        }
    }
    .ad_cantant {
        width: 100%;
        padding: 0 50px;
    }
    .ad_cantant section {
        display: flex;
        margin-bottom: 14px;
        height: 40px;
        line-height: 40px;
        span {
            margin-left: 14px;
            color: red;
            font-size: 12px;
        }
    }
    .ad_cantant section p {
        margin-right: 16px;
    }
    .section_input {
        width: 150px;
        height: 40px;
        box-sizing: border-box;
        padding: 0 10px;
        border: 1px solid @border;
        border-radius: 4px;
        &:focus {
            border: 1px solid @color;
        }
    }
    .right-select {
        margin-left: 16px;
    }
}
</style>
<style lang="less">
.ad_index {
    .el-select {
        width: 150px;
    }
}
</style>

<template>
    <div class="ad_index">
        <section class="ad_section">
            <h1>编辑广告组</h1>
            <div class="ad_cantant">
                <section>
                    <p>
                        默认CPC
                    </p>
                    <input type="text" placeholder="输入CPC目标" class="section_input" v-model="defaultCPCBidAmount">
                    <span v-if="!editObjType.defaultCPCBidAmountType">当前为多个价格，不填写将不修改</span>
                </section>
                <section>
                    <p>
                        CPA目标
                    </p>
                    <input type="text" placeholder="输入CPA目标" class="section_input" v-model="cpaGoalamount">
                    <span v-if="!editObjType.cpaGoalamountType ">当前为多个价格，不填写将不修改</span>
                </section>
                <section>
                    <p>
                        投放设备
                    </p>
                    <el-select v-model="equipment">
                        <el-option v-for="(item , index) in equipmentList" :key="index" :label="item" :value="item">
                        </el-option>
                    </el-select>
                    <span v-if="!editObjType.deviceClassType ">当前设置为多个值</span>
                </section>
                <section>
                    <p>
                        用户类型
                    </p>
                    <el-select v-model="user">
                        <el-option v-for="(item , index) in userList" :key="index" :label="item" :value="item">
                        </el-option>
                    </el-select>
                    <span v-if="!editObjType.appDownLoadersType ">当前设置为多个值</span>
                </section>
                <section>
                    <p>
                        用户性别
                    </p>
                    <el-select v-model="sex">
                        <el-option v-for="(item , index) in sexList" :key="index" :label="item" :value="item">
                        </el-option>
                    </el-select>
                    <span v-if="!editObjType.genderType ">当前设置为多个值</span>
                </section>
                <section>
                    <p>
                        年龄范围
                    </p>
                    <el-select v-model="age1">
                        <el-option v-for="(item , index) in ageList1" :key="index" :label="item" :value="item">
                        </el-option>
                    </el-select>
                    <div v-if="age1 != '不修改' && age1 != '不限'" class="right-select">
                        <el-select v-model="age2">
                            <el-option v-for="(item , index) in ageList2" :key="index" :label="item" :value="item">
                            </el-option>
                        </el-select>
                    </div>
                    <span v-if="!editObjType.ageType">当前设置为多个值</span>
                </section>
            </div>
            <div class="budget_btn">
                <button @click="$parent.budgetShow = false" type="button" class="el-button el-button--default el-button--small">
                    <span>取消</span>
                </button>
                <button type="button" @click="btnclick" class="el-button el-button--default el-button--small el-button--primary ">
                    <span>确定</span>
                </button>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            equipmentList: ["不修改", "不限", "IPHONE", "IPAD"],
            userList: ["不修改", "所有用户", "未下载用户"],
            sexList: ["不修改", "不限", "男", "女"],
            ageList1: [
                "不修改",
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
            ageList2: [
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
            defaultCPCBidAmount: "",
            cpaGoalamount: "",
            equipment: "不修改",
            user: "不修改",
            sex: "不修改",
            age1: "不修改",
            age2: "65"
        };
    },

    props: {
        editObj: {},
        editObjType: {}
    },

    components: {},

    computed: {},

    created() {
        if (this.editObj.defaultCPCBidAmount == -1) {
            this.defaultCPCBidAmount = "";
        } else {
            this.defaultCPCBidAmount = this.editObj.defaultCPCBidAmount;
        }
        if (this.editObj.cpaGoalamount == -1) {
            this.cpaGoalamount = "";
        } else {
            this.cpaGoalamount = this.editObj.cpaGoalamount;
        }
        if (this.editObj.deviceClass == -1) {
            this.equipment = "不修改";
        } else {
            if (this.editObj.deviceClass.length > 1) {
                this.equipment = "不限";
            } else {
                this.equipment = this.editObj.deviceClass[0];
            }
        }
        if (this.editObj.appDownLoaders == -1) {
            this.user = "不修改";
        } else {
            if (this.editObj.appDownLoaders.length == 0) {
                this.user = "所有用户";
            } else {
                this.user = "未下载用户";
            }
        }
        if (this.editObj.gender == -1) {
            this.sex = "不修改";
        } else {
            if (this.editObj.gender.length == 0) {
                this.sex = "不限";
            } else {
                if (this.editObj.gender[0] == "M") {
                    this.sex = "男";
                } else {
                    this.sex = "女";
                }
            }
        }
        if (this.editObj.age == -1) {
            this.age1 = "不修改";
        } else {
            if (this.editObj.age[0].minAge == -1) {
                this.age1 = "不限";
            } else {
                this.age1 = this.editObj.age[0].minAge;
                this.age2 = this.editObj.age[0].maxAge;
            }
        }
    },

    updated() {},

    mounted() {},

    destroyed() {},

    methods: {
        btnclick() {
            if (
                this.defaultCPCBidAmount != "" &&
                this.defaultCPCBidAmount < 0
            ) {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "默认CPC不正确",
                    type: 3
                });
                return false;
            }
            if (this.cpaGoalamount != "" && this.cpaGoalamount < 0) {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "CPA目标不正确",
                    type: 3
                });
                return false;
            }
            let obj = {
                DefaultCPCBidAmount: "",
                CPAGoalamount: "",
                DeviceClass: "",
                AppDownLoaders: "",
                Age: "",
                Gender: "",
                CampaignId: this.$route.query.listId
            };
            // defaultCPCBidAmount: "",
            // cpaGoalamount: "",
            // equipment: "不修改",
            // user: "不修改",
            // sex: "不修改",
            // age1: "不修改",
            // age2: "65"
            if (this.defaultCPCBidAmount == "") {
                obj.DefaultCPCBidAmount = -1;
            } else {
                obj.DefaultCPCBidAmount = this.defaultCPCBidAmount * 1;
            }
            if (this.cpaGoalamount == "") {
                obj.CPAGoalamount = -1;
            } else {
                obj.CPAGoalamount = this.cpaGoalamount * 1;
            }
            switch (this.equipment) {
                case "不修改":
                    obj.DeviceClass = -1;
                    break;
                case "不限":
                    obj.DeviceClass = JSON.stringify(["IPHONE", "IPAD"]);
                    break;
                default:
                    obj.DeviceClass = JSON.stringify([this.equipment]);
                    break;
            }
            switch (this.user) {
                case "不修改":
                    obj.AppDownLoaders = -1;
                    break;
                case "所有用户":
                    obj.AppDownLoaders = "[]";
                    break;
                case "未下载用户":
                    obj.AppDownLoaders = JSON.stringify([
                        this.$parent.$parent.adaMid
                    ]);
                    break;
            }
            switch (this.sex) {
                case "不修改":
                    obj.Gender = -1;
                    break;
                case "不限":
                    obj.Gender = JSON.stringify([]);
                    break;
                case "男":
                    obj.Gender = JSON.stringify(["M"]);
                    break;
                case "女":
                    obj.Gender = JSON.stringify(["F"]);
                    break;
            }
            switch (this.age1) {
                case "不修改":
                    obj.Age = -1;
                    break;
                case "不限":
                    obj.Age = JSON.stringify([{ minAge: -1, maxAge: -1 }]);
                    break;
                default:
                    obj.Age = JSON.stringify([
                        {
                            minAge: this.age1,
                            maxAge: this.age2
                        }
                    ]);
            }
            this.$parent.budgetShow = false;
            this.$emit("budgetBack", obj);
        }
    }
};
</script>