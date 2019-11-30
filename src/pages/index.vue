<template>
    <div>
        <headpage></headpage>
        <menupage></menupage>
        <div class="index">
          <el-cascader
            v-model="value"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"></el-cascader>
          <div class="index__info">
              <span class="index__info-1">正在学习</span>
              <span class="index__info-2">空</span>
          </div>
          <div class="index__list">
            <span v-for="i in 20" :key="i" class="index__list-one">A{{i}}</span>
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
      value: '',
      options: [{
        value: '济南',
        label: '济南',
        children: [{
          value: '山东大学店',
          label: '山东大学店'
        }]
      }]
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>
<style lang="less">
.index{
  margin: 3% 0 0 20%;
  &__info{
    display: inline;
    margin-left: 5%;
    &-1{
      font-weight: 800;
      padding: 2% 2% 2% 2%;
      background-color: #00FFFF;
    }
    &-2{
      font-weight: 800;
      padding: 2% 2% 2% 2%;
      background-color:#169BD5;
      color: aliceblue;
    }
  }
  &__list{
    width: 80%;
    margin-top: 3%;
    &-one{
      text-align: center;
      display: inline-block;
      padding: 1% 0 1% 0;
      width: 10%;
      background-color:#169BD5;
      color: aliceblue;
      margin: 2% 0 0 2%;
      border-radius: 5px;
    }
  }
}
</style>
