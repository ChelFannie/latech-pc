<template>
  <div class="store-basic-information">
    <i-layout :head="true" :gray="true">
      <div slot="grayLayout">
          <p class="title">店铺基本信息</p>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="店铺名称">
              <el-input v-model="form.shopName"></el-input>
            </el-form-item>
            <el-form-item label="店铺编码">
              <el-input v-model="form.storeCode"></el-input>
            </el-form-item>
            <!-- <el-form-item label="所属部门">
              <el-input v-model="form.department"></el-input>
            </el-form-item> -->
          </el-form>
          <div class="address">
            <span class="detail">店铺地址</span>
            <el-cascader
              :options="province"
              @active-item-change="handleItemChange"
              :props="props"
            ></el-cascader>
            <el-input v-model="input" placeholder="请输入详细地址"></el-input>
            <!-- <div class="flagship">
              <el-radio v-model="radio" label="1" border size="medium">旗舰店</el-radio>
              <el-radio v-model="radio" label="2" border size="medium">非旗舰店</el-radio>
            </div> -->
          </div>
          <p class="title">店铺预订单机信息</p>
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              type="selection"
              width="55"
              align="center">
            </el-table-column>
            <el-table-column
              prop="terminalCode"
              label="设备唯一码"
              width="180"
              align="center">
            </el-table-column>
            <!-- <el-table-column
              prop="terminalType"
              label="终端类型"
              width="200"
              align="center">
            </el-table-column> -->
            <el-table-column
              prop="terminalStatus"
              label="设备状态"
              width="120"
              align="center">
            </el-table-column>
          </el-table>
          <div class="operate">
            <el-button size="medium" type="primary">添加设备</el-button>
            <el-button size="medium" type="primary">删除设备</el-button>
            <el-button size="medium" type="primary">导出设备列表</el-button>
          </div>
          <div class="last">
            <el-button size="medium" type="primary">保存</el-button>
            <el-button size="medium" @click="close">关闭</el-button>
          </div>
      </div>
    </i-layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        shopName: '',
        storeCode: '',
        department: ''
      },
      province: [{
        label: '江苏',
        cities: []
      }, {
        label: '浙江',
        cities: []
      }],
      props: {
        value: 'label',
        children: 'cities'
      },
      input: '',
      radio: '1',
      tableData: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    search () {

    },
    handleSelectionChange () {

    },
    getData () {
      let params = {
        storeCode: 'zCKazNIiYeTOGYoQk8EQAAA'
      }
      this.$ajax.post('/machine/getStoreDetail.json', params).then(res => {
        if (res.data.code === '00000') {
          res.data.data.machines.map((val, index) => {
            // val.terminalType = val.terminalType === 1 ? '自取票' : val.terminalType === 2 ? '寄存票' : '双模式(自取/寄存)'
            let terminalStatus = val.terminalStatus
            switch (terminalStatus) {
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
                val.terminalStatus = '分配'
                break
            }
          })
          this.tableData = res.data.data.machines
          console.log(res.data.data.storeInfo.storeName)
        } else {
          this.$message({
            type: 'error',
            message: res.data.msg
          })
        }
      })
    },
    rowClick (row, event, column) {
      console.log(row, event, column)
    },
    handleItemChange (val) {
      console.log('选择的省份是:', val)
      setTimeout(_ => {
        if (val.indexOf('江苏') > -1 && !this.province[0].cities.length) {
          this.province[0].cities = [{
            label: '南京'
          }]
        } else if (val.indexOf('浙江') > -1 && !this.province[1].cities.length) {
          this.province[1].cities = [{
            label: '杭州'
          }]
        }
      }, 300)
    },
    close () {
      this.$router.push({name: '设备店铺'})
    }
  }
}
</script>
<style lang="less">
.store-basic-information{
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
    text-align: right;
  }
}
</style>
