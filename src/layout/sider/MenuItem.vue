<template>
  <template v-for="item in menuList" :key="item.path">
    <el-sub-menu v-if="item.children?.length > 0" :index="item.path">
      <template #title>
        <!-- <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon> -->
        <!-- <span>{{ item.meta.title }}</span> -->
        <span>{{ $t(item.meta.title) }}</span>
      </template>
      <MenuItem :menuList="item.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.path">
      <!-- <el-icon>
        <component :is="item.icon"></component>
      </el-icon> -->
      <template v-if="!item.meta.isLink" #title>
        <span>{{ $t(item.meta.title) }}</span>
      </template>
      <template v-else #title>
        <a :href="item.meta.isLink" target="_blank" rel="opener" style="width: 100%">{{ item.meta.isLink }}</a>
      </template>
    </el-menu-item>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MenuItem',
  props: {
    menuList: Array as any
  }
})
</script>

<style lang="scss" scoped>
.el-menu-item {
  transition: background-color var(--el-transition-duration), color var(--el-transition-duration);
  box-sizing: border-box;
}
.el-menu-item.is-active {
  background-color: #85c2ff3d;
  border-right: 2px solid rgb(94, 94, 246);
}
</style>
