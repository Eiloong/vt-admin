import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
const viteConfig = defineConfig(({ mode, command }) => {
  const root = process.cwd()
  const env = loadEnv(mode, process.cwd())

  return {
    base: command === 'serve' ? './' : env.VITE_PUBLIC_PATH,
    root,
    plugins: [vue()],
    resolve: {
      alias: {
        '@': '/src',
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    },
    server: {
      host: '0.0.0.0',
      port: env.VITE_PORT as unknown as number,
      open: env.VITE_OPEN,
      proxy: {}
    }
  }
})

export default viteConfig
