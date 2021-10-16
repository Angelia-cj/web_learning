<template>
  <div class="home">
    <div>
      <h1>Element ui表格组件+sortablejs实现行列拖拽排序使用样例demo</h1>
      <el-table style="width:1000px;" size="small" :default-sort="{ prop: 'sortNum', order: 'ascending' }" :data="tableData" row-key="location" border align="left">
        <el-table-column type="selection" class="filterDrag"></el-table-column>
        <!-- <el-table-column v-for="(item, index) in col" :key="`col_${index}`" :prop="dropCol[index].prop" :label="item.label">
          <template slot-scope="scope">
            <p>{{ scope.row[dropCol[index].prop] }}</p>
            <p v-if="dropCol[index].label === '操作'">
              <el-button size="mini" type="success">上架</el-button>
            </p>
          </template>
        </el-table-column> -->
        <el-table-column label="位置" prop="location"></el-table-column>
        <el-table-column label="广告信息" prop="content"></el-table-column>
        <el-table-column label="跳转url" prop="url"></el-table-column>
        <el-table-column label="联系人" prop="contacts"></el-table-column>
        <el-table-column label="开始时间" prop="startDate"></el-table-column>
        <el-table-column label="结束时间" prop="endDate"></el-table-column>
        <el-table-column label="经办人" prop="operator"></el-table-column>
      </el-table>
    </div>
    <div style="display: flex;border:1px solid #ccc;">
      <pre style="text-align: left">
        <h6>dropCol</h6>
        {{dropCol}}
      </pre>
      <div style="width:1px;background:#ccc;height:100%;margin-left: .5rem;margin-right: .5rem;"></div>
      <pre style="text-align: left">
      <h6>tableData</h6>
        {{tableData}}
      </pre>
    </div>
  </div>
</template>
<script>
import Sortable from "sortablejs";
export default {
  /* components: {
    Sortable
  }, */
  data () {
    return {
      col: [
        {
          label: "位置",
          prop: "location"
        },
        {
          label: "广告信息",
          prop: "content"
        },
        {
          label: "跳转url",
          prop: "url"
        },
        {
          label: "联系人",
          prop: "contacts"
        },
        {
          label: "开始时间",
          prop: "startDate"
        },
        {
          label: "结束时间",
          prop: "endDate"
        },
        {
          label: "经办人",
          prop: "operator"
        },
        {
          label: "操作",
          prop: "isClick"
        }
      ],
      dropCol: [
        {
          label: "位置",
          prop: "location"
        },
        {
          label: "广告信息",
          prop: "content"
        },
        {
          label: "跳转url",
          prop: "url"
        },
        {
          label: "联系人",
          prop: "contacts"
        },
        {
          label: "开始时间",
          prop: "startDate"
        },
        {
          label: "结束时间",
          prop: "endDate"
        },
        {
          label: "经办人",
          prop: "operator"
        },
        {
          label: "操作",
          prop: "isClick"
        }
      ],
      tableData: [
        {
          location: "A5",
          content: "这个鞋子好啊",
          url: "http://xiezi.com",
          contacts: "温州皮革城",
          startDate: "2019-08-28",
          endDate: "2019-08-31",
          operator: "小李"
        },
        {
          location: "A1",
          content: "落魄前端炒粉",
          url: "http://888.com",
          contacts: "陈老板",
          startDate: "2019-08-28",
          endDate: "2019-08-31",
          operator: "小李"
        },
        {
          location: "A0",
          content: "某宝啥都有",
          url: "http://taobao.com",
          contacts: "马总",
          startDate: "2019-08-28",
          endDate: "2019-12-01",
          operator: "大锤"
        },
        {
          location: "A4",
          content: "时尚潮流服饰",
          url: "http://good.com",
          contacts: "廖老板",
          startDate: "2018-09-28",
          endDate: "2019-01-10",
          operator: "狗蛋"
        },
        {
          location: "A3",
          content: "人到中年秃不由己",
          url: "http://666666.com",
          contacts: "土豪",
          startDate: "2019-03-28",
          endDate: "2019-06-18",
          operator: "翠花"
        },
        {
          location: "A2",
          content: "落魄前端炒粉",
          url: "http://dddd.com",
          contacts: "李老板",
          startDate: "2019-02-13",
          endDate: "2019-05-31",
          operator: "小黄"
        }
      ]
    };
  },
  mounted () {
    this.rowDrop();
    this.columnDrop();
  },
  methods: {
    rowDrop () {
      const tbody = document.querySelector(".el-table__body-wrapper tbody");
      const _this = this;
      console.log('tbody:', tbody)
      console.log('tableData:', this.tableData)
      Sortable.create(tbody, {
        animation: 180,
        delay: 0,
        onEnd ({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0]
          _this.tableData.splice(newIndex, 0, currRow)
        }
      });
    },
    // 列拖拽
    columnDrop () {
      const wrapperTr = document.querySelector('.el-table__header-wrapper tr')
      this.sortable = Sortable.create(wrapperTr, {
        filter: '.filterDrag',
        animation: 180,
        delay: 0,
        onEnd: evt => {
          const oldItem = this.dropCol[evt.oldIndex]
          this.dropCol.splice(evt.oldIndex, 1)
          this.dropCol.splice(evt.newIndex, 0, oldItem)
        },
        onFilter: evt => {
          console.log('evt:', evt)
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  // width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
</style>

