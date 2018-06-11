<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.advertisting_index{
  min-height: 100%;
  background: #f7f7f7;
  .adver_nav{
    margin: 60px 45px 0;
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
    padding-top: 25px;
    margin: 0 45px;
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
    line-height: 32px;
    margin-right: 20px;
    i{
      margin: 0 10px;
      cursor: pointer;
    }
  }
}
</style>
<style lang='less'>
.advertisting_index{
  .el-select {
    width: 230px;
    height: 32px;
  }
  .el-input,
  .el-input--suffix,
  .el-input__inner {
    height: 32px;
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
       <div class="btn">
         <i class="iconfont icon-plus-add"></i>
         <span>新增账户</span> 
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
          <p>数据或同步延迟，上次同步时间为：{{dateNow}}</p>
         <el-tooltip class="item" effect="dark" content="同步苹果数据" placement="top">
            <i class="iconfont icon-plus-add"></i>
          </el-tooltip> 
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
      placevaluedata: '关键词组名称',//搜索提示
      inputList: [//搜索列表
          
      ],
      dateList: [],//时间列表
      dateData: '',//当前时间
      dateNow: '2018-6-8 17-17',//请求时间段
    };
  },

  components: {
    'v-nav': NavList,
    'v-search': KeySearch
  },

  computed: {},

  created() {
    this.dateList = datefn(4)
    this.dateData = this.dateList[0].value
  },

  updated() {},

  mounted() {
    $(".content_search input").on("focus", function() {
      $(this)
        .parent()
        .css("border-color", "#2d76ed");
    });
    $(".content_search input").on("blur", function() {
      $(this)
        .parent()
        .css("border-color", "#dee2e6");
    });

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
        console.log(value)
    },
    changeFun(value) {
      //切换时间进行请求 
      this.dateData = value
    },
  }
}

</script>