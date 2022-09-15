<template>
  <el-icon class="collapse-icon" @click="setCollapse">
    <Expand v-show="isCollapse" />
    <Fold v-show="!isCollapse" />
  </el-icon>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
let isCollapse = ref(true)
const setCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style lang="scss" scoped></style>
