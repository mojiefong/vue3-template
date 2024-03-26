import App from './App.vue'
import router from './router'
import { setupDirectives } from './directives'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import '@/assets/scss/index.scss'

function bootstrap() {
  const app = createApp(App)

  // 注册全局指令
  setupDirectives(app)

  app.use(router)
  app.use(createPinia())
  app.mount('#app')
}

bootstrap()
