<style lang='less' scoped>
@color: #2d76ed;
@font_color: #6c757d;
.message_index{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    animation: animation1 0.5s ease-out;
    -webkit-animation: animation1 0.5s ease-out;
    section{
        padding: 20px 0;
        border-radius: 6px;
        background: #fff; 
        text-align: center;
        width: 160px; 
        height: 20px;
        position: absolute;
        margin: auto;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0; 
        color: @color;
        &.red{
            color: red;
        }
        &.ccc{
            color: @font_color;
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
}
</style>
<template>
  <div class="message_index"> 
      <section :class="{red: messageData.type == '2' , ccc: messageData.type == '3' }">
          {{messageData.value}}
      </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  props: {
      messageData: {}
  },

  components: {},

  computed: {},

  created() {},

  updated() {},

  mounted() {
      let _this = this
      setTimeout(()=>{
         _this.$parent.messageShow = false
      },2000)
  },

  destroyed() {},

  methods: {}
}

</script>