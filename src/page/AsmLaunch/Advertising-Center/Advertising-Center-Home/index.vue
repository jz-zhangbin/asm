<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.advertisting_index{ 
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
  .btn{ 
    width: 150px;
    height: 40px;
    cursor: pointer;
    background: #2d76ed;
    color: #f7f7f7;
    text-align: center;
    line-height: 40px;
    border-radius: 6px;
    cursor: pointer;
    &:hover{
      background: @btnhover;
    }
  }
  .adver_content{
    min-width: 1200px;
    background: #fff; 
    padding: 25px 16px 20px ;
    margin: 0 15px;
  }
  .adver_content_top{
    height: 32px;
  }
  .content_search{
    float: left;  
  }
  .content_date{
    float: right;
  }
  .content_refresh{
    float: right;
    display: flex;
    line-height: 40px;
    margin-right: 20px;
    i{
      margin: 0 10px;
      cursor: pointer;
    }
  }
  .content_table{
    width: 100%;
    margin-top: 40px;
  }
  .table_username{
    cursor: pointer;
    color: @color;
    &:hover{
      text-decoration: underline;
    }
  }
  .content_page{
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
  .item{
    i{
      font-size: 18px;
    } 
  }
} 
</style>
<style lang='less'> 
.el-message-box{
  width: 300px;
}
.advertisting_index{
   
  .el-select {
    width: 230px; 
  } 
  .el-table th{
      background:#f7f7f7 !important;
      font-size: large;
      }
  .el-table th{
    background:#f7f7f7 !important;
    font-size: large;
  }
  .el-table th>.cell{
    line-height: 34px;
  }
  .el-table td, .el-table th{
    padding: 8px 0;
  }
}
</style>

<template>
  <div class="advertisting_index">
    <!-- 导航 -->
     <v-header></v-header>

     <!-- 面包屑 -->
     <div class="adver_nav">
       <v-nav :pageName='pageName' :routeList='routeList'></v-nav>
       <div class="btn" @click="addUserClick">
         <i class="iconfont icon-plus-add"></i>
         <span >添加账户</span> 
       </div>
     </div>

     <!-- 内容 -->
     <div class="adver_content">
       <div class="adver_content_top">

         <div class="content_search">
           <div class="advuer_content">
            <div class="advuer_content_top">
                <v-search 
                :show='show' 
                :valuedata='valuedata' 
                :placevaluedata='placevaluedata' 
                :inputList='inputList'
                @changeInputList='changeInputList'
                @changeInput='changeInput'>
                </v-search>   
              </div>
            </div>
         </div> 

         <div class="content_date">
           <el-select v-model="dateData" @change="changeFun(dateData)">
              <el-option v-for="item in dateList" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
         </div>

         <div class="content_refresh">
          <p>数据更新时间为：{{dateNow}}</p> 
         </div>
       </div>

       <div class="content_table"> 
          <el-table
            :data="tableData"
            border
            v-loading="loading"
            :empty-text= 'emptyText'
            style="width: 100%">
            <el-table-column
              fixed 
              label="账户名称" 
              align='center'
              min-width="320">
              <template slot-scope="scope">
                <div class="table_username" :alt="scope.row.name" @click="accountRoute(scope.$index , scope.row)">{{scope.row.name}}</div> 
              </template>
            </el-table-column>
            <el-table-column
              prop="id"
              label="账户ID"
              align='center'
              min-width="110">
            </el-table-column>
            <el-table-column
              prop="time"
              label="添加时间"
              align='center'
              min-width="190">
            </el-table-column>
            <el-table-column 
              label="花费"
              align='center'
              min-width="100">
              <template slot-scope="scope">
                <span>{{'$'+ scope.row.num1}}</span>
              </template>
            </el-table-column>
            <el-table-column 
              label="平均CPA"
              align='center'
              min-width="100">
              <template slot-scope="scope">
                <span>{{'$'+ scope.row.num2}}</span>
              </template>
            </el-table-column>
            <el-table-column 
              label="平均CPC"
              align='center'
              min-width="100">
              <template slot-scope="scope">
                <span>{{'$'+ scope.row.num3}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="num4"
              label="曝光数"
              align='center'
              min-width="100">
            </el-table-column>
            <el-table-column
              prop="num5"
              label="点击数"
              align='center'
              min-width="100">
            </el-table-column>
            <el-table-column
              prop="num6"
              label="下载数"
              align='center'
              min-width="100">
            </el-table-column>
            <el-table-column 
              label="点击率"
              align='center'
              min-width="100">
              <template slot-scope="scope">
                <span>{{scope.row.num7 | numTofixed}}</span>
              </template>
            </el-table-column>
            <el-table-column 
              label="转化率"
              align='center'
              min-width="100">
              <template slot-scope="scope">
                <span>{{scope.row.num8 | numTofixed}}</span>
              </template>
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              align='center'
              min-width="120">
              <template slot-scope="scope">
                <el-tooltip class="item" effect="dark" content="删除" placement="top">
                  <el-button @click="handleClick(scope.row ,scope.$index)" type="text" size="small">
                    <i class="iconfont icon-shanchu"></i>
                  </el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="编辑" placement="top">
                  <el-button type="text" size="small" @click="userEdit(scope.$index)">
                    <i class="iconfont icon-bianji-copy"></i>
                  </el-button>
                </el-tooltip> 
              </template>
            </el-table-column>
          </el-table>

          <div class="content_page">
            <el-pagination
              :current-page="pageIndex"
              background 
              :page-size="20"
              @current-change="handleCurrentChange"
              layout="prev, pager, next"
              :total="total">
            </el-pagination>
          </div>
       </div>
     </div>
  </div>
</template>

<script>
import NavList from '@components/AsmLaunch/Nav-List'
import KeySearch from '@components/AsmLaunch/Key-Search'
import { datefn } from "@commonJS/dateList";
export default {
  data () {
    return {
      pageName: '广告中心',
      routeList: [],//面包屑
      show: false,//控制搜索显示
      valuedata: '',//搜索内容
      placevaluedata: '账户名称',//搜索提示
      inputList: [//搜索列表
          
      ],
      dateList: [],//时间列表
      dateData: '',//当前时间
      dateNow: '2018-6-8 17-17',//请求时间段
      pageIndex: 1,
      emptyText: '当前暂无数据',
      total: 100,
      loading: false,
      tableData: [{
         name: '百度',
         id: '1154041905',
         time: '2018-6-12',
         num1: 100,
         num2: 100,
         num3: 100,
         num4: 100,
         num5: 100,
         num6: 100,
         num7: 0.3124,
         num8: 0.3561,
       },{
         name: '阿里',
         id: '1154041905',
         time: '2018-6-12',
         num1: 100,
         num2: 100,
         num3: 100,
         num4: 100,
         num5: 100,
         num6: 100,
         num7: 0.3234,
         num8: 0.3871,
       },{
         name: 'ASM_dfsdklwefsdsdfef',
         id: '1154041905',
         time: '2018-6-12',
         num1: 100,
         num2: 100,
         num3: 100,
         num4: 100,
         num5: 100,
         num6: 100,
         num7: 0.3234,
         num8: 0.3231,
       } ]
    };
  },

  components: {
    'v-nav': NavList,
    'v-search': KeySearch
  },

  computed: {},

  filters: { 
    numTofixed: function(value) {
      let num = (value*100).toFixed(2)
      return num+ '%'
    }
  },

  created() {
    this.dateList = datefn(4)
    this.dateData = this.dateList[0].value
  },

  updated() {},

  mounted() {
    this.$height('.advertisting_index')  

  },

  destroyed() {},

  methods: {
    changeInput(value) {//input搜索
          console.log(this.valuedata)
          this.inputList.push({
                name: '某某某公司',
                id: '123'
            }) 
    },
    changeInputList(value) {//input-list点击请求
        this.valuedata = this.inputList[value].name
    },
    changeFun(value) {
      //切换时间进行请求 
      this.dateData = value
    },

    handleClick(row , index) {
      //删除
      // $('.el-message-box--center').css({width: '300px'}) 
      // $('.el-message-box').css({width: '300px'})
      console.log(1)
      this.$confirm('是否删除所选账户？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          center: true
        }).then(() => { 
          console.log(row ,index);
        }).catch(() => { 
          console.log(row ,index);
      });
      
    }, 

    handleCurrentChange(val) {  
      this.emptyText = '加载中请稍后'
      this.loading = true
      console.log(`当前页: ${val}`);
    },

    addUserClick() {
      //添加账户 
      this.$router.push({
        path: '/advertising-center/usersetting',
        query: {
          type: 'add' 
        }
      })
    },

    userEdit(index) {
      //编辑账户
      this.$router.push({
        path: '/advertising-center/usersetting',
        query: {
          type: 'edit',
          id: index 
        }
      })
    },

    accountRoute(index , data) {
      //跳转账户详情
      this.$router.push({
        path: '/advertising-center/account',
        query: {
          accountName: data.name,
          accountId: 123
        }
      })
    }
  }
}

</script>