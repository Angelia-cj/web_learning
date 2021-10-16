<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <el-table size="mini" :data="master_user.data" border style="width: 100%" highlight-current-row>
          <el-table-column type="index"></el-table-column>
          <el-table-column v-for="(item,index) in master_user.columns" :label="item.label" :prop="item.prop" :width="item.width">
            <template slot-scope="scope">
              <span v-if="scope.row.isSet">
                <el-input size="mini" placeholder="请输入内容" v-model="master_user.sel[item.prop]">
                </el-input>
              </span>
              <span v-else>{{scope.row[item.prop]}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="">
            <template slot-scope="scope">
              <span class="el-tag el-tag--success el-tag--mini" style="cursor: pointer;" @click.stop="saveRow(scope.row,scope.$index)">
                确定
              </span>
              <span class="el-tag el-tag--primary el-tag--mini" style="cursor: pointer;" @click="editRow(scope.row,scope.$index)">
                编辑
              </span>
              <span class="el-tag el-tag--danger el-tag--mini" style="cursor: pointer;" @click="deleteRow(scope.$index,master_user.data)">
                删除
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="24">
        <div class="el-table-add-row" style="width: 99.2%;" @click="add()"><span>+ 添加</span></div>
      </el-col>
    </el-row>
    <span>{{master_user.data}}</span>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      master_user: {
        sel: null, //选中行   
        columns: [{
          prop: "type",
          label: "远程类型",
          width: 120
        },
        {
          prop: "addport",
          label: "连接地址",
          width: 150
        },
        {
          prop: "user",
          label: "登录用户",
          width: 120
        },
        {
          prop: "pwd",
          label: "登录密码",
          width: 220
        },
        {
          prop: "info",
          label: "其他信息"
        }],
        data: [],
      },
    }
  },
  methods: {
    add () {
      for (let i of this.master_user.data) {
        if (i.isSet) return this.$message.warning("请先保存当前编辑项");
      }
      let j = {
        "type": "",
        "addport": "",
        "user": "",
        "pwd": "",
        "info": "",
        "isSet": true,
      };
      this.master_user.data.push(j);
      this.master_user.sel = JSON.parse(JSON.stringify(j));
    },
    saveRow (row, index) { //保存
      let data = JSON.parse(JSON.stringify(this.master_user.sel));
      for (let k in data) {
        row[k] = data[k] //将sel里面的value赋值给这一行。ps(for....in..)的妙用，细心的同学发现这里我并没有循环对象row
      }
      row.isSet = false;
    },
    editRow (row) { //编辑
      for (let i of this.master_user.data) {
        if (i.isSet) return this.$message.warning("请先保存当前编辑11项");
      }
      this.master_user.sel = row
      row.isSet = true
    },
    deleteRow (index, rows) { //删除
      rows.splice(index, 1)
    }
  },
  components: {}
}
</script>

<style lang="scss">
.el-table-add-row {
  margin-top: 10px;
  width: 100%;
  height: 34px;
  border: 1px dashed #c1c1cd;
  border-radius: 3px;
  cursor: pointer;
  justify-content: center;
  display: flex;
  line-height: 34px;
}
</style>
