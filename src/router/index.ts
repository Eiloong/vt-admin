import type { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { staticRoutes, dynamicRoutes } from './route'
import { store } from '../store'
import { useUserStore } from '../store/modules/user'
import { useRouteStore } from '../store/modules/route'
import { initFrontEndControlRoutes } from './frontEnd'
import { NproStart, NproClose } from '../utils/nprogress'

let UserStore: any = useUserStore(store)
let routesStore: any = useRouteStore(store)

export const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes
})

/**
 * 定义404界面
 * @link 参考：https://next.router.vuejs.org/zh/guide/essentials/history-mode.html#netlify
 */
const pathMatch = {
  path: '/:path(.*)*',
  redirect: '/404'
}

export function formatFlatteningRoutes(arr: any) {
  if (arr.length <= 0) return false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].children) {
      arr = arr.slice(0, i + 1).concat(arr[i].children, arr.slice(i + 1))
    }
  }
  return arr
}

export function formatTwoStageRoutes(arr: any) {
  if (arr.length <= 0) return false
  const newArr: any = []
  const cacheList: Array<string> = []
  arr.forEach((v: any) => {
    if (v.path === '/') {
      newArr.push({
        component: v.component,
        name: v.name,
        path: v.path,
        redirect: v.redirect,
        meta: v.meta,
        children: []
      })
    } else {
      // 判断是否是动态路由（xx/:id/:name），用于 tagsView 等中使用
      // 修复：https://gitee.com/lyt-top/vue-next-admin/issues/I3YX6G
      if (v.path.indexOf('/:') > -1) {
        v.meta['isDynamic'] = true
        v.meta['isDynamicPath'] = v.path
      }
      newArr[0].children.push({ ...v })
      if (newArr[0].meta.isKeepAlive && v.meta.isKeepAlive) {
        cacheList.push(v.name)
        // store.dispatch('keepAliveNames/setCacheKeepAlive', cacheList)
      }
    }
  })
  return newArr
}

export function hasRoles(roles: any, route: any) {
  if (route.meta && route.meta.roles) return roles.some((role: any) => route.meta.roles.includes(role))
  else return true
}

export function setFilterHasRolesMenu(routes: any, roles: any) {
  const menu: any = []
  routes.forEach((route: any) => {
    const item = { ...route }
    if (hasRoles(roles, item)) {
      if (item.children) item.children = setFilterHasRolesMenu(item.children, roles)
      menu.push(item)
    }
  })
  return menu
}

export function setCacheTagsViewRoutes() {
  if (UserStore === null) UserStore = useUserStore()
  // 获取有权限的路由，否则 tagsView、菜单搜索中无权限的路由也将显示
  setFilterHasRolesMenu(dynamicRoutes, UserStore.userInfo.roles)
}

export function setFilterMenuAndCacheTagsViewRoutes() {
  routesStore.setRoutesList(setFilterHasRolesMenu(dynamicRoutes[0].children, UserStore.userInfo.roles))
  setCacheTagsViewRoutes()
}

export function setFilterRoute(chil: any) {
  let filterRoute: any = []
  chil.forEach((route: any) => {
    if (route.meta.roles) {
      route.meta.roles.forEach((metaRoles: any) => {
        UserStore.userInfo.roles.forEach((roles: any) => {
          if (metaRoles === roles) filterRoute.push({ ...route })
        })
      })
    }
  })
  return filterRoute
}

export function setFilterRouteEnd() {
  let filterRouteEnd: any = formatTwoStageRoutes(formatFlatteningRoutes(dynamicRoutes))
  filterRouteEnd[0].children = [...setFilterRoute(filterRouteEnd[0].children), { ...pathMatch }]
  return filterRouteEnd
}

export async function setAddRoute() {
  await setFilterRouteEnd().forEach((route: RouteRecordRaw) => {
    const routeName: any = route.name
    if (!router.hasRoute(routeName)) {
      return router.addRoute(route)
    }
  })
}

export async function resetRoute() {
  await setFilterRouteEnd().forEach((route: RouteRecordRaw) => {
    const routeName: any = route.name
    router.hasRoute(routeName) && router.removeRoute(routeName)
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.meta.title) NproStart()
  const token = sessionStorage.getItem('token')
  if (to.path === '/login' && !token) {
    next()
    NproClose()
  } else {
    if (!token) {
      next(`/login?redirect=${to.path}&params=${JSON.stringify(to.query ? to.query : to.params)}`)
      sessionStorage.clear()
      resetRoute()
      NproClose()
    } else if (token && to.path === '/login') {
      next('/home')
      NproClose()
    } else {
      if (routesStore.routeList.length === 0) {
        initFrontEndControlRoutes()
        next({ ...to, replace: true })
      } else {
        next()
      }
    }
  }
})

// 路由加载后
router.afterEach(() => {
  NproClose()
})

export function setupRouter(app: App) {
  app.use(router)
}
