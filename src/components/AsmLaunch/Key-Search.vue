<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.input_search{   
    border-radius: 4px;
    height: 40px;
    display: flex;
    position: relative;
    input{
      width: 210px;  
      height: 38px; 
      outline: none; 
      padding-left: 10px;
      border-radius: 4px;
      border: 1px solid @border;
      &::-webkit-input-placeholder {
          color: #9a9a9a;
        } 
    } 
    span{
      display: block; 
      width: 44px;
      height: 42px; 
      box-sizing: border-box;
      border: 1px solid @border;
      border-radius: 4px;
      margin-left: 14px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      &:hover{
        border: 1px solid @color;
      }
      i{
        line-height: 42px;
        text-align: center;
        font-size: 22px;
      }
    }
    ul{
      width: 220px;
      box-sizing: border-box;
      padding:6px 12px;
      background: #fff;
      top: 42px;
      left: 0;
      position: absolute;
      border: 1px solid @border; 
      z-index: 100; 
      li{
        height: 30px;
        line-height: 30px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        &:hover{
          background: #f7f7f7;
          color: green;
          cursor: pointer;
        }
      }
    } 
}
</style>
<template>
  <div class="input_search"> 
    <input type="text" :placeholder="placevaluedata" v-model="valuedata" >
    <span @click="inputFn(valuedata)">
      <i class="iconfont icon-icon-plus-search"></i>
    </span>
    <transition name="el-zoom-in-top">
        <ul v-show="show"  @mouseout="$parent.show = false" @mousemove="$parent.show = true"> 
          <li v-for="(ele,index) in inputList" :key="index" @click="listClick(index)">{{ele.name}}</li> 
        </ul>
    </transition>  
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  props: {
      show: {},
      valuedata: {},
      placevaluedata: {},
      inputList: {}
  },
  
  components: {},

  computed: {
    
  },

  created() {},

  updated() {},

  mounted() {
    $(".input_search input").on("focus", function() {
      $(this) 
        .css("border-color", "#2d76ed");
    });
    $(".input_search input").on("blur", function() {
      $(this) 
        .css("border-color", "#dee2e6");
    });
  },

  destroyed() {},

  methods: {
    inputFn(valuedata) {
      this.$parent.show = true
      this.$parent.valuedata = valuedata
      this.$emit('changeInput')
    },
    listClick(index) {
      this.$parent.show = false
      this.$emit('changeInputList',index)
    }
  }
}

</script>