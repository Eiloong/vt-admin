import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// createApp(App).use(router).use(ElementPlus).mount('#app')

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  setupStore(app)
  app.use(ElementPlus)
  app.mount('#app')
}

bootstrap()
