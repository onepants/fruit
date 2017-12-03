<template>
	<footer id="footer">
		<ul>
			<li v-for="(item,index) in list" :key="index">
				<router-link :to="item.path">
					<i class="iconfont" :class="item.icon"></i>
					<p>{{item.name}}</p>
				</router-link>
			</li>
		</ul>
	</footer>	
</template>

<script>
	export default {
		data(){
			return {
				list: [
					{path:"/home",name:"首页",icon:"icon-1"},
					{path:"/kind",name:"分类",icon:"icon-leimupinleifenleileibie--"},
					{path:"/cart",name:"购物车",icon:"icon-gouwuche"},
					{path:"/user",name:"我的",icon:"icon-my"}
				]
			}
		}
	}
</script>

<style>
</style>