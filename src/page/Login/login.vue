<style lang='less' scoped>
	@color: #2d76ed;
	@bgk: #f7f7f7;
	@font_color: #6c757d;
	@border: #dee2e6;
	@btnhover: #1559c8;
	.login_index {
		.login_body {
			min-width: 1200px;
			min-height: 560px;
			display: flex;
			justify-content: center;
			box-sizing: border-box;
			padding-top: 120px;
			background: url("../../images/login/login_left.png") 0 0 no-repeat, url("../../images/login/login_right.png") bottom right no-repeat;
		}
		.login_box {
			width: 400px;
			h1 {
				height: 54px;
				text-align: center;
				font-size: 24px;
			}
			.login_input {
				border: 1px solid @border;
				width: 400px;
				height: 42px;
				display: flex;
				margin-bottom: 24px;
				border-radius: 6px;
				box-sizing: border-box;
				padding: 0 14px;
				align-items: center;
				input {
					width: 330px;
					margin-left: 10px;
					border: none;
					outline: none;
					height: 38px;
					&::-webkit-input-placeholder {
						color: #9a9a9a;
					}
				}
			}
			.login_input_war {
				border: none;
				background: #fff4f4;
				color: #f62d51;
			}
			.login_btn {
				margin-top: 10px;
				background: @color;
				height: 45px;
				color: #fff;
				font-size: 16px;
				cursor: pointer;
				text-align: center;
				justify-content: center;
				line-height: 40px;
				&:hover {
					background: @btnhover;
				}
			}
			.login_bottom {
				width: 400px;
				display: flex;
				justify-content: space-between;
				a:nth-child(1) {
					color: #6c757d;
				}
				a:nth-child(2) {
					color: @color;
					text-decoration: underline !important;
				}
			}
		}
	}
</style>
<template>
	<div class="login_index">
		<v-search-top></v-search-top>

		<div class="login_body">
			<div class="login_box">
				<h1>平台登录</h1>
				<div class="login_input">
					<i class="iconfont icon-zhucedengluyonghuming"></i>
					<input type="text" placeholder="请输入你的工作邮箱" v-model="userEmil">
				</div>
				<div class="login_input">
					<i class="iconfont icon-zhucedenglumima"></i>
					<input type="text" placeholder="请输入密码/至少6位" v-model="userWorld">
				</div>
				<div class="login_input login_input_war" v-if="war">
					{{warData}}
				</div>
				<div class="login_input login_btn" @click="loginSubmit">
					登录
				</div>
				<div class="login_bottom">
					<router-link :to="{path: '/modif-password'}">忘记密码？</router-link>
					<router-link :to="{path: '/register'}">注册</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				war: false, //错误提醒
				warData: '',
				userEmil: '',
				userWorld: ''
			};
		},

		components: {},

		computed: {},

		created() {},

		updated() {},

		mounted() {
			$('.login_input input').on('focus', function() {
				$(this).parent().css('border-color', '#2d76ed')
			})
			$('.login_input input').on('blur', function() {
				$(this).parent().css('border-color', '#dee2e6')
			})
		},

		destroyed() {},

		methods: {
			loginSubmit() {
				if(this.userEmil == '' || this.userWorld == '') {
					this.war = true
					this.warData = '邮箱或密码不能为空！'
					return false
				}
				let obj = {
					'data[User][email]': 'lifuchun@adjuz.com',
					'data[User][password]': 'lfc123456'
				}
				this.$https.get('/baseapi/login', JSON.stringify(obj))
					.then(res => {
						console.log(res)
					})
			}
		}
	}
</script>