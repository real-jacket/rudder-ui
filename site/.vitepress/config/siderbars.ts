import guide from '../crowdin/zh-CN/pages/guide.json'
import component from '../crowdin/zh-CN/pages/component.json'
const lang = 'zh-CN'

function getGuideSidebar() {
	return Object.values(guide).map((item) => mapPrefix(item, lang))
}

function getComponentsSideBar() {
	return Object.values(component).map((item) =>
		mapPrefix(item, lang, '/component')
	)
}

const getSidebars = () => {
	return {
		[`/${lang}/guide/`]: getGuideSidebar(),
		[`/${lang}/component/`]: getComponentsSideBar(),
	}
}

type Item = {
	text: string
	items?: Item[]
	link?: string
}

function mapPrefix(item: Item, lang: string, prefix = '') {
	if (item.items && item.items.length > 0) {
		return {
			...item,
			items: item.items.map((child) => mapPrefix(child, lang, prefix)),
		}
	}
	return {
		...item,
		link: `/${lang}${prefix}${item.link}`,
	}
}

export default getSidebars()
