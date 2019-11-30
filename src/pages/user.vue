<template>
    <div>
        <headpage></headpage>
        <menupage></menupage>
        <div class="user">
          <div class="user__options">
            <el-input class="user__options-input" v-model="msg" placeholder="请输入内容"></el-input>
            <el-button type="primary" @click="search()" icon="el-icon-search">搜索</el-button>
            <el-button type="primary" @click="addNew()" icon="el-icon-plus">新增</el-button>
          </div>
          <div class="user__list">
            <el-table
                :data="userData"
                border
                style="width: 80%; margin: 3% 0 0 15%;">
                <el-table-column
                  prop="id"
                  label="id"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="用户名"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="city"
                  label="城市">
                </el-table-column>
                <el-table-column
                  prop="power"
                  label="权限">
                </el-table-column>
                <el-table-column
                  prop="options"
                  label="操作"
                  width="300">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      type="info"
                      @click="details(scope.$index, scope.row)">查看详情</el-button>
                    <el-button
                      size="mini"
                      type="primary"
                      @click="edit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="delete(scope.$index, scope.row)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
          </div>
        </div>
    </div>
</template>
<script>
import headpage from '@/components/header'
import menupage from '@/components/menu'
export default {
  components: {
    headpage,
    menupage
  },
  data () {
    return {
      msg: '',
      userData: [
        {
          id: '01',
          name: '乔路非',
          city: '全国',
          power: '超级管理员'
        }
      ]
    }
  },
  methods: {
    // 搜索
    search () {},
    // 新增
    addNew () {},
    // 查看详情
    details (index, row) {
    },
    // 充值
    edit (index, row) {},
    // 添加套餐
    delete (index, row) {}
  }
}
</script>
<style lang="less">
.user{
  &__options{
    margin-top: 3%;
    margin-left: 60%;
    &-input{
      width: 30%;
    }
  }
}
</style>
