<template>
    <div>
        <headpage></headpage>
        <menupage></menupage>
        <div class="change">
          <div class="change__options">
              <el-button type="primary" @click="addNew()" icon="el-icon-plus">新增</el-button>
          </div>
          <div class="change__list">
             <el-table
                :data="changeData"
                border
                style="width: 80%; margin: 3% 0 0 15%;">
                <el-table-column
                  prop="id"
                  label="id"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="兑换券名称"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="type"
                  label="类型"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="面额"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="code"
                  label="兑换码">
                </el-table-column>
                <el-table-column
                  prop="state"
                  label="状态"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="options"
                  label="操作"
                  width="300">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      type="info"
                      @click="copy(scope.$index, scope.row)">复制兑换码</el-button>
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
      changeData: [{
        id: '01',
        name: '新店开业',
        type: '储值',
        price: '30元',
        code: 'ASFSADFSFGG',
        state: '未兑换'
      }]
    }
  },
  methods: {
    // 新增
    addNew () {},
    // 复制兑换码
    copy (index, row) {
      let copyData = row.code
      let oInput = document.createElement('input')
      oInput.value = copyData
      document.body.appendChild(oInput)
      oInput.select() // 选择对象;
      document.execCommand('Copy') // 执行浏览器复制命令
      this.$message({
        message: '复制成功',
        type: 'success'
      })
      oInput.remove()
    },
    // 删除
    delete (index, row) {}
  }
}
</script>
<style lang="less">
.change{
  &__options{
    margin-top: 3%;
    margin-left: 81%;
  }
}
</style>
