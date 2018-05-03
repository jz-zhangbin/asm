<style lang='less' scoped> 
	@import url('../../base/commonJS/css.less');
	.rdlh_index {
		width: 100%;
		margin-top: 25px;
		.rdlh_checketout {
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
		.rdlh_table {
			width: 100%;
			table {
				width: 100%;
				border: 1px solid #dee2e6; 
			} 
		}  
	}
</style>
<template>
	<div class="rdlh_index">
		<div class="rdlh_checketout">
			<span @click="excelOut">
				<i class="iconfont icon-download"></i> 导出
			</span>
		</div>
		<div class="rdlh_table">
			<table id="table1">
				<tr>
					<th style="width: 40%">关键词</th>
					<th style="width: 8%" class="sl_table_po">
						<div class="sl_table_flex">
							流行度
							<div class="sl_t_dis">
								<i class="iconfont icon-wenhao-fill"> </i>
								<span class="sl_t_is" style="width:280px;">
                    流行度来源于App Store官方数据。该指数代表次关键词在App Store中的搜索流行度，数值最高为100。
                  </span>
								<span class="sl_t_san"></span>
							</div>
						</div>
					</th>
					<th style="width: 22%" class="sl_table_po">
						<div class="sl_table_flex">
							搜索指数
							<div class="sl_t_dis">
								<i class="iconfont icon-wenhao-fill"> </i>
								<span class="sl_t_is" style="width:280px;">
                      搜索指数来源于App Store官方数据。该指数代表次关键词在App Store中的搜索热度。一般来说，指数越高，则该次在每天被搜索的次数也越多。
                    </span>
								<span class="sl_t_san"></span>
							</div>
						</div>
					</th>
					<th style="width: 22%" class="sl_table_po">
						<div class="sl_table_flex">
							近期竞价APP
							<div class="sl_t_dis">
								<i class="iconfont icon-wenhao-fill"> </i>
								<span class="sl_t_is" style="width:280px;"> 
                      近7天竞价过该关键词APP数量
                    </span>
								<span class="sl_t_san"></span>
							</div>
						</div>
					</th>
					<th style="width: 8%" class="sl_table_po">
						操作
					</th>
				</tr>
				<tr v-for="(ele,index) in tableData" :key="index" class="table_td_cont">
					<td style="width: 40%" class="sl_dt_name" @click="routerClick">{{ele.name}}</td>
					<td style="width: 8%">{{ele.liu}}</td>
					<td style="width: 22%">{{ele.sou}}</td>
					<td style="width: 22%" class="sl_dt_img">
						<div>
							<!-- 最多显示四个 -->
							<img :src="item" alt="" v-for="(item,index2) in ele.imgList" :key="index2" v-if="index2<4">
							<span v-if="ele.imgList.length>4" @click="routerClick" >{{ele.imgList.length}}&gt;</span>
						</div>
					</td>
					<td style="width: 8%">
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
	</div>
</template>

<script>
	import method1 from "@commonJS/excel";
	import usersign from '@components/User-Sign'
	export default {
		data() {
			return {
				currentPage3: 1, //当前页
				userType: false, //用户登录状态
				total: 98, //总数
				userType: false, //用户登录状态
				tableData: [{
						name: "部落冲突coc",
						liu: 100,
						sou: 10234,
						imgList: [
							require("../../images/moni/appimg_03.png"),
							require("../../images/moni/appimg_03.png")
						],
						show: true
					},
					{
						name: "部落冲突coc",
						liu: 100,
						sou: 10234,
						imgList: [
							require("../../images/moni/appimg_03.png"),
							require("../../images/moni/appimg_03.png"),
							require("../../images/moni/appimg_03.png"),
							require("../../images/moni/appimg_03.png"),
							require("../../images/moni/appimg_03.png")
						],
						show: false
					}
				]
			};
		},

		components: {
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

		updated() {},

		mounted() {},

		destroyed() {},

		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			//添加至收藏
			addCiClick(index) {
				this.tableData[index].show = !this.tableData[index].show;
			},
			excelOut() {
				//表格导出
				method1("table1");
			},
			routerClick() { 
				this.$router.push({path: '/rankingDetails-List', query: {key:123}})
				$(window).scrollTop(0)
			}
		}
	};
</script>