<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.account_index{
    box-sizing: border-box; 
    background: #f7f7f7;  
  .account_contant{ 
    width: 100%; 
    box-sizing: border-box;
    padding:  0 16px 30px;
    background: #fff;
    overflow: hidden;
  }
   
  .account_search{
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    position: relative;
    section{
      display: flex;
    }
    p{
      margin-right: 10px;
    }
  }
  .account_search_one{
    margin-right: 10px;
  }
  .account_gao{
    margin-left: 30px;
    font-weight: 600;
    color: @color;
    cursor: pointer;
  }
  //时区css
  .account_contant_top{
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    h1{
      font-size: 16px;
      font-weight: bold;
    }
    .checket_time{
      position: relative;
      display: flex;
      div{
        cursor: pointer;
        margin-left: 10px;
        i{
          margin-left: 10px;
        }
      }
      section{
        width: 140px;
        position: absolute;
        top: 24px;
        right: -16px;
        background: #fff;
        border: 1px solid @border;
        padding: 6px 0;
        border-radius: 4px;
        span{
          display: block;
          height: 30px;
          text-align: center;
          line-height: 30px;
          cursor: pointer;
          &:hover{
            background: #f7f7f7; 
          }
        }
      }
    }
  }
  //操作css
  .account_search_cao{
    cursor: pointer;
    display: flex;
    position: relative;
    margin-right: 20px;
    i{
        line-height: 40px;
        cursor: pointer;
    }
    section{
      width: 80px;
      position: absolute;
      top: 42px;
      left: 0;
      padding: 6px 0 ;
      background: #fff;
      border: 1px solid @border;
      border-radius: 4px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      z-index: 10;
      span{
        display: block;
        height: 30px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
        &:hover{
          background: #f7f7f7;
        }
      }
    }
  }
  .account_table{
    width: 100%;
    margin-top: 40px;
  }
  .acconut_table_a{ 
    width: 100%;
    margin: 0 auto;
    color: @color;
    cursor: pointer;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    &:hover{
      text-decoration: underline;
    }
  }
  .content_page{
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
  .add_negative{
    position: absolute;
    top: 0px;
    left: 620px;
    border: 1px solid @color;
    height: 38px;
    width: 150px;
    text-align: center;
    line-height: 38px;
    cursor: pointer;
    border-radius: 4px;
    color: @color;
    &:hover{
      background: @color;
      color: #fff;
    }
  }
}
</style>

<style lang="less" >
.el-message-box {width: 300px}
.account_index{ 
  .account_search_one{
    .el-select {
      width: 120px; 
    }
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
  <div class="account_index">  
     <div class="account_contant">  
        <!-- 搜索筛选 -->
       <div class="account_search">
         <section>
           <p>筛选</p>
            <div class="account_search_one">
                <el-select v-model="unlimited" @change= 'selectchange(unlimited)'>
                  <el-option
                    v-for="(item , index) in unlimitedList"
                    :key="index"
                    :label="item.label" 
                    :value="item.value">
                  </el-option> 
                </el-select>
            </div>
            <div>
              <v-search 
                :show='show' 
                :valuedata='valuedata' 
                :placevaluedata='placevaluedata' 
                :inputList='inputList'
                @changeInputList='changeInputList'
                @changeInput='changeInput'>
                </v-search>  
            </div> 
         </section>
         <section>
           <div class="account_search_cao"  @click="caoShow = true">
             操作：<i class="iconfont icon-xia"></i>
             <transition name="el-zoom-in-top">
               <section v-show="caoShow" @mouseout="caoShow = false" @mousemove="caoShow = true">
                <span v-for="(ele,index) in caoList" :key="index" @click="caoClick(index)">{{ele}}</span>
               </section>
             </transition> 
           </div> 
         </section>
         <div class="add_negative" @click="addNegative">
           添加否定关键词
         </div>
       </div>

       <!-- 表格 -->
       <div class="account_table">
         <el-table
            ref="multipleTable"
            :data="tableData4"
            style="width: 100%"
            max-height="600"
            highlight-current-row
            border
            stripe
            @selection-change="handleSelectionChange"
            @sort-change = 'sortchange'
            v-loading="loading"
            :default-sort = "{prop: 'num1', order: 'descending'}"> 
            <el-table-column
            type="selection"
            fixed
            align='center'
            width="55">
            </el-table-column>
            <el-table-column
            fixed 
            align='center'
            label="关键词" 
            min-width="300">
            <template slot-scope="scope"> 
              <div class="acconut_table_a" :title="scope.row.name"  >
                {{scope.row.name}}
              </div>
            </template>
            </el-table-column>
            <el-table-column 
            prop="num1"
            label="类型"  
            align='center'
            min-width="120"> 
            </el-table-column>
            <el-table-column 
            prop="num2"
            label="广告组名称"
            align='center'
            min-width="300"> 
            </el-table-column>
            <el-table-column
            prop="num3"
            label="广告组ID"
            align='center'
            min-width="120"> 
            </el-table-column> 
            <el-table-column
            prop="num4"
            label="匹配类型"  
            align='center'
            min-width="120">
            </el-table-column>  
            <el-table-column
            fixed="right"
            label="操作"
            align="center"
            min-width="70">
              <template slot-scope="scope"> 
                  <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData4)"
                  type="text"
                  size="small">
                  删除
                  </el-button>
              </template>
            </el-table-column>
        </el-table>
       </div>

       <!-- 分页 -->
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

     <!-- 弹窗后的状态提示 -->
    <v-message v-if="messageShow" :messageData='messageData'></v-message> 
    <!-- 添加否定关键词 -->
    <v-negative v-if="NegativeShow" :type="setType"></v-negative>
  </div>
</template>

<script> 
import KeySearch from '@components/AsmLaunch/Key-Search'
import { datefn } from "@commonJS/dateList" 
import Budget from "@components/AsmLaunch/Budget-Editor-Key" 
import Negative from '@components/AsmLaunch/Advanced-Negative'
export default {
  data () {
    return {  
        unlimitedList: [
          {
            value: 0,
            label: '不限'
          }, 
          {
            value: 1,
            label: '广泛匹配'
          },
          {
            value: 2,
            label: '精准匹配'
          }
        ],
        unlimited: 0,
        show: false,//控制搜索显示
        valuedata: '',//搜索内容
        placevaluedata: '关键词搜索',//搜索提示
        inputList: [//搜索列表 
        ],
        caoShow: false,
        caoList: ['删除','删除所有'], 
        tableData4: [
        {
          name: 'games',
          num1: '广告组',
          num2: 'US_TapTapdASH_EXACT_TEST',
          num3: 987654,
          num4: '广泛匹配', 
        },
         {
          name: 'games',
          num1: '广告组',
          num2: 'US_TapTapdASH_EXACT_TEST',
          num3: 987654,
          num4: '广泛匹配', 
        },
         {
          name: 'games',
          num1: '广告组',
          num2: 'US_TapTapdASH_EXACT_TEST',
          num3: 987654,
          num4: '广泛匹配', 
        },
         {
          name: 'games',
          num1: '广告组',
          num2: 'US_TapTapdASH_EXACT_TEST',
          num3: 987654,
          num4: '广泛匹配', 
        },
         {
          name: 'games',
          num1: '广告组',
          num2: 'US_TapTapdASH_EXACT_TEST',
          num3: 987654,
          num4: '广泛匹配', 
        }, {
          name: 'games',
          num1: '广告组',
          num2: 'US_TapTapdASH_EXACT_TEST',
          num3: 987654,
          num4: '广泛匹配', 
        },
      ],
      multipleSelection: [],
      indexMethod: 0,
      loading: false,
      messageShow: false,//弹窗返回状态
      messageData: {
        value: '',
        type: 1
      },  
      pageIndex: 1, 
      total: 100,
      NegativeShow: false,
      setType: '广告组'
    };
  },

  components: { 
    'v-search': KeySearch,  
    'v-negative': Negative
  },

  computed: {},

  created() {   
  },

  updated() {},

  mounted() { 
  },

  destroyed() {},

  methods: {  
      selectchange(index) {
        //筛选
      },
      changeInput(value) {
      //input搜索
          console.log(this.valuedata)
          this.inputList.push({
                name: '某某某公司',
                id: '123'
            }) 
      },
      changeInputList(value) {//input-list点击请求
          this.valuedata = this.inputList[value].name
      },

      caoClick(index) {
        //操作按钮
        this.caoShow = false
        let type = this.caoList[index]
        let _this = this 

        if(type == '删除') { 
          if(this.multipleSelection.length == 0) {
            _this.messageFn('请选择关键词',3)
          }else{
            this.$confirm('是否删除所选关键词？', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              center: true
              }).then(() => {  
                _this.messageFn('正在删除，请等待...',3) 
                _this.toggleSelection()
              }).catch(()=>{}) 
          } 
        } 

        if(type == '删除所有') {  
            _this.messageFn('请选择关键词',3) 
            this.$confirm('是否删除所有关键词？', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            center: true
            }).then(() => {  
              _this.messageFn('正在删除，请等待...',3) 
              _this.toggleSelection()
            }).catch(()=>{})  
        } 
      },
        
      deleteRow(index, rows) { 
        //this.loading = true
        let _this = this
        // setTimeout(()=>{
        //     rows.splice(index, 1)
        //     _this.loading = false
        // },1000) 
        this.$confirm('是删除所选关键词？', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            center: true
          }).then(() => {  
            this.messageFn('正在删除，请等待...',3) 
          }).catch(()=>{})
      },
      handleSelectionChange(val) {//选中
          this.multipleSelection = val;
          console.log(val)
      },
      sortchange(a){//排序
          console.log(a) 
      },
       toggleSelection() { 
         //清楚选中
          this.$refs.multipleTable.clearSelection(); 
      },
      messageFn(value,num) {
        //关闭编辑弹窗
        this.messageShow = true
        this.messageData = {
          value : value,
          type: num
        }
      },
      handleCurrentChange(val) {   
        console.log(`当前页: ${val}`);
        this.loading = true
      },
      addNegative() {
        //添加否定关键词
        this.NegativeShow = true
      }
    }
}

</script>