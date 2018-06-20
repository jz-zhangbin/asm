<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.task_look{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
    animation: animation1 0.5s ease-out;
    -webkit-animation: animation1 0.5s ease-out;
    section{
        padding: 20px;
        box-sizing: border-box;
        border-radius: 6px;
        background: #fff;  
        width: 600px; 
        height: 500px;
        position: absolute;
        margin: auto;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;  
        h1{
            font-size: 16px;
            margin-bottom: 20px;
            font-weight: bold;
        }
        .tant_index{
            width: 100%;
            height: 350px;
            overflow-y: auto;
            ul{
                width: 100%;
                box-sizing: border-box;
                border: 1px solid @border;
                margin-bottom: 14px; 
                li{
                    display: flex;
                    box-sizing: border-box;
                    border-bottom: 1px solid @border;
                    justify-content: space-between;
                    padding: 0 8px;
                    align-items: center;
                    height: 46px;
                    &:last-child{
                        border: none;
                    }
                    &:hover{
                        background: #f7f7f7;
                    }
                    span{
                        margin-right: 20px;
                        &.green{
                            color: #26B812;
                        }
                        &.red{
                            color: red;
                        }
                    }
                    div{
                        display: flex;
                        align-items: center;
                    }
                    &:nth-child(1){
                        height: 56px;
                        background: #f7f7f7; 
                        img{
                            width: 36px;
                            height: 36px;
                            border-radius: 6px;
                            margin-right: 10px;
                        }
                        div{
                            span{
                                font-size: 16px;
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
        }
    } 
    .btn_index{
        width: 100%;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        button{
            width: 120px;
        }
    }
}
@keyframes animation1 {
    0% { 
        opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes animation1 {
    0% {
      opacity: 0;
    }
    100% {
     opacity: 1;
    }  
  }
    
</style>
<template>
  <div class="task_look">
      <section>
          <h1>
              {{name}}列表
          </h1>
          <div class="tant_index">
              <ul v-for="(ele,index) in list" :key="index">
                  <li>
                      <div>
                          <img src="../../../../images/components/usa.png" alt="">
                          <span>{{ele.listName}}</span>
                      </div>
                      <p>投放地区 ： {{ele.country}}</p>
                  </li>
                  <li v-for="(ele2,index2) in ele.list" :key="index2">
                      <p>{{ele2.name}}</p>
                      <div>
                          <span>用时间 &nbsp; 01:59</span>
                          <span :class="{green: ele2.type == '成功' , red: ele2.type == '失败'}">{{name}}{{ele2.type}}</span>
                      </div>
                  </li>
              </ul> 
          </div>
          <div class="btn_index">
              <el-button @click="$parent.lookShow = false">关闭</el-button>
          </div>
      </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
        list: [
            {
                listName: '微信土著',
                country: '美国',
                list: [
                    {
                        name: '精准广告系列',
                        time: '01:23', 
                        type: '成功'
                    },
                    {
                        name: '精准广告系列',
                        time: '01:23', 
                        type: '失败'
                    },{
                        name: '精准广告系列',
                        time: '01:23', 
                        type: '等待'
                    }
                ]
            },
            {
                listName: '微信土著',
                 country: '美国',
                list: [
                    {
                        name: '精准广告系列',
                        time: '01:23', 
                        type: '成功'
                    },
                    {
                        name: '精准广告系列',
                        time: '01:23', 
                        type: '失败'
                    },{
                        name: '精准广告系列',
                        time: '01:23', 
                        type: '等待'
                    }
                ]
            },{
                listName: '微信土著',
                 country: '美国',
                list: [
                    {
                        name: '精准广告系列',
                        time: '01:23', 
                        type: '成功'
                    },
                    {
                        name: '精准广告系列',
                        time: '01:23', 
                        type: '失败'
                    },{
                        name: '精准广告系列',
                        time: '01:23', 
                        type: '等待'
                    }
                ]
            }
        ]
    };
  },
  
  props: {
      name: {}
  },

  components: {},

  computed: {},

  created() {},

  updated() {},

  mounted() {},

  destroyed() {},

  methods: {}
}

</script>