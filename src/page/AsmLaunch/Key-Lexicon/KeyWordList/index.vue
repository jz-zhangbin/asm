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
    .arlstyle{
        text-align: center;
        width: 100%;
        display: block;
        padding: 15px 0;
    }
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
    position: relative;
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
      padding-top: 25px;
      p{
          cursor: pointer;
          i{
              margin-left: 8px;
          }
      }
      
  }
  .KeyWord{
      margin-right: 14px;
      line-height: 32px;
     position: absolute;
     right: 0;
     top: 14px;
      .el-button{
          border:1px solid @color;
          color: @color;
      }
  }
}
</style>
<style lang='less'>
.kl_index{
     .el-dialog__body{
        padding:0;
        #textinput{
            width: 228px;
            height: 27px;
            margin: 0 auto;
            display: block;
            border:1px solid  #dee2e6;
            padding:0 7px;
            line-height:27px;
            color: #6c757d;
        }
       
    }
     .el-dialog__footer{
         text-align:center;
         padding:16px 20px 20px;
     }
    .Downloadsample{
         float: right;
        padding-right: 10px;
        color: #6c757d;
        font-size: 13px;
     }
     .upload-demo{
         clear: both;
         text-align: center;
         button{
             width: 54px;
             height: 54px;
             background: #fff;
             border:1px solid rgb(227,227,227);
             span{
                 i{
                         color: #000;
                 }
             }
         }
     }
     .el-select{
         width: 100%;
         .el-input{
             width: 65%;
             margin:0 auto;
         }
     }
      .file_input{
        width: 100%;
        height: 60px;
        position: relative;
        display: flex;
        justify-content: center;
        margin: 20px 0;
        input{
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            display: block;
            width: 70px;
            height: 70px; 
            opacity: 0;
            cursor: pointer;
        }
        span{
            display: block;
            width: 70px;
            height: 70px;
            border: 1px solid #dee2e6;
            text-align: center;
            line-height: 70px;
            i{
                font-size: 40px;
            }
        }
    } .file_ul_box{
        width: 100%;
        max-height: 150px;
        overflow-y: auto;
        margin-top: 20px;
    }
    .file_ul{
        display: flex;
        box-sizing: border-box;
        padding: 10px 20px;
        flex-wrap: wrap;  
        li{
            padding: 8px 20px;
            border: 1px solid #dee2e6;
            color: #2d76ed;
            border-radius: 4px;
            position: relative;
            margin: 0 14px 14px 0;
            img{
                position: absolute;
                right: -8px;
                top: -8px;
                cursor: pointer;
            }
        }
    }
}
   
</style>
<template>
  <div class="kl_index"> 
     <v-header></v-header>
     <div class="adver_nav">
       <v-nav :pageName='pageName' :routeList='routeList'></v-nav>
     </div>
     <div class="advuer_content">
         <h2>关键词列表</h2>
         <div class="KeyWord"> 
            <el-button @click="centerDialogVisible = true">添加关键词</el-button>
         </div>
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
                            <el-dropdown-item command="2">复制至</el-dropdown-item>
                            <el-dropdown-item command="3">移动至</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
             </div>
             
         </div>
           <v-KeyWordList ref="kwl"></v-KeyWordList>
     </div>
     <el-dialog
        title='添加关键词'
        :visible.sync="centerDialogVisible"
        width="30%"
        left>
      
            <el-tabs v-model="activeName" @tab-click="handleClick" >
                <el-tab-pane label="" name=""></el-tab-pane>
                <el-tab-pane label="" name=""></el-tab-pane>
                <el-tab-pane label="" name=""></el-tab-pane>
                <el-tab-pane label="手动添加" name="first">
                    <input type="text" name="" id="textinput" placeholder=" 输入词组名称" v-model="value">
                </el-tab-pane>
                <el-tab-pane label="上传关键词" name="second">
                    <div class="Downloadsample">下载样例</div>
                    <div class="file_ul_box" >
                        <ul class="file_ul">
                            <li v-for="(ele,index) in fileList" :key="index">
                                {{ele.name}}
                                <img src="../../../../images/components/u132.png" alt="" @click="removefile(index)">
                            </li>  
                        </ul>
                    </div> 
                    <div class="file_input" >
                        <input type="file" name="" id="" multiple @change="getFile($event)"  >
                        <span>
                            <i class="iconfont icon-adds"></i>
                        </span>
                    </div>
                   <!-- <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="1000"
                        show-file-list
                        :on-exceed="handleExceed"
                        :file-list="fileList"
                        :on-progress="handleRemove">
                        <el-button size="small" type="primary">
                            <i class="el-icon-plus"></i>
                        </el-button>
                         :before-upload="handlePreview"<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload> -->
                    </el-tab-pane>
             </el-tabs>
        <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">添加</el-button>
        </span>
       
    </el-dialog>
    <el-dialog
        :title="title"
        :visible.sync="centerDialogVisibles"
        width="30%"
        left>
        <span class="arlstyle" style="text-align:center" v-html="statement"></span>
        <el-select v-model="value" placeholder="请选择"  center>
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <!-- <input type="text" name="" id="textinput" placeholder=" 输入词组名称" v-model="value"> -->
        <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisibles = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisibles = false">确 定</el-button>
        </span>
        </el-dialog>
         <v-message v-if="messageShow" :messageData='messageData'></v-message>
  </div>

</template>

<script>
import NavList from '@components/AsmLaunch/Nav-List'
import KeySearch from '@components/AsmLaunch/Key-Search'
import KeyWordList from "@components/AsmLaunch/KeyWordList"
export default {
  data () {
    return {
        title:"",
        statement:"",
        num:5,
        activeName: 'first',
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
            {
                name: '关键词列表',
                path: '/KeyWordList'
            }
        ],
        show: false,//控制搜索显示
        valuedata: '',//搜索内容
        placevaluedata: '关键词名称',//搜索提示
        inputList: [//搜索列表
        ],
        settingShow: false,
        centerDialogVisible: false,
        centerDialogVisibles:false,
        fileList:[],
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
        fileList:[],        
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
      "v-KeyWordList":KeyWordList
  },
  computed: {},

  created() {},

  updated() {},

  mounted() {
      this.$height('.kl_index') 
      
  },

  destroyed() {},

  methods: {
      handleCommand(command) {
         if(this.$refs.kwl.multipleSelection.length > 0){
            switch(command)
            {
            case "1":
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
                break;
            case "2":
                this.title="复制关键词";
                this.statement="复制<span style='color:red;'>"+this.num+"</span>个关键词至"
                this.centerDialogVisibles=true;
                break;
            case "3":
                 this.title="移动关键词";
                 this.statement="移动<span style='color:red;'>"+this.num+"</span>个关键词至"
                this.centerDialogVisibles=true;
                break;
            default:
                return false;
            }
         }else{
              this.messageFn('请选择关键词~',3)
         }
         
        
       
      },getFile($event) { 
          if(event.target.files.length == 1) {
              let num = 0 
              this.fileList.map((ele,index)=>{
                  if(event.target.files[0].name == ele.name) {
                      num = 1
                  }
              })
              if(num != 1) {
                  this.fileList.push(event.target.files[0])
              }else{
                  event.target.files = null
                  alert('不能上传重复文件')
              }
          }else{
             let arr = []
             let num = 0
             console.log(event.target.files)
              for(var i in event.target.files) {  
                  if( i != 'length' && i != 'item') {
                      arr.push(event.target.files[i])
                  } 
              } 
              this.fileList.map((ele)=>{
                  arr.map((ele2)=>{
                      if(ele.name == ele2.name) {
                          num = 1
                      }
                  })
              })
              if(num != 1) {
                  this.fileList.push(...arr)
              }else{
                   event.target.files = null
                  alert('不能上传重复文件')
              }
          }
          
      },
      removefile(index) {
          this.fileList.splice(index,1)
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