<template>
  <div class="game-details">
    <i-layout :gray="true">
      <div slot="grayLayout">
        <div class="details">
            <p>赛事详情</p>
            <el-form ref="form" :model="form" label-width="120px" size="mini">
                <el-form-item label="赛事编号">
                    <el-input disabled v-model="form.matchUniqueId"></el-input>
                </el-form-item>
                <el-form-item label="赛事类型">
                    <el-input disabled v-model="form.matchType"></el-input>
                </el-form-item>
                <el-form-item label="联赛编号">
                    <el-input disabled v-model="form.leagueCode"></el-input>
                </el-form-item>
                <el-form-item label="联赛名称">
                    <el-input disabled v-model="form.leagueName"></el-input>
                </el-form-item>
                <el-form-item label="比赛周">
                    <el-input disabled v-model="form.matchId"></el-input>
                </el-form-item>
                <el-form-item label="比赛日期">
                    <el-input disabled v-model="form.gameDate"></el-input>
                </el-form-item>
                <el-form-item label="预计停售时间">
                    <el-input disabled v-model="form.stopSaleTime"></el-input>
                </el-form-item>
                <el-form-item label="比赛时间">
                    <el-input disabled v-model="form.gameTime"></el-input>
                </el-form-item>
                <el-form-item label="比赛双方">
                    <el-input disabled v-model="form.host"></el-input>
                    <span>—</span>
                    <el-input disabled v-model="form.guest"></el-input>
                </el-form-item>
            </el-form>
          </div>
          <div class="odds">
              <el-row>
                <el-col :span="10">
                    <p>赛事赔率</p>
                </el-col>
                <el-col :span="12">
                    <!-- <p @click="oddsDetails">详情>></p> -->
                </el-col>
              </el-row>
              <template>
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                  <el-tab-pane label="胜平负" name="1">
                    <el-table
                      ref="multipleTable"
                      :data="winTableData"
                      tooltip-effect="dark"
                      border
                      style="width: 481px">
                      <el-table-column v-for="(item, index) in winTableColumn"
                          :key="index"
                          :prop="item.prop"
                          :label="item.label"
                          :width="item.width"
                          align="center">
                      </el-table-column>
                    </el-table>
                  </el-tab-pane>
                  <el-tab-pane label="让球胜平负" name="2">
                    <el-table
                      ref="multipleTable"
                      :data="letTableData"
                      tooltip-effect="dark"
                      border
                      style="width: 601px">
                      <el-table-column v-for="(item, index) in letTableColumn"
                          :key="index"
                          :prop="item.prop"
                          :label="item.label"
                          :width="item.width"
                          align="center">
                      </el-table-column>
                    </el-table>
                  </el-tab-pane>
                  <el-tab-pane label="比分" name="3">
                    <div style="width: 412px" v-for="(item, index) in scoreData" :key="index">
                      <div class="item" v-for="(item1, index1) in item" :key="index1">
                        <span>{{item1.key}}</span>
                        <span>{{item1.val}}</span>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="总进球数" name="4">
                    <div style="width: 412px" v-for="(item, index) in goalsData" :key="index">
                      <div class="item">
                        <span>{{item.key}}球</span>
                        <span>{{item.val}}</span>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="半全场" name="5">
                    <div style="width: 250px" v-for="(item, index) in halfFullData" :key="index">
                      <div class="item" v-for="(item1, index1) in item" :key="index1">
                        <span>{{item1.key}}</span>
                        <span>{{item1.val}}</span>
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </template>
          </div>
          <div class="record">
              <p>赛事操作记录</p>
              <el-table
                ref="multipleTable"
                :data="recordTableData"
                tooltip-effect="dark"
                border
                style="width: 781px">
                <el-table-column v-for="(item, index) in recordTableColumn"
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
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageIndex"
                :page-size="pageSize"
                layout="total, prev, pager, next, jumper"
                :total="recordTotal">
              </el-pagination>
          </div>
          <div class="btn">
            <el-button size="mini" type="primary" @click="stopSale" v-if="saleType==1">停售</el-button>
            <el-button size="mini" type="primary" @click="delay" v-if="saleType==1">延期</el-button>
            <!-- <el-button size="mini" type="primary">确定</el-button> -->
            <el-button size="mini" type="primary" @click="goBack">关闭</el-button>
          </div>
        </div>
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
import formatDateTime from '../../utils/format'
import Tidy from '../../utils/tidy'
import req from '../../api/operation'
export default {
  data () {
    return {
      form: {
        matchUniqueId: '',
        matchType: '',
        leagueCode: '',
        leagueName: '',
        matchId: '',
        gameDate: '',
        stopSaleTime: '',
        gameTime: '',
        guest: '',
        host: ''
      },
      winTableColumn: [
        {prop: 'dish', label: '盘口', width: '120'},
        {prop: 'win', label: '胜', width: '120'},
        {prop: 'draw', label: '平', width: '120'},
        {prop: 'lose', label: '负', width: '120'}
      ],
      winTableData: [],
      letTableColumn: [
        {prop: 'dish', label: '盘口', width: '120'},
        {prop: 'let', label: '让球数', width: '120'},
        {prop: 'win', label: '胜', width: '120'},
        {prop: 'draw', label: '平', width: '120'},
        {prop: 'lose', label: '负', width: '120'}
      ],
      letTableData: [],
      recordTableColumn: [
        {prop: 'matchUniqueId', label: '赛事id', width: '140'},
        {prop: 'operateTime', label: '操作时间', width: '160'},
        {prop: 'operateUserId', label: '操作用户id', width: '140'},
        {prop: 'operation', label: '操作', width: '120'},
        {prop: 'reason', label: '操作原因', width: '220'}
      ],
      recordTableData: [],
      matchUniqueId: '',
      saleType: -1,
      pageIndex: 1,
      pageSize: 10,
      recordTotal: 0,
      activeName: '1',
      scoreData: [],
      goalsData: [],
      halfFullData: [],
      dialogDelayVisible: false,
      delayTime: '',
      disabledDelayTime: 0,
      delayData: [],
      pickerOptions1: {
        disabledDate: (time) => {
          return time.getTime() <= this.disabledDelayTime - 3600 * 1000 * 24
        }
      }
    }
  },
  created () {
    if (this.$route.params.matchUniqueId) {
      this.matchUniqueId = this.$route.params.matchUniqueId
      localStorage.setItem('gameMatchUniqueId', this.matchUniqueId)
    } else {
      this.matchUniqueId = localStorage.getItem('gameMatchUniqueId')
    }
    this.getData()
    this.getStopSaleData()
  },
  methods: {
    getData () {
      // this.$ajax.get(`/matchData/getMatchDetail.json?matchUniqueId=${this.matchUniqueId}`)
      req('getMatchDetail', {matchUniqueId: this.matchUniqueId})
        .then(res => {
          if (res.data.code === '00000') {
            try {
              Object.keys(this.form).map(key => {
                this.form[key] = res.data.data[key]
              })
              this.saleType = res.data.data.saleType
              this.form.matchType === 1 ? this.form.matchType = '足球' : this.form.matchType = '篮球'
              this.form.matchId = this.form.matchId.substring(0, 2)
              this.form.gameDate = this.form.stopSaleTime.split(' ')[0]
              this.form.gameTime = this.form.stopSaleTime.split(' ')[1].substring(0, 8)
              this.form.stopSaleTime = this.form.stopSaleTime.substring(0, 19)

              this.disPoseData(res.data.data)
              this.delayData = res.data.data
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
    disPoseData (data) {
      let win = {
        dish: '竞猜胜平负',
        win: data.oddsMap['51']['3'],
        draw: data.oddsMap['51']['1'],
        lose: data.oddsMap['51']['0']
      }
      this.winTableData.push(win)

      let letWin = {
        dish: '让球胜平负',
        let: data.oddsMap['56']['letBall'],
        win: data.oddsMap['56']['3'],
        draw: data.oddsMap['56']['1'],
        lose: data.oddsMap['56']['0']
      }
      this.letTableData.push(letWin)

      this.scoreData = Tidy.score(data)
      this.goalsData = Tidy.goals(data)
      this.halfFullData = Tidy.halfFull(data)
    },
    goBack () {
      this.$router.push({name: '赛事管理'})
    },
    oddsDetails () {
    //   this.$router.push({name: '赛事赔率详情'})
    },
    // 停售
    stopSale () {
      this.$confirm('当前赛事要调整至停售状态, 请确认是否停售?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // this.$ajax.get(`/matchData/cancelMatch.json?matchUniqueId=${this.matchUniqueId}`)
        req('cancelMatch', {matchUniqueId: this.matchUniqueId})
          .then(res => {
            if (res.data.code === '00000') {
              // this.getData()
              this.getStopSaleData()
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
    getStopSaleData () {
      let postParams = {
        matchUniqueId: this.matchUniqueId,
        // matchUniqueId: 'FB201805124013',
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }
      // this.$ajax.post('/matchData/getMatchOperationRecordListPage.json', postParams)
      req('getMatchOperationRecordListPage', postParams)
        .then(res => {
          if (res.data.code === '00000') {
            try {
              this.recordTableData = res.data.data.result
              this.recordTableData.map(val => {
                val.operateTime = formatDateTime(val.operateTime)
                val.operation === 0 ? val.operation = '停售' : val.operation = '延期'
              })
              this.recordTotal = res.data.data.totalCount
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
    handleSizeChange () {

    },
    handleCurrentChange (val) {
      this.pageIndex = val
      this.getStopSaleData()
    },
    handleClick () {

    },
    // 延期
    delay () {
      this.dialogDelayVisible = true
      this.delayMatchUniqueId = this.delayData.matchUniqueId
      this.disabledDelayTime = new Date(this.delayData.stopSaleTime)
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
            this.getStopSaleData()
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
.game-details{
    .details{
        p{
            font-size: 20px;
            color: #000;
        }
        span{
            font-size: 16px;
            color: #606266;
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
                .el-input {
                    width: 150px;
                }
            }
        }
    }
    .odds{
        p, span{
            font-size: 20px;
            color: #000;
        }
    }
    .record {
        p, span{
            font-size: 20px;
            color: #000;
        }
    }
    .btn{
        margin-top: 10px;
        margin-left: 600px;
    }
    .el-input.is-disabled .el-input__inner{
        color: #606266;
    }
    .page {
      margin: 15px 0;
    }
    .el-tabs__item.is-active{
      background: #ff6633 !important;
      color: #fff!important;
      border-bottom: none;
    }
    .el-tabs__nav{
      border-bottom: 1px solid #e4e7ed!important;
      height: 38px!important;
    }
    .item{
      float: left;
      width: 80px;
      height: 60px;
      border: 1px solid #ebeef5;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      justify-content: center;
      align-items: center;
      span{
        margin-top: 5px;
        color: #606266;
        font-size: 14px;
      }
    }
}
</style>
