<template>
  <div class="user-basic-information">
    <i-layout :gray="true">
      <div slot="grayLayout">
          <div class="basic">
              <p>用户基本信息</p>
              <el-row>
                <el-col :span="6" class="img">
                    <img :src="imgSrc" alt="">
                    <p>用户头像</p>
                </el-col>
                <el-col :span="18">
                    <div class="basic-form">
                        <el-form ref="form" :model="form" label-width="120px" size="mini">
                            <el-form-item label="用户姓名">
                                <el-input v-model="form.memberName" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="用户编码">
                                <el-input v-model="form.systemUnionid" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="用户真实姓名">
                                <el-input v-model="form.realName" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="用户身份证号">
                                <el-input v-model="form.idCardNumber" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="用户手机号码">
                                <el-input v-model="form.mobile" disabled></el-input>
                            </el-form-item>
                            <!-- <el-form-item label="用户绑定邮箱">
                                <el-input v-model="form.memberName"></el-input>
                            </el-form-item> -->
                            <!-- <el-form-item label="常备住址">
                                <el-input v-model="form.memberName"></el-input>
                            </el-form-item> -->
                            <el-form-item label="注册来源">
                                <el-input v-model="form.regFrom" disabled></el-input>
                            </el-form-item>
                            <el-form-item label="注册时间">
                                <el-input v-model="form.dataTime" disabled></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-col>
              </el-row>
          </div>
          <div class="associated">
            <p>用户关联账户信息</p>
            <el-form ref="form" :model="form" label-width="120px" size="mini">
                <el-form-item label="微信">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="关联时间">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="微博">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="关联时间">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="淘宝">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="关联时间">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="石化">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="关联时间">
                    <el-input></el-input>
                </el-form-item>
            </el-form>
          </div>
          <div class="local">
            <el-row>
                <el-col :span="12">
                    <p>用户本地账户信息</p>
                </el-col>
                <el-col :span="12">
                    <p @click="localDetails">详情>></p>
                </el-col>
            </el-row>
            <el-form ref="form" :model="form" label-width="120px" size="mini">
                <el-form-item label="平台中奖金额">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="平台彩金">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="退款金额">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="提现绑定账户">
                    <el-input></el-input>
                </el-form-item>
            </el-form>
            <el-row>
                <el-col :span="3">
                    <span>账户关联票券</span>
                </el-col>
                <el-col :span="21">
                    <el-table
                        border
                        style="width: 362px">
                        <el-table-column
                            prop="name"
                            label="活动总数"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="票券总数"
                            width="180">
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
          </div>
          <div class="statistical">
              <el-row>
                <el-col :span="12">
                    <p>用户预订统计</p>
                </el-col>
                <el-col :span="12">
                    <p @click="statisticalDetails">详情>></p>
                </el-col>
              </el-row>
              <el-table
                :data="buyTableData"
                border
                style="width: 721px">
                <el-table-column v-for="(item, index) in buyTableColumn"
                  :key="index"
                  :prop="item.prop"
                  :label="item.label"
                  :width="item.width"
                  align="center">
                </el-table-column>
              </el-table>
              <el-row class="bottom">
                <el-col :span="1">
                </el-col>
                <el-col :span="3">
                    <span>常出票的店铺</span>
                </el-col>
                <el-col :span="12">
                    <el-input size="small" v-model="oftenStore" disabled></el-input>
                </el-col>
              </el-row>
          </div>
          <div class="login1">
              <el-row>
                <el-col :span="12">
                    <p>用户登录设备记录</p>
                </el-col>
                <el-col :span="12">
                    <p @click="loginDetails">详情>></p>
                </el-col>
              </el-row>
              <el-table
                :data="loginTableData"
                border
                style="width: 721px">
                <el-table-column v-for="(item, index) in loginTableColumn"
                  :key="index"
                  :prop="item.prop"
                  :label="item.label"
                  :width="item.width"
                  align="center">
                </el-table-column>
              </el-table>
          </div>
          <div class="btn">
            <!-- <el-button size="mini">导出全部</el-button>
            <el-button type="primary" size="mini">新建</el-button>
            <el-button type="primary" size="mini">删除</el-button> -->
            <el-button size="mini" type="primary" @click="close">关闭</el-button>
          </div>
      </div>
    </i-layout>
  </div>
</template>
<script>
import formatDateTime from '../../utils/format'
import req from '../../api/member'
export default {
  data () {
    return {
      form: {
        memberName: '',
        systemUnionid: '',
        idCardNumber: '',
        mobile: '',
        regFrom: '',
        dataTime: '',
        realName: ''
      },
      buyTableColumn: [
        {prop: 'lotteryType', label: '彩种', width: '120'},
        {prop: 'orderCount', label: '订单次数', width: '120'},
        {prop: 'totalAmount', label: '彩种支付金额', width: '120'},
        {prop: 'awardCount', label: '中奖次数', width: '120'},
        {prop: 'lastOrderTime', label: '最近支付时间', width: '120'},
        {prop: 'lastAwardTime', label: '最近中奖时间', width: '120'}
      ],
      buyTableData: [],
      loginTableColumn: [
        {prop: 'name', label: '登录设备', width: '120'},
        {prop: 'address', label: '登录位置', width: '480'},
        {prop: 'name', label: '登录次数', width: '120'}
      ],
      loginTableData: [],
      systemUnionId: 0,
      imgSrc: require('../../assets/image/noPictures.jpg'),
      oftenStore: ''
    }
  },
  created () {
    if (this.$route.params.systemUnionId) {
      this.systemUnionId = this.$route.params.systemUnionId
      localStorage.setItem('userSystemUnionId', this.systemUnionId)
    } else {
      this.systemUnionId = localStorage.getItem('userSystemUnionId')
    }
    this.getBasicData()
    this.getBuyData()
  },
  methods: {
    getBasicData () {
    //   this.$ajax.get(`/memberManage/getMemberDetail.json?systemUnionId=${this.systemUnionId}`)
      req('getBasicData', {systemUnionId: this.systemUnionId})
        .then(res => {
          if (res.data.code === '00000') {
            try {
              Object.keys(this.form).map(key => {
                this.form[key] = res.data.data[key]
              })
              this.form.regFrom === 1 ? this.form.regFrom = '中石化' : this.form.regFrom = '自营'
              this.form.dataTime = this.form.dataTime.substring(0, 19)
              res.data.data.headImages && (this.imgSrc = res.data.data.headImages)
            } catch (error) {
            }
          } else {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          }
        })
    },
    getBuyData () {
    //   this.$ajax.get(`/order/statisticOrderByMember.json?memberId=${this.systemUnionId}`)
      req('getBuyData', {memberId: this.systemUnionId})
        .then(res => {
          if (res.data.code === '00000') {
            let orderCount = 0
            let winCount = 0
            let moneyCount = 0
            res.data.data.statisticList.map(val => {
              val.lastAwardTime && (val.lastAwardTime = formatDateTime(val.lastAwardTime).substring(0, 10))
              val.lastOrderTime && (val.lastOrderTime = formatDateTime(val.lastOrderTime).substring(0, 10))
              val.lotteryType === 51 ? val.lotteryType = '足球' : val.lotteryType = '篮球'
              orderCount += val.orderCount
              moneyCount += val.totalAmount
              winCount += val.awardCount
            })
            this.buyTableData = res.data.data.statisticList
            this.buyTableData.push({
              lotteryType: '合计',
              orderCount: orderCount,
              totalAmount: moneyCount,
              awardCount: winCount
            })
            res.data.data.store && (this.oftenStore = res.data.data.store.storeName)
          } else {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          }
        })
    },
    search () {

    },
    handleSelectionChange () {

    },
    rowClick (row, event, column) {
      console.log(row, event, column)
    },
    close () {
      this.$router.push({name: '会员管理'})
    },
    localDetails () {
    //   this.$router.push({name: '用户本地账户信息'})
    },
    statisticalDetails () {
    //   this.$router.push({name: '用户预订明细'})
    },
    loginDetails () {
    //   this.$router.push({name: '用户登录设备记录'})
    }
  }
}
</script>
<style lang="less">
.user-basic-information{
    .basic {
        p{
            font-size: 20px;
            color: #000000;
        }
        p:last-child{
            font-size: 16px;
            text-align: center;
        }
        .img{
            text-align: center;
        }
        img{
            width: 120px;
            height: 130px;
        }
        .basic-form {
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
                        width: 200px;
                    }
                }
                .el-form-item:nth-child(7) .el-input{
                    width: 530px;
                }
            }
        }
    }
    .associated {
        p{
            font-size: 20px;
            color: #000000;
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
            }
            .el-form-item:nth-child(2n-1) .el-input{
                width: 500px;
            }
        }
    }
    .local {
        p{
            font-size: 20px;
            color: #000000;
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
            }
            .el-form-item:nth-child(4) .el-input{
                width: 500px;
            }
        }
        span {
            font-size: 16px;
            color: #606266;
            margin-left: 20px;
        }
        // .el-form-item .el-input{
        //     width: 200px;
        // }
    }
    .statistical {
        p{
            font-size: 20px;
            color: #000000;
        }
        .bottom{
            margin-top: 10px;
            span{
                font-size: 16px;
                color: #606266;
                line-height: 40px;
            }
        }
    }
    .login1 {
        overflow: hidden;
        p{
            font-size: 20px;
            color: #000000;
        }
    }
    .btn {
        margin-top: 20px;
        padding-left: 600px;
    }
}
</style>
