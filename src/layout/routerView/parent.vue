<template>
  <div style="height: 100vh">
    <router-view v-slot="{ Component }">
      <transition :name="setTransitionName" mode="out-in">
        <keep-alive>
          <component :is="Component" style="width: 100%; height: 100%"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'LayoutParentView',
  // props: {
  //   minHeight: {
  //     type: String,
  //     default: ''
  //   }
  // },
  setup() {
    // 设置主界面切换动画
    const setTransitionName = computed(() => {
      return 'slide-right'
    })
    return {
      setTransitionName
    }
  }
})
</script>

<style lang="scss" scoped></style>
