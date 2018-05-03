<style lang='less' scoped>
	//公共头部导航
	//2018-4-24-zb
	@color: #2d76ed;
	@bgk: #f7f7f7;
	@font_color: #6c757d;
	@import url('../base/commonJS/scroll.css');
	.st_index {
		min-width: 1200px;
		height: 60px;
		background: @color;
		top: 0;
		left: 0;
		right: 0;
		.st_body {
			height: 60px;
			.st_logo {
				width: 134px;
				height: 60px;
				margin-left: 45px;
				float: left;
				background: url("../images/components/logo.png") no-repeat center center;
			}
			ul {
				margin-left: 18px;
				height: 60px;
				float: left;
				display: flex;
				li {
					.st_li_releave,
					a {
						line-height: 60px;
						margin-left: 30px;
						color: #fff;
						font-size: 14px;
						font-weight: 400;
						cursor: pointer;
						&.st_lasta {
							color: #9dd0e8;
						}
					}
					.st_li_releave {
						position: relative;
						padding-right: 17px;
						i {
							display: block;
							border: 5px solid #2d76ed;
							border-top: 5px solid #fff;
							position: absolute;
							right: 0px;
							top: 27px;
						}
						section {
							width: 120px;
							height: 80px;
							overflow: hidden;
							background: #fff;
							position: absolute;
							top: 53px;
							left: -24px;
							border-radius: 4px;
							z-index: 100;
							a {
								line-height: 35px;
								display: block;
								margin-left: 0;
								text-align: center;
								color: #6c757d;
								&:first-child {
									margin-top: 8px;
								}
								&:last-child {
									margin-bottom: 2px;
								}
								&:hover {
									background: #f7f7f7;
								}
								&:focus {
									background: @color;
									color: #fff;
								}
							}
						}
					}
				}
			}
			.st_search {
				float: right;
				width: 350px;
				height: 34px;
				background: #fff;
				border-radius: 18px;
				margin-top: 13px;
				box-sizing: border-box;
				padding: 0 27px;
				position: relative;
				display: flex;
				.icon-icon-plus-search {
					font-size: 18px;
					position: absolute;
					top: 8px;
					right: 27px;
					cursor: pointer;
				}
				.st_chain {
					width: 54px;
					cursor: pointer;
					height: 50px;
					position: relative;
					img {
						margin-top: 9px;
					}
					i {
						position: absolute;
						border: 5px solid #fff;
						border-top: 5px solid #6c757d;
						top: 14px;
						right: 11px;
					}
				}
				.st_chain_list {
					width: 258px;
					height: 0;
					box-sizing: border-box;
					background: #fff;
					position: absolute;
					border-radius: 4px;
					top: 40px;
					left: 10px;
					overflow-y: auto;
					padding: 0px 10px 0 14px;
					z-index: 100;
					.st_chain_box {
						height: 230px;
						margin-top: 9px;
						width: 234px;
						section {
							width: 100%;
							height: 35px;
							box-sizing: border-box;
							padding-left: 8px;
							display: flex;
							cursor: pointer;
							&:hover {
								background: @bgk;
							}
							&.st_bgk {
								background: @color;
								color: #fff;
							}
							img {
								width: 26px;
								height: 18px;
								margin-top: 8px;
							}
							p {
								line-height: 35px;
								margin-left: 9px;
							}
						}
					}
				}
				.st_shu {
					display: block;
					height: 16px;
					width: 1px;
					background: #a9a9a9;
					margin-top: 9px;
				}
				input {
					margin-left: 16px;
					width: 200px;
					border: none;
					outline: none;
					color: @font_color;
					&::-webkit-input-placeholder {
						color: #9a9a9a;
					}
				}
			}
			.st_user {
				float: right;
				margin-left: 30px;
				margin-right: 45px;
				line-height: 60px;
				color: #fff;
				padding-right: 16px;
				cursor: pointer;
				position: relative;
				.st_user_i {
					display: block;
					border: 5px solid #2d76ed;
					border-top: 5px solid #fff;
					position: absolute;
					right: 0px;
					top: 29px;
				}
			}
		}
		.st_user_list {
			width: 120px;
			height: 80px;
			overflow: hidden;
			background: #fff;
			position: absolute;
			top: 53px;
			left: 50%;
			transform: translateX(-50%);
			border-radius: 4px;
			z-index: 100;
			a {
				line-height: 35px;
				display: block;
				margin-left: 0;
				text-align: center;
				color: #6c757d;
				i {
					margin-right: 8px;
				}
				&:first-child {
					margin-top: 8px;
				}
				&:last-child {
					margin-bottom: 2px;
				}
				&:hover {
					background: #f7f7f7;
				}
				&:focus {
					background: @color;
					color: #fff;
				}
			}
		}
	}
</style>
<template>
	<div class="st_index">
		<div class="st_body">
			<div class="st_logo"></div>
			<ul class="clear">
				<li>
					<router-link :to="{path: '/'}">首页</router-link>
				</li>
				<li >
					<div class="st_li_releave" @mouseover="show2 = true" @mouseout="show2 = false">
						智查工具
						<i class="st_user_i"></i>
						<transition name="el-zoom-in-top">
							<section class="st_top_hover" v-show="show2" @mouseout="show2 = false">
								<router-link :to="{path: '/rankingList'}">竞价词榜</router-link>
								<router-link :to="{path: '/keyword-comparison'}">竞品对比</router-link>
							</section>
						</transition> 
					</div>
				</li>
				<li>
					<router-link :to="{path: '/daili'}" class="st_lasta">
						<i class="iconfont icon-xiaoshouguanli"></i> 代理投放
					</router-link>
				</li>
			</ul>
			<!-- 用户中心 -->
			<div class="st_user" @mouseover="show3 = true" @mouseout="show3 = false">
				{{userName}}
				<i class="st_user_i"></i>
				<transition name="el-zoom-in-top">
					<div class="st_user_list" @mouseout="show3 = false" v-show="show3">
						<router-link :to="{path: '/'}"><i class="iconfont icon-huodongzhongxin"></i>广告中心</router-link>
						<router-link :to="{path: '/'}"><i class="iconfont icon-tuichu"></i>退出登录</router-link>
					</div>	
				</transition> 
			</div>
			<!-- 顶部搜索 -->
			<div class="st_search">
				<div class="st_chain" @click="chainList" @mouseleave="faoust">
					<img :src='countryNow.nationImgUrl' alt="">
					<i></i>
				</div>
				<i class="iconfont icon-icon-plus-search" @click="searchRouteLink"></i>
				<div class="st_chain_list" @mouseover="list_over" @mouseleave="list_out">
					<div class="st_chain_box">
						<section @click="hrefClick(index)" :class="{st_bgk: st_bgk == index}" v-for="(ele,index) in countryList" :key="index">
							<img :src="ele.nationImgUrl" alt="" :title="ele.nationCHSName">
							<p>{{ele.nationCHSName}}</p>
						</section>
					</div>
				</div>
				<span class="st_shu"></span>
				<input type="text" placeholder="关键词或APP ID" v-model="searchData">
			</div>
		</div>
	</div>
</template>

<script>
import { CountryInit , UserSignType} from '@commonJS/AxiosGet'
	export default {
		data() {
			return {
				st_bgk: -1,
				overList: false, //当前国家列表是否应该消失
				countryNow: {}, //当前是哪个国家
				searchData: "", //搜索内容
				userName: "",
				countryList: [],
				show2: false,
				show3: false
			};
		},

		components: {},

		computed: {},

		created() {
			
		},

		updated() {},

		mounted() {
			if(sessionStorage.getItem('countryList')  != null && sessionStorage.getItem('countryList') != undefined) { 
				this.countryList = JSON.parse(sessionStorage.getItem('countryList'))
				this.countryNow = this.countryList[0];
			}else{
				CountryInit() 
				.then(res=>{
					this.countryList = res.data.data
					this.countryNow = this.countryList[0];
					sessionStorage.setItem('countryList' , JSON.stringify(this.countryList))
				})
			} 

			if(localStorage.getItem('user') != null && localStorage.getItem('user') != undefined) {
				this.userName = JSON.parse(localStorage.getItem('user')).name
			}else{
				UserSignType()
				.then(res=>{
					if(res.data.data.userLoginStatus == 1) {//登陆状态
						this.userName = res.data.data.userEmail
						localStorage.setItem('user' , JSON.stringify(
							{name: this.userName}
							)) 
					}
				})
			} 
		},

		destroyed() {},

		methods: {  
			chainList() {
				this.domHeight("st_chain_list", 239);
			},
			//点击选择国家
			hrefClick(index) {
				this.st_bgk = index;
				this.domHeight("st_chain_list", 0);
				this.countryNow = this.countryList[index];
			},
			//划出上部
			faoust() {
				setTimeout(() => {
					if(!this.overList) {
						this.domHeight("st_chain_list", 0);
					}
				}, 300);
			},
			//划入国家列表
			list_over() {
				this.overList = true;
			},
			//划出国家列表
			list_out() {
				this.overList = false;
				this.domHeight("st_chain_list", 0);
			},
			//搜索跳转
			searchRouteLink(data) {
				this.$router.push({path: '/rankingDetails-List' , query : { key : 12345} })
			},  
			domHeight(dom, num) {
				$("." + dom).animate({
						height: num + "px"
					},
					300
				);
			}
		}
	};
</script>