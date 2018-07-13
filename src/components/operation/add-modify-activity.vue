<template>
  <div class="add-modify-activity">
    <el-form ref="form" :model="form" size="mini" label-width="110px" class="grayLayout">
      <div class="title">{{data.title}}</div>
      <div class="ticketInfo">
        <div class="sub_title">{{data.sub_title}}</div>
        <div class="content clearfix">
          <div class="wrapTop">
            <el-form-item label="活动名称">
              <el-input v-model="form.activeName" :disabled="data.look_activity"></el-input>
            </el-form-item>
            <el-form-item label="活动编码">
              <el-input v-model="form.activeCode" :disabled="data.look_activity"></el-input>
            </el-form-item>
            <el-form-item label="活动渠道">
              <el-input v-if="data.look_activity" v-model="form.activeFrom" :disabled="data.look_activity"></el-input>
              <el-select v-if="!data.look_activity" v-model="form.activeFrom" placeholder="请选择">
                <el-option v-for="item in reginFrom" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="开始时间">
              <el-input v-if="data.look_activity" v-model="form.beginDate" :disabled="data.look_activity"></el-input>
              <el-date-picker v-if="!data.look_activity" v-model="form.beginDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间">
              <el-input v-if="data.look_activity" v-model="form.endDate" :disabled="data.look_activity"></el-input>
              <el-date-picker v-if="!data.look_activity" v-model="form.endDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
            </el-form-item>
            <el-form-item label="用户群">
              <el-input v-if="data.look_activity" v-model="form.userGroups" :disabled="data.look_activity"></el-input>
              <el-select v-if="!data.look_activity" v-model="form.userGroups" placeholder="请选择">
                <el-option v-for="item in userGroupData" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-input v-if="data.look_activity" v-model="form.selectedArea1" :disabled="data.look_activity"></el-input>
              <el-cascader v-if="!data.look_activity" expand-trigger="hover" :options="areaOptions" v-model="form.selectedArea2" separator="-" @change="handleChange">
              </el-cascader>
            </el-form-item>
            <el-form-item label="发券方式">
              <el-input v-if="data.look_activity" v-model="form.sendWay" :disabled="data.look_activity"></el-input>
              <el-select v-if="!data.look_activity" v-model="form.sendWay" placeholder="请选择">
                <el-option v-for="item in sendWayData" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动上线区域">
              <el-input v-if="data.look_activity" v-model="form.onlineArea" :disabled="data.look_activity"></el-input>
              <el-select v-if="!data.look_activity" v-model="form.onlineArea" placeholder="请选择">
                <el-option v-for="item in onlineAreaData" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动状态">
              <el-input v-if="data.look_activity" v-model="form.statusData" :disabled="data.look_activity"></el-input>
              <el-select v-if="!data.look_activity" v-model="form.status" placeholder="请选择">
                <el-option v-for="item in statusData" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
        </div>
      </div>
      <div class="connectedActive">
        <el-row>
          <el-col :span="24" style="border: 1px solid #000;margin:8px 0;"></el-col>
        </el-row>
        <div class="sub_title">{{data.table_title}}</div>
        <el-table
          ref="multipleTable"
          border
          :data="tableData"
          tooltip-effect="dark"
          style="width: 85.5%"
          @selection-change="handleSelectionChange">
          <el-table-column
            v-for="(item, index) in tableColumn"
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :width="item.width">
          </el-table-column>
        </el-table>
      </div>
      <div class="addTicket">
        <el-button type="primary" @click="searchDialogShow = true">增加票券到活动</el-button>
      </div>
      <div class="ticketBtn" style="text-align: center;">
        <el-button v-if="!data.look_activity" type="primary" size="small" @click="releaseComfirm = true">发布</el-button>
        <el-button v-if="!data.look_activity" size="small">保存</el-button>
        <el-button v-if="data.look_activity" type="primary" size="small" @click="releaseComfirm = true">暂停</el-button>
        <router-link to="activity-management"><el-button size="small">关闭</el-button></router-link>
      </div>
    </el-form>
    <el-dialog title="活动搜索" :visible.sync="searchDialogShow" width="40.4%">
      <el-table ref="multipleTable" border :data="dialogTableData" tooltip-effect="dark" style="width: 85.5%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column v-for="(item, index) in dialogTableColumn" :key="index" :prop="item.prop" :label="item.label" :width="item.width">
        </el-table-column>
      </el-table>
      <el-row class="dialogSearch">
        <el-col :span="16">
          <el-input v-model="dialogSearch" size="mini" placeholder="输入活动名称快速检索"></el-input>
        </el-col>
        <el-col :span="4">
          <el-button icon="el-icon-search" size="mini"></el-button>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="searchDialogShow = false" size="mini">确 认</el-button>
        <el-button @click="searchDialogShow = false" size="mini">关 闭</el-button>
      </span>
    </el-dialog>
    <el-dialog :title="data.confirmTitle" :visible.sync="releaseComfirm" width="30%">
      <span>{{data.confirmMsg}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="releaseComfirm = false" size="small">{{data.confirmBtn}}</el-button>
        <el-button @click="releaseComfirm = false" size="small">{{data.consoleBtn}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  },
  data () {
    return {
      form: {
        activeName: '',
        activeCode: '',
        activeFrom: '',
        beginDate: '',
        endDate: '',
        userGroups: '',
        selectedArea: '',
        sendWay: '',
        onlineArea: '',
        status: ''
      },
      selectedArea1: '',
      selectedArea2: [],
      reginFrom: [
        { value: '1', label: '第三方渠道' },
        { value: '2', label: '申请券' }
      ],
      userGroupData: [
        { value: '1', label: '新用户' },
        { value: '2', label: '老用户' }
      ],
      sendWayData: [
        { value: '1', label: '注册发放' },
        { value: '2', label: '扫码发放' },
        { value: '3', label: '自营发放' },
        { value: '4', label: '用户自领' },
        { value: '5', label: '条件发放' }
      ],
      statusData: [
        { value: '1', label: '已发布' },
        { value: '2', label: '已暂停' },
        { value: '3', label: '已结束' }
      ],
      onlineAreaData: [
        { value: '1', label: '活动中心' }
      ],
      areaOptions: [
        {
          value: 'guangdong',
          label: '广东省',
          children: [
            {
              value: 'guangzhou',
              label: '广州市',
              children: [
                { value: 'tianhe', label: '天河区' },
                { value: 'liwan', label: '荔湾区' },
                { value: 'yuexiu', label: '越秀区' },
                { value: 'baiyun', label: '白云区' }
              ]
            },
            {
              value: 'guangzhou',
              label: '深圳市',
              children: [
                { value: 'futian', label: '福田区' },
                { value: 'nanshan', label: '南山区' },
                { value: 'baoan', label: '宝安区' },
                { value: 'longgang', label: '龙岗区' }
              ]
            }
          ]
        },
        {
          value: 'zhejiang',
          label: '浙江省',
          children: [
            {
              value: 'hangzhou',
              label: '杭州市',
              children: [
                { value: 'xihu', label: '西湖区' },
                { value: 'binjiang', label: '滨江区' },
                { value: 'xiaoshan', label: '萧山区' },
                { value: 'fuyang', label: '富阳区' }
              ]
            }
          ]
        }
      ],
      searchDialogShow: false,
      multipleSelection: [],
      tableColumn: [
        { prop: 'num', label: '序列', width: '60' },
        { prop: 'name', label: '票券名称', width: '120' },
        { prop: 'type', label: '票券形式', width: '120' },
        { prop: 'amount', label: '票券金额', width: '80' },
        { prop: 'limitTime', label: '有效期', width: '120' },
        { prop: 'sendNum', label: '发券张数', width: '120' },
        { prop: 'surplusNum', label: '剩余张数', width: '120' }
      ],
      tableData: [],
      dialogSearch: '',
      dialogTableColumn: [
        { prop: 'name', label: '票券名称', width: '120' },
        { prop: 'type', label: '票券形式', width: '120' },
        { prop: 'amount', label: '票券金额', width: '80' }
      ],
      dialogTableData: [],
      releaseComfirm: false,
      disabledFlag: true
    }
  },
  methods: {
    handleChange (value) {
      this.form.selectedArea = value
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  },
  mounted () {
    this.form.selectedArea = this.data.look_activity === true ? this.selectedArea2 : this.selectedArea1
  }
}
</script>
<style lang="less">
.add-modify-activity{
  width: 90%;
  background-color: #ffffff;
  border: 1px solid #797979;
  border-radius: 15px;
  margin-bottom: 50px;
  margin-top: 1px;
  padding: 25px;
  .wrapTop{
    overflow: hidden;
  }
  .grayLayout{
    background-color: #f2f2f2;
    border-radius: 10px 10px 0 0;
    padding: 10px;
  }
  .title,.sub_title{
    margin-left: 40px;
    color: #000000;
  }
  .title{
    font-weight: 700;
    margin-bottom: 20px;
  }
  .sub_title{
    margin-bottom: 5px;
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
  .dialogSearch{
    margin-top: 10px;
    .el-input {
      width: 90% !important;
    }
  }
  .addTicket{
    text-align: right;
    padding: 10px 110px 10px 0;
  }
}
</style>
