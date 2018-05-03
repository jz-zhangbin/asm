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
			<tr class="table_data_tr" v-for="(ele,index) in tableInner" :key="index">
				<td>{{index+1}}</td>
				<td class="rou"><span>英雄联盟LOL</span></td>
				<td>24579</td>
				<td>5496</td>
				<td>0394</td>
				<td>4855</td>
				<td>
					<div class="sl_t_dis" v-if="ele.show">
						<i class="iconfont icon-plus-add" @click="addCiClick(index)"></i>
						<span class="sl_t_is" style="width:114px;"> 
                  添加至新建词组
                </span>
						<span class="sl_t_san"></span>
					</div>
					<div class="sl_t_dis" v-if="!ele.show">
						<i class="iconfont icon-xuanze" style="color:#43c2ac;" @click="addCiClick(index)"> </i>
						<span class="sl_t_is" style="width:114px;"> 
                  从新建词组删除
                </span>
						<span class="sl_t_san"></span>
					</div>
				</td>
			</tr>
			<!-- 暂无关键词 -->
			<tr>
				<td colspan="7">该关键词暂无竞价数据</td>
			</tr>
		</table>
		<!-- 分页 -->
		<div class="page_index">
			<div>{{pagedata}}</div>
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
				tableInner: [{
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
			//添加至收藏
			addCiClick(index) {
				this.tableInner[index].show = !this.tableInner[index].show;
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