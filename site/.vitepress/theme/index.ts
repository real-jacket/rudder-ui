import VPApp from '../vitepress'

import type { Theme } from 'vitepress'

const themeConfig: Theme = {
	// NotFound,
	Layout: VPApp,
	enhanceApp: ({ app, router }) => {
		console.log('xxx')
		// app.use(ElementPlus)
		// globals.forEach(([name, Comp]) => {
		// 	app.component(name, Comp)
		// })
	},
}

export default themeConfig
