<style lang='less' scoped>
@color: #2d76ed;
@bgk: #f7f7f7;
@font_color: #6c757d;
@border: #dee2e6;
@btnhover: #1559c8;
@boxshado: #eeeeee;
.input_search{  
    width: 240px;
    border: 1px solid @border;
    border-radius: 4px;
    height: 30px;
    display: flex;
    position: relative;
    input{
      width: 190px;
      margin-left: 20px;
      border: none;
      outline: none;
      &::-webkit-input-placeholder {
          color: #9a9a9a;
        } 
    }
    i{ 
      display: block;
      border: 5px solid transparent;
      border-top: 5px solid #000;
      position: absolute;
      right: 15px;
      top: 13px; 
    }
    ul{
      width: 240px;
      box-sizing: border-box;
      padding:6px 12px;
      background: #fff;
      top: 32px;
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
    <input type="text" :placeholder="placevaluedata" v-model="valuedata" @input="inputFn(valuedata)">
    <i></i>
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

  computed: {},

  created() {},

  updated() {},

  mounted() {},

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