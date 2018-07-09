<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.audience_form {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    .blue {
        color: @color;
        position: absolute;
        top: 1px;
        left: 7px;
    }
    .audience_form_box {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 625px;
        max-height: 500px;
        margin: auto;
        padding: 10px 35px 0 15px;
        background: #fff;
        border-radius: 6px;
        overflow-y: auto;
    }
    .form_row {
        display: flex;
        margin-top: 15px;
        p {
            width: 90px;
            line-height: 40px;
            text-align: right;
            margin-right: 16px;
            font-weight: bold;
        }
    }
    .top_input {
        display: flex;
        width: 288px;
        height: 38px;
        border: 1px solid @border;
        border-radius: 4px;
        img {
            width: 22px;
            height: 22px;
            margin: 8px 10px 0;
        }
        aside {
            line-height: 36px;
            max-width: 200px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    .top_two {
        display: flex;
        flex-wrap: wrap;
        max-width: 500px;
        span {
            box-sizing: border-box;
            padding: 0px 10px;
            height: 40px;
            line-height: 40px;
            background: #f7f7f7;
            display: block;
            margin: 0 10px 0px 0;
            margin-bottom: 10px;
            position: relative;
            display: block;
            padding-left: 24px;
        }
    }
    .yu_set {
        display: flex;
        li {
            width: 155px;
            height: 155px;
            border: 1px solid @border;
            margin-right: 10px;
            box-sizing: border-box;
            padding: 15px 0;
            h2 {
                text-align: center;
                margin-bottom: 14px;
            }
            div {
                display: flex;
                font-size: 12px;
                margin-bottom: 6px;
                span {
                    font-size: 12px;
                    width: 45%;
                    text-align: left;
                    &:nth-child(1) {
                        width: 55%;
                        text-align: right;
                    }
                }
            }
        }
    }
    .top_two_two {
        span {
            padding: 0px 20px;
            height: 40px;
            line-height: 40px;
            background: #f7f7f7;
            border-radius: 4px;
            box-sizing: border-box;
            border: 1px solid @border;
        }
    }
    .top_two_three {
        span {
            background: #fff;
            border: 1px solid @color;
            border-radius: 4px;
            height: 40px;
            line-height: 40px;
            box-sizing: border-box;
        }
    }
    .top_two_four {
        span {
            padding-left: 10px;
        }
    }
    .key_name {
        line-height: 40px;
        color: #000;
    }
    .bom_date {
        width: 340px;
        line-height: 38px;
        padding-left: 10px;
    }
    .form_btn {
        display: flex;
        justify-content: center;
        margin: 30px;
        width: 100%;
        button {
            width: 150px;
            margin: 16px;
        }
    }
    .fapiao{
        h4{
            line-height: 50px;
        }
    }
}
</style>
<template>
    <div class="audience_form">
        <div class="audience_form_box">
            <div class="form_row">
                <p>APP名称</p>
                <div class="top_input">
                    <img :src="appDate.logoAdress" alt="" > 
                    <aside>{{appDate.appName}}</aside>
                </div>
            </div>
            <div class="form_row">
                <p>投放国家</p>
                <div class="top_two">
                    <span v-for="(ele,index) in contryList" :key="index" v-if="ele.checked"><i class='iconfont blue icon-duoxuan-yixuan'></i>{{ele.name}}</span> 
                </div>
            </div>
            <div class="form_row">
                <p>预算设置</p>
                <ul class="yu_set">
                    <li v-if="$parent.Intelligence">
                        <h2>智能匹配</h2>
                        <div>
                            <span>总预算：</span>
                            <span>￥{{IntelligenceObj.zong}}</span>
                        </div>
                        <div>
                            <span>日预算： </span>
                            <span>￥{{IntelligenceObj.ri}}</span>
                        </div>
                        <div>
                            <span>默认CPC： </span>
                            <span>￥{{IntelligenceObj.cpc}}</span>
                        </div>
                        <div v-if="IntelligenceObj.cpa != ''">
                            <span>默认CPA： </span>
                            <span>￥{{IntelligenceObj.cpa}}</span>
                        </div>
                    </li>
                    <li v-if="$parent.widely">
                        <h2>精准匹配</h2>
                        <div>
                            <span>总预算：</span>
                            <span>￥{{widelyObj.zong}}</span>
                        </div>
                        <div>
                            <span>日预算： </span>
                            <span>￥{{widelyObj.ri}}</span>
                        </div>
                        <div>
                            <span>默认CPC： </span>
                            <span>￥{{widelyObj.cpc}}</span>
                        </div>
                        <div v-if="widelyObj.cpa != ''">
                            <span>默认CPA： </span>
                            <span>￥{{widelyObj.cpa}}</span>
                        </div>
                    </li>
                    <li v-if="$parent.accurate">
                        <h2>广泛匹配</h2>
                        <div>
                            <span>总预算：</span>
                            <span>￥{{accurateObj.zong}}</span>
                        </div>
                        <div>
                            <span>日预算： </span>
                            <span>￥{{accurateObj.ri}}</span>
                        </div>
                        <div>
                            <span>默认CPC： </span>
                            <span>￥{{accurateObj.cpc}}</span>
                        </div>
                        <div v-if="accurateObj.cpa != ''">
                            <span>默认CPA： </span>
                            <span>￥{{accurateObj.cpa}}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="form_row" v-if="nameType == '广告系列'">
                <p>广告系列命名</p>
                <div class="top_two top_two_two">
                    <span v-for="(ele,index) in newAdvertisementListArr" :key="index">{{ele}}</span> 
                </div>
            </div>
            <div class="form_row">
                <p>广告组命名</p>
                <div class="top_two top_two_two">
                    <span v-for="(ele,index) in newAdvertisementZuArr" :key="index">{{ele}}</span>
                </div>
            </div>
            <div class="form_row" v-if="userType.isLoc">
                <p>发票信息</p> 
                <div class="fapiao"> 
                    <h4>订单号:&nbsp;&nbsp;{{userType.dingdan}}</h4>
                    <h4>主要联系人姓名:&nbsp;&nbsp;{{userType.buyerName}}</h4>
                    <h4>主要联系人邮箱:&nbsp;&nbsp;{{userType.buyerEmail}}</h4>
                    <h4>结算联系人姓名:&nbsp;&nbsp;{{userType.billingContactName}}</h4>
                    <h4>结算联系人邮箱:&nbsp;&nbsp;{{userType.billingContactEmail}}</h4>
                </div>
            </div>
            <div class="form_row">
                <p>投放设备</p>
                <div class="top_two top_two_three">
                    <span v-for="(ele,index) in mobanObj.audienceDevice" :key="index">
                        <i class='iconfont blue icon-duoxuan-yixuan'></i>
                        {{ele == 'ALL'? 'IPHONE/IPAD' : ele}} 
                    </span> 
                </div>
            </div>
            <div class="form_row">
                <p>受众类型</p>
                <div class="top_two top_two_three">
                    <span v-for="(ele,index) in mobanObj.audienceType" :key="index">
                        <i class='iconfont blue icon-duoxuan-yixuan'></i>
                        {{ele == 'ND'? '未下载用户' : '所有用户'}}
                    </span> 
                </div>
            </div>
            <div class="form_row">
                <p>受众性别</p>
                <div class="top_two top_two_three">
                    <span v-for="(ele,index) in mobanObj.audienceGender" :key="index">
                        <i class='iconfont blue icon-duoxuan-yixuan'></i>
                        {{ele == 'ALL' ? '所有' : ''}}
                        {{ele == 'M' ? '男' : ''}}
                        {{ele == 'F' ? '女' : ''}}
                    </span> 
                </div>
            </div>
            <div class="form_row" >
                <p>受众年龄</p>
                <div class="top_two top_two_four">
                    <span v-for="(ele,index) in mobanObj.audienceAge" :key="index">
                       {{ele == null ? '不限' : ""}} 
                       {{ele != null ? ele.minAge +'-'+ ele.maxAge : ''}}
                    </span> 
                </div>
            </div>
            <div class="form_row" v-if="$parent.keyWordShow && ($parent.widely || $parent.accurate)" >
                <p>关键词组</p>
                <div class="key_name">{{keyWordDate.name}}</div>
            </div>
            <div class="form_row" v-if="value7.length != 0">
                <p>投放时间</p>
                <div class="top_input bom_date">
                    {{value7[0] | dateSet}}至 {{value7[1] | dateSet}}
                </div>
            </div>
            <div class="form_btn">
                <el-button @click="$parent.formDataShow = false">取消</el-button>
                <el-button type="primary" @click="trueOk">确认创建</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import {date} from '@commonJS/date'
export default {
    data() {
        return {
            
        };
    },

    props: {
        nameType: {},
        appDate: {},
        contryList: {},
        IntelligenceObj: {},
        widelyObj: {},
        accurateObj: {},
        newAdvertisementListArr: {},
        newAdvertisementZuArr: {},
        userType: {},
        audienceListObj: {},
        value7: {},
        mobanObj: {},
        keyWordDate: {}
    },

    components: {},

    filters: {
        dateSet: function(value) {
            return date(value)
        }
    },

    computed: {},

    created() {},

    updated() {},

    mounted() {},

    destroyed() {},

    methods: {
        trueOk() {
            this.$parent.formDataShow = false;
            this.$parent.AjaxAdd() 
        }
    }
};
</script>