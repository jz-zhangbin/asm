<style lang='less' scoped>
@import url("../../../base/commonCSS/table.less");
@import url("../../../base/commonCSS/scroll.css");
.rdl_index {
    box-sizing: border-box;
    padding: 60px 0 20px;
    min-width: 1200px;
    color: @font_color;
    .rdl_name {
        min-width: 1200px;
        padding: 25px 45px;
        box-sizing: border-box;
        div {
            border-bottom: 1px solid @border;
            font-size: 24px;
            height: 40px;
            width: 100%;
        }
    }
    .rdl_body {
        min-width: 1200px;
        box-sizing: border-box;
        padding: 0 45px;
    }
    .rdl_body_top {
        width: 100%;
        display: flex;
        margin-bottom: 25px;
        p {
            line-height: 34px;
            margin-right: 11px;
        }
    }
    .rdl_body_table_top {
        width: 100%;
        box-shadow: 0 2px 2px @boxshado;
    }
    .sl_table {
        min-width: 100%;
        box-sizing: border-box;
        table { 
            tr {
                td,
                th {
                    border: 1px solid @border;
                }
            }
        }
    }
    .sl_dt_img {
        div {
            display: flex;
            align-items: center;
            justify-content: center !important;
        }
    }
    .rdl_key_list {
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 15px 20px 0px 0;
        max-width: 500px;
        max-height: 224px;
        overflow: hidden;
        span {
            display: block;
            border: 1px solid @border;
            padding: 10px 12px;
            border-radius: 6px;
            cursor: pointer;
            margin: 2px 0 10px 20px;
            float: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:hover {
                background: #f7f7f7;
                color: @color;
            }
            &:active {
                box-shadow: inset 0 3px 3px rgba(0, 0, 0, 0.125);
            }
        }
    }
    // table切换
    .rdl_body_nav {
        width: 100%;
        margin-top: 60px;
        section {
            display: flex;
            height: 32px;
            justify-content: center;
            span {
                display: block;
                margin-right: 45px;
                font-size: 18px;
                padding: 0 6px;
                cursor: pointer;
                &.rdl_section_is {
                    border-bottom: 2px solid @color;
                    color: @color;
                }
            }
        }
    }
}
</style>
<style lang='less'>
.rdl_index {
    .el-select {
        width: 114px;
        height: 34px;
        line-height: 34px;
    }
    .el-input,
    .el-input--suffix,
    .el-input__inner {
        height: 34px;
    }
    .el-input__icon {
        line-height: 34px !important;
    }
}
</style>

<template>
  <div class="rdl_index">
    <v-search-top></v-search-top>
    <!-- 搜索结果 -->
    <div class="rdl_name">
      <div>
        [{{keyName}}]的搜索结果
      </div>
    </div>
    <div class="rdl_body">
      <div class="rdl_body_top">
        <p class="sl_center_p">地区</p>
        <el-select v-model="countryNow" placeholder="请选择" @change="changeFun(countryNow)">
          <el-option v-for="item in countryList" :key="item.nationId" :label="item.nationCHSName" :value="item.nationId">
          </el-option>
        </el-select>
      </div>
      <!-- 头部表格 -->
      <div class="rdl_body_table_top">
        <div class="sl_table">
          <table id="ta">
            <tr>
              <th style="width: 20%">关键词</th>
              <th style="width: 11%" class="sl_table_po">
                <div class="sl_table_flex">
                  流行度
                  <div class="sl_t_dis">
                    <i class="iconfont icon-wenhao-fill"> </i>
                    <span class="sl_t_is" style="width:260px;"> 流行度来源于App Store官方数据。该指数代表此关键词在App Store中的搜索流行度，数值最高为100。</span>
                    <span class="sl_t_san"></span>
                  </div>
                </div>
              </th>
              <th style="width: 11%" class="sl_table_po">
                <div class="sl_table_flex">
                  搜索指数
                  <div class="sl_t_dis">
                    <i class="iconfont icon-wenhao-fill"> </i>
                    <span class="sl_t_is" style="width:260px;">搜索指数来源于App Store官方数据。该指数代表此关键词在App Store中的搜索热度。一般来说，指数越高，则该词在每天被搜索的次数也越多。</span>
                    <span class="sl_t_san"></span>
                  </div>
                </div>
              </th>
              <th style="width: 11%" class="sl_table_po">
                <div class="sl_table_flex">
                  近期竞价APP
                  <div class="sl_t_dis">
                    <i class="iconfont icon-wenhao-fill"> </i>
                    <span class="sl_t_is" style="width:260px;">近7天竞价过该关键词APP数量</span>
                    <span class="sl_t_san"></span>
                  </div>
                </div>
              </th>
              <th style="width: 36%" class="sl_table_po">
                <div class="sl_table_flex">
                  搜索关联词
                  <div class="sl_t_dis">
                  </div>
                </div>
              </th>
              <th style="width: 11%" class="sl_table_po">
                操作
              </th>
            </tr>
            <tr v-if="keyWordType">
              <td style="width: 20%" class="sl_dt_name">{{tableData.keywordName}}</td>
              <td style="width: 11%">{{tableData.popularityIndex}}</td>
              <td style="width: 11%">{{tableData.searchIndex}}</td>
              <td style="width: 11%" class="sl_dt_img">
                <div>
                  {{tableData.currentAppNum}}
                </div>
              </td>
              <td style="width: 36%;" v-if="tableData.associatedWords.length != 0">
                <div class="rdl_key_list">
                  <span v-for="(item,index2) in tableData.associatedWords" :key="index2" @click="keyWorldRouter(index2)" :title="item">{{item}}</span>
                </div>
              </td>
              <!-- 当列表为空时 -->
              <td v-if="tableData.associatedWords.length == 0" style="height: 224px">暂无搜索关联词</td>
              <td style="width: 11%">
                <div class="sl_t_dis" v-if="tableData.hotKeywordTemStatus == 0">
                  <i class="iconfont icon-plus-add" @click="addCiClick">
                  </i>
                  <span class="sl_t_is" style="width:114px;">添加至新建词组</span>
                  <span class="sl_t_san"></span>
                </div>
                <div class="sl_t_dis" v-if="tableData.hotKeywordTemStatus == 1">
                  <i class="iconfont icon-xuanze" style="color:#43c2ac;" @click="addCiClick">
                  </i>
                  <span class="sl_t_is" style="width:114px;">从新建词组删除</span>
                  <span class="sl_t_san"></span>
                </div>
              </td>
            </tr>
            <!-- 列表未空时 -->
            <tr v-if="!keyWordType" class="none_tr">
              <td style="height:224px">{{tableData.keywordName}}</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>暂无搜索关联词</td>
              <td>-</td>
            </tr>
          </table>
        </div>
      </div>
      <!-- table切换 -->
      <div class="rdl_body_nav">
        <section>
          <span v-for="(ele,index) in components_list" :key="index" :class="{rdl_section_is: index == components_index}" @click="componentsClick(index)">{{ele.name}}
          </span>
        </section>
      </div>
      <!-- table组件 -->
      <component @pageDate='pageDate' @peiDate='peiDate' @pageMoreDate='pageMoreDate' :is="currentView" ref="childr" :valueData="countryNow" :tableMoreData='tableMoreData' :tableMoreCode='tableMoreCode' :tableInnerCode='tableInnerCode' :userType="userType" :tableInner='tableInner' :loadingfirst='loadingfirst' :loadingfirst2='loadingfirst2'>
      </component>
    </div>
  </div>
</template>

<script>
import list1 from "./list1";
import list2 from "./list2";
import { datefn } from "@commonJS/dateList";
import { mapState } from "vuex";
import { AjaxRemove } from "@commonJS/ajaxServes";
export default {
    data() {
        return {
            //模块的切换
            components_list: [
                {
                    name: "历史竞价APP",
                    com: list1
                },
                {
                    name: "更多关联词",
                    com: list2
                }
            ],
            components_index: 0,
            currentView: list1,
            keyWordType: true, //当前关键词详情是否有内容
            propDate: 0, //当前自己选中的日期
            keyName: "", //应用名称
            countryNow: "", //当前国家
            tableData: {
                //关键词详情
                associatedWords: []
            },
            tableMoreData: {}, //更多关联词列表
            tableMoreCode: {},
            tableInner: {}, //历史关联词列表
            tableInnerCode: {},
            loadingfirst: true,
            loadingfirst2: true,
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
        list1,
        list2
    },

    computed: {
        ...mapState({
            countryList: state => state.Home.countryList,
            userType: state => state.Sign.userType,
            IsManager: state => state.Sign.IsManager
        })
    },

    watch: {
        $route() {
            this.keyName = this.$route.query.key;
            this.$refs.childr.currentPage3 = 1;
            this.$store.dispatch("GET_COUNTRYLIST").then(() => {
                this.$store.state.Home.countryList.map((ele, index) => {
                    if (ele.nationId == this.$route.query.country) {
                        this.countryNow = this.$store.state.Home.countryList[
                            index
                        ].nationId;
                    }
                });
            });
            $(".table_datr_broken").remove(); //删除所有折线
            this.loading = this.$loading(this.loadingopaction);
            this.AJaxKeyWord(this.$route.query.country);
            this.AjaxHistoryList(
                1,
                this.$route.query.country,
                datefn(3).beginTime,
                datefn(3).endTime,
                "ratio",
                0
            );
            this.AJaxKeyWordMore(1, this.$route.query.country);
        }
    },

    beforeRouteEnter(to, from, next) {
        let ls = to.query.key;
        next(vm => {});
    },

    mounted() {
       // this.$height(".rdl_index");
        this.keyName = this.$route.query.key;

        this.$store.dispatch("GET_COUNTRYLIST").then(() => {
            this.$store.state.Home.countryList.map((ele, index) => {
                if (ele.nationId == this.$route.query.country) {
                    this.countryNow = this.$store.state.Home.countryList[
                        index
                    ].nationId;
                }
            });
        });

        this.loading = this.$loading(this.loadingopaction);

        this.AJaxKeyWord(this.$route.query.country);

        this.AjaxHistoryList(
            1,
            this.$route.query.country,
            datefn(3).beginTime,
            datefn(3).endTime,
            "ratio",
            0
        );

        this.AJaxKeyWordMore(1, this.$route.query.country);
    },

    methods: {
        AjaxHistoryList(
            pageIndex,
            nationId,
            beginTime,
            endTime,
            sortName,
            upordown
        ) {
            // 历史列表
            $(".table_datr_broken").remove(); //删除所有折线
            this.loadingfirst = true;
            this.tableInner = [];
            let GetHistoryAppListUrl =
                "/api/v1/IntellSearchApi/KeywordDetail/GetHistoryAppList";
            var sortObj = {};
            if (sortName == "ratio") {
                sortObj = {
                    ratio: upordown
                };
            } else if (sortName == "searchRank") {
                sortObj = {
                    searchRank: upordown
                };
            }
            let data = {
                pageIndex: pageIndex,
                pageSize: 20,
                requestPar: {
                    keywordName: this.$route.query.key,
                    nationId: nationId,
                    beginTime: beginTime,
                    endTime: endTime
                },
                orderByParDic: sortObj
            };

            this.$https
                .post(GetHistoryAppListUrl, JSON.stringify(data))
                .then(res => {
                    this.loadingfirst = false;
                    this.tableInnerCode = res.data;
                    this.tableInner = res.data.data.list;
                })
                .catch(res => {
                    alert("请求错误！");
                    this.loadingfirst = false;
                });
        },

        AJaxKeyWord(nationId) {
            //关键词详情信息
            $(".table_datr_broken").remove(); //删除所有折线
            let keyWordDateUrl =
                "/api/v1/IntellSearchApi/KeywordDetail/Getkeywordinfo";
            let obj = {
                nationId,
                keywordName: this.$route.query.key
            };

            this.$https.post(keyWordDateUrl, JSON.stringify(obj)).then(res => {
                if (res.data.resultCode == 1000) {
                    //有内容
                    this.keyWordType = true;
                    this.tableData = res.data.data;
                } else if (res.data.resultCode == 404) {
                    //无内容
                    this.keyWordType = false;
                    this.tableData = res.data.data;
                     
                } 
                if (this.loading != null) {
                    this.loading.close();
                }
            });
        },

        AJaxKeyWordMore(pageIndex, nationId) {
            //更多关联词
            $(".table_datr_broken").remove(); //删除所有折线
            this.loadingfirst2 = true;
            this.tableMoreData = [];
            let url =
                "/api/v1/IntellSearchApi/KeywordDetail/GetAssociatedWords";
            let obj = {
                pageIndex,
                pageSize: 20,
                requestPar: {
                    nationId,
                    keywordName: this.$route.query.key,
                    beginTime: datefn(0).beginTime,
                    endTime: datefn(0).endTime
                }
            };

            this.$https.post(url, JSON.stringify(obj)).then(res => {
                this.tableMoreCode = res.data;
                this.tableMoreData = res.data.data.list;
                this.loadingfirst2 = false;
            });
        },

        changeFun(value) {
            //切换国家
            if (this.components_index == 0) {
                this.$refs.childr.showList.map((ele, index) => {
                    // 切换国家让排序归零
                    ele.one = false;
                    ele.two = false;
                });
                this.$refs.childr.showList[0].one = true;
            }

            this.loading = this.$loading(this.loadingopaction);

            this.AJaxKeyWord(value);

            this.AjaxHistoryList(
                1,
                value,
                datefn(2)[this.propDate].data.beginTime,
                datefn(2)[this.propDate].data.endTime,
                "ratio",
                0
            );

            this.AJaxKeyWordMore(1, value);
        },

        addCiClick() {
            //收藏操作
            if (!this.userType) {
                this.$message({
                    message: "请先登录！",
                    type: "warning"
                });
                return false;
            }
            let obj = this.tableData 
            if (this.tableData.hotKeywordTemStatus == 0) {
                this.tableData.hotKeywordTemStatus = 1;
                AjaxRemove(obj.keywordName, 0, obj.searchIndex, obj.popularityIndex, obj.currentAppNum); //添加
            } else {
                this.tableData.hotKeywordTemStatus = 0;
                AjaxRemove(obj.keywordName, 1, obj.searchIndex, obj.popularityIndex, obj.currentAppNum); //删除
            }  
        },

        componentsClick(index) {
            //table切换
            this.components_index = index;
            this.currentView = this.components_list[index].com;
        },

        peiDate(num, sortData) {
            //切换日期进行请求
            this.$refs.childr.showList.map((ele, index) => {
                ele.one = false;
                ele.two = false;
            });

            this.tableInnerCode.resultCode = 1000;

            this.$refs.childr.showList[0].one = true;

            this.AjaxHistoryList(
                1,
                this.countryNow,
                datefn(2)[num].data.beginTime,
                datefn(2)[num].data.endTime,
                "ratio",
                0
            );
        },

        pageDate(num, sortData) {
            //分页请求
            this.AjaxHistoryList(
                num,
                this.countryNow,
                datefn(2)[this.propDate].data.beginTime,
                datefn(2)[this.propDate].data.endTime,
                sortData.one,
                sortData.two
            );
        },

        pageMoreDate(num) {
            this.AJaxKeyWordMore(num, this.countryNow);
        },

        keyWorldRouter(index2) {
            //关键词跳转
            this.$router.push({
                path: "/rankingDetails-List",
                query: {
                    key: this.tableData.associatedWords[index2],
                    country: JSON.stringify(this.countryNow)
                }
            });
        }
    }
};
</script>