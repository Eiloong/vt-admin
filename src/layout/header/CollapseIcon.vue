<template>
  <el-icon class="collapse-icon" @click="setCollapse">
    <Expand v-show="appStore.collapse" />
    <Fold v-show="!appStore.collapse" />
  </el-icon>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import { useAppStore } from '../../store/modules/app'
const appStore = useAppStore()

const setCollapse = () => {
  appStore.setupCollapse(!appStore.collapse)
}
</script>

<style lang="scss" scoped></style>
