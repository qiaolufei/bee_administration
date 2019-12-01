<template>
    <div>
        <headpage></headpage>
        <menupage></menupage>
        <div class="change">
          <div class="change__options">
              <el-button type="primary" @click="dialogVisible = true" icon="el-icon-plus">新增</el-button>
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
        <!-- 新增兑换码 -->
        <el-dialog
          title="新增兑换码"
          :visible.sync="dialogVisible"
          width="40%"
          :before-close="handleClose">
          兑换券类型:<el-select v-model="type" placeholder="兑换券类型">
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.value"
              :value="item.value">
            </el-option>
          </el-select>
          <br>
          <el-cascader
            class="mar"
            v-model="card.shop"
            v-show="type == '时间卡'"
            :options="shopOptions"
            placeholder="选择地址"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"></el-cascader>
          <el-input class="mar" v-model="card.name" placeholder="兑换券名称"></el-input>
          <el-input class="mar" v-show="type == '时间卡'" v-model="card.time" placeholder="天数"></el-input>
          <el-input class="mar" v-show="type == '储值卡'" v-model="card.price" placeholder="充值金额"></el-input>
          <el-input class="mar" v-model="card.grade" placeholder="增加积分"></el-input>
          <el-input class="mar" v-model="card.area" placeholder="可使用区域"></el-input>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="addNew">确 定</el-button>
          </span>
        </el-dialog>
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
      }],
      type: '储值卡',
      typeOptions: [
        {
          value: '储值卡'
        },
        {
          value: '时间卡'
        }
      ],
      shopOptions: [{
        value: '济南',
        label: '济南',
        children: [{
          value: '山东大学店',
          label: '山东大学店'
        }]
      }],
      card: {
        shop: '',
        name: '',
        time: '',
        price: '',
        grade: '',
        area: ''
      },
      dialogVisible: false
    }
  },
  methods: {
    // 新增
    addNew () {},
    handleClose () {},
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
.mar{
  margin-top: 1%;
}
</style>
