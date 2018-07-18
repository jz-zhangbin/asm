<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.advan_search {
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: 1000;
    .advan_search_content {
        border: 1px solid #ebeef5;
        width: 890px;
        border-radius: 10px;
        background-color: #fff;
        position: absolute;
        padding-bottom: 20px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        section {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 0 20px;
            position: relative;
            overflow: hidden;
            .close {
                position: absolute;
                right: 20px;
                top: 20px;
                cursor: pointer;
            }
            .title {
                font-size: 18px;
                padding: 15px;
                margin-bottom: 10px;
            }
        }
        ul {
            li {
                margin-bottom: 12px;
                display: flex;
                p {
                    width: 80px;
                    text-align: right;
                    margin-right: 14px;
                    line-height: 40px;
                    font-weight: bold;
                }
                .input_div {
                    height: 40px;
                    box-sizing: border-box;
                    padding: 0 10px;
                    border-radius: 4px;
                    margin-right: 12px;
                    line-height: 40px;
                    display: flex;
                    border: 1px solid @border;
                    span {
                        margin-right: 10px;
                    }
                    input {
                        width: 80px;
                        padding-left: 10px;
                        box-sizing: border-box;
                        border: none;
                        outline: none;
                    }
                    .baifen {
                        line-height: 38px;
                    }
                }
            }
        }
    }
    .search_btn {
        width: 140px;
        height: 40px;
        border: @border;
        line-height: 40px;
        cursor: pointer;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        background: @color;
        color: #fff;
        border-radius: 4px;
        margin: 20px auto 0;
        &:hover {
            background: @btnhover;
        }
    }
}
</style>
<style lang='less'>
.advan_search {
    .el-input-number--mini {
        width: 100px;
        line-height: 30px;
        margin-top: 3px;
    }
    .one {
        .el-select {
            width: 114px;
        }
    }
    .two {
        .el-select {
            width: 220px;
        }
    }
    .input_div {
        .el-input__inner {
            height: 38px;
        }
        .el-select {
            margin-top: -1px;
            width: 60px;
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
    <div class="advan_search">
        <div class="advan_search_content">
            <section>
                <i class="iconfont icon-cha close" @click="close"></i>
                <p class="title">高级搜索</p>
                <ul>
                    <li class="one" v-if="searchType == '国家'">
                        <p>按国家</p>
                        <el-select v-model="countryNow" placeholder="请选择" @change="countrychange">
                            <el-option v-for="item in countryList" :key="item.nationId" :label="item.nationCHSName" :value="item.nationCHSName">
                            </el-option>
                        </el-select>
                    </li>
                    <li class="one" v-if="searchType == '搜索匹配'">
                        <p>搜索匹配</p>
                        <el-select v-model="searchMatchingValue" placeholder="请选择">
                            <el-option v-for="item in searchMatching" :key="item" :label="item" :value="item">
                            </el-option>
                        </el-select>
                    </li>
                    <li v-if="searchType == '所有广告组'">
                        <p>按预算</p>
                        <div class="input_div">
                            <span>默认CPC</span>
                            <el-select v-model="symbol10">
                                <el-option v-for="item in options4" :key="item" :label="item.name" :value="item.type">
                                </el-option>
                            </el-select>
                            <el-input-number size="mini" v-model="value10" :precision="2" :min="0" :max="1000000" :disabled="symbol10==null"></el-input-number>
                        </div>
                        <div class="input_div">
                            <span>CPA目标</span>
                            <el-select v-model="symbol11">
                                <el-option v-for="item in options4" :key="item" :label="item.name" :value="item.type">
                                </el-option>
                            </el-select>
                            <el-input-number size="mini" v-model="value11" :precision="2" :min="0" :max="1000000" :disabled="symbol11==null"></el-input-number>
                        </div>
                    </li>
                    <li class="one" v-if="searchType == '所有关键词'">
                        <p>按预算</p>
                        <div class="input_div">
                            <span>CPC出价</span>
                            <el-select v-model="symbol12">
                                <el-option v-for="item in options4" :key="item" :label="item.name" :value="item.type">
                                </el-option>
                            </el-select>
                            <el-input-number size="mini" v-model="value12" :precision="2" :min="0" :max="1000000" :disabled="symbol12==null"></el-input-number>
                        </div>
                    </li>
                    <li v-if="searchType == '国家'">
                        <p>按预算</p>
                        <div class="input_div">
                            <span>总预算</span>
                            <el-select v-model="symbol1">
                                <el-option v-for="item in options4" :key="item" :label="item.name" :value="item.type">
                                </el-option>
                            </el-select>
                            <el-input-number size="mini" v-model="value1" :precision="2" :min="0" :max="1000000" :disabled="symbol1==null"></el-input-number>
                        </div>
                        <div class="input_div">
                            <span>日预算</span>
                            <el-select v-model="symbol2">
                                <el-option v-for="item in options4" :key="item" :label="item.name" :value="item.type">
                                </el-option>
                            </el-select>
                            <el-input-number size="mini" v-model="value2" :precision="2" :min="0" :max="1000000" :disabled="symbol2==null"></el-input-number>
                        </div>
                    </li>
                    <li>
                        <p>按平均值</p>
                        <div class="input_div">
                            <span>平均CPA</span>
                            <el-select v-model="symbol3">
                                <el-option v-for="item in options4" :key="item" :label="item.name" :value="item.type">
                                </el-option>
                            </el-select>
                            <el-input-number size="mini" v-model="value3" :precision="2" :min="0" :max="1000000" :disabled="symbol3==null"></el-input-number>
                        </div>
                        <div class="input_div">
                            <span>平均CPC</span>
                            <el-select v-model="symbol4">
                                <el-option v-for="item in options4" :key="item" :label="item.name" :value="item.type">
                                </el-option>
                            </el-select>
                            <el-input-number size="mini" v-model="value4" :precision="2" :min="0" :max="1000000" :disabled="symbol4==null"></el-input-number>
                        </div>
                    </li>
                    <li>
                        <p>按量级</p>
                        <div class="input_div">
                            <span>展示数</span>
                            <el-select v-model="symbol5">
                                <el-option v-for="item in options4" :key="item" :label="item.name" :value="item.type">
                                </el-option>
                            </el-select>
                            <el-input-number size="mini" v-model="value5" :precision="0" :min="0" :max="1000000" :disabled="symbol5==null"></el-input-number>
                        </div>
                        <div class="input_div">
                            <span>点击数</span>
                            <el-select v-model="symbol6">
                                <el-option v-for="item in options4" :key="item" :label="item.name" :value="item.type">
                                </el-option>
                            </el-select>
                            <el-input-number size="mini" v-model="value6" :precision="0" :min="0" :max="1000000" :disabled="symbol6==null"></el-input-number>
                        </div>
                        <div class="input_div">
                            <span>下载数</span>
                            <el-select v-model="symbol7">
                                <el-option v-for="item in options4" :key="item" :label="item.name" :value="item.type">
                                </el-option>
                            </el-select>
                            <el-input-number size="mini" v-model="value7" :precision="0" :min="0" :max="1000000" :disabled="symbol7==null"></el-input-number>
                        </div>
                    </li>
                    <li>
                        <p>按转化率</p>
                        <div class="input_div">
                            <span>点击率</span>
                            <el-select v-model="symbol8">
                                <el-option v-for="item in options4" :key="item" :label="item.name" :value="item.type">
                                </el-option>
                            </el-select>
                            <el-input-number size="mini" v-model="value8" :precision="2" :min="0" :max="100" :disabled="symbol8==null"></el-input-number>
                            <div class="baifen">%</div>
                        </div>
                        <div class="input_div">
                            <span>下载转换率</span>
                            <el-select v-model="symbol9">
                                <el-option v-for="item in options4" :key="item" :label="item.name" :value="item.type">
                                </el-option>
                            </el-select>
                            <el-input-number size="mini" v-model="value9" :precision="2" :min="0" :max="100" :disabled="symbol9==null"></el-input-number>
                            <div class="baifen">%</div>
                        </div>
                    </li>
                </ul>
                <div class="search_btn" @click="btn">搜索</div>
            </section>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { datefn } from "@commonJS/dateList";
import { countryOne } from "@commonJS/country";
export default {
    data() {
        return {
            countryNow: "美国",
            conutryValue: 0,
            searchMatching: ["是", "否"],
            searchMatchingValue: "",
            options4: [
                {
                    name: "-",
                    type: null
                },
                {
                    name: "≥",
                    type: "greaterthanorequals"
                },
                {
                    name: "≤",
                    type: "lessthanorequals"
                }
            ],
            symbol1: null,
            symbol2: null,
            symbol3: null,
            symbol4: null,
            symbol5: null,
            symbol6: null,
            symbol7: null,
            symbol8: null,
            symbol9: null,
            symbol10: null,
            symbol11: null,
            symbol12: null,
            value1: 0,
            value2: 0,
            value3: 0,
            value4: 0,
            value5: 0,
            value6: 0,
            value7: 0,
            value8: 0,
            value9: 0,
            value10: 0,
            value11: 0,
            value12: 0
        };
    },

    components: {},

    props: {
        searchType: {}
    },

    computed: {
        ...mapState({
            countryList: state => state.Home.countryList
        })
    },

    created() {
        this.$store.dispatch("GET_COUNTRYLIST").then(() => {
            this.countryNow = this.$store.state.Home.countryList[0].nationCHSName;
        });
    },

    updated() {},

    mounted() {},

    destroyed() {},

    methods: {
        countrychange() {},
        close() {
            this.$parent.advanShow = false;
        },
        btn() {
            let arr = [];
            if (this.searchType == "国家") {
                arr.push({
                    code: "storefront",
                    operator: "equals",
                    valueType: 1,
                    values: [countryOne(this.countryNow)]
                });
            }
            if (this.searchType == "国家") {
                if (this.symbol1 != null) {
                    arr.push({
                        code: " budgetamount",
                        operator: this.symbol1,
                        valueType: 4,
                        values: [this.value1]
                    });
                }
                if (this.symbol2 != null) {
                    arr.push({
                        code: "dailybudgetamount",
                        operator: this.symbol2,
                        valueType: 4,
                        values: [this.value2]
                    });
                }
            }
            if (this.searchType == "所有广告组") {
                if (this.symbol10 != null) {
                    arr.push({
                        code: "DefaultCPCBidAmount",
                        operator: this.symbol10,
                        valueType: 4,
                        values: [this.value10]
                    });
                }
                if (this.symbol11 != null) {
                    arr.push({
                        code: "CPAGoalamount",
                        operator: this.symbol11,
                        valueType: 4,
                        values: [this.value11]
                    });
                }
                if (this.searchMatchingValue != "") {
                    arr.push({
                        code: "automatedkeywordsoptin ",
                        operator: "equals",
                        valueType: 5,
                        values: [
                            this.searchMatchingValue == "是" ? true : false
                        ]
                    });
                }
            }
            if (this.searchType == "所有关键词") {
                //CPC目标
                if (this.symbol12 != null) {
                    arr.push({
                        code: "bidAmount",
                        operator: this.symbol12,
                        valueType: 4,
                        values: [this.value12]
                    });
                }
            }
            if (this.symbol3 != null) {
                arr.push({
                    code: "AvgCPA",
                    operator: this.symbol3,
                    valueType: 4,
                    values: [this.value3]
                });
            }
            if (this.symbol4 != null) {
                arr.push({
                    code: "AvgCPC",
                    operator: this.symbol4,
                    valueType: 4,
                    values: [this.value4]
                });
            }
            if (this.symbol5 != null) {
                arr.push({
                    code: "Impressions ",
                    operator: this.symbol5,
                    valueType: 4,
                    values: [this.value5]
                });
            }
            if (this.symbol6 != null) {
                arr.push({
                    code: "Taps",
                    operator: this.symbol6,
                    valueType: 4,
                    values: [this.value6]
                });
            }
            if (this.symbol7 != null) {
                arr.push({
                    code: "Conversions",
                    operator: this.symbol7,
                    valueType: 4,
                    values: [this.value7]
                });
            }
            if (this.symbol8 != null) {
                arr.push({
                    code: "TTR",
                    operator: this.symbol8,
                    valueType: 4,
                    values: [(this.value8 / 100).toFixed(4)]
                });
            }
            if (this.symbol9 != null) {
                arr.push({
                    code: "ConversionRate",
                    operator: this.symbol9,
                    valueType: 4,
                    values: [(this.value9 / 100).toFixed(4)]
                });
            }
            this.$emit("advancedFun", arr);
            this.$parent.advanShow = false;
        }
    }
};
</script>