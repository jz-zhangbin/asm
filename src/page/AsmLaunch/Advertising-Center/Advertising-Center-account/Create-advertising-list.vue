<style lang='less' scoped>
@import url('./Create-advertising-list.less');
</style>
<template>
  <div class="createlist_index">
     <!-- 导航 -->
     <v-header></v-header>

     <!-- 面包屑 -->
     <div class="adver_nav">
       <v-nav :pageName='pageName' :routeList='routeList'></v-nav> 
     </div>

     <!-- 内容 -->
     <div class="createlist_contant">
       <h1>创建广告系列</h1>
       <div class="createlist_form">
         <p class="createlist_title">选择投放应用</p>

         <!-- 搜索 -->
         <div class="createlist_top_search">
           <section v-if="apptouDataShow">
             <img src="../../../../images/moni/appimg_03.png" alt="">
             <p>部落冲突&nbsp;-&nbsp;</p>
             <span>特别火的游戏aasddddddddddddsdddddddddddddasdas</span> 
             <i class="iconfont icon-cha close" @click="appDataclose"></i>
           </section>
           <input class="top_search_input" type="text" placeholder="请输入应用名称/APP ID/应用链接搜索" v-if="!apptouDataShow">
           <span class="top_search_btn" @click="searchBtn" v-if="!apptouDataShow">
             <i class="iconfont icon-icon-plus-search"></i>
           </span>
           <span class="top_search_a" @click="apptouDataTouShow = true"> 选择已投放应用 </span>
           <transition name="el-zoom-in-top">
            <ul class="top_search_ul" v-show="appListShow"  >   
              <li @click="appListClick" class="top_search_li" v-for="(ele,index) in appList" :key="index">
                <img src="../../../../images/moni/appimg_03.png" alt="">
                <p>部落冲突dsffsddddddddddfsdfsdfsdfsdfds游戏</p>
                <span>books</span>
              </li>
            </ul>
           </transition>  
           <!-- 已投放app列表 -->
           <div class="yi_tou_app" v-if="apptouDataTouShow">
             <div class="yitou_app_contant">
               <h2>已投放APP列表</h2>
               <ul>
                <li v-for="(ele,index) in appListTou" :key="index" @click="appListTouClick">
                  <img src="../../../../images/moni/appimg_03.png" alt="">
                  <p>部落冲突dsffsddddddddddfsdfsdfsdfsdfds游戏</p>
                  <span>选择</span>
                </li>
               </ul>
               <div class="yitou_btn"> 
                 <el-button size="medium" @click="apptouDataTouShow= false">取消</el-button>
               </div>
             </div> 
           </div>
         </div>
         
         <!-- 选择投放国家 -->
         <p class="createlist_title">选择投放地区</p>
         <div class="createlist_contry">
           <el-checkbox-group v-model="checkList" class="span_box" v-if="apptouDataShow">
             <span v-for="(ele,index) in contryList" :key="index" :class="{ccc: ele.checked}" >
               <el-checkbox :label="ele.name" @change='ele.checked = !ele.checked'></el-checkbox>
             </span> 
            </el-checkbox-group>
           <span class="red">请选投放应用</span>
         </div>
 
          <!-- 预算设置 -->
         <p class="createlist_title">预算设置<span>(设置后将会创建对应匹配模式的广告系列/广告组)</span></p>
         <ul class="createlist_yusuan">
           <li :class="{yusan_li_true: Intelligence}" @click="Intelligence = true">
             <h3>智能匹配</h3>
             <div>
               <p><i>*</i>总预算</p>
               <input type="text" placeholder="请输入数字">
             </div>
              <div>
               <p><i>*</i>日预算</p>
               <input type="text" placeholder="请输入数字">
             </div>
              <div>
               <p><i>*</i>默认CPC</p>
               <input type="text" placeholder="请输入数字">
             </div>
              <div>
               <p>CPA目标</p>
               <input type="text" placeholder="请输入数字">
             </div>
             <div class="yusuan_bgm">
               <i @click.stop="Intelligence = !Intelligence"></i>
             </div>
           </li>
           <li :class="{yusan_li_true: widely}" @click="widely = true">
             <h3>广泛匹配</h3>
             <div>
               <p><i>*</i>总预算</p>
               <input type="text" placeholder="请输入数字">
             </div>
              <div>
               <p><i>*</i>日预算</p>
               <input type="text" placeholder="请输入数字">
             </div>
              <div>
               <p><i>*</i>默认CPC</p>
               <input type="text" placeholder="请输入数字">
             </div>
              <div>
               <p>CPA目标</p>
               <input type="text" placeholder="请输入数字">
             </div>
              <div class="yusuan_bgm">
                <i @click.stop="widely = !widely"></i>
              </div>
           </li>
           <li :class="{yusan_li_true: accurate}" @click.stop="accurate = true">
             <h3>精准匹配</h3>
             <div>
               <p><i>*</i>总预算</p>
               <input type="text" placeholder="请输入数字">
             </div>
              <div>
               <p><i>*</i>日预算</p>
               <input type="text" placeholder="请输入数字">
             </div>
              <div>
               <p><i>*</i>默认CPC</p>
               <input type="text" placeholder="请输入数字">
             </div>
              <div>
               <p>CPA目标</p>
               <input type="text" placeholder="请输入数字">
             </div>
              <div class="yusuan_bgm">
                <i  @click.stop="accurate = !accurate"></i>
              </div>
           </li>
         </ul>

         <!-- 广告系列命名设置 -->
         <p class="createlist_title">命名设置</p>
         <div class="create_tuo_box1">
           <p class="create_tb_title">
             广告系列命名<span>(可长按拖动标签至下方设置规则)</span>
           </p>
            <div class="create_tb_biao">
             <p>标签</p>
             <div class="create_tb_biao_div">
               <section v-for="(ele,index) in AdvertisementListArr" :key="index">
                  <span>{{ele}}</span>
                  <span class="create_tbb_ja create_tbb_ja2"  @mousedown="emdown($event,index,'top')">{{ele}}</span> 
                </section>
                <div @click="zidingyiClick('top')"><i class="iconfont icon-plus-add" ></i>自定义</div>
             </div>
           </div>
           <!-- 插入的盒子 -->
           <div class="create_tb_cha">
             <p v-if="!newAdvertisementListArrSet">未设置~</p>
             <aside v-if="newAdvertisementListArrSet">设置</aside>
             <div class="create_tb_cha_div">
               <section v-for="(ele,index) in newAdvertisementListArr" :key="index">
                <span>{{ele}}</span>
                <img v-if="AdvertisementListArrShow" src="../../../../images/components/u132.png" alt="" @click="removeClick(index , 'top')">
              </section>  
              <section v-if="AdvertisementListArrInputShow">
                <input type="text" placeholder="自定义输入" @blur="inputFocus('top')" v-model="newAdvertisementListArrValue">
                  <img v-if="AdvertisementListArrShow" src="../../../../images/components/u132.png" alt="" @click="removerInput('top')">
              </section>
             </div>
             <div class="create_tbc_btn" v-if="newAdvertisementListArrSet">
               <el-button type="primary" v-if="AdvertisementListArrShow" @click=" AdvertisementListArrShow = !AdvertisementListArrShow">保存</el-button>
               <el-button type="primary" v-if="!AdvertisementListArrShow"  @click=" AdvertisementListArrShow = !AdvertisementListArrShow">编辑</el-button>
             </div>
           </div>
         </div>

          <!-- 广告组命名设置 -->
         <div class="create_tuo_box1">
           <p class="create_tb_title">
             广告组命名<span>(可长按拖动标签至下方设置规则)</span>
           </p>
            <div class="create_tb_biao">
             <p>标签</p>
             <div class="create_tb_biao_div">
               <section v-for="(ele,index) in AdvertisementZuArr" :key="index">
                  <span>{{ele}}</span>
                  <span class="create_tbb_ja create_tbb_ja3" @mousedown="emdown($event,index,'bom')">{{ele}}</span> 
                </section>
                <div @click="zidingyiClick('bom')"><i class="iconfont icon-plus-add"  ></i>自定义</div>
             </div>
           </div>
           <!-- 插入的盒子 -->
           <div class="create_tb_cha">
             <p v-if="!newAdvertisementZuArrSet">未设置~</p>
             <aside  v-if="newAdvertisementZuArrSet">设置</aside>
             <div class="create_tb_cha_div">
               <section v-for="(ele,index) in newAdvertisementZuArr" :key="index">
               <span>{{ele}}</span>
               <img v-if="AdvertisementZuArrShow" src="../../../../images/components/u132.png" alt="" @click="removeClick(index , 'bom')">
              </section>  
              <section v-if="AdvertisementZuArrInputShow">
                <input type="text" placeholder="自定义输入" @blur="inputFocus('bom')" v-model="newAdvertisementZuArrValue">
                  <img  v-if="AdvertisementZuArrShow" src="../../../../images/components/u132.png" alt="" @click="removerInput('bom')">
              </section>
             </div>
             <div class="create_tbc_btn" v-if="newAdvertisementZuArrSet">
               <el-button type="primary" v-if="AdvertisementZuArrShow" @click="AdvertisementZuArrShow = !AdvertisementZuArrShow">保存</el-button>
               <el-button type="primary" v-if="!AdvertisementZuArrShow" @click="AdvertisementZuArrShow = !AdvertisementZuArrShow">编辑</el-button>
             </div>
           </div>

           
         </div> 

         <!-- 受众设置 -->
         <p class="createlist_title">受众设置</p>
         <div class="createlist_audience">
           <div class="createlist_aud_radio">
             <el-radio v-model="radio" label="1">选择受众模板</el-radio>
             <el-radio v-model="radio" label="2">手动设置</el-radio>
           </div>
           <div class="createlist_aud_box" v-if="radio == '1' && !moclle">
             <div class="createlist_audb_search">
               <input type="text" placeholder="请输入模板名称">
               <span>
                 <i class="iconfont icon-icon-plus-search"></i>
               </span>
             </div>
             <div class="createlist_audb_list">
               <h2>模板列表</h2>
               <p v-if="audienceList.length == 0">模板列表为空~</p>
               <ul v-if="audienceList.length != 0">
                 <li v-for="(ele,index) in audienceList" :key="index">
                   <div>{{index+1}}、&nbsp; {{ele.name}}</div>
                   <div>
                     <i class="iconfont icon-eye" @click="audienceLookClick"></i>
                     <i class="iconfont icon-bianji" @click='audiencesetClick'></i>
                     <span @click="choiceMo">选择</span>
                   </div>
                 </li> 
               </ul>
             </div>
           </div>
           <v-audience v-if="radio == '2' && !moclle"></v-audience>
           <!-- 生产模板 -->
           <div class="createlist_mo_ch" v-if="moclle">
             已设置模板： adjuz-games
             <i class="iconfont icon-eye eye" @click="eyeClick"></i>
             <i class="iconfont icon-icon-test1 closeiconft" @click="moclle = false"> </i>
           </div>
         </div>

         <!-- 关键词设置 -->
         <p class="createlist_title">关键词设置</p>
         <div class="createlist_keyword" v-if="!keyWordShow">
           <section class="section_one">
             <span style="width: 30%">词组名称</span>
             <span style="width: 20%">关键词数</span>
             <span style="width: 30%">创建时间</span>
             <span style="width: 20%">操作</span>
           </section>
           <div class="createlist_keyword_box">
             <section v-for="(ele,index) in keyWordList" :key="index">
               <span style="width: 30%">{{ele.name}}</span>
               <span style="width: 20%">{{ele.num}}</span>
               <span style="width: 30%">{{ele.tate}}</span>
               <span style="width: 20%" class="key_wored" @click="keyWordClick">选择</span>
              </section>
           </div>
         </div>
         <!-- 生产关键词 -->
         <div class="createlist_mo_ch" v-if="keyWordShow">
          已设置关键词组: adjuz-games
          <i class="iconfont icon-icon-test1 closeiconft" @click="keyWordShow = false"> </i>
         </div>

         <!-- 投放时间设置 -->
         <p class="createlist_title">投放时间设置</p>
         <el-date-picker
          v-model="value7"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions2">
         </el-date-picker>

        <!-- 创建按钮 -->
        <div class="create_list_btn">
          <el-button @click="$router.go(-1)">取消</el-button>
          <el-button type="primary" @click="chuangClick">创建</el-button>
        </div>
        </div>
       </div> 


       <!-- 查看模板 -->
       <v-audience-look v-if="audiencelookShow"></v-audience-look>
       <!-- 编辑模板 -->
       <div class="aud_set_mo" v-if="setmoShow">
         <div class="aud_set_mo_box">
            <v-audience :type='setmoType'></v-audience>
         </div> 
       </div>
       <!-- 提交表单模板 -->
       <v-audience-form v-if="formDataShow" :nameType='nameType'></v-audience-form>
     </div> 
</template>

<script>
import NavList from '@components/AsmLaunch/Nav-List'
import Audience from '@components/AsmLaunch/Audience'
import AudienceLook from "@components/AsmLaunch/Audience-Look"
import AudienceForm from "@components/AsmLaunch/Audience-Form"
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
        ],
        appListShow:false,
        apptouDataShow: false,//选中的app
        apptouDataTouShow: false,//投放app
        appList: [{},{},{},{},{},{},{},{},{}],
        appListTou: [{},{},{},{},{},{},{},{},{}],
        checkList: [],
        contryList: [{name: '美国',checked:false},{name: '中国',checked:false}],
        Intelligence: true,//智能
        widely: false,//广泛
        accurate: false, //精准  
        AdvertisementListArr : ['国家缩写','APP名称','匹配模式','关键词包名'],
        AdvertisementZuArr: ['国家缩写','APP名称','匹配模式','关键词包名','性别','年龄','设备','受众类型'],
        newAdvertisementListArr: [],//提交的数据
        newAdvertisementZuArr: [],
        newAdvertisementListArrSet: false,//是否显示
        newAdvertisementZuArrSet: false,
        AdvertisementListArrShow: true,//是否可以编辑
        AdvertisementZuArrShow: true,
        AdvertisementListArrInputShow : false,//自定义显示
        AdvertisementZuArrInputShow: false,
        newAdvertisementListArrValue: '',//自定义内容
        newAdvertisementZuArrValue:'', 
        radio: '1',
        audienceList: [
          {
            name: '第一个受众模板'
          },
           {
            name: '第一个受众模板'
          },
           {
            name: '第一个受众模板'
          }
        ],
        audiencelookShow: false,//查看模板
        setmoShow: false,//编辑模板
        setmoType: '编辑',
        moclle: false, //模板选择成功
        keyWordList: [
          {
            name: 'game',
            num: 12345,
            tate: '2018-2019'
          },
          {
            name: 'game',
            num: 12345,
            tate: '2018-2019'
          },
          {
            name: 'game',
            num: 12345,
            tate: '2018-2019'
          },
          {
            name: 'game',
            num: 12345,
            tate: '2018-2019'
          }
        ],
        keyWordShow: false,//生产关键词组
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value7: '',
        formDataShow: false,//最后表单的创建
        nameType: '广告系列'
    };
  },

  components: {
    'v-nav': NavList,
    'v-audience': Audience,
    'v-audience-look' : AudienceLook,
    'v-audience-form' : AudienceForm
  },

  computed: {},

  created() { 
    let queryData = this.$route.query
    this.routeList.push(...[
      {
        name: '账户',
        path: '/advertising-center/account' ,
        query: queryData
      },
      {
        name: '创建广告系列',
        path: '/advertising-center/advertising-list' ,
        query: queryData
      }
    ])
  },

  updated() {},

  mounted() {},

  destroyed() {},

  methods: {
    searchBtn() {
      //点击搜索app
      this.appListShow = true
    },
    appListClick() {
      //选中app
      this.apptouDataShow = true
      this.appListShow = false
    },
    appDataclose() {
      //关闭选中数据
      this.apptouDataShow = false
    },
    appListTouClick() {
      //选择已经投放APP
      this.apptouDataTouShow = false
      this.apptouDataShow = true
    },  
    emdown(ev, index , wei) { 
      let _this = this
      let dom
      if(wei == 'top') {
        dom = $(".create_tbb_ja2").eq(index);
        if(!_this.AdvertisementListArrShow) {
          return false
        }
      }else{
        if(!_this.AdvertisementZuArrShow) {
          return false
        }
        dom = $(".create_tbb_ja3").eq(index);
      }
      console.log(index)
      dom.css("opacity",1)
      var oevent = ev || event; 
      var distanceX = oevent.clientX;
      var distanceY = oevent.clientY;
      let lsheight
      let lswidth
      let lsscroll
      document.onmousemove = function(ev) {
        var oevent = ev || event; 
        lsheight = oevent.clientY - distanceY
        lswidth = oevent.clientX
        lsscroll = oevent.screenY
        dom.css('left',oevent.clientX - distanceX + "px");
        dom.css('top',oevent.clientY - distanceY + "px");  
      };
      document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
        
        dom.css({left:'2px',opacity: '0',top: '2px'});
        if(wei == 'top') {
          if(lsscroll >= 290 && lswidth > 270 && lswidth < 1025) {
            if(_this.newAdvertisementListArr.indexOf(_this.AdvertisementListArr[index]) == -1) {
              _this.newAdvertisementListArr.push(_this.AdvertisementListArr[index])
              if(_this.newAdvertisementListArr.length != 0) {
                _this.newAdvertisementListArrSet = true
              }
            } else{
              alert('您插入的有重复')
            }
          }
        }else{
          if(lsscroll >= 330 && lswidth > 270 && lswidth < 1025) {
            if(_this.newAdvertisementZuArr.indexOf(_this.AdvertisementZuArr[index]) == -1) {
              _this.newAdvertisementZuArr.push(_this.AdvertisementZuArr[index])
              if(_this.newAdvertisementZuArr.length != 0) {
                _this.newAdvertisementZuArrSet = true
              } 
            } else{
              alert('您插入的有重复')
            }
          }
        } 
      };
    },
    removeClick(index , wei) {
      if(wei == 'top') {
        this.newAdvertisementListArr.splice(index,1) 
        if(this.newAdvertisementListArr.length == 0 && this.AdvertisementListArrInputShow == false) {
                this.newAdvertisementListArrSet = false
          }
      } else{
        this.newAdvertisementZuArr.splice(index,1)
        if(this.newAdvertisementZuArr.length == 0 && this.AdvertisementZuArrInputShow == false) {
                this.newAdvertisementZuArrSet = false
          }
      }
    },
     zidingyiClick(wei) { 
       //自定义
      if(wei == 'top') {
        if(this.AdvertisementListArrShow) {
          this.AdvertisementListArrInputShow = true
          this.newAdvertisementListArrSet = true
        } 
      }else{
        if(this.AdvertisementZuArrShow) {
          this.AdvertisementZuArrInputShow = true
          this.newAdvertisementZuArrSet = true
        } 
      }
     }, 
    inputFocus(wei) {
      //自定义失焦点
      if(wei == 'top') {
        if(this.newAdvertisementListArrValue == '') {
          alert('自定义内容不能为空')
        }else{
          if(this.newAdvertisementListArr.indexOf(this.newAdvertisementListArrValue) == -1){
             this.newAdvertisementListArr.push(this.newAdvertisementListArrValue)
             this.AdvertisementListArrInputShow = false
             this.newAdvertisementListArrValue = ''
          } else{
            alert('您插入的有重复')
          }
        } 
      }else{
        if(this.newAdvertisementZuArrValue == '') {
          alert('自定义内容不能为空')
        }else{
          if(this.newAdvertisementZuArr.indexOf(this.newAdvertisementZuArrValue) == -1){
             this.newAdvertisementZuArr.push(this.newAdvertisementZuArrValue)
             this.AdvertisementZuArrInputShow = false
             this.newAdvertisementZuArrValue = ''
          } else{
            alert('您插入的有重复')
          }
        }
      } 
    },

    removerInput(wei) {
      if(wei == 'top') {
        this.AdvertisementListArrInputShow = false
        this.newAdvertisementListArrValue = ''
      }else{
        this.AdvertisementZuArrInputShow = false
        this.newAdvertisementZuArrValue = ''
      }
    },

    audienceLookClick() {
      //查看模板内容
      this.audiencelookShow = true
    },
    audiencesetClick() {
      //编辑模板
      this.setmoShow = true
    },
    eyeClick() {
      //选中后查看模板
      this.audiencelookShow = true
    },
    choiceMo() {
      //选择模板列表
      this.moclle = true
    },
    keyWordClick() {
      //选择关键词组
      this.keyWordShow = true
    },
    chuangClick() {
      //点击创建，打开提交表单
      this.formDataShow = true
    }
  }
}

</script>