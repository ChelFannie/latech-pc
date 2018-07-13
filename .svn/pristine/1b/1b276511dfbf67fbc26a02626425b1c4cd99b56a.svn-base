<template>
  <div class="activity-management">
    <i-layout :gray="true" :head="true">
      <div slot="grayLayout">
        <i-form @search="search" @empty="empty">
          <el-form-item label="活动编码">
            <el-input v-model="form.activeCode"></el-input>
          </el-form-item>
          <el-form-item label="活动日期" label-width="100px">
            <el-date-picker v-model="form.beginCreateDate" type="date" placeholder="开始日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
            <span>—</span>
            <el-date-picker v-model="form.endCreateDate" type="date" placeholder="结束日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
          </el-form-item>
          <el-form-item label="活动名称">
            <el-input v-model="form.activeName"></el-input>
          </el-form-item>
          <el-form-item label="活动渠道">
            <el-select v-model="form.activeFrom" placeholder="请选择">
              <el-option v-for="item in reginFrom" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="用户群">
            <el-select v-model="form.userGroups" placeholder="请选择">
              <el-option v-for="item in userGroupData" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </i-form>
      </div>
      <div slot="tableHead">
        <router-link to="add-activity" style="margin-right: 10px;"><el-button size="small">新建</el-button></router-link>
        <router-link to="modify-activity" style="margin-right: 10px;">
          <el-button size="small">修改</el-button>
        </router-link>
        <el-button size="small">删除</el-button>
        <el-button size="small">刷新</el-button>
        <el-button size="small">批量处理</el-button>
        <el-button size="small">导入</el-button>
        <el-button size="small">导出</el-button>
      </div>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" border style="width: 85%" highlight-current-row @row-dblclick="lookActivity">
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
        activeCode: '',
        beginCreateDate: '',
        endCreateDate: '',
        activeName: '',
        activeFrom: ''
      },
      reginFrom: [
        { value: '1', label: '第三方渠道' },
        { value: '2', label: '申请券' }
      ],
      userGroupData: [
        { value: '1', label: '新用户' },
        { value: '2', label: '老用户' }
      ],
      tableColumn: [
        { prop: 'activeName', label: '活动名称', width: '120' },
        { prop: 'activeCode', label: '活动编码', width: '120' },
        { prop: 'beginCreateDate', label: '开始日期', width: '120' },
        { prop: 'endCreateDate', label: '结束日期', width: '120' },
        { prop: 'regin', label: '发券方式', width: '120' },
        { prop: 'userGroups', label: '用户群', width: '120' },
        { prop: 'activeStatus', label: '活动状态', width: '120' }
      ],
      tableData: [
        {
          activeName: '111',
          activeCode: '111',
          beginCreateDate: '111',
          endCreateDate: '111',
          regin: '111',
          userGroups: '111',
          activeStatus: '111'
        }
      ]
    }
  },
  methods: {
    search () {
      console.log(this.form)
    },
    empty () {
      Object.keys(this.form).map(key => {
        this.form[key] = ''
      })
    },
    lookActivity (row, event) {
      this.$router.push('look-activity')
    }
  }
}
</script>
<style lang="less" scoped>
.activity-management{
}
</style>
