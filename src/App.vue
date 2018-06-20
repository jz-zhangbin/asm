<template>
	<div id="app">
		<router-view/>
		<!--w-->
		<footer>©2012-2018 adjuz.net 巨掌互动科技（北京）有限公司 京ICP备14034813号</footer>
	</div>
</template>

<script>
	import "babel-polyfill";
	export default {
		name: "App"
	};
</script>

<style lang='less'>
	@import url("./base/commonCSS/common.css"); 
	@import url("./assets/iconfont/iconfont.css");
	#app {
		min-height: 100%;
		//height: 100%;
		position: relative;
		box-sizing: border-box;
		padding-bottom: 68px; 
	}
	
	.a_router {
		&:hover {
			color: #1559c8 !important;
		}
	}
	
	footer {
		height: 68px;
		width: 100%;
		text-align: center;
		line-height: 68px;
		background: #181e28;
		color: #969ba6;
		left: 0;
		right: 0;
		bottom: 0;
		position: absolute;
	}
</style>