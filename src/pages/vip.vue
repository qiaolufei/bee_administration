<template>
    <div>
        <headpage></headpage>
        <menupage></menupage>
        <div class="vip">
          <div class="vip__options">
            <el-input class="vip__options-input" v-model="msg" placeholder="请输入内容"></el-input>
            <el-button type="primary" @click="search()" icon="el-icon-search">搜索</el-button>
            <el-button type="primary" @click="addNew()" icon="el-icon-plus">新增</el-button>
          </div>
          <div class="vip__list">
             <el-table
                :data="vipData"
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
                  prop="grades"
                  label="积分"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="level"
                  label="会员等级"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="balance"
                  label="储值卡余额"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="deadline"
                  label="到期时间"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="createTime"
                  label="创建时间"
                  width="100">
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
                      @click="recharge(scope.$index, scope.row)">充值</el-button>
                    <el-button
                      size="mini"
                      @click="addMeal(scope.$index, scope.row)">添加套餐</el-button>
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
      vipData: [{
        id: '01',
        name: '乔路非',
        grades: 260,
        level: '普通会员',
        balance: 300,
        deadline: '2019-10-24 18:32',
        createTime: '2019-10-24'
      }]
    }
  },
  methods: {
    // 搜索
    search () {},
    // 新增用户信息
    addNew () {},
    // 查看详情
    details (index, row) {
      console.log(index)
      console.log(row)
    },
    // 充值
    recharge (index, row) {},
    // 添加套餐
    addMeal (index, row) {}
  }
}
</script>
<style lang="less">
.vip{
  &__options{
    margin-top: 3%;
    margin-left: 60%;
    &-input{
      width: 30%;
    }
  }
}
</style>
