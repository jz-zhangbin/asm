<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
.login_index {
    box-sizing: border-box;
    padding: 60px 0 0 0;
    background: url(http://static.adjuz.com/asmmaster/img/login_left.png) 0 0
            no-repeat,
        url(http://static.adjuz.com/asmmaster/img/login_right.png) bottom right
            no-repeat;
    .login_body {
        min-width: 1200px;
        display: flex;
        min-height: 100%;
        justify-content: center;
        box-sizing: border-box;
        padding-top: 120px;
    }
    .login_box {
        width: 400px;
        h1 {
            height: 54px;
            text-align: center;
            font-size: 24px;
        }
        .login_input {
            border: 1px solid @border;
            width: 400px;
            height: 42px;
            display: flex;
            margin-bottom: 24px;
            border-radius: 6px;
            box-sizing: border-box;
            padding: 0 14px;
            align-items: center;
            input {
                width: 330px;
                margin-left: 10px;
                border: none;
                outline: none;
                height: 38px;
                &::-webkit-input-placeholder {
                    color: #9a9a9a;
                }
            }
        }
        .login_input_war {
            border: none;
            background: #fff4f4;
            color: #f62d51;
        }
        .login_btn {
            margin-top: 10px;
            background: @color;
            height: 45px;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
            text-align: center;
            justify-content: center;
            line-height: 40px;
            &:hover {
                background: @btnhover;
            }
        }
        .login_bottom {
            width: 400px;
            display: flex;
            justify-content: space-between;
            a:nth-child(1) {
                color: #6c757d;
            }
            a:nth-child(2) {
                color: @color;
                text-decoration: underline !important;
            }
        }
    }
}
</style>
<template>
    <div class="login_index">
        <v-search-top></v-search-top>

        <div class="login_body">
            <div class="login_box">
                <h1>平台登录</h1>
                <div class="login_input">
                    <i class="iconfont icon-zhucedengluyonghuming"></i>
                    <input type="text" placeholder="请输入你的工作邮箱" v-model="userEmil">
                </div>
                <div class="login_input">
                    <i class="iconfont icon-zhucedenglumima"></i>
                    <input type="text" id="login_btn" placeholder="请输入密码/至少6位" v-model="userWorld" class="passinput" @focus="changeinput">
                </div>
                <div class="login_input login_input_war" v-if="war">
                    {{warData}}
                </div>
                <button class="login_input login_btn" @click="loginSubmit">
                    登录
                </button>
                <div class="login_bottom">
                    <router-link :to="{path: '/modif-password'}">忘记密码？</router-link>
                    <router-link :to="{path: '/register'}">注册</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import crypto from "crypto";
import qs from "qs";
import reduceCookie from "@commonJS/reduceCookie";
export default {
    data() {
        return {
            war: false, //错误提醒
            warData: "",
            userEmil: "",
            userWorld: "",
            searchShow: false,
            routerPath: true //是否可以直接返回上一页
        };
    },
    beforeRouteEnter(to, from, next) {
        /**
         * 当用户切换账号时
         * 如果是从后台过来的
         * 历史记录符合下面三个
         * 则登录成功后不返回上一页
         * 返回个人中心页
         * 实则相反
         */

        var bool = false;
        if (from.matched.length != 0) {
            if (
                from.matched[0].path == "/advertising-center" ||
                from.matched[0].path == "/key-lexicon" ||
                from.path == "/intgentMitorLibrary"
            ) {
                bool = false;
            } else {
                bool = true;
            }
        } 
        next(vm => {
            vm.routerPath = bool;
        });
    },
    mounted() {
        this.$height(".login_index");

        $(".login_input input").on("focus", function() {
            $(this)
                .parent()
                .css("border-color", "#2d76ed");
        });
        $(".login_input input").on("blur", function() {
            $(this)
                .parent()
                .css("border-color", "#dee2e6");
        });

        //回车登录事件
        let _this = this;
        $("#login_btn").keydown(function(e) {
            var curKey = e.which;
            if (curKey == 13) {
                _this.loginSubmit();
                return false;
            }
        });
    },

    methods: {
        changeinput() {
            $(".passinput").attr("type", "password");
        },

        loginSubmit() {
            if (this.userEmil == "" || this.userWorld == "") {
                this.war = true;
                this.warData = "邮箱或密码不能为空！";
                return false;
            }

            this.$https
                .get(
                    "/api/v1/IntellSearchApi/Login/UserLogin?userName=" +
                        this.userEmil +
                        "&userPasswd=" +
                        this.getmd5(this.userWorld)
                )
                .then(res => {
                    if (res.data.resultCode == 1000) {
                        //创建cookie
                        let secureId = res.data.data.userId + this.userEmil;
                        //console.log(this.getmd5(secureId).toUpperCase());
                        let Adjuz_UserInfoNEW = {
                            Adjuz_SecureId: this.getmd5(secureId).toUpperCase(),
                            uid: res.data.data.userId,
                            urole: res.data.data.userRoles,
                            useremail: this.userEmil
                        };
                        this.$cookie.set(
                            "Adjuz_UserInfoNEW",
                            qs.stringify(Adjuz_UserInfoNEW)
                        );
                        //console.log(reduceCookie(this.$cookie.get('Adjuz_UserInfoNEW')))
                        if (this.routerPath) {
                            this.$router.go(-1);
                        } else {
                            this.$router.push("/advertising-center");
                        }
                    } else if (res.data.resultCode == 404) {
                        this.war = true;
                        this.warData = "账号或密码错误，请重新登录！";
                    }
                });
        },

        getmd5(b) {
            var a;
            var md5 = crypto.createHash("md5");
            md5.update(b);
            var a = md5.digest("hex");
            return a;
        }
    }
};
</script>