<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.task_index {
    width: 320px;
    border: 1px solid @color;
    box-shadow: 0px 0px 6px @border;
    h4 {
        height: 40px;
        background: @color;
        color: #fff;
        padding-left: 14px;
        line-height: 40px;
    }
    ul {
        width: 100%;
        background: #fff;
        padding: 4px 0;
        li {
            width: 100%;
            box-sizing: border-box;
            padding: 0 10px;
            height: 34px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            aside {
                font-size: 12px;
                display: flex;
                align-content: center;
                p {
                    color: red;
                }
            }
            span {
                padding: 4px 8px;
                display: block;
                border: 1px solid @border;
                cursor: pointer;
                border-radius: 4px;
                font-size: 12px;
                color: @color;
                &:hover {
                    border: 1px solid @color;
                }
            }
        }
    }
}
</style>
<template>
    <div class="task_index">
        <div class="task_tant">
            <h4>操作列表</h4>
            <ul>
                <li v-if="taskData.createCount != 0">
                    <aside> 正在创建
                        <p>{{taskData.createCount}}</p> 个广告{{type}}...</aside>
                    <span @click="lookClick('创建','Create')">查看详情</span>
                </li>
                <li v-if="taskData.editCount != 0">
                    <aside> 正在编辑
                        <p>{{taskData.editCount}}</p> 个广告{{type}}...</aside>
                    <span @click="lookClick('编辑','Eidt')">查看详情</span>
                </li>
                <li v-if="taskData.pauseCount != 0">
                    <aside> 正在暂停
                        <p>{{taskData.pauseCount}}</p> 个广告{{type}}...</aside>
                    <span @click="lookClick('暂停','PAUSED')">查看详情</span>
                </li>
                <li v-if="taskData.pulseCount != 0">
                    <aside> 正在启动
                        <p>{{taskData.pulseCount}}</p> 个广告{{type}}...</aside>
                    <span @click="lookClick('启动','ENABLED')">查看详情</span>
                </li>
            </ul>
        </div>
        <v-look v-if="lookShow" :name='listName' :listType='listType'></v-look>
    </div>
</template>

<script>
import Look from "./Task-Look-List";
export default {
    data() {
        return { 
            listName: null,
            listType: null,
            lookShow: false, 
            type: ''
        };
    },

    props: {
        taskData: {}
    },
    components: {
        "v-look": Look
    },

    computed: {},

    created() {},

    updated() {},

    mounted() {
        if(this.$route.path != '/advertising-center/account') {
            this.type = '组'
        }else{
            this.type = '系列'
        }
    },

    destroyed() {},

    methods: {
        lookClick(name,type) {
            this.listName = name
            this.listType = type 
            this.lookShow = true;
        }
    }
};
</script>