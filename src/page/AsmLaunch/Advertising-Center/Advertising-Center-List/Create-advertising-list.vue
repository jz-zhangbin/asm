<style lang='less' scoped>
@import url("./Create-advertising-list.less");
@import url("../../../../base/commonCSS/scroll.css");
</style>
<template>
    <div class="createlist_index">
        <!-- 导航 -->
        <v-header></v-header>

        <!-- 面包屑 -->
        <div class="adver_nav">
            <v-nav :pageName='pageName' :routeList='routeList'></v-nav>
        </div>

        <!-- 父级头部 -->
        <div class="father_head">
            <img :src="appDate.logoAdress" alt="">
            <section v-if="!loadingtop">
                <h1>广告系列 ：{{$route.params.listName}}</h1>
                <div>
                    <p>
                        <span>投放地区</span>
                        <span>-</span>
                    </p>
                    <p>
                        <span>总预算</span>
                        <span>-</span>
                    </p>
                    <p>
                        <span>日预算</span>
                        <span>-</span>
                    </p>
                    <p>
                        <span>广告状态</span>
                        <span class="red_type">-</span>
                    </p>
                </div>
            </section>
            <section v-else>
                <h1>广告系列 ：{{$route.params.listName}}</h1>
                <div>
                    <p>
                        <span>投放地区</span>
                        <span>{{topDate.storefront | countryset}}</span>
                    </p>
                    <p>
                        <span>总预算</span>
                        <span>{{topDate.budgetAmount | numTo$}}</span>
                    </p>
                    <p>
                        <span>日预算</span>
                        <span>{{topDate.dailyBudgetAmount | numTo$}}</span>
                    </p>
                    <p>
                        <span>广告状态</span>
                        <span :class="{red_type : topDate.status != 'ENABLED'}">{{topDate.status == 'ENABLED' ? '启用' : '暂停'}}</span>
                    </p>
                </div>
            </section>
            <!-- 右面固定 -->
            <div class="checket_time">
                时区： UTC
            </div>
        </div>

        <!-- 内容 -->
        <div class="createlist_contant">
            <h1>创建广告组</h1>
            <div class="createlist_form">
                <p class="createlist_title">投放应用</p>

                <!-- 搜索 -->
                <div class="createlist_top_search">
                    <section>
                        <img :src="appDate.logoAdress" alt="">
                        <p>{{appDate.appName}}</p>
                        <span>{{appDate.developerName}}</span>
                    </section>
                </div>

                <!-- 选择投放国家 -->
                <p class="createlist_title">投放地区</p>
                <div class="createlist_contry" v-if="checkList.length != 0">
                    <span>
                        <i class='iconfont blue icon-duoxuan-yixuan'></i>
                        {{checkList[0] | countryset}}
                    </span>
                </div>

                <!-- 预算设置 -->
                <p class="createlist_title">预算设置
                    <span>(设置后将会创建对应匹配模式的广告系列/广告组)</span>
                </p>
                <ul class="createlist_yusuan">
                    <li :class="{yusan_li_true: Intelligence}" @click="Intelligence = true">
                        <h3>智能匹配</h3>
                        <div>
                            <p>
                                <i>*</i>总预算</p>
                            <input type="text" placeholder="请输入数字" v-model="IntelligenceObj.zong" disabled>
                        </div>
                        <div>
                            <p>
                                <i>*</i>日预算</p>
                            <input type="text" placeholder="请输入数字" v-model="IntelligenceObj.ri" disabled>
                        </div>
                        <div>
                            <p>
                                <i>*</i>默认CPC</p>
                            <input type="text" placeholder="请输入数字" v-model="IntelligenceObj.cpc">
                        </div>
                        <div>
                            <p>CPA目标</p>
                            <input type="text" placeholder="请输入数字" v-model="IntelligenceObj.cpa">
                        </div>
                        <div class="yusuan_bgm">
                            <i @click.stop="Intelligence = !Intelligence"></i>
                        </div>
                    </li>
                    <li :class="{yusan_li_true: widely}" @click="widely = true">
                        <h3>广泛匹配</h3>
                        <div>
                            <p>
                                <i>*</i>总预算</p>
                            <input type="text" placeholder="请输入数字" v-model="widelyObj.zong" disabled>
                        </div>
                        <div>
                            <p>
                                <i>*</i>日预算</p>
                            <input type="text" placeholder="请输入数字" v-model="widelyObj.ri" disabled>
                        </div>
                        <div>
                            <p>
                                <i>*</i>默认CPC</p>
                            <input type="text" placeholder="请输入数字" v-model="widelyObj.cpc">
                        </div>
                        <div>
                            <p>CPA目标</p>
                            <input type="text" placeholder="请输入数字" v-model="widelyObj.cpa">
                        </div>
                        <div class="yusuan_bgm">
                            <i @click.stop="widely = !widely"></i>
                        </div>
                    </li>
                    <li :class="{yusan_li_true: accurate}" @click.stop="accurate = true">
                        <h3>精准匹配</h3>
                        <div>
                            <p>
                                <i>*</i>总预算</p>
                            <input type="text" placeholder="请输入数字" v-model="accurateObj.zong" disabled>
                        </div>
                        <div>
                            <p>
                                <i>*</i>日预算</p>
                            <input type="text" placeholder="请输入数字" v-model="accurateObj.ri" disabled>
                        </div>
                        <div>
                            <p>
                                <i>*</i>默认CPC</p>
                            <input type="text" placeholder="请输入数字" v-model="accurateObj.cpc">
                        </div>
                        <div>
                            <p>CPA目标</p>
                            <input type="text" placeholder="请输入数字" v-model="accurateObj.cpa">
                        </div>
                        <div class="yusuan_bgm">
                            <i @click.stop="accurate = !accurate"></i>
                        </div>
                    </li>
                </ul>

                <!-- 广告系列命名设置 -->
                <p class="createlist_title">命名设置</p>

                <!-- 广告组命名设置 -->
                <div class="create_tuo_box1">
                    <p class="create_tb_title">
                        广告组命名
                        <span>(可长按拖动标签至下方设置规则)</span>
                    </p>
                    <div class="create_tb_biao">
                        <p>标签</p>
                        <div class="create_tb_biao_div">
                            <section v-for="(ele,index) in AdvertisementZuArr" :key="index">
                                <span>{{ele}}</span>
                                <span class="create_tbb_ja create_tbb_ja3" @mousedown="emdown($event,index,'bom')">{{ele}}</span>
                            </section>
                            <div @click="zidingyiClick('bom')">
                                <i class="iconfont icon-plus-add"></i>自定义</div>
                        </div>
                    </div>
                    <!-- 插入的盒子 -->
                    <div class="create_tb_cha">
                        <p v-if="!newAdvertisementZuArrSet">未设置~</p>
                        <aside v-if="newAdvertisementZuArrSet">设置</aside>
                        <div class="create_tb_cha_div">
                            <section v-for="(ele,index) in newAdvertisementZuArr" :key="index">
                                <span>{{ele}}</span>
                                <img v-if="AdvertisementZuArrShow" src="../../../../images/components/u132.png" alt="" @click="removeClick(index , 'bom')">
                            </section>
                            <section v-if="AdvertisementZuArrInputShow">
                                <input type="text" placeholder="自定义输入" @blur="inputFocus('bom')" v-model="newAdvertisementZuArrValue">
                                <img v-if="AdvertisementZuArrShow" src="../../../../images/components/u132.png" alt="" @click="removerInput('bom')">
                            </section>
                        </div>
                        <div class="create_tbc_btn" v-if="newAdvertisementZuArrSet">
                            <el-button type="primary" v-if="AdvertisementZuArrShow" @click="AdvertisementZuArrShow = !AdvertisementZuArrShow">保存</el-button>
                            <el-button v-if="!AdvertisementZuArrShow" @click="AdvertisementZuArrShow = !AdvertisementZuArrShow">编辑</el-button>
                        </div>
                    </div>

                </div>

                <!-- 账户信息 -->
                <p class="createlist_title" v-if="userType.isLoc">发票设置</p>
                <div class="user_infor" v-if="userType.isLoc">
                    <p>公司或产品名称</p>
                    <input type="text" disabled v-model="userType.clientName">
                    <p>订单号</p>
                    <input type="text" disabled  v-model="userType.orderNumber">
                    <p>主要联系人姓名</p>
                    <input type="text" disabled v-model="userType.buyerName">
                    <p>主要联系人邮箱</p>
                    <input type="text" disabled v-model="userType.buyerEmail">
                    <p>结算联系人姓名</p>
                    <input type="text" disabled v-model="userType.billingContactName">
                    <p>结算联系人邮箱</p>
                    <input type="text" disabled v-model="userType.billingContactEmail">
                </div>

                <!-- 受众设置 -->
                <p class="createlist_title">受众设置</p>
                <div class="createlist_audience">
                    <div class="createlist_aud_radio">
                        <el-radio v-model="radio" label="1">选择受众模板</el-radio>
                        <el-radio v-model="radio" label="2">手动设置</el-radio>
                    </div>
                    <div class="createlist_aud_box" v-if="radio == '1' && !moclle">
                        <div class="createlist_audb_search">
                            <input type="text" placeholder="请输入模板名称" v-model="AudienceTemplatesByName">
                            <span @click="audienceSearchClick">
                                <i class="iconfont icon-icon-plus-search"></i>
                            </span>
                        </div>
                        <div class="createlist_audb_list">
                            <h2>模板列表</h2>
                            <p v-if="audienceList.length == 0">模板列表为空~</p>
                            <ul v-if="audienceList.length != 0">
                                <li v-for="(ele,index) in audienceList" :key="index">
                                    <div>{{index+1}}、&nbsp; {{ele.templateName}}</div>
                                    <div>
                                        <i class="iconfont icon-shanchu" @click="audienceRmoveClick(index)"></i>
                                        <i class="iconfont icon-eye" @click="audienceLookClick(ele.audienceTemplateId)"></i>
                                        <i class="iconfont icon-bianji-copy" @click='audiencesetClick(ele.audienceTemplateId)'></i>
                                        <span @click="choiceMo(index)">选择</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <v-audience v-if="radio == '2' && !moclle"></v-audience>
                    <!-- 生产模板 -->
                    <div class="createlist_mo_ch" v-if="moclle">
                        已设置模板： {{audienceListObj.templateName}}
                        <i class="iconfont icon-eye eye" @click="audienceLookClick(audienceListObj.audienceTemplateId)"></i>
                        <i class="iconfont icon-icon-test1 closeiconft" @click="mobanclose"> </i>
                    </div>
                </div>

                <!-- 关键词设置 -->
                <p class="createlist_title" v-if="widely || accurate">关键词设置</p>
                <div class="createlist_keyword" v-if="!keyWordShow && (widely || accurate)">
                    <span class="key_word">
                        <i class="iconfont icon-icon--" @click="pushkeyWord"></i>
                        <span class='add_keyword' @click="addkeyWord">
                            添加词组
                        </span>
                    </span>
                    <section class="section_one">
                        <span style="width: 30%">词组名称</span>
                        <span style="width: 20%">关键词数</span>
                        <span style="width: 30%">创建时间</span>
                        <span style="width: 20%">操作</span>
                    </section>
                    <div class="createlist_keyword_box">
                        <section v-for="(ele,index) in keyWordList" :key="index">
                            <span style="width: 30%">{{ele.name}}</span>
                            <span style="width: 20%">{{ele.totalCount}}</span>
                            <span style="width: 30%">{{ele.createDate | dateStore}}</span>
                            <span style="width: 20%" class="key_wored">
                                <i @click="keyWordlook(ele.id,ele.name)">查看</i>
                                <i @click="keyWordClick(index)">选择</i>
                            </span>
                        </section>
                    </div>
                </div>
                <!-- 生产关键词 -->
                <div class="createlist_mo_ch" v-if="keyWordShow && (widely || accurate)">
                    已设置关键词组: {{keyWordDate.name}}
                    <i class="iconfont icon-icon-test1 closeiconft" @click="guanjianciClose"> </i>
                </div>

                <!-- 投放时间设置 -->
                <p class="createlist_title">投放时间设置</p>
                <el-date-picker v-model="value7" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format='yyyy-MM-dd' :picker-options="pickerOptions2">
                </el-date-picker>

                <p class="createlist_title">投放开启</p>
                <el-switch v-model="upvalue" active-text="开启" inactive-text="关闭">
                </el-switch>

                <!-- 创建按钮 -->
                <div class="create_list_btn">
                    <el-button @click="$router.go(-1)">取消</el-button>
                    <el-button type="primary" @click="chuangClick">创建</el-button>
                </div>
            </div>
        </div>

        <!-- 查看模板 -->
        <v-audience-look v-if="audiencelookShow" :AudienceTemplateList='AudienceTemplateList'></v-audience-look>
        <!-- 编辑模板 -->
        <div class="aud_set_mo" v-if="setmoShow">
            <div class="aud_set_mo_box">
                <v-audience :AudienceTemplateEditList='AudienceTemplateEditList'></v-audience>
            </div>
        </div>
        <!-- 提交表单模板 -->
        <v-audience-form v-if="formDataShow" :nameType='nameType' :appDate='appDate' :contryList='contryList' :IntelligenceObj='IntelligenceObj' :widelyObj='widelyObj' :accurateObj='accurateObj' :keyWordDate='keyWordDate' :newAdvertisementZuArr='newAdvertisementZuArr' :userType='userType' :audienceListObj='audienceListObj' :value7='value7' :mobanObj='mobanObj'></v-audience-form>

    </div>
</template>

<script>
import NavList from "@components/AsmLaunch/Nav-List";
import Audience from "@components/AsmLaunch/Audience";
import AudienceLook from "@components/AsmLaunch/Audience-Look";
import AudienceForm from "@components/AsmLaunch/Audience-Form";
import { countryTwo } from "@commonJS/country";
import { mapState } from "vuex";
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
            ],
            topDate: {
                storefront: "",
                budgetAmount: 0,
                dailyBudgetAmount: 0,
                status: ""
            },
            loadingtop: false,
            Intelligence: true, //智能
            IntelligenceObj: {
                zong: "",
                ri: "",
                cpc: "",
                cpa: ""
            },
            widely: false, //广泛
            widelyObj: {
                zong: "",
                ri: "",
                cpc: "",
                cpa: ""
            },
            accurate: false, //精准
            accurateObj: {
                zong: "",
                ri: "",
                cpc: "",
                cpa: ""
            },
            AdvertisementListArr: [
                "国家缩写",
                "APP名称",
                "匹配模式",
                "关键词包名"
            ],
            AdvertisementZuArr: [
                "国家缩写",
                "APP名称",
                "匹配模式",
                "关键词包名",
                "性别",
                "年龄",
                "设备",
                "受众类型"
            ],
            newAdvertisementZuArr: [],
            newAdvertisementZuArrSet: false,
            AdvertisementZuArrShow: true,
            AdvertisementZuArrInputShow: false,
            newAdvertisementZuArrValue: "",
            radio: "1",
            audienceList: [],
            audiencelookShow: false, //查看模板
            setmoShow: false, //编辑模板
            setmoType: "编辑",
            moclle: false, //模板选择成功
            keyWordList: [],
            keyWordShow: false, //生产关键词组
            pickerOptions2: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            },
            value7: "",
            adjuzimg: true,
            formDataShow: false, //最后表单的创建
            nameType: "广告组",
            AudienceTemplatesByName: "", //模板名称
            AudienceTemplateList: {}, //查看模板传递
            AudienceTemplateEditList: {}, //编辑模板传递
            loading: null,
            loadingopaction: {
                lock: true,
                text: "加载中",
                spinner: "el-icon-loading",
                background: "rgba(0, 0, 0, 0.7)"
            },
            checkList: [], //选中的国家
            contryList: [],
            appDate: {}, //选中的app
            audienceListObj: {}, //选中的模板
            userType: {}, //对公对私账户
            keyWordDate: {}, //选中的关键词信息
            upvalue: false, //是否开启投放
            mobanObj: {
                audienceAge: []
            } //预览请求模板
        };
    },

    components: {
        "v-nav": NavList,
        "v-audience": Audience,
        "v-audience-look": AudienceLook,
        "v-audience-form": AudienceForm
    },

    filters: {
        countryset: function(value) {
            return countryTwo(value);
        }
    },

    computed: { 
    },

    created() {
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
                    params: queryData
                },
                {
                    name: "创建广告组",
                    path: "/advertising-center/create-list",
                    query: queryData
                }
            ]
        );

        this.GetCampaignObject();
        if (this.$ls.get("adjuz_img")) {
            this.appDate = this.$ls.get("adjuz_img");
        } else {
            this.adjuzimg = false;
        }
        this.AjaxGetAudienceTemplatesByName();
        this.AjaxGetKeyWord();
    },

    updated() {},

    mounted() {},

    destroyed() {},

    methods: {
        dateNow() {
            let date = new Date()
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate(); 
            return (year+""+month+""+strDate)
        },
        audienceSearchClick() {
            //搜索模板
            this.loading = this.$loading(this.loadingopaction);
            this.AjaxGetAudienceTemplatesByName();
        },
        mobanclose() {
            //关闭模板
            this.moclle = false;
            this.audienceListObj = {};
        },
        audienceRmoveClick(index) {
            //删除模板
            this.AjaxDeleteAudienceTemplateById(
                this.audienceList[index].audienceTemplateId
            );
            this.audienceList.splice(index, 1);
        },
        audienceLookClick(id) {
            //查看模板内容
            this.AjaxGetAudienceTemplateById(id);
        },
        audiencesetClick(id) {
            //编辑模板
            this.setmoType = "edit";
            this.AjaxGetAudienceTemplateById(id, "edit");
        },
        choiceMo(index) {
            //选择模板列表
            this.audienceListObj = this.audienceList[index];
            this.moclle = true;
        },
        keyWordClick(index) {
            //选择关键词组
            this.keyWordDate = this.keyWordList[index];
            this.keyWordShow = true;
        },
        guanjianciClose() {
            //关闭关键词
            this.keyWordDate = {};
            this.keyWordShow = false;
        },
        pushkeyWord() {
            //刷新关键词
            this.AjaxGetKeyWord();
        },
        addkeyWord() {
            //添加关键词组
            let routeData = this.$router.resolve({
                path: '/key-lexicon' 
            });
            window.open(routeData.href, '_blank')
        },
        keyWordlook(id,name) {
            //查看关键词组
            let routeData = this.$router.resolve({
                path: '/KeyWordList?id='+id+'&name=' + name 
            });
            window.open(routeData.href, '_blank')
        },
        chuangClick() {
            //点击创建，打开提交表单,验证表单
            //1选择app,国家必选
            let zz = /^[1-9]\d*$|^[1-9]\d*\.\d\d?$|^0\.\d\d?$/;
            //2预算设置
            if (this.Intelligence) {
                if (this.IntelligenceObj.cpc == "") {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "请填写智能匹配",
                        type: 3
                    });
                    return false;
                }
                if (!zz.test(this.IntelligenceObj.cpc)) {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "智能匹配填写不正确",
                        type: 3
                    });
                    return false;
                }
            }
            if (this.widely) {
                if (this.widelyObj.cpc == "") {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "请填写广泛匹配",
                        type: 3
                    });
                    return false;
                }
                if (!zz.test(this.widelyObj.cpc)) {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "广泛匹配填写不正确",
                        type: 3
                    });
                    return false;
                }
            }
            if (this.accurate) {
                if (this.accurateObj.cpc == "") {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "请填写精准匹配",
                        type: 3
                    });
                    return false;
                }
                if (!zz.test(this.accurateObj.cpc)) {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "精准匹配填写不正确",
                        type: 3
                    });
                    return false;
                }
            }
            //3命名设置
            if (this.AdvertisementZuArrShow) {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "请保存广告组命名设置",
                    type: 3
                });
                return false;
            }
            //4.模板设置
            if (!this.audienceListObj.audienceTemplateId) {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "请选择模板",
                    type: 3
                });
                return false;
            } 
            //5.关键词设置
            if (this.widely || this.accurate) {
                if (!this.keyWordDate.id) {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "请选择关键词",
                        type: 3
                    });
                    return false;
                }
            }
            //6.日期不能相等
            if (this.value7.length != 0) {
                if (
                    JSON.stringify(this.value7[0]) ==
                    JSON.stringify(this.value7[1])
                ) {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "时间不能相同",
                        type: 3
                    });
                    return false;
                }
            }
            let url =
                "/api/v1/IntellAdvertiseApi/AdGroup/GetAudienceTemplateById?audienceTemplateId=" +
                this.audienceListObj.audienceTemplateId;
            this.$https.get(url).then(res => {
                this.mobanObj = res.data.data;
            });
            //this.AjaxAdd()
            this.formDataShow = true;
        },
        GetCampaignObject() {
            this.loadingtop = false;
            let url =
                "/api/v1/IntellAdvertiseApi/Campaign/GetCampaignObject?id=" +
                this.$route.params.listId;
            this.$https.get(url).then(res => {
                this.loadingtop = true;
                if (res.data.resultCode == 1000) {
                    this.topDate = res.data.data;
                    this.checkList = [res.data.data.storefront];
                    this.contryList = [
                        {
                            jc: res.data.data.storefront,
                            checked: true,
                            name: countryTwo(res.data.data.storefront)
                        }
                    ];
                    this.IntelligenceObj.zong = this.accurateObj.zong = this.widelyObj.zong =
                        res.data.data.budgetAmount;
                    this.IntelligenceObj.ri = this.widelyObj.ri = this.accurateObj.ri =
                        res.data.data.dailyBudgetAmount;
                    this.AjaxGetUser(res.data.data.adaMid);
                    if (!this.adjuzimg) {
                        this.GetImgUrl(res.data.data.adaMid,res.data.data.storefront); 
                    }
                } else {
                    this.topDate = {
                        img: "",
                        storefront: 0,
                        budgetAmount: 0,
                        dailyBudgetAmount: 0
                    };
                }
            });
        },
        GetImgUrl(id,country) {
            let url = "/api/v1/IntellAdvertiseApi/Campaign/GetAppByAppidCountrys";
            this.$https.post(url, JSON.stringify([{
                 appId: id,
                 countryCode: country.toLowerCase()
            }])).then(res => {
                this.loadingimg = true;
                this.appDate = res.data.data[0];
                this.$ls.set("adjuz_img", res.data.data[0]);
            });
        },
        AjaxGetAudienceTemplatesByName() {
            //根据搜索获取模板列表
            let url =
                "/api/v1/IntellAdvertiseApi/AdGroup/GetAudienceTemplatesByName?name=" +
                this.AudienceTemplatesByName;
            this.$https.get(url).then(res => {
                if (this.loading != null) {
                    this.loading.close();
                }
                this.audienceList = res.data.data;
            });
        },
        AjaxDeleteAudienceTemplateById(id) {
            //根据id删除模板
            let url =
                "/api/v1/IntellAdvertiseApi/AdGroup/DeleteAudienceTemplateById?audienceTemplateId=" +
                id;
            this.$https.get(url).then(res => {});
        },
        AjaxGetAudienceTemplateById(id, type) {
            //根据id查看模板
            this.loading = this.$loading(this.loadingopaction);
            let url =
                "/api/v1/IntellAdvertiseApi/AdGroup/GetAudienceTemplateById?audienceTemplateId=" +
                id;
            this.$https.get(url).then(res => {
                this.loading.close();
                if (type == "edit") {
                    this.AudienceTemplateEditList = res.data.data;
                    this.setmoShow = true;
                } else {
                    this.AudienceTemplateList = res.data.data;
                    this.audiencelookShow = true;
                }
            });
        },
        AjaxGetUser(id) {
            //获取用户信息
            let url =
                "/api/v1/IntellAdvertiseApi/OrgUser/GetUpdateOrgUserInfoModel?id=" +
                this.$route.params.id;
            this.$https.get(url).then(res => {
                this.userType = res.data.data;
                // this.userType.orderNumber =
                //     id +
                //     "_" +
                //     this.$route.params.orgId +
                //     "_" +
                //     this.dateNow()
            });
        },
        AjaxGetKeyWord() {
            //获取关键词
            let url = "/api/v1/IntellAdvertiseApi/Keyword/SearchKeywordGroup";
            this.$https
                .post(
                    url,
                    JSON.stringify({
                        pageIndex: 1,
                        pageSize: 1000000000,
                        requestPar: {
                            name: "",
                            userId: 0
                        }
                    })
                )
                .then(res => {
                    if (res.data.resultCode == 1000) {
                        this.keyWordList = res.data.data.list;
                    }
                });
        },
        AjaxAdd() {
            //创建广告系列
            let list = [];
            if (this.Intelligence) {
                list.push({
                    type: "MATCH",
                    budgetAmount: this.IntelligenceObj.zong,
                    dailyBudgetAmount: this.IntelligenceObj.ri,
                    defaultCpcBid: this.IntelligenceObj.cpc,
                    cpaGoal:
                        this.IntelligenceObj.cpa == ""
                            ? "-1"
                            : this.IntelligenceObj.cpa
                });
            }
            if (this.widely) {
                list.push({
                    type: "BROAD",
                    budgetAmount: this.widelyObj.zong,
                    dailyBudgetAmount: this.widelyObj.ri,
                    defaultCpcBid: this.widelyObj.cpc,
                    cpaGoal:
                        this.widelyObj.cpa == "" ? "-1" : this.widelyObj.cpa
                });
            }
            if (this.accurate) {
                list.push({
                    type: "EXACT",
                    budgetAmount: this.accurateObj.zong,
                    dailyBudgetAmount: this.accurateObj.ri,
                    defaultCpcBid: this.accurateObj.cpc,
                    cpaGoal:
                        this.accurateObj.cpa == "" ? "-1" : this.accurateObj.cpa
                });
            }
            let obj = {
                orgId: this.$route.params.orgId,
                adamid: this.appDate.adamId,
                campaignId: this.$route.params.listId,
                countrys: this.checkList,
                budgetSettings: list,
                adGroupTempName: this.listStrPing(this.newAdvertisementZuArr),
                audienceTemplateId: this.audienceListObj.audienceTemplateId,
                keywordGroupId: !this.keyWordDate.id ? 0 : this.keyWordDate.id,
                campaignTimeSlot:
                    this.value7.length == 0
                        ? null
                        : {
                              startTime: this.value7[0],
                              endTime: this.value7[1]
                          },
                isOpen: this.upvalue,
                locInvoiceInfo: this.userType.isLoc
                    ? {
                          billingContactName: this.userType.billingContactName,
                          billingContactEmail: this.userType
                              .billingContactEmail,
                          clientName: this.userType.clientName,
                          buyerName: this.userType.buyerName,
                          buyerEmail: this.userType.buyerEmail,
                          orderNumber: this.userType.orderNumber
                      }
                    : null
            };
            let _this = this;
            this.loading = this.$loading(this.loadingopaction);
            let url = "/api/v1/IntellAdvertiseApi/AdGroup/CreateAdGroups";
            this.$https.post(url, JSON.stringify(obj)).then(res => {
                this.loading.close()
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "正在创建请等待",
                    type: 3
                });
                setTimeout(() => {
                    _this.$router.go(-1);
                }, 2000);
            });
        },
        listStrPing(list) {
            let str1 = "";
            let arr1 = [];
            list.map((ele, index) => {
                switch (ele) {
                    case "国家缩写":
                        arr1.push(this.checkList[0]);
                        break;
                    case "APP名称":
                        arr1.push(this.appDate.appName);
                        break;
                    case "匹配模式":
                        arr1.push("{{BudgetType}}");
                        break;
                    case "关键词包名":
                        if (this.keyWordDate.id) {
                            arr1.push(this.keyWordDate.name);
                        }
                        break;
                    case "性别":
                        arr1.push("{{AudienceGender}}");
                        break;
                    case "年龄":
                        arr1.push("{{AudienceAge}}");
                        break;
                    case "设备":
                        arr1.push("{{AudienceGender}}");
                        break;
                    case "受众类型":
                        arr1.push("{{AudienceType}}");
                        break;
                    default:
                        arr1.push(ele);
                        break;
                }
            });
            arr1.map(ele => {
                str1 += ele + "-";
            });
            str1 = str1.substring(0, str1.length - 1);
            return str1;
        },
        emdown(ev, index, wei) {
            let _this = this;
            let dom;
            if (!_this.AdvertisementZuArrShow) {
                return false;
            }
            dom = $(".create_tbb_ja3").eq(index);
            dom.css("opacity", 1);
            var oevent = ev || event;
            var distanceX = oevent.clientX;
            var distanceY = oevent.clientY;
            let lswidth;
            let lsscroll;
            let domHeight;
            document.onmousemove = function(ev) {
                var oevent = ev || event;
                lswidth = oevent.clientX;
                lsscroll = oevent.pageY;
                domHeight = $(".create_tb_cha").height();
                dom.css("left", oevent.clientX - distanceX + "px");
                dom.css("top", oevent.clientY - distanceY + "px");
            };
            document.onmouseup = function() {
                document.onmousemove = null;
                document.onmouseup = null;

                dom.css({ left: "2px", opacity: "0", top: "2px" });
                if (
                    lsscroll >= 1240 &&
                    lsscroll <= 1240 + domHeight &&
                    lswidth > 270 &&
                    lswidth < 1035
                ) {
                    if (
                        _this.newAdvertisementZuArr.indexOf(
                            _this.AdvertisementZuArr[index]
                        ) == -1
                    ) {
                        _this.newAdvertisementZuArr.push(
                            _this.AdvertisementZuArr[index]
                        );
                        if (_this.newAdvertisementZuArr.length != 0) {
                            _this.newAdvertisementZuArrSet = true;
                        }
                    } else {
                        _this.$store.commit("SET_SHOW_TRUE", {
                            value: "您插入的有重复",
                            type: 3
                        });
                    }
                }
            };
        },
        removeClick(index, wei) {
            this.newAdvertisementZuArr.splice(index, 1);
            if (
                this.newAdvertisementZuArr.length == 0 &&
                this.AdvertisementZuArrInputShow == false
            ) {
                this.newAdvertisementZuArrSet = false;
            }
        },
        zidingyiClick(wei) {
            //自定义
            if (this.AdvertisementZuArrShow) {
                this.AdvertisementZuArrInputShow = true;
                this.newAdvertisementZuArrSet = true;
            }
        },
        inputFocus(wei) {
            //自定义失焦点
            if (this.newAdvertisementZuArrValue == "") {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "自定义内容不能为空",
                    type: 3
                });
            } else {
                if (
                    this.newAdvertisementZuArr.indexOf(
                        this.newAdvertisementZuArrValue
                    ) == -1
                ) {
                    this.newAdvertisementZuArr.push(
                        this.newAdvertisementZuArrValue
                    );
                    this.AdvertisementZuArrInputShow = false;
                    this.newAdvertisementZuArrValue = "";
                } else {
                    this.$store.commit("SET_SHOW_TRUE", {
                        value: "您插入的有重复",
                        type: 3
                    });
                }
            }
        },

        removerInput(wei) {
            this.AdvertisementZuArrInputShow = false;
            this.newAdvertisementZuArrValue = "";
        }
    }
};
</script>