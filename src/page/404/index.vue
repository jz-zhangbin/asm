<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
.index_404 {
  width: 100%; 
  padding: 68px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    width: 500px;

  }
  .contant{
    display: flex;
    margin-top: 20px;
  }
  .to_home,
  .to_history {
    width: 150px;
    height: 40px;
    margin: 0 40px;
    text-align: center;
    cursor: pointer;
    line-height: 40px;
    font-size: 16px;
    border: 1px solid @border;
    border-radius: 8px;
    background: @color;
    color: #fff;
    &:hover {
      background: @btnhover;
    }
  }
}
</style>
<template>
  <div class="index_404">
      <v-search-top></v-search-top>
      <img src="../../images/moni/404.png" alt="">
      <div class="contant">
        <div class="to_home" @click="$router.push('/home')">返回首页</div>
        <div class="to_history" @click="$router.go(-1)">返回上一页</div>
      </div> 
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

  mounted() {
    // setTimeout(() => {
    //   this.$router.go(-1);
    // }, 3000);
  },

  destroyed() {},

  methods: {}
};
</script>