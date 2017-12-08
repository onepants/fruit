import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/components/Home.vue"
import Kind from "@/components/Kind.vue"
import Cart from "@/components/Cart.vue"
import User from "@/components/User.vue"
import Search from "@/components/Search.vue"
import HomeHeader from "@/components/HomeHeader.vue"
import KindHeader from "@/components/KindHeader.vue"
import CartHeader from "@/components/CartHeader.vue"
import UserHeader from "@/components/UserHeader.vue"
import SearchHeader from "@/components/SearchHeader.vue"

import Footer from "@//components/Footer.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
			redirect:"/home"
    },
    {
    	path:"/home",
    	components:{
    		header:HomeHeader,
    		content:Home,
    		footer:Footer
    	}
    },
    {
    	path:"/kind",
    	components:{
    		header:KindHeader,
    		content:Kind,
    		footer:Footer
    	}
    },
    {
    	path:"/cart",
    	components:{
    		header:CartHeader,
    		content:Cart,
    		footer:Footer
    	}
    },
    {
    	path:"/user",
    	components:{
    		header:UserHeader,
    		content:User,
    		footer:Footer
    	}
    },
    {
    	path:"/search",
    	components:{
    		header:SearchHeader,
    		content:Search
    	}
    }
  ]
})
