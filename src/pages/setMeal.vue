<template>
    <div>
        <headpage></headpage>
        <menupage></menupage>
        <div class="setMeal">
          <div class="setMeal__options">
            <el-button type="primary" @click="addNew()" icon="el-icon-plus">新增</el-button>
          </div>
          <div class="setMeal__list">
             <el-table
                :data="setMealData"
                border
                style="width: 80%; margin: 3% 0 0 15%;">
                <el-table-column
                  prop="id"
                  label="id"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="套餐名"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="价格">
                </el-table-column>
                <el-table-column
                  prop="grades"
                  label="积分">
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
      setMealData: [
        {
          id: '01',
          name: '月卡',
          price: '260元',
          grades: '30'
        }
      ]
    }
  },
  methods: {
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
.setMeal{
  &__options{
    margin-top: 3%;
    margin-left: 81%;
  }
}
</style>
