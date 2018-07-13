<template>
  <div class="equipment-shop">
      <i-layout :head="true" :gray="true">
        <div slot="grayLayout">
          <i-form @search="search" @empty="empty">
            <el-form-item label="店铺名称">
              <el-input v-model="form.storeName" maxlength="30"></el-input>
            </el-form-item>
            <!-- <el-form-item label="设备编号">
              <el-input v-model="form.terminalCode"></el-input>
            </el-form-item> -->
            <el-form-item label="店铺编码">
              <el-input v-model="form.systemUnionid" maxlength="35"></el-input>
            </el-form-item>
            <!-- <el-form-item label="归属部门">
              <el-input v-model="form.department"></el-input>
            </el-form-item> -->
          </i-form>
        </div>
        <div slot="tableHead">
          <el-button size="small" @click="create">新建</el-button>
          <el-button size="small" @click="edit">修改</el-button>
          <el-button size="small" @click="deleteShop">删除</el-button>
          <!-- <el-button size="small">刷新</el-button>
          <el-button size="small">批量处理</el-button>
          <el-button size="small">导入</el-button>
          <el-button size="small">导出</el-button> -->
        </div>
        <el-table
          v-loading="loading"
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          border
          @select="checkSelect" @select-all="checkSelect">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column v-for="(item, index) in tableColumn"
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            align="center">
          </el-table-column>
        </el-table>
        <el-pagination
          class="page"
          background
          @current-change="handleCurrentChange"
          :current-page="page"
          :page-size="pageSize"
          layout="total, prev, pager, next, jumper"
          :total="dataTotal">
        </el-pagination>
      </i-layout>
  </div>
</template>
<script>
import req from '../../api/system'
export default {
  data () {
    return {
      input: '',
      form: {
        storeName: '',
        // terminalCode: '',
        systemUnionid: ''
        // department: ''
      },
      tableColumn: [
        {prop: 'systemUnionid', label: '店铺编码', width: '300'},
        {prop: 'storeName', label: '店铺名称', width: '200'},
        {prop: 'businessType', label: '所属业务', width: '120'}
      ],
      tableData: [],
      searchFlag: false,
      page: 1,
      pageSize: 10,
      dataTotal: 0,
      selection: [],
      loading: true
    }
  },
  created () {
    if (localStorage.getItem('lastRouter') === '/operation/game-details') {
      this.dataTotal = JSON.parse(localStorage.getItem('page')).total
      this.page = JSON.parse(localStorage.getItem('page')).page
    }
    this.getData()
  },
  methods: {
    search () {
      this.searchFlag = true
      this.getData()
    },
    empty () {
      Object.keys(this.form).map(key => {
        this.form[key] = ''
      })
      this.searchFlag = false
      this.page = 1
      this.getData()
    },
    create () {
      this.$router.push({'name': '新增店铺'})
    },
    edit () {
      if (!this.selection.length) {
        this.$message({
          type: 'warning',
          message: '请勾选需要编辑的店铺'
        })
      } else if (this.selection.length > 1) {
        this.$message({
          type: 'warning',
          message: '不能同时编辑超过2个店铺'
        })
      } else {
        this.$router.push({ path: 'modify-store', query: { systemUnionid: this.selection[0].systemUnionid } })
      }
    },
    deleteShop () {
      if (!this.selection.length) {
        this.$message({
          type: 'warning',
          message: '请勾选需要删除的店铺'
        })
      } else if (this.selection.length > 1) {
        this.$message({
          type: 'warning',
          message: '不能同时删除超过2个店铺'
        })
      } else {
        let index = this.tableData.findIndex(ele => ele.systemUnionid === this.selection[0].systemUnionid)
        // this.$ajax.post('/machine/deleteStoreMachine.json', {systemUnionid: this.selection[0].systemUnionid})
        req('deleteStoreMachine', {systemUnionid: this.selection[0].systemUnionid})
          .then(res => {
            if (res.data.code === '00000') {
              this.$delete(this.tableData, index)
              this.$message({
                type: 'success',
                message: '删除成功'
              })
            } else {
              this.$message({
                type: 'error',
                message: res.data.msg
              })
            }
          })
      }
    },
    handleCurrentChange (val) {
      this.page = val
      this.getData()
    },
    getData () {
      this.searchFlag || Object.keys(this.form).map(key => {
        this.form[key] = ''
      })
      let nullFlag = false
      Object.keys(this.form).map(key => {
        this.form[key] !== '' && (nullFlag = true)
      })
      nullFlag || (this.searchFlag = false)
      let params = {
        ...this.form,
        pageIndex: this.page,
        pageSize: this.pageSize
      }
      req('getMachineList', params)
        .then(res => {
          if (res.data.code === '00000') {
            this.loading = false
            this.dataTotal = res.data.data.totalCount
            res.data.data.result.map((val, index) => {
              val.businessType = val.businessType === 0 ? '体彩' : '福彩'
              this.tableData = res.data.data.result
            })
          } else {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          }
        })
    },
    checkSelect (selection, row) {
      this.selection = selection
      // this.$router.push({path: 'store-detailInfo', query: {systemUnionid: row.systemUnionid}})
    }
  }
}
</script>
<style lang="less" scoped>
.equipment-shop{
  color: red;
}
.el-pagination{
  text-align: center;
  margin-top: 30px;
}
.el-table{
  width: 100%;
}
</style>
