<template>
  <div class="modify-store">
    <i-layout :head="true" :gray="true">
      <div slot="grayLayout">
        <p class="title">店铺基本信息</p>
        <el-form ref="form" :model="form" label-width="80px" size="mini">
          <el-form-item label="店铺名称">
            <el-input v-model="form.storeName" maxlength="30"></el-input>
          </el-form-item>
          <el-form-item label="店铺编码">
            <el-input v-model="form.systemUnionid" disabled></el-input>
          </el-form-item>
          <el-form-item label="所属业务">
            <!-- <el-input v-model="form.businessType"></el-input> -->
            <el-select v-model="form.businessType" placeholder="请选择">
              <el-option v-for="item in businessTypeOptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="店铺地址" class="address">
            <el-cascader :options="options" v-model="selectedOptions" @change="handleChange"></el-cascader>
            <el-input v-model="form.storeAddress" placeholder="请输入详细地址"></el-input>
          </el-form-item>
        </el-form>
        <p class="title">店铺预订单机信息</p>
        <div style="background-color: #f2f2f2;">
          <el-table :data="tableData" border style="width: 47.5%" @select="checkSelect">
            <el-table-column type="selection" width="55" align="center">
            </el-table-column>
            <el-table-column prop="terminalCode" label="设备唯一码" width="180" align="center">
            </el-table-column>
            <el-table-column prop="terminalStatus" label="设备状态" width="120" align="center">
            </el-table-column>
            <el-table-column prop="terminalPWD" label="设备终端密码" width="120" align="center">
            </el-table-column>
          </el-table>
        </div>
        <div class="operate">
          <el-button size="mini" type="primary" @click="addMachine">添加设备</el-button>
          <el-button size="mini" type="primary" @click="deleteMachine">删除设备</el-button>
          <!-- <el-button size="mini" type="primary">导出设备列表</el-button> -->
        </div>
        <div class="last">
          <el-button size="mini" type="primary" @click="submitEdit">保存</el-button>
          <el-button size="mini" type="primary" @click="close">关闭</el-button>
        </div>
      </div>
    </i-layout>
    <el-dialog title="增加设备" :visible.sync="dialogVisible" center width="30%">
      <el-form label-position="top" :model="addMachineForm" size="mini">
        <el-form-item label="设备唯一码" style="width: 100%;">
          <el-input v-model="addMachineForm.terminalCode"></el-input>
        </el-form-item>
        <el-form-item label="设备终端密码" style="width: 100%;">
          <el-input v-model="addMachineForm.terminalPWD"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" @click="dialogCancel">取 消</el-button>
        <el-button type="primary" size="mini" @click="submitMachine">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import address from '../../assets/address.js'
import req from '../../api/system'
export default {
  components: {
  },
  data () {
    return {
      form: {
        storeName: '',
        systemUnionid: '',
        businessType: '',
        storeAddress: '',
        provinceCode: '',
        cityCode: '',
        districtCode: ''
      },
      tableData: [],
      selection: [],
      // 地区数据
      options: address,
      // 默认地区编码
      selectedOptions: [],
      businessTypeOptions: [
        { value: 0, label: '体彩' },
        { value: 1, label: '福彩' }
      ],
      addMachineForm: {
        terminalCode: '',
        terminalPWD: ''
      },
      dialogVisible: false
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      // this.$ajax.post('/machine/getStoreDetail.json', {storeCode: this.$route.query.systemUnionid})
      req('getStoreDetail', {storeCode: this.$route.query.systemUnionid})
        .then(res => {
          if (res.data.code === '00000') {
            let storeInfo = res.data.data.storeInfo
            storeInfo.businessType = storeInfo.businessType === 1 ? '福彩' : '体彩 '
            this.form = {
              ...storeInfo
            }
            this.selectedOptions = [storeInfo.provinceCode, storeInfo.cityCode, storeInfo.districtCode]
            if (Object.prototype.toString.call(res.data.data.machines) === '[object Array]') {
              res.data.data.machines.map(val => {
                switch (val.terminalStatus) {
                  case 0:
                    val.terminalStatus = '未激活'
                    break
                  case 1:
                    val.terminalStatus = '离线'
                    break
                  case 2:
                    val.terminalStatus = '准备'
                    break
                  case 3:
                    val.terminalStatus = '工作'
                    break
                  case 4:
                    val.terminalStatus = '扫码'
                    break
                  case 5:
                    val.terminalStatus = '分配'
                    break
                  case 6:
                    val.terminalStatus = '反馈'
                    break
                  case 7:
                    val.terminalStatus = '未知'
                    break
                  case 8:
                    val.terminalStatus = '停用'
                    break
                  case 9:
                    val.terminalStatus = '异常'
                    break
                  default:
                    break
                }
              })
              this.tableData = res.data.data.machines
            } else {
              this.tableData = []
            }
          } else {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          }
        })
    },
    deleteMachine () {
      if (this.tableData.length > 1) {
        if (!this.selection.length) {
          this.$message({
            type: 'warning',
            message: '请勾选需要删除的设备'
          })
        } else if (this.selection.length > 1) {
          this.$message({
            type: 'warning',
            message: '不能同时删除超过1台设备'
          })
        } else {
          let index = this.tableData.findIndex(ele => ele.terminalCode === this.selection[0].terminalCode)
          this.$delete(this.tableData, index)
        }
      } else {
        this.$message({
          type: 'warning',
          message: '必须保留一台设备'
        })
      }
    },
    close () {
      this.$router.go(-1)
    },
    checkSelect (selection, row) {
      this.selection = selection
    },
    handleChange (value) {
      this.form.provinceCode = value[0]
      this.form.cityCode = value[1]
      this.form.districtCode = value[2]
    },
    submitEdit () {
      let machineListObj = {}
      this.tableData.map((val, index) => {
        // let terminalCodeObj = {}
        let terminalCodeKey = `machineList[${index}].terminalCode`
        // terminalCodeObj[`${terminalCodeKey}`] = val.terminalCode
        // machineListArr.push(terminalCodeObj)
        machineListObj[`${terminalCodeKey}`] = val.terminalCode
        let terminalPWDKey = `machineList[${index}].terminalPWD`
        machineListObj[`${terminalPWDKey}`] = val.terminalPWD
      })
      Object.prototype.toString.call(this.form.businessType) !== '[object Number]' && (this.form.businessType = this.form.businessType === '福彩' ? 1 : 0)
      let params = {
        businessType: this.form.businessType,
        storeName: this.form.storeName,
        systemUnionid: this.form.systemUnionid,
        storeAddress: this.form.storeAddress,
        provinceCode: this.form.provinceCode,
        cityCode: this.form.cityCode,
        districtCode: this.form.districtCode,
        ...machineListObj
      }
      let flag = true
      for (let key in params) {
        if (params[key] === '') {
          flag = false
          break
        }
      }
      if (!flag) {
        this.$message({
          type: 'warning',
          message: '信息必须填写完整'
        })
      } else {
        // this.$ajax.post('/machine/editStoreMachine.json', params)
        req('editStoreMachine', params)
          .then(res => {
            if (res.data.code === '00000') {
              this.$message({
                type: 'success',
                message: '修改成功'
              })
              this.$router.go(-1)
            } else {
              this.$message({
                type: 'error',
                message: res.data.msg
              })
            }
          })
      }
    },
    dialogCancel () {
      this.addMachineForm.terminalCode = ''
      this.addMachineForm.terminalPWD = ''
      this.dialogVisible = false
    },
    submitMachine () {
      if (!this.addMachineForm.terminalCode || !this.addMachineForm.terminalPWD) {
        this.$message({
          type: 'warning',
          message: '请填写设备唯一码或设备终端密码'
        })
      } else {
        let index = this.tableData.findIndex(val => val.terminalCode === this.addMachineForm.terminalCode)
        if (index === -1) {
          this.dialogVisible = false
          this.tableData.push({ terminalCode: this.addMachineForm.terminalCode, terminalPWD: this.addMachineForm.terminalPWD, terminalStatus: '准备' })
        } else {
          this.addMachineForm.terminalCode = ''
          // this.addMachineForm.terminalPWD = ''
          this.$message({
            type: 'warning',
            message: '设备唯一码不能重复!'
          })
        }
      }
    },
    addMachine () {
      this.dialogVisible = true
      this.addMachineForm.terminalCode = ''
      this.addMachineForm.terminalPWD = ''
    }
  }
}
</script>
<style lang="less" scoped>
.modify-store{
  .title{
    color: #000000;
    font-size: 20px;/* no */
    font-weight: 600;
    margin: 10px;
  }
  .el-form{
    overflow: hidden;
    .el-form-item{
      display: inline-block;
    }
  }
  .address{
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom:1px solid #606266;
    .detail{
      text-align: right;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 10px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    .el-cascader, .el-input{
      width: 280px;
      margin-right: 20px;
    }
    .flagship{
      display: inline-block;
    }
  }
  .el-tag--success {
    background: #00cc66;
    color: #ffffff;
  }
  .el-tag--danger {
    background: #ff0000;
    color: #ffffff;
  }
  .el-tag--warning {
    background: #ffff00;
    color: #000000;
  }
  .operate{
    margin: 20px 0;
    .el-button{
      margin-right: 20px;
    }
  }
  .last{
    /* text-align: right; */
    margin-left: 600px;
  }
}
</style>
