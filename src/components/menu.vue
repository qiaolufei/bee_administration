<template>
  <div>
      <el-col :span="3">
       <el-menu
      :default-active="this.$route.path"
      router
      class="el-menu-vertical-demo">
       <el-menu-item index="/index">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/vip">
        <i class="el-icon-user-solid"></i>
        <span slot="title">会员管理</span>
      </el-menu-item>
      <el-menu-item index="/change">
        <i class="el-icon-s-ticket"></i>
        <span slot="title">兑换券发放</span>
      </el-menu-item>
      <el-menu-item index="/suggest">
        <i class="el-icon-s-comment"></i>
        <span slot="title">意见管理</span>
      </el-menu-item>
      <el-menu-item index="/setMeal">
        <i class="el-icon-s-goods"></i>
        <span slot="title">套餐管理</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <i class="el-icon-s-custom"></i>
        <span slot="title">账号管理</span>
      </el-menu-item>
      <el-menu-item index="/finance">
        <i class="el-icon-s-finance"></i>
        <span slot="title">财务管理</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  </div>
</template>
