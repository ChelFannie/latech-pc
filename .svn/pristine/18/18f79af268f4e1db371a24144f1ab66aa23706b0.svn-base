<template>
  <div class="left-nav">
    <el-row>
        <el-col :span="3">
            <div class="grid-content bg-purple">
                <el-menu
                    class="el-menu-wrap"
                    ref="elMenu"
                    :router="true"
                    @select="selectItem">
                    <el-menu-item index="/business">
                        <i class="el-icon-menu"></i>
                        <span slot="title">业务管理</span>
                    </el-menu-item>
                    <el-menu-item index="/operation">
                        <i class="el-icon-menu"></i>
                        <span slot="title">运营管理</span>
                    </el-menu-item>
                    <!-- <el-menu-item index="/finance">
                        <i class="el-icon-document"></i>
                        <span slot="title">财务管理</span>
                    </el-menu-item> -->
                    <el-menu-item index="/member">
                        <i class="el-icon-menu"></i>
                        <span slot="title">会员管理</span>
                    </el-menu-item>
                    <el-menu-item index="/system">
                        <i class="el-icon-setting"></i>
                        <span slot="title">系统管理</span>
                    </el-menu-item>
                </el-menu>
            </div></el-col>
        <el-col :span="21">
            <router-view></router-view>
        </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  created () {
  },
  mounted () {
    if (this.$router.currentRoute.redirectedFrom === '/') {
      this.$refs['elMenu'].activeIndex = '/business'
      localStorage.setItem('activeIndex', '/business')
    } else {
      this.$refs['elMenu'].activeIndex = localStorage.getItem('activeIndex')
    }
  },
  methods: {
    selectItem (index, indexPath) {
      localStorage.setItem('activeIndex', index)
    }
  }
}
</script>
<style lang="less" scoped>
.left-nav{
    margin:100px 0 0 50px;
    .el-menu-wrap{
        background: #d7d7d7;
        text-align: center;
        li{
            margin-bottom: 20px;
            background: #ffffff;
            border: 1px solid #797979;
            border-right: none;
            padding: 0!important;
            border-radius: 10px 0px 0px 10px;
        }
    }
    .el-menu-item.is-active {
        color: #000000;
        background: #cccccc;
        box-shadow: -8px 8px 5px #888888;
    }
}
</style>
