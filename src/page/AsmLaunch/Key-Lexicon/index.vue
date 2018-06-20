<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.kl_index{
     box-sizing: border-box;
  padding: 60px 0 20px;
  background: #f7f7f7;
    .adver_nav{
    margin:0px 15px 0;
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
  .advuer_content{
    min-width: 1200px;
    background: #fff; 
    padding: 25px 16px 20px ;
    margin: 0 15px;
      h2{
          color:#000;
          font-size:15px;
          padding:15px 0 0 0;
      }
      .sostyle{
          padding:15px 0 0 0;
      }
     #textinput{
          width: 229px;
          height: 32px;
          border:1px solid @border;
          line-height: 32px;
          padding-left: 10px;
          box-sizing: border-box;
          font-size: @font_color;
      }

  }
  .advuer_content_top{
      height: 32px;
      display: flex;
      justify-content: space-between;
  }
  .advuer_settings{
      margin-right: 14px;
      line-height: 32px;
      position: relative;
      p{
          cursor: pointer;
          i{
              margin-left: 8px;
          }
      }
  }

}

</style>
<style lang="less">
.kl_index{
 .el-dialog__body{
      text-align: center;
  }
  .el-dialog__footer{
      text-align:center;
  }
}

</style>

<template>
  <div class="kl_index"> 
     <v-header></v-header>

     <div class="adver_nav">
       <v-nav :pageName='pageName' :routeList='routeList'></v-nav>
       <div class="btn">
         <i class="iconfont icon-plus-add"></i>
         <span  @click="centerDialogVisible = true,prentemit('1')">新建词组</span> 
       </div>
     </div>
     <div class="advuer_content">
         <h2>关键词组</h2>
         <div class="advuer_content_top">
             <v-search 
             :show='show' 
             :valuedata='valuedata' 
             :placevaluedata='placevaluedata' 
             :inputList='inputList'
             @changeInputList='changeInputList'
             @changeInput='changeInput' 
             class="sostyle">
             </v-search>   
             <div class="advuer_settings">
                  <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                            操作<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="1">删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
             </div>
         </div>
         <!-- 列表 -->
         <v-lexiconList :that="this" :prentemit="prentemit"  ref="lel"></v-lexiconList>
        
         <!-- 添加词组/编辑词组 -->
        <el-dialog
        :title="title"
        :visible.sync="centerDialogVisible"
        width="30%"
        left>
        <input type="text" name="" id="textinput" placeholder=" 输入词组名称" v-model="value">
        <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
     </div>
      <v-message v-if="messageShow" :messageData='messageData'></v-message>
  </div>

</template>

<script>
import NavList from '@components/AsmLaunch/Nav-List'
import KeySearch from '@components/AsmLaunch/Key-Search'
import lexiconList from "@components/AsmLaunch/lexiconList"
export default {
  data () {
    return {
        title:"",
        value:"",
        pageName: '广告中心',
        routeList: [//面包屑
            {
                name: '广告中心',
                path: '/advertising-center'
            }, 
            {
                name: '关键词库',
                path: '/key-lexicon'
            }, 
        ],
        show: false,//控制搜索显示
        valuedata: '',//搜索内容
        placevaluedata: '关键词组名称',//搜索提示
        inputList: [//搜索列表
        ],
        settingShow: false,
        centerDialogVisible: false,
        messageShow: false,//弹窗返回状态
        messageData: {
            value: '',
            type: 1
        }
    };
  },

  components: {
      'v-nav': NavList,
      'v-search': KeySearch,
      'v-lexiconList':lexiconList
  },

  computed: {},

  created() {},

  updated() {},

  mounted() { 
    this.$height('.kl_index') 

      let url = "/api/v1/IntellSearchApi/Index/AdvertiseSendEmail";

      this.$https.post(url).then(res => {
        console.log(res)
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
      prentemit(ststus,data){
         if(ststus == "1"){
             this.title= "添加词组";
             this.value="";
         }else{
             this.title= "编辑词组";
             this.centerDialogVisible=true;
             this.value=data["PhraseName"];
         }
         return false;
      }, handleCommand(command) {
        if(this.$refs.lel.multipleSelection.length > 0){
           
         }else{
            this.messageFn('请选择关键词组',3)
         }
        //   console.log(this.$refs.lel.multipleSelection)
          
          
      },messageFn(value,num) {
        //关闭编辑弹窗
        this.messageShow = true
        this.messageData = {
          value : value,
          type: num
        }
      }
  }
}

</script>