<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.advuser_index{
   box-sizing: border-box;
  padding: 60px 0 20px;
  background: #f7f7f7;
  .adver_nav{
    margin: 0px 15px 0;
    min-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  } 
  .advuser_content{
    min-width: 1200px;
    background: #fff;
    margin: 0 15px;
    overflow: hidden; 
    h1{
      font-size: 16px;
      margin-left: 14px;
      margin-top: 14px;
      font-weight: 600;
    }
  }
  .advuser_form{
    padding-left: 200px; 
    h5,h6{
      font-size: 12px;
      color: #aaa;
      margin-top: 6px;
    } 
    h6{
      color: @color;
      cursor: pointer;
      margin-top: 4px;
    }
  }
  .advuser_form_p{
    margin-top: 30px;
    margin-bottom: 8px;
  }
  .advuser_form_input{
    height: 40px;
    border: 1px solid @border;
    border-radius: 4px;
    outline: none;
    padding-left: 12px;
    line-height: 40px;
     &::-webkit-input-placeholder {
          color: #9a9a9a;
        } 
  }
  .advuser_form_fil{
    text-align: center;
    padding: 0 5px;
    cursor: pointer;
    overflow: hidden;
  }
  .advuser_form_boxfil{
    position: relative; 
    display: flex;
    line-height: 40px;
  }
  .imgclose{
    position: absolute;
    top: -10px;
    left: 126px;
    z-index: 200;
    cursor: pointer;
  }
  .advuser_form_none{
    position: absolute;
    opacity: 0;
    width: 122px;
    height: 40px;
    top: 0;
    left: 0;
    cursor: pointer;
    z-index: 100;
  }
  .warning{
    color: red;
    margin-left: 10px;
  }
  .advuser_istype{
    margin-top: 20px;
    h2{
      color: @color;
    }
    section{
      margin-left: 30px; 
    }
  }
  .adver_btn{
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    div{
      width: 160px;
      height: 44px;
      border: 1px solid @border;
      border-radius: 4px;
      margin-right: 30px;
      cursor: pointer;
      text-align: center;
      line-height: 44px;
      &.one{
        &:hover{
          color: #333;
          background-color: #ebebeb;
          border-color: #adadad;
        }
        &:active{
          background-image: none;
          outline: 0;
          -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
          box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
        }
      } 
      &.two{
        color: #fff;
        background: @color;
        &:hover{ 
          background-color: @btnhover;
          border-color: #adadad;
        }
        &:active{
          background-image: none;
          outline: 0;
          -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
          box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
        }
      }
    }
  }
}
</style>
<template>
  <div class="advuser_index">
    <!-- 导航 -->
     <v-header></v-header>

     <!-- 面包屑 -->
     <div class="adver_nav">
       <v-nav :pageName='pageName' :routeList='routeList'></v-nav> 
     </div>

     <div class="advuser_content">
       <h1>添加账户</h1>
       <div class="advuser_form"> 
          <p class='advuser_form_p'>账户名称</p>
          <div>
            <input type="text" placeholder="请设置账户名称" class="advuser_form_input" style="width: 300px" v-model="companyName">
            <span class="warning" v-if="warncompanyName">账户名称不能为空</span>
          </div>
          <h5>建议设置为公司或推广APP名称，便于管理</h5> 

          <p class='advuser_form_p'>选择证书文件</p>
          <div class="advuser_form_boxfil">
            <input type="file" class="advuser_form_none"  @change="getFile($event)" v-if="fileShow">
            <img src="../../../../images/components/u132.png" class="imgclose" alt="" v-if="isClose" @click="reSelection">
            <div class="advuser_form_input advuser_form_fil" style="width: 120px">{{fileDate}}</div> 
            <span class="warning" v-if="warnfile">{{warnfileDate}}</span>
          </div>
          <h5>上传证书获取Apple ID 广告信息，创建广告主后证书将不可修改，请注意</h5>
          <h6>如何获取证书文件？</h6>

           <p class='advuser_form_p' v-if="$route.query.type != 'edit'">选择绑定广告账户</p>
            <div v-if="$route.query.type != 'edit'">
                <el-select v-model="account" :disabled='!fileOk' :placeholder="selectPlaceholder" @change= 'selectchange(account)'>
                  <el-option
                    v-for="(item , index) in options"
                    :key="index"
                    :label="item.orgName"
                    :disabled="item.isExist" 
                    :value="index">
                  </el-option> 
                </el-select>
                <span class="warning" v-if="warnaccount">请选择账户</span>
            </div>
            <h5 v-if="$route.query.type != 'edit'">上传证书选择绑定广告账户，便于数据同步更新</h5>

            <div class="advuser_istype" v-if="isLoc">
              <h2>对公账户发票信息</h2>
              <section>
                <p class='advuser_form_p'>公司或产品名称</p>
                <div>
                  <input type="text"  class="advuser_form_input" style="width: 300px" placeholder="请填写公司或产品名称" v-model="company">
                  <span class="warning" v-if="warncompany">公司名称不能为空</span>
                </div>
                <p class='advuser_form_p'>主要联系人姓名</p>
                <div> 
                  <input type="text"  class="advuser_form_input" style="width: 300px" placeholder="请填写主要联系人姓名" v-model="buyerName">
                  <span class="warning" v-if="warnbuyerName">主要联系人姓名不能为空</span>
                </div>
                <p class='advuser_form_p'>主要联系人邮箱</p>
                <div>
                  <input type="text"  class="advuser_form_input" style="width: 300px" placeholder="请填写主要联系人邮箱" v-model="buyerEmail">
                  <span class="warning" v-if="warnbuyerEmail">主要联系人邮箱不正确</span>
                </div> 
                <p class='advuser_form_p'>结算联系人姓名</p>
                <div>
                  <input type="text"  class="advuser_form_input" style="width: 300px"   placeholder="请填写结算联系人姓名" v-model="billingContactName"> 
                  <span class="warning" v-if="warnbillingContactName">结算联系人姓名不能为空</span>
                </div>
                 <p class='advuser_form_p'>结算联系人邮箱</p>
                <div>
                  <input type="text"  class="advuser_form_input" style="width: 300px" placeholder="请填写结结算联系人邮箱" v-model="billingContactEmail"> 
                  <span class="warning" v-if="warnbillingContactEmail">结算联系人邮箱不正确</span>
                </div>
              </section>
            </div> 
            <div class="adver_btn">
              <div class="one" @click="$router.go(-1)">取消</div>
              <div class="two" @click="btn">{{$route.query.typ == 'edit' ? '保存' : '添加'}}</div>
            </div> 
       </div>
     </div>
  </div>
</template>

<script>
import NavList from '@components/AsmLaunch/Nav-List'
export default {
  data () {
    return {
      pageName: '广告中心',
      routeList: [{
        name: '广告中心',
        path: '/advertising-center/home',
        query: ''
      }],//面包屑 
      fileDate: '选择文件',//文件名称
      upath: '',//文件内容
      isClose: false,//关闭按钮是否显示
      fileShow: true,//上传input是否显示
      fileOk: false,//证书是否上传成功
      warnfile: false,//证书是否有效果
      warnfileDate: '',
      companyName: '',//用户名称
      warncompanyName: false,
      account: '',//证书信息
      accountObj: {},
      warnaccount: false,
      company: '',//公司名称
      warncompany: false,
      buyerName: '',//主要联系人名称
      warnbuyerName: false,
      buyerEmail: '',//主要联系人邮箱
      warnbuyerEmail: false, 
      billingContactName: '',//结算联系人姓名
      warnbillingContactName: false,
      billingContactEmail: '',//结算联系人邮箱
      warnbillingContactEmail: false,
      isLoc: false,//对公对私状态
      selectPlaceholder: '请先上传证书文件',//绑定提示
      options: [
        // { 
        //   orgName: '双皮奶',
        //   isExist: true,
        //   type: false
        // }
      ],
      loading: null, 
      loadingopaction: {
        lock: true,
        text: "上传中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      },
      ajaxObj: {}
        
    };
  },

  components: {
    'v-nav': NavList,
  },

  computed: {},

  created() {
    let queryData = this.$route.query
    this.routeList.push({
      name: '添加账户',
      path: '/advertising-center/usersetting',
      query: queryData
    })

    if(queryData.type == 'edit') {
      this.AjaxGetUser(7)
    }
  },

  updated() {},

  mounted() {
    this.$height('.advuser_index') 
    $(".advuser_form_input").on("focus", function() {
      $(this) 
        .css("border-color", "#2d76ed");
    }); 
     $(".advuser_form_input").on("blur", function() {
      $(this) 
        .css("border-color", "#dee2e6");
    });
  },

  destroyed() {},

  methods: {
    getFile: function (event) {
        this.loading = this.$loading(this.loadingopaction);

        this.upath = event.target.files[0];
        this.AjaxFileUp()
        .then(res => {
          this.loading.close();
          if(res.data.resultCode == 1000) { 
            this.fileDate = event.target.files[0].name
            $('.advuser_form_fil').css({
              background: '#f7f7f7',
              color: '#2d76ed'
            }) 
            this.options = res.data.data.aclsModelList
            this.accountObj = res.data.data
            this.warnfileDate = '上传成功'
            this.warnfile = false
            this.isClose = true
            this.fileShow = false
            this.fileOk = true
            this.selectPlaceholder = '请选择'
          }else{
            this.warnfile = true
            this.warnfileDate = res.data.detailError 
          } 
        })
        .catch(res => {
          alert('解析失败')
        }) 
      },
      
      reSelection() {
        //关×
        this.fileDate = '选择文件'
        $('.advuser_form_fil').css({
          background: '#fff',
          color: '#6c757d'
        })
        this.isClose = false
        this.fileShow = true
        this.fileOk = false 
        this.isLoc = false
        this.account = ''
        this.accountObj = {}
        this.selectPlaceholder = '请先上传证书文件'
        
      },

      selectchange(index) {
        //选择账户 
        this.isLoc = this.options[index].isLoc 
        this.ajaxObj = this.options[this.account] 
        this.ajaxObj.cerByte = this.accountObj.cerByte
        this. ajaxObj.cerHash = this.accountObj.cerHash
        
      },
      
      btn() { 
        var emailTest = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/; 
        this.ajaxObj.companyName = this.companyName 

        if(this.companyName == '') {//用户名
          $(".advuser_form_input").eq(0).css("border-color", "red"); 
          this.warncompanyName = true
          return false
        }else{
          $(".advuser_form_input").eq(0).css("border-color", "#dee2e6")
          this.warncompanyName = false
        }
        if(this.$route.query.type != 'edit') {//只有在新增情况才会有验证
          if(this.warnfile) {//证书失效
            return false
          }
          if(this.account === '') {
            this.warnaccount = true
            return false
          }else{  
              this.warnaccount = false
          }
        }
        if(this.isLoc == true) {//如果是对公账户 
          if(this.company == '') {
            $(".advuser_form_input").eq(2).css("border-color", "red"); 
            this.warncompany = true
            return false
          }else{
            $(".advuser_form_input").eq(2).css("border-color", "#dee2e6")
             this.warncompany = false
          }
          if(this.buyerName == '') {
            $(".advuser_form_input").eq(3).css("border-color", "red"); 
            this.warnbuyerName = true
            return false
          }else{
            $(".advuser_form_input").eq(3).css("border-color", "#dee2e6")
            this.warnbuyerName = false
          }
          if(this.buyerEmail == '' || !emailTest.test(this.buyerEmail)) {
            $(".advuser_form_input").eq(4).css("border-color", "red"); 
            this.warnbuyerEmail = true
            return false
          }else{
            $(".advuser_form_input").eq(4).css("border-color", "#dee2e6")
            this.warnbuyerEmail = false
          }
          if(this.billingContactName == '') {
            $(".advuser_form_input").eq(5).css("border-color", "red"); 
            this.warnbillingContactName = true
            return false 
          }else{
            $(".advuser_form_input").eq(5).css("border-color", "#dee2e6")
            this.warnbillingContactName = false
          } 
          if(this.billingContactEmail == '' || !emailTest.test(this.billingContactEmail)) {
            $(".advuser_form_input").eq(6).css("border-color", "red"); 
            this.warnbillingContactEmail = true
            return false
          }else{
            $(".advuser_form_input").eq(6).css("border-color", "#dee2e6")
            this.warnbillingContactEmail = false
          } 
          let newajaxObj = Object.assign({ 
            billingContactName: this.billingContactName,
            billingContactEmail: this.billingContactEmail,
            clientName: this.company,
            buyerName: this.buyerName,
            buyerEmail: this.buyerEmail
          } , this.ajaxObj) 
            if(this.$route.query.type == 'edit') {
              this.AjaxEdit(newajaxObj)
            }else{
              this.AjaxAdd(newajaxObj)
            }
        }else{//对私账户 
        this.ajaxObj = Object.assign({ 
            billingContactName: '',
            billingContactEmail:'',
            clientName: '',
            buyerName: '',
            buyerEmail: ''
          } , this.ajaxObj)
          if(this.$route.query.type == 'edit') {
              this.AjaxEdit(this.ajaxObj)
            }else{
              this.AjaxAdd(this.ajaxObj)
            }
            
        }

      },

      AjaxFileUp() {
        let url = '/api/v1/IntellAdvertiseApi/OrgUser/GetOrgListByCertZip'
        var zipFormData = new FormData();
        zipFormData.append('filename', this.upath);//filename是键，file是值，就是要传的文件，test.zip是要传的文件名
        let config = { headers: { 'Content-Type': 'multipart/form-data' } };   
        
        return this.$https.post(url , zipFormData  ) 
      },

      AjaxAdd(obj) {
        let url = '/api/v1/IntellAdvertiseApi/OrgUser/AddOrgUserModel'

        this.$https.post(url , JSON.stringify(obj))
        .then(res=>{
          this.$router.go(-1)
        })
      },

      AjaxGetUser(id) {
        let url = '/api/v1/IntellAdvertiseApi/OrgUser/GetUpdateOrgUserInfoModel?id=' + id

        this.$https.get(url)
        .then(res=>{
          let data = res.data.data
          this.fileDate = '无法修改'//文件名称 
          this.isClose = false//关闭按钮是否显示
          this.fileShow = false//上传input是否显示
          this.fileOk = true//证书是否上传成功
          this.companyName = data.companyName//用户名称  
          this.company =  data.clientName//公司名称 
          this.buyerName = data.buyerName//主要联系人名称 
          this.buyerEmail =  data.buyerEmail//主要联系人邮箱 
          this.billingContactName = data.billingContactName//结算联系人姓名
          this.billingContactEmail = data.billingContactEmail//结算联系人邮箱
          this.isLoc = data.isLoc//对公对私状态 
          this.ajaxObj = {
            orgUserInfoId : data.orgUserInfoId,
            paymentModel: data.paymentModel,
            isLoc: data.isLoc
          }
        })
      },

      AjaxEdit(obj) {
        let url = '/api/v1/IntellAdvertiseApi/OrgUser/UpdateOrgUserInfoModel'

        this.$https.post(url , JSON.stringify(obj)) 
        .then(res=>{
          this.$router.go(-1)
        })
      }
  }
}

</script>