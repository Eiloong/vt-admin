<template>
  <el-container class="layout-container">
    <el-aside>
      <Sider />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
        <Tabs />
      </el-header>
      <el-main>
        <el-scrollbar>
          <LayoutParentView class="main-container" />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Sider from './sider/index.vue'
import Header from './header/index.vue'
import Tabs from './tabs/index.vue'
import LayoutParentView from './routerView/parent.vue'
</script>

<style scoped lang="scss">
.layout-container {
  height: 100%;
  .el-aside {
    height: 100%;
    overflow: inherit;
    width: auto;
    color: var(--el-text-color-primary);
  }
  .el-container {
    height: 100%;
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
    overflow-x: hidden;
    .main-container {
      padding: 10px;
      background-color: var(--next-bg-main-color);
    }
  }
}
</style>
