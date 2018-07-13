<template>
  <div class="order-detail">
    <el-form ref="form" :model="form" size="mini" label-width="110px" class="grayLayout">
      <div class="title">订单详情</div>
      <div class="orderInfo">
        <div class="sub_title">订单基础信息</div>
        <div class="content clearfix">
          <el-form-item label="订单编号">
            <el-input disabled v-model="form.serialNumber"></el-input>
          </el-form-item>
          <!-- <el-form-item label="流水单号">
            <el-input v-model="form.waterNum"></el-input>
          </el-form-item> -->
          <el-form-item label="用户姓名">
            <el-input disabled v-model="form.memeberName"></el-input>
          </el-form-item>
          <el-form-item label="用户ID">
            <el-input disabled v-model="form.memberId"></el-input>
          </el-form-item>
          <el-form-item label="订单状态">
            <el-input disabled v-model="form.payFlag"></el-input>
          </el-form-item>
          <!-- <el-form-item label="是否使用优惠券" class="useDiscount">
            <el-input v-model="form.useDiscount"></el-input>
          </el-form-item> -->
          <el-form-item label="订单金额">
            <el-input disabled v-model="form.amount"></el-input>
          </el-form-item>
          <el-form-item label="订单下单时间">
            <el-input disabled v-model="form.createDate"></el-input>
          </el-form-item>
          <el-form-item label="是否取票">
            <el-radio-group v-model="form.takeTicketsFlag" size="mini">
              <el-checkbox v-model="form.takeTicketsFlag" disabled></el-checkbox>
            </el-radio-group>
          </el-form-item>
          <!-- <el-form-item label="活动编码">
            <el-input v-model="form.activeCode"></el-input>
          </el-form-item> -->
          <!-- <el-form-item label="活动信息">
            <el-input v-model="form.activeInfo"></el-input>
          </el-form-item> -->
          <!-- <el-form-item label="票券详细编码">
            <el-input v-model="form.ticketCode"></el-input>
          </el-form-item> -->
          <!-- <el-form-item label="票券信息">
            <el-input v-model="form.ticketInfo"></el-input>
          </el-form-item> -->
          <el-form-item label="用户预订位置">
            <el-input disabled v-model="form.adCode"></el-input>
          </el-form-item>
          <el-form-item label="用户位置信息" class="geographical">
            <el-input disabled v-model="form.geographical"></el-input>
          </el-form-item>
          <!-- <el-form-item label="彩票是否取走">
            <el-input v-model="form.takeWay"></el-input>
          </el-form-item> -->
          <!-- <el-form-item label="预订单扫描用单号" class="scanNum">
            <el-input v-model="form.scanNum"></el-input>
          </el-form-item> -->
        </div>
      </div>
      <div class="lotteryInfo">
        <el-row>
          <el-col :span="24" style="border: 1px solid #000;margin-bottom:5px;"></el-col>
          <el-col :span="22" class="sub_title">订单彩票信息</el-col>
        </el-row>
        <div class="content clearfix">
          <el-form-item label="业务类型">
            <el-input disabled v-model="form.lotteryType"></el-input>
          </el-form-item>
          <!-- <el-form-item label="业务模式">
            <el-input v-model="form.model"></el-input>
          </el-form-item> -->
          <!-- <el-form-item label="业务性质">
            <el-input v-model="form.nature"></el-input>
          </el-form-item> -->
          <!-- <el-form-item label="彩票期数">
            <el-input v-model="form.periods"></el-input>
          </el-form-item> -->
          <el-form-item label="投注方式">
            <el-input disabled v-model="form.betType"></el-input>
          </el-form-item>
          <el-form-item label="注数">
            <el-input disabled v-model="form.pot"></el-input>
          </el-form-item>
          <el-form-item label="开奖时间">
            <el-input disabled v-model="form.time"></el-input>
          </el-form-item>
          <el-form-item label="多期投注">
            <el-input disabled v-model="form.multiPeriod"></el-input>
          </el-form-item>
          <el-form-item label="投注倍数">
            <el-input disabled v-model="form.multiple"></el-input>
          </el-form-item>
        </div>
      </div>
      <div class="table-conten">
        <el-table ref="multipleTable" border :data="tableData" tooltip-effect="dark" style="width: 950px" @selection-change="handleSelectionChange">
          <!-- <el-table-column type="selection" width="55">
          </el-table-column> -->
          <el-table-column v-for="(item, index) in tableColumn" :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          </el-table-column>
        </el-table>
      </div>
      <div class="realLotteryInfo" style="margin-top: 10px">
        <el-col :span="22" class="sub_title">订单实体彩票信息</el-col>
        <div class="content clearfix">
          <el-form-item label="店铺ID">
            <el-input disabled v-model="form.storeId"></el-input>
          </el-form-item>
          <el-form-item label="店铺地理位置">
            <el-input disabled v-model="form.storeAddress"></el-input>
          </el-form-item>
          <!-- <el-form-item label="预订单机编号">
            <el-input v-model="form.orderNum"></el-input>
          </el-form-item> -->
          <!-- <el-form-item label="订单机打印时长">
            <el-input v-model="form.printTime"></el-input>
          </el-form-item> -->
          <!-- <el-form-item label="入保险箱时长">
            <el-input v-model="form.safeTime"></el-input>
          </el-form-item> -->
        </div>
        <router-link to="order-scan-image" style="margin-left: 20px"><el-button type="primary">查看当前订单所有实体票</el-button></router-link>
      </div>
      <div class="winLotteryInfo">
        <el-row>
          <el-col :span="24" style="border: 1px solid #000;margin:8px 0;"></el-col>
          <el-col :span="22" class="sub_title">订单开奖信息</el-col>
        </el-row>
        <div class="content clearfix">
          <el-form-item label="算奖状态">
            <el-input disabled v-model="form.awardFlag"></el-input>
          </el-form-item>
          <el-form-item label="兑奖状态">
            <el-input disabled v-model="form.hasAward"></el-input>
          </el-form-item>
          <!-- <el-form-item label="中奖等级">
            <el-input v-model="form.winLevel"></el-input>
          </el-form-item> -->
          <el-form-item label="中奖金额">
            <el-input disabled v-model="form.awardAmount"></el-input>
          </el-form-item>
        </div>
      </div>
      <div class="redeemResult">
        <el-row>
          <el-col :span="24" style="border: 1px solid #000;margin:8px 0;"></el-col>
          <el-col :span="22" class="sub_title">订单最终兑奖结果</el-col>
        </el-row>
        <el-table ref="redeemResult" border :data="redeemData" tooltip-effect="dark" style="width: 361px" @selection-change="handleSelectionChange">
          <!-- <el-table-column type="selection" width="55">
          </el-table-column> -->
          <el-table-column v-for="(item, index) in redeemColumn" :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          </el-table-column>
        </el-table>
      </div>
      <div class="handleRecords">
        <el-row>
          <el-col :span="24" style="border: 1px solid #000;margin:8px 0;"></el-col>
        </el-row>
        <el-row>
          <el-col :span="22" class="sub_title">订单异常处理记录</el-col>
        </el-row>
        <div class="content">
          <el-form-item label="异常状态">
            <el-select v-model="form.exceptionType" placeholder="请选择" @change="changeStatus">
              <el-option v-for="item in statusOption" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
            <el-form-item label="异常说明" class="errorDescription">
              <el-input type="textarea" autosize v-model="form.exceptionInfo"></el-input>
            </el-form-item>
        </div>
      </div>
      <div class="btn clearfix">
        <el-form-item>
          <!-- <el-button type="primary">删除</el-button> -->
          <!-- <el-button type="primary" @click="submitForm">保存</el-button> -->
          <el-button @click="goback" type="primary">关闭</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
import req from '../../api/business'
export default {
  components: {
  },
  data () {
    return {
      form: {
        serialNumber: '',
        waterNum: '',
        memeberName: '',
        memberId: '',
        payFlag: '',
        useDiscount: '',
        amount: 0,
        createDate: '',
        activeCode: '',
        activeInfo: '',
        ticketCode: '',
        ticketInfo: '',
        adCode: '',
        geographical: '',
        takeTicketsFlag: -1,
        takeWay: '',
        scanNum: '',
        lotteryType: '',
        model: '',
        nature: '',
        periods: '',
        betType: '',
        pot: '',
        time: '',
        multiPeriod: '',
        multiple: '',
        storeId: '',
        storeAddress: '',
        orderNum: '',
        printTime: '',
        safeTime: '',
        awardFlag: -1,
        hasAward: -1,
        winLevel: '',
        awardAmount: 0,
        exceptionType: '',
        exceptionInfo: ''
      },
      multipleSelection: [],
      tableColumn: [
        { prop: 'matchUniqueId', label: '赛事编码', width: '140' },
        // { prop: 'Pagination', label: '分页', width: '80' },
        { prop: 'host', label: '主队', width: '120' },
        { prop: 'VS', label: 'VS', width: '120' },
        { prop: 'guest', label: '客队', width: '120' },
        { prop: 'tombola', label: '彩种', width: '120' },
        { prop: 'betItems', label: '用户支付结果', width: '330' }
      ],
      tableData: [],
      redeemResult: [],
      redeemColumn: [
        // { prop: 'liquidator', label: '彩票清算人', width: '120' },
        { prop: 'liquidationTime', label: '清算时间', width: '120' },
        { prop: 'unmodifiedAmount', label: '修正前金额', width: '120' },
        { prop: 'amendAmount', label: '修正后金额', width: '120' }
        // { prop: 'confirmPerson', label: '财务确认人', width: '120' },
        // { prop: 'confirmTime', label: '财务确认时间', width: '120' },
        // { prop: 'confirmAmount', label: '财务确认金额', width: '120' }
      ],
      redeemData: [],
      serialNumberParams: '',
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
      ]
    }
  },
  mounted () {
    if (this.$route.params.serialNumber) {
      this.serialNumberParams = this.$route.params.serialNumber
      localStorage.setItem('serialNumberParams', this.serialNumberParams)
    } else {
      this.serialNumberParams = localStorage.getItem('serialNumberParams')
    }
    this.getData()
  },
  watch: {
  },
  methods: {
    getData () {
      req('getOrderDetailData', {serialNumber: this.serialNumberParams})
        .then(res => {
          if (res.data.code === '00000') {
            // try {
            let orderInfoObj = res.data.data.orderInfo
            Object.keys(this.form).map(key => {
              switch (key) {
                case 'amount':
                  this.form['amount'] = `${orderInfoObj['amount'] / 100} 元`
                  break
                case 'takeTicketsFlag':
                  orderInfoObj['takeTicketsFlag'] === 1 ? this.form['takeTicketsFlag'] = true : this.form['takeTicketsFlag'] = false
                  break
                case 'lotteryType':
                  this.form['lotteryType'] = orderInfoObj['lotteryType'] === '51' ? '竞彩足球' : '竞彩篮球'
                  break
                case 'awardFlag':
                  this.form['awardFlag'] = orderInfoObj['awardFlag'] === '2' ? '未中奖'
                    : orderInfoObj['awardFlag'] === '1' ? '已中奖' : '未算奖'
                  break
                case 'hasAward':
                  this.form['hasAward'] = orderInfoObj['hasAward'] === '1' ? '已兑奖' : '未兑奖'
                  break
                case 'awardAmount':
                  this.form['awardAmount'] = orderInfoObj['awardAmount'] > 0 ? `${orderInfoObj['awardAmount'] / 100} 元` : '0 元'
                  break
                default:
                  this.form[key] = orderInfoObj[key]
                  break
              }
            })
            if (res.data.data['storeInfo']) {
              this.form.storeAddress = res.data.data.storeInfo.storeAddress
            }
            switch (this.form.payFlag) {
              case 0:
                this.form.payFlag = '未支付'
                break
              case 1:
                this.form.payFlag = '支付确认中'
                break
              case 2:
                this.form.payFlag = '支付成功'
                break
              case 3:
                this.form.payFlag = '支付失败'
                break
              default:
                break
            }
            let subPlayType = orderInfoObj.subPlayType
            res.data.data.betContextList.map(element => {
              let dataObj = {}
              let betItemsStr = ''
              let tombolaStr = ''
              Object.keys(element).map(key => {
                if (key !== 'betItems') {
                  dataObj[key] = element[key]
                } else if (key === 'betItems') {
                  element.betItems.map(ele => {
                    if (subPlayType === '51' || subPlayType === '56') {
                      tombolaStr = subPlayType === '51' ? '胜平负' : '让球胜平负'
                      switch (ele) {
                        case '3':
                          betItemsStr += '胜，'
                          break
                        case '1':
                          betItemsStr += '平，'
                          break
                        case '0':
                          betItemsStr += '负，'
                          break
                        default:
                          break
                      }
                    } else if (subPlayType === '52') {
                      tombolaStr = '比分'
                      switch (ele) {
                        case '3A':
                          betItemsStr += '胜其他，'
                          break
                        case '1A':
                          betItemsStr += '平其他，'
                          break
                        case '0A':
                          betItemsStr += '负其他，'
                          break
                        default:
                          let arr = []
                          arr = ele.split('')
                          betItemsStr += arr[0] + ':' + arr[1] + '，'
                          break
                      }
                    } else if (subPlayType === '53') {
                      tombolaStr = '总进球'
                      betItemsStr += `${ele}球，`
                    } else if (subPlayType === '54') {
                      tombolaStr = '半全场'
                      switch (ele) {
                        case '33':
                          betItemsStr += '胜胜，'
                          break
                        case '31':
                          betItemsStr += '胜平，'
                          break
                        case '30':
                          betItemsStr += '胜负，'
                          break
                        case '13':
                          betItemsStr += '平胜，'
                          break
                        case '11':
                          betItemsStr += '平平'
                          break
                        case '10':
                          betItemsStr += '平负，'
                          break
                        case '03':
                          betItemsStr += '负胜，'
                          break
                        case '01':
                          betItemsStr += '负平，'
                          break
                        case '00':
                          betItemsStr += '负负，'
                          break
                        default:
                          break
                      }
                    } else if (subPlayType === '59') {
                      tombolaStr = '混合'
                      if (element.subPlayType === '51' || element.subPlayType === '56') {
                        switch (ele) {
                          case '3':
                            betItemsStr += '胜，'
                            break
                          case '1':
                            betItemsStr += '平，'
                            break
                          case '0':
                            betItemsStr += '负，'
                            break
                          default:
                            break
                        }
                      } else if (element.subPlayType === '52') {
                        switch (ele) {
                          case '3A':
                            betItemsStr += '胜其他，'
                            break
                          case '1A':
                            betItemsStr += '平其他，'
                            break
                          case '0A':
                            betItemsStr += '负其他，'
                            break
                          default:
                            let arr = []
                            arr = ele.split('')
                            betItemsStr += arr[0] + ':' + arr[1] + '，'
                            break
                        }
                      } else if (element.subPlayType === '53') {
                        betItemsStr += `${ele}球，`
                      } else if (element.subPlayType === '54') {
                        switch (ele) {
                          case '33':
                            betItemsStr += '胜胜，'
                            break
                          case '31':
                            betItemsStr += '胜平，'
                            break
                          case '30':
                            betItemsStr += '胜负，'
                            break
                          case '13':
                            betItemsStr += '平胜，'
                            break
                          case '11':
                            betItemsStr += '平平'
                            break
                          case '10':
                            betItemsStr += '平负，'
                            break
                          case '03':
                            betItemsStr += '负胜，'
                            break
                          case '01':
                            betItemsStr += '负平，'
                            break
                          case '00':
                            betItemsStr += '负负，'
                            break
                          default:
                            break
                        }
                      }
                    }
                  })
                  dataObj['betItems'] = betItemsStr.substr(0, betItemsStr.length - 1)
                }
                dataObj['VS'] = 'VS'
                dataObj['tombola'] = tombolaStr
              })
              this.tableData.push(dataObj)
            })
            // } catch (error) {
            // }
          } else {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          }
        })
    },
    search () {
      console.log(this.form)
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    goback () {
      localStorage.removeItem('serialNumberParams')
      this.$router.push('order-management')
    },
    submitForm () {
      // console.log(this.form)
    },
    changeStatus () {
      // this.$ajax.post('/order/orderInfoExceptions.json', {serialNumber: '3FgmvcAKRt8YS8wnCjBU', exceptionType: this.form.exceptionType})
      req('changeStatus', {serialNumber: '3FgmvcAKRt8YS8wnCjBU', exceptionType: this.form.exceptionType})
        .then(res => {
          if (res.data.code === '00000' && res.data.data.length) {
            let str = ''
            res.data.data.map(val => {
              str += val.exceptionInfo + ';'
            })
            this.form.exceptionInfo = str.substr(0, str.length - 1)
          } else if (res.data.code === '00000' && !res.data.data.length) {
            this.form.exceptionInfo = '无此异常记录'
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
<style lang="less">
  .order-detail {
    width: 90%;
    background-color: #ffffff;
    border: 1px solid #797979;
    border-radius: 15px;
    margin-bottom: 50px;
    margin-top: 1px;
    padding: 25px;
    .grayLayout{
      background-color: #f2f2f2;
      border-radius: 10px 10px 0 0;
      padding: 10px;
    }
    .el-input {
      width: 180px;
    }
    .el-radio-group {
      width: 180px;
    }
    .useDiscount{
      .el-form-item__label{
        width: 110px !important;
      }
      .el-form-item__content{
        margin-left: 110px !important;
      }
    }
    .geographical{
      .el-input {
        width: 428px;
      }
      .el-form-item__content{
        width: 428px!important;
      }
      .el-input__inner{
        width: 428px!important;
      }
    }
    .scanNum{
      .el-form-item__label{
        width: 124px !important;
      }
      .el-form-item__content{
        margin-left: 124px !important;
      }
    }
    .title,.sub_title{
      margin-left: 40px;
      color: #000000;
    }
    .title{
      font-weight: 700;
    }
    .sub_title{
      margin-bottom: 5px;
    }
    .el-table td, .el-table th.is-leaf {
      text-align: center;
    }
    .el-form-item {
      float: left;
      /* margin-left: 10px; */
    }
    .clearfix:after {
      content: '';
      display: block;
      height: 0;
      line-height: 0;
      visibility: hidden;
      clear: both;
    }
    .el-table th>.cell {
      text-align: center;
    }
    .handleRecords .errorDescription {
      width: 85%;
      .el-textarea__inner {
        min-height: 50px !important;
      }
    }
    .el-input.is-disabled .el-input__inner {
      background-color: #fff !important;
      color: #606266 !important;
    /* cursor: not-allowed; */
    }
    .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
      background-color: #409EFF !important;
      border-color: #409EFF !important;
    }
    .btn .el-form-item__content{
      margin-left: 600px !important;
    }
  }
</style>
