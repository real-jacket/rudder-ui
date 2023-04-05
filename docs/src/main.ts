import { createApp } from 'vue'
import 'rudder-ui/rudder.scss'
import './index.scss'
import './assets/iconfont'
import App from './App.vue'
import { router } from './router'
import 'github-markdown-css'
import Demo from './components/Demo.vue'

const app = createApp(App)

app.use(router)
app.component('Demo', Demo)
app.mount('#app')
