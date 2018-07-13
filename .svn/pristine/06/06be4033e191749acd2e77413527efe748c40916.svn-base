<template>
  <div class="login">
      <div class="content">
          <div class="loginCon">
            <el-form ref="form" :model="form" label-width="80px" size="mini" class="form">
                <el-form-item label="用户名">
                    <el-input v-model="form.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.pwd"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" size="small" class="btn" @click="login">登录</el-button>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        userName: '',
        pwd: ''
      }
    }
  },
  methods: {
    login () {
      if (this.form.userName === 'admin' && this.form.pwd === '123') {
        sessionStorage.setItem('token', 'token')
        this.$store.commit('token', 'token')
        this.$router.push({path: '/'})
      } else {
        this.$message({
          message: '用户名或密码错误!',
          type: 'warning'
        })
      }
    }
  }
}
</script>
<style lang="less">
.login{
    width: 860px;
    height: 460px;
    padding: 30px;
    background-color: #ffffff;
    border: 1px solid #797979;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -430px;
    margin-top: -230px;
    .content{
        width: 860px;
        height: 460px;
        background-image: url('../assets/image/login.png');
        color: red;
        position: relative;
        .loginCon{
            width: 300px;
            height: 400px;
            background-color: #f2f2f2;
            position: absolute;
            right: 82px;
            bottom: 15px;
            text-align: center;
            .form{
                margin-top: 100px;
                .el-input{
                    width: 160px;
                }
            }
        }
    }
}
</style>
