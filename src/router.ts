import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './views/SwitchDemo.vue'
import ButtonDemo from './views/ButtonDemo.vue'
import DialogDemo from './views/DialogDemo.vue'
import TabsDemo from './views/TabsDemo.vue'

export const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: '/', component: Home },
		{
			path: '/doc',
			component: Doc,
			children: [
				{ path: '', redirect: '/doc/intro' },
				{ path: 'intro', component: SwitchDemo },
				{ path: 'install', component: SwitchDemo },
				{ path: 'switch', component: SwitchDemo },
				{ path: 'button', component: ButtonDemo },
				{ path: 'dialog', component: DialogDemo },
				{ path: 'Tabs', component: TabsDemo },
			],
		},
	],
})
