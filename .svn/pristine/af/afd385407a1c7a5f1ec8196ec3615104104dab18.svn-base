<template>
  <div class="game-management">
    <i-layout :gray="true">
      <div slot="grayLayout">
          <i-form @search="search" @empty="empty">
            <el-form-item label="赛事编号">
              <el-input v-model="form.matchUniqueId" maxlength="14"></el-input>
            </el-form-item>
            <el-form-item label="比赛双方">
              <el-input v-model="form.host" placeholder="主队"></el-input>
              <span>—</span>
              <el-input v-model="form.guest" placeholder="客队"></el-input>
            </el-form-item>
            <el-form-item label="比赛日期">
              <el-date-picker
                v-model="form.stopSaleTime"
                type="date"
                placeholder="选择日期"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-form-item>
          </i-form>
        </div>
        <!-- <div slot="tableHead"> -->
          <!-- <el-button size="small" @click="create">新建</el-button> -->
          <!-- <el-button size="small">修改</el-button> -->
          <!-- <el-button size="small">删除</el-button> -->
          <!-- <el-button size="small">刷新</el-button>
          <el-button size="small">批量处理</el-button>
          <el-button size="small">导入</el-button>
          <el-button size="small">导出</el-button> -->
        <!-- </div> -->
        <el-table
          v-loading="loading"
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          border
          style="width: 100%"
          :row-class-name="tableRowClassName"
          @row-dblclick="rowClick">
          <!-- <el-table-column
            type="selection"
            width="55">
          </el-table-column> -->
          <el-table-column v-for="(item, index) in tableColumn"
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            align="center">
          </el-table-column>
          <el-table-column
            label="快速控制"
            align="center"
            width="100">
            <template slot-scope="scope">
              <el-button v-if="scope.row.saleType == 1" @click="stopSale(scope.row)" type="text" size="small">停售</el-button>
              <el-button v-if="scope.row.saleType == 1" @click="delay(scope.row)" type="text" size="small">延期</el-button>
              <el-button v-if="scope.row.saleType == 2" @click="sale(scope.row)" type="text" size="small">开售</el-button>
              <el-button v-if="scope.row.saleType == 0" type="text" size="small">未开售</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          class="page"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page"
          :page-size="pageSize"
          layout="total, prev, pager, next, jumper"
          :total="dataTotal">
        </el-pagination>
    </i-layout>
    <el-dialog title="请调整比赛日" :visible.sync="dialogDelayVisible" width="450px">
      <el-date-picker
        v-model="delayTime"
        type="datetime"
        placeholder="选择日期时间"
        value-format="yyyy-MM-dd HH:mm:ss"
        :picker-options="pickerOptions1">
      </el-date-picker>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDelayVisible = false">取 消</el-button>
        <el-button type="primary" @click="delayQuery">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import req from '../../api/operation'
export default {
  data () {
    return {
      form: {
        matchUniqueId: '',
        host: '',
        guest: '',
        stopSaleTime: ''
      },
      tableColumn: [
        {prop: 'matchUniqueId', label: '赛事编号', width: '140'},
        {prop: 'leagueName', label: '联赛名称', width: '120'},
        {prop: 'matchId', label: '比赛周', width: '80'},
        {prop: 'gameDate', label: '比赛日期', width: '100'},
        {prop: 'gameTime', label: '比赛时间', width: '100'},
        {prop: 'host', label: '主队', width: '160'},
        {prop: 'guest', label: '客队', width: '160'}
      ],
      tableData: [],
      loading: true,
      page: 0,
      pageSize: 10,
      dataTotal: 0,
      searchFlag: false,
      searchDate: '',
      dialogDelayVisible: false,
      delayTime: '',
      delayMatchUniqueId: '',
      disabledDelayTime: 0,
      pickerOptions1: {
        disabledDate: (time) => {
          return time.getTime() <= this.disabledDelayTime - 3600 * 1000 * 24
        }
      }
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
      // this.$ajax.post('/matchData/getMatchListPage.json', params)
      req('getMatchListData', params)
        .then(res => {
          if (res.data.code === '00000') {
            this.loading = false
            res.data.data.result.map(val => {
              val.matchId = val.matchId.substring(0, 2)
              val['gameDate'] = val.stopSaleTime.split(' ')[0]
              val['gameTime'] = val.stopSaleTime.split(' ')[1].substring(0, 8)
            })
            this.tableData = res.data.data.result
            this.dataTotal = res.data.data.totalCount
          } else {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          }
        })
    },
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
    rowClick (row, event, column) {
      localStorage.setItem('page', JSON.stringify({page: this.page, total: this.dataTotal}))
      this.$router.push({name: '赛事详情', params: {matchUniqueId: row.matchUniqueId}})
    },
    tableRowClassName ({row, rowIndex}) {
      if (row.saleType === 2) {
        return 'warning-row'
      }
      return ''
    },
    // 停售
    stopSale (row) {
      this.$confirm('当前赛事要调整至停售状态, 请确认是否停售?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // this.$ajax.get(`/matchData/cancelMatch.json?matchUniqueId=${row.matchUniqueId}`)
        req('cancelMatch', {matchUniqueId: row.matchUniqueId})
          .then(res => {
            if (res.data.code === '00000') {
              this.getData()
              this.$message({
                type: 'success',
                message: '停售成功!'
              })
            } else {
              this.$message({
                type: 'error',
                message: res.data.msg
              })
            }
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消停售'
        })
      })
    },
    // 延期
    delay (row) {
      this.dialogDelayVisible = true
      this.delayMatchUniqueId = row.matchUniqueId
      this.disabledDelayTime = new Date(row.stopSaleTime)
    },
    delayQuery () {
      this.dialogDelayVisible = false
      if (new Date(this.delayTime).getTime() - new Date(this.disabledDelayTime).getTime() < 0) {
        this.$message({
          type: 'error',
          message: '延期失败！ 延时时间需晚于当前赛事截止时间'
        })
        return
      }
      // this.$ajax.post('/matchData/delayMatch.json', {matchUniqueId: this.delayMatchUniqueId, newStopSaleTime: this.delayTime})
      req('delayMatch', {matchUniqueId: this.delayMatchUniqueId, newStopSaleTime: this.delayTime})
        .then(res => {
          if (res.data.code === '00000') {
            this.$message({
              type: 'success',
              message: '延期成功！'
            })
            this.getData()
          } else {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          }
        })
    },
    // 开售
    sale (row) {

    },
    handleSizeChange (val) {
      this.pageSize = val
    },
    handleCurrentChange (val) {
      this.page = val
      this.getData()
    }
  }
}
</script>
<style lang="less">
.game-management{
  .page{
    margin-top: 15px;
    margin-left: 100px;
  }
  .el-table .warning-row {
    background: oldlace;
  }
  .el-table .success-row {
    background: #f0f9eb;
  }
  .el-pagination{
    text-align:center;
    margin-top:20px;
  }
}
</style>
