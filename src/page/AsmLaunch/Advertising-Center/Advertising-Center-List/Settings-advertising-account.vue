<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.setacc_index{
    box-sizing: border-box;
    padding: 60px 0 20px;
    background: #f7f7f7;
     .adver_nav{
        margin: 0px 15px 0;
        min-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
    }
    .createlist_contant{
        min-width: 1200px; 
        box-sizing: border-box; 
        margin: 0 15px; 
        background: #fff;
        padding: 0 16px 60px;
        h1{
        font-size: 18px;
        padding: 15px;
        margin-bottom: 10px;
        font-weight: bold;
        }
    }
    .createlist_form{
        box-sizing: border-box;
        padding-left: 200px;
    }
    .createlist_title{
        font-size: 16px;
        margin: 30px 0  10px 0; 
    } 
    section{  
      box-sizing: border-box; 
      line-height: 40px;
      background: #f7f7f7; 
      width: 474px;
      height: 40px;
      border: 1px solid @border;
      border-radius: 4px;
      padding: 0 10px; 
      display: flex;
      margin-bottom: 30px;
      img{
          display: block;
          width: 26px;
          height: 26px;
          border-radius: 4px;
          margin-top: 7px;
          margin-right: 10px;
        } 
    }
    .createlist_contry{
        display: flex;
        span{
        padding: 10px 16px; 
        display: flex;
        align-items: center; 
        justify-content: center; 
        background: #f7f7f7; 
        margin-right: 14px;
        img{
            width: 16px;
            height: 16px;
            margin-right: 4px;
        }
        } 
    }
    input{
        width: 470px;
        height: 40px;
        box-sizing: border-box;
        padding: 0 10px;
        border-radius: 4px;
        border: 1px solid @border;
        outline: none;
        &:focus{
            border: 1px solid @color;
        }
        &.te_input{
            width: 120px;
        } 
    }
    .create_list_btn{
        margin-top: 50px; 
        button{
            width: 150px;
            margin-right: 20px;
        }
    }
}
</style>
<template>
  <div class="setacc_index">
      <!-- 导航 -->
     <v-header></v-header>
     <!-- 面包屑 -->
     <div class="adver_nav">
       <v-nav :pageName='pageName' :routeList='routeList'></v-nav> 
     </div>

     <div class="createlist_contant">
         <h1>编辑广告系列</h1>
         <div class="createlist_form">
             <p class="createlist_title">投放应用</p>
             <section>
                <img src="../../../../images/moni/appimg_03.png" alt="">
                <p>部落冲突</p> 
             </section> 
             <!-- 选择投放国家 -->
            <p class="createlist_title">投放地区</p>
            <div class="createlist_contry"> 
                <span>
                    <img src="../../../../images/components/u571.png" alt="">
                    中国
                </span> 
                <span>
                    <img src="../../../../images/components/u571.png" alt="">
                    中国
                </span>
            </div> 
             <p class="createlist_title">广告系列名称</p>
             <input type="text" placeholder="设置广告系列名称">
             <p class="createlist_title">总预算</p>
             <div>
                 <input type="text" placeholder="设置总预算" class="te_input"> <span>$</span>
             </div>
             <p class="createlist_title">日预算</p>            
             <div>
                 <input type="text" placeholder="设置日预算" class="te_input"> <span>$</span>
             </div>

             <!-- 创建按钮 -->
            <div class="create_list_btn">
            <el-button @click="$router.go(-1)">取消</el-button>
            <el-button type="primary" @click="chuangClick">创建</el-button>
            </div>
         </div>
     </div>
  </div>
</template>

<script>
import NavList from '@components/AsmLaunch/Nav-List'
export default {
  data () {
    return {
        pageName: '广告中心',
        routeList: [
            {
                name: '广告中心',
                path: '/advertising-center/home',
                query: ''
            }
        ],//面包屑
    };
  },

  components: {
      'v-nav': NavList
  },

  computed: {},

  created() {
      let queryData = this.$route.query
        this.routeList.push(...[
          {
            name: '账户',
            path: '/advertising-center/account' ,
            query: {
              accountName: queryData.accountName,
              accountId: queryData.accountId,
            }
          },
          {
            name: '广告系列',
            path: '/advertising-center/list' ,
            query: queryData
          },
          {
            name: '编辑广告系列',
            path: '/advertising-center/settings-list' ,
            query: queryData
          }
        ])
  },

  updated() {},

  mounted() {},

  destroyed() {},

  methods: {
      chuangClick() {
          this.$router.go(-1)
      }
  }
}

</script>