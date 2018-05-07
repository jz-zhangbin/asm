<style lang='less' scoped> 
	@import url('../../base/commonJS/css.less'); 
	.rdl_index {
		width: 100%;
		color: @font_color;
		.rdl_name {
			min-width: 1200px;
			padding: 25px 45px;
			box-sizing: border-box; 
			div{
				border-bottom: 1px solid @border;
				font-size: 24px; 
				height: 40px;
				width: 100%;
			}
		}
		.rdl_body {
			min-width: 1200px;
			box-sizing: border-box;
			padding: 0 45px;
		}
		.rdl_body_top {
			width: 100%;
			display: flex;
			margin-bottom: 25px;
			p {
				line-height: 34px;
				margin-right: 11px;
			}
		}
		.rdl_body_table_top {
			width: 100%;
		}
		.sl_table {
			min-width: 100%;
			box-sizing: border-box;
			table { 
				tr {
					td,
					th { 
						border: 1px solid @border;
					} 
				}
			}
		}
		.sl_dt_img {
			div {
				display: flex;
				align-items: center;
				justify-content: center !important;
			}  
		}  
		.rdl_key_list {
			display: flex;
			flex-wrap: wrap;
			box-sizing: border-box;
			padding: 20px 20px 0px 0;
			span {
				display: block;
				border: 1px solid @border;
				padding: 10px 12px;
				border-radius: 6px;
				cursor: pointer;
				margin: 2px 0 10px 20px;
			}
		}
		// table切换
		.rdl_body_nav {
			width: 100%;
			margin-top: 60px;
			section {
				display: flex;
				height: 32px;
				justify-content: center;
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
<style lang='less'>
	.rdl_index {
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
	<div class="rdl_index">
		<v-search-top></v-search-top>
		<!-- 搜索结果 -->
		<div class="rdl_name">
			<div>
				[{{keyName}}]的搜索结果
			</div>
		</div>
		<div class="rdl_body">
			<div class="rdl_body_top">
				<p class="sl_center_p">地区</p>
				<el-select v-model="value" placeholder="请选择" @change="changeFun(value)">
					<el-option v-for="item in options" :key="item.nationId" :label="item.nationCHSName" :value="item.nationId">
					</el-option>
				</el-select>
			</div>
			<!-- 头部表格 -->
			<div class="rdl_body_table_top">
				<div class="sl_table">
					<table id="ta">
						<tr>
							<th style="width: 20%">关键词</th>
							<th style="width: 11%" class="sl_table_po">
								<div class="sl_table_flex">
									流行度
									<div class="sl_t_dis">
										<i class="iconfont icon-wenhao-fill"> </i>
										<span class="sl_t_is" style="width:260px;">
                    流行度来源于App Store官方数据。该指数代表次关键词在App Store中的搜索流行度，数值最高为100。
                  </span>
										<span class="sl_t_san"></span>
									</div>
								</div>
							</th>
							<th style="width: 11%" class="sl_table_po">
								<div class="sl_table_flex">
									搜索指数
									<div class="sl_t_dis">
										<i class="iconfont icon-wenhao-fill"> </i>
										<span class="sl_t_is" style="width:260px;">
                      搜索指数来源于App Store官方数据。该指数代表次关键词在App Store中的搜索热度。一般来说，指数越高，则该次在每天被搜索的次数也越多。
                    </span>
										<span class="sl_t_san"></span>
									</div>
								</div>
							</th>
							<th style="width: 11%" class="sl_table_po">
								<div class="sl_table_flex">
									近期竞价APP
									<div class="sl_t_dis">
										<i class="iconfont icon-wenhao-fill"> </i>
										<span class="sl_t_is" style="width:260px;"> 
                      近7天竞价过该关键词APP数量
                    </span>
										<span class="sl_t_san"></span>
									</div>
								</div>
							</th>
							<th style="width: 36%" class="sl_table_po">
								<div class="sl_table_flex">
									搜索关联词
									<div class="sl_t_dis">
									</div>
								</div>
							</th>
							<th style="width: 11%" class="sl_table_po">
								操作
							</th>
						</tr>
						<tr v-for="(ele,index) in tableData" :key="index">
							<td style="width: 20%" class="sl_dt_name" @click="$router.push('/rankingDetails-List')">{{ele.name}}</td>
							<td style="width: 11%" v-if="ele.nameList.length != 0">{{ele.liu}}</td>
							<td style="width: 11%" v-if="ele.nameList.length != 0">{{ele.sou}}</td>
							<td style="width: 11%" v-if="ele.nameList.length != 0" class="sl_dt_img">
								<div>
									{{ele.imgList.length}}
								</div>
							</td>
							<td style="width: 36%;" v-if="ele.nameList.length != 0">
								<div class="rdl_key_list">
									<span v-for="(item,index2) in ele.nameList" :key="index2">{{item}}</span>
								</div>
							</td>
							<!-- 当列表为空时 -->
							<td v-if="ele.nameList.length == 0" >-</td>
							<td v-if="ele.nameList.length == 0">-</td>
							<td v-if="ele.nameList.length == 0">-</td>
							<td v-if="ele.nameList.length == 0" style="height: 150px">暂无搜索关联词</td>
							<td style="width: 11%">
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
			</div>
			<!-- table切换 -->
			<div class="rdl_body_nav">
				<section>
					<span v-for="(ele,index) in components_list" :key="index" :class="{rdl_section_is: index == components_index}" @click="componentsClick(index)">{{ele.name}}</span>
				</section>
			</div>
			<!-- table组件 -->
			<component :is="currentView" :valueData="value" :userType= "userType" :tableInner= 'tableInner'></component>
		</div>
	</div>
</template>

<script>
	import list1 from './list1'
	import list2 from './list2'
	import { CountryInit , UserSignType} from '@commonJS/AxiosGet'
	export default {
		data() {
			return {
				//模块的切换
				components_list: [{
						name: '历史竞价APP',
						com: list1
					},
					{
						name: '更多关联词',
						com: list2
					}
				],
				userType: true,
				components_index: 0,
				currentView: list1,
				keyName: "微信",
				options: [ ],
				value: "",
				routerQuery: '',
				tableData: [{
						name: "部落冲突coc",
						liu: 100,
						sou: 10234,
						imgList: [],
						show: true,
						nameList: [
							"abcsdf",
							"2sdf34fsd",
							"sdfdsfsg43",
							"htrsdfe234",
							"uytree",
							"werg43"
						]
					},
					{
						name: "部落冲突coc",
						liu: 100,
						sou: 10234,
						imgList: [],
						show: true,
						nameList: []
					}
				],
				tableInner: [
					{
					img: require('../../images/moni/appimg_03.png'),
					name: '微信',
					ID: '235667',
					made: 'Apple',
					amount: '3.24%',
					zong: {
						pai: 123,
						money: '收费'
					},
					fen: {
						pai: 345,
						type: '购物',
						money: '免费'
					}
				}, {
					img: require('../../images/moni/appimg_03.png'),
					name: '微信',
					ID: '235667',
					made: 'Apple',
					amount: '3.24%',
					zong: {
						pai: 123,
						money: '收费'
					},
					fen: {
						pai: 345,
						type: '购物',
						money: '免费'
					}
				}
				]
			};
		},

		components: {
			list1,
			list2
		},

		computed: {},

		watch:{
			$route() {
				console.log(this.$route.query.key,'导航监听请求')
			}
		},
		beforeRouteEnter (to, from, next) {  
			let ls = to.query.key
			next(vm => {   
				//console.log(ls)
			})
		},

		created() {},

		updated() {},

		mounted() {  
			this.routerQuery = this.$route.query.key//获取url中的参数
			console.log(this.routerQuery,'初期请求')
			if(sessionStorage.getItem('countryList')  != null && sessionStorage.getItem('countryList') != undefined) {
				this.options = JSON.parse(sessionStorage.getItem('countryList'))
				this.value = this.options[0].nationId;
			}else{
				CountryInit() 
				.then(res=>{ 
					this.options = res.data.data
					this.value = this.options[0].nationId; 
				})
			} 

			UserSignType()
			.then(res=>{ 
				if(res.data.data.userLoginStatus == 1) {//登陆状态
					this.userType = true
				}else{//未登陆
					this.userType = false
				}
			})
		},

		destroyed() {},

		methods: {
			changeFun(value) {

			},
			//添加至收藏
			addCiClick(index) {
				this.tableData[index].show = !this.tableData[index].show;
			},
			//table切换
			componentsClick(index) {
				this.components_index = index
				this.currentView = this.components_list[index].com
			}
		}
	};
</script>