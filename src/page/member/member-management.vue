<template>
  <div class="member-management">
    <i-layout :gray="true" :head="true">
      <div slot="grayLayout">
          <i-form @search="search" @empty="empty">
            <el-form-item label="用户姓名">
              <el-input v-model="form.memberName" maxlength="18"></el-input>
            </el-form-item>
            <!-- <el-form-item label="真实姓名">
              <el-input v-model="form.realName"></el-input>
            </el-form-item> -->
            <el-form-item label="用户手机号">
              <el-input v-model="form.mobile" maxlength="11"></el-input>
            </el-form-item>
            <el-form-item label="注册渠道">
              <el-select v-model="form.regFrom" placeholder="请选择">
                <el-option
                  v-for="item in regFromOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="用户编码">
              <el-input v-model="form.systemUnionid" maxlength="30"></el-input>
            </el-form-item>
            <el-form-item label="注册时间">
              <el-date-picker
                v-model="form.registeTimeBegin"
                type="date"
                placeholder="选择日期"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd">
              </el-date-picker>
              <span>—</span>
              <el-date-picker
                v-model="form.registeTimeEnd"
                type="date"
                placeholder="选择日期"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-form-item>
          </i-form>
        </div>
        <div slot="tableHead">
          <el-button size="small" @click="userEdit">修改</el-button>
          <el-button size="small" @click="freeze">冻结账号</el-button>
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
          style="width: 100%"
          @select="checkSelect"
          @select-all="checkSelectAll"
          @row-dblclick="rowClick">
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
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-size="pageSize"
          layout="total, prev, pager, next, jumper"
          :total="dataTotal">
        </el-pagination>
    </i-layout>
    <el-dialog title="编辑用户信息" :visible.sync="dialogVisible" center :before-close="dialogClose">
      <el-row>
        <el-col :span="6" class="img">
          <img :src="imgSrc" alt="">
          <input accept="image/*" name="upimage" ref="upload_file" class="uploadBtn" @change="getFile" type="file">
          <!-- <el-button type="primary" size="mini" class="uploadBtn">上传头像</el-button> -->
        </el-col>
        <el-col :span="18">
          <el-form :model="editForm" :rules="rules" ref="editForm" label-width="100px" size="mini">
            <el-form-item label="手机号" prop="mobile">
            <!-- <el-form-item label="手机号"> -->
              <el-input  type="text" v-model="editForm.mobile" maxlength="11"></el-input>
            </el-form-item>
            <el-form-item label="银行卡号" prop="cardNo">
              <el-input v-model="editForm.cardNo" maxlength="19"></el-input>
            </el-form-item>
            <el-form-item label="地址">
            <el-cascader
              :options="options"
              v-model="selectedOptions"
              size="small"
              style="width: 100%"
              @change="handleChange">
            </el-cascader>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogCancel">取 消</el-button>
        <el-button type="primary" @click="editQuery">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import address from '../../assets/address.js'
import req from '../../api/member'
export default {
  data () {
    return {
      form: {
        memberName: '',
        mobile: '',
        regFrom: '',
        systemUnionid: '',
        registeTimeBegin: '',
        registeTimeEnd: ''
        // realName: ''
      },
      tableColumn: [
        {prop: 'memberName', label: '用户姓名', width: '120'},
        {prop: 'systemUnionid', label: '用户编码', width: '220'},
        {prop: 'dataTime', label: '注册时间', width: '120'},
        {prop: 'mobile', label: '用户手机号', width: '120'},
        {prop: 'regFrom', label: '注册渠道', width: '120'},
        {prop: 'status', label: '会员状态', width: '120'},
        {prop: 'name', label: '绑定邮箱', width: '120'},
        {prop: 'realName', label: '用户真实姓名', width: '120'}
      ],
      regFromOptions: [
        {value: '1', label: '中石化'},
        {value: '2', label: '自营'}
      ],
      tableData: [],
      pageIndex: 1,
      pageSize: 10,
      dataTotal: 0,
      searchFlag: false,
      // 用户编辑框
      dialogVisible: false,
      // 编辑表单
      editForm: {
        mobile: '',
        cardNo: '',
        provinceCode: '',
        cityCode: '',
        districtCode: '',
        headImages: '',
        systemUnionid: ''
      },
      rules: {
        // mobile: [
        //   { required: true, message: '请输入手机号', trigger: 'blur' }
        // ]
        mobile: [{
          validator: (rule, value, callback) => {
            if (!value) {
              callback(new Error('手机号码不能为空'))
            } else {
              const mobileReg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))[0-9]{8}$/
              if (!mobileReg.test(value)) {
                callback(new Error('请输入有效的手机号码'))
              } else {
                callback()
              }
            }
          },
          required: true,
          trigger: 'blur'
        }],
        cardNo: [{
          validator: (rule, value, callback) => {
            if (!value) {
              callback(new Error('银行卡号不能为空'))
            } else {
              const bankCardReg = /^([1-9]{1})(\d{15}|\d{18})$/
              if (!bankCardReg.test(value)) {
                callback(new Error('请输入有效的银行卡号'))
              } else {
                callback()
              }
            }
          },
          required: true,
          trigger: 'blur'
        }]
      },
      // 地区数据
      options: address,
      // 默认地区编码
      selectedOptions: [],
      // 勾选行数据
      selection: [],
      imgSrc: require('../../assets/image/noPictures.jpg'),
      loading: true
    }
  },
  created () {
    if (localStorage.getItem('lastRouter') === '/member/user-basic-information') {
      this.dataTotal = JSON.parse(localStorage.getItem('page')).total
      this.pageIndex = JSON.parse(localStorage.getItem('page')).page
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
      let memberParams = {
        ...this.form,
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }
      // this.$ajax.post('/memberManage/getMemberListPage.json', memberParams)
      req('getMemberListData', memberParams)
        .then(res => {
          if (res.data.code === '00000') {
            this.tableData = res.data.data.result
            this.loading = false
            this.tableData.map(val => {
              val.regFrom === 1 ? val.regFrom = '中石化' : val.regFrom = '自营'
              val.dataTime = val.dataTime.substring(0, 10)
              switch (val.status) {
                case 'inactive':
                  val.status = '未激活'
                  break
                case 'invalid':
                  val.status = '失效'
                  break
                case 'normal':
                  val.status = '正常'
                  break
                case 'ban':
                  val.status = '封禁'
                  break
                case 'unusual':
                  val.status = '异常'
                  break
                default:
                  break
              }
            })
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
    // 双击行数据
    rowClick (row, event, column) {
      localStorage.setItem('page', JSON.stringify({page: this.pageIndex, total: this.dataTotal}))
      this.$router.push({name: '用户基本信息', params: {systemUnionId: row.systemUnionid}})
    },
    // 勾选行数据
    checkSelect (selection, row) {
      this.selection = selection
    },
    checkSelectAll (selection) {
      this.selection = selection
    },
    handleSizeChange () {

    },
    handleCurrentChange (val) {
      this.pageIndex = val
      this.getData()
    },
    // 编辑事件
    userEdit () {
      if (!this.selection.length) {
        this.$message({
          type: 'warning',
          message: '请勾选需要编辑的会员'
        })
      } else if (this.selection.length > 1) {
        this.$message({
          type: 'warning',
          message: '不能同时编辑超过1位会员'
        })
      } else {
        this.dialogVisible = true
        Object.keys(this.editForm).map(key => {
          this.editForm[key] = ''
        })
        Object.keys(this.editForm).map(key => {
          this.editForm[key] = this.selection[0][key]
        })
        this.selectedOptions = [this.editForm.provinceCode, this.editForm.cityCode, this.editForm.districtCode]
        this.selection[0].headImages ? this.imgSrc = this.selection[0].headImages : this.imgSrc = require('../../assets/image/noPictures.jpg')
      }
    },
    // 得到地区三级联动数据
    handleChange (value) {
      // console.log(this.selectedOptions)
    },
    // 上传头像
    getFile () {
      let file = this.$refs['upload_file'].files[0]
      let r = new FileReader()
      r.onload = () => {
        this.imgSrc = r.result
        this.editForm.headImages = r.result
      }
      r.readAsDataURL(file)
    },
    // 用户编辑框确定
    editQuery () {
      this.$refs['editForm'].validate((valid) => {
        if (valid) {
          this.editForm.provinceCode = this.selectedOptions[0]
          this.editForm.cityCode = this.selectedOptions[1]
          this.editForm.districtCode = this.selectedOptions[2]
          // this.$ajax.post('/memberManage/editMemberByOperator.json', this.editForm)
          req('editMemberData', this.editForm)
            .then(res => {
              if (res.data.code === '00000') {
                this.dialogVisible = false
                this.getData()
                this.$message({
                  type: 'success',
                  message: '修改用户信息成功!'
                })
              } else {
                this.$message({
                  type: 'error',
                  message: res.data.msg
                })
              }
            })
        } else {
          return false
        }
      })
    },
    dialogCancel () {
      Object.keys(this.editForm).map(key => {
        this.editForm[key] = ''
      })
      this.dialogVisible = false
      this.$refs['editForm'].resetFields()
    },
    dialogClose (done) {
      done()
      this.$refs['editForm'].resetFields()
    },
    freeze () {
      if (!this.selection.length) {
        this.$message({
          type: 'warning',
          message: '请勾选需要冻结的会员账号'
        })
      } else if (this.selection.length > 1) {
        this.$message({
          type: 'warning',
          message: '不能同时冻结超过1位的会员账号'
        })
      } else {
        this.$confirm('将此账号进行冻结操作, 请确认是否冻结?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // this.$ajax.post('/memberManage/invalidateMember.json', {systemUnionid: this.selection[0].systemUnionid})
          req('invalidateMember', {systemUnionid: this.selection[0].systemUnionid})
            .then(res => {
              if (res.data.code === '00000') {
                this.getData()
                this.$message({
                  type: 'success',
                  message: '冻结成功!'
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
            message: '已取消冻结'
          })
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.member-management{
  .page{
    margin-top: 15px;
    margin-left: 100px;
  }
  .el-pagination{
    text-align:center;
    margin-top:20px;
  }
  .img{
    text-align: center;
  }
  img{
    width: 120px;
    height: 130px;
  }
  .uploadBtn{
    margin-top: 10px;
  }
}
</style>
