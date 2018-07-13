<template>
  <div class="user-login-record">
    <i-layout>
      <div slot="grayLayout">
          <p>用户预订明细</p>
          <el-row class="count">
            <el-col :span="1">
            </el-col>
            <el-col :span="3">
                <span>用户登录总次数</span>
            </el-col>
            <el-col :span="3">
                <el-input size="mini" ></el-input>
            </el-col>
          </el-row>
          <el-table
            :data="tableData"
            class="often"
            border
            style="width: 741px">
            <el-table-column v-for="(item, index) in tableColumn"
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
      tableColumn: [
        {prop: 'name', label: '登录设备', width: '120'},
        {prop: 'address', label: '登录时间', width: '120'},
        {prop: 'address', label: '登录位置', width: '500'}
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
.user-login-record{
    p {
        font-size: 20px;
        color: #000;
    }
    span {
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
