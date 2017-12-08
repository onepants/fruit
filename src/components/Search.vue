<template>
	<div id="content">
		<div class="headers">
			<router-link to="/kind"><div class="back"><i class="iconfont icon-fanhui"></i>返回</div></router-link>
			<div class="sear"><i class="iconfont icon-fangdajing"></i><input type="text" placeholder="新鲜水果、生鲜" v-model="keys" @keyup="keyup()"/></div>
			<div class="btn" @click = "change()">搜索</div>
		</div>
		<div class="abc">
			<p>热门搜索</p>
			<div v-for="(item,index) in keyword" :key="index">
				{{item}}
			</div>
		</div>	
		<div class="list">
			<ul v-for="(item,index) in keylist" :key="index">
				<li>{{item}}</li>
			</ul>
		</div>	
		<div class="lists">
			<ul v-for="(item,index) in list" :key="index">
				<li>
					<div class="img">
						<img :src="item.photo"/>
					</div>
					<div class="name">
						<p>{{item.product_name}}</p>
						<p class="small">{{item.product_desc}}</p>
						<p class="value">{{item.volume}}</p>
						<p><span class="price">￥{{item.price}}</span><span class="tomorrow">明日达</span></p>
					</div>
					<div id="add">+</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import MyAjax from "@/md/MyAjax.js"
	export default {
		data(){
			return {
				keyword:[],
				keylist:[],
				keys:"",
				list:[]
			}
		},
		methods:{
			change(){
				var dataUrl = "http://localhost:3000/search?id="+this.keys;
				var that = this;
				var arr = [];
				document.getElementsByClassName("list")[0].style.display = "none";
				MyAjax.fetch(dataUrl, (data) => {
					that.list = data.data;
					console.log(data.data)
				})
			},
			keyup(){
				var dataUrl = "http://localhost:3000/keyup?id="+this.keys;
				var that = this;
				var arr = [];
				if(that.keys !== ""){
					document.getElementsByClassName("abc")[0].style.display = "none";
				}else{
					document.getElementsByClassName("abc")[0].style.display = "block";
				}				
				MyAjax.fetch(dataUrl, (data) => {
					arr = data.data;
					that.keylist = arr;
				})
			}
		},
		mounted(){
			var that = this;
			var arr = [];
			var dataUrl = "http://localhost:3000/keywords";
			MyAjax.fetch(dataUrl, (data) => {
				arr = data.data;
				that.keyword = arr;
			})
		}
	}
</script>

<style scoped lang="scss">
	#content{
		.headers{
			height:.55rem;
			border-bottom:1px solid #ddd;
			div{
				float:left;
				height:32px;
				margin-top:11px;
				margin-left:5px;
				line-height:32px;
				&.sear{
					background:#eee;
					width:2.8rem;
					padding:0 .1rem;
					border-radius:5px;
					input{
						width:2.2rem;
						height:28px;
						border:none;
						background:#eee;
						margin-left:.1rem;
					}
				}
				&.back{
					font-weight:bold;
					color:#65A032;
				}
				&.btn{
					color:#65A032;
					font-weight:bold;
				}
			}
		}
		.abc{
			p{
				margin:.2rem 0 .1rem .11rem;
				color:#666;
			}
			div{
				margin:.05rem .1rem;
				display:inline-block;
				padding:.06rem .07rem;
				background:#F1F1F1;
				border-radius:8px;
			}
		}
		.list{
			ul{				
				li{
					width:100%;
					height:.5rem;
					border-bottom:1px solid #ddd;
					line-height:.5rem;
					padding-left:.1rem;
				}
			}
		}
		.lists{
			ul{
				li{
					width:375px;
					height:120px;
					padding:10px;
					border-bottom:1px solid #ddd;
					display:flex;
					div{
						&.img{
							margin-right:10px;
							width:100px;
							height:120px;
							img{
								width:1rem;
							}
						}
						&.name{
							width:255px;
							height:120px;
    						p{
    							white-space: nowrap;
	    						overflow: hidden;
	    						text-overflow: ellipsis;
	    						&.small{
	    							color:#888;
	    							font-size:12px;
	    						}
	    						&.value{
	    							color:#888;
	    							font-size:12px;
	    							margin-top:16px;
	    						}
	    						span{
	    							&.price{
	    								color:#FF8000;
	    								font-size:16px;
	    							}
	    							&.tomorrow{
	    								display:inline-block;
	    								background:#FF8000;
	    								color:white;
	    								border-radius:2px;
	    								width:.5rem;
	    								height:18px;
	    								text-align:center;
	    								line-height:18px;
	    								margin-left:12px;
	    							}
	    						}
    						}
						}
					}
					#add{
						width:25px;
						height:22px;
						border:1px solid #ddd;
						border-radius:50%;
						text-align:center;
	    				line-height:20px;
	    				color:#FF8000;
	    				font-size:20px;
	    				font-size:bold;
	    				margin-top:73px;
					}
				}
			}
		}	
	}
	
</style>