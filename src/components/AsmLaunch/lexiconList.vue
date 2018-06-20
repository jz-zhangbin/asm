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
      label="词组名称"
     show-overflow-tooltip >
      <template slot-scope="scope">
            <span style="color:rgb(0,158,252)">
                <router-link :to="{path: '/KeyWordList?id='+scope.row.id+''}"> 
                  {{ scope.row.PhraseName }} {{ scope.row.id }}
                </router-link>
               
            </span>
      </template>
    </el-table-column>
    <el-table-column
      prop="KeyNumber"
      label="关键词数"
      width="158">
    </el-table-column>
    <el-table-column
      prop="CreationTime"
      label="创建时间"
      width="260">
    </el-table-column>
    <el-table-column
      label="操作"
      width="150">
       <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index,scope.row.id)"
          type="text"
          size="small">
          删除
        </el-button>
        <el-button
          @click.native.prevent="emit(scope.$index)"
          type="text"
          size="small">
          编辑
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
        border-right:1px solid #ebeef5;
        text-align: center;
        padding:8px 0;
        a{
            color: #2d76ed;
        }
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
</style>


<script>
  export default {
    data() {
      return {
        tableData3: [{
          PhraseName: 'US_TapTapDash_EXACT_TEST-...',
          KeyNumber: '1520',
          CreationTime: '2017-11-27 14:13:43',
          id:"111111"
        },{
          PhraseName: 'US_TapTapDash_EXACT_TEST-...',
          KeyNumber: '1520',
          CreationTime: '2017-11-27 14:13:43',
          id:"222222"
        },{
          PhraseName: 'US_TapTapDash_EXACT_TEST-...',
          KeyNumber: '1520',
          CreationTime: '2017-11-27 14:13:43',
          id:"333333"
        },{
          PhraseName: 'US_TapTapDash_EXACT_TEST-...',
          KeyNumber: '1520',
          CreationTime: '2017-11-27 14:13:43',
          id:"44444"
        },{
          PhraseName: 'US_TapTapDash_EXACT_TEST-...',
          KeyNumber: '1520',
          CreationTime: '2017-11-27 14:13:43',
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
      },emit(index){
         var data = this.tableData3[index]
         this.that.prentemit(2,data)   
      }
    },props:["that",'prentemit']
  }
</script>