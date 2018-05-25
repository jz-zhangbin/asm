<style lang='less' scoped>
 @color: #2d76ed;
	@bgk: #f7f7f7;
	@font_color: #6c757d;
	@border: #dee2e6;
    @btnhover: #1559c8;
.index_404{
    width: 100%;
    height: 550px; 
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-image: url(../../../static/img/404.png);
    background-repeat: no-repeat;
    background-size: 40% 70%;
    background-position: center center;
    .to_home , .to_history{
        width: 150px;
        height: 40px; 
        margin:  0 40px;
        text-align: center;
        cursor: pointer;
        line-height: 40px;
        font-size: 16px;
        border: 1px solid @border;
        border-radius: 8px;
        background: @color;
        color: #fff;
        &:hover{
            background: @btnhover;
        }
    }
}
</style>
<template>
  <div class="index_404">
      <div class="to_home" @click="$router.push('/home')">返回首页</div>
      <div class="to_history" @click="$router.go(-1)">返回上一页</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {}, 
  created() {},

  updated() {},

  mounted() { 
      setTimeout(()=>{
           this.$router.go(-1)
      },2000) 
  },

  destroyed() {},

  methods: {}
}

</script>