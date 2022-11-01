<template>
  <template v-for="item in menuList" :key="item.path">
    <el-sub-menu v-if="item.children?.length > 0" :index="item.path">
      <template #title>
        <!-- <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon> -->
        <span>{{ item.meta.title }}</span>
      </template>
      <MenuItem :menuList="item.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.path">
      <!-- <el-icon>
        <component :is="item.icon"></component>
      </el-icon> -->
      <template v-if="!item.meta.isLink" #title>
        <span>{{ item.meta.title }}</span>
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
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
