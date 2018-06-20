<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.publicintgentMitor{
  .el-dialog__footer{text-align:center !important;}
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
          padding:15px 0 0 15px;
      }
      .sostyle{
          padding:15px 0 0 15px;
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
      height: auto;
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



   .advuser_form{
    padding-left: 200px; 
    h5,h6{
      font-size: 12px;
      color: #aaa;
      margin-top: 6px;
    } 
    h6{
      color: @color;
      cursor: pointer;
      margin-top: 4px;
    }
  }
  .advuser_form_p{
    margin-top: 30px;
    margin-bottom: 8px;
  }
  .advuser_form_input{
    height: 40px;
    border: 1px solid @border;
    border-radius: 4px;
    outline: none;
    padding-left: 12px;
    line-height: 40px;
     &::-webkit-input-placeholder {
          color: #9a9a9a;
        } 
  }
  .advuser_form_fil{
    text-align: center;
    padding: 0 5px;
    cursor: pointer;
    overflow: hidden;
  }
  .advuser_form_boxfil{
    position: relative; 
    display: flex;
    line-height: 40px;
  }
  .imgclose{
    position: absolute;
    top: -10px;
    left: 126px;
    z-index: 200;
    cursor: pointer;
  }
  .advuser_form_none{
    position: absolute;
    opacity: 0;
    width: 122px;
    height: 40px;
    top: 0;
    left: 0;
    cursor: pointer;
    z-index: 100;
  }
  .warning{
    color: red;
    margin-left: 10px;
  }
  .advuser_istype{
    margin-top: 20px;
    h2{
      color: @color;
    }
    section{
      margin-left: 30px; 
    }
  }
  .adver_btn{
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    div{
      width: 160px;
      height: 44px;
      border: 1px solid @border;
      border-radius: 4px;
      margin-right: 30px;
      cursor: pointer;
      text-align: center;
      line-height: 44px;
      &.one{
        &:hover{
          color: #333;
          background-color: #ebebeb;
          border-color: #adadad;
        }
        &:active{
          background-image: none;
          outline: 0;
          -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
          box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
        }
      } 
      &.two{
        color: #fff;
        background: @color;
        &:hover{ 
          background-color: @btnhover;
          border-color: #adadad;
        }
        &:active{
          background-image: none;
          outline: 0;
          -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
          box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
        }
      }
    }
  }
 

}
</style>
<style lang="less">
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
  .publicstyle{
      .pubspan{
          padding: 0 10px;
      }
      .advuser_form_input{
        height: 40px;
        border: 1px solid #dee2e6;
        border-radius: 4px;
        outline: none;
        padding-left: 12px;
        line-height: 40px;
        width: 100px !important;
        &::-webkit-input-placeholder {
            color: #9a9a9a;
         } 
    }
    .el-select{width: 100px;    margin-right: 10px;}
    .operation{color:rgb(0,158,251);padding: 0 15px 0 45px;}
    .el-button{margin-right:30px;}
  }
  .bootonstyle{
     .el-button{
       color:#2d76ed;
       margin-right:10px;
     }
     .red{
       color:red;
     }
  }
  .publicintgentMitor{
    .khgx{color:#000;padding-left:11px;}
    .ceatdate{color:#868686;padding-left:34px;}
    .el-table{
      margin-top:16px;
    }
    .el-dialog__body{
        padding:0 30px 9px 20px;
    }
    .el-table td, .el-table th{
      padding:8px 0;
    }
   .el-table th.is-leaf{
      background: rgb(251,251,251);
    }
  .el-dialog__footer{text-align:center !important;}
  }
  .input_search{   
    
    border-radius: 4px;
    height: 28px;
    display: flex;
    position: relative;
    margin-bottom:25px;
    input{
      width: 210px;  
      height: 28px; 
      outline: none; 
      padding-left: 10px;
      border-radius: 4px;
      border: 1px solid @border;
      &::-webkit-input-placeholder {
          color: #9a9a9a;
        } 
    } 
    span{
      display: block; 
      width: 32px;
      height: 32px; 
      box-sizing: border-box;
      border: 1px solid @border;
      border-radius: 4px;
      margin-left: 14px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      &:hover{
        border: 1px solid @color;
      }
      i{
        line-height: 32px;
        text-align: center;
        font-size: 15px;
      }
    }
    ul{
      width: 220px;
      box-sizing: border-box;
      padding:6px 12px;
      background: #fff;
      top: 42px;
      left: 0;
      position: absolute;
      border: 1px solid @border; 
      z-index: 100; 
      li{
        height: 30px;
        line-height: 30px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        &:hover{
          background: #f7f7f7;
          color: green;
          cursor: pointer;
        }
      }
    } 
}
</style>

<template>
  <div class="publicintgentMitor"> 
     <v-header></v-header>
     <div class="adver_nav">
       <v-nav :pageName='pageName' :routeList='routeList'></v-nav>
     </div>
     <div class="advuer_content">
         <h2>{{Title}}</h2>
         <div class="advuer_content_top">
            <div class="advuser_form"> 
                <p class='advuser_form_p'>智能监测名称</p>
                 <div>
                    <input type="text" :readonly="isdisabledFn" placeholder="设置智能监测名称" class="advuser_form_input" style="width: 300px" v-model="userName">
                    <span class="warning" v-if="warnuserName">账户名称不能为空</span>
                </div>
                <h5>设置名称后将自动保存至智能监测库，便于再次使用</h5>         


                <p class='advuser_form_p'>监测账户花费</p> 
                <div class="publicstyle">
                    <span class="pubspan">日预算</span>
                    <el-select v-model="value" placeholder="请选择"  :disabled="isdisabledFn" >
                           <el-option
                           v-for="item in options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value"
                           readonly>
                           </el-option>
                    </el-select>
                    <input type="text" placeholder="" class="advuser_form_input"  readonly     v-model="value"> $
                    <span class="operation">操作</span>
                    <el-button plain disabled>暂停投放</el-button>
                    <el-checkbox v-model="checked"  :disabled="isdisabledFns">次日开启</el-checkbox>
                </div>

                <p class='advuser_form_p'>选择监测账户</p> 
                <div class="bootonstyle">  
                  <el-button v-show="Monitor" @click="centerDialogVisible = true">选择监测对象</el-button>
                  <span>
                    状态：已选择<span class="red">123456</span> 账户   
                  </span>
                  <span>
                     状态：<span class="red">未选择监测对象</span> 
                  </span>
                </div>
                <div class="adver_btn">
                    <div class="one" v-show="shows"  @click="$router.go(-1)">取消</div>
                    <div class="two" >{{status}}</div>
                </div> 
            </div>
         </div>
     </div>

      <el-dialog
        title="选择监测账户"
        :visible.sync="centerDialogVisible"
        width="527"
        left>
        <div class="input_search"> 
            <v-search 
                :show='show' 
                :valuedata='valuedata' 
                :placevaluedata='placevaluedata' 
                :inputList='inputList'
                @changeInputList='changeInputList'
                @changeInput='changeInput'>
            </v-search>   
        </div>
        <el-table
          :data="tableData4"
          style="width: 100%"
          max-height="300">
          <el-table-column
            prop="date"
            label="账户列表">
             <template slot-scope="scope">
               <span class="khgx">
                   账户名称： {{scope.row.name}}
               </span>
               <span class="ceatdate">
                  创建时间：{{scope.row.date}}
               </span>
             </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label=""
            width="60">
            <template slot-scope="scope">
              <!-- <el-button
                type="text"
                size="small"> 
                  <el-checkbox ></el-checkbox>
               <input type="checkbox" name="" id="" @click="deleteRow(scope.$index, tableData4)">
              </el-button> -->
               <input type="radio" name="" id="" @click="deleteRow(scope.$index, tableData4)">
                
            </template>
          </el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>   
  </div>
</template>

<script>
import NavList from '@components/AsmLaunch/Nav-List'
import KeySearch from '@components/AsmLaunch/Key-Search'
export default {
  data () {
    return {
        select:"",
        value:"",
        shows:false,
        Monitor:false,
        pageName: '广告中心',
        checked: false,
        status:"",
        Title:"",
        centerDialogVisible:false,
        isdisabledFn:true,
        isdisabledFns:false,
        routeList: [//面包屑
            {
                name: '广告中心',
                path: '/advertising-center'
            }, 
            {
                name: '智能监测库',
                path: '/intgentMitorLibrary'
            },
            {
                name: '新建智能监测',
                path: '/intgentMitorLibrary/public'
            }
        ], 
        multipleSelection: [],
        show: false,//控制搜索显示
        valuedata: '',//搜索内容
        placevaluedata: '请输入智能监测名称',//搜索提示
        inputList: [],//搜索列表
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        tableData4: [{
          name:"百度地图 ",
          date:'2017-11-27 14:13:43'
        },{
          name:"百度地图 ",
          date:'2017-11-27 14:13:43'
        },{
          name:"百度地图 ",
          date:'2017-11-27 14:13:43'
        },{
          name:"百度地图 ",
          date:'2017-11-27 14:13:43'
        },{
          name:"百度地图 ",
          date:'2017-11-27 14:13:43'
        }]
    };
  },

  components: {
      'v-nav': NavList,
      'v-search': KeySearch,
  },

  computed: {},

  created() {},

  updated() {},

  mounted() {
     //modify 修改  add 添加  see 查看
      this.$height('.publicintgentMitor');
      switch(this.$route.query.parame){ 
        case "add":
             this.status="下一步";
             this.shows=true;
             this.Monitor=true;
             this.isdisabledFn=false;
             this.Title="新建智能监测";
           break;
        case "modify":
             this.status="确定";
             this.shows=true;
             this.isdisabledFn=false;
             this.Title="编辑智能监测";
           break;
        case "see":
             this.status="确定";
             this.isdisabledFns=true;
             this.Title="查看智能监测";
           break;
        default:
          return false;
      }
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
              this.$alert('请选择智能监测~', '提示', {
                confirmButtonText: '确定'
             });
        }
    } ,handleSelectionChange(val) {
        this.multipleSelection = val;
    },change(val){

    },deleteRow(index, tableData4){
      console.log(index)
    }
  }
}

</script>