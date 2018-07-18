<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
.agent_index {
    min-width: 1200px;
    min-height: 100%;
    margin-top: 60px;
    .agent_body {
        width: 100%;
    }
    .agent_form {
        width: 590px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            font-size: 24px;
            margin: 30px 0;
        }
        section {
            display: flex;
            margin-bottom: 20px;
            height: 40px;
            line-height: 40px;
            p {
                width: 80px;
                text-align: right;
            }
            input {
                margin-left: 14px;
                box-sizing: border-box;
                border: 1px solid @border;
                border-radius: 6px;
                padding-left: 14px;
                outline: none;
                width: 400px;
                &::-webkit-input-placeholder {
                    color: #9a9a9a;
                }
            }
            &.te_se {
                line-height: 18px;
                margin-bottom: 10px;
                height: 20px;
                div {
                    width: 400px;
                    line-height: 18px;
                    display: flex;
                    align-items: center;
                    b {
                        width: 16px;
                        height: 16px;
                        background: @border;
                        text-align: center;
                        cursor: pointer;
                        border-radius: 4px;
                        margin-right: 6px;
                        display: block;
                        line-height: 16px;
                        &.checkedbox_b {
                            background: @color;
                            i {
                                color: #fff;
                            }
                        }
                    }
                    span {
                        &.checkedbox {
                            color: @color;
                        }
                    }
                }
            }
            &.te_war {
                margin-bottom: 30px;
                div {
                    width: 400px;
                    border-radius: 6px;
                    background: #fff4f4;
                    margin-left: 14px;
                    box-sizing: border-box;
                    padding-left: 14px;
                    color: #f62d51;
                }
            }
            &.te_btn {
                margin-bottom: 30px;
                div {
                    background: @color;
                    height: 40px;
                    width: 400px;
                    color: #fff;
                    font-size: 16px;
                    cursor: pointer;
                    text-align: center;
                    justify-content: center;
                    border-radius: 6px;
                    outline: none;
                    line-height: 40px;
                    &:hover {
                        background: @btnhover;
                    }
                }
            }
        }
    }
    .agent_success {
        width: 400px;
        margin: 70px auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
            font-size: 24px;
            color: @color;
            margin-bottom: 34px;
        }
        p {
            font-size: 16px;
            margin-bottom: 26px;
        }
        div {
            background: @color;
            height: 40px;
            width: 150px;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
            text-align: center;
            justify-content: center;
            border-radius: 6px;
            outline: none;
            line-height: 40px;
            &:hover {
                background: @btnhover;
            }
        }
    }
}
</style>
<template>
  <div class="agent_index">
    <v-search-top></v-search-top>
    <div class="agent_body">
      <banner :bannerName='bannerName'></banner>

      <div class="agent_form" v-if="!success">
        <h1>提交投放需求，我们将尽快与您联系</h1>
        <section>
          <p>姓名：</p>
          <input type="text" placeholder="请输入你的姓名" v-model="userName">
        </section>
        <section>
          <p>手机：</p>
          <input type="text" placeholder="请输入你的手机号" v-model="userTel">
        </section>
        <section>
          <p>邮箱：</p>
          <input type="text" placeholder="请输入你的邮箱" v-model="userEmail">
        </section>
        <section>
          <p>所在公司：</p>
          <input type="text" placeholder="所在公司名称" v-model="userCompany">
        </section>
        <section>
          <p>职位：</p>
          <input type="text" placeholder="请输入你的职位名称" v-model="userPosition">
        </section>
        <section>
          <p>产品名称：</p>
          <input type="text" placeholder="请输入投放的产品名称" v-model="userProduct">
        </section>
        <section class="te_se">
          <p></p>
          <div>
            <b @click="checkClick(0)" :class="{checkedbox_b: checkList[0].show }">
              <i class="iconfont icon-gouxuan" v-if="checkList[0].show"></i>
            </b>
            <span :class="{checkedbox: checkList[0].show }">有产品，想立刻投放</span>
          </div>
        </section>
        <section class="te_se">
          <p></p>
          <div>
            <b @click="checkClick(1)" :class="{checkedbox_b: checkList[1].show }">
              <i class="iconfont icon-gouxuan" v-if="checkList[1].show"></i>
            </b>
            <span :class="{checkedbox: checkList[1].show }">暂不投放，了解ASM相关投放信息</span>
          </div>
        </section>
        <section class="te_war" v-if="war">
          <p></p>
          <div>
            {{warData}}
          </div>
        </section>
        <section class="te_btn">
          <p></p>
          <div @click="submitClick">
            提交
          </div>
        </section>
      </div>

      <!-- 投放成功 -->
      <div class="agent_success" v-if="success">
        <h2>需求提交成功</h2>
        <p>我们将尽快与您联系，请耐心等待，谢谢配合！</p>
        <div @click="blackClick">
          返回
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "@components/AsmQuery/Banner";
export default {
    data() {
        return {
            bannerName: "代理投放",
            success: false, // 是否投放成功
            userName: "",
            userEmail: "",
            userTel: "",
            userCompany: "",
            userPosition: "",
            userProduct: "",
            war: false,
            warData: "",
            checkList: [
                {
                    show: true
                },
                {
                    show: false
                }
            ]
        };
    },

    components: {
        banner
    },

    computed: {},

    created() {},

    updated() {},

    mounted() {
        $(".agent_form input").on("focus", function() {
            $(this).css("border-color", "#2d76ed");
        });
        $(".agent_form input").on("blur", function() {
            $(this).css("border-color", "#dee2e6");
        });
    },

    destroyed() {},

    methods: {
        blackClick() {
            this.success = false;
        },
        checkClick(num) {
            if (num == 0) {
                this.checkList[1].show = false;
            } else {
                this.checkList[0].show = false;
            }
            this.checkList[num].show = !this.checkList[num].show;
        },

        submitClick() {
            let emailTest = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[0-9A-Za-z]{2,10}(\.[0-9A-Za-z]{2,10})?)$/g;
            let telTest = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (
                this.userName == "" ||
                this.userEmail == "" ||
                this.userTel == "" ||
                this.userCompany == "" ||
                this.userPosition == "" ||
                this.userProduct == ""
            ) {
                this.war = true;
                this.warData = "所填内容不能为空！";
                return false;
            }
            if (!emailTest.test(this.userEmail)) {
                this.war = true;
                this.warData = "邮箱格式不正确！";
                return false;
            }
            if (!telTest.test(this.userTel)) {
                this.war = true;
                this.warData = "手机格式不正确！";
                return false;
            }
            let obj = {
                name: this.userName,
                phone: this.userTel,
                email: this.userEmail,
                companyName: this.userCompany,
                companyPosition: this.userPosition,
                appName: this.userProduct,
                isADIImmediately: this.checkList[1].show ? 0 : 1
            };

            this.Ajax(obj);
        },

        Ajax(obj) {
            let url = "/api/v1/IntellSearchApi/Index/AdvertiseSendEmail";

            this.$https.post(url, JSON.stringify(obj)).then(res => {
                if (res.data.resultCode == 1000) {
                    this.success = true;
                } else {
                    this.war = true;
                    this.warData = "发送失败";
                }
            });
        }
    }
};
</script>