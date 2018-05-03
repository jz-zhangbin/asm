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
	
	.kc_index {
		min-width: 1200px;
		.kc_body {
			width: 100%;
			.kc_top {
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
			.kc_center {
				display: flex;
				justify-content: center;
				line-height: 60px;
				p {
					color: #000;
					font-weight: 520;
				}
				button {
					width: 60px;
					height: 60px;
					background: @color;
					border: none;
					border-radius: 6px;
					cursor: pointer;
					text-align: center;
					line-height: 60px;
					color: #f7f7f7;
					outline: none;
					&:hover {
						background: @btnhover;
					}
					i {
						font-size: 30px;
					}
				}
			}
			.kc_ct_search {
				width: 590px;
				height: 60px;
				box-sizing: border-box;
				border: 1px solid @border;
				border-radius: 6px;
				margin: 0 16px;
				position: relative;
				input {
					width: 100%;
					height: 58px;
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
					width: 590px;
					height: 0px;
					position: absolute;
					top: 70px;
					left: 0;
					overflow: hidden;
				}
				ul {
					width: 590px;
					height: 240px;
					overflow-y: auto;
					border: 1px solid @border;
					border-radius: 6px;
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
	}
</style>
<style lang="less">
	.kc_index {
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
	<div class="kc_index">
		<v-search-top></v-search-top>
		<div class="kc_body">
			<banner :bannerName='bannerName'></banner>
			<div class="kc_top">
				<p class="sl_center_p">地区</p>
				<el-select v-model="value" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<!-- 搜索 -->
			<div class="kc_center">
				<p>选择APP</p>
				<div class="kc_ct_search">
					<input type="text" placeholder="请输入应用名称/App ID/应用链接搜索">
					<div class="kc_over">
						<ul>
							<li>
								<img src="../../images/moni/appimg_03.png" alt="">
								<span>今日头条-娱乐新闻</span>
								<b>tianjinjuzhangguanggao</b>
							</li>
							<li>2</li>
							<li>3</li>
							<li>4</li>
							<li>5</li>
							<li>6</li>
							<li>7</li>
						</ul>
					</div>
				</div>
				<button @click="btnClick" class="btnclass">
                  <i class="iconfont icon-icon-plus-search"></i>
              </button>
			</div>
		</div>
	</div>
</template>

<script>
	import banner from '@components/Banner'
	export default {
		data() {
			return {
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
				bannerName: '竞品对比'
			};
		},

		components: {
			banner
		},

		computed: {},

		created() {},

		updated() {},

		mounted() {
			this.value = this.options[0].value;
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
			}
		}
	};
</script>