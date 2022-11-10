<template>
  <div class="header">
    <div class="header-left flx-center">
      <CollapseIcon />
    </div>
    <div class="header-right flx-center">
      <el-dropdown>
        <span class="el-dropdown-link"> Admin </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item @click="hangleSignOut">Sign out</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CollapseIcon from './CollapseIcon.vue'

const hangleSignOut = () => {
  // router.push('/login')
  // userStore.token = ''
}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 55px;
  border-bottom: 1px solid #f6f6f6;
  background-color: #ffffff;
  box-sizing: border-box;
}
.header .header-left {
  display: flex;
  align-items: center;
}
.header .header-left .collapse-icon {
  margin-right: 20px;
  font-size: 22px;
  cursor: pointer;
}
.header .header-right {
  display: flex;
  align-items: center;
}
</style>
