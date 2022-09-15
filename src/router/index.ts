import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'

import Layout from '../layout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    component: Layout
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
