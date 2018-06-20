<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
@import url("../../../base/commonCSS/scroll.css");
.iconfont {
  cursor: pointer;
}

.kcl_index {
  min-width: 1200px;
  box-sizing: border-box;
  padding: 60px 0 20px;
  .kcl_body {
    width: 100%;
    .kcl_top {
      margin-top: 25px;
      margin-bottom: 60px;
      display: flex;
      height: 34px;
      box-sizing: border-box;
      padding: 0 45px;
    }
    .sl_center_p {
      line-height: 34px;
      margin-right: 11px;
    }
  }
  .kcl_duibi {
    min-width: 1200px;
    box-sizing: border-box;
    padding: 0 45px;
    .kcl_dui_cont {
      min-width: 1200px;
      max-width: 1600px;
      display: flex;
      margin: 0 auto;
      justify-content: space-between;
    }
    .kcl_duibi_left {
      width: 45%;
      height: 85px;
      display: flex;
      position: relative;
      div {
        width: 85px;
        height: 85px;
        border-radius: 6px;
        margin-right: 12px;
        overflow: hidden;
      }
      img {
        width: 100%;
        height: 100%;
      }
      section {
        width: 80%;
        box-sizing: border-box;
        padding-top: 8px;
        h1 {
          font-size: 21px;
          color: @color;
          margin-bottom: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        p {
          margin-bottom: 4px;
          span {
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      .icon-cha {
        position: absolute;
        top: 0;
        right: 0;
        width: 18px;
        height: 18px;
        display: block;
        text-align: center;
        line-height: 18px;
        font-size: 12px;
        background: @font_color;
        color: #fff;
        border-radius: 50%;
      }
    }
    .kcl_duibi_right {
      width: 570px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 85px;
      p {
        color: #000;
        font-weight: 520;
      }
      button {
        width: 51px;
        height: 51px;
        background: @color;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        text-align: center;
        line-height: 51px;
        color: #f7f7f7;
        outline: none;
        &:hover {
          background: @btnhover;
        }
        i {
          font-size: 26px;
        }
      }
      .kc_ct_search {
        width: 70%;
        height: 51px;
        box-sizing: border-box;
        border: 1px solid @border;
        border-radius: 6px;
        margin: 0 16px;
        position: relative;
        input {
          width: 100%;
          height: 49px;
          box-sizing: border-box;
          padding: 0 22px;
          line-height: 58px;
          display: block;
          border-radius: 6px;
          border: none;
          outline: none;
          &::-webkit-input-placeholder {
            color: #9a9a9a;
          }
        }
        .kc_over {
          width: 376px;
          height: 0px;
          position: absolute;
          top: 60px;
          left: 0;
          z-index: 100;
          overflow: hidden;
          box-shadow: 0 2px 2px @boxshado;
        }
        ul {
          width: 374px;
          height: 240px;
          border: 1px solid @border;
          border-radius: 6px;
          overflow-y: auto;
          li {
            width: 100%;
            height: 40px;
            background: #fff;
            line-height: 40px;
            display: flex;
            box-sizing: border-box;
            padding: 0 45px 0 15px;
            align-items: center;
            cursor: pointer;
            &:hover {
              background: #f7f7f7;
            }
            img {
              display: block;
              width: 23px;
              height: 22px;
              border-radius: 4px;
              margin-right: 12px;
            }
            span {
              width: 210px;
              font-weight: 540;
              color: #000;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            b {
              width: 67px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
    .kcl_vs {
      margin: 0 20px;
      text-align: center;
      line-height: 85px;
      font-size: 60px;
      color: #ffbc34;
    }
    .kcl_dui_star {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 25px 0;
      button {
        width: 150px;
        height: 50px;
        line-height: 50px;
        background: @color;
        text-align: center;
        outline: none;
        font-size: 16px;
        color: #fff;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        &:hover {
          background: @btnhover;
        }
      }
    }
  }
  .kcl_table_one {
    width: 100%;
    min-height: 300px;
    h2 {
      font-size: 16px;
      font-weight: 520;
      padding-left: 12px;
      border-left: 2px solid @color;
      margin: 25px 0;
    }
  }
  .kcl_table1 {
    width: 100%;
    border: 1px solid @border;
    box-shadow: 0 2px 2px @boxshado;
    tr {
      th,
      td {
        border-bottom: 1px solid @border;
        text-align: center;
        vertical-align: middle;
        height: 60px;
      }
      &:first-child {
        th {
          height: 42px;
          font-weight: 600;
          background: #f7f7f7;
        }
      }
      &.td_height {
        td {
          height: 150px;
        }
      }
    }
    .td_weight {
      font-weight: 600;
      color: #212529;
    }
    .td_color {
      color: @color;
    }
    .icon-more {
      font-size: 24px !important;
    }
    .td_animous {
      div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        section {
          width: 100px;
          height: 100px;
        }
        span {
          display: block;
          position: absolute;
          top: 50%;
          color: @color;
          left: 50%;
          transform: translateY(-50%) translateX(-50%);
          z-index: 1000;
        }
      }
    }
  }
  .kcl_table_three {
    width: 100%;
    margin-top: 60px;
    .kcl_table_btn {
      display: flex;
      height: 32px;
      justify-content: center;
      margin-bottom: 25px;
      span {
        display: block;
        margin-right: 45px;
        font-size: 18px;
        padding: 0 6px;
        cursor: pointer;
        &.rdl_section_is {
          border-bottom: 2px solid @color;
          color: @color;
        }
      }
    }
  }
}
</style>
<style lang="less">
.kcl_index {
  .el-select {
    width: 114px;
    height: 34px;
  }
  .el-input,
  .el-input--suffix,
  .el-input__inner {
    height: 34px;
  }
  .el-input__icon {
    line-height: 34px !important;
  }
}
</style>
<template>
	<div class="kcl_index">
		<v-search-top></v-search-top>
		<div class="kcl_body">
			<banner :bannerName='bannerName'></banner>
			<div class="kcl_top">
				<p class="sl_center_p">地区</p>
				<el-select v-model="countryNow" placeholder="请选择" @change="changeFun(countryNow)">
					<el-option v-for="item in countryList" :key="item.nationId" :label="item.nationCHSName" :value="item.nationId">
					</el-option>
				</el-select>
			</div>
			<!-- 对比 -->
			<div class="kcl_duibi">
				<div class="kcl_dui_cont">
					<!-- 从详情页跳转过来的 -->
					<div class="kcl_duibi_left" v-if="!leftSearch">
						<div>
              <img :src="dataLeft.appImgUrl" alt="" v-if="dataLeft.appImgUrl != null">
              <img src="../../../images/moni/comon_loading.png" alt="" v-if="dataLeft.appImgUrl == null && leftloadingCode == 1000">
              <img src="../../../images/moni/appimg_1123_03.png" alt="" v-if="dataLeft.appImgUrl == null && leftloadingCode == 404"> 
            </div> 
						<section>
							<h1 v-if="dataLeft.appImgUrl != null">{{dataLeft.appName}}</h1>
              <h1 v-if="dataLeft.appImgUrl == null && leftloadingCode == 1000">---</h1>
              <h1 v-if="dataLeft.appImgUrl == null && leftloadingCode == 404">该地区未上架</h1>
							<p>
								<span style="width: 21%;">开发商</span>
								<span style="width: 13%;">分类</span>
								<span style="width: 22%;">AppID</span>
								<span style="width: 16%;">价格</span>
								<span style="width: 12%;">总榜</span>
								<span style="width: 10%;">分类榜</span>
							</p>
							<p v-if="dataLeft.appImgUrl != null">
								<span style="width: 21%; color:#000">{{dataLeft.aristName}}</span>
								<span style="width: 13%; color:#2d76ed">{{dataLeft.appTypeName}}</span>
								<span style="width: 22%; color:#2d76ed">{{dataLeft.appStoreId}}</span>
								<span style="width: 16%; color:#000">{{dataLeft.appPrice | appPriceFilter}}</span>
								<span style="width: 12%; color:#000">{{dataLeft.totalRank == 0 ? '-' : dataLeft.totalRank}}</span>
								<span style="width: 10%; color:#000">{{dataLeft.classificationRank == 0 ? '-' : dataLeft.classificationRank}}</span>
							</p>
              <p v-if="dataLeft.appImgUrl == null && leftloadingCode == 404">
								<span style="width: 21%; color:#000">-</span>
								<span style="width: 13%; color:#2d76ed">-</span>
								<span style="width: 22%; color:#2d76ed">-</span>
								<span style="width: 16%; color:#000">-</span>
								<span style="width: 12%; color:#000">-</span>
								<span style="width: 10%; color:#000">-</span>
							</p>
						</section>
            <i class="iconfont icon-cha"  @click="close('left')"></i>
					</div>
          <!-- 搜索app -->
					<div class="kcl_duibi_right" v-if="leftSearch">
						<p>选择APP</p>
						<div class="kc_ct_search kc_ct_search2">
							<input type="text" placeholder="请输入应用名称/App ID/应用链接搜索" v-model="APPinforlefet" @focus="focusInput('.kc_ct_search2')" @blur="blurInput('.kc_ct_search2')">
							<div class="kc_over kc_over2">
								<ul>
									<li @click="overLiClick(index,'left')" v-for="(ele,index) in listLeft" :key="index">
										<img :src="ele.appImgUrl" alt="">
										<span>{{ele.appName}}</span>
										<b>{{ele.aristName}}</b>
									</li>
								</ul>
							</div>
						</div>
						<button @click="btnClick(APPinforlefet , 'left')" class="btnclass">
							<i class="iconfont icon-icon-plus-search"></i>
						</button>
					</div>
					<div class="kcl_vs">
						vs
					</div>
					<!-- 在对比页选中的 -->
					<div class="kcl_duibi_left" v-if="appDataShow">
						<div>
              <img :src="dataRight.appImgUrl" alt="" v-if="dataRight.appImgUrl != null">
              <img src="../../../images/moni/appimg_1123_03.png" alt="" v-if="dataRight.appImgUrl == null && rightloadingCode == 404"> 
              <img src="../../../images/moni/comon_loading.png" alt="" v-if="dataRight.appImgUrl == null && rightloadingCode == 1000">
            </div> 
						<section>
							<h1 v-if="dataRight.appImgUrl != null">{{dataRight.appName}}</h1>
              <h1 v-if="dataRight.appImgUrl == null && rightloadingCode == 1000 ">---</h1>
              <h1 v-if="dataRight.appImgUrl == null && rightloadingCode == 404">该地区未上架</h1>
							<p>
								<span style="width: 21%;">开发商</span>
								<span style="width: 13%;">分类</span>
								<span style="width: 22%;">AppID</span>
								<span style="width: 16%;">价格</span>
								<span style="width: 12%;">总榜</span>
								<span style="width: 10%;">分类榜</span>
							</p>
							<p v-if="dataRight.appImgUrl != null">
								<span style="width: 21%; color:#000">{{dataRight.aristName}}</span>
								<span style="width: 13%; color:#2d76ed">{{dataRight.appTypeName}}</span>
								<span style="width: 22%; color:#2d76ed">{{dataRight.appStoreId}}</span>
								<span style="width: 16%; color:#000">{{dataRight.appPrice | appPriceFilter}}</span>
								<span style="width: 12%; color:#000">{{dataRight.totalRank == 0 ? '-' : dataRight.totalRank}}</span>
								<span style="width: 10%; color:#000">{{dataRight.classificationRank == 0 ? '-' : dataRight.classificationRank}}</span>
							</p>
              <p v-if="dataRight.appImgUrl == null && rightloadingCode == 404">
								<span style="width: 21%; color:#000">-</span>
								<span style="width: 13%; color:#2d76ed">-</span>
								<span style="width: 22%; color:#2d76ed">-</span>
								<span style="width: 16%; color:#000">-</span>
								<span style="width: 12%; color:#000">-</span>
								<span style="width: 10%; color:#000">-</span>
							</p>
						</section>
						<i class="iconfont icon-cha" @click="close('right')"></i>
					</div>
					<!-- 搜索app -->
					<div class="kcl_duibi_right" v-if="!appDataShow">
						<p>选择APP</p>
						<div class="kc_ct_search kc_ct_search1">
							<input type="text" placeholder="请输入应用名称/App ID/应用链接搜索" v-model="APPinfor" @focus="focusInput('.kc_ct_search1')" @blur="blurInput('.kc_ct_search1')">
							<div class="kc_over kc_over1">
								<ul>
									<li @click="overLiClick(index,'right')" v-for="(ele,index) in list" :key="index">
										<img :src="ele.appImgUrl" alt="">
										<span>{{ele.appName}}</span>
										<b>{{ele.aristName}}</b>
									</li>
								</ul>
							</div>
						</div>
						<button @click="btnClick(APPinfor , 'right')" class="btnclass">
							<i class="iconfont icon-icon-plus-search"></i>
						</button>
					</div>
				</div>
				<div class="kcl_dui_star" v-if="appDataShowtrue">
					<button @click="starClick">开始对比</button>
				</div>
				<!-- 竞品对比结果-第一个表格 -->
				<div class="kcl_table_one" v-if="tableShow">
					<h2>竞品对比结果</h2>
					<table class="kcl_table1">
						<tr>
							<th style="width: 28%"></th>
							<th style="width: 19%">已选APP (左)</th>
							<th style="width: 15%"></th>
							<th style="width: 19%">竞品APP (右)</th>
							<th style="width: 19%">操作</th>
						</tr>
            <tr class="td_height"  v-if="ContrastData[idLeft]">
							<td class="td_weight">竞争度(竞价词重合度) </td>
							<td class="td_color"></td>
							<td class="td_animous">
								<div>
									<section class="yuan" id="myChart1"> </section>
									<span>{{percentage}}%</span>
								</div>
							</td>
							<td class="td_color"></td>
							<td></td>
						</tr>
						<tr  v-if="ContrastData[idLeft]">
							<td>ASM竞价词数 </td>
							<td class="td_color">{{ContrastData[idLeft].totalCompetitiveWordNum}}</td>
							<td></td>
							<td class="td_color">{{ContrastData[idRight].totalCompetitiveWordNum}}</td>
							<td><i class="iconfont icon-more" @click="listNav('alike')"></i></td>
						</tr>
						<tr  v-if="ContrastData[idLeft]">
							<td class="td_weight">相同竞价词数 </td>
							<td class="td_color"></td>
							<td class="td_color">{{ContrastData[idLeft].equalCompetitiveWordNum}}</td>
							<td class="td_color"></td>
							<td></td>
						</tr>
						<tr  v-if="ContrastData[idLeft]">
							<td>不同竞价词数 </td>
							<td class="td_color">{{ContrastData[idLeft].unEqualCompetitiveWordNum}}</td>
							<td></td>
							<td class="td_color">{{ContrastData[idRight].unEqualCompetitiveWordNum}}</td>
							<td></td>
						</tr> 
						<tr  v-if="ContrastData[idLeft]">
							<td>8000以上热度竞价词数 </td>
							<td class="td_color">{{ContrastData[idLeft].hotCompetitiveWords}}</td>
							<td></td>
							<td class="td_color">{{ContrastData[idRight].hotCompetitiveWords}}</td>
							<td><i class="iconfont icon-more" @click="listNav('noalike' , 8000 , '')"></i></td>
						</tr>
						<tr  v-if="ContrastData[idLeft]">
							<td>6000-8000热度竞价词数 </td>
							<td class="td_color">{{ContrastData[idLeft].lowerHotCompetitiveWords}}</td>
							<td></td>
							<td class="td_color">{{ContrastData[idRight].lowerHotCompetitiveWords}}</td>
							<td><i class="iconfont icon-more" @click="listNav('noalike' , 8000 , 6000)"></i></td>
						</tr>
						<tr  v-if="ContrastData[idLeft]">
							<td>4605-6000热度竞价词数 </td>
							<td class="td_color">{{ContrastData[idLeft].middleHotCompetitiveWords}}</td>
							<td></td>
							<td class="td_color">{{ContrastData[idRight].middleHotCompetitiveWords}}</td>
							<td><i class="iconfont icon-more" @click="listNav('noalike' , 6000 , 4605)"></i></td>
						</tr>
						<tr  v-if="ContrastData[idLeft]">
							<td>低于4605热度竞价词数 </td>
							<td class="td_color">{{ContrastData[idLeft].lowCompetitiveWords }}</td>
							<td></td>
							<td class="td_color">{{ContrastData[idRight].lowCompetitiveWords}}</td>
							<td><i class="iconfont icon-more" @click="listNav('noalike' , '' , 4605)"></i></td>
						</tr>
						<tr v-if="loadingparent">
							<td colspan="7" style="height: 80px;">
								<img src="../../../images/components/loading.gif" alt="">
							</td>
						</tr>
					</table>
				</div>
				<!--三个table的切换  -->
				<div class="kcl_table_three" v-if="tableCommonsShow">
					<div class="kcl_table_btn">
						<span v-for="(ele,index) in components_list" :key="index" :class="{rdl_section_is: index == components_index}" @click="componentsClick(index)">{{ele.name}}</span>
					</div>
					<!-- table组件 -->
					<component :is="currentView" :userType='userType' :max='max' :min='min' :parentAjaxType='parentAjaxType'></component>
					<usersign v-if="!userType"></usersign>
				</div> 
			</div>
		</div>  
	</div>
</template>

<script>
import banner from "@components/AsmQuery/Banner";
import { mapState } from "vuex";
import list1 from "./list1.vue";
import list2 from "./list2.vue";
import list3 from "./list3.vue";
import usersign from "@components/AsmQuery/User-Sign";
import { datefn } from "@commonJS/dateList";
export default {
  data() {
    return {
      listLeft: [],
      list: [], //搜索列表
      countryNow: "",
      APPinfor: "", //搜索内容
      bannerName: "竞品对比",
      appDataShow: false,
      appDataShowtrue: false,
      tableShow: false,
      leftSearch: true,
      tableCommonsShow: false,
      components_list: [
        {
          name: "相同竞价词",
          com: list1
        },
        {
          name: "不同竞价词",
          com: list2
        },
        {
          name: "所有竞价词",
          com: list3
        }
      ],
      components_index: 0,
      currentView: list1,
      myChart: null,
      dataLeft: {}, //左面选中的app数据
      dataRight: {}, //右面进行对比的app数据
      ContrastData: {}, //对比数据
      percentage: 0, //相同的百分比
      idLeft: 0,
      idRight: 0,
      max: "",
      min: "",
      parentAjaxType: false, //父级的对比列表是否请求结束
      loadingparent: true,
      rightappStoreId: "", //存储右面app的索引
      leftappStoreId: "",
      loading: null,
      loadingopaction: {
        lock: true,
        text: "加载中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      },
      leftloadingCode: 1000,
      rightloadingCode: 1000,
      APPinforlefet: "" //左面input
    };
  },

  components: {
    banner,
    list1,
    list2,
    list3,
    usersign
  },

  computed: {
    ...mapState({
      countryList: state => state.Home.countryList,
      userType: state => state.Sign.userType
    })
  },

  filters: {
    percentage: function(value) {
      let num = (value * 100).toFixed(2);
      return num + "%";
    },
    appPriceFilter: function(value) {
      if (value == 0) {
        return "免费";
      } else if (!value) {
        return "";
      } else {
        let ls = (value * 1).toFixed(2);
        return ls;
      }
    }
  },

  created() {
    this.$store.dispatch("GET_COUNTRYLIST").then(() => {
      this.$store.state.Home.countryList.map((ele, index) => {
        if (ele.nationId == this.$route.query.key) {
          this.countryNow = this.$store.state.Home.countryList[index].nationId;
        }
      });
    });

    if (this.$route.query.key) {
      this.loading = this.$loading(this.loadingopaction);
      this.leftSearch = false;
      this.leftappStoreId = this.$route.query.id;
      this.AjaxInfor(
        {
          key: this.$route.query.key,
          id: this.$route.query.id
        },
        "left"
      );
    }
  },

  mounted() {
    this.$height(".kcl_index");
    //关闭搜索列表
    $(document).bind("click", function(e) {
      var target = $(e.target);
      if (target.closest(".btnclass").length == 0) {
        $(".kc_over1").css("height", "0");
        $(".kc_over2").css("height", "0");
      }
    });
  },

  methods: {
    focusInput(dom) {
      $(dom).css("border-color", "#2d76ed");
    },
    blurInput(dom) {
      $(dom).css("border-color", "#dee2e6");
    },

    changeFun(value) {
      this.loading = this.$loading(this.loadingopaction);

      //切换国家
      if (!this.leftSearch) {
        this.AjaxInfor(
          {
            key: this.countryNow,
            id: this.leftappStoreId
          },
          "left"
        );
      }
      if (this.appDataShow) {
        this.AjaxInfor(
          {
            id: this.rightappStoreId,
            key: this.countryNow
          },
          "right"
        );
      }
      //this.appDataShow = true;
      this.appDataShowtrue = false;
      this.tableShow = false;
      this.tableCommonsShow = false;
      this.parentAjaxType = false;
      this.components_index = 0;
      this.currentView = list1;
      this.ContrastData = {};
      this.dataLeft = {};
      this.dataRight = {};
      this.loadingparent = true;
    },

    btnClick(value, wei) {
      if (value == "") {
        this.$message({
          message: "搜索内容不能为空！！！",
          type: "warning"
        });
      } else {
        this.loading = this.$loading(this.loadingopaction);
        this.Ajax(value, wei);
      }
    },

    overLiClick(index, wei) {
      //选中app请求数据，进行比较
      if (wei == "left") {
        this.leftSearch = false;
        this.leftappStoreId = this.listLeft[index].appStoreId;
        this.AjaxInfor(
          {
            id: this.listLeft[index].appStoreId,
            key: this.countryNow
          },
          "left"
        );
      } else {
        this.appDataShow = true;
        this.rightappStoreId = this.list[index].appStoreId;
        this.AjaxInfor(
          {
            id: this.list[index].appStoreId,
            key: this.countryNow
          },
          "right"
        );
      }
      this.loading = this.$loading(this.loadingopaction);
    },

    close(wei) {
      if (wei == "left") {
        this.dataLeft = {};
        this.leftSearch = true;
      } else {
        this.dataRight = {};
        this.appDataShow = false;
      }
      //关闭选中的app
      this.tableShow = false;
      this.appDataShowtrue = false;
      this.parentAjaxType = false;
      this.tableCommonsShow = false;
      this.components_index = 0;
      this.currentView = list1;
      this.ContrastData = {};
      this.loadingparent = true;
    },

    starClick() {
      //点击开始对比
      if (this.dataLeft.appStoreId == this.dataRight.appStoreId) {
        this.$message({
          message: "对不起相同应用不能进行比较！！！",
          type: "warning"
        });
      } else if (
        this.dataLeft.appImgUrl == null ||
        this.dataRight.appImgUrl == null
      ) {
        this.$message({
          message: "未上架app不能进行比较！！！",
          type: "warning"
        });
      } else {
        this.tableShow = true;
        this.loadingparent = true;
        this.ContrastData = {};
        this.AjaxAppcontent(
          this.dataLeft.appStoreId,
          this.dataRight.appStoreId
        );
      }
    },
    //table切换
    componentsClick(index) {
      this.components_index = index;
      this.currentView = this.components_list[index].com;
    },

    listNav(name, num1, num2) {
      //切换关键词热度
      $(window).scrollTop($(".kcl_table_btn").offset().top);
      if (name == "alike") {
        this.components_index = 0;
        this.currentView = list1;
      } else {
        this.components_index = 2;
        this.currentView = list3;
      }
      this.max = num1;
      this.min = num2;
    },

    Ajax(value, wei) {
      //搜索app
      let url =
        "/api/v1/IntellSearchApi/Index/GetCompetitiveAppInfo?nationId=" +
        this.countryNow +
        "&count=10" +
        "&searchContent=" +
        value;

      this.$https.get(url).then(res => {
        this.loading.close();
        if (wei == "left") {
          this.listLeft = res.data.data.list;
          let ls = "";
          if (this.listLeft.length > 5) {
            ls = "242";
          } else {
            ls = this.listLeft.length * 40;
          }
          if (res.data.resultCode == 1000) {
            $(".kc_over2").css("height", ls + "px");
          }
          //如果搜索内容为空给一个提醒
          if (this.listLeft.length == 0) {
            this.$message({
              message: "对不起没有搜索到对应的APP！",
              type: "warning"
            });
          }
        } else {
          this.list = res.data.data.list;
          let ls = "";
          if (this.list.length > 5) {
            ls = "242";
          } else {
            ls = this.list.length * 40;
          }
          if (res.data.resultCode == 1000) {
            $(".kc_over1").css("height", ls + "px");
          }
          //如果搜索内容为空给一个提醒
          if (this.list.length == 0) {
            this.$message({
              message: "对不起没有搜索到对应的APP！",
              type: "warning"
            });
          }
        }
      });
    },

    AjaxInfor(obj, num) {
      //获取需要对比的app
      let url =
        "/api/v1/IntellSearchApi/APPDetail/GetAppInfo?appStoreId=" +
        obj.id +
        "&nationId=" +
        obj.key;

      this.$https.get(url).then(res => {
        if (res.data.resultCode == 1000) {
          if (num == "left") {
            this.dataLeft = res.data.data;
            this.idLeft = this.leftappStoreId;
            this.leftloadingCode = res.data.resultCode;
          } else {
            this.dataRight = res.data.data;
            this.idRight = res.data.data.appStoreId;
            this.rightloadingCode = res.data.resultCode;
          }
        } else {
          if (num == "left") {
            this.dataLeft = {};
            this.idLeft = this.$route.query.id;
            this.leftloadingCode = res.data.resultCode;
          } else {
            this.dataRight = {};
            this.rightloadingCode = res.data.resultCode;
          }
        }

        if (this.loading != null) {
          this.loading.close();
        }

        if (
          this.dataLeft.appImgUrl != null &&
          this.dataRight.appImgUrl != null
        ) {
          this.appDataShowtrue = true;
        }
      });
    },

    AjaxAppcontent(selectedAppId, competitiveAppId) {
      //获取两个app之间的对比数据
      let url =
        "/api/v1/IntellSearchApi/CompetitiveAppAnalysis/GetCompetitiveAppResults";
      let obj = {
        nationId: this.countryNow,
        selectedAppId,
        competitiveAppId,
        beginTime: datefn(1)[1].data.beginTime,
        endTime: datefn(1)[1].data.endTime
      };

      this.$https.post(url, JSON.stringify(obj)).then(res => {
        this.loadingparent = false;
        this.ContrastData = res.data.data.appAnalysisResult;
        this.parentAjaxType = true; // 当前请求结束，自己请求

        if (this.tableShow) {
          this.tableCommonsShow = true;
        }

        let totalNum =
          res.data.data.appAnalysisResult[this.idLeft].totalCompetitiveWordNum;
        let identicalNum =
          res.data.data.appAnalysisResult[this.idLeft].equalCompetitiveWordNum;
        let lsNum = identicalNum / totalNum * 10000;
        this.percentage = (lsNum / 100).toFixed(2);
        setTimeout(() => {
          // 基于准备好的dom，初始化echarts实例
          this.myChart = this.$echarts.init(
            document.getElementById("myChart1")
          );
          this.myChart.setOption({
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
              {
                name: "竞价词重合度",
                type: "pie",
                radius: ["60%", "80%"],
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                color: ["#2d76ed", "#dee2e6"],
                data: [
                  {
                    value: identicalNum,
                    name: "相同"
                  },
                  {
                    value: totalNum - identicalNum,
                    name: "不相同"
                  }
                ]
              }
            ]
          });
        }, 500);
      });
    }
  }
};
</script>