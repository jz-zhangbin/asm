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
            width: 130px;
        } 
    }
    .create_list_btn{
        margin-top: 50px; 
        button{
            width: 150px;
            margin-right: 20px;
        }
    }
    .age_div{
        display: flex;
        .right-select{
            margin-left: 20px;
        }
    }
}
</style>
<style lang="less">
.setacc_index{
    .el-select {
            width: 130px; 
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
             <!-- 选择投放国家 --> 
             <p class="createlist_title">广告系列名称</p>
             <input type="text" placeholder="设置广告系列名称">
             <p class="createlist_title">默认CPC</p>
             <div>
                 <input type="text" placeholder="设置CPC" class="te_input"> <span>$</span>
             </div>
             <p class="createlist_title">CPA目标</p>            
             <div>
                 <input type="text" placeholder="设置CPA" class="te_input"> <span>$</span>
             </div>
             <p class="createlist_title">投放设备</p>
             <el-select v-model="equipment">
                <el-option
                    v-for="(item , index) in equipmentList"
                    :key="index"
                    :label="item" 
                    :value="item">
                </el-option> 
             </el-select>
             <p class="createlist_title">用户类型</p>
             <el-select v-model="user">
                <el-option
                    v-for="(item , index) in userList"
                    :key="index"
                    :label="item" 
                    :value="item">
                </el-option> 
            </el-select>
             <p class="createlist_title">用户性别</p>
             <el-select v-model="sex">
                <el-option
                    v-for="(item , index) in sexList"
                    :key="index"
                    :label="item" 
                    :value="item">
                </el-option> 
            </el-select> 
             <p class="createlist_title">年龄范围</p>   
                <div class="age_div">
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
              accountId: queryData.accountId
            }
          },
          {
            name: '广告系列',
            path: '/advertising-center/list' ,
            query: {
                accountName: queryData.accountName,
                accountId: queryData.accountId,
                listName: queryData.listName,
                listId: queryData.listId,
            }
          },
          {
            name: '广告组',
            path: '/advertising-center/keyword' ,
            query: queryData
          },
          {
            name: '编辑广告组',
            path: '/advertising-center/settings-keyword' ,
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