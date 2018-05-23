<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@import url("../../base/commonJS/scroll.css");
.home_index {
  min-width: 1200px;
  .home_banner {
    width: 100%;
    height: 572px;
    background-image: url(../../images/home/home_banner.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-top: -60px;
    position: relative;
    box-sizing: border-box; 
    z-index: -1;
    h1,
    h2 {
      font-size: 34px;
      width: 400px; 
      text-align: center;
      color: #fff;
    }
    h1{
      position: absolute;
      top: 176px;
      left: 50%;
      transform: translateX(-50%);
    }
    h2{
      position: absolute;
      top: 230px;
      left: 50%;
      transform: translateX(-50%);
    } 
  }
  /*搜索*/
  .home_search {
    width: 630px;
    position: relative;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 310px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
  .home_search_left {
    width: 560px;
    height: 50px;
    border-radius: 6px;
    background: #fff;
    display: flex;
    align-items: center;
    input {
      height: 50px;
      line-height: 50px;
      width: 480px;
      box-sizing: border-box;
      padding-left: 14px;
      border: none;
      outline: none;
      font-size: 16px;
    }
  }
  .home_search_right {
    width: 52px;
    height: 50px;
    background: @color;
    border-radius: 6px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    color: #fff;
    i {
      font-size: 24px;
      font-weight: 600;
    }
  }
  .home_search_left_btn {
    width: 70px;
    height: 38px;
    display: flex;
    align-items: center;
    border-right: 1px solid @border;
    img {
      width: 24px;
      height: 16px;
      margin: 0 10px 0 14px;
    }
    i {
      display: block;
      border: 6px solid transparent;
      cursor: pointer;
      border-top: 6px solid #ccc;
      margin-top: 4px;
    }
  }
  /*国家列表*/
  .home_country {
    position: absolute;
    top: 50px;
    left: 0;
    width: 140px;
    // height: 140px;
    overflow-y: auto;
    background: #fff;
    border-radius: 4px;
    z-index: 20;
    height: 0px;
    ul {
      height: 140px;
      width: 120px; 
    }
    li {
      height: 40px;
      display: flex;
      align-items: center;
      &:hover {
        background: @bgk;
        cursor: pointer;
      }
      img {
        width: 24px;
        height: 16px;
        margin: 0 10px 0 14px;
      }
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  /*关键词列表*/
  .home_keyword { 
    width: 490px;
    position: absolute;
    //height: 200px;
    z-index: 30;
    background: #fff;
    top: 50px;
    left: 70px;
    border-radius: 6px;
    overflow-y: auto;
    height: 0;  
    ul {
      width: 430px;
      height: 200px;
      margin-left: 14px; 
    }
    li {
      cursor: pointer;
      height: 30px;
      line-height: 30px;
      border-radius: 2px;
      &:hover {
        background: @bgk ;
      }
    }
  }
  .home_keyword_box{
    height: 95px;
    position: absolute;
    top: 476px;
    left: 0;
    right: 0;
    background: rgba(30, 40, 50, 0.5);  
    display: flex;
    align-items: center;
    justify-content: center;
    p{
      margin-right: 272px;
      display: flex;
      flex-direction: column;
      align-items: space-around; 
      &:nth-child(2){
        margin-right: 0; 
      }
    }
    span{
      font-size: 20px;
      color: #fff;
      text-align: center;
      display: block;
      &:nth-child(1){
        margin-bottom: 4px;
        font-size: 24px;
      }

    }
  }
  .home_num{
    width: 100%;
    height: 605px;
    background-image: url(../../images/home/home_banner2.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    h3{
      color: #212529;
      font-size: 28px;
      text-align: center;
      height: 175px;
      line-height: 175px;
    }
    section{
      width: 940px;
      height: 202px;
      display: flex;
      margin: 0 auto;
    }
  }
  .home_num_right{
    display: flex;
    &:nth-child(1){
      margin-right: 84px;
    }  
    &:hover{
      img{
        transform: scale(1.1);
      }
    }
    transition: all 0.5;
    img{
      width: 90px;
      height: 80px;
      margin-right: 41px;
      margin-left: 15px; 
    }
    i{
      display: block;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: @border;
      margin-right: 26px;
    }
    div{
      width: 276px;
      h4{
        font-size: 18px;
        margin-bottom: 20px;
      }
      span{
        line-height: 24px;
      }
    }
    .home_num_i1{
      background: url(../../images/home/home_num_1_1.png) no-repeat center center;
    }
    .home_num_i2{
      background: url(../../images/home/home_num_2_1.png) no-repeat center center;
    }
    .home_num_i3{
      background: url(../../images/home/home_num_3_1.png) no-repeat center center;
    }
    .home_num_i4{
      background: url(../../images/home/home_num_4_1.png) no-repeat center center;
    }
  }
  
    .home_num_right_1:hover{
      h4{
        color: @color;
      }
      i{
         background: url(../../images/home/home_num_1_2.png) no-repeat center center !important;
      } 
    }
    .home_num_right_2:hover{
      h4{
        color: @color;
      }
      i{
         background: url(../../images/home/home_num_2_2.png) no-repeat center center !important;
      }
    }
    .home_num_right_3:hover{
      h4{
        color: @color;
      }
      i{
         background: url(../../images/home/home_num_3_2.png) no-repeat center center !important;
      }
    }
    .home_num_right_4:hover{
      h4{
        color: @color;
      }
      i{
         background: url(../../images/home/home_num_4_2.png) no-repeat center center !important;
      }
    }
    .home_user{
      background: #fff !important;
    }
    /*用户注册*/
    .home_sign{
      width: 100%;
      height: 186px;
      background-image: url(../../images/home/home_sign.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      box-sizing: border-box;
      padding-top: 46px;
      h5{
        text-align: center;
        font-size: 30px;
        color: #212529;
      }
      div{
        margin: 18px auto 0;
        width: 240px;
        height: 46px;
        border-radius: 4px;
        background: @color; 
        text-align: center;
        line-height: 46px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        &:hover{
          background: @btnhover;
        }
      }
    } 
    /*固定背景图*/
    .home_center{
      width: 100%;
      height: 620px;
      background-image: url(../../images/home/home_center.png);
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;
      h2{
        margin: 70px auto;
        text-align: center;
        color: #fff;
        font-size: 28px;
      }
    }
    .home_center_list{
      width: 940px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      section{
        width: 224px;
        height: 300px; 
        box-sizing: border-box;
        display: flex;
        flex-direction: column; 
        align-items: center;
        i{
          display: block;
          width: 125px;
          height: 125px;
          border-radius: 50%; 
          background-repeat: no-repeat;  
          background-size: 100% 100%;
        }
        p{
          margin: 30px 0 36px;
          font-size: 18px;
          color: #fff;
        }
        span{
          color: #fff;
          line-height: 24px;
          display: block;
          width: 100%;
        }
      }
    }
    .home_center_img1{
      background-image: url(../../images/home/home_center_1_1.png);
      &:hover{
        background-image: url(../../images/home/home_center_1_2.png);
      }
    }
    .home_center_img2{
      background-image: url(../../images/home/home_center_2_1.png);
      &:hover{
        background-image: url(../../images/home/home_center_2_2.png);
      }
    }
    .home_center_img3{
      background-image: url(../../images/home/home_center_3_1.png);
      &:hover{
        background-image: url(../../images/home/home_center_3_2.png);
      }
    }
}
</style>


<template>
   <div class="home_index">
     <v-search-top :background_color='background_color' :searchShow='searchShow'></v-search-top>

     <!-- banner -->
     <div class="home_banner">
       <h1>ASMater</h1>
       <h2>专业的数据服务平台</h2> 
       <vue-particles color="#dedede" :particleOpacity="0.3" :particlesNumber="120" shapeType="circle" :particleSize="4" linesColor="#dedede" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="100" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
		   </vue-particles>
     </div>
     <!-- 搜索 -->
      <div class="home_search">
        <div class="home_search_left">
          <div class="home_search_left_btn" @mouseleave="countryfouse">
            <img :src='countryNow.nationImgUrl' alt="">
            <i @click="countryClick"></i>
          </div>
          <input type="text" placeholder="请输入关键词" v-model="keyWord">
          <div class="home_country" @mouseover="countryover" @mouseleave="countryliover">
            <ul >  
              <li @click="countryliClick(index)" v-for="(ele,index) in countryList" :key="index">
                <img :src="ele.nationImgUrl" alt="" :title="ele.nationCHSName">
                <span>{{ele.nationCHSName}}</span>
              </li>
            </ul>
          </div>
          <div class="home_keyword">
            <ul> 
              <li @click="keyWordListClick(index)" v-for="(ele,index) in list" :key="index">{{ele}}</li> 
            </ul>
          </div>
        </div>
        <div class="home_search_right" @click="keyWordClick">
          <i class="iconfont icon-icon-plus-search"></i>
        </div>
      </div>
      <!-- 关键词个数 -->
      <div class="home_keyword_box">  
        <p>
          <span>324，234，234</span>
          <span>应用收录</span>
        </p>
        <p>
          <span>324，234，234</span>
          <span>关键词</span>
        </p>
      </div>
      <!-- 全方位数据查询 -->
      <div class="home_num">
        <h3>全方位数据查询</h3>
        <section>
          <div class="home_num_right home_num_right_1">
            <i class="home_num_i1"></i>
            <div>
              <h4>竞价广告热词榜</h4>
              <span>全面的竞价热词榜单查询，可随时了解不同国家竞价热词情况，便于针对性的调整不同国家的投放策略。</span>
            </div>
          </div>
          <div class="home_num_right home_num_right_2">
            <i class="home_num_i2"></i>
            <div>
              <h4>关键词投放信息</h4>
              <span>全方位查询关键词搜索指数，历史竞价APP数量及各竞价APP的流量占比，助您了解关键词竞价情况，调整投放策略。</span>
            </div>
          </div>
        </section>
        <section>
          <div class="home_num_right home_num_right_3">
            <i class="home_num_i3"></i>
            <div>
              <h4>竞品投放情况查询</h4>
              <span>竞品投放信息查询一目了然，可随时了解竞品投放情况，方便您调整不同阶段的投放策略。</span>
            </div>
          </div>
          <div class="home_num_right home_num_right_4">
            <i class="home_num_i4"></i>
            <div>
              <h4>关键词推荐服务</h4>
              <span>关键词所有关联词实时展示，可根据搜索指数，历史竞价APP情况添加至新建词组，便于智投系统投放广告需要。</span>
            </div>
          </div>
        </section>
      </div>
      <!-- 固定背景图 -->
      <div class="home_center">
        <h2>省心的投放服务</h2>
        <div class="home_center_list">
          <section>
            <i class="home_center_img1"></i>
            <p>方案量身定制</p>
            <span>根据巨掌针对搜索广告的真实投放经验及优化技巧，强大优化团队为您量身定制产品搜索竞价推广方案。一分价格十分惊喜！</span>
          </section>
          <section>
            <i class="home_center_img2"></i>
            <p>省心的投放设置</p>
            <span>只要提供App信息，即可尊享终年无休的优化团队专职服务，让一切突如其来都变得高枕无忧！</span>
          </section>
          <section>
            <i class="home_center_img3"></i>
            <p>数据反馈轻松懂</p>
            <span>我们不会给您生涩难懂的数据和诘屈聱牙的术语，推广数据分析报告将主动发送到您的邮箱，效果看得见，问题理得清！</span>
          </section>
        </div>
      </div>
      <!-- 客户服务优势 -->
      <div class="home_num home_user">
        <h3>客户服务优势</h3>
        <section>
          <div class="home_num_right home_num_right_1"> 
            <img src="../../images/home/home_user_1.jpg" alt="">
            <div>
              <h4>智能化投放与监测系统</h4>
              <span>依托苹果后台官方精准数据，基于深厚ASO优化经验让人工智能与经验直觉共同护驾投放与监测</span>
            </div>
          </div>
          <div class="home_num_right home_num_right_2"> 
            <img src="../../images/home/home_user_2.jpg" alt="">
            <div>
              <h4>丰富的ASM投放经验</h4>
              <span>国内最早搜索投放推广团队之一，已为国内外众多客户提供ASM优化服务</span>
            </div>
          </div>
        </section>
        <section>
          <div class="home_num_right home_num_right_3"> 
            <img src="../../images/home/home_user_3.jpg" alt="">
            <div>
              <h4>专业团队筛词选词</h4>
              <span>专注研究App Store，近四年国内外ASO优化经验，让更多词，成为你的词</span>
            </div>
          </div>
          <div class="home_num_right home_num_right_4"> 
            <img src="../../images/home/home_user_4.jpg" alt="">
            <div>
              <h4>实时透明进度反馈</h4>
              <span>投放数据与进度反馈实时跟进，定（方案指定）、投（及时投放）、优（优化投放）、管（数据管理）一站式服务。</span>
            </div>
          </div>
        </section>
      </div>
      <!-- 用户注册 -->
      <div class="home_sign">
        <h5>成为巨掌注册用户可获得更多权限</h5>
        <div>免费注册</div>
      </div> 
   </div>
 </template>
 
 <script>
 import { mapState } from 'vuex'
export default {
  data() {
    return {
      searchShow: false, //隐藏导航搜索
      background_color: "transparent", //导航背景颜色
      conuntryShow: false,
      countryNow: {},
      keyWord: '',
      list: []
    };
  },

  components: {},

  computed: {
    ...mapState({
				countryList: state => state.Home.countryList,
			})
  },

  created() {
    this.$store.dispatch('GET_COUNTRYLIST')
      .then(() => {
            this.countryNow = this.$store.state.Home.countryList[0]
          })
  },

  updated() {},

  mounted() {},

  destroyed() {},

  methods: {
    countryClick() {
      this.domHeight('home_country' , 200) 
    },
    countryfouse() {
      setTimeout(() => {
        if (!this.conuntryShow) {
          this.domHeight('home_country' , 0) 
        }
      }, 300);
    },
    countryover() {
      this.conuntryShow = true;
    },
    countryliover() {
      this.conuntryShow = false;
      this.domHeight('home_country' , 0) 
    },
    countryliClick(index) {
      this.countryNow = this.$store.state.Home.countryList[index]
      this.domHeight('home_country' , 0) 
    }, 
    keyWordClick() {
      if(this.keyWord == '') {
        this.$message({
						message: '搜索关键词不能为空！！！',
						type: 'warning'
          });
          return false
      } 
      this.Ajax()
    },
    keyWordListClick(index) {
      this.domHeight('home_keyword' , 0) 
      this.$router.push({path: '/rankingDetails-List' , query : { key : this.list[index] , country: this.countryNow.nationId} })					
    },
    domHeight(dom, num) {
				$("." + dom).animate({
						height: num + "px"
					},
					300
				);
    },
    Ajax() {//目前接口不正确
				let url = '/api/v1/IntellSearchApi/Index/GetKeywords?nationId=' + this.countryNow.nationId + '&count=10' + '&searchContent=' + this.keyWord
				this.$https.get(url)
					.then((res) => {
						this.list = res.data.data.list
						if(res.data.resultCode == 1000) {
							$(".home_keyword").animate({
									height: "200px"
								},
								200
							);
						} 
					})
			}  
  }
};
</script>