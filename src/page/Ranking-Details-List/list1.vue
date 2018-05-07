<style lang='less' scoped> 
	@import url('../../base/commonJS/css.less'); 
	.key_list1_index {
		width: 100%;
		.kl_top {
			display: flex;
			justify-content: space-between;
			margin-top: 25px;
		}
		.kl_top_right {
			display: flex;
		}
		.kltr_btn {
			display: block;
			height: 32px;
			border: 1px solid @border;
			border-radius: 4px;
			line-height: 32px;
			padding: 0 12px;
			margin-left: 16px;
			cursor: pointer;
		}
		.kl_table {
			width: 100%;
			margin-top: 25px;
			table {
				width: 100%;
				border: 1px solid #dee2e6;
				tr { 
					//表格内容
					&.table_data_tr {
						td {
							height: 70px;
						}
						.table_datr_td {
							cursor: pointer;
							display: flex;
							box-sizing: border-box;
							padding-left: 28px;
							img {
								width: 54px;
								height: 54px;
								border-radius: 6px;
								margin-right: 15px;
							}
							p {
								text-align: left !important;
								span {
									display: block;
									font-size: 12px;
									color: #aaa;
									&:first-child {
										font-size: 14px;
										color: @font_color;
										font-weight: 600;
									}
								}
							}
						}
						.table_datr_p {
							p {
								color: #aaa;
								&:first-child {
									color: @color;
									font-weight: 600;
								}
							}
						}
					}
				}
			}
		}   
	}
</style>

</style>
<style lang='less'>
	.key_list1_index {
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
</style>
<template>
	<div class="key_list1_index">
		<div class="kl_top">
			<el-select v-model="value" @change="changeFun(value)">
				<el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<div class="kl_top_right">
				<span class="kltr_btn" @click="pieClick">
          <i class="iconfont icon-tongji5"></i>
          展示量占比图
          </span>
				<span class="kltr_btn" @click="excelOut">
          <i class="iconfont icon-download"></i>
          导出
        </span>
			</div>
		</div>
		<div class="kl_table">
			<!-- 头部表格 -->
			<table id="ta2">
				<tr>
					<th style="width: 30%">应用</th>
					<th style="width: 14%" class="sl_table_po">
						<div class="sl_table_flex">
							展示量占比
							<div class="table_tandb">
								<span @click="paiClick(0,'one')" :class="{bandb_one: showList[0].one}"></span>
								<span @click="paiClick(0,'two')" :class="{bandb_two: showList[0].two}"></span>
							</div>
							<div class="sl_t_dis">
								<i class="iconfont icon-wenhao-fill"> </i>
								<span class="sl_t_is" style="width:260px;">
                    该APP在该关键词的总体广告展示量中获得的广告展示量比
                  </span>
								<span class="sl_t_san"></span>
							</div>
						</div>
					</th>
					<th style="width: 14%" class="sl_table_po">
						<div class="sl_table_flex">
							预测出价
							<div class="sl_t_dis">
								<i class="iconfont icon-wenhao-fill"> </i>
								<span class="sl_t_is" style="width:260px;">
                        该APP竞价该关键词的预计投放价格
                    </span>
								<span class="sl_t_san"></span>
							</div>
						</div>
					</th>
					<th style="width: 14%" class="sl_table_po">
						<div class="sl_table_flex">
							搜索排名
							<div class="table_tandb">
								<span @click="paiClick(1,'one')" :class="{bandb_one: showList[1].one}"></span>
								<span @click="paiClick(1,'two')" :class="{bandb_two: showList[1].two}"></span>
							</div>
							<div class="sl_t_dis">
								<i class="iconfont icon-wenhao-fill"> </i>
								<span class="sl_t_is" style="width:260px;"> 
                        该APP在该关键词的App Store搜索结果中的排名
                    </span>
								<span class="sl_t_san"></span>
							</div>
						</div>
					</th>
					<th style="width: 14%" class="sl_table_po">
						<div class="sl_table_flex">
							总榜
							<div class="table_tandb">
								<span @click="paiClick(2,'one')" :class="{bandb_one: showList[2].one}"></span>
								<span @click="paiClick(2,'two')" :class="{bandb_two: showList[2].two}"></span>
							</div>
						</div>
					</th>
					<th style="width: 14%" class="sl_table_po">
						<div class="sl_table_flex">
							分类榜
							<div class="table_tandb">
								<span @click="paiClick(3,'one')" :class="{bandb_one: showList[3].one}"></span>
								<span @click="paiClick(3,'two')" :class="{bandb_two: showList[3].two}"></span>
							</div>
						</div>
					</th>
				</tr>

				<!-- 表格内容 -->
				<tr class="table_data_tr" v-for="(ele,index) in tableInner" :key="index">
					<td>
						<div class="table_datr_td" @click="routerClick">
							<img :src="ele.img" alt="">
							<p>
								<span>{{ele.name}}</span>
								<span>ID: &nbsp;{{ele.ID}}</span>
								<span>开发商: &nbsp;{{ele.made}}</span>
							</p>
						</div>
					</td>
					<td>
						{{ele.amount}}
						<i class="iconfont icon-icon-test" style="color: #2d76ed;" @click="brokenClick(index)"></i>
					</td>
					<td>--</td>
					<td>--</td>
					<td class="table_datr_p">
						<p>{{ele.zong.pai}}</p>
						<p>{{ele.zong.money}}</p>
					</td>
					<td class="table_datr_p">
						<p>{{ele.fen.pai}}</p>
						<p>{{ele.fen.type}} {{ele.fen.money}}</p>
					</td>
				</tr>
				<!-- 暂无关键词 -->
				<tr>
					<td colspan="6" style="height: 150px">该关键词暂无竞价数据</td>
				</tr>
				<!-- 插入折线图 -->
				<!-- <tr class="table_datr_broken">
              <td colspan="6">
                <div></div>  
              </td> 
            </tr> -->
			</table>
			<!-- 分页 -->
			<div class="page_index">
				<div>{{pagedata}}</div>
				<div>
					<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="20" layout="prev, pager, next, jumper" :total="total">
					</el-pagination>
				</div>
			</div>
			<usersign v-if="!userType"></usersign>
		</div>
		<!-- 饼状图 --> 
		<transition name="el-fade-in-linear">
			<pie v-if="pieShow"></pie>
		</transition> 
	</div>
</template>

<script>
	import method1 from "@commonJS/excel";
	import pie from "./pie-chart";
	import usersign from '@components/User-Sign'
	import { datefn } from '@commonJS/functionJS'
	export default {
		data() {
			return {
				value: "",
				currentPage3: 1, //当前页 
				total: 98, //总数 
				options3: [{
						value: "1",
						label: ''
					},
					{
						value: "2",
						label: "昨天"
					},
					{
						value: "3",
						label: "近7天"
					},
					{
						value: "4",
						label: "近15天"
					},
					{
						value: "5",
						label: "近30天"
					}
				],
				pieShow: false, 
				value: "",
				showList: [{
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
					},
					{
						one: false,
						two: false
					}
				],
				//tableInner: [],
				createBrokenIndex: null,//折线图下标
				myChart: null,
			};
		},

		props: {
			valueData: {},
			userType: {},
			tableInner: {}
		},
		components: {
			pie,
			usersign
		},

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

		created() {},

		watch: {
			valueData() {
				//console.log(this.valueData, '国家切换请求' , this.$parent.routerQuery)//监听父级中select数据，更新页面
			}
		},

		updated() {},

		mounted() {  
			this.options3[0].value  = datefn()
			this.value = this.options3[0].value
			
		},

		destroyed() {},

		methods: {
			pieClick() {
				this.pieShow = true;
			},
			changeFun(value) {
				console.log(value)
			},
			paiClick(num, name) {
				console.log(num,name)
				//排序的按钮
				this.showList.map((ele, index) => {
					ele.one = false;
					ele.two = false;
				});
				this.showList[num][name] = true;
			},
			excelOut() {
				//表格导出
				method1("ta2");
			},
			brokenClick(index) { //添加折线图
				$('.table_datr_broken').remove() //删除所有折线 
				if(this.createBrokenIndex != index) {
					let domstring = ` <tr class="table_datr_broken" style="height: 390px;background: #f7f7f7;" >
                            <td colspan="6" style="position:relative"> 
                              <div style="position: absolute; top:0; left: 0;width: 1200px;height: 390px;" id="myChart"></div>  
                            </td> 
                          </tr>`
					$('#ta2 tr').eq(index + 1).after(domstring) //添加兄弟节点
					//进行请求，渲染折线图
					this.myChart = this.$echarts.init(document.getElementById("myChart"));
					this.myChart.setOption({
						xAxis: {
							type: 'category',
							data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						yAxis: {
							type: 'value'
						},
						series: [{
							data: [820, 932, 901, 934, 1290, 1330, 1320],
							type: 'line',
							itemStyle: {
								normal: {
									color: '#2d76ed'
								}
							}
						}]
					})
					//标记下标
					this.createBrokenIndex = index
				} else {
					//如果当前相当就清除下标
					this.createBrokenIndex = null
				}

			},

			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			routerClick() {//应用跳转
				this.$router.push('/application')
			}
		}
	};
</script>