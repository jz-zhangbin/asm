<style lang='less' scoped>
	@color: #2d76ed;
	@bgk: #f7f7f7;
	@font_color: #6c757d;
	@border: #dee2e6;
	@btnhover: #1559c8;
	.pass_index {
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
			.login_input_two {
				border: none;
				height: 40px;
				margin-bottom: 20px;
				display: flex;
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
		}
		.login_email_btn {
			border: 1px solid @border;
			width: 400px;
			height: 42px;
			display: flex;
			margin-bottom: 24px;
			border-radius: 6px;
			box-sizing: border-box;
			padding: 0 14px;
			align-items: center;
			margin-top: 20px;
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
		.login_email {
			width: 400px;
			h2 {
				text-align: center;
				font-size: 24px;
				color: @color;
				margin-bottom: 20px;
			}
			p {
				width: 400px;
				font-size: 16px;
				line-height: 30px;
				span {
					color: #f62d51;
					cursor: pointer;
					text-decoration: underline;
				}
			}
		}
	}
</style>
<template>
	<div class="pass_index">
		<v-search-top></v-search-top>

		<div class="login_body">
			<div class="login_box" v-if="emailShow">
				<h1>忘记密码</h1>
				<div class="login_input">
					<i class="iconfont icon-zhucedenglumima"></i>
					<input type="text" class="blur_input" placeholder="请输入你的工作邮箱" v-model="userEmil">
				</div>
				<div class="login_input_two">
					<div class="login_pass">
						<i class="iconfont icon-zhucedengluyanzhengma"></i>
						<input type="text" class="blur_input" placeholder="请输入验证码" v-model="userWorld">
					</div>
					<div class="code">
						<s-identify :identifyCode="identifyCode"></s-identify>
					</div>
					<p @click="refreshCode">看不清，换一张</p>
				</div>
				<div class="login_input login_input_war" v-if="war">
					{{warData}}
				</div>
				<div class="login_input login_btn" @click="loginSubmit">
					发送到验证邮箱
				</div>
			</div>
			<!-- 跳转至邮箱 -->
			<div class="login_email" v-if="!emailShow">
				<h2>邮件发送成功</h2>
				<p>
					请到
					<span>{{userEmil}}</span> 查看来自巨掌广告平台的邮件,从邮件的提示中重置您的密码
				</p>
				<div class="login_email_btn" @click="Mailboxjump">
					去邮箱查看
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "codetest",
		data() {
			return {
				identifyCodes: "1234567890",
				identifyCode: "",
				war: false, //错误提醒
				warData: "",
				userEmil: "1154041905@163.com",
				userWorld: "",
				emailShow: true, //是否需要跳转邮箱 
			};
		},
		mounted() {
			this.identifyCode = "";
			this.makeCode(this.identifyCodes, 4);

			$(".blur_input").on("focus", function() {
				$(this)
					.parent()
					.css("border-color", "#2d76ed");
			});
			$(".blur_input").on("blur", function() {
				$(this)
					.parent()
					.css("border-color", "#dee2e6");
			});
		},
		methods: {
			loginSubmit() {
				if(this.userEmil == "" || this.userWorld == '') {
					this.war = true;
					this.warData = "邮箱或验证码不能为空！";
					return false
				}
				if(this.userWorld != this.identifyCode) {
					this.war = true;
					this.warData = "您输入的验证码不正确！";
					return false
				}
				this.emailShow = false
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
			Mailboxjump() { //邮箱跳转
				let leftNum = this.userEmil.indexOf('@')
				let newEmail = this.userEmil.substring(leftNum)
				let rightNum = newEmail.indexOf('.')
				let email = newEmail.substring(1, rightNum)
				console.log(email)
				switch(email) {
					case 'qq':
						window.location.href = 'http://www.mail.qq.com'
						break;
					case '163':
						window.location.href = 'http://www.mail.163.com'
						break;
					case 'sina':
						window.location.href = 'https://mail.sina.com.cn'
						break;
					case 'sohu':
						window.location.href = 'https://mail.sohu.com/fe/#/login'
						break;
					default:
						window.location.href = 'http://www.mail.163.com'
				}
			}
		}
	};
</script>