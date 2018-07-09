<style lang='less' scoped>
@import url("../../../base/commonCSS/table.less");
.key_list1_index {
    width: 100%;
    .kl_top {
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
    }
    .kl_top_right {
        display: flex;
    }
    .kltr_btn {
        display: block;
        height: 32px;
        border: 1px solid @border;
        border-radius: 4px;
        line-height: 32px;
        padding: 0 12px;
        margin-left: 16px;
        cursor: pointer;
    }
    .kl_table {
        width: 100%;
        margin-top: 25px;
        table {
            width: 100%;
            border: 1px solid #dee2e6;
            box-shadow: 0 2px 2px @boxshado;
            tr {
                //表格内容
                &.table_data_tr {
                    td {
                        padding: 13px 0;
                    }
                    .table_datr_td {
                        cursor: pointer;
                        display: flex;
                        box-sizing: border-box;
                        padding-left: 28px;
                        align-items: center;
                        img {
                            width: 54px;
                            height: 54px;
                            border-radius: 10px;
                            margin-right: 15px;
                            display: block;
                        }
                        p {
                            text-align: left !important;
                            span {
                                display: block;
                                font-size: 12px;
                                color: #aaa;
                                &:first-child {
                                    font-size: 14px;
                                    color: @font_color;
                                    font-weight: 500;
                                }
                            }
                        }
                    }
                    // .table_datr_p {
                    //   p {
                    //     color: #aaa;
                    //     &:first-child {
                    //       color: @color;
                    //       font-weight: 600;
                    //     }
                    //   }
                    // }
                }
            }
        }
    }
}
</style>

</style>
<style lang='less'>
.key_list1_index {
    .el-select {
        width: 226px;
        height: 32px;
    }
    .el-input,
    .el-input--suffix,
    .el-input__inner {
        height: 32px;
    }
    .el-input__icon {
        line-height: 34px !important;
    }
}
</style>
<template>
  <div class="key_list1_index">
    <div class="kl_top">
      <el-select v-model="value" @change="changeFun(value)">
        <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <div class="kl_top_right">
        <span class="kltr_btn" @click="pieClick" v-if="tableInnerCode.resultCode != 404">
          <i class="iconfont icon-tongji5"></i>
          展示量占比图
        </span>
        <span class="kltr_btn" @click="excelOut" v-if="userType">
          <i class="iconfont icon-download"></i>
          导出
        </span>
      </div>
    </div>
    <div class="kl_table">
      <!-- 头部表格 -->
      <table id="tan">
        <tr>
          <th style="width: 30%">应用</th>
          <th style="width: 14%" class="sl_table_po">
            <div class="sl_table_flex">
              展示量占比
              <div class="table_tandb">
                <span @click="paiClick(0,'one')" :class="{bandb_one: showList[0].one}"></span>
                <span @click="paiClick(0,'two')" :class="{bandb_two: showList[0].two}"></span>
              </div>
              <div class="sl_t_dis">
                <i class="iconfont icon-wenhao-fill"> </i>
                <span class="sl_t_is" style="width:260px;">该APP在该关键词的总体广告展示量中获得的广告展示量比</span>
                <span class="sl_t_san"></span>
              </div>
            </div>
          </th>
          <th style="width: 14%" class="sl_table_po">
            <div class="sl_table_flex">
              预估价格
              <div class="sl_t_dis">
                <i class="iconfont icon-wenhao-fill"> </i>
                <span class="sl_t_is" style="width:260px;">该APP竞价该关键词的预计投放价格</span>
                <span class="sl_t_san"></span>
              </div>
            </div>
          </th>
          <th style="width: 14%" class="sl_table_po">
            <div class="sl_table_flex">
              搜索排名
              <!-- <div class="table_tandb">
								<span @click="paiClick(1,'one')" :class="{bandb_one: showList[1].one}"></span>
								<span @click="paiClick(1,'two')" :class="{bandb_two: showList[1].two}"></span>
							</div> -->
              <div class="sl_t_dis">
                <i class="iconfont icon-wenhao-fill"> </i>
                <span class="sl_t_is" style="width:260px;">该APP在该关键词的App Store搜索结果中的排名</span>
                <span class="sl_t_san"></span>
              </div>
            </div>
          </th>
          <th style="width: 14%" class="sl_table_po">
            <div class="sl_table_flex">
              总榜
              <!-- <div class="table_tandb">
								<span @click="paiClick(2,'one')" :class="{bandb_one: showList[2].one}"></span>
								<span @click="paiClick(2,'two')" :class="{bandb_two: showList[2].two}"></span>
							</div> -->
            </div>
          </th>
          <th style="width: 14%" class="sl_table_po">
            <div class="sl_table_flex">
              分类榜
              <!-- <div class="table_tandb">
								<span @click="paiClick(3,'one')" :class="{bandb_one: showList[3].one}"></span>
								<span @click="paiClick(3,'two')" :class="{bandb_two: showList[3].two}"></span>
							</div> -->
            </div>
          </th>
        </tr>

        <!-- 表格内容 -->
        <tr class="table_data_tr" v-for="(ele,index) in tableInner" :key="index" v-if="tableInnerCode.resultCode == 1000">
          <td>
            <div class="table_datr_td" @click="routerClick(ele.appInfoModel.appStoreId)">
              <img :src="ele.appInfoModel.appImgUrl" alt="">
              <p>
                <span>{{ele.appInfoModel.appName}}</span>
                <span>ID: &nbsp;{{ele.appInfoModel.appStoreId}}</span>
                <span>开发商: &nbsp;{{ele.appInfoModel.aristName}}</span>
              </p>
            </div>
          </td>
          <td>
            {{ele.ratio | percentage}}
            <i class="iconfont icon-icon-test" style="color: #2d76ed;" @click="AjaxBroken(index)"></i>
          </td>
          <td>{{ele.estimatePrice | numNull}}</td>
          <td>{{ele.searchRank == 0 ? '-' : ele.searchRank}}</td>
          <td class="table_datr_p">
            <p>{{ele.appInfoModel.totalRank == 0 ? '-' : ele.appInfoModel.totalRank}}</p>
            <p>{{ele.appInfoModel.appPrice == 0 ? '免费' : '收费'}}</p>
          </td>
          <td class="table_datr_p">
            <p>{{ele.appInfoModel.classificationRank == 0 ? '-' : ele.appInfoModel.classificationRank}}</p>
            <p>{{ele.appInfoModel.appTypeName}} , {{ele.appInfoModel.appPrice == 0 ? '免费' : '收费'}}</p>
          </td>
        </tr>
        <!-- 暂无关键词 -->
        <tr v-if="tableInnerCode.resultCode == 404">
          <td colspan="6" style="height: 150px">该关键词暂无APP竞价数据</td>
        </tr>
        <!-- loading -->
        <tr v-if="loadingfirst">
          <td colspan="6" style="height: 80px;">
            <img src="../../../images/components/loading.gif" alt="">
          </td>
        </tr>
      </table>
      <!-- 分页 -->
      <div class="page_index" v-if="userType && tableInnerCode.data">
        <div>{{pagedata}}</div>
        <div>
          <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="20" layout="prev, pager, next, jumper" :total="tableInnerCode.data.totalCount">
          </el-pagination>
        </div>
      </div>
      <usersign v-if="!userType"></usersign>
    </div>
    <!-- 饼状图 -->
    <transition name="el-fade-in-linear">
      <pie v-if="pieShow"></pie>
    </transition>
  </div>
</template>

<script>
import excel from "@commonJS/excelFn";
import pie from "./pie-chart";
import usersign from "@components/AsmQuery/User-Sign";
import { datefn } from "@commonJS/dateList";
export default {
    data() {
        return {
            currentPage3: 1, //当前页
            options3: [],
            pieShow: false,
            value: "",
            showList: [
                {
                    //控制排序的三角
                    one: true,
                    two: false
                },
                {
                    one: false,
                    two: false
                },
                {
                    one: false,
                    two: false
                },
                {
                    one: false,
                    two: false
                }
            ],
            //tableInner: [],
            createBrokenIndex: null, //折线图下标
            myChart: null,
            sortDate: {
                one: "ratio",
                two: 0
            }
        };
    },

    props: {
        valueData: {},
        userType: {},
        tableInner: {},
        tableInnerCode: {
            type: Object,
            default: {
                data: {
                    totalCount: 0
                }
            }
        },
        loadingfirst: {}
    },
    components: {
        pie,
        usersign
    },

    computed: {
        pagedata() {
            if (this.currentPage3 * 20 <= this.tableInnerCode.data.totalCount) {
                let ls =
                    "当前第 " +
                    ((this.currentPage3 - 1) * 20 + 1) +
                    "-" +
                    this.currentPage3 * 20 +
                    ", 共 " +
                    this.tableInnerCode.data.totalCount;
                return ls;
            } else {
                let ls =
                    "当前第 " +
                    ((this.currentPage3 - 1) * 20 + 1) +
                    "-" +
                    this.tableInnerCode.data.totalCount +
                    ", 共" +
                    this.tableInnerCode.data.totalCount;
                return ls;
            }
        }
    },

    filters: {
        numNull: function(value) {
            return value == 0 ? "-" : value;
        },
        percentage: function(value) {
            let num = (value * 100).toFixed(2);
            return num + "%";
        }
    },

    watch: {
        $route() {
            this.value = this.options3[0].value;
        },
        valueData() {
            //this.tableInnerCode.data.totalCount = 0
            this.$parent.propDate = this.value;
        }
    },

    mounted() {
        this.options3 = datefn(2);
        this.value = this.options3[0].value;
    },

    methods: {
        pieClick() {
            this.pieShow = true;
        },

        changeFun(value) {
            //切换时间进行请求
            this.tableInnerCode.data.totalCount = 0;
            $(".table_datr_broken").remove();
            this.$parent.propDate = this.value;
            this.$emit("peiDate", value, this.sortDate);
        },

        paiClick(num, name) {
            //排序的按钮
            this.showList.map((ele, index) => {
                ele.one = false;
                ele.two = false;
            });
            this.showList[num][name] = true;
            if (num == 0) {
                this.sortDate = {
                    one: "ratio",
                    two: name == "one" ? 0 : 1
                };
            } else if (num == 1) {
                this.sortDate = {
                    one: "searchRank",
                    two: name == "one" ? 0 : 1
                };
            }

            this.$emit("pageDate", this.currentPage3, this.sortDate);
        },

        excelOut() {
            //表格导出
            let title = [
                "应用",
                "ID",
                "开发商",
                "展示量占比",
                "预估价格",
                "搜索排名",
                "总榜",
                "分类榜"
            ];
            let arr = [];
            for (var i = 0; i < this.tableInner.length; i++) {
                var newarr = [];
                newarr.push(this.tableInner[i].appInfoModel.appName);
                newarr.push(this.tableInner[i].appInfoModel.appStoreId);
                newarr.push(this.tableInner[i].appInfoModel.aristName);
                newarr.push(this.tableInner[i].ratio);
                newarr.push(this.tableInner[i].estimatePrice);
                newarr.push(this.tableInner[i].searchRank);
                newarr.push(this.tableInner[i].appInfoModel.totalRank);
                newarr.push(this.tableInner[i].appInfoModel.classificationRank);
                arr.push(newarr);
            }
            excel(title, arr, "tab");
        },

        brokenClick(res, index) {
            //添加折线图
            let dateList = [];
            let contentList = [];
            for (var i in res.ratioListByDate) {
                dateList.push(i);
                let ls = parseInt(res.ratioListByDate[i] * 10000);
                contentList.push(ls / 100);
            }

            if (this.createBrokenIndex != index) {
                let domstring = ` <tr class="table_datr_broken" style="height: 390px;background: #f7f7f7;" >
                            <td colspan="6" style="position:relative"> 
                              <div style="position: absolute; top:0; left: 0;width: 100%;height: 390px;" id="myChart"></div>  
                            </td> 
                          </tr>`;
                if ($("#tan")) {
                    //如果请求没有结束，跳到其它页面不允许插入
                    $("#tan tr")
                        .eq(index + 1)
                        .after(domstring); //添加兄弟节点
                }
                if (res.length == 0) {
                    //当后台数据为空时
                    $(".table_datr_broken td div")
                        .html("暂时没有数据！")
                        .css({
                            textAlign: "center",
                            lineHeight: "390px",
                            fontSize: "26px"
                        });
                } else {
                    //进行请求，渲染折线图
                    this.myChart = this.$echarts.init(
                        document.getElementById("myChart")
                    );
                    this.myChart.setOption({
                        xAxis: {
                            type: "category",
                            data: dateList
                        },
                        yAxis: {
                            type: "value"
                        },
                        grid: {
                            x: "20%",
                            y: 60,
                            x2: "20%",
                            y2: 60
                        },
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                type: "cross"
                            },
                            backgroundColor: "rgba(245, 245, 245, 0.8)",
                            borderWidth: 1,
                            borderColor: "#ccc",
                            padding: 10,
                            textStyle: {
                                color: "#000"
                            },
                            position: function(pos, params, el, elRect, size) {
                                var obj = { top: 10 };
                                obj[
                                    ["left", "right"][
                                        +(pos[0] < size.viewSize[0] / 2)
                                    ]
                                ] = 30;
                                return obj;
                            },
                            extraCssText: "width: 170px"
                        },
                        series: [
                            {
                                data: contentList,
                                type: "line",
                                itemStyle: {
                                    normal: {
                                        color: "#2d76ed"
                                    }
                                }
                            }
                        ]
                    });
                }

                this.createBrokenIndex = index; //标记下标
            } else {
                this.createBrokenIndex = null; //如果当前相当就清除下标
            }
        },

        handleSizeChange(val) {
            this.$emit("pageDate", val, this.sortDate);
            $(window).scrollTop($("#tan").offset().top);
        },

        handleCurrentChange(val) {
            this.$emit("pageDate", val, this.sortDate);
            $(window).scrollTop($("#tan").offset().top);
        },

        routerClick(id) {
            //应用跳转
            $(".table_datr_broken").remove(); //删除所有折线
            this.$router.push({
                path: "/application",
                query: {
                    id: id,
                    country: this.$parent.countryNow,
                    endTime: datefn(2)[this.value].data.endTime,
                    beginTime: datefn(2)[this.value].data.beginTime
                }
            });
        },

        AjaxBroken(i) {
            $(".table_datr_broken").remove(); //删除所有折线

            let url = "/api/v1/IntellSearchApi/KeywordDetail/GetAppRatioList";
            let obj = {
                nationId: this.$parent.countryNow,
                appStoreId: this.tableInner[i].appInfoModel.appStoreId,
                keywordName: this.$parent.keyName,
                begingTime: datefn(2)[this.value].data.beginTime,
                endTime: datefn(2)[this.value].data.endTime
            };

            this.$https.post(url, JSON.stringify(obj)).then(
                res => {
                    this.brokenClick(res.data.data, i);
                },
                () => {
                    this.brokenClick([], i);
                }
            );
        }
    }
};
</script>