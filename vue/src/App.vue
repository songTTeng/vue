<template>
  <div id="app">
    <div class="header">
      我是头部
    </div>
    <div class="nav">
        <router-link to="/">商品</router-link>
        <router-link to="/about">评论</router-link>
        <router-link to="/seller">商家</router-link>
    </div>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {

  },
  methods:{

  },
  components:{
    
  }
}
</script>

<style lang='scss'>
 @import './style/style';   //公用的样式
#app {
  height: 100%;
}
</style>
