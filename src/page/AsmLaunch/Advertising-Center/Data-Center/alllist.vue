<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.aud_index {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 200;
    .aud_box {
        position: absolute;
        border: 1px solid #ebeef5;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 650px;
        height: 460px; 
        box-sizing: border-box;
        padding: 20px 30px;
        background: #fff;
        border-radius: 8px;
        h1 {
            font-size: 18px;
            margin-bottom: 20px;
        }
        ul {
            width: 100%;
            height: 250px;
            border: 1px solid @border;
            margin-top: 16px;
            overflow-y: auto;
            li {
                width: 100%;
                box-sizing: border-box;
                border-bottom: 1px solid @border;
                height: 50px;
                display: flex;
                padding: 0 20px 0 10px;
                align-items: center;
                justify-content: space-between;
                &.lengthnum {
                    border-bottom: none;
                }
                &:nth-child(1) {
                    background: @bgk;
                    span {
                        font-weight: bold;
                    }
                }
                div {
                    display: flex;
                    align-items: center;
                    span {
                        &:nth-child(1) {
                            width: 360px;
                            color: #111;
                            width: 320px;
                             overflow:hidden;
                            text-overflow:ellipsis;
                            white-space:nowrap;
                        }
                    }
                }
            }
        }
    }
    .button {
        margin-top: 40px;
        display: flex;
        justify-content: center;
        button {
            margin: 0 15px;
            width: 120px;
            height: 40px;
        }
    }
}
</style>
<template>
    <div class="aud_index">
        <div class="aud_box">
            <h1>选择广告系列</h1>
            <!-- <v-search :valuedata='valuedata' :placevaluedata='placevaluedata' :inputList='inputList' @changeInput='changeInput'>
            </v-search> -->
            <ul>
                <li>
                    <span>广告系列列表</span>
                    <el-checkbox v-model="checkedAll" @change="checkedAllClick"></el-checkbox>
                </li>
                <li v-for="(ele,index) in list" :key="index" :class="{lengthnum: index>=3}">
                    <div>
                        <span>{{ele.name}}</span>
                        <span>地区：{{ele.country | countryset}}</span>
                    </div>
                    <el-checkbox v-model="ele.checked" @change="checkedClick(ele.checked)"></el-checkbox>
                </li>
            </ul>
            <div class="button">
                <el-button @click="cancle">取消</el-button>
                <el-button type="primary" @click="ok">确定</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { countryTwo } from "@commonJS/country";
import KeySearch from "@components/AsmLaunch/Key-Search";
export default {
    data() {
        return {
            valuedata: "", //搜索内容
            placevaluedata: "广告系列名称" ,//搜索提示
            listInfor: [],
            listcheckedInfor: ''
        };
    },

    components: {
        "v-search": KeySearch
    },

    props: {
        list: {},
        checkedAll: {}
    },
    filters: {
        countryset: function(value) {
            if (value == null) {
                return "总和";
            } else {
                return countryTwo(value);
            }
        }
    },
    computed: {},

    created() {},

    updated() {},

    mounted() {
        this.stop()
        this.listInfor = JSON.parse(JSON.stringify(this.list))
        this.listcheckedInfor = this.$parent.checkedAll 
    },

    destroyed() {},

    methods: { 
        checkedClick() {
            let num = 0;
            this.list.map(ele => {
                if (!ele.checked) {
                    num++;
                }
            });
            if (num != 0) {
                this.checkedAll == false;
                this.$parent.checkedAll = false;
            } else {
                this.checkedAll == true;
                this.$parent.checkedAll = true;
            }
        },
        checkedAllClick() {
            if (this.checkedAll == true) {
                this.$parent.checkedAll = true;
                this.list.map(ele => {
                    ele.checked = true;
                });
            } else {
                this.$parent.checkedAll = false;
                this.list.map(ele => {
                    ele.checked = false;
                });
            }
        },
        cancle() {
            this.this = this.listInfor
            this.$parent.allSeries = this.listInfor
            this.checkedAll = this.listcheckedInfor
            this.$parent.checkedAll = this.listcheckedInfor
            this.$parent.alllistShow = false 
            this.move()
        },
        ok() {
            let num = 0; 
            this.list.map(ele => {
                if (ele.checked) {
                    num++; 
                }
            });
            if (num == 0) {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "请选择广告系列",
                    type: 3
                });
                return false;
            }
            this.$parent.listAllId = []
            if (this.$parent.checkedAll) {
                this.$parent.listName = "所有广告系列";
                this.list.map(ele => { 
                        this.$parent.listAllId.push(ele.campaignId) 
                });
            } else {
                let ls = "";
                this.list.map(ele => {
                    if (ele.checked) {
                        ls += ele.name
                        this.$parent.listAllId.push(ele.campaignId)
                    }
                });
                this.$parent.listName = ls;
            } 
            this.$parent.AjaxGetDateScreenList(this.$parent.appList[this.$parent.appIndex].appId)
            this.$parent.$refs.tablerefs.orderInfor()
            this.move()
            this.$parent.alllistShow = false;
        },
        stop() {
            var mo = function(e) {
                e.preventDefault();
            };
            document.body.style.overflow = "hidden";
            document.addEventListener("touchmove", mo, false); //禁止页面滑动
        },
        /***取消滑动限制***/
        move() {
            var mo = function(e) {
                e.preventDefault();
            };
            document.body.style.overflow = ""; //出现滚动条
            document.removeEventListener("touchmove", mo, false);
        }
    }
};
</script>