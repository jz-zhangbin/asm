<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.audience_form{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 1000;
    .audience_form_box{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 625px;
        max-height: 580px;
        margin: auto;
        padding: 10px 35px 0 15px;
        background: #fff;
        border-radius: 6px;
        overflow-y: auto; 
    }
    .form_row{
        display: flex;
        margin-top: 20px;
        p{
            width: 90px;
            line-height: 40px;
            text-align: right;
            margin-right: 16px;
            font-weight: bold;
        }
    }
    .top_input{
        display: flex; 
        width: 288px;
        height: 38px;
        border: 1px solid @border;
        border-radius: 4px;
        img{
            width: 22px;
            height: 22px; 
            margin: 8px 10px 0;
        }
        aside{
            line-height: 36px;
            max-width: 200px;
            overflow: hidden; 
            text-overflow:ellipsis;
            white-space:nowrap
        }
    }
    .top_two{
        display: flex;
        flex-wrap: wrap;
        max-width: 500px;
        span{
            box-sizing: border-box;
            padding:8px 10px;
            border: 1px solid @border;
            background: #f7f7f7;  
            display: block;
            margin:0 10px 0px 0; 
            margin-bottom: 10px;
            img{
                width: 20px;
                height: 20px;  
                margin-right: 4px;
                margin-top: -2px;
                vertical-align: middle;
                &.imgclass{
                    width: 14px;
                    height: 14px;
                }
            }
        }
    }
    .yu_set{
        display: flex;  
        li{
            width: 155px;
            height: 155px;
            border: 1px solid @border;
            margin-right: 10px;
            box-sizing: border-box;
            padding: 15px 0 ;
            background: #f7f7f7;
            h2{
                text-align: center;
                margin-bottom: 14px;
            }
            div{
                display: flex;
                font-size: 12px;
                margin-bottom: 6px;
                span{
                    font-size: 12px;
                    width: 45%;
                    text-align: left;
                    &:nth-child(1){
                        width: 55%;
                        text-align: right;
                    }
                }
            }
        }
    }
    .top_two_two{
        span{
            padding: 8px 20px;
            background: #f7f7f7;
            border-radius: 4px;
        }
    }
    .top_two_three{ 
        span{
             background: #fff;
             border:1px solid  @color;
             border-radius: 4px;
        }
         
    }
    .key_name{
        line-height: 40px;
        color: #000;
    }
    .bom_date{
        line-height: 38px;
        padding-left: 10px;
    }
    .form_btn{
        display: flex; 
        justify-content: center;
        margin: 30px;
        width: 100%;
        button{
            width: 150px;
            margin: 16px;
        }
    }
}
</style>
<template>
  <div class="audience_form">
      <div class="audience_form_box">
          <div class="form_row">
              <p>APP名称</p>
              <div class="top_input">
                  <img src="../../images/moni/appimg_03.png" alt="">
                  <aside>games-games-games-game</aside>
              </div>
          </div>
          <div class="form_row">
              <p>投放国家</p>
              <div class="top_two">  
                  <span><img class="imgclass" src="../../images/components/u571.png" alt="">中华人民共和国</span> 
                  <span><img class="imgclass" src="../../images/components/u571.png" alt="">中华人民共和国</span>
                  <span><img class="imgclass" src="../../images/components/u571.png" alt="">中华人民共和国</span>
              </div>
          </div>
          <div class="form_row">
              <p>预算设置</p>
              <ul class="yu_set"> 
                  <li>
                      <h2>智能匹配</h2>
                      <div>
                          <span>总预算：</span>
                          <span>￥1.00</span>
                      </div>
                       <div>
                          <span>日预算： </span>
                          <span>￥1.00</span>
                      </div>
                       <div>
                          <span>默认CPC： </span>
                          <span>￥1.00</span>
                      </div>
                       <div>
                          <span>默认CPA： </span>
                          <span>￥1.00</span>
                      </div>
                  </li>
                  <li>
                      <h2>精准匹配</h2>
                      <div>
                          <span>总预算：</span>
                          <span>￥1.00</span>
                      </div>
                       <div>
                          <span>日预算： </span>
                          <span>￥1.00</span>
                      </div>
                       <div>
                          <span>默认CPC： </span>
                          <span>￥1.00</span>
                      </div>
                       <div>
                          <span>默认CPA： </span>
                          <span>￥1.00</span>
                      </div>
                  </li>
                  <li>
                      <h2>广泛匹配</h2>
                      <div>
                          <span>总预算：</span>
                          <span>￥1.00</span>
                      </div>
                       <div>
                          <span>日预算： </span>
                          <span>￥1.00</span>
                      </div>
                       <div>
                          <span>默认CPC： </span>
                          <span>￥1.00</span>
                      </div>
                       <div>
                          <span>默认CPA： </span>
                          <span>￥1.00</span>
                      </div>
                  </li>
              </ul>
          </div>
          <div class="form_row" v-if="nameType == '广告系列'">
              <p>广告系列命名</p>
              <div class="top_two top_two_two">  
                  <span>国家</span>
                  <span>APP缩写</span>
                  <span>匹配模式</span>
                  <span>国家</span>
                  <span>APP缩写</span>
                  <span>匹配模式</span> 
              </div>
          </div>
          <div class="form_row">
              <p>广告组命名</p>
              <div class="top_two top_two_two">  
                  <span>国家</span>
                  <span>APP缩写</span>
                  <span>匹配模式</span>
                  <span>国家</span>
                  <span>APP缩写</span>
                  <span>匹配模式</span> 
              </div>
          </div>
          <div class="form_row">
              <p>投放设备</p>
              <div class="top_two top_two_three">  
                  <span><img src="../../images/components/u570.png" alt="">iPhone/iPad</span>
                  <span><img src="../../images/components/u570.png" alt="">iPhone</span>
                  <span><img src="../../images/components/u570.png" alt="">iPad</span> 
              </div>
          </div>
          <div class="form_row">
              <p>受众类型</p>
              <div class="top_two top_two_three">  
                  <span><img src="../../images/components/u570.png" alt="">未下载用户</span>
                  <span><img src="../../images/components/u570.png" alt="">所有用户</span> 
              </div>
          </div>
          <div class="form_row">
              <p>受众性别</p>
              <div class="top_two top_two_three">  
                  <span><img src="../../images/components/u570.png" alt="">所有</span>
                  <span><img src="../../images/components/u570.png" alt="">男</span>
                  <span><img src="../../images/components/u570.png" alt="">女</span> 
              </div>
          </div>
          <div class="form_row">
              <p>受众年龄</p>
              <div class="top_two">  
                  <span>不限</span>
                  <span>18-80</span>
                  <span>30-40</span> 
              </div>
          </div>
          <div class="form_row">
              <p>关键词组</p>
              <div class="key_name">games-games-games-game</div>
          </div>
          <div class="form_row">
              <p>投放时间</p>
              <div class="top_input bom_date">  
                  2017-8-20  至 2018-9-20
              </div>
          </div>
          <div class="form_btn">
              <el-button @click="$parent.formDataShow = false">取消</el-button>
              <el-button type="primary" @click="trueOk">确认创建</el-button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

    props:{
        nameType: {}
    },

  components: {},

  computed: {},

  created() {},

  updated() {},

  mounted() {},

  destroyed() {},

  methods: {
      trueOk() {
          this.$parent.formDataShow = false
      }
  }
}

</script>