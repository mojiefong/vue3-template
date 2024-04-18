/**
 * @Author: Mojie
 * @Date: 2024-04-17 08:29:08
 */
import App from './App.vue'
import router from './router'
import { setupDirectives } from './directives'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import '@renderer/assets/scss/index.scss'

const app = createApp(App)

// 注册全局指令
setupDirectives(app)

app.use(router)
app.use(createPinia())
app.mount('#app')
