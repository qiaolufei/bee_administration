<template>
    <div>
        <el-menu
      :default-active="this.$route.path"
      router
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item class="name">小蜜蜂管理系统</el-menu-item>
      <el-submenu class="login"  index="">
      <template slot="title">
        {{name}}
      </template>
      <el-menu-item index="" @click="logout">退出登录</el-menu-item>
      </el-submenu>
    </el-menu>
    </div>
</template>
<script>
export default {
  data () {
    return {
      name: sessionStorage.getItem('name')
    }
  },
  methods: {
    logout () {
      this.$confirm('是否退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出成功!',
          duration: 1000
        })
        sessionStorage.setItem('name', null)
        this.$router.push({ path: './' })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消',
          duration: 1000
        })
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .name {
    font-size: 20px;
    font-family: STXingkai;
  }
  .login{
    margin-left: 67%;
    font-size: 15px;
  }
</style>
