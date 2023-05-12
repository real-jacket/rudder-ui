import { defineConfig, PluginOption } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import terser from '@rollup/plugin-terser'
import * as dartSass from 'sass'
import VueMacros from 'unplugin-vue-macros/dist/vite.js'
import vueJsx from '@vitejs/plugin-vue-jsx'

const externalScssPlugin: (options?: {
	externalCss: string
}) => PluginOption = (options) => {
	const { externalCss } = options || {}

	const vue_prefix = '.vue_vue_type_style_index_0_lang'

	return {
		name: 'external-scss',
		generateBundle(options, bundle) {
			// 处理css文件命名
			const moduleIds = [...this.getModuleIds()]

			Object.keys(bundle).map((name) => {
				if (name.includes('.css')) {
					const fileName = bundle[name].fileName
					const moduleId = moduleIds.find((item) =>
						item.includes(bundle[name].name.split('.css')[0])
					)
					bundle[name].fileName =
						path.relative(__dirname, path.dirname(moduleId)) +
						'/' +
						fileName.replace(vue_prefix, '')
				}

				// 自动引入 css
				if (/\.vue\.js$/.test(name)) {
					const fileName = name.split('/').pop().split('.')[0]

					//@ts-ignore
					const code = bundle[name].code

					if (options.format !== 'umd' && !!bundle[fileName + `${vue_prefix}.css`]) {
						// cjs 模块处理 use strict
						if (code.includes('"use strict";')) {
							//@ts-ignore
							bundle[name].code = bundle[name].code.replace(
								'"use strict";\n',
								`"use strict";\nimport "./${fileName}.css";\n`
							)
						} else {
							// es 模块引入 css
							//@ts-ignore
							bundle[name].code = `import "./${fileName}.css";\n` + code
						}
					}
				}
			})

			// 处理额外的scss文件，并合并到 bundle 中进行输出
			const result = dartSass.compile(path.relative(__dirname, externalCss), {
				sourceMap: true,
			})
			const name = path.relative(__dirname, externalCss)
			bundle[name] = {
				fileName: name.replace('scss', 'css'),
				source: result.css,
				type: 'asset',
				needsCodeReference: true,
				name: name,
			}

			//  umd 环境不需要生成 sourcemap
			if (options.format !== 'umd') {
				const mapName = name + '.map'
				bundle[mapName] = {
					fileName: mapName.replace('scss', 'css'),
					source: JSON.stringify(result.sourceMap),
					type: 'asset',
					needsCodeReference: true,
					name: mapName,
				}
			}
		},
	}
}

export default defineConfig({
	plugins: [
		VueMacros({
			plugins: {
				vue: vue(),
				vueJsx: vueJsx(),
			},
		}),
		dts({
			entryRoot: '.',
			outputDir: [path.resolve(__dirname, './es')],
		}),
		externalScssPlugin({
			externalCss: path.resolve(__dirname, './rudder.scss'),
		}),
	],
	base: './',
	css: {},
	build: {
		target: 'modules',
		emptyOutDir: false,
		minify: true,
		// 忽略
		lib: {
			entry: path.resolve(__dirname, 'index.ts'),
			name: 'rudder-ui',
		},
		cssCodeSplit: true,
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['vue', '@rudder-ui/utils'],
			input: [path.resolve(__dirname, './index.ts')],
			preserveEntrySignatures: 'strict',
			output: [
				{
					format: 'es',
					//不用打包成.es.js,这里我们想把它打包成.js
					entryFileNames: '[name].js',
					//让打包目录和我们目录对应
					preserveModules: true,
					sourcemap: true,
					//配置打包根目录
					dir: path.resolve(__dirname, './es'),
				},
				{
					format: 'commonjs',
					//不用打包成.mjs
					entryFileNames: '[name].js',
					//让打包目录和我们目录对应
					preserveModules: true,
					sourcemap: true,
					//配置打包根目录
					dir: path.resolve(__dirname, './lib'),
				},
				{
					format: 'umd',
					entryFileNames: 'index.js',
					globals: {
						vue: 'Vue',
					},
					dir: path.resolve(__dirname, './dist'),
					name: 'rudder-ui',
				},
				{
					format: 'umd',
					entryFileNames: 'index.min.js',
					globals: {
						vue: 'Vue',
					},
					name: 'rudder-ui',
					dir: path.resolve(__dirname, './dist'),
					plugins: [terser()],
				},
			],
		},
	},
})
