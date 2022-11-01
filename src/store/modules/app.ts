import { defineStore } from 'pinia'

import { router } from '../../router'

type tabViewsPath = {
  title: string
  path: string
  icon?: string
  close: boolean
}

interface AppStore {
  collapse: boolean
  tabViewsPath: tabViewsPath[]
  tabViewActive: string
}

// * Tabs（黑名单地址，不需要添加到 tabs 的路由地址）
const TABS_BLACK_LIST: string[] = ['/403', '/404', '/500', '/layout', '/login', '/dataScreen']
export const useAppStore = defineStore({
  id: 'app',
  state: (): AppStore => ({
    collapse: false,
    tabViewsPath: [{ title: '首页', path: '/home', icon: 'home-filled', close: false }], // 访问路经
    tabViewActive: '/home' // 当前激活的tab
  }),
  actions: {
    setupCollapse(collapse: boolean) {
      this.collapse = collapse
    },
    setAddTabViewsPath(tabItem: any) {
      if (TABS_BLACK_LIST.includes(tabItem.path)) return
      if (
        this.tabViewsPath.every((item) => {
          return item.path !== tabItem.path
        })
      ) {
        this.tabViewsPath.push(tabItem)
      }
      this.settabViewActive(tabItem.path)
      router.push(tabItem.path)
    },
    setRemoveTabs(tabsPath: string) {
      let tabViewActive = this.tabViewActive
      let tabViewsPath = this.tabViewsPath
      if (tabViewActive === tabsPath) {
        tabViewsPath.forEach((item, index) => {
          if (item.path !== tabsPath) return
          const nextTab = tabViewsPath[index + 1] || tabViewsPath[index - 1]
          if (!nextTab) return
          tabViewActive = nextTab.path
          router.push(nextTab.path)
        })
      }
    },
    settabViewActive(tabViewActive: string) {
      this.tabViewActive = tabViewActive
    },
    setCloseMultipleTab(tabViewActive?: string) {
      this.tabViewsPath = this.tabViewsPath.filter((item) => {
        return item.path === tabViewActive || item.path === '/home'
      })
    },
    async goHome() {
      router.push('/home')
      this.tabViewActive = '/home'
    }
  }
})
