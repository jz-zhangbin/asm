<style lang='less' scoped>
@color: #2d76ed;
@font_color: #6c757d;
@border: #dee2e6;
.ad_index{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    animation: animation1 0.5s ease-out;
    -webkit-animation: animation1 0.5s ease-out;
    .ad_section{
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
        h1{
            font-size: 16px;
            margin-bottom: 30px;
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
  .budget_btn{ 
      display: flex;
      justify-content: center;
      margin-top: 40px;
      button{
          margin-right: 20px;
          width: 120px;
      }
  }
  .ad_cantant{
      width: 100%;
      padding: 0 50px; 
  }
  .ad_cantant section{
      display: flex;
      margin-bottom: 14px;
      height: 40px;
      line-height: 40px;
      span{
          margin-left: 14px;
          color: red;
          font-size: 12px;
      }
  }
  .ad_cantant section p{
      margin-right: 16px;
  }
  .section_input{
      width: 150px;
      height: 40px;
      box-sizing: border-box;
      padding: 0 10px;
      border: 1px solid @border;
      border-radius: 4px;
      &:focus{
          border: 1px solid @color;
      }
  }
  .right-select{
      margin-left: 16px;
  }
}
</style>
<style lang="less">
.ad_index{
    .el-select {
            width: 150px; 
        }
}
</style>

<template>
  <div class="ad_index">  
      <section class="ad_section">
          <h1>编辑广告组</h1>
           <div class="ad_cantant">
               <section>
                   <p>
                       默认CPC
                   </p> 
                   <input type="text" placeholder="输入CPC目标" class="section_input">
                    <span>当前为多个价格，不填写将不修改</span>
               </section>
               <section>
                   <p>
                       CPA目标
                   </p>
                   <input type="text" placeholder="输入CPA目标"  class="section_input">
                    <span>当前为多个价格，不填写将不修改</span>
               </section>
               <section>
                   <p>
                       投放设备
                   </p>
                   <el-select v-model="equipment">
                        <el-option
                            v-for="(item , index) in equipmentList"
                            :key="index"
                            :label="item" 
                            :value="item">
                        </el-option> 
                    </el-select>
                    <span>当前设置为多个值</span> 
               </section>
               <section>
                   <p>
                       用户类型
                   </p>
                   <el-select v-model="user">
                        <el-option
                            v-for="(item , index) in userList"
                            :key="index"
                            :label="item" 
                            :value="item">
                        </el-option> 
                    </el-select>
                    <span>当前设置为多个值</span>
               </section>
               <section>
                   <p>
                       用户性别
                   </p>
                   <el-select v-model="sex">
                        <el-option
                            v-for="(item , index) in sexList"
                            :key="index"
                            :label="item" 
                            :value="item">
                        </el-option> 
                    </el-select>
                    <span>当前设置为多个值</span>
               </section>
               <section>
                   <p>
                       年龄范围
                   </p>
                   <el-select v-model="age1">
                        <el-option
                            v-for="(item , index) in ageList1"
                            :key="index"
                            :label="item" 
                            :value="item">
                        </el-option> 
                    </el-select> 
                    <div v-if="age1 != '不修改' && age1 != '不限'" class="right-select">
                        <el-select v-model="age2" >
                            <el-option
                                v-for="(item , index) in ageList2"
                                :key="index"
                                :label="item" 
                                :value="item">
                            </el-option> 
                        </el-select>
                    </div>
                    <span>当前设置为多个值</span>
               </section>
           </div>
          <div class="budget_btn">
              <button @click="$parent.budgetShow = false" type="button" class="el-button el-button--default el-button--small">
                <span>取消</span>
              </button>
              <button  type="button" @click="btnclick" class="el-button el-button--default el-button--small el-button--primary ">
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
        cpc: '',
        cpa: '',
        equipmentList: ['不修改','不限','iPhone','iPad'],
        userList: ['不修改','所有用户','未下载用户'],
        sexList: ['不修改','不限','男','女'],
        ageList1: ['不修改','不限',18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65],
        ageList2: [18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65],
        equipment: '不修改',
        user: '不修改',
        sex: '不修改',
        age1: '不修改',
        age2: '65'
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