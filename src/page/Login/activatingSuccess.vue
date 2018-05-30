<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
.acitiva_index {
  height: 100%;
  margin-top: 60px;
  .acitiva_box {
    min-width: 1200px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding-top: 120px;
    background: url(http://static.adjuz.com/asmmaster/img/login_left.png) 0 0
        no-repeat,
      url(http://static.adjuz.com/asmmaster/img/login_right.png) bottom right
        no-repeat;
    h1 {
      height: 54px;
      text-align: center;
      font-size: 24px;
    }
    .acitiva_btn {
      margin-top: 10px;
      width: 300px;
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
  }
}
</style>
<template>
  <div class="acitiva_index">
    <v-search-top :searchShow='searchShow'></v-search-top>

    <div class="acitiva_box">
      <h1>{{messages}}</h1>
      <div class="acitiva_btn" @click="backClick">返回登录</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchShow: false,
      urlData: "",
      urlObj: {
        clientkey: "",
        clientdate: "",
        clientac: ""
      },
      arr: [],
      messages: ''
    };
  },

  created() {  
    if(JSON.stringify(this.$route.query) == "{}"){
           this.backClick()
       }

      for (var i in this.$route.query) {
        this.urlData = i; 
      } 
    
      if(this.urlData[0] == '-') {
        this.arr = this.urlData.substr(1).split("-") 
      }else{
        this.arr = this.urlData.split("-") 
      }   
      
      this.urlObj = {
        clientkey: this.arr[0],
        clientdate: this.arr[1],
        clientac: this.arr[2]
      }

      this.Ajax(this.urlObj)
  },

  mounted() { 
  },

  methods: {
    backClick() {
      this.$router.push("/login");
    },
    Ajax(obj) {
      let url = '/api/v1/IntellSearchApi/Register/UserRegisterActive'

      this.$https.post(url , JSON.stringify(obj))
      .then((res) => {
        this.messages = res.data.message
      })
    }
  }
};
</script>