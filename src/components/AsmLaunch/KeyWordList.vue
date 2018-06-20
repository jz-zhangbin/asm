<template>
<div class="table">
     <el-table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="关键词"
     show-overflow-tooltip >
      <template slot-scope="scope">
            <span style="color:rgb(0,158,252)">{{ scope.row.KeyWord }} {{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="SearchIndex"
      label="搜索指数"
      width="158">
    </el-table-column>
    <el-table-column
      prop="Prevalence"
      label="流行度"
      width="260">
    </el-table-column>
    <el-table-column
      prop="RecentBiddingAPP"
      label="近期竞价APP"
      width="260">
    </el-table-column>
    <el-table-column
      label="操作"
      width="99">
       <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index,scope.row.id)"
          type="text"
          size="small">
         <span style="color:#000" >删除</span> 
        </el-button>
      </template>
    </el-table-column>

  </el-table>
   
  <el-pagination 
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
</div>
 
</template>
<style lang="less">
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.table{
    padding: 40px 0 0;
    tr td,th{
        border-right:1px solid @border;
        text-align: center;
        padding:8px 0;
    }
    tr th{
        background:rgb(248,249,250);
         line-height: 34px;
    }
    .el-pagination{
        width: 440px;
        margin:30px auto;
    }
}
.el-message-box{width: 300px;}
</style>


<script>
  export default {
    data() {
      return {
        tableData3: [{
          KeyWord: '智查添加关键词',
          SearchIndex: '10235',
          Prevalence: '98',
          RecentBiddingAPP: 12,
          id:"111111"
        },{
          KeyWord: '智查添加关键词',
          SearchIndex: '10235',
          Prevalence: '98',
          RecentBiddingAPP: 12,
          id:"222222"
        },{
          KeyWord: '智查添加关键词',
          SearchIndex: '10235',
          Prevalence: '98',
          RecentBiddingAPP: 12,
          id:"333333"
        },{
          KeyWord: '智查添加关键词',
          SearchIndex: '10235',
          Prevalence: '98',
          RecentBiddingAPP: 12,
          id:"44444"
        },{
          KeyWord: '智查添加关键词',
          SearchIndex: '10235',
          Prevalence: '98',
          RecentBiddingAPP: 12,
          id:"55555"
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        console.log(val)
        this.multipleSelection = val;
      },
      deleteRow(index,id){
         this.$confirm('是否删除所选关键词？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        //   type: 'warning',
        width:50,
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>