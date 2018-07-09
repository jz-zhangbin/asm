<template>
	<div id="app" :class="{app_out_index: type}">
		<router-view/>
		<!--w-->
		<footer>©2012-2018 adjuz.net 巨掌互动科技（北京）有限公司 京ICP备14034813号</footer> 
        <!-- 弹窗后的状态提示 -->
        <v-message v-if="messageShow" ></v-message>
	</div>
</template>

<script>
import "babel-polyfill";
import {mapState} from 'vuex'
export default {
    name: "App",
    data() {
        return {
            type: false,//是否为后台
        }
    },
    computed: {
        ...mapState({
            messageShow: state => state.Date.messagesShow
        })
    },

    watch: {
        $route() {
            if(this.$route.matched[0].path == '/advertising-center' || this.$route.matched[0].path == '/key-lexicon' || this.$route.matched[0].path == '/intgentMitorLibrary' ) {
                this.type = true
            }else{
                this.type = false
            }
        }
    }
};
</script>

<style lang='less'>
@import url("./base/commonCSS/common.css");
@import url("./assets/iconfont/iconfont.css");
#app {
    min-height: 100%;
    //height: 100%;
    position: relative;
    box-sizing: border-box;
    padding-bottom: 68px;
}
.app_out_index{
    background: #edf1f5;
}

.a_router {
    &:hover {
        color: #1559c8 !important;
    }
}

.el-table--striped .el-table__body tr.el-table__row--striped.current-row td,
.el-table__body tr.current-row > td,
.el-table__body tr.hover-row.current-row > td,
.el-table__body tr.hover-row.el-table__row--striped.current-row > td,
.el-table__body tr.hover-row.el-table__row--striped > td,
.el-table__body tr.hover-row > td {
    background-color: #f8f9fa !important;
}
.el-message-box__header {
    display: none !important;
}
.el-message-box {
    width: 300px;
    height: 118px;
    .el-button--small,
    .el-button--small.is-round {
        padding: 12px 30px;
        margin: 0 10px;
    }
}
.el-message-box__content {
    padding-top: 30px;
    padding-bottom: 19px;
}
.el-loading-mask {
    z-index: 10 !important;
}
.el-table__empty-block{
    min-height: 122px !important;
}
footer {
    height: 68px;
    width: 100%;
    text-align: center;
    line-height: 68px;
    background: #181e28;
    color: #969ba6;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
}
</style>