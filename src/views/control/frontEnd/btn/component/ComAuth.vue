<template>
  <slot v-if="getUserAuthBtnList"></slot>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useUserStore } from '@/store/modules/user'

export default defineComponent({
  props: {
    value: String
  },
  setup(props) {
    const userStore = useUserStore()

    const getUserAuthBtnList = computed(() => {
      return userStore.userInfo.authBtnList?.some((item) => item === props.value)
    })
    return {
      getUserAuthBtnList
    }
  }
})
</script>

<style lang="scss" scoped></style>
