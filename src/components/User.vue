<template>
	<div id="content">
		<router-link to="/home"><i class="iconfont icon-shiliangzhinengduixiang2"></i></router-link>
		<div class="abc">
			<div id="red" @click="type='v-login'">登录</div>
			<div id="blue" @click="type='v-register'">还未注册？去注册</div>
		</div>	
		<div class="db">
			<component :is="type"></component>
		</div>	
	</div>
</template>

<script>
	import Vue from 'vue';
	import Mint from 'mint-ui';
	
	import { Field } from 'mint-ui'; 
	Vue.component(Field.name, Field);
	
	import { Button } from 'mint-ui';
	Vue.component(Button.name, Button);
	
	import Register from "./Register.vue"
	import Login from "./Login.vue"
	export default {
		data(){
			return {
				username:"",
				password:"",
				birthday:"",
				type:"v-login"
			}
		},
		components:{
			"v-register":Register,
			"v-login":Login
		},
		mounted(){
			if(!window.localStorage){
	            alert("浏览器不支持localstorage");
	            return false;
	        }else{
	            if(localStorage.getItem("username")){
	            	 this.$router.push('/person');
	            }
	        }
		}
	}
</script>

<style scoped lang="scss">
	#content{
		form{
			width:80%;
			margin:10%;
		}
		div{
			&.abc{
				  width:90%;
				  height:.3rem; 
				  margin-left:5%;
				  color:red;
				  #red{
				  	width:50%;
				  	height:100%;
				  	float:left;
				  	text-align:center;
				  	line-height:.3rem;
				  }
				  #blue{
				  	width:50%;
				  	float:left;
				  	height:100%;
				  	text-align:center;
				  	line-height:.3rem;
				  }
			}
			float:left;
		}
		.db{
			width:80%;
			margin:10%;
		}
		i{
			margin-left:-340px;
			margin-top:60px;
			color:#666;
		}
	}
</style>