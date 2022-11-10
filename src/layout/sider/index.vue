<template>
  <div class="sider-container" :style="{ width: isCollapse ? '65px' : '200px' }">
    <div class="logo"></div>
    <el-scrollbar>
      <el-menu :default-active="defaultActive" :collapse="isCollapse" :collapse-transition="false" router>
        <MenuItem :menuList="menuList" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// import { Menu as IconMenu, Location, Setting, Document } from '@element-plus/icons-vue'
import MenuItem from './MenuItem.vue'
import { useAppStore } from '../../store/modules/app'
import { useRouteStore } from '../../store/modules/route'
import { useRoute } from 'vue-router'
const route = useRoute()
const appStore = useAppStore()
const routeStore = useRouteStore()

const isCollapse = computed((): boolean => appStore.collapse)
const menuList = computed(() => routeStore.routeList)
const defaultActive = computed((): string => route.path)
// const defaultActive = route.meta.isDynamic ? route.meta.isDynamicPath : route.path
</script>

<style lang="scss" scoped>
.sider-container {
  height: 100%;
  transition: all 0.3s;
  min-width: 65px;
  overflow: hidden;
  min-height: 100vh;
  .logo {
    width: 100%;
    height: 50px;
    background-color: aqua;
  }
  .el-scrollbar {
    height: calc(100% - 50px);
    .el-menu {
      transition: all 0.3s;
      border: none;
      width: 100%;
      // height: calc(100vh - 50px);
    }
  }
}
</style>
