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
						min-width: 440px;
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
				<el-select v-model="countryNow" placeholder="请选择">
					<el-option v-for="item in countryList" :key="item.nationId" :label="item.nationCHSName" :value="item.nationId">
					</el-option>
				</el-select>
			</div>
			<!-- 对比 -->
			<div class="kcl_duibi">
				<div class="kcl_dui_cont">
					<!-- 从详情页跳转过来的 -->
					<div class="kcl_duibi_left">
						<img :src="dataLeft.appImgUrl" alt="">
						<section>
							<h1>{{dataLeft.appName}}</h1>
							<p>
								<span style="width: 16%;">开发商</span>
								<span style="width: 12%;">分类</span>
								<span style="width: 21%;">AppID</span>
								<span style="width: 15%;">价格</span>
								<span style="width: 12%;">总榜</span>
								<span style="width: 14%;">分类榜</span>
							</p>
							<p>
								<span style="width: 16%; color:#000">{{dataLeft.aristName}}</span>
								<span style="width: 12%; color:#2d76ed">{{dataLeft.appTypeName}}</span>
								<span style="width: 21%; color:#2d76ed">{{dataLeft.appStoreId}}</span>
								<span style="width: 15%; color:#000">{{dataLeft.appPrice}}</span>
								<span style="width: 12%; color:#000">{{dataLeft.totalRank}}</span>
								<span style="width: 14%; color:#000">{{dataLeft.classificationRank}}</span>
							</p>
						</section>
					</div>
					<div class="kcl_vs">
						vs
					</div>
					<!-- 在对比页选中的 -->
					<div class="kcl_duibi_left" v-if="appDataShow">
						<img :src="dataRight.appImgUrl" alt="" v-if="dataRight.appImgUrl">
						<section>
							<h1>{{dataRight.appName}}</h1>
							<p>
								<span style="width: 16%;">开发商</span>
								<span style="width: 12%;">分类</span>
								<span style="width: 21%;">AppID</span>
								<span style="width: 15%;">价格</span>
								<span style="width: 12%;">总榜</span>
								<span style="width: 14%;">分类榜</span>
							</p>
							<p>
								<span style="width: 16%; color:#000">{{dataRight.aristName}}</span>
								<span style="width: 12%; color:#2d76ed">{{dataRight.appTypeName}}</span>
								<span style="width: 21%; color:#2d76ed">{{dataRight.appStoreId}}</span>
								<span style="width: 15%; color:#000">{{dataRight.appPrice}}</span>
								<span style="width: 12%; color:#000">{{dataRight.totalRank}}</span>
								<span style="width: 14%; color:#000">{{dataRight.classificationRank}}</span>
							</p>
						</section>
						<i class="iconfont icon-cha" @click="close"></i>
					</div>
					<!-- 搜索app -->
					<div class="kcl_duibi_right" v-if="!appDataShow">
						<p>选择APP</p>
						<div class="kc_ct_search">
							<input type="text" placeholder="请输入应用名称/App ID/应用链接搜索" v-model="APPinfor">
							<div class="kc_over">
								<ul> 
									<li @click="overLiClick(index)" v-for="(ele,index) in list" :key="index">
										<img :src="ele.appImgUrl" alt="">
										<span>{{ele.appName}}</span>
										<b>{{ele.aristName}}</b>
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
					<table class="kcl_table1" v-if="ContrastData[idLeft]">
						<tr>
							<th style="width: 28%">#</th>
							<th style="width: 19%">已选APP (左)</th>
							<th style="width: 15%"></th>
							<th style="width: 19%">竞品APP (右)</th>
							<th style="width: 19%">操作</th>
						</tr>
						<tr>
							<td>ASM竞价词数 </td>
							<td class="td_color">{{ContrastData[idLeft].totalCompetitiveWordNum}}</td>
							<td></td>
							<td class="td_color">{{ContrastData[idRight].totalCompetitiveWordNum}}</td>
							<td><i class="iconfont icon-more" @click="listNav('alike')"></i></td>
						</tr>
						<tr>
							<td class="td_weight">相同竞价词数 </td>
							<td class="td_color"></td>
							<td class="td_color">{{ContrastData[idLeft].equalCompetitiveWordNum}}</td>
							<td class="td_color"></td>
							<td></td>
						</tr>
						<tr>
							<td>不同竞价词数 </td>
							<td class="td_color">{{ContrastData[idLeft].unEqualCompetitiveWordNum}}</td>
							<td></td>
							<td class="td_color">{{ContrastData[idRight].unEqualCompetitiveWordNum}}</td>
							<td></td>
						</tr>
						<tr class="td_height">
							<td class="td_weight">竞争度(竞价词重合度) </td>
							<td class="td_color"></td>
							<td class="td_animous">
								<div>
									<section class="yuan" id="myChart1"> </section>
									<span>{{percentage}}%</span>
								</div>
							</td>
							<td class="td_color"></td>
							<td></td>
						</tr>
						<tr>
							<td>8000以上热度竞价词数 </td>
							<td class="td_color">{{ContrastData[idLeft].hotCompetitiveWords}}</td>
							<td></td>
							<td class="td_color">{{ContrastData[idRight].hotCompetitiveWords}}</td>
							<td><i class="iconfont icon-more" @click="listNav('noalike' , 8000 , '')"></i></td>
						</tr>
						<tr>
							<td>6000-8000热度竞价词数 </td>
							<td class="td_color">{{ContrastData[idLeft].lowerHotCompetitiveWords}}</td>
							<td></td>
							<td class="td_color">{{ContrastData[idRight].lowerHotCompetitiveWords}}</td>
							<td><i class="iconfont icon-more" @click="listNav('noalike' , 8000 , 6000)"></i></td>
						</tr>
						<tr>
							<td>4605-6000热度竞价词数 </td>
							<td class="td_color">{{ContrastData[idLeft].middleHotCompetitiveWords}}</td>
							<td></td>
							<td class="td_color">{{ContrastData[idRight].middleHotCompetitiveWords}}</td>
							<td><i class="iconfont icon-more" @click="listNav('noalike' , 6000 , 4605)"></i></td>
						</tr>
						<tr>
							<td>低于4605热度竞价词数 </td>
							<td class="td_color">{{ContrastData[idLeft].lowCompetitiveWords }}</td>
							<td></td>
							<td class="td_color">{{ContrastData[idRight].lowCompetitiveWords}}</td>
							<td><i class="iconfont icon-more" @click="listNav('noalike' , '' , 4605)"></i></td>
						</tr>
					</table>
				</div>
				<!--三个table的切换  -->
				<div class="kcl_table_three" v-if="tableShow">
					<div class="kcl_table_btn">
						<span v-for="(ele,index) in components_list" :key="index" :class="{rdl_section_is: index == components_index}" @click="componentsClick(index)">{{ele.name}}</span>
					</div>
					<!-- table组件 -->
					<component :is="currentView" :userType='userType' :max='max' :min='min'></component>
					<usersign v-if="!userType"></usersign>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import banner from "@components/Banner";
	import { mapState } from 'vuex'
	import list1 from './list1.vue'
	import list2 from './list2.vue'
	import list3 from './list3.vue'
	import usersign from '@components/User-Sign'
	import { CountryInit , UserSignType} from '@commonJS/AxiosGet'
	import { datefn } from '@commonJS/functionJS'
	export default {
		data() {
			return {
				userType: false, //用户登录状态 
				loading: null,
				loadingopaction: {
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				},
				list: [],//搜索列表
				countryNow: "",
				APPinfor: '',//搜索内容
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
				myChart: null,
				dataLeft: {},//左面选中的app数据
				dataRight: {},//右面进行对比的app数据
				ContrastData: {},//对比数据
				percentage: 0 ,//相同的百分比
				idLeft: 0,
				idRight: 0,
				max: '',
				min: ''
			};
		},

		components: {
			banner,
			list1,
			list2,
			list3,
			usersign
		},

		computed: {
			...mapState({
				countryList: state => state.Home.countryList,
			})
		},

		created() {
			this.$store.dispatch('GET_COUNTRYLIST')
				.then(() => {
					this.countryNow = this.$store.state.Home.countryList[0].nationId 
				})

			UserSignType()
			.then(res=>{ 
				if(res.data.data.userLoginStatus == 1) {//登陆状态
					this.userType = true
				}else{//未登陆
					this.userType = false
				}
			})

			this.AjaxInfor({
				key: this.$route.query.key,
				id: this.$route.query.id
			} , 'left')

			
		},

		updated() {},

		mounted() { 
			 
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
				if(this.APPinfor == '') {
					this.$message({
						message: '搜索内容不能为空！！！',
						type: 'warning'
					});
				}else{
					this.loading = this.$loading(this.loadingopaction) 
					this.Ajax() 
				} 
			}, 
			overLiClick(index) { //选中app请求数据，进行比较
				this.appDataShow = true

				this.AjaxInfor({
					id: this.list[index].appStoreId,
					key: this.countryNow
				} , 'right')
			},
			close() { //关闭选中的app
				this.appDataShow = false
				this.tableShow = false
			},
			starClick() { //点击开始对比
				this.tableShow = true

				this.AjaxAppcontent(this.dataLeft.appStoreId , this.dataRight.appStoreId)
				
			},
			drawaCircle(baifenbi) {

			}, //table切换
			componentsClick(index) {
				this.components_index = index
				this.currentView = this.components_list[index].com
			},
			listNav(name,num1,num2) {//切换关键词热度
			$(window).scrollTop($('.kcl_table_btn').offset().top)
				if(name == 'alike') { 
					this.components_index = 0
					this.currentView = list1
				}else{ 
					this.components_index = 2
					this.currentView = list3
				}
				this.max = num1
				this.min = num2
			},
			Ajax() { //搜索app
				let url = '/api/v1/IntellSearchApi/Index/GetCompetitiveAppInfo?nationId='+this.countryNow+'&count=10'+'&searchContent='+this.APPinfor
				this.$https.get( url )
				.then((res) => {
					this.list = res.data.data.list
					if(res.data.resultCode == 1000 ) {
						$(".kc_over").animate({
								height: "242px"
							},
							200
						);
					}
					this.loading.close() 
				})
			},
			AjaxInfor(obj , num) { //获取需要对比的app
				this.loading = this.$loading(this.loadingopaction)
				let url = '/api/v1/IntellSearchApi/APPDetail/GetAppInfo?appStoreId='+obj.id+'&nationId='+obj.key

				this.$https.get(url)
				.then((res) => {
					if( num == 'left') {
						this.dataLeft = res.data.data
						this.idLeft = this.$route.query.id
					}else{
						this.dataRight = res.data.data
						this.idRight = res.data.data.appStoreId
					}
					this.loading.close()
				}) 
			},
			AjaxAppcontent(selectedAppId , competitiveAppId) {//获取两个app之间的对比数据
				this.loading = this.$loading(this.loadingopaction)
				let url = '/api/v1/IntellSearchApi/CompetitiveAppAnalysis/GetCompetitiveAppResults'
				let obj = {
					nationId: this.countryNow,
					selectedAppId,
					competitiveAppId,
					beginTime: datefn(1)[1].data.beginTime,
					endTime: datefn(1)[1].data.endTime,
				}
				this.$https.post( url , JSON.stringify(obj))
				.then((res) => { 
					this.ContrastData = res.data.data.appAnalysisResult
					this.loading.close()

					let totalNum = res.data.data.appAnalysisResult[this.idLeft].totalCompetitiveWordNum
					let identicalNum = res.data.data.appAnalysisResult[this.idLeft].equalCompetitiveWordNum
					this.percentage = (identicalNum / totalNum).toFixed(4)*100
					setTimeout(() => { // 基于准备好的dom，初始化echarts实例 
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
									value: identicalNum,
									name: '相同'
								},
								{
									value: (totalNum - identicalNum),
									name: '不相同'
								}
							]
						}]
					});
				}, 300)
				})
			}
		}
	};
</script>