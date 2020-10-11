declare module '*.vue' {
	import { ComponentOptions } from 'vue'
	const ComponentOptions: ComponentOptions
	export default ComponentOptions
}

declare module '*.md' {
	const str: string
	export default str
}
