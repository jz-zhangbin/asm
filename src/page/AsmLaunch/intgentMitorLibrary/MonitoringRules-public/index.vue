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
          width: 120px;
          height: 40px;
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
  .advuser_form_ps{
    color:#000;
    font-weight: 600;
      margin-top: 30px;
    margin-bottom: 8px;
    span{
      color:red;
    }
  }
  .advuser_form_ps_border{
    color:#000;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom: 8px;
    border-bottom:1px solid #dee2e6;
    padding-bottom:23px;
    span{
      color:red;
    }
  }
  .advuser_form_ps_borders{
    color:#000;
    font-weight: 100;
    margin-top: 30px;
    margin-bottom: 8px;
    span{
      color:red;
    }
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
 
  .boxwidth{
    width: 100%;
    height: 300px;
    overflow-y: scroll;
    margin-top: 10px;
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
   .ele_botton_my{
      button{
         width: 54px;
         height: 54px;
         background: #fff;
         border: 1px solid #e3e3e3;
         span{
           i{color:#000;font-size:20px;}
         }
      }
    }
    .ruleList{
      width: 700px;
      ul{
        li{
          width: 100%;
          height: auto;
          padding:8px;
          background:  #f7f7f7;
          margin-bottom:20px;
          position: relative;
          i{
            position: absolute;
            right: -4px;
            top: -6px;
          }
          select{
            width: 74px;
            height: 31px;
            margin-right:10px;
            border:1px solid #dee2e6;
            border-radius:5px;
            margin-bottom:10px;
          }
          .inputs{
            width: 90px;
            height: 26px;
            line-height:26px;
            padding-left:5px;
            border:1px solid #dee2e6;
            border-radius:5px;
            display: none;
          }
          .inputs1{
            width: 90px;
            height: 26px;
            line-height:26px;
            padding-left:5px;
            border:1px solid #dee2e6;
            border-radius:5px;
              margin-right:10px;
          }
          .radio1{
            display:none;
          }
           .SaveModification{
              height: 40px;
              background: #1559c8 ;
              height: 40px;
              width: 80px;
              color: #fff;
              text-align: center;
              line-height: 40px;
              border-radius: 5px;
              margin: 0 auto;
              cursor: pointer;
            }
        }
      }
    }
  }
  .input_search{   
    
    border-radius: 4px;
    height: 28px;
    display: flex;
    position: relative;
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
         <h2>添加监测规则</h2>
         <div class="advuer_content_top">
            <div class="advuser_form"> 
                <p class='advuser_form_ps'>智能监测名称：123456&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日预算： ≥ $100</p>
                <p class='advuser_form_ps_border'>监测账户：<span>百度地图</span></p>

                <p class='advuser_form_p'>监测规则</p>
                <div class="ruleList">
                    <ul>
                     <!-- <li>
                         <div class="prentlist">
                          <i class="el-icon-error" @click="Close($event)"></i>
                          <div class="rulelistkmain">
                              <select>
                                <option value ="花费" selected>花费</option>
                                <option value ="平均CPC">平均CPC</option>
                                <option value="平均CPA">平均CPA</option>
                                <option value="曝光数">曝光数</option>
                                <option value="点击数">点击数</option>
                                <option value="下载数">下载数</option>
                                <option value="点击率">点击率</option>
                                <option value="转化率">转化率</option>
                              </select>
                              <select >
                                <option value ="≥" >≥</option>
                                <option value ="<"> &lt; </option>
                              </select>
                              <input type="text" name="" class="inputs1" placeholder="请输入" >
                               <select style="width:100px" class="seclectclick">
                                <option value ="增加预算" selected>增加预算</option>
                                <option value ="减少预算">减少预算</option>
                                <option value="关闭广告" selected>关闭广告</option>
                                <option value="并且">并且</option>
                              </select>
                               <input type="radio"  class="radio1"  name="radio"  checked="checked"/><label for="radio1" class="radio1">数值调整</label>
                               <input type="radio"  class="radio1"  name="radio"  checked="checked"/><label for="radio1" class="radio1">比例调整</label>
                               <input type="text" name="" class="inputs" placeholder="请输入" >
                          </div>
                        </div>
                         <div class="SaveModification">
                          编辑
                         </div>
                      </li> -->
                    </ul>
                </div>
                <div class="ele_botton_my" @click="addrulrList">
                    <el-button size="small" type="primary">
                        <i class="el-icon-plus"></i>
                    </el-button>
                </div>
                  
                <p class='advuser_form_p' style="  border-top: 1px solid #000;padding-top: 18px;">选择监测账户</p> 
                <div class="bootonstyle">  
                  <el-button v-show="Monitor" @click="centerDialogVisible = true">选择监测对象</el-button>
                  <span>
                    状态：已选择<span class="red">123456</span> 账户   
                  </span>
                  <span>
                     状态：<span class="red">未选择监测对象</span> 
                  </span>
                </div>

                <p class='advuser_form_ps_borders' >监测频率<span>（设置时间后将定时监测投放状态）</span></p>
                 <div class="publicstyle">
                    <span class="pubspan">每</span>
                    <el-select v-model="value" placeholder="请选择"  :disabled="isdisabledFn" >
                           <el-option
                           v-for="item in options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value"
                           readonly>
                           </el-option>
                    </el-select>
                </div>
                <p class='advuser_form_p'>智能监测调整反馈邮箱</p>
                <div>    
                        <el-radio v-model="radio" label="1">立即执行</el-radio>
                        <el-radio v-model="radio" label="2">周一至周五执行</el-radio>
                        <el-radio v-model="radio" label="3">每周末执行</el-radio>
                </div>
                <p class='advuser_form_p'>监测规则名称</p>
                 <div>
                    <input type="text" :readonly="isdisabledFn" placeholder="设置智能监测名称" class="advuser_form_input" style="width: 300px" v-model="userName">
                    <span class="warning" v-if="warnuserName">监测规则名称不能为空</span>
                </div>
                <h5>设置名称后将自动保存至智能监测库，便于再次使用</h5>      
                 <p class='advuser_form_p'>智能监测调整反馈邮箱</p>
                 <div>
                    <input type="text" :readonly="isdisabledFn" placeholder="设置反馈邮箱" class="advuser_form_input" style="width: 300px" v-model="userName">
                    <span class="warning" v-if="warnuserName">邮箱不能为空</span>
                </div>
                <h5>设置邮箱后将及时反馈智能监测调整结果</h5>    
                <div class="adver_btn">
                    <div class="one" v-show="show"  @click="$router.go(-1)">取消</div>
                    <div class="two" >{{status}}</div>
                </div> 
            </div>
         </div>
     </div>

      <el-dialog
        title="选择监测对象"
        :visible.sync="centerDialogVisible"
        width="527"
        left>
        <h5>所属账户名称：<span style="color:red;">213213343</span></h5>    
        <div class="boxwidth">
          <el-tree
            :data="data2"
            show-checkbox
            default-expand-all
            node-key="id"
            ref="tree"
            highlight-current
            :props="defaultProps">
          </el-tree>
        </div>
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
        show:false,
        Monitor:false,
        pageName: '广告中心',
        checked: false,
        status:"",
        centerDialogVisible:false,
        isdisabledFn:true,
        isdisabledFns:false,
        ruleList:["11111"],
        length:1,
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
        value: '',
        temp:'<li> <div class="prentlist"><i class="el-icon-error"></i><div class="rulelistkmain"><select><option value ="花费" selected>花费</option><option value ="平均CPC">平均CPC</option><option value="平均CPA">平均CPA</option><option value="曝光数">曝光数</option><option value="点击数">点击数</option><option value="下载数">下载数</option><option value="点击率">点击率</option><option value="转化率">转化率</option></select><select ><option value ="≥" >≥</option><option value ="<"> &lt; </option></select><input type="text" name="" class="inputs1" placeholder="请输入" ><select style="width:100px"  class="seclectclick"><option value ="增加预算" selected>增加预算</option><option value ="减少预算">减少预算</option><option value="关闭广告" selected>关闭广告</option><option value="并且">并且</option></select><input type="radio"  class="radio1"  name="radio"  checked="checked"/><label for="radio1" class="radio1">数值调整</label><input type="radio"  class="radio1"  name="radio"  checked="checked"/><label for="radio1" class="radio1">比例调整</label><input type="text" name="" class="inputs" placeholder="请输入" ></div></div> <div class="SaveModification">保存</div></li>',
        temp1:'<div class="rulelistkmain"><select><option value ="花费" selected>花费</option><option value ="平均CPC">平均CPC</option><option value="平均CPA">平均CPA</option><option value="曝光数">曝光数</option><option value="点击数">点击数</option><option value="下载数">下载数</option><option value="点击率">点击率</option><option value="转化率">转化率</option></select><select ><option value ="≥" >≥</option><option value ="<"> &lt; </option></select><input type="text" name="" class="inputs1" placeholder="请输入" ><select style="width:100px"  class="seclectclick"><option value ="增加预算" selected>增加预算</option><option value ="减少预算">减少预算</option><option value="关闭广告" selected>关闭广告</option><option value="并且">并且</option></select><input type="radio"  class="radio1"  name="radio"  checked="checked"/><label for="radio1" class="radio1">数值调整</label><input type="radio"  class="radio1"  name="radio"  checked="checked"/><label for="radio1" class="radio1">比例调整</label><input type="text" name="" class="inputs" placeholder="请输入" ></div>',
       ruleLists:[],
       options: [{
          value: '30分钟',
          label: '30分钟'
        }, {
          value: '1小时',
          label: '1小时'
        }, {
          value: '2小时',
          label: '2小时'
        }, {
          value: '3小时',
          label: '3小时'
        }, {
          value: '6小时',
          label: '6小时'
        },{
          value: '12小时',
          label: '12小时'
        },{
          value: '24小时',
          label: '24小时'
        }],
        radio: '1',
         data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        },{
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        },{
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
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

  mounted() {
     //modify 修改  add 添加  see 查看
      this.$height('.publicintgentMitor');
      switch(this.$route.query.parame){
        case "add":
             this.status="确定";
             this.show=true;
             this.Monitor=true;
             this.isdisabledFn=false;
           break;
        case "modify":
             this.status="确定";
             this.show=true;
             this.isdisabledFn=false;
           break;
        case "see":
             this.status="确定";
             this.isdisabledFns=true;
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
    },Monitors(){
        // if(this.value4 )
        console.log(this.value4)
    },deleteRow(index, tableData4){
      console.log(index)
    },addrulrList(){
        $(".ruleList ul").append(this.temp)
        var temp2 = this.temp1;
        
        $(".ruleList ul li .prentlist").on("click","i",function(){
            $(this).parent(".prentlist").parent("li").remove();
        });
        $(".ruleList ul li").off("click").on("click",".SaveModification" ,function(){
           if($(this).html() == "保存"){
              $(this).parent("li").find("i").hide()
              $(this).parent("li").find("select").attr("disabled",true)
              $(this).parent("li").find("input").attr("disabled",true)
              $(this).html("编辑")
           }else{
              $(this).parent("li").find("select").attr("disabled",false)
              $(this).parent("li").find("input").attr("disabled",false)
              $(this).parent("li").find("i").show()
              $(this).html("保存")
           }
        });
        $(".ruleList ul li").off("change").on("change",".seclectclick" ,function(e){
          switch($(this).val()){
            case "增加预算":
                $(this).parent(".rulelistkmain").find(".radio1").show();
                $(this).parent(".rulelistkmain").find(".inputs").show();
                break;
            case "减少预算":
                $(this).parent(".rulelistkmain").find(".radio1").show();
                $(this).parent(".rulelistkmain").find(".inputs").show();
                break;
            case "关闭广告":
                 $(this).parent(".rulelistkmain").find(".radio1").hide();
                 $(this).parent(".rulelistkmain").find(".inputs").hide()
                break;
            case "并且":
                $(this).parent(".rulelistkmain").parent(".prentlist").append(temp2)
                break;
            default:
            return false;
          }
        });
      return false;
    },Close(e){
      alert("1111")
     
    }
  }
}


</script>