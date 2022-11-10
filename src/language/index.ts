import { createI18n } from 'vue-i18n'
import zhcnLocale from 'element-plus/lib/locale/lang/zh-cn'
import enLocale from 'element-plus/lib/locale/lang/en'
import zhtwLocale from 'element-plus/lib/locale/lang/zh-tw'

import modulesEn from './modules/en'
import modulesZhcn from './modules/zh-cn'
import modulesZhtw from './modules/zh-tw'

const messages = {
  [zhcnLocale.name]: { ...zhcnLocale, message: { ...modulesZhcn } },
  [enLocale.name]: { ...enLocale, message: { ...modulesEn } },
  [zhtwLocale.name]: { ...zhtwLocale, message: { ...modulesZhtw } }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'zh-cn', // 语言标识
  fallbackLocale: zhcnLocale.name,
  messages
})
