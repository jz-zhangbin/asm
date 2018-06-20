<style lang='less' scoped>
.pie_index {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
  .pie_main {
    width: 630px;
    height: 400px;
    background: #fff;
    border-radius: 6px;
    margin: 100px auto;
    padding: 30px 30px 0;
    position: relative;
    animation: animation1 0.5s ease-out;
    -webkit-animation: animation1 0.5s ease-out;
    img{
      position: absolute; 
      top: 50%;
      left: 50%;
      transform: translateX(-50%);
      transform: translateY(-50%);
      display: block;
    }
  }
  @keyframes animation1 {
    0% {
      margin: 0 auto;
      transform: scale(0.8);
    }
    100% {
      margin: 100px auto;
      transform: scale(1);
    }
  }
  @-webkit-keyframes animation1 {
    0% {
      margin: 0 auto;
    }
    100% {
      margin: 100px auto;
    }
  }
  #myChart1 {
    width: 100%;
    height: 400px;
  }
  .icon-cha {
    position: absolute;
    right: 14px;
    top: 14px;
    cursor: pointer;
  }
}
</style>
<template>
	<div class="pie_index">
		<div class="pie_main">
      <img src="../../../images/components/loading.gif" alt="" v-if="loadingShow">
			<div id="myChart1"></div>
			<i class="iconfont icon-cha" @click="$parent.pieShow = false"></i>
		</div>
	</div>
</template>

<script>
import { datefn } from "@commonJS/dateList";
export default {
  data() {
    return {
      myChart: null,
      loadingShow: true
    };
  },
  mounted() {
    this.AjaxPie();
    // 基于准备好的dom，初始化echarts实例
  },

  methods: {
    AjaxPie() {
      this.loadingShow = true
      let url = "api/v1/IntellSearchApi/KeywordDetail/GetAllAppsRatio";
      let obj = {
        nationId: this.$parent.$parent.countryNow,
        keywordName: this.$parent.$parent.tableData.keywordName,
        begingTime: datefn(2)[this.$parent.$parent.propDate].data.beginTime,
        endTime: datefn(2)[this.$parent.$parent.propDate].data.endTime
      };

      this.$https.post(url, JSON.stringify(obj))
      .then(res => {
        this.echartsInit(res.data);
        this.loadingShow = false
      });
    },
    echartsInit(res) {
      let nameList = [];
      let dataList = [];
      let others = 0;
      for (var i in res.data.appsRatioByKeyword) {
        let obj = {
          value: res.data.appsRatioByKeyword[i],
          name: i
        };
        if (res.data.appsRatioByKeyword[i] > 0.02) {
          nameList.push(i);
          dataList.push(obj);
        } else {
          others += res.data.appsRatioByKeyword[i];
        }
      }

      nameList.push("Other");
      if(others != 0) {
        dataList.push({
          value: others.toFixed(4),
          name: "Other"
        }); 
      }  
      let myChart = this.$echarts.init(document.getElementById("myChart1"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: res.data.keywordName + "展示量占比图",
          subtext: "巨掌ASM",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}"
        },
        // legend: {
        // 	orient: "vertical",
        // 	left: "left",
        // 	data: nameList
        // },
        toolbox: {
          show: true,
          feature: {
            mark: {
              show: true
            },
            dataView: {
              show: true,
              readOnly: false
            },
            magicType: {
              show: true,
              type: ["pie", "funnel"]
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            //roseType : 'area',
            data: dataList,
            label: {
                normal: {
                    show: true, 
                    formatter: function(v) { 
                      let name = v.data.name
                      let num = parseInt(v.value *10000)/100 + '%' 
                      let weinum1 = null
                      let weinum2 = null
                      let weinum3 = null
                      let tmp = []
                      if(name.indexOf(':') != -1){ 
                        weinum1 = name.indexOf(':')
                        tmp.push(weinum1) 
                      }
                      if(name.indexOf('_') != -1){
                        weinum2 = name.indexOf('_')
                        tmp.push(weinum2) 
                      } 
                      if(name.indexOf('-') != -1){
                        weinum3 = name.indexOf('-')
                        tmp.push(weinum3) 
                      }   
                      
                      if(tmp.length == 0 && name.length > 20) { 
                          var lastStr = name.substring(0,20)
                          var laster = lastStr.substring(0,(lastStr.lastIndexOf(" ")))   
                          return laster  + '-' + num
                      }
                    
                      let newstr = name.substring(0,Math.min.apply(null, tmp)) 
                      if(newstr.length <= 20) { 
                        return newstr + '-' + num
                      }else{
                         var lastStr2 = newstr.substring(0,(newstr.lastIndexOf(""))) 
                         return lastStr2  + '-' + num
                      }  
                    }
                }, 
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    }
  }
};
</script>