<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.task_look {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    animation: animation1 0.5s ease-out;
    -webkit-animation: animation1 0.5s ease-out;
    .over_span {
        width: 250px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    section {
        border: 1px solid #ebeef5;
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
            margin-bottom: 20px;
            font-weight: bold;
        }
        .tant_index {
            width: 100%;
            height: 350px;
            overflow-y: auto;
            ul {
                width: 100%;
                box-sizing: border-box;
                border: 1px solid @border;
                margin-bottom: 14px;
                li {
                    display: flex;
                    box-sizing: border-box;
                    border-bottom: 1px solid @border;
                    justify-content: space-between;
                    padding: 0 8px;
                    align-items: center;
                    height: 46px;
                    p {
                        max-width: 250px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    &:last-child {
                        border: none;
                    }
                    &:hover {
                        background: #f7f7f7;
                    }
                    &.list {
                        background: #fff !important;
                        span {
                            margin-right: 20px;
                            color: #bcbcbc;
                            &.green {
                                color: #26b812;
                            }
                            &.red {
                                color: red;
                            }
                            &.ccc {
                                color: @font_color;
                            }
                        }
                    }
                    span {
                        margin-right: 20px;
                        color: #bcbcbc;
                        &.green {
                            color: #26b812;
                        }
                        &.red {
                            color: red;
                        }
                        &.ccc {
                            color: @font_color;
                        }
                    }
                    div {
                        display: flex;
                        align-items: center;
                    }
                    &.teshuli{
                        height: 50px;
                        background: #f7f7f7;
                        img {
                            width: 36px;
                            height: 36px;
                            border-radius: 6px;
                            margin-right: 10px;
                        }
                        div {
                            span {
                                font-size: 14px;
                                font-weight: bold;
                                color: @font_color;
                            }
                        }
                    }
                }
            }
        }
    }
    .btn_index {
        width: 100%;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        button {
            width: 120px;
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
</style>
<template>
    <div class="task_look">
        <section>
            <h1>
                {{name}}列表
            </h1>
            <div class="tant_index">
                <ul v-for="(ele,value,index) in list" :key="index" v-if="name == '创建'">
                    <li v-if="tableTittle" class="teshuli">
                        <div>
                            <img v-if="topimgArr[index]" :src="topimgArr[index].img" alt="">
                            <span v-if="topimgArr[index]" class="over_span">{{topimgArr[index].name}}</span>
                        </div>
                        <p>投放地区 ： {{ele[0].storefront | country}}</p>
                    </li>
                    <li v-for="(ele2,index2) in ele" :key="index2" style="background : #fff">
                        <p>{{ele2.name}}</p>
                        <div>
                            <span class="green" v-if="ele2.status == '1'">
                                用时：{{ele2.useTime | formatting}}
                            </span>
                            <span class="red" v-if="ele2.status == '0'">
                                失败原因：{{ele2.errorMsg}}
                            </span>
                            <span class="ccc" v-if="ele2.status == '2'">
                                {{ele2.useTime | formatting}}
                            </span>
                            <span class="ccc" v-if="ele2.status == '-1'">
                                {{''}}
                            </span>
                            <span :class="{green: ele2.status == '1' , red: ele2.status == '0' , ccc: ele2.status == '2' ||  ele2.status == '-1'}">
                                {{ele2.status == '1'? name + '成功' : ''}} {{ele2.status == '0'? name + '失败' : ''}} {{ele2.status == '2'? '正在' + name : ''}} {{ele2.status == '-1'? '等待' + name : ''}}
                            </span>
                        </div>
                    </li>
                </ul>

                <!-- 如果不是创建不分组 -->
                <ul v-if="name != '创建'">
                    <li v-for="(ele2,index2) in list" :key="index2" class="list">
                        <p>{{ele2.name}}</p>
                        <div>
                            <span class="green" v-if="ele2.status == '1'">
                                用时：{{ele2.useTime | formatting}}
                            </span>
                            <span class="red" v-if="ele2.status == '0'">
                                失败原因：{{ele2.errorMsg}}
                            </span>
                            <span class="ccc" v-if="ele2.status == '2'">
                                {{ele2.useTime | formatting}}
                            </span>
                            <span class="ccc" v-if="ele2.status == '-1'">
                                {{''}}
                            </span>
                            <span :class="{green: ele2.status == '1' , red: ele2.status == '0' , ccc: ele2.status == '2' ||  ele2.status == '-1'}">
                                {{ele2.status == '1'? name + '成功' : ''}} {{ele2.status == '0'? name + '失败' : ''}} {{ele2.status == '2'? '正在' + name : ''}} {{ele2.status == '-1'? '等待' + name : ''}}
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="btn_index">
                <el-button @click="$parent.lookShow = false">关闭</el-button>
            </div>
        </section>
    </div>
</template>

<script>
import { countryTwo } from "@commonJS/country";
export default {
    data() {
        return {
            timefen: "00",
            timemiao: "00",
            time: 0,
            timefen1: "00",
            timemiao1: "00",
            time1: 100,
            timer: null,
            timer2: null,
            list: {},
            loadingAll: null,
            logoShow: true,
            topimgArr: [],
            loadingopaction: {
                lock: true,
                text: "加载中",
                spinner: "el-icon-loading",
                background: "rgba(0, 0, 0, 0.7)"
            },
            tableTittle: true
        };
    },

    filters: {
        formatting: function(value) {
            let s = parseInt(value % 60);
            let f = parseInt(value / 60);
            if (s < 10) s = "0" + s;
            if (f < 10) f = "0" + f;
            return f + ":" + s;
        },
        country: function(value) {
            return countryTwo(value);
        }
    },

    props: {
        name: {},
        listType: {}
    },

    components: {},

    computed: {},

    created() {},

    updated() {},

    mounted() {
        let _this = this;
        if (this.name == "创建") {
            this.timer2 = setInterval(() => {
                for (var i in _this.list) {
                    _this.list[i].map((ele, index) => {
                        if (ele.status == 2) {
                            ele.useTime++;
                        }
                    });
                }
            }, 1000);
        } else {
            this.timer2 = setInterval(() => {
                _this.list.map((ele, index) => {
                    if (ele.status == 2) {
                        ele.useTime++;
                    }
                });
            }, 1000);
        }
        this.AjaxGetCampaignOperateResultDetail();

        if (this.$route.path != "/advertising-center/account") {
            this.tableTittle = false;
        }
    },

    destroyed() {
        clearInterval(this.timer2);
        clearInterval(this.timer);
    },

    methods: {
        SetData(data) {
            let arr = []; 
            if (this.name == "创建") {
                data.map(ele => {
                    arr.push(ele.adamId+'-'+ele.storefront);
                });
                arr = [...new Set(arr)]; //获得去重后的id
                let newarr = {};
                arr.map((ele, index) => {
                    newarr[ele] = [];
                    data.map((value, item) => {
                        if (ele == value.adamId+'-'+value.storefront) {
                            newarr[ele].push(value);
                        }
                    });
                    if (this.logoShow) {
                        //头部图片跟名字只请求一次
                        this.topimgArr.push({
                            id: ele.substring(0,ele.indexOf('-')),
                            country:  ele.substring(ele.indexOf('-')+1,ele.lenght),
                            img: "",
                            name: ""
                        });
                    }
                });
                this.list = newarr;
                console.log(newarr)
                console.log(this.topimgArr)
                if (this.logoShow) {
                    this.topimgArr.map((ele, index) => {
                        this.GetImgUrl(ele.id,ele.country,index);
                    });
                }
                this.logoShow = false;
            } else {
                this.list = data;
            }
        },
        AjaxGetCampaignOperateResultDetail() {
            let _this = this;
            var url = null;
            clearInterval(this.timer);
            if (this.$route.path == "/advertising-center/account") {
                url =
                    "/api/v1/IntellAdvertiseApi/Campaign/GetCampaignOperateResultDetail?type=" +
                    _this.listType +
                    "&orgid=" +
                    this.$route.query.orgId;
            } else {
                url =
                    "/api/v1/IntellAdvertiseApi/AdGroup/GetAdGroupOperateResultDetail?type=" +
                    _this.listType +
                    "&orgid=" +
                    this.$route.query.orgId;
            }
            _this
                .$https({
                    method: "get",
                    url: url,
                    timeout: 5000
                })
                .then(res => {
                    if (res.data.resultCode == 1000) {
                        //根据adamid进行分组
                        _this.SetData(res.data.data);
                    }
                });
            this.timer = setInterval(() => {
                //每5秒刷新一次
                _this
                    .$https({
                        method: "get",
                        url: url,
                        timeout: 5000
                    })
                    .then(res => {
                        if (res.data.resultCode == 1000) {
                            //根据adamid进行分组
                            _this.SetData(res.data.data);
                        }
                    });
            }, 5000);
        },
        GetImgUrl(id,country, index) {
            let url = "/api/v1/IntellAdvertiseApi/Campaign/GetAppByAppidCountrys";
            this.$https.post(url, JSON.stringify([{
                    appId: id,
                    countryCode: country
                }])).then(res => {
                this.loadingimg = true;
                if (res.data.resultCode == 1000) {
                    this.topimgArr[index].img = res.data.data[0].logoAdress;
                    this.topimgArr[index].name = res.data.data[0].appName;
                }
            });
        }
    }
};
</script>