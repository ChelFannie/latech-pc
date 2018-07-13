<template>
  <div class="user-buy-details">
    <i-layout :gray="true">
      <div slot="grayLayout">
          <p>用户预订明细</p>
          <el-form ref="form" :model="form" label-width="100px" size="mini">
            <el-form-item label="总计交易数量">
              <el-input v-model="form.userName"></el-input>
            </el-form-item>
            <el-form-item label="总计交易金额">
              <el-input v-model="form.userName"></el-input>
            </el-form-item>
            <el-form-item label="总计中奖次数">
              <el-input v-model="form.userName"></el-input>
            </el-form-item>
          </el-form>
          <el-table
            border
            :data="tableData"
            style="width: 661px">
            <el-table-column v-for="(item, index) in tableColumn"
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :width="item.width">
            </el-table-column>
          </el-table>
          <el-row class="often">
            <el-col :span="1">
            </el-col>
            <el-col :span="3">
                <span>常出票的店铺</span>
            </el-col>
            <el-col :span="10">
                <el-input size="small" ></el-input>
            </el-col>
          </el-row>
          <div class="btn">
            <el-button size="mini">导出全部</el-button>
            <el-button size="mini" @click="goBack">返回用户信息</el-button>
          </div>
        </div>
    </i-layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        userName: '',
        phone: '',
        register: '',
        userNumber: '',
        time: ''
      },
      tableColumn: [
        {prop: 'name', label: '彩种', width: '110'},
        {prop: 'address', label: '订单次数', width: '110'},
        {prop: 'name', label: '彩种支付金额', width: '110'},
        {prop: 'name', label: '中奖次数', width: '110'},
        {prop: 'name', label: '最近支付时间', width: '110'},
        {prop: 'name', label: '最近中奖时间', width: '110'}
      ],
      tableData: []
    }
  },
  methods: {
    goBack () {
      this.$router.push({name: '用户基本信息'})
    }
  }
}
</script>
<style lang="less">
.user-buy-details{
    p{
        font-size: 20px;
        color: #000;
    }
    span{
        font-size: 16px;
        color: #606266;
    }
    .el-form {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .el-form-item {
            display: flex;
            justify-content: center;
            align-items: center;
            .el-form-item__content {
                margin-left: 10px !important;
            }
            .el-input {
                width: 100px;
            }
        }
    }
    .often {
        margin: 10px 0;
    }
    .btn{
        margin-top: 10px;
        margin-left: 300px;
    }
}
</style>
