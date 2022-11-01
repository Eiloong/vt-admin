import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
interface RouteStore {
  routeList: RouteRecordRaw[]
}
export const useRouteStore = defineStore({
  id: 'route',
  state: (): RouteStore => ({
    routeList: []
  }),
  actions: {
    async setRoutesList(data: any) {
      this.routeList = data
    }
  }
})
