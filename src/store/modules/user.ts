import type { UserInfo } from '../../types/store'
import { defineStore } from 'pinia'

interface UserState {
  userInfo: UserInfo
  token: string
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    userInfo: {
      userId: '',
      username: '',
      roles: ['admin'],
      authBtnList: []
    },
    token: ''
  }),
  getters: {
    getuserInfo(): UserInfo {
      return this.userInfo
    },
    getToken(): string {
      return this.token
    }
  },
  actions: {
    setUserInfo(info: UserInfo) {
      this.userInfo = info
    },
    setToken(info: string) {
      this.token = info ? info : ''
    }
  }
})
