<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.advan_search{
    background-color: rgba(0,0,0,0.6);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: 1000;
    .advan_search_content{
        width: 830px;
        height: 460px;
        border-radius: 10px;
        background-color: #fff;
        position: absolute;
        margin: auto;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0; 
        section{
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 0 20px;
            position: relative;
            overflow: hidden;
            .close{
                position: absolute;
                right: 20px;
                top: 20px;
                cursor: pointer;
            }
            .title{
                font-size: 18px;  
                padding: 15px;
                margin-bottom: 10px;
            }
        }
        ul{
            li{
                margin-bottom: 12px;
                display: flex;
                p{
                    width: 80px;
                    text-align: right;
                    margin-right: 14px;
                    line-height: 40px;
                    font-weight: bold;
                }
                .input_div{
                    height: 40px;
                    box-sizing: border-box;
                    padding: 0 10px;
                    border-radius: 4px;
                    margin-right: 12px;
                    line-height: 40px;
                    display: flex;
                    border: 1px solid @border;
                    span{
                        margin-right: 10px;
                    }
                    input{
                        width: 80px;
                        padding-left: 10px;
                        box-sizing: border-box;
                        border: none;
                        outline: none;
                    }
                    .baifen{
                        line-height: 38px;
                    }
                }
            }
        }
    }
    .search_btn{
        width: 140px;
        height: 40px;
        border: @border;
        line-height: 40px;
        cursor: pointer;
        line-height: 40px; 
        text-align: center;
        cursor: pointer;
        background: @color;
        color: #fff;
        border-radius: 4px;
        margin: 20px auto 0;
        &:hover{
            background: @btnhover;
        }
    }
}
</style>
<style lang='less'>
.advan_search{
    .one{
        .el-select {
            width: 114px; 
        }
    }
    .two{
        .el-select {
            width: 220px; 
        }
    }
    .input_div{
        .el-input__inner{
            height: 38px;
        } 
        .el-select { 
             margin-top: -1px;
            width: 60px;  
            height: 32px !important; 
        }
        .el-input__inner{
             height: 32px !important;
        }
        .el-input .el-input--suffix .is-focus{
            height: 32px !important;
        }
    }
} 
</style>

<template>
  <div class="advan_search">
      <div class="advan_search_content">
          <section>
               <i class="iconfont icon-cha close" @click="close"></i>
               <p class="title">高级搜索</p>
               <ul>
                   <li class="one" v-if="searchType == '国家'">
                       <p>按国家</p>
                       <el-select v-model="countryNow" placeholder="请选择">
                            <el-option v-for="item in countryList" :key="item.nationId" :label="item.nationCHSName" :value="item.nationId">
                            </el-option>
                        </el-select>
                   </li>
                   <li class="one" v-if="searchType == '搜索匹配'">
                       <p>搜索匹配</p>
                       <el-select v-model="searchMatchingValue" placeholder="请选择">
                            <el-option v-for="item in searchMatching" :key="item" :label="item" :value="item">
                            </el-option>
                        </el-select>
                   </li>
                   <li class="one" v-if="searchType == '匹配类型'">
                       <p>匹配类型</p>
                       <el-select v-model="matching" placeholder="请选择">
                            <el-option v-for="item in matchingList" :key="item" :label="item" :value="item">
                            </el-option>
                        </el-select>
                   </li>
                   <li class="two">
                       <p>按日期</p>
                       <el-select v-model="datevalue" >
                            <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select> 
                   </li>
                   <li>
                       <p>按预算</p>
                       <div class="input_div">
                           <span>总预算</span>
                            <el-select v-model="symbol1">
                                <el-option v-for="item in options4" :key="item" :label="item" :value="item">
                                </el-option>
                             </el-select>
                             <input type="text" placeholder="输入数字">
                       </div>
                       <div class="input_div">
                           <span>日预算</span>
                           <el-select v-model="symbol2">
                                <el-option v-for="item in options4" :key="item" :label="item" :value="item">
                                </el-option>
                             </el-select>
                             <input type="text" placeholder="输入数字">
                       </div>
                   </li>
                   <li>
                       <p>按平均值</p>
                       <div class="input_div">
                           <span>平均CPA</span>
                           <el-select v-model="symbol3">
                                <el-option v-for="item in options4" :key="item" :label="item" :value="item">
                                </el-option>
                             </el-select>
                             <input type="text" placeholder="输入数字">
                       </div>
                       <div class="input_div">
                           <span>平均CPC</span>
                           <el-select v-model="symbol4">
                                <el-option v-for="item in options4" :key="item" :label="item" :value="item">
                                </el-option>
                             </el-select>
                             <input type="text" placeholder="输入数字">
                       </div>
                   </li>
                   <li>
                       <p>按量级</p>
                       <div class="input_div">
                           <span>展示数</span>
                           <el-select v-model="symbol5">
                                <el-option v-for="item in options4" :key="item" :label="item" :value="item">
                                </el-option>
                             </el-select>
                             <input type="text" placeholder="输入数字">
                       </div>
                       <div class="input_div">
                           <span>点击数</span>
                           <el-select v-model="symbol6">
                                <el-option v-for="item in options4" :key="item" :label="item" :value="item">
                                </el-option>
                             </el-select>
                             <input type="text" placeholder="输入数字">
                       </div>
                       <div class="input_div">
                           <span>下载数</span>
                           <el-select v-model="symbol7">
                                <el-option v-for="item in options4" :key="item" :label="item" :value="item">
                                </el-option>
                             </el-select>
                             <input type="text" placeholder="输入数字">
                       </div>
                   </li>
                   <li>
                       <p>按转化率</p>
                       <div class="input_div">
                           <span>点击率</span>
                           <el-select v-model="symbol8">
                                <el-option v-for="item in options4" :key="item" :label="item" :value="item">
                                </el-option>
                             </el-select>
                             <input type="text" placeholder="输入百分比">
                             <div class="baifen">%</div>
                       </div>
                       <div class="input_div">
                           <span>下载转换率</span>
                           <el-select v-model="symbol9">
                                <el-option v-for="item in options4" :key="item" :label="item" :value="item">
                                </el-option>
                             </el-select>
                             <input type="text" placeholder="输入百分比">
                             <div class="baifen">%</div>
                       </div>
                   </li>
               </ul>
               <div class="search_btn" @click="btn">搜索</div>
          </section> 
      </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { datefn } from "@commonJS/dateList";
export default {
  data () {
    return {
        countryNow: '',
        options3: [], 
        searchMatching: ['是','否'],
        matchingList: ['精准匹配','广泛匹配'],
        matching: '',
        searchMatchingValue: '',
        datevalue: "",
        options4: ['-','≥','≤'],
        symbol1: '-',
        symbol2: '-',
        symbol3: '-',
        symbol4: '-',
        symbol5: '-',
        symbol6: '-',
        symbol7: '-',
        symbol8: '-',
        symbol9: '-'
    };
  },

  components: {},

  props: {
      searchType: {}
  },

  computed: {
      ...mapState({
      countryList: state => state.Home.countryList, 
    }),
  },

  created() {
      this.$store.dispatch("GET_COUNTRYLIST").then(() => {
        this.countryNow = this.$store.state.Home.countryList[0].nationId; 
    });
    this.options3 = datefn(2);
    this.datevalue = this.options3[0].value;
  },

  updated() {},

  mounted() { 
  },

  destroyed() {},

  methods: {
      close() { 
          this.$parent.advanShow = false
      },
      btn() {
          this.$emit('advancedFun','搜索完成')
          this.$parent.advanShow = false
      }
  }
}

</script>