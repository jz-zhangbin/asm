<style lang='less' scoped>
	@import url('../../base/commonJS/css.less');
	.kcll1_index {
		width: 100%;
		.table_data_tr {
			td {
				height: 60px !important;
				&.rou {
					color: @color;
					cursor: pointer;
				}
			}
		}
	}
</style>
<template>
	<div class="kcll1_index">
		<table>
			<tr>
				<th style="width: 8%">#</th>
				<th style="width: 26%">关键词</th>
				<th style="width: 14%" class="sl_table_po">
					<div class="sl_table_flex">
						搜索指数
						<div class="table_tandb">
							<span @click="paiClick(0,'one')" :class="{bandb_one: showList[0].one}"></span>
							<span @click="paiClick(0,'two')" :class="{bandb_two: showList[0].two}"></span>
						</div>
						<div class="sl_t_dis">
							<i class="iconfont icon-wenhao-fill"> </i>
							<span class="sl_t_is" style="width:260px;">
                    搜索指数来源于App Store官方数据。该数据代表每个关键词在App Store的搜索热度，一般来说，指数越高，则该词每天被所搜的次数也越多。
                  </span>
							<span class="sl_t_san"></span>
						</div>
					</div>
				</th>
				<th style="width: 14%" class="sl_table_po">
					<div class="sl_table_flex">
						流行度
						<div class="table_tandb">
							<span @click="paiClick(1,'one')" :class="{bandb_one: showList[1].one}"></span>
							<span @click="paiClick(1,'two')" :class="{bandb_two: showList[1].two}"></span>
						</div>
						<div class="sl_t_dis">
							<i class="iconfont icon-wenhao-fill"> </i>
							<span class="sl_t_is" style="width:260px;"> 
                        流行度来源于App Store官方数据。该数据代表次关键词在App Store中的搜索流行度，数值最高为100。                    </span>
							<span class="sl_t_san"></span>
						</div>
					</div>
				</th>
				<th style="width: 14%">已选APP展示量比(左)</th>
				<th style="width: 14%">竞品APP展示量占比(右)</th>
				<th style="width: 10%">操作</th>
			</tr>

			<!-- 表格内容 -->
			<tr class="table_data_tr" v-for="(ele,index) in tableInner" :key="index" v-if="tableShow">
				<td>{{index | pageNum(currentPage3)}}</td>
				<td class="rou"><span>{{ele.keywordName}}</span></td>
				<td>{{ele.searchIndex}}</td>
				<td>{{ele.popularityIndex}}</td>
				<td>{{ele.selectedAppRatio}}</td>
				<td>{{ele.competitiveAppRatio}}</td>
				<td>
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
			<!-- 暂无关键词 -->
			<tr v-if="!tableShow">
				<td colspan="7">该关键词暂无竞价数据</td>
			</tr>
		</table>
		<!-- 分页 -->
		<div class="page_index" v-if="userType">
			<div>{{pagedata}}</div>
			<div>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="20" layout="prev, pager, next, jumper" :total="total">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	import { datefn } from '@commonJS/functionJS'
	export default {
		data() {
			return {
				showList: [{
						//控制排序的三角
						one: true,
						two: false
					},
					{
						one: false,
						two: false
					} 
				],
				loading: null,
				loadingopaction: {
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				},
				tableInner: [],
				tableShow: false,
				currentPage3: 1, //当前页 
				total: 98, //总数
				sortDate:{//排序
					one: 'searchIndex',
					two: 0
				},
			};
		},

		props: {
			userType: {}
		},

		components: {},

		computed: {
			pagedata() {
				if(this.currentPage3 * 20 <= this.total) {
					let ls = '当前第 ' + (((this.currentPage3 - 1) * 20) + 1) + '-' + this.currentPage3 * 20 + ', 共 ' + this.total
					return ls
				} else {
					let ls = '当前第 ' + (((this.currentPage3 - 1) * 20) + 1) + '-' + this.total + ', 共' + this.total
					return ls
				}
			} 
		},
		filters: {
			pageNum: function (value,currentPage3) {
				let num2 = currentPage3 - 1
				let num = (value + 1) + num2 * 20 
				return num
			}
		},

		created() {},

		updated() {},

		mounted() {
			this.Ajax(1)
		},

		destroyed() {},

		methods: {
			paiClick(num, name) {
				//排序的按钮
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
				} 
				this.Ajax(this.currentPage3)
			},
			addCiClick(index, num, name) { //收藏操作
				if(num == 0) {
					this.tableInner[index].hotKeywordTemStatus = 1
					this.AjaxRemove(name, 0) //添加
				} else {
					this.tableInner[index].hotKeywordTemStatus = 0
					this.AjaxRemove(name, 1) //删除
				}
			},
			handleSizeChange(val) {
				this.currentPage3 =  val*1 
				this.Ajax(this.currentPage3)
			},
			handleCurrentChange(val) {
				this.currentPage3 =  val*1 
				this.Ajax(this.currentPage3)
			},
			Ajax(pageIndex) {
				this.loading = this.$loading(this.loadingopaction)
				let url = '/api/v1/IntellSearchApi/CompetitiveAppAnalysis/GetCompetitiveAppAnalysisList' 
				let newobj = {}
					newobj[this.sortDate.one] = this.sortDate.two
				let obj = { 
					pageIndex,
					pageSize: 20,
					requestPar: {
						nationId: this.$parent.countryNow,
						selectedAppId: this.$parent.idLeft,
						competitiveAppId: this.$parent.idRight,
						beginTime: datefn(1)[1].data.beginTime,
						endTime: datefn(1)[1].data.endTime,
						competitiveType: 2, 
						orderType: 0
					},
					orderByParDic: newobj
				}
				
				this.$https.post(url , JSON.stringify(obj))
				.then((res) =>{
					this.loading.close() 
					if(res.data.resultCode == 1000) {
						this.tableShow = true
					}else if(res.data.resultCode == 404){
						this.tableShow = false
					}
					this.tableInner = res.data.data.list
					this.total = res.data.data.totalCount
				
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
	}
</script>