<template>
  <div class="ticket-management">
    <i-layout :gray="true" :head="true">
      <div slot="grayLayout">
        <i-form @search="search" @empty="empty">
          <el-form-item label="票券名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="票券有效期">
            <el-input v-model="form.limitTime"></el-input>
          </el-form-item>
          <el-form-item label="剩余张数小于">
            <el-input v-model="form.residue"></el-input>
          </el-form-item>
          <el-form-item label="票券编码">
            <el-input v-model="form.code"></el-input>
          </el-form-item>
          <el-form-item label="票券形式">
            <el-select v-model="form.type" placeholder="请选择">
              <el-option label="满减票" value="fullCut"></el-option>
              <el-option label="直赠票" value="straight"></el-option>
              <el-option label="买赠票" value="buyCut"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="票券状态">
            <el-input v-model="form.status"></el-input>
          </el-form-item>
        </i-form>
      </div>
      <div slot="tableHead">
        <router-link to="add-ticket-management">
          <el-button size="small">新建</el-button>
        </router-link>
        <el-button size="small" @click="modify">修改</el-button>
        <el-button size="small">删除</el-button>
        <el-button size="small">刷新</el-button>
        <el-button size="small">批量处理</el-button>
        <el-button size="small">导入</el-button>
        <el-button size="small">导出</el-button>
      </div>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" border style="width: 85%" @cell-dblclick="lookTicket" highlight-current-row @current-change="handleCurrentChange">
        <el-table-column v-for="(item, index) in tableColumn" :key="index" :prop="item.prop" :label="item.label" :width="item.width"
          align="center">
        </el-table-column>
      </el-table>
      <!-- <el-pagination background layout="prev, pager, next" :total="100" :size="5"></el-pagination> -->
    </i-layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        limitTime: '',
        residue: '',
        code: '',
        type: '',
        status: ''
      },
      tableColumn: [
        { prop: 'name', label: '票券名称', width: '120' },
        { prop: 'code', label: '票券编码', width: '120' },
        { prop: 'limitTime', label: '票券有效期', width: '120' },
        { prop: 'status', label: '票券状态', width: '120' },
        { prop: 'type', label: '票券形式', width: '120' },
        { prop: 'amount', label: '票券金额', width: '120' },
        { prop: 'residualNum', label: '票券剩余量', width: '120' }
      ],
      tableData: [{
        name: '2222',
        code: '0000',
        limitTime: '999/99',
        status: '未发布',
        type: '满减票',
        amount: '100',
        residualNum: '100'
      }, {
        name: '2222',
        code: '0000',
        limitTime: '999/99',
        status: '查看',
        type: '满减票',
        amount: '100',
        residualNum: '100'
      }, {
        name: '2222',
        code: '0000',
        limitTime: '999/99',
        status: '查看',
        type: '满减票',
        amount: '100',
        residualNum: '100'
      }],
      currentRow: null
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
    lookTicket (row, column, cell, event) {
      if (row.status === '查看') {
        this.$router.push({path: 'release-ticket'})
      }
    },
    handleCurrentChange (val) {
      this.currentRow = val
    },
    modify () {
      if (this.currentRow === null) {
        this.$message({
          message: '请选择需要修改的数据',
          type: 'error',
          duration: 2000
        })
      } else {
        if (this.currentRow.status !== '查看') {
          this.$message({
            message: '您当前要修改的票券所处活动正在运营中是不能进行票券信息修改',
            type: 'error',
            duration: 2500
          })
        } else {
          this.$router.push('modify-ticket')
        }
      }
    }
  }
}
</script>
<style lang="less">
.ticket-management{
  .el-table--striped .el-table__body tr.el-table__row--striped.current-row td, .el-table__body tr.current-row>td, .el-table__body tr.hover-row.current-row>td, .el-table__body tr.hover-row.el-table__row--striped.current-row>td, .el-table__body tr.hover-row.el-table__row--striped>td, .el-table__body tr.hover-row>td {
    background-color: #a1cbda;
  }
  .el-table_1_column_4 .cell {
    cursor: pointer;
  }
}
</style>
