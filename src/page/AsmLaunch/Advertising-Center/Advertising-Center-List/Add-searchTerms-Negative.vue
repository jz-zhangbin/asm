<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.negative_index {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    animation: animation1 0.5s ease-out;
    -webkit-animation: animation1 0.5s ease-out;
    .ad_section {
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
        &.ad_te_section {
            height: 460px;
        }
        h1 {
            font-size: 16px;
            margin-bottom: 10px;
        }
        h2 {
            width: 100%;
            border-bottom: 1px solid @border;
            line-height: 40px;
            display: flex;
            justify-content: center;
            span {
                display: block;
                line-height: 39px;
                width: 120px;
                text-align: center;
                margin: 0 14px;
                cursor: pointer;
                border: none;
                &.span_checked {
                    color: @color;
                    font-weight: bold;
                    border-bottom: 1px solid @color;
                }
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
    .reaio_index {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        padding: 20px 30px;
    }
    .add_index {
        box-sizing: border-box;
        padding-left: 120px;
    }
    .add_input {
        display: flex;
        input {
            width: 290px;
            height: 40px;
            border: 1px solid @border;
            border-radius: 4px;
            padding-left: 14px;
            box-sizing: border-box;
            margin-right: 14px;
            outline: none;
            &:focus {
                border: 1px solid @color;
            }
        }
        span {
            width: 60px;
            height: 40px;
            box-sizing: border-box;
            border: 1px solid @border;
            text-align: center;
            line-height: 40px;
            cursor: pointer;
            border-radius: 4px;
            &:active {
                border: 1px solid @color;
            }
        }
    }
    .keyword_list {
        width: 100%;
        border: 1px solid @border;
        height: 200px;
        margin-top: 20px;
        overflow-y: auto;
        li {
            width: 100%;
            height: 40px;
            display: flex;
            &:nth-child(1) {
                background: #f7f7f7;
            }
            span {
                display: block;
                text-align: center;
                line-height: 40px;
                border-right: 1px solid @border;
                border-bottom: 1px solid @border;
                &:nth-child(1) {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                &:nth-child(4) {
                    cursor: pointer;
                    border-right: none;
                }
            }
        }
    }
    .btn1 {
        display: flex;
        width: 600px;
        height: 40px;
        position: absolute;
        bottom: 20px;
        left: 0;
        justify-content: center;
        button {
            width: 100px;
            margin: 0 10px;
        }
    }
    .file_input {
        width: 100%;
        height: 60px;
        position: relative;
        display: flex;
        justify-content: center;
        margin: 20px 0;
        input {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            display: block;
            width: 70px;
            height: 70px;
            opacity: 0;
            cursor: pointer;
        }
        span {
            display: block;
            width: 70px;
            height: 70px;
            border: 1px solid @border;
            text-align: center;
            line-height: 70px;
            i {
                font-size: 40px;
            }
        }
    }
    .file_ul_box {
        width: 100%;
        max-height: 150px;
        overflow-y: auto;
        margin-top: 20px;
    }
    .file_ul {
        display: flex;
        box-sizing: border-box;
        padding: 10px 20px;
        flex-wrap: wrap;
        li {
            padding: 8px 20px;
            border: 1px solid @border;
            color: @color;
            border-radius: 4px;
            position: relative;
            margin: 0 14px 14px 0;
            img {
                position: absolute;
                right: -8px;
                top: -8px;
                cursor: pointer;
            }
        }
    }
    .div_input {
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid @border;
        border-bottom: 1px solid @border;
        input {
            width: 72px;
            margin-left: 6px;
            height: 26px;
            border: 1px solid @border;
            border-radius: 4px;
            outline: none;
            padding-left: 8px;
            &:focus {
                border: 1px solid @color;
            }
        }
    }
}
</style>
<style lang="less">
.negative_index {
    .add_index {
        .el-select {
            width: 290px !important;
            margin-bottom: 10px;
        }
    }
    .keyword_list {
        .el-select {
            width: 120px;
            height: 32px !important;
        }
        .el-input__inner {
            height: 32px !important;
        }
        .el-input .el-input--suffix .is-focus {
            height: 32px !important;
        }
    }
}
</style>

<template>
    <div class="negative_index">
        <div class="ad_section">
            <h1>添加关键词</h1>
            <div class="reaio_index">
                <el-radio v-model="radio" label="1">添加至广告系列</el-radio>
                <el-radio v-model="radio" label="2">添加至广告组</el-radio>
            </div>
            <div class="add_index">
                <el-select v-model="value" placeholder="请选择" v-if="radio == '2'">
                    <el-option v-for="item in options" :key="item.value" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
                <div class="add_input">
                    <input type="text" class="add_name" placeholder="请输入关键词" v-model="keyName">
                    <span @click="addClick">添加</span>
                </div>
            </div>
            <ul class="keyword_list">
                <li>
                    <span style="width: 52%">关键词</span>
                    <span style="width: 32%">匹配类型</span>
                    <span style="width: 16%">操作</span>
                </li>
                <li v-for="(ele,index) in keywordList" :key="index">
                    <span style="width: 52% ; color: #2d76ed">{{ele.keyName}}</span>
                    <span style="width: 32%">
                        <el-select v-model="ele.value" placeholder="请选择">
                            <el-option v-for="item in ele.options" :key="item" :label="item" :value="item">
                            </el-option>
                        </el-select>
                    </span>
                    <span style="width: 16%" @click="remove(index)">删除</span>
                </li>
            </ul>
            <div class="btn1">
                <el-button @click="$parent.keywordShow = false">取消</el-button>
                <el-button type="primary" @click="ok">确定</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ls: true,
            radio: "1",
            options: [],
            value: "",
            keyName: "",
            keywordList: [
                // {
                //     keyName: '',
                //     options:['广泛匹配','精准匹配'],
                //     value: '广泛匹配'
                // }
            ],
            fileList: []
        };
    },

    props: {
        type: {}
    },

    components: {},

    computed: {},

    created() {},

    updated() {},

    mounted() {},

    destroyed() {},

    methods: {
        addClick() {
            let num = 0;
            if (this.keyName != "") {
                this.keywordList.map((ele, index) => {
                    if (ele.keyName == this.keyName) {
                        this.$store.commit("SET_SHOW_TRUE", {
                            value: "不能插入重复关键词",
                            type: 3
                        });
                        num = 1;
                    }
                });
                if (num != 1) {
                    this.keywordList.push({
                        keyName: this.keyName,
                        options: ["广泛匹配", "精准匹配"],
                        CPC: "",
                        value: "广泛匹配"
                    });
                }
            }
        },
        remove(index) {
            this.keywordList.splice(index, 1);
        },
        ok() {
            this.$parent.negativeShow = false;
        }
    }
};
</script>