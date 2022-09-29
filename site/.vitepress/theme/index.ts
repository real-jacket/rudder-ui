import RudderUi from 'rudder-ui'

import './styles/index.css'

import VPApp from '../vitepress'
import VPDemo from '../vitepress/components/vp-demo.vue'

import type { Theme } from 'vitepress'

const themeConfig: Theme = {
	// NotFound,
	Layout: VPApp,
	enhanceApp: ({ app, router }) => {
		app.use(RudderUi)
		// app.use(ElementPlus)
		// globals.forEach(([name, Comp]) => {
		// 	app.component(name, Comp)
		// })
		app.component('Demo', VPDemo)
	},
}

export default themeConfig
