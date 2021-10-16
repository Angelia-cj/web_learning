<template>
  <div class="el-dialog-class">
    <!-- 页面 header -->
    <el-dialog title="层级维护" :visible.sync="dialogLevelVisible" :close-on-click-modal="isShow" :show-close="isShow" :destroy-on-close="true">
      <div class="tableContent">
        <el-row>
          <el-col :span="24">
            <el-table :data="tableData" border width="100%" row-key="id" align="left">
              <el-table-column type="index" label="序号"></el-table-column>

              <el-table-column align="center" label="职级" prop="Lavel_name" @row-dblclick="dbclick">
                <template slot-scope="scope">
                  <!-- <el-form-item> -->
                  <el-input v-if="scope.row.isSet" v-model="scope.row.level_name" style="width:100%;height:100%" size="small" placeholder="请输入职级，如“1级”"></el-input>
                  <span v-if="!scope.row.isSet">{{ scope.row.level_name }}</span>
                  <!-- </el-form-item> -->
                </template>
              </el-table-column>

              <el-table-column align="center" label="操作" width="180">
                <template slot-scope="scope">
                  <el-button type="success" size="mini" @click="saveRow(scope.$index, scope.row)">保存</el-button>
                  <el-button size="mini" @click="editRow(scope.$index, scope.row)">修改</el-button>
                  <el-button type="danger" size="mini" @click.native.prevent="deleteRow(scope.$index, tableData)">刪除</el-button>
                </template>
              </el-table-column>

            </el-table>
          </el-col>
        </el-row>
        <p>
          <el-button type="success" size="small" @click="addLevel">新增</el-button>
        </p>
      </div>

      <!-- 页面 footer -->
      <div class="dialog-footer" slot="footer">
        <el-button size="small" @click="clearDialog('dataForm')">取消</el-button>
        <el-button size="small" type="primary" @click="closeDialog('dataForm')">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {
    Sortable
  },
  props: {
    dialogLevelVisible: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      isShow: false,
      tableData: [{
        isSet: true,
        level_name: ""
      }],
    }
  },
  mounted () {
    this.rowDrop()
  },
  methods: {
    // 添加职级
    addLevel () {
      let arr = {
        isSet: true,
        level_name: ""
      }
      this.tableData.push(arr);
    },
    // 保存
    saveRow (index, row) {
      // index:下标(number)
      // row:一行的数据(Object)
      // this.tableData:该表格所有数据(数组对象)
      // console.log(index);
      // console.log(row);
      // console.log(this.tableData);
      row.isSet = false
    },
    // 编辑
    editRow (index, row) {
      row.isSet = true
    },
    //删除
    deleteRow (index, row) {
      row.splice(index, 1)
    },
    // 行拖拽
    rowDrop () {
      // 找到的元素是要拖拽元素的父容器
      const tbody = document.querySelector('.el-table__body-wrapper tbody')
      const _this = this
      Sortable.create(tbody, {
        // 指定父元素下可被拖拽的子元素
        draggable: ".el-table__row",
        // handle是用来控制允许拖动元素的
        handle: ".allowDrag",
        onEnd ({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0];
          _this.tableData.splice(newIndex, 0, currRow);
        }
      })
    },
    clearDialog () {
      // 退出时，清除页面
      this.$emit("closeDialogLevel", true);
    },
    // 点击确定按钮验证表单 完成提交
    closeDialog () {
      // 提交完成，清除页面
    },
  }
}
</script>

<style lang='less' scoped>
.el-dialog-class {
  /deep/ .el-dialog__body {
    padding: 20px 20px;
  }
  .el-table {
    width: 400px;
  }
  .tableContent {
    position: relative;
    margin-bottom: 20px;
    width: 400px;
    p {
      position: absolute;
      top: 11px;
      right: -68px;
      a {
        font-size: 20px;
      }
    }
  }
}
/deep/ .el-form-item {
  margin-bottom: 0px;
  margin-right: 0;
}
/deep/ .el-form-item__content {
  font-size: 12px;
}
/deep/.el-dialog {
  width: 500px !important;
}
/deep/ .el-table th {
  background-color: #f4f4f4;
  color: #555;
  // text-align: center;
}
/deep/ .el-table td,
.el-table th {
  padding: 8px 0;
}
/deep/ .el-button--small {
  padding: 9px 15px;
}
/deep/ .el-button [class*='el-icon-'] + span {
  margin-left: 0;
}
/deep/.el-input__inner {
  width: 150px !important;
}
/deep/.el-input_suffix {
  right: -15px !important;
}
</style>
