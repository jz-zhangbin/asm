<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.intgentMitorLibrary{
 box-sizing: border-box;
  padding: 60px 0 20px;
  background: #f7f7f7;
    .adver_nav{
    margin: 0 15px 0;
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
    span{
        color:#fff;
    }
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
      .table{
    padding: 40px 0 0;
    tr td,th{
        border-right:1px solid #dee2e6;
        text-align: center;
        padding:8px 0;
    }
    tr th{
        background:rgb(248,249,250);
                line-height:34px;
    }
    .el-pagination{
        width: 440px;
        margin:30px auto;
    }
    .fonticon{
        i{
            color:#000;
            font-size:18px;
            margin-right:10px;
        }
    }
}
.el-message-box{width: 300px;}
</style>

<template>
  <div class="intgentMitorLibrary"> 
     <v-header></v-header>

     <div class="adver_nav">
       <v-nav :pageName='pageName' :routeList='routeList'></v-nav>
       <div class="btn">
            <router-link :to="{path: '/intgentMitorLibrary/MRpublic?parame=add'}"> 
                 <span>添加监测规则</span> 
            </router-link>
       </div>
     </div>
     <div class="advuer_content">
         <h2>监测规则</h2>
         <div class="advuer_content_top">
             <div class="sostyle">
                    <v-search 
                    :show='show' 
                    :valuedata='valuedata' 
                    :placevaluedata='placevaluedata' 
                    :inputList='inputList'
                    @changeInputList='changeInputList'
                    @changeInput='changeInput' 
                    >
                    </v-search>   
             </div>
            
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
         <div class="table">
                <el-table
                ref="multipleTable"
                :data="tableData3"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="37">
                </el-table-column>
                <el-table-column
                label="规则名称"
               show-overflow-tooltip>
                <template slot-scope="scope">
                        <span style="color:rgb(0,158,252)">{{ scope.row.KeyWord }} {{ scope.row.id }}</span>
                </template>
                </el-table-column>
                <el-table-column
                prop="SearchIndex"
                label="监测对象"
                width="200"
                align='center'>
                 <template slot-scope="scope">
                     <div style="text-align:left">
                        广告组：<span  style="color:red">{{scope.row.SearchIndex}}</span>
                     </div>
                </template>
                </el-table-column>
                <el-table-column
                prop="RecentBiddingAPP"
                label="创建时间"
                width="250">
                </el-table-column>
                <el-table-column
                label="操作"
                width="160">
                <template slot-scope="scope">
                    <el-button
                    type="text"
                    size="small">
                    <span class="fonticon" >
                        <el-tooltip class="item" effect="dark" content="删除" placement="top"   @click.native.prevent="deleteRow(scope.$index,scope.row.id)">
                           <i class="icon iconfont icon-shanchu" style="margin-left:10px;"></i>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="编辑" placement="top">
                             <router-link :to="{path: '/intgentMitorLibrary/public?parame=modify'}"> 
                                  <i class="icon iconfont icon-bianji" style="font-size:15px;"></i>
                             </router-link>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="查看" placement="top">
                            <router-link :to="{path: '/intgentMitorLibrary/public?parame=see'}"> 
                                  <i class="icon iconfont icon-eye"></i>
                            </router-link>
                        </el-tooltip>
                    </span> 
                    </el-button>
                </template>
                </el-table-column>
            </el-table>
            <el-pagination 
            background
            layout="prev, pager, next"
            :total="1000">
            </el-pagination>
        <!-- 列表 -->
     </div>
    </div>
            <v-message v-if="messageShow" :messageData='messageData'></v-message>
  </div>

</template>

<script>
import NavList from '@components/AsmLaunch/Nav-List'
import KeySearch from '@components/AsmLaunch/Key-Search'
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
                name: '智能监测库',
                path: '/intgentMitorLibrary'
            },{
                name: '监测规则',
                path: '/intgentMitorLibrary/MonitoringRules'
            }
        ], 
        multipleSelection: [],
        show: false,//控制搜索显示
        valuedata: '',//搜索内容
        placevaluedata: '监测规则名称',//搜索提示
        inputList: [//搜索列表
            
        ],
        tableData3: [{
          KeyWord: '智查添加关键词',
          SearchIndex: '5',
          Prevalence: '98',
          RecentBiddingAPP: "2017-11-27 14:13:43",
          id:"111111"
        },{
          KeyWord: '智查添加关键词',
          SearchIndex: '5',
          Prevalence: '98',
          RecentBiddingAPP: "2017-11-27 14:13:43",
          id:"222222"
        },{
          KeyWord: '智查添加关键词',
          SearchIndex: '5',
          Prevalence: '98',
          RecentBiddingAPP: "2017-11-27 14:13:43",
          id:"333333"
        },{
          KeyWord: '智查添加关键词',
          SearchIndex: '5',
          Prevalence: '98',
          RecentBiddingAPP: "2017-11-27 14:13:43",
          id:"444444"
        },{
          KeyWord: '智查添加关键词',
          SearchIndex: '5',
          Prevalence: '98',
          RecentBiddingAPP: "2017-11-27 14:13:43",
          id:"555555"
        }],  
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
  },

  computed: {},

  created() {},

  updated() {},

  mounted() {this.$height('.intgentMitorLibrary') },

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
    }, handleCommand(command) {
        if(this.multipleSelection.length > 0){
             this.$confirm('是否删除所选智能监测？', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    //   type: 'warning',
                    width:50,
                    center: true
                    }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
            });
        }else{
             this.messageFn('请选择智能监测~',3)
        }
    } ,handleSelectionChange(val) {
        console.log(val)
        this.multipleSelection = val;
    },deleteRow(index,item){
     this.$confirm('是否删除所选关键词？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        //   type: 'warning',
        width:50,
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
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