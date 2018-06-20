<style lang='less' scoped>
@color: #2d76ed;
@font_color: #6c757d;
@border: #dee2e6;
.budget_index{
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
        padding: 20px;
        box-sizing: border-box;
        border-radius: 6px;
        background: #fff;  
        width: 350px; 
        height: 280px;
        position: absolute;
        margin: auto;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;  
        h1{
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
  .budget_data{
      display: flex;
      flex-direction: column;
      align-items: center;
      .budget_data_div{
          display: flex;
          margin-bottom: 16px;
          div{
              display: flex;
              flex-direction: column;
          }
          p{
              margin-right: 16px;
              line-height: 40px;
          }
          input{
              width: 150px;
              box-sizing: border;
              height: 40px;
              border-radius: 4px;
              border: 1px solid @border;
              padding:0 6px;
              margin-bottom: 6px;
              outline: none;
          }
          span{
              color: red;
          }
      }
  }
  .budget_btn{ 
      display: flex;
      justify-content: center;
      button{
          margin-right: 20px;
      }
  }
}
</style>
<template>
  <div class="budget_index">  
      <section>
          <h1>编辑广告系列</h1>
          <div class="budget_data">
              <div class="budget_data_div">
                  <p>总预算</p>
                  <div>
                      <input type="text" placeholder="请输入数字">
                      <span>当前为多个价格，不填写将不做修改</span>
                  </div>
              </div>
              <div class="budget_data_div">
                  <p>日预算</p>
                  <div>
                      <input type="text" placeholder="请输入数字">
                      <span>当前为多个价格，不填写将不做修改</span>
                  </div>
              </div>
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
  data () {
    return {
    };
  },

  props: { 
  },

  components: {},

  computed: {},

  created() {},

  updated() {},

  mounted() { 
  },

  destroyed() {},

  methods: {
      btnclick() {
          this.$parent.budgetShow = false
          this.$emit('budgetBack',123)
      }
  }
}

</script>