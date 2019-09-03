<template>
    <el-container>
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>
            <!-- <el-button type="success">按钮</el-button> -->
            <el-button type="primary" class="button" @click="buttoncli">摁我全屏</el-button>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  mounted () {
    // 这是默认执行
    this.back();
  },
  methods: {
    buttoncli(){
      screenfull.toggle()
    },
    back () {
      var a = 1
      a === 1 ? (console.log("执行")) : (console.log('121'))
    }
  }
}
</script>


<style scoped>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
    height: 100%;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
