<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.aud_index {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    .blue{
        color: @color;
    }
    .aud_box {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 520px;
        height: 450px;
        border: 1px solid @border;
        box-sizing: border-box;
        padding: 40px 40px 0 60px;
        background: #fff;
        ul {
            li {
                p {
                    margin-right: 16px;
                    line-height: 36px;
                }
                display: flex;
                margin-bottom: 18px;
                input {
                    width: 240px;
                    height: 34px;
                    outline: none;
                    border: 1px solid @border;
                    border-radius: 4px;
                    margin-bottom: 8px;
                    padding-left: 10px;
                }
                span {
                    display: block;
                    border: 1px solid @border;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    padding: 6px 10px;
                    cursor: pointer;
                    margin-right: 14px;
                    float: left;
                    cursor: pointer;
                    border: 1px solid @color;
                    margin-right: 16px;
                    img {
                        width: 20px;
                        height: 20px;
                    }
                }
                .ccc {
                    height: 32px;
                    width: 80px;
                    text-align: center;
                    line-height: 32px;
                    border: 1px solid @border;
                    border-radius: 4px;
                    margin-right: 14px;
                    position: relative;
                    display: block;
                    padding: 0;
                    background: #f7f7f7;
                    margin-bottom: 14px;
                }
            }
        }
    }
    .li_te { 
        div {
            display: flex;
            overflow-y: auto;
            flex-wrap: wrap;
            max-width: 320px;
            max-height: 100px;
            
        }
    }
    .btn {
        display: flex;
        justify-content: center;
    }
}
</style>
<template>
    <div class="aud_index">
        <div class="aud_box">
            <ul>
                <li>
                    <p>模板名称</p> 
                    <input type="text" disabled :value="AudienceTemplateList.templateName">
                </li>
                <li>
                    <p>投放设备</p>
                    <span v-for="(ele,index) in AudienceTemplateList.audienceDevice" :key="index">
                        <i class='iconfont blue icon-duoxuan-yixuan'></i>
                        {{ele == 'ALL' ? 'IPHONE/IPAD' : ele}} 
                    </span>
                </li>
                <li>
                    <p>受众类型</p>
                    <span v-for="(ele,index) in AudienceTemplateList.audienceType" :key="index">
                        <i class='iconfont blue icon-duoxuan-yixuan'></i>
                        {{ele == 'ALL' ? '所有用户' : '未下载用户'}}
                    </span>
                </li>
                <li>
                    <p>受众姓名</p>
                   <span v-for="(ele,index) in AudienceTemplateList.audienceGender" :key="index">
                        <i class='iconfont blue icon-duoxuan-yixuan'></i>
                        {{ele == 'ALL' ? '所有' : ''}}
                        {{ele == 'M' ? '男' : ''}}
                        {{ele == 'F' ? '女' : ''}}
                    </span>
                </li>
                <li class="li_te">
                    <p>受众年龄</p>
                    <section>
                        <div >
                            <span class="ccc" v-for="(ele,index) in AudienceTemplateList.audienceAge" :key="index">
                                {{ele == null ? '不限' : ele.minAge +'-'+ ele.maxAge}} 
                            </span> 
                         </div>
                    </section>
                </li>
            </ul>
            <div class="btn">
                <el-button type="primary" @click="$parent.audiencelookShow = false">确定</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        };
    },

    props: {
        AudienceTemplateList: {}
    },

    components: {},

    computed: {},

    created() {},

    updated() {},

    mounted() {},

    destroyed() {},

    methods: {}
};
</script>