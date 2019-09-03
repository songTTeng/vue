import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from "@/pages/home/home"
import About from "@/pages/about/about"
import Seller from "@/pages/seller/seller"
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },{
      path:"/about",
      name:"About",
      component:About
    },{
      path:"/seller",
      name:"Seller",
      component:Seller
    }
  ]
})
