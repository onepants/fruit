<template>
	<div id="content">
		<img src="./../assets/745844_01.png"/>
		<div class="mark">{{userna}}</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				userna:""
			}
		},
		mounted(){
			var str = localStorage.getItem("username");
			this.userna = str;
		}
	}
</script>

<style scoped>
	#content{
		background:#F6F6F6;
	}
	.mark{
		width:150px;
		height:40px;
		position:absolute;
		top:20px;
		left:93px;
		background:#F6F6F6;
		line-height:40px;
		font-size:18px;
		font-weight:bold;
	}
</style>