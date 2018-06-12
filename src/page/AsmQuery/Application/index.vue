<style lang='less' scoped>
@import url("../../../base/commonCSS/table.less");
.apl_index { 
  box-sizing: border-box;
  padding: 60px 0 20px;
  overflow: hidden;
  .apl_body {
    min-width: 1200px;
    padding: 0 45px;
    box-sizing: border-box;
  }
  .apl_body_top {
    width: 100%;
    margin: 36px 0 25px;
    height: 177px;
    background: #f7f7f7;
    border: 1px solid @border;
    box-sizing: border-box;
    padding: 26px 24px;
    display: flex;
    position: relative;
    box-shadow: 0 2px 2px @boxshado;
    img {
      width: 124px;
      height: 124px;
      border-radius: 16px;
      margin-right: 22px;
    }
    .apl_bt_ct {
      box-sizing: border-box;
      padding-top: 25px;
      h1 {
        font-size: 22px;
        color: @color;
        margin-bottom: 12px;
      }
      div {
        display: flex;
      }
      p {
        margin-bottom: 6px;
        span {
          display: block;
          margin-bottom: 6px;
          margin-right: 16px;
        }
      }
    }
    .apl_bt_btn {
      position: absolute;
      top: 26px;
      right: 34px;
      width: 150px;
      height: 40px;
      cursor: pointer;
      background: @color;
      color: #f7f7f7;
      text-align: center;
      line-height: 40px;
      border-radius: 6px;
      i {
        margin-right: 6px;
      }
    }
  }
  .apl_body_cur {
    width: 100%;
    display: flex;
    margin-bottom: 25px;
    .sl_center_p {
      margin-right: 11px;
      line-height: 34px;
    }
  }
  .apl_body_h2 {
    width: 100%;
    height: 34px;
    margin-bottom: 25px;
    h2 {
      line-height: 34px;
      font-size: 18px;
      color: @color;
      border-bottom: 2px solid @color;
      width: 138px;
      text-align: center;
      margin: 0 auto;
    }
  }
  .apl_body_date {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  .apl_checketout {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    span {
      display: block;
      height: 32px;
      border: 1px solid #dee2e6;
      border-radius: 4px;
      line-height: 32px;
      padding: 0 12px;
      margin-left: 16px;
      cursor: pointer;
    }
  }
  .apl_body_search {
    width: 100%;
    height: 110px;
    border: 1px solid @border;
    border-bottom: none;
    display: flex;
    box-sizing: border-box;
    padding: 27px 0 0 23px;
    position: relative;
    .apl_bos_box {
      margin-right: 20px;
      p {
        margin-bottom: 10px;
      }
      input {
        border: 1px solid @border;
        border-radius: 4px;
        width: 80px;
        height: 30px;
        margin-right: 16px;
        box-sizing: border-box;
        padding-left: 12px;
        &::-webkit-input-placeholder {
          color: #9a9a9a;
        }
      }
    }
    button {
      width: 64px;
      height: 30px;
      border: 1px solid #36bead;
      line-height: 30px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      background: #fff;
      color: #36bead;
      margin-top: 29px;
      &.btn_null {
        background: @color;
        border: 1px solid @border;
        color: #fff;
        margin-left: 20px;
        &:hover {
          background: #1559c8;
        }
      }
      &:hover {
        background: #36bead;
        color: #fff;
      }
    }
    .apl_bos_right {
      width: 240px;
      height: 30px;
      border: 1px solid @border;
      border-radius: 4px;
      position: absolute;
      overflow: hidden;
      top: 55px;
      right: 20px;
      overflow: hidden;
      .apl_bos_input {
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 4px;
        input {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          box-sizing: border-box;
          padding-left: 20px;
          padding-right: 40px;
          &::-webkit-input-placeholder {
            color: #9a9a9a;
          }
        }
        i {
          position: absolute;
          top: 7px;
          right: 14px;
          cursor: pointer;
        }
      }
    }
  }
  .apl_body_table {
    width: 100%;
    box-shadow: 0 2px 2px @boxshado;
    min-height: 60px;
  }
  .href_a {
    color: @color !important;
    cursor: pointer;
  }
}
</style>
<style lang="less">
.apl_index {
  .apl_body_cur {
    .el-select {
      width: 114px;
      height: 34px;
    }
    .el-input,
    .el-input--suffix,
    .el-input__inner {
      height: 34px;
    }
  }
  .apl_body_date {
    .el-select {
      width: 256px;
      height: 32px;
    }
    .el-input,
    .el-input--suffix,
    .el-input__inner {
      height: 32px;
    }
  }
}
</style>
<template>
	<div class="apl_index">
		<v-search-top></v-search-top>
		<div class="apl_body">
			<!-- 头部表格信息 -->
			<div class="apl_body_top">
				<img :src="appData.appImgUrl" alt="" v-if="appData.show">
				<img src="../../../images/moni/appimg_1123_03.png" alt="" v-if="!appData.show">
				<div class="apl_bt_ct">
					<h1>{{appData.appName}}</h1>
					<div>
						<p style="max-width: 260px ; min-width: 100px;">
							<span>开发商</span>
							<span v-if="appData.show">{{appData.aristName}}</span>
							<span style=" color:#000;" v-if="!appData.show">-</span>
						</p>
						<p style="min-width: 74px">
							<span>分类</span>
							<span style="color:#2d76ed;" v-if="appData.show">{{appData.appTypeName}}</span>
							<span style=" color:#2d76ed;" v-if="!appData.show">-</span>
						</p>
						<p style="min-width: 110px">
							<span>AppId</span>
							<span style="color:#2d76ed;" v-if="appData.show">{{appData.appStoreId}}</span>
							<span style=" color:#2d76ed;" v-if="!appData.show">-</span>
						</p>
						<p style="min-width: 64px">
							<span>价格</span>
							<span style="color:#000;" v-if="appData.show">{{appData.appPrice | appPriceFilter}}</span>
							<span style=" color:#000;" v-if="!appData.show">-</span>
						</p>
						<p style="min-width: 64px">
							<span>总榜</span>
							<span style="color:#000;" v-if="appData.show">{{appData.totalRank == 0 ? '-' : appData.totalRank}}</span>
							<span style=" color:#000;" v-if="!appData.show">-</span>
						</p>
						<p style="min-width: 140px">
							<span>分类榜</span>
							<span style="color:#000;" v-if="appData.show">{{appData.classificationRank == 0 ? '-' : appData.classificationRank}}</span>
							<span style=" color:#000;" v-if="!appData.show">-</span>
						</p>
					</div>
				</div>
				<div class="apl_bt_btn" v-if="appData.show">
					<span @click="keywordRouter">
            <i class="iconfont icon-plus-add"></i>竞品对比
          </span>
				</div>
			</div>
			<!-- 选择器 -->
			<div class="apl_body_cur">
				<p class="sl_center_p">地区</p>
				<el-select v-model="countryNow" placeholder="请选择" @change="changeFun(countryNow)">
					<el-option class="search_input" v-for="item in countryList" :key="item.nationId" :label="item.nationCHSName" :value="item.nationId">
					</el-option>
				</el-select>
			</div>
			<div class="apl_body_h2">
				<h2>历史竞价关键词</h2>
			</div>
			<div class="apl_body_date">
				<el-select v-model="value1" @change="changeDateFun(value1)">
					<el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<div class="apl_checketout">
					<span @click="excelOut" v-if="userType">
						<i class="iconfont icon-download"></i> 导出
					</span>
				</div>
			</div>
			<!-- 表单详细搜索 -->
			<div class="apl_body_search">
				<div class="apl_bos_box">
					<p>搜索指数</p>
					<div>
						<input type="text" placeholder="最小值" v-model="seacrchData.minSearchIndex">
						<input type="text" placeholder="最大值" v-model="seacrchData.maxSearchIndex">
					</div>
				</div> 
				<div class="apl_bos_box">
					<p>流行度</p>
					<div>
						<input type="text" placeholder="最小值" v-model="seacrchData.minAppLength">
						<input type="text" placeholder="最大值" v-model="seacrchData.maxAppLength">
					</div>
				</div>
				<!-- <div class="apl_bos_box">
					<p>竞价APP数量</p>
					<div>
						<input type="text" placeholder="最小值" v-model="seacrchData.minRatio">
						<input type="text" placeholder="最大值" v-model="seacrchData.maxRatio">
					</div>
				</div> -->
				<button @click="btnNullClick">清空</button>
				<button @click="searchMoreClick" class="btn_null">搜索</button>
				<div class="apl_bos_right">
					<div class="apl_bos_input">
						<input type="text" placeholder="查找关键词" v-model="searchKeyWord" @focus="focusInput" @blur="blurInput">
						<i class="iconfont icon-icon-plus-search" @click="keywordClick"></i>
					</div>
				</div>
			</div>
			<!-- 表格信息 -->
			<div class="apl_body_table">
				<table id="ta2">
					<tr>
						<th style="width: 27%">关键词</th>
						<th style="width: 11%" class="sl_table_po">
							<div class="sl_table_flex">
								搜索指数
								<div class="table_tandb">
									<span @click="paiClick(0,'one')" :class="{bandb_one: showList[0].one}"></span>
									<span @click="paiClick(0,'two')" :class="{bandb_two: showList[0].two}"></span>
								</div>
								<div class="sl_t_dis">
									<i class="iconfont icon-wenhao-fill"> </i>
									<span class="sl_t_is" style="width:260px;">
										 搜索指数来源于App Store官方数据。该数据代表每个关键词在App Store的搜索热度，一般来说，指数越高，则该词每天被搜索次数也越多
									</span>
									<span class="sl_t_san"></span>
								</div>
							</div>
						</th>
						<th style="width: 11%" class="sl_table_po">
							<div class="sl_table_flex">
								流行度
								<div class="table_tandb">
									<span @click="paiClick(1,'one')" :class="{bandb_one: showList[1].one}"></span>
									<span @click="paiClick(1,'two')" :class="{bandb_two: showList[1].two}"></span>
								</div>
								<div class="sl_t_dis">
									<i class="iconfont icon-wenhao-fill"> </i>
									<span class="sl_t_is" style="width:260px;">
										 流行度来源于App Store官方数据。该数据代表此关键词在App Store中的搜索流行度，数值最高为100。
									</span>
									<span class="sl_t_san"></span>
								</div>
							</div>
						</th>
						<th style="width: 11%" class="sl_table_po">
							<div class="sl_table_flex">
								展示量占比
								<!-- <div class="table_tandb">
									<span @click="paiClick(2,'one')" :class="{bandb_one: showList[2].one}"></span>
									<span @click="paiClick(2,'two')" :class="{bandb_two: showList[2].two}"></span>
								</div> -->
								<div class="sl_t_dis">
									<i class="iconfont icon-wenhao-fill"> </i>
									<span class="sl_t_is" style="width:260px;"> 
										  该APP在该关键词的总体广告展示量中获得的广告展示量比例
									</span>
									<span class="sl_t_san"></span>
								</div>
							</div>
						</th>
						<th style="width: 11%" class="sl_table_po">
							<div class="sl_table_flex">
								预测出价
							</div>
						</th>
						<th style="width: 20%" class="sl_table_po">
							<div class="sl_table_flex">
								近期竞价App
							</div>
						</th>
						<th style="width: 9%" class="sl_table_po">
							<div class="sl_table_flex">
								操作
							</div>
						</th>
					</tr>
					<!-- 表格第二行 -->
					<tr v-for="(ele,index) in tableData.list" :key="index" class="table_td_cont" v-if="tableShow">
						<td class="href_a" @click="routerClick(ele.keywordName)">{{ele.keywordName}}</td>
						<td>{{ele.searchIndex}}</td>
						<td>{{ele.popularityIndex}}</td>
						<td>{{ele.ratio | percentage}}</td>
						<td>{{ele.estimatePrice | numNull}}</td>
						<td style="width: 20%" class="sl_dt_img">
							<div>
								<!-- 最多显示四个 -->
								<img :src="item.appImgUrl" alt="" v-for="(item,index2) in ele.hotKeywordAppList" :key="index2" v-if="index2<4" @click="imgRouterClick(item.appStoreId)">
								<span v-if="ele.appLength>4" @click="routerClick(ele.keywordName)">{{ele.appLength}}<i class="iconfont icon-gengduo"></i></span>
							</div>
						</td>
						<td style="width: 9%">
							<div class="sl_t_dis" v-if="ele.hotKeywordTemStatus == 0">
								<i class="iconfont icon-plus-add" @click="addCiClick(index , ele.hotKeywordTemStatus , ele.keywordName)"></i>
								<span class="sl_t_is" style="width:114px;"> 
									添加至新建词组
								</span>
								<span class="sl_t_san"></span>
							</div>
							<div class="sl_t_dis" v-if="ele.hotKeywordTemStatus == 1">
								<i class="iconfont icon-xuanze" style="color:#43c2ac;" @click="addCiClick(index , ele.hotKeywordTemStatus , ele.keywordName)"> </i>
								<span class="sl_t_is" style="width:114px;"> 
									从新建词组删除
								</span>
								<span class="sl_t_san"></span>
							</div>
						</td>
					</tr>
					<tr v-if="!tableShow">
						<td colspan="7" style="height: 150px">该关键词暂无竞价数据</td>
					</tr>
					 <!-- loading -->
					<tr v-if="loadingfirst">
						<td colspan="7" style="height: 80px;">
							<img src="../../../images/components/loading.gif" alt="">
						</td>
					</tr>
				</table>
			</div>
			<!-- 分页 -->
			<div class="page_index" v-if="userType">
				<div>{{pagedata}}</div>
				<div>
					<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="20" layout="prev, pager, next, jumper" :total="tableData.totalCount">
					</el-pagination>
				</div>
			</div>
			<usersign v-if="!userType"></usersign>
		</div>
	</div>
</template>

<script>
import excel from "@commonJS/excelFn";
import usersign from "@components/AsmQuery/User-Sign";
import method1 from "@commonJS/excel";
import { mapState } from "vuex";
import { datefn } from "@commonJS/dateList";
import { AjaxRemove } from "@commonJS/ajaxServes";
export default {
  data() {
    return {
      currentPage3: 1, //当前页
      appData: {
        show: true
      },
      countryNow: "", //当前国家
      value1: "", //当前时间
      options3: [], //世界列表
      showList: [
        {
          //控制排序的三角
          one: true,
          two: false
        },
        {
          one: false,
          two: false
        },
        {
          one: false,
          two: false
        }
      ],
      tableData: {
        totalCount: 0
      },
      tableShow: true,
      loadingfirst: true,
      sortDate: {
        //排序
        one: "searchIndex",
        two: 0
      },
      seacrchData: {
        minSearchIndex: "",
        maxSearchIndex: "",
        minRatio: "",
        maxRatio: "",
        minAppLength: "",
        maxAppLength: ""
      },
      seacrchDataTrue: {
        minSearchIndex: 0,
        maxSearchIndex: 0,
        minRatio: 0,
        maxRatio: 0,
        minAppLength: 0,
        maxAppLength: 0
      },
      searchKeyWord: "",
      searchKeyWordTrue: "",
      loading: null,
      loadingopaction: {
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      }
    };
  },

  components: {
    usersign
  },

  computed: {
    ...mapState({
      countryList: state => state.Home.countryList,
      userType: state => state.Sign.userType
    }),
    pagedata() {
      if (this.currentPage3 * 20 <= this.tableData.totalCount) {
        let ls = "当前第 " + ((this.currentPage3 - 1) * 20 + 1) + "-" + this.currentPage3 * 20 +  ", 共 " +  this.tableData.totalCount;
        return ls;
      } else {
        let ls = "当前第 " + ((this.currentPage3 - 1) * 20 + 1) + "-" + this.tableData.totalCount + ", 共" + this.tableData.totalCount;
        return ls;
      }
    }
  },

  watch: {
    $route() {
      this.currentPage3 = 1
      this.tableData.totalCount = 0
      this.loading = this.$loading(this.loadingopaction);

      this.AjaxGetAppHistoryKeywordList({
        pageIndex: 1,
        pageSize: 20,
        requestPar: {
          appStoreId: this.$route.query.id,
          nationId: this.$route.query.country,
          beginTime: datefn(0).beginTime,
          endTime: datefn(0).endTime,
          keywordName: this.searchKeyWordTrue,
          minSearchIndex: this.isNull(this.seacrchDataTrue.minSearchIndex),
          maxSearchIndex: this.isNull(this.seacrchDataTrue.maxSearchIndex),
          // minRatio: this.isNull(this.seacrchDataTrue.minRatio),
          // maxRatio: this.isNull(this.seacrchDataTrue.maxRatio),
          minPopularityIndex: this.isNull(this.seacrchDataTrue.minAppLength),
          maxPopularityIndex: this.isNull(this.seacrchDataTrue.maxAppLength)
        },
        orderByParDic: {
          searchIndex: 0
        }
      });

      this.AjaxGetAppInfo();
    }
  },

  filters: {
    numNull: function(value) {
      return value == 0 ? "-" : value;
    },
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
        if (ele.nationId == this.$route.query.country) {
          this.countryNow = this.$store.state.Home.countryList[index].nationId;
        }
      });
    });

    this.options3 = datefn(1);
    this.value1 = this.options3[0].value;
    this.loading = this.$loading(this.loadingopaction);

    this.AjaxGetAppHistoryKeywordList({
      pageIndex: 1,
      pageSize: 20,
      requestPar: {
        appStoreId: this.$route.query.id,
        nationId: this.$route.query.country,
        beginTime: datefn(0).beginTime,
        endTime: datefn(0).endTime,
        keywordName: this.searchKeyWordTrue,
        minSearchIndex: this.isNull(this.seacrchDataTrue.minSearchIndex),
        maxSearchIndex: this.isNull(this.seacrchDataTrue.maxSearchIndex),
        // minRatio: this.isNull(this.seacrchDataTrue.minRatio),
        // maxRatio: this.isNull(this.seacrchDataTrue.maxRatio),
        minPopularityIndex: this.isNull(this.seacrchDataTrue.minAppLength),
        maxPopularityIndex: this.isNull(this.seacrchDataTrue.maxAppLength)
      },
      orderByParDic: {
        searchIndex: 0
      }
    });

    this.AjaxGetAppInfo();
  },
  mounted() {
    this.$height('.apl_index') 
  },

  methods: {
    focusInput() {
      $(".apl_bos_right").css("border-color", "#2d76ed");
    },
    blurInput() {
      $(".apl_bos_right").css("border-color", "#dee2e6");
    },

    changeFun(value) {
      //切换国家
      this.currentPage3 = 1
      this.tableData.totalCount = 0
      this.showList.map(ele => {
        ele.one = false;
        ele.two = false;
      });
      this.showList[0].one = true;

      this.AjaxGetAppHistoryKeywordList({
        pageIndex: 1,
        pageSize: 20,
        requestPar: {
          appStoreId: this.$route.query.id,
          nationId: value,
          beginTime: datefn(1)[this.value1].data.beginTime,
          endTime: datefn(1)[this.value1].data.endTime,
          keywordName: this.searchKeyWordTrue,
          minSearchIndex: this.isNull(this.seacrchDataTrue.minSearchIndex),
          maxSearchIndex: this.isNull(this.seacrchDataTrue.maxSearchIndex),
          // minRatio: this.isNull(this.seacrchDataTrue.minRatio),
          // maxRatio: this.isNull(this.seacrchDataTrue.maxRatio),
          minPopularityIndex: this.isNull(this.seacrchDataTrue.minAppLength),
          maxPopularityIndex: this.isNull(this.seacrchDataTrue.maxAppLength)
        },
        orderByParDic: {
          searchIndex: 0
        }
      });
    },

    changeDateFun(value) {
      //切换日期
      this.currentPage3 = 1
      this.tableData.totalCount = 0
      this.showList.map(ele => {
        ele.one = false;
        ele.two = false;
      });
      this.showList[0].one = true;

      this.AjaxGetAppHistoryKeywordList({
        pageIndex: 1,
        pageSize: 20,
        requestPar: {
          appStoreId: this.$route.query.id,
          nationId: this.countryNow,
          beginTime: datefn(1)[value].data.beginTime,
          endTime: datefn(1)[value].data.endTime,
          keywordName: this.searchKeyWordTrue,
          minSearchIndex: this.isNull(this.seacrchDataTrue.minSearchIndex),
          maxSearchIndex: this.isNull(this.seacrchDataTrue.maxSearchIndex),
          //minRatio: this.isNull(this.seacrchDataTrue.minRatio),
          //maxRatio: this.isNull(this.seacrchDataTrue.maxRatio),
          minPopularityIndex: this.isNull(this.seacrchDataTrue.minAppLength),
          maxPopularityIndex: this.isNull(this.seacrchDataTrue.maxAppLength)
        },
        orderByParDic: {
          searchIndex: 0
        }
      });
    },

    paiClick(num, name) {
      //排序的按钮
      this.showList.map((ele, index) => {
        ele.one = false;
        ele.two = false;
      });
      this.showList[num][name] = true;
      if (num == 0) {
        this.sortDate = {
          one: "searchIndex",
          two: name == "one" ? 0 : 1
        };
      } else if (num == 1) {
        this.sortDate = {
          one: "popularityIndex",
          two: name == "one" ? 0 : 1
        };
      } else {
        this.sortDate = {
          one: "ratio",
          two: name == "one" ? 0 : 1
        };
      }
      let obj = {};
      obj[this.sortDate.one] = this.sortDate.two;
      this.AjaxGetAppHistoryKeywordList({
        pageIndex: this.currentPage3,
        pageSize: 20,
        requestPar: {
          appStoreId: this.$route.query.id,
          nationId: this.countryNow,
          beginTime: datefn(1)[this.value1].data.beginTime,
          endTime: datefn(1)[this.value1].data.endTime,
          keywordName: this.searchKeyWordTrue,
          minSearchIndex: this.isNull(this.seacrchDataTrue.minSearchIndex),
          maxSearchIndex: this.isNull(this.seacrchDataTrue.maxSearchIndex),
          //minRatio: this.isNull(this.seacrchDataTrue.minRatio),
          //maxRatio: this.isNull(this.seacrchDataTrue.maxRatio),
          minPopularityIndex: this.isNull(this.seacrchDataTrue.minAppLength),
          maxPopularityIndex: this.isNull(this.seacrchDataTrue.maxAppLength)
        },
        orderByParDic: obj
      });
    },

    addCiClick(index, num, name) {
      //收藏操作
      if (!this.userType) {
        this.$message({
          message: "请先登录！",
          type: "warning"
        });
        return false;
      }
      if (num == 0) {
        this.tableData.list[index].hotKeywordTemStatus = 1;
        AjaxRemove(name, 0); //添加
      } else {
        this.tableData.list[index].hotKeywordTemStatus = 0;
        AjaxRemove(name, 1); //删除
      }
    },

    imgRouterClick(id) {
      //图片应用跳转
      this.$router.push({
        path: "/application",
        query: {
          id,
          country: this.countryNow
        }
      });
      $(window).scrollTop(0);
    },

    routerClick(id) {
      //点击跳转，回到顶部，切换回历史列表
      this.$router.push({
        path: "/rankingDetails-List",
        query: {
          key: id,
          country: this.countryNow
        }
      });
    },

    searchMoreClick() {
      //模糊查询
      this.currentPage3 = 1
      this.tableData.totalCount = 0
      this.showList.map(ele => {
        ele.one = false;
        ele.two = false;
      });
      this.showList[0].one = true;

      for (var i in this.seacrchData) {
        if (
          (isNaN(this.seacrchData[i]) && this.seacrchData[i] != "") ||
          parseInt(this.seacrchData[i]) < 0
        ) {
          this.$message({
            message: "搜索内容必须为大于等于0的数字",
            type: "warning"
          });
          return false;
        }
      }
      if (this.seacrchData.maxSearchIndex != "") {
        if (parseInt(this.seacrchData.maxSearchIndex) < parseInt(this.seacrchData.minSearchIndex)) {
          this.$message({
            message: "热度：最大值必须大于最小值",
            type: "warning"
          });
          return false;
        }
      }
      if (this.seacrchData.maxRatio != "") {
        if (parseInt(this.seacrchData.maxRatio) < parseInt(this.seacrchData.minRatio) ) {
          this.$message({
            message: "展示量占比：最大值必须大于最小值",
            type: "warning"
          });
          return false;
        }
      }
      if (this.seacrchData.maxAppLength != "") {
        if ( parseInt(this.seacrchData.maxAppLength) < parseInt(this.seacrchData.minAppLength) ) {
          this.$message({
            message: "流行度：最大值必须大于最小值",
            type: "warning"
          });
          return false;
        }
      }
      if ( this.zTest(this.seacrchData.maxSearchIndex) || this.zTest(this.seacrchData.minSearchIndex) || this.zTest(this.seacrchData.maxAppLength) || this.zTest(this.seacrchData.minAppLength)
      ) {
        this.$message({
          message: "必须为大于等于0的正整数",
          type: "warning"
        });
        return false;
      }
      this.seacrchDataTrue = this.seacrchData;

      this.currentPage3 = 1
      this.AjaxGetAppHistoryKeywordList({
        pageIndex: 1,
        pageSize: 20,
        requestPar: {
          appStoreId: this.$route.query.id,
          nationId: this.countryNow,
          beginTime: datefn(1)[this.value1].data.beginTime,
          endTime: datefn(1)[this.value1].data.endTime,
          keywordName: this.searchKeyWordTrue,
          minSearchIndex: this.isNull(this.seacrchDataTrue.minSearchIndex),
          maxSearchIndex: this.isNull(this.seacrchDataTrue.maxSearchIndex),
          //minRatio: this.isNull(this.seacrchDataTrue.minRatio),
          //maxRatio: this.isNull(this.seacrchDataTrue.maxRatio),
          minPopularityIndex: this.isNull(this.seacrchDataTrue.minAppLength),
          maxPopularityIndex: this.isNull(this.seacrchDataTrue.maxAppLength)
        },
        orderByParDic: {
          searchIndex: 0
        }
      });
    },

    btnNullClick() {
      //清空搜索
      this.seacrchData = {
        minSearchIndex: "",
        maxSearchIndex: "",
        minRatio: "",
        maxRatio: "",
        minAppLength: "",
        maxAppLength: ""
      };
    },

    keywordClick() {
      //input搜索
      this.currentPage3 = 1
      this.tableData.totalCount = 0
      this.searchKeyWordTrue = this.searchKeyWord;
      this.showList.map(ele => {
        ele.one = false;
        ele.two = false;
      });
      this.showList[0].one = true;

      this.currentPage3 = 1
      this.AjaxGetAppHistoryKeywordList({
        pageIndex: 1,
        pageSize: 20,
        requestPar: {
          appStoreId: this.$route.query.id,
          nationId: this.countryNow,
          beginTime: datefn(1)[this.value1].data.beginTime,
          endTime: datefn(1)[this.value1].data.endTime,
          keywordName: this.searchKeyWordTrue,
          minSearchIndex: this.isNull(this.seacrchDataTrue.minSearchIndex),
          maxSearchIndex: this.isNull(this.seacrchDataTrue.maxSearchIndex),
          //minRatio: this.isNull(this.seacrchDataTrue.minRatio),
          //maxRatio: this.isNull(this.seacrchDataTrue.maxRatio),
          minPopularityIndex: this.isNull(this.seacrchDataTrue.minAppLength),
          maxPopularityIndex: this.isNull(this.seacrchDataTrue.maxAppLength)
        },
        orderByParDic: {
          searchIndex: 0
        }
      });
      this.searchKeyWord = ""; //清空搜索内容 
    },

    zTest(data) {
      //正则验证
      let ZZ = /^([1-9]\d*|[0]{1,1})$/;
      if (data != "" && !ZZ.test(data)) {
        return true;
      } else {
        return false;
      }
    },

    isNull(data) {
      //判断是否为空
      if (data == "") {
        return 0;
      } else {
        return data;
      }
    },

    handleSizeChange(val) {
      let obj = {};
      obj[this.sortDate.one] = this.sortDate.two;
      this.AjaxGetAppHistoryKeywordList({
        pageIndex: val,
        pageSize: 20,
        requestPar: {
          appStoreId: this.$route.query.id,
          nationId: this.countryNow,
          beginTime: datefn(1)[this.value1].data.beginTime,
          endTime: datefn(1)[this.value1].data.endTime,
          keywordName: this.searchKeyWordTrue,
          minSearchIndex: this.isNull(this.seacrchDataTrue.minSearchIndex),
          maxSearchIndex: this.isNull(this.seacrchDataTrue.maxSearchIndex),
          //minRatio: this.isNull(this.seacrchDataTrue.minRatio),
          //maxRatio: this.isNull(this.seacrchDataTrue.maxRatio),
          minPopularityIndex: this.isNull(this.seacrchDataTrue.minAppLength),
          maxPopularityIndex: this.isNull(this.seacrchDataTrue.maxAppLength)
        },
        orderByParDic: obj
      });
      $(window).scrollTop($("#ta2").offset().top);
    },

    handleCurrentChange(val) {
      let obj = {};
      obj[this.sortDate.one] = this.sortDate.two;
      this.AjaxGetAppHistoryKeywordList({
        pageIndex: val,
        pageSize: 20,
        requestPar: {
          appStoreId: this.$route.query.id,
          nationId: this.countryNow,
          beginTime: datefn(1)[this.value1].data.beginTime,
          endTime: datefn(1)[this.value1].data.endTime,
          keywordName: this.searchKeyWordTrue,
          minSearchIndex: this.isNull(this.seacrchDataTrue.minSearchIndex),
          maxSearchIndex: this.isNull(this.seacrchDataTrue.maxSearchIndex),
          //minRatio: this.isNull(this.seacrchDataTrue.minRatio),
          //maxRatio: this.isNull(this.seacrchDataTrue.maxRatio),
          minPopularityIndex: this.isNull(this.seacrchDataTrue.minAppLength),
          maxPopularityIndex: this.isNull(this.seacrchDataTrue.maxAppLength)
        },
        orderByParDic: obj
      });
      $(window).scrollTop($("#ta2").offset().top);
    },

    excelOut() {
      //表格导出
      let title = [
        "关键词",
        "搜索指数",
        "流行度",
        "展示量占比",
        "预测出价",
        "近期竞价APP数量"
      ];
      let arr = [];
      for (var i = 0; i < this.tableData.list.length; i++) {
        var newarr = [];
        newarr.push(this.tableData.list[i].keywordName);
        newarr.push(this.tableData.list[i].searchIndex);
        newarr.push(this.tableData.list[i].popularityIndex);
        newarr.push(this.tableData.list[i].ratio);
        newarr.push(this.tableData.list[i].estimatePrice);
        newarr.push(this.tableData.list[i].appLength);
        arr.push(newarr);
      }
      excel(title, arr, "tab");
    },

    keywordRouter() {
      //竞品对比跳转
      this.$router.push({
        path: "/keyword-comparison-list",
        query: {
          key: this.countryNow,
          id: this.appData.appStoreId
        }
      });
    },

    AjaxGetAppInfo() { 
      let routeObj = this.$route.query 
      if(routeObj.beginTime == undefined) {
        routeObj.beginTime = ''
      }
      if(routeObj.endTime == undefined) {
        routeObj.endTime = ''
      }
      //初次加载
      let url =
        "/api/v1/IntellSearchApi/APPDetail/GetAppInfo?appStoreId=" +
        routeObj.id +
        "&nationId=" +
        routeObj.country + 
        '&beginTime=' +
         routeObj.beginTime +
        '&endTime=' + 
        routeObj.endTime 
      this.$https.get(url)
      .then(res => {
        //res.data.resultCode = 404
        if (res.data.resultCode == 1000) {
          res.data.data.show = true;
          this.appData = res.data.data;
        } else if (res.data.resultCode == 404) {
          res.data.data.show = false;
          this.appData = res.data.data;
        }
        if(this.loading != null) {
          this.loading.close()
        }
      });
    },

    AjaxGetAppHistoryKeywordList(obj) {
      this.tableShow = true;
      //获取历史列表
      this.loadingfirst = true;
      this.tableData.list = [];
      let url = "/api/v1/IntellSearchApi/APPDetail/GetAppHistoryKeywordList";

      this.$https .post(url, JSON.stringify(obj))
      .then(res => {
        if (res.data.resultCode == 1000) {
          this.tableShow = true;
        } else if (res.data.resultCode == 404) {
          this.tableShow = false;
        }
        this.loadingfirst = false;
        this.tableData = res.data.data;
        if(this.loading != null) {
          this.loading.close()
        }
      })
      .catch(() => {
        this.loadingfirst = false;
        alert("请求错误！");
      });
    }
  }
};
</script>