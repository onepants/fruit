<template>
  <div id="container">
    <router-view name="header"></router-view>
    <router-view name="content"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue"
export default {
  components:{
  	"v-footer":Footer
  }
}
</script>

<style lang="scss">
	@charset "utf-8";
	@import "~@/lib/reset.scss";
	html,body,#app,#container{
		@include rect(100%, 100%);
	}
	#container{
		@include flexbox();
		@include flex-direction(column);
		#header{
			@include rect(100%, 0.4rem);
			@include bgcolor(#fff);
			border-bottom:1px solid #d8d8d8;
			&.search{
				@include rect(100%, 0rem);
			}
		}
		#content{
			@include flex();
			@include rect(100%, auto);
			overflow:auto;
		}
		#footer{
			@include rect(100%, 0.45rem);
			@include bgcolor(#eee);
			ul{
          @include rect(100%,  100%);
          @include flexbox();
          li{
            @include flex();
            @include rect(auto,  100%);
            
            a{
              @include rect(100%,  100%);
              @include flexbox();
             @include flex-direction(column);
             @include justify-content();
             @include align-items();
             @include textcolor(#333);

	             &.router-link-active{
	               @include textcolor(#65A032);
	             }
             	 i{
             	 	font-size:20px;
             	 }	
             	 p{
             	 	font-size:12px;
             	 	margin-top:-5px;
             	 }
            }
            
          }
        }
		}
	}
</style>
