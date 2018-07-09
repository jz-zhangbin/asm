<style lang='less' scoped>
.nav_index {
    p {
        font-size: 18px;
    }
    padding-left: 8px;
}
</style>
<style lang='less'>
@color: #2d76ed;
@font_color: #6c757d;
.nav_index {
    .el-breadcrumb__item:last-child .el-breadcrumb__inner,
    .el-breadcrumb__item:last-child .el-breadcrumb__inner a,
    .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
    .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
        font-weight: 400;
        color: @color;
        cursor: pointer;
    }
    .el-breadcrumb__inner a,
    .el-breadcrumb__inner.is-link {
        font-weight: 400;
        text-decoration: none;
        -webkit-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        color: @font_color;
    }
    .el-breadcrumb__inner a:hover,
    .el-breadcrumb__inner.is-link:hover {
        color: @color;
        cursor: pointer;
    }
}
</style>

<template>
    <div class="nav_index">
        <p v-if="routeList.length == 0">
            {{pageName}}
        </p>
        <el-breadcrumb separator-class="el-icon-arrow-right" v-if="routeList.length != 0">
            <el-breadcrumb-item v-for='(ele,index) in routeList' :key="index" :to="{ path: ele.path , query: ele.query}">{{ele.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },

    props: {
        pageName: {
            type: String,
            default: ""
        },
        routeList: {
            type: Array,
            default: [
                //   {
                //   name: "广告中心",
                //   path: "/"
                // }
            ]
        }
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