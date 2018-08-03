<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@btnhover: #1559c8;
.header_index {
    position: fixed;
    min-width: 1200px;
    height: 60px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1800;
    background: @color;
}
.header_body {
    height: 60px;
}
.header_logo {
    margin-left: 45px;
    height: 60px;
    cursor: pointer;
    margin-left: 45px;
    float: left;
    width: 155px;
    background: url("../../images/components/home_logo2.png") no-repeat center
        center;
}
.header_roter {
    float: left;
    margin-left: 18px;
    display: flex;
    padding-top: 15px;
    a {
        box-sizing: border-box;
        padding: 7px 10px;
        margin-left: 30px;
        color: #fff;
        font-size: 14px;
        font-weight: 400;
        cursor: pointer;
        &.headera {
            background: linear-gradient(
                to right,
                @btnhover,
                @color,
                @btnhover
            ); /* 标准的语法 */
        }
    }
}
.header_user {
    float: right;
    margin-right: 45px;
    height: 60px;
    line-height: 60px;
    color: #fff;
    cursor: pointer;
    position: relative;
    padding-right: 16px;
    i {
        display: block;
        border: 5px solid transparent;
        border-top: 5px solid #fff;
        position: absolute;
        right: 0px;
        top: 29px;
    }
}
.header_out { 
    width: 120px;
    height: 46px;
    background: #f7f7f7;
    border-radius: 4px;
    z-index: 100;
    color: @font_color;
    line-height: 46px;
    text-align: center;
    cursor: pointer;
    margin-left: 26px;
    margin-top: -6px;
    position: absolute;
    left: 0;
    top: 60px;
}
.st_sign {
    float: right;
    margin-left: 30px;
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
</style>
<template>
    <div class="header_index">
        <div class="header_body">
            <div class="header_logo"></div>
            <div class="header_roter">
                <router-link :to="{path: '/advertising-center'}">广告中心</router-link>
                <router-link :to="{path: '/key-lexicon'}">关键词库</router-link>
                <router-link :to="{path: '/intgentMitorLibrary'}">智能监测库</router-link>
                <a  @click="toHome">智查工具</a>
            </div>
            <div class="header_user" @mouseover="show = true" @mouseout="show = false">
                <div class="st_sign" v-if="!userType">
                    <button @click="$router.push('/login')">登录</button>
                    <button @click="$router.push('/register')">注册</button>
                </div>
                <p v-if="userType">{{userCookie.useremail}}</p>
                <i v-if="userType"></i>
                <transition name="el-zoom-in-top">
                    <div class="header_out" @click="removeCookie" @mouseout="show = false" v-show="show" v-if="userType">
                        <span>退出</span>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import cookie from "@commonJS/cookie";
import { mapState } from "vuex";
export default {
    data() {
        return {
            show: false
        };
    },

    components: {},

    computed: {
        ...mapState({
            userCookie: state => state.Sign.userCookie,
            userType: state => state.Sign.userType
        })
    },

    created() { 
        if(cookie.get('Adjuz_Vip') == 'false') {
            this.$router.push('/login')
        }
        
        this.$store.commit("GET_USERTYPE");
    },

    updated() {},

    mounted() {},

    destroyed() {},

    methods: {
        removeCookie() {
            this.$router.push("/login");
            this.$store.commit("SET_USERTYPE");
            this.$store.commit("GET_USERTYPE");
        },
        toHome() {
            let routeData = this.$router.resolve({
                path: '/home' 
            });
            window.open(routeData.href, '_blank')
        }
    }
};
</script>