<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.kl_index{
    min-height: 100%;
    min-width: 1200px;
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
  .advuer_content{
      background: #fff;
      min-width: 1200px;
      margin: 0 45px;
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
<template>
  <div class="kl_index"> 
     <v-header></v-header>

     <div class="adver_nav">
       <v-nav :pageName='pageName' :routeList='routeList'></v-nav>
       <div class="btn">
         <i class="iconfont icon-plus-add"></i>
         <span>新建词组</span> 
       </div>
     </div>

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

             <div class="advuer_settings">
                 <p @click="settingShow = true">操作<i class="iconfont icon-plus-add"></i></p>
                 <transition name="el-zoom-in-top">
                    <div class="header_out" @mouseout="settingShow = false" v-show="settingShow" @mousemove="settingShow = true">
                        <span>删除</span>
                    </div>	
                 </transition> 
             </div>
         </div>
     </div>
  </div>
</template>

<script>
import NavList from '@components/AsmLaunch/Nav-List'
import KeySearch from '@components/AsmLaunch/Key-Search'
export default {
  data () {
    return {
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
    };
  },

  components: {
      'v-nav': NavList,
      'v-search': KeySearch
  },

  computed: {},

  created() {},

  updated() {},

  mounted() {},

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
      }
  }
}

</script>