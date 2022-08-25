<template>
  <div class="home">
    {{ excel }}
    <t-card hover-shadow :style="{ width: '400px' }">
      <t-list stripe>
        <t-list-item>
          <span>导出报表</span>

          <template #action>
            <t-button variant="text" theme="primary">查看</t-button>
          </template>
        </t-list-item>
      </t-list>
    </t-card>
  </div>
</template>

<script lang="ts" setup>
const { excel } = useExcel();
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  display: grid;
  place-content: center;
}
</style>
