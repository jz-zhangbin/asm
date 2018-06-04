<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
.reset_index {
  min-height: 100%;
  margin-top: 60px; 
    background: url(http://static.adjuz.com/asmmaster/img/login_left.png) 0 0
        no-repeat,
      url(http://static.adjuz.com/asmmaster/img/login_right.png) bottom right
        no-repeat;
  .login_body {
    min-width: 1200px;
    min-height: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding-top: 120px;
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
  }
}
</style>
<template>
  <div class="reset_index">
      <v-search-top :searchShow='searchShow'></v-search-top>
      <div class="login_body">
			<div class="login_box">
				<h1>重置密码</h1>
				<div class="login_input">
					<i class="iconfont icon-zhucedenglumima"></i>
					<input type="text" placeholder="新密码"  v-model="passWord">
				</div>
				<div class="login_input">
					<i class="iconfont icon-zhucedenglumima"></i>
					<input type="test" placeholder="确认密码"  v-model="nwePassWord">
				</div> 
                <div class="login_input login_input_war" v-if="war">
					{{warData}}
				</div>
				<div class="login_input login_btn" @click="submitClick">
					确认
				</div> 
			</div>
		</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchShow: false,
      passWord: "",
      nwePassWord: "",
      war: false,
	  warData: "",
	  arr: [],
	  urlData: '',
	  urlObj: {
		  uid: '',
		  key: '',
		  newPwd: '',
		  newPwd2: ''
	  }
    };
  },

  components: {},

  created() {
    if (JSON.stringify(this.$route.query) == "{}") {
      this.backClick();
    }

    for (var i in this.$route.query) {
      this.urlData = i;
    }

    if(this.urlData[0] == '-') {
        this.arr = this.urlData.substr(1).split("-") 
      }else{
        this.arr = this.urlData.split("-") 
      } 
        
    this.urlObj.uid = this.arr[0]
    this.urlObj.key = this.arr[1]
  },

  mounted() {},

  methods: {
    submitClick() {
      if (this.passWord == "" || this.nwePassWord == "") {
        this.war = true;
        this.warData = "请输入新密码";
        return false;
	  }
	  if(this.passWord.length < 6 || this.passWord.length > 16) {
		this.war = true;
        this.warData = "密码长度为6-16位";
        return false;
	  }
      if (this.passWord != this.nwePassWord) {
        this.war = true;
        this.warData = "两次密码不一致";
        return false;
	  }
	  
	  this.urlObj.newPwd = this.passWord
	  this.urlObj.newPwd2 = this.nwePassWord
	  this.Ajax(this.urlObj)
	},
	
    backClick() {
      this.$router.push("/modif-password");
	},

	Ajax(obj) {
		let url = '/api/v1/IntellSearchApi/UserInfo/UserResetPassword'

		this.$https.post(url , JSON.stringify(obj))
		.then( res=> {
			if(res.data.resultCode == 2100) {
				this.war = true;
        		this.warData = res.data.message;
			}
			if(res.data.resultCode == 2300) {
				this.war = true
				this.warData = res.data.message
			}
			if(res.data.resultCode == 1000) {
				this.war = true
				this.warData = '修改成功，正在跳转登录页面。'
				let _this = this
				setTimeout(() => {
					_this.$router.push('/login')
				}, 1000);
			}
		})
	}
  }
};
</script>