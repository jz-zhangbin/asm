<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.task_index{  
        width: 320px;
        border: 1px solid @color;
        box-shadow: 0px 0px 6px @border;
        h4{
            height: 40px;
            background: @color;
            color: #fff;
            padding-left: 14px;
            line-height: 40px;
        }
        ul{ 
            width: 100%;  
            background: #fff;
            li{
                width: 100%;
                box-sizing: border-box;
                padding:0 10px;
                height: 34px;
                display: flex;
                align-items: center;
                justify-content: space-between; 
                aside{
                    font-size: 12px;
                    display: flex;
                    align-content: center;
                    p{
                        color: red;
                    }
                }
                span{
                    padding: 4px 8px;
                    display: block;
                    border: 1px solid @border;
                    cursor: pointer;
                    border-radius: 4px;
                    font-size: 12px;
                    color: @color;
                    &:hover{
                        border: 1px solid @color;
                    }
                } 
            }
        }
}
</style>
<template>
  <div class="task_index">
      <div class="task_tant">
          <h4>操作列表</h4>
          <ul>
            <li v-for="(ele,index) in list" :key="index">
                <aside> 正在{{ele.type}} <p>{{ele.num}}</p>  个广告系列...</aside> 
                <span @click="lookClick(index)">查看详情</span>
            </li>
          </ul>
      </div>
      <v-look v-if="lookShow" :name = 'listName'></v-look>
  </div>
</template>

<script>
import Look from './Task-Look-List'
export default {
  data () {
    return {
        listName: '',
        lookShow: false,
        list: [
            {
                type: '创建',
                num: 3
            },
            {
                type: '编辑',
                num: 3
            },
            {
                type: '启用',
                num: 3
            },
            {
                type: '暂停',
                num: 3
            }
        ]
    };
  },

  components: {
      'v-look' : Look
  },

  computed: {},

  created() {},

  updated() {},

  mounted() {},

  destroyed() {},

  methods: {
      lookClick(index) {
          this.listName = this.list[index].type
          console.log(this.listName)
          this.lookShow  = true
      }
  }
}

</script>