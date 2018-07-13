<template>
  <div class="modify-ticket">
    <el-form ref="form" :model="form" size="mini" label-width="110px" class="grayLayout">
      <div class="title">修改票券</div>
      <div class="ticketInfo">
        <div class="sub_title">修改票券信息</div>
        <div class="content clearfix">
          <el-form-item label="票券名称">
            <el-input v-model="form.ticketInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="票券编码">
            <el-input v-model="form.ticketInfo.code"></el-input>
          </el-form-item>
          <el-form-item label="票券额">
            <el-input v-model="form.ticketInfo.limitAmount"></el-input>
          </el-form-item>
          <el-form-item label="发布张数">
            <el-input v-model="form.ticketInfo.releaseNum"></el-input>
          </el-form-item>
          <el-form-item label="票券形式">
            <el-select v-model="form.ticketInfo.type" placeholder="请选择">
              <el-option label="满减票" value="fullCut"></el-option>
              <el-option label="直赠票" value="straight"></el-option>
              <el-option label="买赠票" value="buyCut"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="票券有效期">
            <el-input v-model="form.ticketInfo.limitTime"></el-input>
          </el-form-item>
          <div class="condition">
            <span class="tickted-condition">票券条件</span>
            <el-form-item label="前提条件" class="precondition">
              <el-input v-model="form.ticketInfo.precondition"></el-input>
            </el-form-item>
            <el-checkbox v-model="form.ticketInfo.autoFill" class="tickted-condition" @change="changeAutoFill">是否自动填充</el-checkbox>
          </div>
          <el-form-item label="票券状态">
            <el-input v-model="form.ticketInfo.status"></el-input>
          </el-form-item>
          <div class="description">
            <el-form-item label="票券描述">
              <el-input type="textarea" autosize v-model="form.ticketInfo.description"></el-input>
            </el-form-item>
          </div>
        </div>
      </div>
      <div class="connectedActive">
        <el-row>
          <el-col :span="24" style="border: 1px solid #000;margin:8px 0;"></el-col>
        </el-row>
        <div class="sub_title">关联活动</div>
        <el-table ref="multipleTable" border :data="activeData" tooltip-effect="dark" style="width: 87.5%">
          <el-table-column v-for="(item, index) in activeColumn" :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          </el-table-column>
        </el-table>
      </div>
      <div class="releaseBtn" style="text-align: center;">
        <el-button type="primary" size="small">发布</el-button>
        <el-button type="primary" size="small">保存</el-button>
        <router-link to="ticket-management">
          <el-button size="small">关闭</el-button>
        </router-link>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        ticketInfo: {
          name: '',
          code: '',
          limitAmount: '',
          releaseNum: '',
          type: '',
          limitTime: '',
          precondition: '',
          autoFill: false,
          description: '',
          status: ''
        }
      },
      activeColumn: [
        { prop: 'ativeName', label: '活动名称', width: '125' },
        { prop: 'ativeName', label: '活动编号', width: '125' },
        { prop: 'startTime', label: '活动开始日期', width: '125' },
        { prop: 'endTime', label: '活动截止日期', width: '125' },
        { prop: 'endTime', label: '发券方式', width: '125' },
        { prop: 'startTime', label: '对应用户群', width: '125' },
        { prop: 'endTime', label: '活动状态', width: '125' }
      ],
      activeData: []
    }
  },
  methods: {
    changeAutoFill (val) {
      // console.log(val)
      this.form.ticketInfo.autoFill = val
    }
  }
}
</script>
<style lang="less">
.modify-ticket{
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
  .condition{
    .tickted-condition{
      float: left;
      margin-left: 50px;
      margin-bottom: 18px;
      color: #606266;
      line-height: 28px;
      font-size: 14px;
    }
  }
  .description{
    .el-form-item{
      width: 600px !important;
      .el-textarea__inner{
        min-height: 50px !important;
        height: 50px !important;
      }
    }
  }
  .releaseBtn{
    margin-top: 10px;
    a{
      margin-left: 10px;
    }
  }
}
</style>
