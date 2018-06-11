<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eee; 
@import url("../../../base/commonCSS/scroll.css");
.iconfont {
  cursor: pointer;
}

.kc_index {
  min-width: 1200px; 
  box-sizing: border-box;
  padding-top: 60px;
  .kc_body {
    width: 100%;
    .kc_top {
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
    .kc_center {
      display: flex;
      justify-content: center;
      line-height: 50px;
      p {
        color: #000;
        font-weight: 520;
      }
      button {
        width: 50px;
        height: 50px;
        background: @color;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        text-align: center;
        line-height: 50px;
        color: #f7f7f7;
        outline: none;
        &:hover {
          background: @btnhover;
        }
        i {
          font-size: 24px;
        }
      }
    }
    .kc_ct_search {
      width: 500px;
      height: 50px;
      box-sizing: border-box;
      border: 1px solid @border;
      border-radius: 6px;
      margin: 0 16px;
      position: relative;
      input {
        width: 100%;
        height: 48px;
        box-sizing: border-box;
        padding: 0 22px;
        line-height: 48px;
        display: block;
        border-radius: 6px;
        border: none;
        outline: none;
        &::-webkit-input-placeholder {
          color: #9a9a9a;
        }
      }
      .kc_over {
        width: 500px;
        height: 0px;
        position: absolute;
        top: 60px;
        left: 0;
        box-shadow: 0 2px 2px @boxshado;
        overflow: hidden;
        border-radius: 6px;
      }
      ul {
        width: 500px;
        height: 240px;
        overflow-y: auto;
        border: 1px solid @border;
        border-radius: 6px;
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
            width: 300px;
            font-weight: 540;
            color: #000;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          b {
            width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
.kc_index {
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
	<div class="kc_index">
		<v-search-top></v-search-top>
		<div class="kc_body">
			<banner :bannerName='bannerName'></banner>
			<div class="kc_top">
				<p class="sl_center_p">地区</p>
				<el-select v-model="countryNow" placeholder="请选择">
					<el-option v-for="item in countryList" :key="item.nationId" :label="item.nationCHSName" :value="item.nationId">
					</el-option>
				</el-select>
			</div>
			<!-- 搜索 -->
			<div class="kc_center">
				<p>选择APP</p>
				<div class="kc_ct_search">
					<input type="text" placeholder="请输入应用名称" v-model="APPinfor" @focus="focusInput" @blur="blurInput">
					<div class="kc_over">
						<ul>
							<li v-for="(ele,index) in list" :key="index" @click="routerClick(index)">
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
	</div>
</template>

<script>
import banner from "@components/AsmQuery/Banner";
import { mapState } from "vuex";
import qs from "qs";
export default {
  data() {
    return {
      countryNow: "",
      bannerName: "竞品对比",
      APPinfor: "",
      list: [],
      loading: null,
      loadingopaction: {
        lock: true,
        text: "加载中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      }
    };
  },

  components: {
    banner
  },

  computed: {
    ...mapState({
      countryList: state => state.Home.countryList,
      userType: state => state.Sign.userType
    })
  },

  created() {  
    this.$store.dispatch("GET_COUNTRYLIST")
    .then(() => {
      this.countryNow = this.$store.state.Home.countryList[0].nationId;
    });
  },

  mounted() {
    this.$height('.kc_index') 
    
    $(document).bind("click", function(e) {
      var target = $(e.target);
      if (target.closest(".btnclass").length == 0) {
        $(".kc_over").css('height','0');
      }
    });
  },

  methods: {
    focusInput() {
      $(".kc_ct_search").css("border-color", "#2d76ed");
    },
    blurInput() {
      $(".kc_ct_search").css("border-color", "#dee2e6");
    },

    routerClick(index) {
      this.$router.push({
        path: "/keyword-comparison-list",
        query: {
          key: this.countryNow,
          id: this.list[index].appStoreId
        }
      });
    },

    btnClick() {
      if (this.APPinfor == "") {
        this.$message({
          message: "搜索内容不能为空！！！",
          type: "warning"
        });
      } else {
        this.loading = this.$loading(this.loadingopaction);
        this.Ajax();
      }
    },

    Ajax() {
      let url = "/api/v1/IntellSearchApi/Index/GetCompetitiveAppInfo?nationId=" + this.countryNow + "&count=10" + "&searchContent=" + this.APPinfor;
      this.$https.get(url)
      .then(res => {
        this.list = res.data.data.list;
        let ls = "";
        if (this.list.length > 5) {
          ls = "242";
        } else {
          ls = this.list.length * 40;
        }
        if (res.data.resultCode == 1000) {
          $(".kc_over").css('height', ls + "px");
        }
        this.loading.close();

        //如果搜索内容为空给一个提醒
        if (this.list.length == 0) {
          this.$message({
            message: "对不起没有搜索到对应的APP！",
            type: "warning"
          });
        }
      });
    }
  }
};
</script>