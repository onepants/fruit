<template>
	<div id="content">
		<ul>
			<li :class="currentIndex == 0 ? 'active' : '' " @click="change(0)">果园优选</li>
			<li :class="currentIndex == 18 ? 'active' : '' " @click="change(18)">新鲜水果</li>
			<li :class="currentIndex == 11 ? 'active' : '' " @click="change(11)">水产海鲜</li>
			<li :class="currentIndex == 12 ? 'active' : '' " @click="change(12)">肉禽蛋类</li>
			<li :class="currentIndex == 14 ? 'active' : '' " @click="change(14)">乳品速食</li>
			<li :class="currentIndex == 17 ? 'active' : '' " @click="change(17)">时令鲜蔬</li>
			<li :class="currentIndex == 13 ? 'active' : '' " @click="change(13)">烘焙料理</li>
			<li :class="currentIndex == 16 ? 'active' : '' " @click="change(16)">粮油干货</li>
			<li :class="currentIndex == 126 ? 'active' : '' " @click="change(126)">礼盒券卡</li>
			<li :class="currentIndex == 135 ? 'active' : '' " @click="change(135)">果园周边</li>
		</ul>
		<div class="detail">
			<div class="msg">
				<div class="msg_bottom">
					<div v-for="(item,index) in detailImg" :key="index">
						<img :src="item.img"/>
						<p>{{item.name}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import MyAjax from "@/md/MyAjax.js"
	export default {
		data(){
			return{
				currentIndex:0,
				detailImg:[]
			}
		},
		methods:{
			change(index){
				this.currentIndex = index;
			}
		},
		mounted (){
			var dataUrl = "http://localhost:3000/kind?id="+this.currentIndex;
			var that = this;
			MyAjax.fetch(dataUrl,(data) => {
				var data = data.data.childrenList[0].class3Group;
				var arr = [];
				for(var item of data){
					arr.push({id:item.id,name:item.name,img:item.class_photo})
				}
				that.detailImg = arr;
			})
		},
		updated(){
//			var dataUrl = "http://localhost:3000/kind?id="+this.currentIndex;
//			var that = this;
//			MyAjax.fetch(dataUrl,(data) => {
//				var data = data.data.childrenList[0].class3Group;
//				var arr = [];
//				for(var item of data){
//					arr.push({id:item.id,name:item.name,img:item.class_photo})
//				}
//				that.detailImg = arr;
//			})
		}
	}
</script>

<style lang="scss" scoped>
	#content{
		display:flex;
	
		ul{
			width:.8rem;
			height:100%;
			background:#f5f5f5;
			li{
				width:100%;
				height:0.46rem;
				line-height:0.46rem;
				text-align:center;
				font-size: .15rem;
				&.active{
					background:#fff;
					border-left:2px solid #65A032; 
					color:#65A032;
				}
			}
		}
		
		.detail{
			flex:1;
			.msg{
				width:100%;
				height:100%;
				display:flex;
				flex-direction:column;
				.msg_bottom{
					width:90%;
					flex:1;
					margin-left:5%;				
					div{
						width:33.3%;
						height:0.98rem;
						float:left;	
						img{
							width:80%;
							margin-left:10%;
						}	
						p{
						    text-align:center;
						}			
					}
				}
			}
		}
	}	
</style>