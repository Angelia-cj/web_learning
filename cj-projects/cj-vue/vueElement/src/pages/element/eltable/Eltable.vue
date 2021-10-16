<template>
  <div class="demo-table-wrapper">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Eltable',
  data(){
    return{
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518 弄1"
        },
        {
          date: "2016-05-04",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1517 弄2"
        },
        {
          date: "2016-05-01",
          name: "王小虎3",
          address: "上海市普陀区金沙江路 1519 弄3"
        },
        {
          date: "2016-05-03",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 1516 弄4"
        }
      ]
    }
  },
  mounted () {
  },
  methods:{
// 行拖拽
    dragRow() {
      // 查找要拖拽元素的父容器
      const tbody = document.querySelector(
        ".demo-table-wrapper .el-table__body-wrapper tbody"
      );

      const _this = this;
      Sortable.create(tbody, {
        draggable: ".demo-table-wrapper .el-table__row", //  指定父容器下可被拖拽的子元素

        onEnd({ newIndex, oldIndex }) {
          /**
           * onEnd 拖拽结束后的事件处理函数
           * newIndex：目标位置对应行的索引
           * oldIndex：被拖拽行的索引
           *
           * ====================（被拖拽记录行1）
           * before
           * ====================(拖拽至目标位置对应记录行)
           * after
           * ====================（被拖拽记录行2）
           * 如果从上往下拖拽，即newIndex > oldIndex，那么在目标位置对应记录行上移(目标位置对应记录行索引值减1)，在newIndex所指位置插入被拖拽行(被拖拽行索引设置为newIndex)，视觉效果就是在after位置(即目标位置对应行下方)插入被拖拽行
           * 如果从下往上拖拽，即newIndex < oldIndex，那么在目标位置对应记录行下移(目标位置对应记录行索引值加1)，在newIndex所指位置插入被拖拽行(被拖拽行索引设置为newIndex)，视觉效果就是在上述before位置(即目标位置对应行上方)插入被拖拽行
           * */

          console.log(newIndex, oldIndex);
          if(newIndex > oldIndex){
            // 请求服务器做数据更新处理，然后根据处理结果对前端页面处理
          } else {
            // 请求服务器做数据更新处理 ，然后根据处理结果对前端页面处理
          }
        }
      });
    }
  },

}
</script>

<style scoped>

</style>
