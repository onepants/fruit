<template>
	<div id="content">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
		        	<img :src="item"/>
		        </div>
		    </div>
		    <div class="swiper-pagination"></div>
		</div>
		<div class="tiao"><img src="./../assets/hah.png"/></div>
		<div class="cuxiao">
			<div v-for="(item,index) in cuxiaoList" :key="index">
				<a :href="item.src">
					<img :src="item.img" alt="图裂了"/>
				</a>
			</div>
		</div>
		<div class="double12" v-for="(item,index) in bigImageBanner" :key="index">
			<a :href="item.src">
				<img :src="item.img"/>
			</a>
		</div>
		<!--限时购----------------------------------->
		<!--<div class="xianbox">
			<div class="xian">
				<div class="xian1"><img src="https://imgjd2.fruitday.com/images/2017-09-15/9660d07715fa9eb2949ea2ef11b927eb.jpg"/></div>
				<div class="xian2">
					<div class="xian21"><a href="https://huodong.fruitday.com/cms/indexapp_b2o/3249"><img src="https://imgjd6.fruitday.com/images/2017-11-02/59e6a71280b833ca91364105ef7954af.jpg"/></a></div>
					<div class="xian22"><a href="https://huodong.fruitday.com/cms/indexapp_b2o/3132"><img :src="https://imgjd1.fruitday.com/images/2017-09-01/ad5fe9fe4b715ecbffc0efb63b4c8540.jpg"/></a></div>
				</div>
			</div>
		</div>-->
		<!--果园热卖------------------------------->
		<div class="hot">
			<div class="hotheader">果园热卖</div>
			<div class="hotcontent" v-for="(item,index) in lineBanner" :key="index">
				<div class="hotleft"><img :src="item.img" alt="" /></div>
				<div class="hotright">
					<h5>{{item.title}}</h5>
					<p class="subtitle">{{item.subtitle}}</p>	
					<p class="price">{{item.price}}￥/{{item.volume}}</p>
					<div id="jia">+</div>
				</div>
			</div>
		</div>
		<!--精选专题----------------------------->
		<div class="jing">
			<!--9,10,11-->
			<div class="jingheader"><img src="./../assets/d16c14.png"/></div>
			<div class="jingcontent" v-for="(item,index) in sumBanner" :key="index">
				<div class="content_top"><a :href="item[0].src"><img :src="item[0].img"/></a></div>
				<div class="content_bottom">
					<div class="swiper-container1">
					  <div class="swiper-wrapper">
					    <div class="swiper-slide" v-for="(items,index) in item[1]" :key="index">
					    	<img :src="items.img"/>
					    	<p class="title">{{items.title}}</p>
					    	<p class="price">￥{{items.price}}/{{items.volume}}</p>
					    </div>
					  </div>
					</div>
				</div>
			</div>
		</div>
		<!--人气推荐-------------------------------->
		<div class="hot">
			<div class="hotheader" style="margin-bottom:.2rem"><img src="./../assets/355c.png" style="width:100%"/></div>
			<div class="hotcontent" v-for="(item,index) in finalBanner" :key="index">
				<div class="hotleft"><img :src="item.img" alt="" /></div>
				<div class="hotright">
					<h5>{{item.title}}</h5>
					<p class="subtitle">{{item.subtitle}}</p>	
					<p class="price">{{item.price}}￥/{{item.volume}}</p>
					<div id="jia">+</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import MyAjax from "@/md/MyAjax.js"
	export default {
		data(){
			return {
				bannerList:[],
				cuxiaoList:[],
				bigImageBanner:[],
				lineBanner:[],
				sumBanner:[],
				finalBanner:[]
			}
		},
		mounted(){
			var that = this;			
			var dataUrl = "http://localhost:3000/list";
			MyAjax.fetch(dataUrl,(data) => {
		       var data1 = data.data.banner.mainBanners[0].content;
		       var data2 = data.data.banner.mainBanners[3].content;
		       var data3 = data.data.banner.mainBanners[5].content[0];
			   var data4 = data.data.banner.mainBanners[8].content;
			   
			   var data5 = data.data.banner.mainBanners[10].content[0];
			   var data51 = data.data.banner.mainBanners[11].content;
			   var data6 = data.data.banner.mainBanners[12].content[0];
			   var data61 = data.data.banner.mainBanners[13].content;
			   var data7 = data.data.banner.mainBanners[14].content[0];
			   var data71 = data.data.banner.mainBanners[15].content;
			   var data8 = data.data.banner.mainBanners[17].content;
			   
		       var arr1 = [];
		       var arr2 = [];
		       var arr3 = [];
		       var arr4 = [];
		       var arr5 = [];
		       var arr51 = [];
		       var arr6 = [];
		       var arr61 = [];
		       var arr7 = [];
		       var arr71 = [];
		       var arrsum = [];
		       var arr8 = [];
		       
		       for(var item of data1){
		       	  arr1.push(item.image)
		       }
		       for(var item of data2){
		       	  arr2.push({img:item.image,src:item.target_url})	       	  
		       }

			   arr3.push({img:data3.image,src:data3.share.share_url})
			   
			   for(var item of data4){
			   	  arr4.push({img:item.image,title:item.title,subtitle:item.subtitle,price:item.price,volume:item.volume})
			   }
			   
			   arr5.push({img:data5.image,src:data5.target_url})			   
			   for(var item of data51){
			   		arr51.push({img:item.image,id:item.banner_ad_id,title:item.title,subtitle:item.subtitle,price:item.price,volume:item.volume})
			   }
			   arr5.push(arr51);
			   arrsum.push(arr5);
			   
			   arr6.push({img:data6.image,src:data6.target_url})			   
			   for(var item of data61){
			   		arr61.push({img:item.image,id:item.banner_ad_id,title:item.title,subtitle:item.subtitle,price:item.price,volume:item.volume})
			   }
			   arr6.push(arr61);
			   arrsum.push(arr6);
			   
			   arr7.push({img:data7.image,src:data7.target_url})		   
			   for(var item of data71){
			   		arr71.push({img:item.image,id:item.banner_ad_id,title:item.title,subtitle:item.subtitle,price:item.price,volume:item.volume})
			   }
			   
			   for(var item of data8){
			   	  arr8.push({img:item.image,title:item.title,subtitle:item.subtitle,price:item.price,volume:item.volume,id:item.banner_ad_id})
			   }
			   
			   
			   arr7.push(arr71);
			   arrsum.push(arr7);
			   console.log(arrsum)
			   
		       that.bannerList = arr1;
		       that.cuxiaoList = arr2;
		       that.bigImageBanner = arr3;
		       that.lineBanner = arr4;
			   that.sumBanner = arrsum;
			   that.finalBanner = arr8;

		    })
					
		},
		updated(){
			var mySwiper = new Swiper ('.swiper-container', {
			    loop: true,
			    autoplay:3000,
			    autoplayDisableOnInteraction:false,//用户操作之后还可以继续自动轮播
			    // 如果需要分页器
			    pagination: '.swiper-pagination'
		  	})
			
			var mySwiper = new Swiper('.swiper-container1',{
				slidesPerView : 3.3,
				slidesPerGroup : 3
			})
		}
	}
</script>

<style>
	.swiper-container {
	    width:100%;
	    height: 1.7rem;
	}  
	.swiper-slide img{
		width:100%;
		height:100%;
	}
	#content .swiper-pagination span.swiper-pagination-bullet-active{
		background:orange;
	}
	.tiao img{
		width:100%;
		height:0.4rem;
	}
	.cuxiao{
		width:100%;
		height:0.9rem;
		display:flex;
		margin-top:5px;
	}
	.cuxiao div{
		width:47%;
		height:100%;
		background:#F4F4F4;
		margin-left:2%;
	}
	.cuxiao div img{
		width:100%;
	}
	.double12{
		width:100%;
		height:1.8rem;
	}
	.double12 img{
		width:100%;
		margin-top:.2rem;
	}
	.xianbox{
		width:100%;
		height:2.6rem;
		background:#F5F5F5;
	}
	.xian{
		width:100%;
		height:2.4rem;
		margin-top:0.1rem;
		float:left;
	}
	.xian .xian1{
		width:49.7%;
		height:100%;
		background:#fff;
		float:left;
	}
	.xian .xian2{
		width:49.7%;
		height:100%;
		background:#fff;
		float:right;
	}
	.xian21,.xian22{
		width:100%;
		height:49.7%;
	}
	.xian22{
		margin-top:3%;
	}
	.xian1 img{
		width:100%;
	}
	.xian21 img,.xian22 img{
		width:100%;
	}
	.hot{
		width:100%;
	}
	.hotheader{
		width:100%;height:0.4rem;
		font-size:0.2rem;text-align:center;
		line-height:0.4rem;
	}
	.hotcontent{
		width:100%;	
		height:1.6rem;	
	}
	.hotleft{
		width:35%;
		height:100%;
		float:left;
		margin-left:5%;
	}
	.hotleft img{
		width:100%;
	}
	.hotright{
		height:100%;
		width:54%;
		float:left;
		margin-left:3%;
		display:relative;
	}
	
	.hotright h5{
		font-size: .17rem;
   		margin-bottom: .05rem;
   		white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;
    	font-weight: 200;
    	margin-top:.2rem;
	}
	.hotright .subtitle{
		white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;
    	color:#a0a0a0;
	}
	#jia{
		width:23px;
		height:23px;
		font-size:25px;
		text-align:center;
		line-height:23px;
		color:#FF8000;
		border-radius:50%;
		border:1px solid #ddd;
		display:absolute;
		margin-left:1.5rem;
		margin-top:-22px;
	}
	.hotright .price{
		color:#FF8000;
		margin-top:.3rem;
	}
	.jing .jingheader{
		width:100%;
	}
	.jingheader img{
		width:100%;
	}
	.jingcontent .content_top{
		width:100%;
		height:160px;
		background:#ddd;
	}
	.jingcontent .content_top img{
		width:100%;
	}
	.jingcontent .content_bottom{
		width:100%;
		height:170px;
		overflow-x: auto;
	}
	.jingcontent .content_bottom p{
		text-align:center;
	}
	.jingcontent .content_bottom .title{
		white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;
    	padding:0 5px;
	}
	.jingcontent .content_bottom .price{
		font-size:0.12rem;
		color:#FF8000;
	}
</style>