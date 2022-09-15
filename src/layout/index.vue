<template>
  <el-container class="layout-container-demo">
    <el-aside width="200px">
      <!-- <Logo></Logo> -->
      <div style="width: 100%; height: 50px"></div>
      <el-scrollbar><Menu /></el-scrollbar>
    </el-aside>

    <el-container>
      <el-header><Header /> <Tabs /></el-header>

      <el-main>
        <el-scrollbar>
          <div class="main-container">
            <el-table :data="tableData">
              <el-table-column prop="date" label="Date" width="140" />
              <el-table-column prop="name" label="Name" width="120" />
              <el-table-column prop="address" label="Address" />
            </el-table>
          </div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Menu from './menu/index.vue'
import Header from './header/index.vue'
import Tabs from './tabs/index.vue'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles'
}
const tableData = ref(Array.from({ length: 50 }).fill(item))
</script>

<style scoped lang="scss">
.layout-container-demo {
  height: 100%;
  .el-aside {
    overflow: hidden;
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
    position: relative;
    left: 0;
    top: 0;
  }
  .el-container {
    height: 100%;
    position: absolute;
    left: 200px;
    width: calc(100% - 200px);
  }
  .el-header {
    padding: 0;
    height: auto;
  }
  .el-menu {
    border-right: none;
  }
  .el-main {
    padding: 0;
    .main-container {
      padding: 10px;
      background-color: #eee;
    }
  }
}
</style>
