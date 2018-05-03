<style lang='less' scoped>
	@color: #2d76ed;
	@bgk: #f7f7f7;
	@font_color: #6c757d;
	@border: #dee2e6;
	@btnhover: #1559c8;
	@import url('./../../base/commonJS/scroll.css');
	.iconfont {
		cursor: pointer;
	}
	
	.kcl_index {
		min-width: 1200px;
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
				width: 100%;
				display: flex;
			}
			.kcl_duibi_left {
				width: 45%;
				height: 85px;
				display: flex;
				position: relative;
				img {
					width: 85px;
					height: 85px;
					border-radius: 6px;
					margin-right: 12px;
				}
				section {
					box-sizing: border-box;
					padding-top: 8px;
					h1 {
						font-size: 21px;
						color: @color;
						margin-bottom: 4px;
					}
					p {
						margin-bottom: 4px;
						min-width: 490px;
						span {
							display: inline-block;
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
				width: 45%;
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
						width: 400px;
						height: 0px;
						position: absolute;
						top: 60px;
						left: 0;
						z-index: 100;
						overflow: hidden;
					}
					ul {
						width: 398px;
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
								width: 23px;
								height: 22px;
								border-radius: 4px;
								margin-right: 12px;
							}
							span {
								width: 410px;
								font-weight: 540;
								color: #000;
							}
							b {
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
						}
					}
				}
			}
			.kcl_vs {
				width: 10%;
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
						left: 43%;
						color: @color;
						transform: translateY(-50%);
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
	}
</style>
<template>
	<div class="kcl_index">
		<v-search-top></v-search-top>
		<div class="kcl_body">
			<banner :bannerName='bannerName'></banner>
			<div class="kcl_top">
				<p class="sl_center_p">地区</p>
				<el-select v-model="value" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<!-- 对比 -->
			<div class="kcl_duibi">
				<div class="kcl_dui_cont">
					<!-- 从详情页跳转过来的 -->
					<div class="kcl_duibi_left">
						<img src="../../images/moni/appimg_1123_03.png" alt="">
						<section>
							<h1>Find My Family, Friends, Phone</h1>
							<p>
								<span style="width: 16%;">开发商</span>
								<span style="width: 12%;">分类</span>
								<span style="width: 21%;">AppID</span>
								<span style="width: 15%;">价格</span>
								<span style="width: 12%;">总榜</span>
								<span style="width: 14%;">分类榜</span>
							</p>
							<p>
								<span style="width: 16%; color:#000">Life</span>
								<span style="width: 12%; color:#2d76ed">娱乐</span>
								<span style="width: 21%; color:#2d76ed">124332</span>
								<span style="width: 15%; color:#000">免费</span>
								<span style="width: 12%; color:#000">186</span>
								<span style="width: 14%; color:#000">239</span>
							</p>
						</section>
					</div>
					<div class="kcl_vs">
						vs
					</div>
					<!-- 在对比页选中的 -->
					<div class="kcl_duibi_left" v-if="appDataShow">
						<img src="../../images/moni/appimg_1123_03.png" alt="">
						<section>
							<h1>Find My Family, Friends, Phone</h1>
							<p>
								<span style="width: 16%;">开发商</span>
								<span style="width: 12%;">分类</span>
								<span style="width: 21%;">AppID</span>
								<span style="width: 15%;">价格</span>
								<span style="width: 12%;">总榜</span>
								<span style="width: 14%;">分类榜</span>
							</p>
							<p>
								<span style="width: 16%; color:#000">Life</span>
								<span style="width: 12%; color:#2d76ed">娱乐</span>
								<span style="width: 21%; color:#2d76ed">124332</span>
								<span style="width: 15%; color:#000">免费</span>
								<span style="width: 12%; color:#000">186</span>
								<span style="width: 14%; color:#000">239</span>
							</p>
						</section>
						<i class="iconfont icon-cha" @click="close"></i>
					</div>
					<!-- 搜索app -->
					<div class="kcl_duibi_right" v-if="!appDataShow">
						<p>选择APP</p>
						<div class="kc_ct_search">
							<input type="text" placeholder="请输入应用名称/App ID/应用链接搜索">
							<div class="kc_over">
								<ul>
									<li @click="overLiClick">
										<img src="../../images/moni/appimg_03.png" alt="">
										<span>今日头条-娱乐新闻</span>
										<b>tianjinjuzhangguanggao</b>
									</li>
									<li @click="overLiClick">
										<img src="../../images/moni/appimg_03.png" alt="">
										<span>今日头条-娱乐新闻</span>
										<b>tianjinjuzhangguanggao</b>
									</li>
									<li @click="overLiClick">
										<img src="../../images/moni/appimg_03.png" alt="">
										<span>今日头条-娱乐新闻</span>
										<b>tianjinjuzhangguanggao</b>
									</li>
									<li @click="overLiClick">
										<img src="../../images/moni/appimg_03.png" alt="">
										<span>今日头条-娱乐新闻</span>
										<b>tianjinjuzhangguanggao</b>
									</li>
									<li @click="overLiClick">
										<img src="../../images/moni/appimg_03.png" alt="">
										<span>今日头条-娱乐新闻</span>
										<b>tianjinjuzhangguanggao</b>
									</li>
									<li @click="overLiClick">
										<img src="../../images/moni/appimg_03.png" alt="">
										<span>今日头条-娱乐新闻</span>
										<b>tianjinjuzhangguanggao</b>
									</li>
									<li @click="overLiClick">
										<img src="../../images/moni/appimg_03.png" alt="">
										<span>今日头条-娱乐新闻</span>
										<b>tianjinjuzhangguanggao</b>
									</li>
									<li @click="overLiClick">
										<img src="../../images/moni/appimg_03.png" alt="">
										<span>今日头条-娱乐新闻</span>
										<b>tianjinjuzhangguanggao</b>
									</li>
								</ul>
							</div>
						</div>
						<button @click="btnClick" class="btnclass">
							<i class="iconfont icon-icon-plus-search"></i>
						</button>
					</div>
				</div>
				<div class="kcl_dui_star" v-if="appDataShow">
					<button @click="starClick">开始对比</button>
				</div>
				<!-- 竞品对比结果-第一个表格 -->
				<div class="kcl_table_one" v-if="tableShow">
					<h2>竞品对比结果</h2>
					<table class="kcl_table1">
						<tr>
							<th style="width: 28%">#</th>
							<th style="width: 19%">已选APP (左)</th>
							<th style="width: 15%"></th>
							<th style="width: 19%">竞品APP (右)</th>
							<th style="width: 19%">操作</th>
						</tr>
						<tr>
							<td>ASM竞价词数 </td>
							<td class="td_color">23213</td>
							<td></td>
							<td class="td_color">3234</td>
							<td><i class="iconfont icon-more"></i></td>
						</tr>
						<tr>
							<td class="td_weight">相同竞价词数 </td>
							<td class="td_color"></td>
							<td class="td_color">4634</td>
							<td class="td_color"></td>
							<td></td>
						</tr>
						<tr>
							<td>不同竞价词数 </td>
							<td class="td_color">23213</td>
							<td></td>
							<td class="td_color">3234</td>
							<td></td>
						</tr>
						<tr class="td_height">
							<td class="td_weight">竞争度(竞价词重合度) </td>
							<td class="td_color"></td>
							<td class="td_animous">
								<div>
									<section class="yuan" id="myChart1"> </section>
									<span>100%</span>
								</div>
							</td>
							<td class="td_color"></td>
							<td></td>
						</tr>
						<tr>
							<td>8000以上热度竞价词数 </td>
							<td class="td_color">23213</td>
							<td></td>
							<td class="td_color">3234</td>
							<td><i class="iconfont icon-more"></i></td>
						</tr>
						<tr>
							<td>6000-8000热度竞价词数 </td>
							<td class="td_color">23213</td>
							<td></td>
							<td class="td_color">3234</td>
							<td><i class="iconfont icon-more"></i></td>
						</tr>
						<tr>
							<td>4605-6000热度竞价词数 </td>
							<td class="td_color">23213</td>
							<td></td>
							<td class="td_color">3234</td>
							<td><i class="iconfont icon-more"></i></td>
						</tr>
						<tr>
							<td>低于4605热度竞价词数 </td>
							<td class="td_color">23213</td>
							<td></td>
							<td class="td_color">3234</td>
							<td><i class="iconfont icon-more"></i></td>
						</tr>
					</table>
				</div>
				<!--三个table的切换  -->
				<div class="kcl_table_three" v-if="tableShow">
					<div class="kcl_table_btn">
						<span v-for="(ele,index) in components_list" :key="index" :class="{rdl_section_is: index == components_index}" @click="componentsClick(index)">{{ele.name}}</span>
					</div>
					<!-- table组件 -->
					<component :is="currentView"></component>
					<usersign v-if="!userType"></usersign>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import banner from "@components/Banner";
	import list1 from './list1.vue'
	import list2 from './list2.vue'
	import list3 from './list3.vue'
	import usersign from '@components/User-Sign'
	export default {
		data() {
			return {
				userType: false, //用户登录状态
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
				bannerName: "竞品对比",
				appDataShow: false,
				tableShow: false,
				components_list: [{
						name: '相同竞价词',
						com: list1
					},
					{
						name: '不同竞价词',
						com: list2
					}, {
						name: '所有竞价词',
						com: list3
					}
				],
				components_index: 0,
				currentView: list1,
				myChart: null
			};
		},

		components: {
			banner,
			list1,
			list2,
			list3,
			usersign
		},

		computed: {},

		created() {},

		updated() {},

		mounted() {
			this.value = this.options[0].value;
			//关闭搜索列表
			$(document).bind("click", function(e) {
				var target = $(e.target);
				if(target.closest(".btnclass").length == 0) {
					$(".kc_over").animate({
							height: "0px"
						},
						200
					);
				}
			});
		},

		destroyed() {},

		methods: {
			btnClick() {
				$(".kc_over").animate({
						height: "242px"
					},
					200
				);
			},
			overLiClick() {
				//选中app请求数据，进行比较
				this.appDataShow = true
			},
			close() {
				//关闭选中的app
				this.appDataShow = false
				this.tableShow = false
			},
			starClick() {
				//点击开始对比
				this.tableShow = true
				setTimeout(() => {
					// 基于准备好的dom，初始化echarts实例
					this.myChart = this.$echarts.init(document.getElementById("myChart1"));
					this.myChart.setOption({
						tooltip: {
							trigger: 'item',
							formatter: "{a} <br/>{b}: {c} ({d}%)"
						},
						series: [{
							name: '竞价词重合度',
							type: 'pie',
							radius: ['60%', '80%'],
							labelLine: {
								normal: {
									show: false
								}
							},
							color: ['#2d76ed', '#dee2e6'],
							data: [{
									value: 30,
									name: '相同'
								},
								{
									value: 130,
									name: '不相同'
								}
							]
						}]
					});
				}, 300)
			},
			drawaCircle(baifenbi) {

			},
			//table切换
			componentsClick(index) {
				this.components_index = index
				this.currentView = this.components_list[index].com
			}
		}
	};
</script>