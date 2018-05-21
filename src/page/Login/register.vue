<style lang='less' scoped>
	@color: #2d76ed;
	@bgk: #f7f7f7;
	@font_color: #6c757d;
	@border: #dee2e6;
	@btnhover: #1559c8;
	.register_index {
		.register_body {
			min-width: 1200px;
			min-height: 560px;
			display: flex;
			justify-content: center;
			box-sizing: border-box;
			padding-top: 80px;
			background: url("../../images/login/login_left.png") 0 0 no-repeat, url("../../images/login/login_right.png") bottom right no-repeat;
		}
		.register_box {
			width: 400px;
			h1 {
				height: 54px;
				text-align: center;
				font-size: 24px;
			}
		}
		.register_input {
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
		.login_input_two {
			border: none;
			height: 40px;
			margin-bottom: 20px;
			display: flex;
			.code {
				display: flex;
				margin-left: 10px;
			}
			p {
				margin-left: 12px;
				color: #36bea6;
				cursor: pointer;
				line-height: 42px;
			}
			.login_pass {
				display: flex;
				height: 42px;
				align-items: center;
				border: 1px solid @border;
				border-radius: 6px;
				width: 148px;
				box-sizing: border-box;
				padding: 0 14px;
				input {
					width: 90px;
					outline: none;
					border: none;
					height: 36px;
					margin-left: 10px;
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
			border-radius: 6px;
			&:hover {
				background: @btnhover;
			}
		}
		.register_clause {
			margin-bottom: 20px;
			display: flex;
			align-items: center;
			b {
				display: block;
				width: 16px;
				height: 16px;
				background: @border;
				border-radius: 4px;
				cursor: pointer;
				margin-right: 6px;
				text-align: center;
				line-height: 16px;
				&.b_checked {
					background: @color;
					i {
						color: #fff;
					}
				}
			}
			span {
				color: @color;
			}
		}
		.register_bom {
			text-align: center;
			margin-top: 20px;
			font-size: 16px;
			a {
				color: @color;
			}
		}
	}
</style>
<template>
	<div class="register_index">
		<v-search-top></v-search-top>

		<div class="register_body">
			<div class="register_box">
				<h1>注册账号</h1>

				<div class="register_input">
					<i class="iconfont icon-zhucedengluyonghuming"></i>
					<input type="text" placeholder="请输入你的工作邮箱" v-model="userEmil">
				</div>
				<div class="register_input">
					<i class="iconfont icon-zhucedenglumima"></i>
					<input type="text" placeholder="请设置密码/至少6位" v-model="userWorld">
				</div>
				<div class="register_input">
					<i class="iconfont icon-zhucedenglumima"></i>
					<input type="text" placeholder="再次确认登陆密码" v-model="userWorldconfirm">
				</div>
				<div class="login_input_two">
					<div class="login_pass">
						<i class="iconfont icon-zhucedengluyanzhengma"></i>
						<input type="text" class="blur_input" placeholder="请输入验证码" v-model="userModif">
					</div>
					<div class="code">
						<s-identify :identifyCode="identifyCode"></s-identify>
					</div>
					<p @click="refreshCode">看不清，换一张</p>
				</div>
				<div class="register_clause">
					<b @click="ischecked = !ischecked" :class="{b_checked : ischecked}">
                        <i class="iconfont icon-gouxuan" v-if="ischecked"></i>
                    </b> 我已经阅读并同意 <span> 《相关服务和条款》</span>
				</div>
				<div class="register_input login_input_war" v-if="war">
					{{warData}}
				</div>
				<div class="login_input login_btn" @click="loginSubmit">
					注册
				</div>
				<div class="register_bom">
					已有账号？
					<router-link :to="{path: '/login'}">登陆</router-link>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				identifyCodes: "1234567890",
				identifyCode: "",
				war: true, //错误提醒
				warData: '错误',
				userEmil: '',
				userWorld: '',
				userWorldconfirm: '',
				userModif: '',
				ischecked: false
			};
		},

		components: {},

		computed: {},

		created() {},

		updated() {},

		mounted() {
			this.identifyCode = "";
			this.makeCode(this.identifyCodes, 4);
			$('.register_input input').on('focus', function() {
				$(this).parent().css('border-color', '#2d76ed')
			})
			$('.register_input input').on('blur', function() {
				$(this).parent().css('border-color', '#dee2e6')
			})
		},

		destroyed() {},

		methods: {
			loginSubmit() {
				let emailTest = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g
				if(this.userEmil == "" || this.userWorld == "" || this.userWorldconfirm == '' || this.userModif == '') {
					this.war = true;
					this.warData = "邮箱/密码/验证码不能为空！";
					return false
				}
				if(!emailTest.test(this.userEmil)) {
					this.war = true;
					this.warData = "邮箱格式不正确！";
					return false
				}
				if(this.userWorld.length < 6 || this.userWorld.length > 16) {
					this.war = true;
					this.warData = "密码长度不能少于6位并且不能超过16位！";
					return false
				}
				if(this.userWorld != this.userWorldconfirm) {
					this.war = true;
					this.warData = "两次密码不一致！";
					return false
				}
				if(this.userModif != this.identifyCode) {
					this.war = true;
					this.warData = "验证码不正确，请重新输入！";
					return false
				}
			},
			randomNum(min, max) {
				return Math.floor(Math.random() * (max - min) + min);
			},
			refreshCode() {
				this.identifyCode = "";
				this.makeCode(this.identifyCodes, 4);
			},
			makeCode(o, l) {
				for(let i = 0; i < l; i++) {
					this.identifyCode += this.identifyCodes[
						this.randomNum(0, this.identifyCodes.length)
					];
				}
				console.log(this.identifyCode);
			},
		}
	}
</script>