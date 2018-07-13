<template>
  <div class="abnormal-orders">
    <i-layout :gray="true" :head="true">
      <div slot="grayLayout">
        <i-form @search="search" @empty="empty">
          <el-form-item label="订单号码">
            <el-input v-model="form.serialNumber" maxlength="30"></el-input>
          </el-form-item>
          <el-form-item label="异常状态选择">
            <el-select v-model="form.exceptionType" placeholder="请选择">
              <el-option v-for="item in statusOption" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </i-form>
      </div>
      <div slot="tableHead">
        <el-button size="small">新建</el-button>
        <el-button size="small">修改</el-button>
        <el-button size="small">删除</el-button>
        <el-button size="small">刷新</el-button>
        <el-button size="small">批量处理</el-button>
        <el-button size="small">导入</el-button>
        <el-button size="small">导出</el-button>
      </div>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" border style="width: 89%" highlight-current-row>
        <el-table-column v-for="(item, index) in tableColumn" :key="index" :prop="item.prop" :label="item.label" :width="item.width"
          align="center">
        </el-table-column>
      </el-table>
    </i-layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        serialNumber: '',
        exceptionType: ''
      },
      statusOption: [
        { value: 'E1', label: '出票异常-吃票' },
        { value: 'E2', label: '出票异常-残票' },
        { value: 'E3', label: '赛事异常-停售' },
        { value: 'E4', label: '赛事异常-限购' },
        { value: 'PE1', label: '预订单异常-吃票' },
        { value: 'PE2', label: '预订单异常-残票' },
        { value: 'PE3', label: '预订单异常-卡纸' },
        { value: 'PE4', label: '预订单异常-打印票单彩票机不认' },
        { value: 'PE5', label: '预订单异常-预订单机故障' }
      ],
      tableColumn: [
        // { prop: 'ticketInfoNumber', label: '票号', width: '190' },
        { prop: 'serialNumber', label: '订单号码', width: '190' },
        // { prop: 'userId', label: '用户编号', width: '120' },
        { prop: 'exceptionType', label: '异常状态', width: '200' },
        { prop: 'createDate', label: '交易时间', width: '190' },
        { prop: 'exceptionInfo', label: '异常信息', width: '120' },
        { prop: 'regFrom', label: '用户来源渠道', width: '120' },
        // { prop: 'amount', label: '交易金额', width: '120' },
        { prop: 'payFlag', label: '订单状态', width: '100' }
      ],
      tableData: [],
      postParams: {
        serialNumber: '3FgmvcAKRt8YS8wnCjBU',
        exceptionType: ''
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    search () {
      if (!this.form.serialNumber) {
        this.$message({
          message: '订单号不能为空',
          type: 'warning'
        })
      } else {
        this.postParams = {
          ...this.form
        }
        this.getData()
      }
    },
    empty () {
      Object.keys(this.form).map(key => {
        this.form[key] = ''
      })
      this.postParams = {
        serialNumber: '3FgmvcAKRt8YS8wnCjBU',
        exceptionType: ''
      }
      this.getData()
    },
    getData () {
      this.tableData = []
      this.$ajax.post('/order/orderInfoExceptions.json', this.postParams)
        .then(res => {
          if (res.data.code === '00000' && res.data.data.length) {
            res.data.data.map(val => {
              switch (val.exceptionType) {
                case 'E1':
                  val.exceptionType = '出票异常-吃票'
                  break
                case 'E2':
                  val.exceptionType = '出票异常-残票'
                  break
                case 'E3':
                  val.exceptionType = '出票异常-停售'
                  break
                case 'E4':
                  val.exceptionType = '出票异常-限购'
                  break
                case 'PE1':
                  val.exceptionType = '预订单异常-吃票'
                  break
                case 'PE2':
                  val.exceptionType = '预订单异常-残票'
                  break
                case 'PE3':
                  val.exceptionType = '预订单异常-卡纸'
                  break
                case 'PE4':
                  val.exceptionType = '预订单异常-打印票单彩票机不认'
                  break
                case 'PE5':
                  val.exceptionType = '预订单异常-预订单机故障'
                  break
                default:
                  break
              }
              val.regFrom = val.regFrom === 1 ? '中石化' : '自营'
              switch (val.payFlag) {
                case 0:
                  val.payFlag = '未支付'
                  break
                case 1:
                  val.payFlag = '支付确认中'
                  break
                case 2:
                  val.payFlag = '支付成功'
                  break
                case 3:
                  val.payFlag = '支付失败'
                  break
                default:
                  break
              }
              let date = new Date(val.createDate)
              let Y = date.getFullYear() + '-'
              let M = date.getMonth() + 1 + '-'
              let D = date.getDate() + ' '
              let h = date.getHours() + ':'
              let m = date.getMinutes() + ':'
              let s = date.getSeconds()
              val.createDate = Y + M + D + h + m + s
              // val.createDate = date.toLocaleDateString()
              this.tableData.push(val)
            })
          } else if (res.data.code === '00000' && !res.data.data.length) {
            this.tableData = []
          } else {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          }
        })
    }
  }
}
</script>
<style lang="less" scoped>
.abnormal-orders{

}
</style>
