<template>
  <div id="app" > 
    <router-view/>
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
</style>
