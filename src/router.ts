import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import MarkDown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import install from './markdown/install.md'
import getStarted from './markdown/get-started.md'

import { h } from 'vue'

// const md = (filename) => h(MarkDown, { path: `../markdown/${filename}.md`, key: filename })
const md = (string) => h(MarkDown, { content: string, key: string })

export const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: '/', component: Home },
		{
			path: '/doc',
			component: Doc,
			children: [
				{ path: '', redirect: '/doc/intro' },
				{ path: 'intro', component: md(intro) },
				{ path: 'install', component: md(install) },
				{ path: 'start', component: md(getStarted) },
				{ path: 'switch', component: SwitchDemo },
				{ path: 'button', component: ButtonDemo },
				{ path: 'dialog', component: DialogDemo },
				{ path: 'Tabs', component: TabsDemo },
			],
		},
	],
})
