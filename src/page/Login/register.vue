<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
.register_index {
    box-sizing: border-box;
    padding-top: 60px;
    background: url(http://static.adjuz.com/asmmaster/img/login_left.png) 0 0
            no-repeat,
        url(http://static.adjuz.com/asmmaster/img/login_right.png) bottom right
            no-repeat;
    .register_body {
        min-width: 1200px;
        min-height: 100%;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        padding-top: 80px;
    }
    .register_box {
        width: 400px;
        h1 {
            height: 54px;
            text-align: center;
            font-size: 24px;
        }
    }
    .register_input {
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
    .login_input_two {
        border: none;
        height: 40px;
        margin-bottom: 20px;
        display: flex;
        .code {
            display: flex;
            margin-left: 10px;
        }
        p {
            margin-left: 12px;
            color: #36bea6;
            cursor: pointer;
            line-height: 42px;
        }
        .login_pass {
            display: flex;
            height: 42px;
            align-items: center;
            border: 1px solid @border;
            border-radius: 6px;
            width: 148px;
            box-sizing: border-box;
            padding: 0 14px;
            input {
                width: 90px;
                outline: none;
                border: none;
                height: 36px;
                margin-left: 10px;
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
        border-radius: 6px;
        &:hover {
            background: @btnhover;
        }
    }
    .register_clause {
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        b {
            display: block;
            width: 16px;
            height: 16px;
            background: @border;
            border-radius: 4px;
            cursor: pointer;
            margin-right: 6px;
            text-align: center;
            line-height: 16px;
            &.b_checked {
                background: @color;
                i {
                    color: #fff;
                }
            }
        }
        a {
            color: @color;
        }
    }
    .register_bom {
        text-align: center;
        margin-top: 20px;
        font-size: 16px;
        margin-bottom: 30px;
        a {
            color: @color;
        }
    }
}
.login_email {
    width: 400px;
    h2 {
        text-align: center;
        font-size: 24px;
        color: @color;
        margin-bottom: 20px;
    }
    p {
        width: 400px;
        font-size: 16px;
        line-height: 30px;
        span {
            color: #f62d51;
            cursor: pointer;
            text-decoration: underline;
        }
    }
}
.login_email_btn {
    border: 1px solid @border;
    width: 400px;
    height: 42px;
    display: flex;
    margin-bottom: 24px;
    border-radius: 6px;
    box-sizing: border-box;
    padding: 0 14px;
    align-items: center;
    margin-top: 20px;
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
.register_post {
    text-align: center;
    font-size: 16px;
    span {
        color: @color;
        margin-left: 14px;
        font-size: 16px;
        cursor: pointer;
    }
}
</style>
<template>
  <div class="register_index">
    <v-search-top></v-search-top>

    <div class="register_body">
      <div class="register_box" v-if='!isregister'>
        <h1>注册账号</h1>

        <div class="register_input">
          <i class="iconfont icon-zhucedengluyonghuming"></i>
          <input type="text" placeholder="请输入你的工作邮箱" v-model="userEmil">
        </div>
        <div class="register_input">
          <i class="iconfont icon-zhucedenglumima"></i>
          <input type="password" placeholder="请设置密码/(字母或数字)至少6位" v-model="userWorld">
        </div>
        <div class="register_input">
          <i class="iconfont icon-zhucedenglumima"></i>
          <input type="password" placeholder="再次确认登陆密码" v-model="userWorldconfirm">
        </div>
        <div class="login_input_two">
          <div class="login_pass">
            <i class="iconfont icon-zhucedengluyanzhengma"></i>
            <input type="text" class="blur_input" placeholder="请输入验证码" v-model="userModif">
          </div>
          <div class="code">
            <s-identify :identifyCode="identifyCode"></s-identify>
          </div>
          <p @click="refreshCode">看不清，换一张</p>
        </div>
        <div class="register_clause">
          <b @click="ischecked = !ischecked" :class="{b_checked : ischecked}">
            <i class="iconfont icon-gouxuan" v-if="ischecked"></i>
          </b> 我已经阅读并同意
          <a href="http://www.adjuz.net/prov_service" target="_blank"> 《相关服务和条款》</a>
        </div>
        <div class="register_input login_input_war" v-if="war">
          {{warData}}
        </div>
        <div class="login_input login_btn" @click="loginSubmit">
          注册
        </div>
        <div class="register_bom">
          已有账号？
          <router-link :to="{path: '/login'}">登陆</router-link>
        </div>
      </div>

      <!-- 注册成功验证邮箱 -->
      <div class="login_email" v-if="isregister">
        <h2>邮件发送成功</h2>
        <p>
          请到
          <span>{{userEmil}}</span> 查看来自巨掌广告平台的邮件
        </p>
        <div class="login_email_btn" @click="Mailboxjump">
          去邮箱查看
        </div>
        <div class="register_post">
          收不到？
          <span @click="emailPset">重新发送验证邮件{{mathNum}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
    data() {
        return {
            identifyCodes: "1234567890",
            identifyCode: "",
            war: false, //错误提醒
            warData: "",
            userEmil: "",
            userWorld: "",
            userWorldconfirm: "",
            userModif: "",
            ischecked: false,
            isregister: false, //是否注册成功
            mathNum: "", //倒计时
            mathNumTrue: false, //是否重新发送严重
            timer: null
        };
    },

    components: {},

    computed: {},

    created() {},

    updated() {},

    mounted() {
        this.$height(".register_index");

        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
        $(".register_input input").on("focus", function() {
            $(this)
                .parent()
                .css("border-color", "#2d76ed");
        });
        $(".register_input input").on("blur", function() {
            $(this)
                .parent()
                .css("border-color", "#dee2e6");
        });

        $(".blur_input").on("focus", function() {
            $(this)
                .parent()
                .css("border-color", "#2d76ed");
        });
        $(".blur_input").on("blur", function() {
            $(this)
                .parent()
                .css("border-color", "#dee2e6");
        });
    },

    destroyed() {},

    methods: {
        loginSubmit() {
            let emailTest = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
            let passTest = /[a-zA-Z0-9]{6,16}/;
            if (
                this.userEmil == "" ||
                this.userWorld == "" ||
                this.userWorldconfirm == "" ||
                this.userModif == ""
            ) {
                this.war = true;
                this.warData = "邮箱/密码/验证码不能为空！";
                return false;
            }
            if (!emailTest.test(this.userEmil)) {
                this.war = true;
                this.warData = "邮箱格式不正确！";
                return false;
            }
            if (!passTest.test(this.userWorld)) {
                this.war = true;
                this.warData = "密码格式不正确";
                return false;
            }
            if (this.userWorld.length < 6 || this.userWorld.length > 16) {
                this.war = true;
                this.warData = "密码长度不能少于6位并且不能超过16位！";
                return false;
            }
            if (this.userWorld != this.userWorldconfirm) {
                this.war = true;
                this.warData = "两次密码不一致！";
                return false;
            }
            if (this.userModif != this.identifyCode) {
                this.war = true;
                this.warData = "验证码不正确，请重新输入！";
                return false;
            }
            if (!this.ischecked) {
                this.war = true;
                this.warData = "请确认服务条款";
                return false;
            }

            let obj = {
                userEmail: this.userEmil,
                userPwd: this.userWorld,
                userPwd2: this.userWorldconfirm
            };

            this.$https({
                method: "post",
                url: "/api/v1/IntellSearchApi/Register/UserRegister",
                data: JSON.stringify(obj)
            }).then(res => {
                if (res.data.resultCode == 1000) {
                    this.isregister = true;
                    this.setintervalNum();
                }
                if (res.data.resultCode == 1900) {
                    this.war = true;
                    this.warData = "邮箱已存在！";
                }
                if (res.data.resultCode == 2000) {
                    this.war = true;
                    this.warData = res.data.data.message;
                }
                if (res.data.resultCode == 404) {
                    this.war = true;
                    this.warData = "系统错误！";
                }
            });
        },

        emailPset() {
            if (this.register_post) {
                this.register_post = false;
                this.setintervalNum();

                this.emailPost({
                    userEmail: this.userEmil
                });
            }
        },

        emailPost(obj) {
            let url = "/api/v1/IntellSearchApi/Register/UserRegisterSendEmail";

            this.$https.post(url, JSON.stringify(obj));
        },

        setintervalNum() {
            let num = 31;
            let _this = this;
            let timer = setInterval(function() {
                if (num == 0) {
                    clearInterval(timer);
                    _this.register_post = true;
                    _this.mathNum = "";
                } else {
                    num--;
                    _this.mathNum = "(" + num + ")";
                }
            }, 1000);
        },

        Mailboxjump() {
            //邮箱跳转
            let leftNum = this.userEmil.indexOf("@");
            let newEmail = this.userEmil.substring(leftNum);
            let rightNum = newEmail.indexOf(".");
            let email = newEmail.substring(1, rightNum);
            switch (email) {
                case "qq":
                    window.location.href = "http://www.mail.qq.com";
                    break;
                case "163":
                    window.location.href = "http://www.mail.163.com";
                    break;
                case "sina":
                    window.location.href = "https://mail.sina.com.cn";
                    break;
                case "sohu":
                    window.location.href = "https://mail.sohu.com/fe/#/login";
                    break;
                default:
                    window.location.href = "http://www.mail.163.com";
            }
        },

        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },

        refreshCode() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
        },

        makeCode(o, l) {
            for (let i = 0; i < l; i++) {
                this.identifyCode += this.identifyCodes[
                    this.randomNum(0, this.identifyCodes.length)
                ];
            }
        }
    }
};
</script>