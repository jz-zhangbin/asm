<style lang='less' scoped>
@color: #2d76ed;
@font_color: #6c757d;
@border: #dee2e6;
.budget_index {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    animation: animation1 0.5s ease-out;
    -webkit-animation: animation1 0.5s ease-out;
    section {
        border: 1px solid #ebeef5;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 6px;
        background: #fff;
        width: 300px;
        height: 200px;
        position: absolute;
        margin: auto;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        h1 {
            font-size: 16px;
            margin-bottom: 20px;
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
    .budget_btn {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        button {
            margin: 0 15px;
        }
    }
    .budet_cantant {
        display: flex;
        margin-top: 20px;
        p {
            line-height: 40px;
            font-weight: bold;
            margin: 0px 16px 0 20px;
        }
        input {
            height: 40px;
            width: 100px;
            border: 1px solid @border;
            border-radius: 4px;
            padding: 0 10px;
            outline: none;
            &:focus {
                border: 1px solid @color;
            }
        }
    }
}
</style>
<template>
    <div class="budget_index">
        <section>
            <h1>编辑所选关键词</h1>
            <div class="budet_cantant">
                <p>CPC出价</p>
                <input type="text" placeholder="请输入数字" v-model="value">
            </div>
            <div class="budget_btn">
                <button @click="$parent.budgetShow = false" type="button" class="el-button el-button--default el-button--small">
                    <span>取消</span>
                </button>
                <button @click="btnclick" type="button" class="el-button el-button--default el-button--small el-button--primary ">
                    <span>确定</span>
                </button>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ""
        };
    },

    props: {},

    components: {},

    computed: {},

    created() {},

    updated() {},

    mounted() {},

    destroyed() {},

    methods: {
        btnclick() {
            if (this.value == "") {
                this.$store.commit("SET_SHOW_TRUE", {
                    value: "CPC不能为空",
                    type: 3
                });
            } else {
                this.$parent.budgetShow = false;
                this.$emit("budgetBack", this.value);
            }
        }
    }
};
</script>