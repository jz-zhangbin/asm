<style lang='less' scoped>
	@import url('../../base/commonJS/css.less');
	.kcll2_index {
		width: 100%;
		.kcll2_table_box {
			width: 100%;
			display: flex;
		}
		.kcll2_table1 {
			width: 50%;
			.table_th_wei {
				th {
					font-size: 16px;
					color: @color;
				}
			}
		}
		.page_index{
			div{
				width: 50%;
				display: flex;
				justify-content: center !important;
			}
		}
		.table_data_tr {
			th,
			td {
				background: #fff !important;
				height: 60px !important;
				&.rou {
					color: @color;
					cursor: pointer;
				}
			}
			.table_tandb1 {
				span {
					&:first-child {
						top: 23px !important;
					}
					&:last-child {
						bottom: -19px !important;
					}
				}
			}
		}
	}
</style>
<template>
	<div class="kcll2_index">
		<div class="kcll2_table_box">
			<table class="kcll2_table1">
				<tr class="table_th_wei">
					<th colspan="5">已选APP关键词(左)</th>
				</tr>
				<tr class="table_data_tr">
					<td style="width: 9%">#</td>
					<td style="width: 30%">关键词</td>
					<td style="width: 28%" class="sl_table_po">
						<div class="sl_table_flex">
							<div>
								<p>搜索指数</p>
								<p>流行度</p>
							</div>
							<div class="table_tandb table_tandb1">
								<span @click="paiClick(0,'one')" :class="{bandb_one: showList[0].one}"></span>
								<span @click="paiClick(0,'two')" :class="{bandb_two: showList[0].two}"></span>
							</div>
						</div>
					</td>
					<td style="width: 18%">
						<div class="sl_table_flex">
							展示量占比
							<div class="table_tandb">
								<span @click="paiClick(1,'one')" :class="{bandb_one: showList[1].one}"></span>
								<span @click="paiClick(1,'two')" :class="{bandb_two: showList[1].two}"></span>
							</div>
						</div>
						<td style="width: 14%">操作</td>
				</tr>

				<!-- 表格内容 -->
				<tr class="table_data_tr" v-for="(ele,index) in tableInner1" :key="index">
					<td>{{index+1}}</td>
					<td class="rou"><span>英雄联盟LOL</span></td>
					<td>2457/234</td>
					<td>4855</td>
					<td>
						<div class="sl_t_dis" v-if="ele.show">
							<i class="iconfont icon-plus-add" @click="addCiClick1(index)"></i>
							<span class="sl_t_is" style="width:114px;"> 
                  添加至新建词组
                </span>
							<span class="sl_t_san"></span>
						</div>
						<div class="sl_t_dis" v-if="!ele.show">
							<i class="iconfont icon-xuanze" style="color:#43c2ac;" @click="addCiClick1(index)"> </i>
							<span class="sl_t_is" style="width:114px;"> 
                  从新建词组删除
                </span>
							<span class="sl_t_san"></span>
						</div>
					</td>
				</tr>
				<!-- 暂无关键词 -->
				<tr>
					<td colspan="5">该关键词暂无竞价数据</td>
				</tr>
			</table>

			<table class="kcll2_table1">
				<tr class="table_th_wei">
					<th colspan="5">已选APP关键词(右)</th>
				</tr>
				<tr class="table_data_tr">
					<td style="width: 9%">#</td>
					<td style="width: 30%">关键词</td>
					<td style="width: 28%" class="sl_table_po">
						<div class="sl_table_flex">
							<div>
								<p>搜索指数</p>
								<p>流行度</p>
							</div>
							<div class="table_tandb table_tandb1">
								<span @click="paiClick1(0,'one')" :class="{bandb_one: showList1[0].one}"></span>
								<span @click="paiClick1(0,'two')" :class="{bandb_two: showList1[0].two}"></span>
							</div>
						</div>
					</td>
					<td style="width: 18%">
						<div class="sl_table_flex">
							展示量占比
							<div class="table_tandb">
								<span @click="paiClick1(1,'one')" :class="{bandb_one: showList1[1].one}"></span>
								<span @click="paiClick1(1,'two')" :class="{bandb_two: showList1[1].two}"></span>
							</div>
						</div>
						<td style="width: 14%">操作</td>
				</tr>

				<!-- 表格内容 -->
				<tr class="table_data_tr" v-for="(ele,index) in tableInner2" :key="index">
					<td>{{index+1}}</td>
					<td class="rou"><span>英雄联盟LOL</span></td>
					<td>2457/234</td>
					<td>4855</td>
					<td>
						<div class="sl_t_dis" v-if="ele.show">
							<i class="iconfont icon-plus-add" @click="addCiClick2(index)"></i>
							<span class="sl_t_is" style="width:114px;"> 
                  添加至新建词组
                </span>
							<span class="sl_t_san"></span>
						</div>
						<div class="sl_t_dis" v-if="!ele.show">
							<i class="iconfont icon-xuanze" style="color:#43c2ac;" @click="addCiClick2(index)"> </i>
							<span class="sl_t_is" style="width:114px;"> 
                  从新建词组删除
                </span>
							<span class="sl_t_san"></span>
						</div>
					</td>
				</tr>
				<!-- 暂无关键词 -->
				<tr>
					<td colspan="5">该关键词暂无竞价数据</td>
				</tr>
			</table>
		</div>
		<!-- 分页 -->
		<div class="page_index">
			<div>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="20" layout="prev, pager, next, jumper" :total="total">
				</el-pagination>
			</div>
			<div>
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="20" layout="prev, pager, next, jumper" :total="total">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
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
				showList1: [{
						//控制排序的三角
						one: true,
						two: false
					},
					{
						one: false,
						two: false
					}
				],
				tableInner1: [{
					show: false
				}, {
					show: false
				}],
				tableInner2: [{
					show: false
				}, {
					show: false
				}],
				currentPage3: 1, //当前页
				userType: false, //用户登录状态
				total: 98, //总数
			};
		},

		components: {},

		computed: {
		},

		created() {},

		updated() {},

		mounted() {},

		destroyed() {},

		methods: {
			paiClick(num, name) {
				//排序的按钮
				this.showList.map((ele, index) => {
					ele.one = false;
					ele.two = false;
				});
				this.showList[num][name] = true;
			},
			paiClick1(num, name) {
				//排序的按钮
				this.showList1.map((ele, index) => {
					ele.one = false;
					ele.two = false;
				});
				this.showList1[num][name] = true;
			},
			//添加至收藏
			addCiClick1(index) {
				this.tableInner1[index].show = !this.tableInner1[index].show;
			},
			addCiClick2(index) {
				this.tableInner2[index].show = !this.tableInner2[index].show;
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
		}
	}
</script>