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
			img {
				width: 124px;
				height: 124px;
				border-radius: 8px;
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
				<img :src="appData.img" alt="">
				<img src="../../images/moni/appimg_1123_03.png" alt="">
				<div class="apl_bt_ct">
					<h1>{{appData.name}}</h1>
					<p>
						<span style="width: 140px">开发商</span>
						<span style="width: 74px">分类</span>
						<span style="width: 138px">AppId</span>
						<span style="width: 74px">价格</span>
						<span style="width: 74px">总榜</span>
						<span style="width: 140px">分类榜</span>
					</p>
					<p>
						<span style="width: 140px; color:#000;">{{appData.made}}</span>
						<span style="width: 74px; color:#2d76ed;">{{appData.fenlei}}</span>
						<span style="width: 138px; color:#2d76ed;">{{appData.id}}</span>
						<span style="width: 74px; color:#000;">{{appData.jiage}}</span>
						<span style="width: 74px; color:#000;">{{appData.zongbang}}</span>
						<span style="width: 140px; color:#000;">{{appData.fenleibang}}</span>
					</p>
					<p>
						<span style="width: 140px; color:#000;">-</span>
						<span style="width: 74px; color:#2d76ed;">-</span>
						<span style="width: 138px; color:#2d76ed;">-</span>
						<span style="width: 74px; color:#000;">-</span>
						<span style="width: 74px; color:#000;">-</span>
						<span style="width: 140px; color:#000;">-</span>
					</p>
				</div>
				<div class="apl_bt_btn">
					<span @click="keywordRouter">
                      <i class="iconfont icon-plus-add"></i>竞品对比
                  </span>
				</div>
			</div>
			<!-- 选择器 -->
			<div class="apl_body_cur">
				<p class="sl_center_p">地区</p>
				<el-select v-model="value" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="apl_body_h2">
				<h2>历史竞价关键词</h2>
			</div>
			<div class="apl_body_date">
				<el-select v-model="value1">
					<el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<div class="apl_checketout">
					<span  @click="excelOut">
						<i class="iconfont icon-download"></i> 导出
					</span>
				</div>
			</div>
			<!-- 表单详细搜索 -->
			<div class="apl_body_search">
				<div class="apl_bos_box">
					<p>热度</p>
					<div>
						<input type="text" placeholder="最小值">
						<input type="text" placeholder="最大值">
					</div>
				</div>
				<div class="apl_bos_box">
					<p>展示量占比(%)</p>
					<div>
						<input type="text" placeholder="最小值">
						<input type="text" placeholder="最大值">
					</div>
				</div>
				<div class="apl_bos_box">
					<p>近期竞价App数</p>
					<div>
						<input type="text" placeholder="最小值">
						<input type="text" placeholder="最大值">
					</div>
				</div>
				<button>搜索</button>
				<div class="apl_bos_right">
					<div class="apl_bos_input">
						<input type="text" placeholder="查找关键词">
						<i class="iconfont icon-icon-plus-search"></i>
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
					<tr v-for="(ele,index) in tableData" :key="index" class="table_td_cont">
						<td class="href_a">微信2.0.0</td>
						<td>2345</td>
						<td>144</td>
						<td>23%</td>
						<td>-</td>
						<td style="width: 20%" class="sl_dt_img">
							<div>
								<!-- 最多显示四个 -->
								<img :src="item" alt="" v-for="(item,index2) in ele.imgList" :key="index2" v-if="index2<4">
								<span v-if="ele.imgList.length>4">{{ele.imgList.length}}&gt;</span>
							</div>
						</td>
						<td style="width: 9%">
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
			</div> 
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
	import usersign from '@components/User-Sign'
	import method1 from "@commonJS/excel";
	export default {
		data() {
			return {
				currentPage3: 1, //当前页
				userType: false, //用户登录状态
				total: 98, //总数
				userType: false, //用户登录状态
				appData: {
					img: require("../../images/moni/appimg_05_03.png"),
					name: "Find My Family, Friends, Phone",
					made: "Life360",
					fenlei: "社交",
					id: "384830320",
					jiage: "免费",
					zongbang: "186",
					fenleibang: "16",
					show: true
				},
				options: [{
						value: "zh",
						label: "中国"
					},
					{
						value: "usa",
						label: "美国"
					}
				],
				value: "",
				value1: "",
				options1: [{
						value: "1",
						label: "2018-4-23 至 2018-5-1"
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
				tableData: [{
					imgList: [
						require("../../images/moni/appimg_03.png"),
						require("../../images/moni/appimg_03.png"),
						require("../../images/moni/appimg_03.png"),
						require("../../images/moni/appimg_03.png"),
						require("../../images/moni/appimg_03.png")
					],
					show: false
				}]
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

		mounted() {
			this.value = this.options[0].value;
			this.value1 = this.options1[0].value;
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
			},
			//添加至收藏
			addCiClick(index) {
				this.tableData[index].show = !this.tableData[index].show;
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			excelOut() {
				//表格导出
				method1("ta2");
			},
			keywordRouter() {
				//竞品对比跳转
				this.$router.push('/keyword-comparison-list')
			}
		}
	};
</script>