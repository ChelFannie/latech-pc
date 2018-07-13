<template>
  <div class="lottery-record">
    <i-layout :head="true" :gray="true">
      <div slot="grayLayout">
        <i-form @search="search" @empty="empty">
          <el-form-item label="赛事编号">
            <el-input v-model="form.matchUniqueId" maxlength="14"></el-input>
          </el-form-item>
          <el-form-item label="比赛双方">
            <el-input v-model="form.host" placeholder="主队"></el-input>
            <span>——</span>
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
      <!-- <div slot="tableHead">
        <el-button size="small">刷新</el-button>
        <el-button size="small">批量处理</el-button>
        <el-button size="small">导入</el-button>
        <el-button size="small" @click="dialogVisible = true">导出</el-button>
      </div> -->
      <el-table
        v-loading="loading"
        ref="multipleTable"
        :data="tableData"
        border
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <!-- <el-table-column type="selection" width="55">
        </el-table-column> -->
        <el-table-column
          v-for="(item, index) in tableColumn"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          fixed
          align="center">
        </el-table-column>
        <el-table-column label="赛事结果" align="center">
          <el-table-column
            v-for="(item, index) in allResult"
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            align="center">
          </el-table-column>
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
      form: {
        matchUniqueId: '',
        host: '',
        guest: '',
        stopSaleTime: ''
      },
      tableColumn: [
        { prop: 'matchUniqueId', label: '赛事编号', width: '140' },
        { prop: 'leagueName', label: '联赛名称', width: '90' },
        { prop: 'matchId', label: '比赛周', width: '70' },
        { prop: 'gameDate', label: '比赛日期', width: '120' },
        { prop: 'gameTime', label: '比赛时间', width: '120' },
        { prop: 'host', label: '主队', width: '120' },
        { prop: 'guest', label: '客队', width: '120' }
      ],
      allResult: [
        { prop: 'win', label: '胜平负', width: '80' },
        { prop: 'let', label: '让球胜平负', width: '95' },
        { prop: 'golas', label: '总进球', width: '80' },
        { prop: 'score', label: '比分', width: '80' },
        { prop: 'hall', label: '半全场', width: '80' }
      ],
      multipleSelection: [],
      tableData: [],
      all: [],
      page: 1,
      pageSize: 10,
      dataTotal: 0,
      searchFlag: false,
      searchDate: '',
      loading: true
    }
  },
  created () {
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
      req('getMatchResultList', params)
        .then(res => {
          if (res.data.code === '00000') {
            this.loading = false
            res.data.data.result.map((val, index) => {
              val.matchId = val.matchId.substring(0, 2)
              val['gameDate'] = val.stopSaleTime.split(' ')[0]
              val['gameTime'] = val.stopSaleTime.split(' ')[1].substring(0, 10)
              val.resultMap['51'] && val.resultMap['51'].result && (val.win = val.resultMap['51'].result)
              val.resultMap['56'] && val.resultMap['56'].result && (val.let = val.resultMap['56'].result)
              val.resultMap['53'] && val.resultMap['53'].result && (val.golas = val.resultMap['53'].result + '球')
              val.resultMap['52'] && val.resultMap['52'].result && (val.score = val.resultMap['52'].result)
              val.resultMap['54'] && val.resultMap['54'].result && (val.hall = val.resultMap['54'].result)
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
    handleSizeChange (val) {
      this.pageSize = val
    },
    handleCurrentChange (val) {
      this.page = val
      this.getData()
    },
    handleSelectionChange () {}
  }
}
</script>
<style lang="less" scoped>
.lottery-record{
  .el-table .cell {
    text-align: center;
  }
  .page{
    text-align: center;
    margin-top: 20px;
  }
}
</style>
