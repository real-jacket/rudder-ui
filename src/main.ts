import { createApp } from 'vue'
import './lib/rudder.scss'
import './index.scss'
import './assets/iconfont'
import App from './App.vue'
import { router } from './router'
import 'github-markdown-css'

const app = createApp(App)

app.use(router)
app.mount('#app')
