import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './views/SwitchDemo.vue'
import ButtonDemo from './views/ButtonDemo.vue'
import DialogDemo from './views/DialogDemo.vue'
import TabsDemo from './views/TabsDemo.vue'
import MarkDown from './components/Markdown.vue'

import { h } from 'vue'

const md = (filename) => h(MarkDown, { path: `../markdown/${filename}.md`, key: filename })

export const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: '/', component: Home },
		{
			path: '/doc',
			component: Doc,
			children: [
				{ path: '', redirect: '/doc/intro' },
				{ path: 'intro', component: md('intro') },
				{ path: 'install', component: md('install') },
				{ path: 'start', component: md('get-started') },
				{ path: 'switch', component: SwitchDemo },
				{ path: 'button', component: ButtonDemo },
				{ path: 'dialog', component: DialogDemo },
				{ path: 'Tabs', component: TabsDemo },
			],
		},
	],
})
