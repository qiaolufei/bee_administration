<template>
      <div class="loginForm">
      <span class="loginForm__name">登录</span>
      <el-form ref="form" :model="loginForm">
        <el-input v-model="loginForm.name" class="loginForm__input" placeholder="用户名">
          <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
        </el-input>
        <el-input v-model="loginForm.password" class="loginForm__input" type="password" placeholder="密码">
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input>
        <br>
        <el-button class="loginForm__button" @click="login" type="primary">登录</el-button>
      </el-form>
    </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: { // 登录数据
        name: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      let name = this.loginForm.name
      let pwd = this.loginForm.password
      if (name === 'luffy' && pwd === '111') {
        this.$message({
          message: '登录成功',
          type: 'success',
          duration: 1000
        })
        sessionStorage.setItem('name', name)
        this.$router.push({path: './index'})
      } else {
        this.$message.error('用户名或密码错误')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.loginForm {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  &__name {
    font-size: 30px;
    font-weight: 700;
    color: #545c64;
    font-family: -apple-system, SF UI Display, Arial, PingFang SC,
    Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  }
  &__input{
    margin-top: 3%;
    width: 60%;
  }
  &__button{
    margin-top: 3%;
    width:30%
  }
}
</style>
