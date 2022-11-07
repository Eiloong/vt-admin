import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
const viteConfig = defineConfig((mode: ConfigEnv) => {
  const env = loadEnv(mode.mode, process.cwd())
  console.log('zzzzzzzzzzzzzzzzzzzzz', env)

  return {
    base: mode.command === 'serve' ? './' : '',
    plugins: [vue()],
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
})

export default viteConfig
