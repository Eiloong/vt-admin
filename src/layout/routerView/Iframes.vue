<template>
  <div class="content-box">
    <iframe :src="iframeUrl" frameborder="0" class="full-iframe"></iframe>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const iframeUrl: any = route.meta.isLink
</script>

<style lang="scss" scoped>
.full-iframe {
  width: 100%;
  height: calc(100vh - 120px);
}
</style>
