<template>
	<div id="">
		<form>
			<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>		
			<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>			
			<mt-button size="large" type="default" @click="login(username,password)">提交</mt-button>	
		</form>
		<div class="message" v-if="isHide">{{message}}</div>
	</div>
</template>

<script>
	import MyAjax from "@/md/MyAjax.js"
	
	import Vue from 'vue';
	import Mint from 'mint-ui';
	
	import { Field } from 'mint-ui'; 
	Vue.component(Field.name, Field);
	
	import { Button } from 'mint-ui';
	Vue.component(Button.name, Button);
	export default {
		data(){
			return {
				username:"123",
				password:"123",
				message:"登陆成功！",
				isHide:false
			}
		},
		methods:{
			login(username,password){
				var that = this;
				var registerUrl = "http://localhost:3000/users/loginAction?status=login&username="+username+"&password="+password; 
				MyAjax.fetch(registerUrl,(data) => {
					console.log(data);
					if(data == "1"){
						that.isHide = true;
						that.message = "登录成功！";
						setTimeout(function(){
							that.isHide = false;
							that.message = "";
							localStorage.setItem("username",that.username);
							that.$router.push('/person');
						},1000)
					}else if(data == "0"){
						that.isHide = true;
						that.message = "该账户不存在";
						setTimeout(function(){
							that.isHide = false;
							that.message = "";
						},1000)
					}else if(data == "2"){
						that.isHide = true;
						that.message = "密码输入错误，请重新输入";
						setTimeout(function(){
							that.isHide = false;
							that.message = "";
						},1000)
					}else if(data == "-1"){
						that.isHide = true;
						that.message = "登录失败";
						setTimeout(function(){
							that.isHide = false;
							that.message = "";
						},1000)
					}	
				})	
			}
		}
//		updated(){
//			if(!window.localStorage){
//	            alert("浏览器不支持localstorage");
//	            return false;
//	        }else{
//	            if(localStorage.getItem("username")){
//	            	this.$router.push('/person');
//	            }
//	        }
//		}
	}
</script>

<style scoped lang="scss">
	.message{
		width:60%;
		height:.5rem;
		border:1px solid #ddd;
		position:absolute;
		background:#fff;
		border-radius:10px;
		top:150px;
		left:80px;
		text-align:center;
		line-height:.5rem;
		font-size:16px;
		color:#f66;
	}
</style>