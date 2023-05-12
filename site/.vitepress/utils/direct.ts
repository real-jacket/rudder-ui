import { useData, useRouter } from 'vitepress'

export function useDirect() {
	const themeData = useData()
	const lang = themeData.lang.value
	const base = themeData.site.value.base

	const { go } = useRouter()

	const urlPrefix = `${base}${lang}`

	const direct = (path: string = '/') => {
		return go(urlPrefix + path)
	}

	return { direct, homeUrl: urlPrefix + '/' }
}
