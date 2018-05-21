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
			animation: animation1 .5s ease-out;
			-webkit-animation: animation1 .5s ease-out;
		}
		@keyframes animation1 {
			0% {
				margin: 0 auto;
				transform: scale(0.8);
			}
			100% {
				margin: 100px auto;
				transform: scale(1);
			}
		}
		@-webkit-keyframes animation1 {
			0% {
				margin: 0 auto;
			}
			100% {
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
	import { datefn } from '@commonJS/functionJS'
	export default {
		data() {
			return {
				myChart: null
			};
		},
		mounted() {
			this.AjaxPie()
			// 基于准备好的dom，初始化echarts实例

		},

		methods: {
			AjaxPie() {
				let url = 'api/v1/IntellSearchApi/KeywordDetail/GetAllAppsRatio'
				let obj = {
					nationId: this.$parent.$parent.countryNow,
					keywordName: this.$parent.$parent.tableData.keywordName,
					begingTime: datefn(1)[this.$parent.$parent.propDate].data.beginTime,
					endTime: datefn(1)[this.$parent.$parent.propDate].data.endTime
				}

				this.$https.post(url, JSON.stringify(obj))
					.then((res) => {
						this.echartsInit(res.data)
					})
			},
			echartsInit(res) {
				let nameList = []
				let dataList = []
				for(var i in res.data.appsRatioByKeyword) {
					nameList.push(i)
					let obj = {
						value: res.data.appsRatioByKeyword[i],
						name: i
					}
					dataList.push(obj)
				}
				console.log(nameList, dataList)
				let myChart = this.$echarts.init(document.getElementById("myChart1"));
				// 绘制图表
				myChart.setOption({
					title: {
						text: res.data.keywordName + '展示量占比图',
						subtext: "巨掌ASM",
						x: "center"
					},
					tooltip: {
						trigger: "item",
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient: "vertical",
						left: "left",
						data: nameList
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
						data: dataList,
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: "rgba(0, 0, 0, 0.5)"
							}
						}
					}]
				});
			}
		}
	};
</script>