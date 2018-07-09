<style lang='less' scoped>
//公共banner图
//2018-4-23-zb
.rl_body {
    background-image: url(http://static.adjuz.com/asmmaster/img/sl_bgm.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 130px;
    position: relative;
    overflow: hidden;
    h1 {
        position: absolute;
        top: 52px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        font-size: 27px;
    }
}
</style>
<template>
  <div class="rl_body min-width">
    <h1>{{bannerName}}</h1>
    <vue-particles color="#dedede" :particleOpacity="0.7" :particlesNumber="100" shapeType="circle" :particleSize="4" linesColor="#dedede" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="100" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
    </vue-particles>
  </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        bannerName: {}
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