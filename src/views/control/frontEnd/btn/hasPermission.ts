import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()

export function hasPermission(permission: string) {
  const authList = <string[]>userStore.userInfo.authBtnList
  return authList?.indexOf(permission) > -1
}
