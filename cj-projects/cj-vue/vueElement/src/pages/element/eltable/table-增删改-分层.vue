<template>
  <div class="el-dialog-class">
    <!-- 页面 header -->
    <el-dialog title="层级维护" :visible.sync="dialogLevelVisible" :close-on-click-modal="isShow" :show-close="isShow" :destroy-on-close="true">
      <el-row>
        <el-col class="line" :span="14">
          <el-input v-model="levelName" size="small" placeholder="请输入职级，如“1级”"></el-input>
        </el-col>
        <el-col class="line" :span="6">
          <el-button type="success" size="small" @click="addLevel">新建</el-button>
        </el-col>
      </el-row>
      <div class="tableContent">
        <!-- 表格 v-show="showDictItem"-->
        <el-table :data="tableData" border width="100%" row-key="id" align="left" slot="empty">
          <el-table-column align="center" label="职级" prop="Lavel_name"> <template slot-scope="scope">
              <span v-if="!scope.row.is_ok">{{ scope.row }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="180">
            <template slot-scope="scope">
              <el-button size="mini" @click="editRow(scope.$index, scope.row)">修改</el-button>
              <el-button type="danger" size="mini" @click.native.prevent="deleteRow(scope.$index, tableData)">刪除</el-button>
            </template>
          </el-table-column>
          </el-col>
        </el-table>
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
      levelName: "",
      tableData: [],
      is_ok: true, //是否可以比较行

    }
  },
  methods: {
    // 添加职级
    addLevel () {
      let arr = this.levelName
      this.tableData.push(arr)
      console.log(this.tableData);
    },

    //删除一行
    deleteRow (index, row) {
      row.splice(index, 1)
    },
    // 双击行可以编辑
    dbclick (row, column, event) {
      row.is_ok = !row.is_ok;
      this.$forceUpdate()
    },

    // 编辑层级
    editLevel (index, row) {
      row.is_ok = true
    },
    // 删除层级
    deleLevel (index, row) {
      row.splice(index, 1)
    },
    // 点击取消按钮
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
  .el-table {
    margin-top: 20px;
    width: 400px;
  }
  .tableContent {
    position: relative;
    margin-bottom: 20px;
    p {
      position: absolute;
      top: 11px;
      right: -5px;
      a {
        font-size: 20px;
      }
    }
  }
}

/deep/.el-dialog {
  width: 500px !important;
}
/deep/ .el-table th {
  background-color: #f4f4f4;
  color: #555;
  text-align: center;
}
/deep/ .el-table td,
.el-table th {
  text-align: center;
  padding: 8px 0;
}
/deep/ .el-button--small {
  padding: 9px 15px;
}
/deep/ .el-button [class*='el-icon-'] + span {
  margin-left: 0;
}
/deep/.el-input__inner {
  width: 250px !important;
}
/deep/.el-input_suffix {
  right: -15px !important;
}
</style>
