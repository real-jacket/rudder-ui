import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Ke from './components/Ke.vue'
import Te from './components/Te.vue'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: '/', redirect: '/ke' },
		{ path: '/ke', component: Ke },
		{ path: '/te', component: Te },
	],
})

const app = createApp(App)

app.use(router)
app.mount('#app')
