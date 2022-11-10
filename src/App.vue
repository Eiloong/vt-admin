<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const i18n = useI18n()
</script>

<template>
  <el-config-provider :locale="i18n.messages.value['zh-cn']">
    <router-view></router-view>
  </el-config-provider>
</template>

<style></style>
