<template>
  <el-card class="content-box">
    Link：
    <a :href="linkUrl" target="_blank">{{ linkUrl }}</a> 🍒🍉🍊
  </el-card>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const linkUrl: any = route.meta.isLink
</script>

<style lang="scss" scoped>
.content-box {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
}
</style>
