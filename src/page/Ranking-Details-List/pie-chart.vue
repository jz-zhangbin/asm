<style lang='less' scoped>
	.pie_index {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: 100;
		.pie_main {
			width: 600px;
			height: 400px;
			background: #fff;
			border-radius: 6px;
			margin: 100px auto;
			padding: 30px 30px 0;
			position: relative;
			animation:animation1 .5s ease-out;
			-webkit-animation:animation1 .5s ease-out;
		}
		@keyframes animation1 {
			0%{
				margin: 0 auto;
				transform: scale(0.8);
			}
			100%{
				margin: 100px auto;
				transform: scale(1);
			}
		}
		@-webkit-keyframes animation1 { 
			0%{
				margin: 0 auto;
			}
			100%{
				margin: 100px auto;
			}
		} 
		#myChart1 {
			width: 100%;
			height: 400px;
		}
		.icon-cha {
			position: absolute;
			right: 14px;
			top: 14px;
			cursor: pointer;
		}
	}
</style>
<template>
	<div class="pie_index">
		<div class="pie_main">
			<div id="myChart1"></div>
			<i class="iconfont icon-cha" @click="$parent.pieShow = false"></i>
		</div>
	</div>
</template>

<script> 
	export default {
		data() {
			return {
				myChart: null
			};
		},

		components: {},

		computed: {},

		created() {},

		updated() {},

		mounted() {
			//echarts加载
			// 基于准备好的dom，初始化echarts实例
			let myChart = this.$echarts.init(document.getElementById("myChart1"));
			// 绘制图表
			myChart.setOption({
				title: {
					text: "某站点用户访问来源",
					subtext: "纯属虚构",
					x: "center"
				},
				tooltip: {
					trigger: "item",
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
					orient: "vertical",
					left: "left",
					data: ["微信", "qq", "支付宝", "火山小视频", "抖音", "钉钉", "网易"]
				},
				toolbox: {
					show: true,
					feature: {
						mark: {
							show: true
						},
						dataView: {
							show: true,
							readOnly: false
						},
						magicType: {
							show: true,
							type: ['pie', 'funnel']
						},
						restore: {
							show: true
						},
						saveAsImage: {
							show: true
						}
					}
				},
				series: [{
					name: "访问来源",
					type: "pie",
					radius: "55%",
					center: ["50%", "60%"],
					data: [{
							value: 20,
							name: "微信"
						},
						{
							value: 20,
							name: "qq"
						},
						{
							value: 20,
							name: "支付宝"
						},
						{
							value: 20,
							name: "火山小视频"
						},
						{
							value: 20,
							name: "抖音"
						},
						{
							value: 20,
							name: "钉钉"
						},
						{
							value: 20,
							name: "网易"
						},
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: "rgba(0, 0, 0, 0.5)"
						}
					}
				}]
			});
		},

		destroyed() {},

		methods: {}
	};
</script>