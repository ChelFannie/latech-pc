<template>
  <div class="member">
      <el-tabs class="wrap" v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in routerData" :key="index" :label="item.label" :name="item.name"></el-tab-pane>
      </el-tabs>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: '0',
      routerData: [
        {label: '会员管理', name: '0', pathName: {name: '会员管理'}}
      ]
    }
  },
  mounted () {
    this.$router.currentRoute.redirectedFrom ? localStorage.setItem('activeName', '0') : (this.activeName = localStorage.getItem('activeName'))
  },
  methods: {
    handleClick (tab, event) {
      localStorage.setItem('activeName', this.activeName)
      this.$router.push(this.routerData[this.activeName].pathName)
    }
  }
}
</script>
<style lang="less">
.member{
  margin: -50px 0 0 0;
  .wrap{
    .el-tabs__header{
      margin: 0;
      .el-tabs__nav{
        border: none;
        .el-tabs__item{
          background: #ffffff;
          margin-left: 20px;
          border: 1px solid #797979;
          border-bottom: none;
          border-radius: 8px 8px 0px 0px;
        }
      }
    }
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    background: #cccccc;
    color: #000000;
  }
}
</style>
