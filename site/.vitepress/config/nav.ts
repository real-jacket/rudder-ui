const defaultLang = 'zh-CN'
import navLocale from '../crowdin/zh-CN/pages/sidebar.json'

interface NavItem {
	link?: string
	text: string
	activeMatch?: string
}

function getNav() {
	return navLocale.map((nav: NavItem) => {
		return nav.link
			? {
					...nav,
					link: `${defaultLang}${nav.link}`,
			  }
			: nav
	})
}

export default getNav()
