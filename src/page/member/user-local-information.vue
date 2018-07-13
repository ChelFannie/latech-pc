<template>
  <div class="user-local-information">
    <i-layout :head="true" :gray="true">
      <div slot="grayLayout">
          <p>用户本地账户信息明细</p>
          <el-row>
            <el-col :span="3">
              <span>平台账户余额</span>
            </el-col>
            <el-col :span="5">
              <el-input size="mini"></el-input>
            </el-col>
          </el-row>
          <el-table
            :data="balanceTableData"
            class="balanceTable"
            border
            style="width: 571px">
            <el-table-column v-for="(item, index) in balanceTableColumn"
              :key="index"
              :prop="item.prop"
              :label="item.label"
              :width="item.width">
            </el-table-column>
          </el-table>
          <el-row>
            <el-col :span="3">
              <span>提现绑定账户</span>
            </el-col>
            <el-col :span="8">
              <el-input size="mini"></el-input>
            </el-col>
          </el-row>
          <p>账户关联票券</p>
          <el-table
            :data="ticketTableData"
            border
            style="width: 621px">
            <el-table-column v-for="(item, index) in ticketTableColumn"
              :key="index"
              :prop="item.prop"
              :label="item.label"
              :width="item.width">
            </el-table-column>
          </el-table>
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
      balanceTableColumn: [
        {prop: 'name', label: '交易性质', width: '190'},
        {prop: 'address', label: '交易时间', width: '190'},
        {prop: 'name', label: '交易金额', width: '190'}
      ],
      balanceTableData: [],
      ticketTableColumn: [
        {prop: 'name', label: '活动名称', width: '100'},
        {prop: 'address', label: '活动开始日期', width: '110'},
        {prop: 'address', label: '活动结束日期', width: '110'},
        {prop: 'address', label: '票券名称', width: '100'},
        {prop: 'address', label: '票券金额', width: '100'},
        {prop: 'name', label: '票券有效期', width: '100'}
      ],
      ticketTableData: []
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
.user-local-information{
    p{
      font-size: 20px;
      color: #000000;
    }
    span{
      font-size: 16px;
      color: #606266;
    }
    .balanceTable{
        margin: 10px 0;
    }
    .btn{
        margin-top: 10px;
        margin-left: 300px;
    }
}
</style>
