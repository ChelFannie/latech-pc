<template>
  <div class="take-ticket">
    <el-form ref="form" size="mini" :model="form" label-width="110px" class="grayLayout">
      <div class="title">取票单详情</div>
      <div class="basicInfo">
        <div class="sub_title">取票单基础信息</div>
        <div class="content clearfix">
          <el-form-item label="订单编号">
            <el-input v-model="form.basicInfo.orderNum"></el-input>
          </el-form-item>
          <el-form-item label="流水单号">
            <el-input v-model="form.basicInfo.waterNum"></el-input>
          </el-form-item>
          <el-form-item label="用户姓名">
            <el-input v-model="form.basicInfo.userName"></el-input>
          </el-form-item>
          <el-form-item label="用户ID">
            <el-input v-model="form.basicInfo.userId"></el-input>
          </el-form-item>
          <el-form-item label="订单状态">
            <el-input v-model="form.basicInfo.orderStuts"></el-input>
          </el-form-item>
          <el-form-item label="是否使用优惠券" class="useDiscount">
            <el-select v-model="form.basicInfo.useDiscount" placeholder="请选择">
              <el-option label="是" value="useDiscount"></el-option>
              <el-option label="否" value="noDiscount"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单金额">
            <el-input v-model="form.basicInfo.orderAmount"></el-input>
          </el-form-item>
          <el-form-item label="订单下单时间">
            <el-date-picker v-model="form.basicInfo.orderTime" type="date" placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="活动编码">
            <el-input v-model="form.basicInfo.activeCode"></el-input>
          </el-form-item>
          <el-form-item label="活动信息">
            <el-input v-model="form.basicInfo.activeInfo"></el-input>
          </el-form-item>
          <el-form-item label="票券详细编码">
            <el-input v-model="form.basicInfo.ticketCode"></el-input>
          </el-form-item>
          <el-form-item label="票券信息">
            <el-input v-model="form.basicInfo.ticketInfo"></el-input>
          </el-form-item>
          <el-form-item label="用户预订位置">
            <el-input v-model="form.basicInfo.userPostion"></el-input>
          </el-form-item>
          <el-form-item label="用户位置信息" class="geographical">
            <el-input v-model="form.basicInfo.geographical"></el-input>
          </el-form-item>
          <el-form-item label="是否取票">
            <el-select v-model="form.basicInfo.collectTiket" placeholder="请选择">
              <el-option label="是" value="collect"></el-option>
              <el-option label="否" value="noCollect"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="彩票是否取走">
            <el-select v-model="form.basicInfo.takeWay" placeholder="请选择">
              <el-option label="是" value="taked"></el-option>
              <el-option label="否" value="noTake"></el-option>
            </el-select>
          </el-form-item>
        </div>
      </div>
      <div class="lotteryInfo">
        <el-row>
          <el-col :span="24" style="border: 1px solid #000;margin-bottom:5px;"></el-col>
          <el-col :span="22" class="sub_title">取票单彩票信息</el-col>
        </el-row>
        <div class="content clearfix">
          <el-form-item label="业务类型">
            <el-input v-model="form.lotteryInfo.type"></el-input>
          </el-form-item>
          <el-form-item label="业务模式">
            <el-input v-model="form.lotteryInfo.model"></el-input>
          </el-form-item>
          <el-form-item label="业务性质">
            <el-input v-model="form.lotteryInfo.nature"></el-input>
          </el-form-item>
          <el-form-item label="彩票期数">
            <el-input v-model="form.lotteryInfo.periods"></el-input>
          </el-form-item>
          <el-form-item label="投注方式">
            <el-input v-model="form.lotteryInfo.betType"></el-input>
          </el-form-item>
          <el-form-item label="注数">
            <el-input v-model="form.lotteryInfo.pot"></el-input>
          </el-form-item>
          <el-form-item label="开奖时间">
            <el-input v-model="form.lotteryInfo.time"></el-input>
          </el-form-item>
          <el-form-item label="多期投注">
            <el-input v-model="form.lotteryInfo.multiphaseBet"></el-input>
          </el-form-item>
          <el-form-item label="投注倍数">
            <el-input v-model="form.lotteryInfo.multiple"></el-input>
          </el-form-item>
        </div>
      </div>
      <div class="table-conten">
        <el-table ref="multipleTable" border :data="tableData" tooltip-effect="dark" style="width: 85.5%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55">
          </el-table-column>
          <el-table-column v-for="(item, index) in tableColumn" :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          </el-table-column>
        </el-table>
      </div>
      <div class="btn clearfix">
        <el-form-item>
          <el-button type="primary" v-if="show" @click="dialogVisible = true;show = false">取票订单</el-button>
          <el-button type="primary" v-if="!show">确认彩票已支付</el-button>
          <el-button type="primary" v-if="!btnErrorShow" @click="errorDialog">异常报警</el-button>
          <el-button type="info" v-if="btnErrorShow" disabled>异常报警</el-button>
          <el-button>关&nbsp;&nbsp;闭</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-dialog title="请持预订单机扫码枪进行扫码" :visible.sync="dialogVisible" width="35%">
      <div class="demo-input-suffix">
        <span style="margin-right: 5px;">预定取票码</span>
        <el-input v-model="ticketCode" size="mini">
        </el-input>
        <div style="margin-top: 10px;text-align: right;">
          <el-button type="primary" size="small">调取订单</el-button>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false" size="mini">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="异常订单处理详情" :visible.sync="errorDialogShow" width="35%">
      <div class="demo-input-suffix">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane v-for="(item, index) in tabPane" :key="index" :label="item.label" :name="item.name">
              <el-radio v-for="(item1, index1) in item.tabPaneSub" :key="index1" v-model="radio" :label="item1.label">{{item1.content}}</el-radio>
            </el-tab-pane>
        </el-tabs>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="errorDialogShow = false" size="mini">关 闭</el-button>
        <el-button type="primary" @click="errorDialogShow = false" size="mini">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        basicInfo: {
          orderNum: '',
          waterNum: '',
          userName: '',
          userId: '',
          orderStuts: '',
          useDiscount: '',
          orderAmount: '',
          orderTime: '',
          activeCode: '',
          activeInfo: '',
          ticketCode: '',
          ticketInfo: '',
          userPostion: '',
          geographical: '',
          collectTiket: '',
          takeWay: ''
        },
        lotteryInfo: {
          type: '',
          model: '',
          nature: '',
          periods: '',
          betType: '',
          pot: '',
          time: '',
          multiphaseBet: '',
          multiple: ''
        }
      },
      multipleSelection: [],
      tableColumn: [
        { prop: 'gameCode', label: '赛事编码', width: '120' },
        { prop: 'Pagination', label: '分页', width: '80' },
        { prop: 'host', label: '主队', width: '120' },
        { prop: 'VS', label: 'VS', width: '120' },
        { prop: 'guest', label: '客队', width: '120' },
        {
          prop: 'purchaseResult',
          label: '用户支付结果',
          width: '240',
          childColun: [
            { prop: 'win', label: '胜', width: '80' },
            { prop: 'flat', label: '平', width: '80' },
            { prop: 'lose', label: '负', width: '80' }
          ]
        }
      ],
      tableData: [{
        gameCode: '2212312V223',
        Pagination: '1',
        host: '利物浦',
        VS: 'VS',
        guest: '罗马',
        win: '3',
        flat: '1',
        lose: '0'
      }, {
        gameCode: '2212312V223',
        Pagination: '1',
        host: '利物浦',
        VS: 'VS',
        guest: '罗马',
        win: '3',
        flat: '1',
        lose: '0'
      }],
      dialogVisible: false,
      show: true,
      ticketCode: '',
      btnErrorShow: true,
      errorDialogShow: false,
      activeName: '0',
      tabPane: [
        {
          label: '出票异常',
          name: '0',
          tabPaneSub: [
            { content: '吃票', label: '1' },
            { content: '残票', label: '2' }
          ]
        },
        {
          label: '赛事异常',
          name: '1',
          tabPaneSub: [
            { content: '停售', label: '1' },
            { content: '限购', label: '2' }
          ]
        },
        {
          label: '预订单异常',
          name: '2',
          tabPaneSub: [
            { content: '吃票（完全打不出预订单）', label: '1' },
            { content: '残票', label: '2' },
            { content: '卡纸', label: '3' },
            { content: '打印票单彩票机不认', label: '4' },
            { content: '预订单打印机故障', label: '5' }
          ]
        }
      ],
      radio: '1'
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
      val.length === 1 ? this.btnErrorShow = false : this.btnErrorShow = true
    },
    errorDialog () {
      this.errorDialogShow = true
    },
    handleClick () {}
  }
}
</script>
<style lang="less">
.take-ticket{
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
      width: 470px !important;
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
    margin-left: 10px;
  }
  .el-input {
    width: 180px !important;
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
  .btn{
    margin-top: 10px;
  }
  .demo-input-suffix .el-input {
    width: 300px !important;
  }
  .el-radio{
    width: 100%;
  }
  .el-radio+.el-radio {
    margin-left: 0;
  }
}
</style>
