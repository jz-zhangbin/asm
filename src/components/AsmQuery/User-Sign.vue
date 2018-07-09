<style lang='less' scoped>
//公共用户登录
//2018-4-25-zb
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
.sl_user_tp {
    //min-width: 1200px;
    margin: 25px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        margin-top: 10px;
    }
    button {
        width: 150px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #fff;
        border-radius: 4px;
        background: @color;
        outline: none;
        cursor: pointer;
        &:hover {
            background: @btnhover;
        }
    }
}
</style>
<template>
  <div class="sl_user_tp">
    <button @click="btnClick">登录</button>
    <p>登录以后可以查看更多</p>
  </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    components: {},

    computed: {},

    created() {},

    updated() {},

    mounted() {},

    destroyed() {},

    methods: {
        // 跳转至登录页面
        btnClick() {
            this.$router.push("/login");
        }
    }
};
</script>