<template>
  <div class="game-compensation-details">
    <i-layout>
      <div slot="grayLayout">
        <p>赛事赔率详情</p>
        <div class="details">
            <div class="content">
                <p>竞猜胜平负赔率</p>
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    border
                    style="width: 481px">
                    <el-table-column v-for="(item, index) in tableColumn"
                        :key="index"
                        :prop="item.prop"
                        :label="item.label"
                        :width="item.width">
                    </el-table-column>
                </el-table>
                <p>让球胜平负赔率</p>
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    border
                    style="width: 481px">
                    <el-table-column v-for="(item, index) in tableColumn"
                        :key="index"
                        :prop="item.prop"
                        :label="item.label"
                        :width="item.width">
                    </el-table-column>
                </el-table>
                <p>欧洲赔率</p>
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    border
                    style="width: 481px">
                    <el-table-column v-for="(item, index) in tableColumn"
                        :key="index"
                        :prop="item.prop"
                        :label="item.label"
                        :width="item.width">
                    </el-table-column>
                </el-table>
                <p>亚洲赔率</p>
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    border
                    style="width: 481px">
                    <el-table-column v-for="(item, index) in tableColumn"
                        :key="index"
                        :prop="item.prop"
                        :label="item.label"
                        :width="item.width">
                    </el-table-column>
                </el-table>
                <p>大小球赔率</p>
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    border
                    style="width: 481px">
                    <el-table-column v-for="(item, index) in tableColumn"
                        :key="index"
                        :prop="item.prop"
                        :label="item.label"
                        :width="item.width">
                    </el-table-column>
                </el-table>
            </div>
          <div class="btn">
            <el-button size="mini" @click="goBack">返回上级菜单</el-button>
          </div>
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
        userName: '',
        phone: '',
        register: '',
        userNumber: '',
        time: ''
      },
      tableColumn: [
        {prop: 'name', label: '发布时间', width: '120'},
        {prop: 'address', label: '胜', width: '120'},
        {prop: 'name', label: '平', width: '120'},
        {prop: 'name', label: '负', width: '120'}
      ],
      tableData: [],
      textarea: ''
    }
  },
  methods: {
    goBack () {
      this.$router.push({name: '赛事详情'})
    }
  }
}
</script>
<style lang="less">
.game-compensation-details{
    p{
        font-size: 20px;
        color: #000;
    }
    .details{
        margin-left: 20px;
    }
    .btn{
        margin-top: 10px;
        margin-left: 300px;
    }
}
</style>
