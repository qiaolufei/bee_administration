<template>
    <div>
        <headpage></headpage>
        <menupage></menupage>
        <div class="setMeal">
          <div class="setMeal__options">
            <el-button type="primary" @click="dialogVisible = true" icon="el-icon-plus">新增</el-button>
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
        <!-- 新增套餐 -->
        <el-dialog
          title="新增套餐"
          :visible.sync="dialogVisible"
          width="40%"
          :before-close="handleClose">
          套餐类型:<el-select v-model="type" placeholder="套餐类型">
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
          <el-input class="mar" v-model="card.name" placeholder="套餐名称"></el-input>
          <el-input class="mar" v-model="card.money" placeholder="价格"></el-input>
          <el-input class="mar" v-show="type == '时间卡'" v-model="card.time" placeholder="天数"></el-input>
          <el-input class="mar" v-show="type == '储值卡'" v-model="card.price" placeholder="充值金额"></el-input>
          <el-input class="mar" v-model="card.grade" placeholder="增加积分"></el-input>
          <el-input class="mar" v-model="card.area" placeholder="可使用区域"></el-input>
          <el-input class="mar" v-model="card.info" placeholder="套餐描述"></el-input>
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
      setMealData: [
        {
          id: '01',
          name: '月卡',
          price: '260元',
          grades: '30'
        }
      ],
      dialogVisible: false,
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
        money: '',
        price: '',
        grade: '',
        area: '',
        info: ''
      }
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
