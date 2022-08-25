<template>
  <div class="excel">
    <t-card :style="{ width: '1000px' }" hover-shadow>
      <t-space class="excel__operates">
        <t-button>导入报表</t-button>
        <t-button>导出报表</t-button>
      </t-space>

      <t-table
        :data="data"
        :size="size"
        :hover="hover"
        row-key="index"
        :stripe="stripe"
        :columns="columns"
        :bordered="bordered"
        cell-empty-content="-"
        :pagination="pagination"
        :table-layout="tableLayout ? 'auto' : 'fixed'"
      />
    </t-card>
  </div>
</template>

<script lang="ts" setup>
const data = [];
const total = 28;
const stripe = ref(true);
const hover = ref(false);
const bordered = ref(true);
const size = ref("medium");
const tableLayout = ref(false);
const columns = [
  {
    width: "100",
    colKey: "index",
    title: "序号",
    align: "center",
    className: "custom-column-class-name",
    attrs: {
      "data-id": "first-column",
    },
  },
  {
    colKey: "platform",
    title: "平台",
  },
  {
    colKey: "type",
    title: "类型",
  },
  {
    colKey: "default",
    title: "默认值",
  },
  {
    colKey: "needed",
    title: "是否必传",
  },
  {
    colKey: "detail.position",
    title: "详情信息",
    ellipsis: true,
  },
];
const pagination = {
  total,
  defaultCurrent: 2,
  defaultPageSize: 5,
};

for (let i = 0; i < total; i++) {
  data.push({
    index: i,
    platform: i % 2 === 0 ? "共有" : "私有",
    type: ["String", "Number", "Array", "Object"][i % 4],
    default: ["0", "[]"][i % 5],
    detail: {
      position: `读取 ${i} 个数据的嵌套信息值`,
    },
    needed: i % 4 === 0 ? "是" : "否",
    description: "数据源",
  });
}
</script>

<style lang="scss" scoped>
.excel {
  display: grid;
  height: 100vh;
  place-content: center;

  &__operates {
    margin-bottom: 16px;
  }
}
</style>
