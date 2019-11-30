<template>
    <div>
        <headpage></headpage>
        <menupage></menupage>
        <div class="suggest">
          <div class="suggest__list">
            <el-table
                :data="suggestData"
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
                  prop="shop"
                  label="选择门店"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="msg"
                  label="意见内容">
                </el-table-column>
                <el-table-column
                  prop="time"
                  label="提交时间"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="options"
                  label="操作"
                  width="100">
                  <template slot-scope="scope">
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
      suggestData: [
        {
          id: '01',
          name: '乔路非',
          shop: '山东大学店',
          msg: '哈哈哈哈',
          time: '2019-10-24 18:32'
        }
      ]
    }
  },
  methods: {
    // 删除
    delete (index, row) {}
  }
}
</script>
