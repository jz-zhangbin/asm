<style lang='less' scoped> 
@import url('../../base/commonJS/css.less');
	.apl_index {
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
			box-shadow: 0 2px 5px @border;
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
				p {
					margin-bottom: 6px;
					span {
						display: inline-block;
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
		}
		.apl_checketout {
			width: 100%;
			display: flex;
			justify-content: flex-end;
			margin-bottom: 25px;
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
				margin-right: 40px;
				p {
					margin-bottom: 10px;
				}
				input {
					border: 1px solid @border;
					border-radius: 4px;
					width: 89px;
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
				&:hover {
					background: #36bead;
					color: #fff;
				}
			}
			.apl_bos_right {
				width: 240px;
				height: 30px;
				border: 1px solid @border;
				border-radius: 6px;
				position: absolute;
				top: 50px;
				right: 20px;
				overflow: hidden;
				.apl_bos_input {
					width: 100%;
					height: 100%;
					position: relative;
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
			box-shadow: 0 2px 5px @border;
		}
		.href_a{
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
				width: 226px;
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
				<img src="../../images/moni/appimg_1123_03.png" alt=""  v-if="!appData.show">
				<div class="apl_bt_ct">
					<h1>{{appData.appName}}</h1>
					<p>
						<span style="width: 140px">开发商</span>
						<span style="width: 74px">分类</span>
						<span style="width: 138px">AppId</span>
						<span style="width: 74px">价格</span>
						<span style="width: 74px">总榜</span>
						<span style="width: 140px">分类榜</span>
					</p>
					<p  v-if="appData.show">
						<span style="width: 140px; color:#000;">{{appData.aristName}}</span>
						<span style="width: 74px; color:#2d76ed;">{{appData.appTypeName}}</span>
						<span style="width: 138px; color:#2d76ed;">{{appData.appStoreId}}</span>
						<span style="width: 74px; color:#000;">{{appData.appPrice}}</span>
						<span style="width: 74px; color:#000;">{{appData.totalRank}}</span>
						<span style="width: 140px; color:#000;">{{appData.classificationRank}}</span>
					</p>
					<p  v-if="!appData.show">
						<span style="width: 140px; color:#000;">-</span>
						<span style="width: 74px; color:#2d76ed;">-</span>
						<span style="width: 138px; color:#2d76ed;">-</span>
						<span style="width: 74px; color:#000;">-</span>
						<span style="width: 74px; color:#000;">-</span>
						<span style="width: 140px; color:#000;">-</span>
					</p>
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
					<el-option v-for="item in countryList" :key="item.nationId" :label="item.nationCHSName" :value="item.nationId">
					</el-option>
				</el-select>
			</div>
			<div class="apl_body_h2">
				<h2>历史竞价关键词</h2>
			</div>
			<div class="apl_body_date">
				<el-select v-model="value1"  @change="changeDateFun(value1)">
					<el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<div class="apl_checketout">
					<span  @click="excelOut"  v-if="userType">
						<i class="iconfont icon-download"></i> 导出
					</span>
				</div>
			</div>
			<!-- 表单详细搜索 -->
			<div class="apl_body_search">
				<div class="apl_bos_box">
					<p>热度</p>
					<div>
						<input type="text" placeholder="最小值" v-model="seacrchData.minSearchIndex">
						<input type="text" placeholder="最大值" v-model="seacrchData.maxSearchIndex">
					</div>
				</div>
				<div class="apl_bos_box">
					<p>展示量占比(%)</p>
					<div>
						<input type="text" placeholder="最小值" v-model="seacrchData.minRatio">
						<input type="text" placeholder="最大值" v-model="seacrchData.maxRatio">
					</div>
				</div>
				<div class="apl_bos_box">
					<p>近期竞价App数</p>
					<div>
						<input type="text" placeholder="最小值" v-model="seacrchData.minAppLength">
						<input type="text" placeholder="最大值" v-model="seacrchData.maxAppLength">
					</div>
				</div>
				<button @click="searchMoreClick">搜索</button>
				<div class="apl_bos_right">
					<div class="apl_bos_input">
						<input type="text" placeholder="查找关键词" v-model="searchKeyWord">
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
										 搜索指数来源于App Store官方数据。该数据代表每个关键词在App Store的搜索热度，一般来说说，指数越高，则该词每天被搜索次数也越多
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
										 流行度来源于App Store官方数据。该数据代表次关键词在App Store中的搜索流行度，数值最高为100%。
									</span>
									<span class="sl_t_san"></span>
								</div>
							</div>
						</th>
						<th style="width: 11%" class="sl_table_po">
							<div class="sl_table_flex">
								展示量占比
								<div class="table_tandb">
									<span @click="paiClick(2,'one')" :class="{bandb_one: showList[2].one}"></span>
									<span @click="paiClick(2,'two')" :class="{bandb_two: showList[2].two}"></span>
								</div>
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
						<td>{{ele.ratio}}%</td>
						<td>{{ele.estimatePrice}}</td>
						<td style="width: 20%" class="sl_dt_img">
							<div>
								<!-- 最多显示四个 -->
								<img :src="item.appImgUrl" alt="" v-for="(item,index2) in ele.hotKeywordAppList" :key="index2" v-if="index2<4">
								<span v-if="ele.appLength>4" @click="routerClick(ele.keywordName)">{{ele.appLength}}&gt;</span>
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
				</table>
			</div> 
			<!-- 分页 -->
			<div class="page_index"  v-if="userType">
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
	import excel from '@commonJS/excelFn'
	import usersign from '@components/User-Sign'
	import method1 from "@commonJS/excel";
	import { CountryInit , UserSignType} from '@commonJS/AxiosGet'
	import {mapState} from 'vuex'
	import { datefn } from '@commonJS/functionJS'
	export default {
		data() {
			return {
				currentPage3: 1, //当前页
				userType: false, //用户登录状态 
				appData: { 
					show: true
				}, 
				countryNow: "",//当前国家
				value1: "",//当前时间
				options3: [ ],//世界列表
				showList: [{ //控制排序的三角
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
				tableData: [],
				tableShow: true,
				loading: null,
				loadingopaction: {
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				},
				sortDate:{//排序
					one: 'searchIndex',
					two: 0
				},
				seacrchData: {
					minSearchIndex: '',
					maxSearchIndex: '',
					minRatio: '',
					maxRatio: '',
					minAppLength: '',
					maxAppLength: ''
				},
				seacrchDataTrue: {
					minSearchIndex: 0,
					maxSearchIndex: 0,
					minRatio: 0,
					maxRatio: 0,
					minAppLength: 0,
					maxAppLength: 0
				},
				searchKeyWord: '',
				searchKeyWordTrue: ''
			};
		},

		components: {
			usersign
		},

		computed: {
			...mapState({
				countryList: state => state.Home.countryList, 
			}),
			pagedata() {
				if(this.currentPage3 * 20 <= this.tableData.totalCount) {
					let ls = '当前第 ' + (((this.currentPage3 - 1) * 20) + 1) + '-' + this.currentPage3 * 20 + ', 共 ' + this.tableData.totalCount
					return ls
				} else {
					let ls = '当前第 ' + (((this.currentPage3 - 1) * 20) + 1) + '-' + this.tableData.totalCount + ', 共' + this.tableData.totalCount
					return ls
				}
			}
		},

		mounted() {
			this.$store.dispatch('GET_COUNTRYLIST')
			.then(()=>{
				this.countryNow = this.$store.state.Home.countryList[0].nationId
			}) 

			this.options3  = datefn(1) 
			this.value1 = this.options3[0].value

			UserSignType()
			.then(res=>{ 
				if(res.data.data.userLoginStatus == 1) {//登陆状态
					this.userType = true
				}else{//未登陆
					this.userType = false
				}
			})

			this.AjaxGetAppInfo()

			this.AjaxGetAppHistoryKeywordList({
				pageIndex: 1,
				pageSize: 20,
				requestPar: {
					appStoreId: this.$route.query.id,
					nationId: this.$route.country,
					beginTime: datefn(0).beginTime,
					endTime: datefn(0).endTime, 
				},
				orderByParDic: {
					searchIndex: 0,
					// ratio: 0,
					// popularityIndex: 0
				}
			})
		},

		destroyed() {},

		methods: {
			changeFun(value) {//切换国家
				this.showList.map(ele=>{
					ele.one = false
					ele.two = false
				})
				this.showList[0].one = true

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
						minRatio: this.isNull(this.seacrchDataTrue.minRatio),
						maxRatio: this.isNull(this.seacrchDataTrue.maxRatio),
						minAppLength: this.isNull(this.seacrchDataTrue.minAppLength),
						maxAppLength: this.isNull(this.seacrchDataTrue.maxAppLength)
					},
					orderByParDic: {
						searchIndex: 0,
						// ratio: 0,
						// popularityIndex: 0
					}
				})
			},

			changeDateFun(value) {//切换日期 
				this.showList.map(ele=>{
						ele.one = false
						ele.two = false
					})
				this.showList[0].one = true

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
						minRatio: this.isNull(this.seacrchDataTrue.minRatio),
						maxRatio: this.isNull(this.seacrchDataTrue.maxRatio),
						minAppLength: this.isNull(this.seacrchDataTrue.minAppLength),
						maxAppLength: this.isNull(this.seacrchDataTrue.maxAppLength)
					},
					orderByParDic: {
						searchIndex: 0,
						// ratio: 0,
						// popularityIndex: 0
					}
				})
			},

			paiClick(num, name) { //排序的按钮
				this.showList.map((ele, index) => {
					ele.one = false;
					ele.two = false;
				});
				this.showList[num][name] = true;
				if(num == 0) {
					this.sortDate = {
						one: 'searchIndex',
						two: name == 'one' ? 0 : 1
					}
				}else if(num == 1) {
					this.sortDate = {
						one: 'popularityIndex',
						two: name == 'one' ? 0 : 1
					}
				}else{
					this.sortDate = {
						one: 'ratio',
						two: name == 'one' ? 0 : 1
					}
				}
				let obj = {}
					obj[this.sortDate.one] = this.sortDate.two
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
						minRatio: this.isNull(this.seacrchDataTrue.minRatio),
						maxRatio: this.isNull(this.seacrchDataTrue.maxRatio),
						minAppLength: this.isNull(this.seacrchDataTrue.minAppLength),
						maxAppLength: this.isNull(this.seacrchDataTrue.maxAppLength)
					},
					orderByParDic:obj  
				})
			}, 

			addCiClick(index, num, name) { //收藏操作
				if(num == 0) {
					this.tableData.list[index].hotKeywordTemStatus = 1
					this.AjaxRemove(name, 0) //添加
				} else {
					this.tableData.list[index].hotKeywordTemStatus = 0
					this.AjaxRemove(name, 1) //删除
				}
			},
			routerClick(id) { //点击跳转，回到顶部，切换回历史列表
				this.$router.push({
					path: '/rankingDetails-List',
					query: {
						key: id,
						country: this.countryNow
					}
				}) 
			},

			searchMoreClick () { //模糊查询
				this.showList.map(ele=>{
						ele.one = false
						ele.two = false
					})
				this.showList[0].one = true

				for(var i in this.seacrchData) {   
					if(isNaN( this.seacrchData[i] ) && this.seacrchData[i] != '' || parseInt(this.seacrchData[i])<0 ) {
						this.$message({
							message: '搜索内容必须为大于等于0的数字',
							type: 'warning'
						}); 
						return false
					}  
				} 
				if(this.seacrchData.maxSearchIndex != ''){
					if(parseInt(this.seacrchData.maxSearchIndex) < parseInt(this.seacrchData.minSearchIndex)) {
						this.$message({
							message: '热度：最大值必须大于最小值',
							type: 'warning'
						}); 
						return false
					}
				}
				if(this.seacrchData.maxRatio != '') {
					if(parseInt(this.seacrchData.maxRatio) < parseInt(this.seacrchData.minRatio)) {
						this.$message({
							message: '展示量占比：最大值必须大于最小值',
							type: 'warning'
						}); 
						return false
					}
				}
				if(this.seacrchData.maxAppLength != '') {
					if(parseInt(this.seacrchData.maxAppLength) < parseInt(this.seacrchData.minAppLength)) {
						this.$message({
							message: '近期竞价APP：最大值必须大于最小值',
							type: 'warning'
						}); 
						return false
					}
				} 
				if(this.zTest(this.seacrchData.maxSearchIndex) || this.zTest(this.seacrchData.minSearchIndex) || this.zTest(this.seacrchData.maxAppLength) || this.zTest(this.seacrchData.minAppLength)) {
					this.$message({
						message: '必须为大于等于0的正整数',
						type: 'warning'
					}); 
					return false
				}
				this.seacrchDataTrue = this.seacrchData

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
						minRatio: this.isNull(this.seacrchDataTrue.minRatio),
						maxRatio: this.isNull(this.seacrchDataTrue.maxRatio),
						minAppLength: this.isNull(this.seacrchDataTrue.minAppLength),
						maxAppLength: this.isNull(this.seacrchDataTrue.maxAppLength)
					},
					orderByParDic: {
						searchIndex: 0
					}
				}) 
			},

			keywordClick () {//input搜索
				if(this.searchKeyWord == ''){
					this.$message({
						message: '搜索内容不能为空',
						type: 'warning'
					}); 

					return false
				}
				this.searchKeyWordTrue = this.searchKeyWord
				this.showList.map(ele=>{
						ele.one = false
						ele.two = false
					})
				this.showList[0].one = true

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
						minRatio: this.isNull(this.seacrchDataTrue.minRatio),
						maxRatio: this.isNull(this.seacrchDataTrue.maxRatio),
						minAppLength: this.isNull(this.seacrchDataTrue.minAppLength),
						maxAppLength: this.isNull(this.seacrchDataTrue.maxAppLength)
					},
					orderByParDic: {
						searchIndex: 0
					}
				}) 
			},


			zTest(data) {//正则验证
				let ZZ = /^([1-9]\d*|[0]{1,1})$/  
				if( data != '' && !ZZ.test(data)) {
					return true
				}else{
					return false
				}
			},

			isNull(data) {//判断是否为空
				if(data == '') {
					return 0
				}else{
					return data
				}
			},

			handleSizeChange(val) {
				let obj = {}
					obj[this.sortDate.one] = this.sortDate.two
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
						minRatio: this.isNull(this.seacrchDataTrue.minRatio),
						maxRatio: this.isNull(this.seacrchDataTrue.maxRatio),
						minAppLength: this.isNull(this.seacrchDataTrue.minAppLength),
						maxAppLength: this.isNull(this.seacrchDataTrue.maxAppLength)
					},
					orderByParDic: obj
				})
				$(window).scrollTop($('#ta2').offset().top)
			},

			handleCurrentChange(val) {
				let obj = {}
					obj[this.sortDate.one] = this.sortDate.two
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
						minRatio: this.isNull(this.seacrchDataTrue.minRatio),
						maxRatio: this.isNull(this.seacrchDataTrue.maxRatio),
						minAppLength: this.isNull(this.seacrchDataTrue.minAppLength),
						maxAppLength: this.isNull(this.seacrchDataTrue.maxAppLength)
					},
					orderByParDic: obj
				})
				$(window).scrollTop($('#ta2').offset().top)
			},

			excelOut() { //表格导出 
				excel('ta2', 20, `<tr><th>关键词</th><th>搜索指数</th><th>流行度</th><th>展示量占比</th><th>预测出价</th></tr>`, [6,5], 'tab')
			},

			keywordRouter() { //竞品对比跳转
				this.$router.push({path: '/keyword-comparison-list' , query: {key: this.countryNow , id: this.appData.appStoreId}})
			},

			AjaxGetAppInfo() {//初次加载
				this.loading = this.$loading(this.loadingopaction)
				let url = '/api/v1/IntellSearchApi/APPDetail/GetAppInfo?appStoreId='+this.$route.query.id+'&nationId='+this.$route.query.country

				this.$https.get(url)
				.then((res)=>{ 
					//res.data.resultCode = 404
					if(res.data.resultCode == 1000) {
						res.data.data.show = true
						this.appData = res.data.data
					}else if(res.data.resultCode == 404) {
						res.data.data.show = false
						this.appData = res.data.data
					}
					this.loading.close() 
				})			 
			},

			AjaxGetAppHistoryKeywordList(obj) {//获取历史列表
				this.loading = this.$loading(this.loadingopaction)
				let url = '/api/v1/IntellSearchApi/APPDetail/GetAppHistoryKeywordList'
				
				this.$https.post(url , JSON.stringify(obj))
				.then((res)=>{ 
					//res.data.resultCode = 404
					if(res.data.resultCode == 1000){
						this.tableShow = true
					}else if(res.data.resultCode == 404) {
						this.tableShow = false
					}
					this.tableData = res.data.data 
					this.loading.close() 
				})

			},

			AjaxRemove(name, type) { //操作关键词ajax
				let url = '/api/v1/IntellSearchApi/HotKeyword/OperatKeywords'
				let data = {
					"keywordName": name,
					"hotKeywordActionType": type
				}
				let data1 = JSON.stringify(data)
				return this.$https.post(url, data1)
			},
		}
	}; 
</script>