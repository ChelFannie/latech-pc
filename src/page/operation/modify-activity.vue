<template>
  <div class="modify-activity">
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
        title: '修改活动',
        sub_title: '活动基本信息',
        table_title: '活动票券信息',
        look_activity: false
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
.modify-activity{
}
</style>
