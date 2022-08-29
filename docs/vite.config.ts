import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { md } from './plugins/md'
import fs from 'fs'
import { baseParse } from '@vue/compiler-core'
import path from 'path'

const alias = [
	{
		find: /^rudder-ui(\/(es|lib))?$/,
		replacement: path.resolve('..', 'packages/components/index.ts'),
	},
	{
		find: /^rudder-ui\/(es|lib)\/(.*)$/,
		replacement: `${path.resolve('..', 'packages/components')}/$2`,
	},
]

const vueI18nPlugin: Plugin = {
	name: 'vue-demo',
	transform(code, id) {
		if (!/vue&type=demo/.test(id)) {
			return
		}
		const path = id.split('?')[0]
		const file = fs.readFileSync(path).toString()
		//@ts-ignore
		const parsed = baseParse(file).children.find((n) => n.tag === 'demo')
		//@ts-ignore
		const [title, desc] = parsed.children.map((el) => {
			return el.children[0].content
		})

		return `export default Comp => {
			Comp.__sourceCode = ${JSON.stringify(file)}
			Comp.__sourceCodeTitle = ${JSON.stringify(title)}
			Comp.__sourceCodeDesc = ${JSON.stringify(desc)}
	  }`
	},
}

export default defineConfig({
	base: './',
	plugins: [vue(), vueI18nPlugin, md()],
	resolve: {
		alias,
	},
})
