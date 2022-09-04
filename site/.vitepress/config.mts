import type { UserConfig } from 'vitepress'
import head from './config/head'
import nav from './config/nav'

export const config: UserConfig = {
	title: 'RudderUI',
	description: 'a Vue 3  based component library',
	lastUpdated: true,
	head,
	appearance: true,
	lang: 'zh-CN',
	themeConfig: {
		logo: '/images/rudder.svg',
		siteTitle: false,
		docsDir: 'site',
		nav,
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/real-jacket/rudder-ui' },
		],
	},
	locales: { '/zh-CN': { label: '简体中文', lang: 'zh-CN' } },
}

export default config
