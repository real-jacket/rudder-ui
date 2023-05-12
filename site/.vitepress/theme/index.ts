import RudderUi, { directive } from 'rudder-ui'

import VPApp from '../vitepress'
import VPDemo from '../vitepress/components/vp-demo.vue'

import type { Theme } from 'vitepress'

import './styles/index.scss'

const themeConfig: Theme = {
	// NotFound,
	Layout: VPApp,
	enhanceApp: ({ app, router }) => {
		app.use(RudderUi)
		Object.entries(directive).map(([k, d]) => {
			app.directive(k, d)
		})
		// globals.forEach(([name, Comp]) => {
		// 	app.component(name, Comp)
		// })
		app.component('Demo', VPDemo)
	},
}

export default themeConfig
