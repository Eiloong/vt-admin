<template>
  <div class="tabs-box">
    <div class="tabs-menu">
      <el-tabs v-model="tabViewActive" type="card" @tab-click="onTab" @tab-remove="removeTab">
        <el-tab-pane
          v-for="item in tabViewsPath"
          :key="item.path"
          :path="item.path"
          :label="item.title"
          :name="item.path"
          :closable="item.close"
        >
          <template #label>
            <el-icon class="tabs-icon" v-if="item.icon">
              <component :is="item.icon"></component>
            </el-icon>
            {{ item.title }}
          </template>
        </el-tab-pane>
      </el-tabs>
      <el-dropdown trigger="click">
        <el-button size="small" type="primary">
          <span>更多</span>
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="closeCurrentTab">关闭当前</el-dropdown-item>
            <el-dropdown-item @click="closeOtherTab">关闭其它</el-dropdown-item>
            <el-dropdown-item @click="closeAllTab">关闭所有</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<!-- <script lang="ts" setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTabStore } from '@/store/modules/tab'

const route = useRoute()
const router = useRouter()
const tabStore = useTabStore()

const tabViewsPath = computed(() => tabStore.tabViewsPath)

const tabViewActive = computed({
  get: () => {
    return tabStore.tabViewActive
  },
  set: (val: any) => {
    tabStore.settabViewActive(val)
  }
})

// 监听路由的变化（防止后退前进不变化 tabsMenuValue）
watch(
  () => route.path,
  () => {
    let params = {
      title: route.meta.title as string,
      path: route.path,
      close: route.path === '/home' ? false : true
    }
    tabStore.addTabViewsPath(params)
  },
  {
    immediate: true
  }
)

const onTab = (tab: any) => {
  let path = tab.props.name as string
  router.push(path)
}

const removeTab = (activeTabPath: string) => {
  tabStore.removeTabs(activeTabPath)
}

const closeCurrentTab = () => {
  if (tabStore.tabViewActive === '/home') return
  tabStore.removeTabs(tabStore.tabViewActive)
}
const closeOtherTab = () => {
  tabStore.closeMultipleTab(tabStore.tabViewActive)
}
const closeAllTab = () => {
  tabStore.closeMultipleTab()
  tabStore.goHome()
}
</script> -->

<style lang="scss" scoped>
.tabs-box {
  :deep(.tabs-menu) {
    position: relative;
    width: 100%;
    box-shadow: 0 1px 3px rgb(184 184 184 / 50%);
    z-index: 999;
    background-color: #eee;
    .el-dropdown {
      position: absolute;
      top: 8px;
      right: 13px;
    }
    .tabs-icon {
      top: 2px;
    }
    .el-tabs__nav-wrap {
      position: absolute;
      width: calc(100% - 120px);
    }
    .el-tabs--card > .el-tabs__header {
      margin: 0;
      padding: 0 10px;
      height: 40px;
      border: none;
      box-sizing: border-box;
    }
    .el-tabs--card > .el-tabs__header .el-tabs__nav {
      border: none;
    }
    .el-tabs--card > .el-tabs__header .el-tabs__item {
      border: none;
      color: #cccccc;
    }
    .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
      // border-bottom: 2px solid $primary-color;
      // color: $primary-color;
      border-bottom: 2px solid rgb(64 158 255);
      color: rgb(64 158 255);
    }
    .el-tabs__item .is-icon-close svg {
      margin-top: 0.5px;
    }
  }
}
</style>
