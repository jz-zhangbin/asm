<template>
  <div id="app" > 
    <router-view/>
    <footer>©2012-2018 adjuz.net 巨掌互动科技（北京）有限公司 京ICP备14034813号</footer> 
  </div>
</template>

<script>
import 'babel-polyfill'
export default {
  name: 'App'
}
</script>

<style lang='less'> 
@import url('./assets/css/common.css');
@import url('./assets/iconfont/iconfont.css');
#app{
  height: 100%;
  min-height: 100%;
  position: relative;
}
footer{
      height: 68px;
      width: 100%;
      text-align: center;
      line-height: 68px;
      background: #181e28;
      color: #969ba6; 
      left: 0;
      right: 0;
      bottom: 0;
    } 
</style>
