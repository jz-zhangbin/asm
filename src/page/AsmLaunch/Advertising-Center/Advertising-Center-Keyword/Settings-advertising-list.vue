<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.setacc_index {
    box-sizing: border-box;
    padding: 60px 0 20px;
    background: #edf1f5;
    .adver_nav {
        margin: 0px 12px 0;
        min-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
    }
    .createlist_contant {
        min-width: 1200px;
        box-sizing: border-box;
        margin: 0 12px;
        background: #fff;
        padding: 0 0px 60px;
        h1 {
            font-size: 18px;
            color: #333;
            padding: 22px;
            margin-bottom: 10px;
            font-weight: bold;
        }
    }
    .createlist_form {
        box-sizing: border-box;
        padding-left: 200px;
    }
    .createlist_title {
        font-size: 16px;
        margin: 30px 0 10px 0;
    }
    input {
        width: 470px;
        height: 40px;
        box-sizing: border-box;
        padding: 0 10px;
        border-radius: 4px;
        border: 1px solid @border;
        outline: none;
        &:focus {
            border: 1px solid @color;
        }
        &.te_input {
            width: 130px;
        }
    }
    .create_list_btn {
        margin-top: 50px;
        button {
            width: 150px;
            margin-right: 20px;
        }
    }
    .age_div {
        display: flex;
        .right-select {
            margin-left: 20px;
        }
    }
}
</style>
<style lang="less">
.setacc_index {
    .el-select {
        width: 130px;
    }
}
</style>
<template>
    <div class="setacc_index">
        <!-- 导航 -->
        <v-header></v-header>
        <!-- 面包屑 -->
        <div class="adver_nav">
            <v-nav :pageName='pageName' :routeList='routeList'></v-nav>
        </div>

        <div class="createlist_contant">
            <h1>编辑广告组</h1>
            <div class="createlist_form">
                <!-- 选择投放国家 -->
                <p class="createlist_title">广告系列名称</p>
                <input type="text" placeholder="设置广告系列名称" v-model="topDate.name">
                <p class="createlist_title">默认CPC</p>
                <div>
                    <input type="text" placeholder="设置CPC" class="te_input" v-model="topDate.defaultCPCBidAmount">
                    <span>$</span>
                </div>
                <p class="createlist_title">CPA目标</p>
                <div>
                    <input type="text" placeholder="设置CPA" class="te_input" v-model="topDate.cpaGoalamount">
                    <span>$</span>
                </div>
                <p class="createlist_title">投放设备</p>
                <el-select v-model="equipment">
                    <el-option v-for="(item , index) in equipmentList" :key="index" :label="item" :value="item">
                    </el-option>
                </el-select>
                <p class="createlist_title">用户类型</p>
                <el-select v-model="user">
                    <el-option v-for="(item , index) in userList" :key="index" :label="item" :value="item">
                    </el-option>
                </el-select>
                <p class="createlist_title">用户性别</p>
                <el-select v-model="sex">
                    <el-option v-for="(item , index) in sexList" :key="index" :label="item" :value="item">
                    </el-option>
                </el-select>
                <p class="createlist_title">年龄范围</p>
                <div class="age_div">
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
                </div>
                <!-- 创建按钮 -->
                <div class="create_list_btn">
                    <el-button @click="$router.go(-1)">取消</el-button>
                    <el-button type="primary" @click="chuangClick">确定</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavList from "@components/AsmLaunch/Nav-List";
export default {
    data() {
        return {
            pageName: "广告中心",
            routeList: [
                {
                    name: "广告中心",
                    path: "/advertising-center/home",
                    query: ""
                }
            ], //面包屑
            cpc: "",
            cpa: "",
            equipmentList: ["不限", "IPHONE", "IPAD"],
            userList: ["所有用户", "未下载用户"],
            sexList: ["不限", "男", "女"],
            ageList1: [
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
            equipment: "",
            user: "",
            sex: "",
            age1: "",
            age2: "65",
            loading: null,
            loadingopaction: {
                lock: true,
                text: "加载中",
                spinner: "el-icon-loading",
                background: "rgba(0, 0, 0, 0.7)"
            },
            topDate: {}
        };
    },

    components: {
        "v-nav": NavList
    },

    computed: {},

    created() {
        this.AjaxGetAdgroupObject();
        let queryData = this.$route.params;
        this.routeList.push(
            ...[
                {
                    name: "账户",
                    routername: "account",
                    params: {
                        accountName: queryData.accountName,
                        orgId: queryData.orgId, 
                        id: queryData.id
                    }
                },
                {
                    name: "广告系列",
                    routername: "list",
                    params: {
                        accountName: queryData.accountName,
                        orgId: queryData.orgId,
                        listName: queryData.listName,
                        listId: queryData.listId, 
                        id: queryData.id,
                        listType: queryData.listType
                    }
                },
                {
                    name: "广告组",
                    routername: "group",
                    params: queryData
                },
                {
                    name: "编辑广告组",
                    routername: "settings-keyword",
                    params: queryData
                }
            ]
        );
    },

    updated() {},

    mounted() {},

    destroyed() {},

    methods: {
        chuangClick() {
            if (this.topDate.name == "") {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "广告系列名称不能为空",
                    type: 3
                });
                return false;
            }
            if (
                this.topDate.defaultCPCBidAmount == "" ||
                this.topDate.defaultCPCBidAmount < 0
            ) {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "默认CPC不能为空",
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
                CampaignId: this.$route.params.listId
            };
            obj.DefaultCPCBidAmount = this.topDate.defaultCPCBidAmount * 1;
            obj.CPAGoalamount = this.topDate.cpaGoalamount * 1;
            switch (this.equipment) {
                case "不限":
                    obj.DeviceClass = JSON.stringify(["IPHONE", "IPAD"]);
                    break;
                default:
                    obj.DeviceClass = JSON.stringify([this.equipment]);
                    break;
            }
            switch (this.user) {
                case "所有用户":
                    obj.AppDownLoaders = JSON.stringify([]);
                    break;
                case "未下载用户":
                    obj.AppDownLoaders = JSON.stringify([
                        this.$ls.get("adjuz_img").adamId
                    ]);
                    break;
            }
            switch (this.sex) {
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
            let AjaxObj = {
                objJson: JSON.stringify([
                    {
                        Name: this.topDate.name,
                        Id: this.$route.params.keyId,
                        DeviceClass: obj.DeviceClass,
                        AppDownLoaders: obj.AppDownLoaders,
                        Age: obj.Age,
                        Gender: obj.Gender
                    }
                ]),
                paramJson: JSON.stringify(obj)
            };

            let url = "/api/v1/IntellAdvertiseApi/AdGroup/EditAdGroup";
            this.$https.post(url, JSON.stringify(AjaxObj));
            this.$router.go(-1);
        },
        AjaxGetAdgroupObject() {
            this.loading = this.$loading(this.loadingopaction);
            let url =
                "/api/v1/IntellAdvertiseApi/AdGroup/GetAdgroupObject?id=" +
                this.$route.params.keyId;
            this.$https.get(url).then(res => {
                this.loading.close();
                if (res.data.resultCode == 1000) {
                    this.topDate = res.data.data;
                    //  this.topDate = {
                    //     name: '123',
                    //     defaultCPCBidAmount: 0,
                    //     cpaGoalamount:1,
                    //     deviceClass: ['IPHONE'],
                    //     appDownLoaders: [123],
                    //     age: [{minAge:-1,maxAge:-1}],
                    //     gender: ['M']
                    // };
                    this.SetSelectData();
                } else {
                }
            });
        },
        SetSelectData() {
            if (this.topDate.deviceClass != -1) {
                this.topDate.deviceClass = JSON.parse(this.topDate.deviceClass);
            }
            if (this.topDate.appDownLoaders != -1) {
                this.topDate.appDownLoaders = JSON.parse(
                    this.topDate.appDownLoaders
                );
            }
            if (this.topDate.gender != -1) {
                this.topDate.gender = JSON.parse(this.topDate.gender);
            }
            if (this.topDate.age != -1) {
                this.topDate.age = JSON.parse(this.topDate.age);
            }
            if (this.topDate.deviceClass.length > 1 == this.topDate.deviceClass == -1) {
                this.equipment = "不限";
            } else {
                this.equipment = this.topDate.deviceClass[0];
            }
            if (this.topDate.appDownLoaders.length == 0) {
                this.user = "所有用户";
            } else {
                this.user = "未下载用户";
            }
            if (this.topDate.gender.length == 0 || this.topDate.gender == -1) {
                this.sex = "不限";
            } else {
                if (this.topDate.gender[0] == "M") {
                    this.sex = "男";
                } else {
                    this.sex = "女";
                }
            }
            if (this.topDate.age[0].minAge == -1 || this.topDate.age == -1 ) {
                this.age1 = "不限";
            } else {
                this.age1 = this.topDate.age[0].minAge;
                this.age2 = this.topDate.age[0].maxAge;
            }
        }
    }
};
</script>