<style lang='less' scoped>
//公共头部导航
//2018-4-24-zb
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@btnhover: #1559c8;
@import url("../../base/commonCSS/scroll.css");
.st_index {
    position: fixed;
    min-width: 1200px;
    height: 60px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    .st_body {
        height: 60px;
        .st_logo {
            height: 60px;
            cursor: pointer;
            margin-left: 45px;
            float: left;
            width: 155px;
            background: url("../../images/components/home_logo2.png") no-repeat
                center center;
        }
        ul {
            margin-left: 18px;
            height: 60px;
            float: left;
            display: flex;
            li {
                .st_li_releave,
                a {
                    line-height: 60px;
                    margin-left: 30px;
                    color: #fff;
                    font-size: 14px;
                    font-weight: 400;
                    cursor: pointer;
                    &.st_lasta {
                        color: #9dd0e8;
                    }
                }
                .st_li_releave {
                    position: relative;
                    padding-right: 17px;
                    i {
                        display: block;
                        border: 5px solid transparent;
                        border-top: 5px solid #fff;
                        position: absolute;
                        right: 0px;
                        top: 27px;
                    }
                    section {
                        width: 120px;
                        height: 80px;
                        overflow: hidden;
                        background: #fff;
                        position: absolute;
                        top: 53px;
                        left: -24px;
                        border-radius: 4px;
                        z-index: 100;
                        a {
                            line-height: 35px;
                            display: block;
                            margin-left: 0;
                            text-align: center;
                            color: #6c757d;
                            &:first-child {
                                margin-top: 8px;
                            }
                            &:last-child {
                                margin-bottom: 2px;
                            }
                            &:hover {
                                background: #f7f7f7;
                            }
                            // &:focus {
                            //     background: @color;
                            //     color: #fff;
                            // }
                        }
                    }
                }
            }
        }
        .st_search {
            float: right;
            width: 350px;
            height: 34px;
            background: #fff;
            border-radius: 18px;
            margin-top: 13px;
            box-sizing: border-box;
            padding: 0 27px;
            position: relative;
            display: flex;
            .icon-icon-plus-search {
                display: block;
                text-align: center;
                width: 30px;
                line-height: 34px;
                height: 34px;
                font-size: 20px;
                position: absolute;
                top: 2px;
                right: 27px;
                cursor: pointer;
            }
            .st_chain {
                width: 54px;
                cursor: pointer;
                height: 50px;
                position: relative;
                img {
                    margin-top: 9px;
                }
                i {
                    position: absolute;
                    border: 5px solid #fff;
                    border-top: 5px solid #6c757d;
                    top: 14px;
                    right: 11px;
                }
            }
            .st_chain_list {
                width: 258px;
                height: 0;
                box-sizing: border-box;
                background: #fff;
                position: absolute;
                border-radius: 4px;
                top: 40px;
                left: 10px;
                overflow-y: auto;
                padding: 0px 10px 0 14px;
                z-index: 100;
                .st_chain_box {
                    height: 230px;
                    margin-top: 9px;
                    width: 227px;
                    section {
                        width: 100%;
                        height: 35px;
                        box-sizing: border-box;
                        padding-left: 8px;
                        display: flex;
                        cursor: pointer;
                        &:hover {
                            background: @bgk;
                        } 
                        &.st_bgk {
                            background: @color;
                            color: #fff;
                        }
                        img {
                            width: 26px;
                            height: 18px;
                            margin-top: 8px;
                        }
                        p {
                            line-height: 35px;
                            margin-left: 9px;
                        }
                    }
                }
            }
            .st_shu {
                display: block;
                height: 16px;
                width: 1px;
                background: #a9a9a9;
                margin-top: 9px;
            }
            input {
                margin-left: 16px;
                width: 200px;
                border: none;
                outline: none;
                color: @font_color;
                &::-webkit-input-placeholder {
                    color: #9a9a9a;
                }
            }
        }
        .st_sign {
            float: right;
            margin-left: 30px;
            margin-right: 45px;
            display: flex;
            align-items: center;
            height: 60px;
            button {
                width: 70px;
                height: 30px;
                text-align: center;
                line-height: 30px;
                cursor: pointer;
                border-radius: 3px;
                border: none;
                outline: none;
                &:nth-child(1) {
                    color: #f7f7f7;
                    //background: #2d76ed;
                    background: none;
                    margin-right: 14px;
                }
                &:nth-child(1):hover {
                    background: @btnhover;
                }
                &:nth-child(2) {
                    color: #f7f7f7;
                    background: @btnhover;
                }
            }
        }
        .st_user {
            float: right;
            margin-left: 30px;
            margin-right: 45px;
            line-height: 60px;
            color: #fff;
            padding-right: 16px;
            cursor: pointer;
            position: relative;
            .st_user_i {
                display: block;
                border: 5px solid transparent;
                border-top: 5px solid #fff;
                position: absolute;
                right: 0px;
                top: 29px;
            }
        }
    }
    .st_user_list {
        width: 120px; 
        overflow: hidden;
        background: #fff;
        position: absolute;
        top: 53px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 4px;
        z-index: 100;
        padding-bottom: 8px;
        div,a,
        span {
            line-height: 35px;
            display: block;
            margin-left: 0;
            text-align: center;
            color: #6c757d;
            i {
                margin-right: 8px;
            }
            &:first-child {
                margin-top: 8px;
            }
            &:last-child {
                margin-bottom: 2px;
            }
            &:hover {
                background: #f7f7f7;
            }
            &:focus {
                background: @color;
                color: #fff;
            }
        }
    }
}
</style>
<template>
  <div class="st_index" :style="{background : background_color}">
    <div class="st_body">
      <div class="st_logo" @click="$router.push('/home')"></div>
      <ul class="clear">
        <li>
          <router-link :to="{path: '/'}">首页</router-link>
        </li>
        <li>
          <div class="st_li_releave" @mouseover="show2 = true" @mouseout="show2 = false">
            智查工具
            <i class="st_user_i"></i>
            <transition name="el-zoom-in-top">
              <section class="st_top_hover" v-show="show2" @mouseout="show2 = false">
                <router-link :to="{path: '/rankingList'}">竞价词榜</router-link>
                <router-link :to="{path: '/keyword-comparison-list'}">竞品对比</router-link>
              </section>
            </transition>
          </div>
        </li>
        <li>
          <router-link :to="{path: '/agent'}" class="st_lasta">
            <i class="iconfont icon-xiaoshouguanli"></i> 代理投放
          </router-link>
        </li>
      </ul>
      <!-- 用户中心 -->
      <div class="st_user" @mouseover="show3 = true" @mouseout="show3 = false" v-if="userType">
        {{userName}}
        <i class="st_user_i"></i>
        <transition name="el-zoom-in-top">
          <div class="st_user_list" @mouseout="show3 = false" v-show="show3">
            <div @click="toadmain" v-if="vipShow">
              <i class="iconfont icon-huodongzhongxin"></i>广告中心
            </div>
            <span @click="userOut">
              <i class="iconfont icon-tuichu"></i>退出登录</span>
          </div>
        </transition>
      </div>
      <div class="st_sign" v-if="!userType">
        <button @click="$router.push('/login')">登录</button>
        <button @click="$router.push('/register')">注册</button>
      </div>
      <!-- 顶部搜索 -->
      <div class="st_search" v-if="searchShow">
        <div class="st_chain" @click="chainList" @mouseleave="faoust">
          <img :src='countryNow.nationImgUrl' alt="">
          <i></i>
        </div>
        <i class="iconfont icon-icon-plus-search" @click="searchRouteLink"></i>
        <div class="st_chain_list" @mouseover="list_over" @mouseleave="list_out">
          <div class="st_chain_box">
            <section @click="hrefClick(index)" :class="{st_bgk: st_bgk == index}" v-for="(ele,index) in countryList" :key="index">
              <img :src="ele.nationImgUrl" alt="" :title="ele.nationCHSName">
              <p>{{ele.nationCHSName}}</p>
            </section>
          </div>
        </div>
        <span class="st_shu"></span>
        <input type="text" id="top_search" placeholder="关键词或APP" v-model="searchData" autocomplete="off">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import reduceCookie from "@commonJS/reduceCookie";
import Vip from '@commonJS/Vip'
export default {
    data() {
        return {
            st_bgk: -1,
            overList: false, //当前国家列表是否应该消失
            searchData: "", //搜索内容
            show2: false,
            show3: false,
            countryNow: {}
        };
    },

    props: {
        searchShow: {
            type: Boolean,
            default: true
        },
        background_color: {
            type: String,
            default: "#2d76ed"
        }
    },

    components: {},

    computed: {
        ...mapState({
            countryList: state => state.Home.countryList,
            userType: state => state.Sign.userType,
            userName: state => state.Sign.userName,
            vipShow: state => state.Sign.vipShow
        })
    },

    created() {},

    updated() {},

    mounted() { 

        this.$store.dispatch("GET_COUNTRYLIST").then(() => {
            this.countryNow = this.$store.state.Home.countryList[0];
        });

        this.$store.commit("GET_USERTYPE");
        this.$store.dispatch("GET_ISMANAGER");

        let _this = this;
        $("#top_search").keydown(function(e) {
            var curKey = e.which;
            if (curKey == 13) {
                _this.searchRouteLink();
                return false;
            }
        });
    },

    methods: {
        toadmain() { 
            let routeData = this.$router.resolve({
                path: '/advertising-center/home' 
            });
            window.open(routeData.href, '_blank')  
        },
        userOut() {
            //退出登录
            this.$store.commit("SET_USERTYPE");
            this.$store.commit("GET_USERTYPE");
        },
        chainList() {
            this.domHeight("st_chain_list", 239);
        },
        hrefClick(index) {
            //选择国家
            this.st_bgk = index;
            this.domHeight("st_chain_list", 0);
            this.countryNow = this.countryList[index];
        },
        //划出上部
        faoust() {
            setTimeout(() => {
                if (!this.overList) {
                    this.domHeight("st_chain_list", 0);
                }
            }, 300);
        },
        //划入国家列表
        list_over() {
            this.overList = true;
        },
        //划出国家列表
        list_out() {
            this.overList = false;
            this.domHeight("st_chain_list", 0);
        },
        //搜索跳转
        searchRouteLink() {
            if (this.searchData == "") {
                this.$message({
                    message: "搜索关键词不能为空！！！",
                    type: "warning"
                });
            } else {
                this.$router.push({
                    path: "/rankingDetails-List",
                    query: {
                        key: this.searchData,
                        country: this.countryNow.nationId
                    }
                });
            }
        },
        domHeight(dom, num) {
            $("." + dom).animate(
                {
                    height: num + "px"
                },
                300
            );
        }
    }
};
</script>