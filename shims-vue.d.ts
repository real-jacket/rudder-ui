// 声明vue文件的导出类型
declare module '*.vue' {
	import { ComponentOptions } from 'vue'
	const ComponentOptions: ComponentOptions
	export default ComponentOptions
}

declare module '*.md' {
	const str: string
	export default str
}
