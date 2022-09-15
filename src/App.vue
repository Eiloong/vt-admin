<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100vh;
  font-size: 16px;
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100%;
}
.el-menu-item.is-active {
  background-color: #007bfa3d;
}
.el-scrollbar__bar.is-vertical > div {
  /* width: 100%; */
  width: 0% !important;
}
</style>
