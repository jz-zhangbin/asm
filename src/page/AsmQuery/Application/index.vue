<style lang='less' scoped>
@import url("../../../base/commonCSS/table.less");
.apl_index {
    box-sizing: border-box;
    padding: 60px 0 20px;
    overflow: hidden;
    .apl_body {
        min-width: 1200px;
        padding: 0 45px;
        box-sizing: border-box;
    }
    .apl_body_top {
        width: 100%;
        margin: 36px 0 25px;
        height: 177px;
        background: #f7f7f7;
        border: 1px solid @border;
        box-sizing: border-box;
        padding: 26px 24px;
        display: flex;
        position: relative;
        box-shadow: 0 2px 2px @boxshado;
        img {
            width: 124px;
            height: 124px;
            border-radius: 16px;
            margin-right: 22px;
        }
        .apl_bt_ct {
            box-sizing: border-box;
            padding-top: 25px;
            h1 {
                font-size: 22px;
                color: @color;
                margin-bottom: 12px;
            }
            div {
                display: flex;
            }
            p {
                margin-bottom: 6px;
                span {
                    display: block;
                    margin-bottom: 6px;
                    margin-right: 16px;
                }
            }
        }
        .apl_bt_btn {
            position: absolute;
            top: 26px;
            right: 34px;
            width: 150px;
            height: 40px;
            cursor: pointer;
            background: @color;
            color: #f7f7f7;
            text-align: center;
            line-height: 40px;
            border-radius: 6px;
            i {
                margin-right: 6px;
            }
        }
    }
    .apl_body_cur {
        width: 100%;
        display: flex;
        margin-bottom: 25px;
        .sl_center_p {
            margin-right: 11px;
            line-height: 34px;
        }
    }
    .apl_body_h2 {
        width: 100%;
        height: 34px;
        margin-bottom: 25px;
        h2 {  
            text-align: center;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            span{
                cursor: pointer;
                display: block;
                width: 138px;
                line-height: 34px; 
                font-size: 18px; 
                &.iscommon {
                    color: @color;
                    border-bottom: 2px solid @color;
                }
            }
        }
    }
    .apl_body_date {
        width: 100%;
        display: flex;
        justify-content: space-between; 
    }
    .apl_checketout {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        span {
            display: block;
            height: 32px;
            border: 1px solid #dee2e6;
            border-radius: 4px;
            line-height: 32px;
            padding: 0 12px;
            margin-left: 16px;
            cursor: pointer;
            &.checked {
                background: #f7f7f7;
                cursor: wait;
            }
        }
    }
    .apl_body_search {
        width: 100%;
        height: 110px;
        border: 1px solid @border;
        border-bottom: none;
        display: flex;
        box-sizing: border-box;
        padding: 27px 0 0 23px;
        position: relative;
        .apl_bos_box {
            margin-right: 20px;
            p {
                margin-bottom: 10px;
            }
            input {
                border: 1px solid @border;
                border-radius: 4px;
                width: 80px;
                height: 30px;
                margin-right: 16px;
                box-sizing: border-box;
                padding-left: 12px;
                &::-webkit-input-placeholder {
                    color: #9a9a9a;
                }
            }
        }
        button {
            width: 64px;
            height: 30px;
            border: 1px solid #36bead;
            line-height: 30px;
            text-align: center;
            cursor: pointer;
            border-radius: 4px;
            background: #fff;
            color: #36bead;
            margin-top: 29px;
            &.btn_null {
                background: @color;
                border: 1px solid @border;
                color: #fff;
                margin-left: 20px;
                &:hover {
                    background: #1559c8;
                }
            }
            &:hover {
                background: #36bead;
                color: #fff;
            }
        }
        .apl_bos_right {
            width: 240px;
            height: 30px;
            border: 1px solid @border;
            border-radius: 4px;
            position: absolute;
            overflow: hidden;
            top: 55px;
            right: 20px;
            overflow: hidden;
            .apl_bos_input {
                width: 100%;
                height: 100%;
                position: relative;
                border-radius: 4px;
                input {
                    width: 100%;
                    height: 100%;
                    border: none;
                    outline: none;
                    box-sizing: border-box;
                    padding-left: 20px;
                    padding-right: 40px;
                    &::-webkit-input-placeholder {
                        color: #9a9a9a;
                    }
                }
                i {
                    position: absolute;
                    top: 7px;
                    right: 14px;
                    cursor: pointer;
                }
            }
        }
    }
    .apl_body_table {
        width: 100%;
        box-shadow: 0 2px 2px @boxshado;
        min-height: 60px;
    }
    .href_a {
        color: @color !important;
        cursor: pointer;
    }
}
</style>
<style lang="less">
.apl_index {
    .apl_body_cur {
        .el-select {
            width: 114px;
            height: 34px;
        }
        .el-input,
        .el-input--suffix,
        .el-input__inner {
            height: 34px;
        }
        .el-input__icon {
            line-height: 34px !important;
        }
    }
    .apl_body_date {
        .el-select {
            width: 160px;
            height: 32px;
        }
        .el-input,
        .el-input--suffix,
        .el-input__inner {
            height: 32px;
        }
        .el-input__icon {
            line-height: 32px !important;
        }
    }
}
</style>
<template>
    <div class="apl_index">
        <v-search-top></v-search-top>
        <div class="apl_body">
            <!-- 头部表格信息 -->
            <div class="apl_body_top">
                <img :src="appData.appImgUrl" alt="" v-if="appData.show">
                <img src="../../../images/moni/appimg_1123_03.png" alt="" v-if="!appData.show">
                <div class="apl_bt_ct">
                    <h1>{{appData.appName}}</h1>
                    <div>
                        <p style="max-width: 300px ; min-width: 100px;">
                            <span>开发商</span>
                            <span v-if="appData.show">{{appData.aristName}}</span>
                            <span style=" color:#000;" v-if="!appData.show">-</span>
                        </p>
                        <p style="min-width: 74px">
                            <span>分类</span>
                            <span style="color:#2d76ed;" v-if="appData.show">{{appData.appTypeName}}</span>
                            <span style=" color:#2d76ed;" v-if="!appData.show">-</span>
                        </p>
                        <p style="min-width: 110px">
                            <span>AppId</span>
                            <span style="color:#2d76ed; cursor: pointer" v-if="appData.show" @click="appIdToRoreter(appData.appStoreId)">{{appData.appStoreId}}</span>
                            <span style=" color:#2d76ed;" v-if="!appData.show">-</span>
                        </p>
                        <p style="min-width: 64px">
                            <span>价格</span>
                            <span style="color:#000;" v-if="appData.show">{{appData.appPrice | appPriceFilter}}</span>
                            <span style=" color:#000;" v-if="!appData.show">-</span>
                        </p>
                        <p style="min-width: 64px">
                            <span>总榜</span>
                            <span style="color:#000;" v-if="appData.show">{{appData.totalRank == 0 ? '-' : appData.totalRank}}</span>
                            <span style=" color:#000;" v-if="!appData.show">-</span>
                        </p>
                        <p style="min-width: 140px">
                            <span>分类榜</span>
                            <span style="color:#000;" v-if="appData.show">{{appData.classificationRank == 0 ? '-' : appData.classificationRank}}</span>
                            <span style=" color:#000;" v-if="!appData.show">-</span>
                        </p>
                    </div>
                </div>
                <div class="apl_bt_btn" v-if="appData.show" @click="keywordRouter">
                    <span >
                        <i class="iconfont icon-plus-add"></i>竞品对比
                    </span>
                </div>
            </div>
            <!-- 选择器 -->
            <div class="apl_body_cur">
                <p class="sl_center_p">地区</p>
                <el-select v-model="countryNow" placeholder="请选择" @change="changeFun(countryNow)">
                    <el-option class="search_input" v-for="item in countryList" :key="item.nationId" :label="item.nationCHSName" :value="item.nationId">
                    </el-option>
                </el-select>
            </div>
            <div class="apl_body_h2">
                <h2>
                    <span @click="selectCommon(index)" :class="{iscommon: index == iscomponentsIndex}" v-for="(ele,index) in iscomponentsList" :key="index">{{ele.name}}</span>
                </h2>
            </div>
            
            <component :is='iscomponents' :countryNow='countryNow'>
            </component>
        </div>
    </div>
</template>

<script>
import usersign from "@components/AsmQuery/User-Sign";
import { mapState } from "vuex";
import { datefn } from "@commonJS/dateList";
import { AjaxRemove } from "@commonJS/ajaxServes";
import { excelCheckout } from "@commonJS/excelCheckout";
import historykeyword from './historyKeyWord' 
export default {
    data() {
        return { 
            appData: {
                show: true
            },
            countryNow: "", //当前国家 
            options3: [], //世界列表     
            loading: null,
            loadingopaction: {
                lock: true,
                text: "加载中",
                spinner: "el-icon-loading",
                background: "rgba(0, 0, 0, 0.7)"
            }, 
            iscomponents: historykeyword,
            iscomponentsIndex: 0,
            iscomponentsList: [{
                name: '历史竞价关键词',
                com: historykeyword
            }]
        };
    },

    components: {
        usersign,
        historykeyword,
    },

    computed: {
        ...mapState({
            countryList: state => state.Home.countryList,
            userType: state => state.Sign.userType,
            IsManager: state => state.Sign.IsManager
        }), 
    },

    watch: {
        $route() { 
            this.loading = this.$loading(this.loadingopaction);   
            this.AjaxGetAppInfo(this.$route.query.country);
        }
    },

    filters: { 
        appPriceFilter: function(value) {
            if (value == 0) {
                return "免费";
            } else if (!value) {
                return "";
            } else {
                let ls = (value * 1).toFixed(2);
                return ls;
            }
        }
    },

    created() {
        this.$store.dispatch("GET_COUNTRYLIST").then(() => {
            this.$store.state.Home.countryList.map((ele, index) => {
                if (ele.nationId == this.$route.query.country) {
                    this.countryNow = this.$store.state.Home.countryList[
                        index
                    ].nationId;
                }
            });
        });
 
    },
    mounted() {
        this.loading = this.$loading(this.loadingopaction); 

        this.AjaxGetAppInfo(this.$route.query.country);
    },

    methods: { 

        changeFun(value) {
            //切换国家 
            this.AjaxGetAppInfo(value);  
        },   
        
        selectCommon(index) {
            //切换组件
            this.iscomponents = this.iscomponentsList[index].com
            this.iscomponentsIndex = index
        },

        keywordRouter() {
            //竞品对比跳转
            this.$router.push({
                path: "/keyword-comparison-list",
                query: {
                    key: this.countryNow,
                    id: this.appData.appStoreId
                }
            });
        },

        AjaxGetAppInfo(countryId) {
            this.loading = this.$loading(this.loadingopaction);
            let dateNum;
            if (!this.$route.query.date || this.$route.query.date == "1") {
                dateNum = 1;
            } else {
                if (this.$route.query.date == "-1") {
                    dateNum = 0;
                }
                if (this.$route.query.date == "2") {
                    dateNum = 1;
                }
                if (this.$route.query.date == "3") {
                    dateNum = 2;
                }
                if (this.$route.query.date == "4") {
                    dateNum = 3;
                }
            }
            //初次加载
            let url =
                "/api/v1/IntellSearchApi/APPDetail/GetAppInfo?appStoreId=" +
                this.$route.query.id +
                "&nationId=" +
                countryId +
                "&beginTime=" +
                datefn(1)[dateNum].data.beginTime +
                "&endTime=" +
                datefn(1)[dateNum].data.endTime;
            this.$https.get(url).then(res => {
                if (res.data.resultCode == 1000) {
                    res.data.data.show = true;
                    this.appData = res.data.data;
                } else if (res.data.resultCode == 404) {
                    this.appData.show = false;
                }
                if (this.loading != null) {
                    this.loading.close();
                }
            });
        }, 
        appIdToRoreter(id) {
            this.countryList.map((ele, index) => {
                if (ele.nationId == this.$route.query.country) {
                    window.open(
                        "https://itunes.apple.com/" +
                            ele.nationShortName +
                            "/app/id" +
                            id +
                            "?mt=8"
                    );
                }
            });
        }, 
    }
};
</script>
 