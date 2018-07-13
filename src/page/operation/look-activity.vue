<template>
  <div class="look-activity">
    <add-modify-activity :data="data"></add-modify-activity>
  </div>
</template>
<script>
import addModifyActivity from '../../components/operation/add-modify-activity'
export default {
  components: {
    addModifyActivity
  },
  data () {
    return {
      data: {
        title: '查看活动',
        sub_title: '活动基本信息',
        table_title: '活动票券信息',
        look_activity: true,
        confirmTitle: '暂停',
        confirmMsg: '确定要暂停活动吗？',
        confirmBtn: '暂停',
        consoleBtn: '关闭'
      }
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang="less">
.look-activity{
}
</style>
