import { createApp } from 'vue'
import './lib/rudder.scss'
import './index.scss'
import './assets/iconfont'
import App from './App.vue'
import { router } from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
