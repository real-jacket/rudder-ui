import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass'
import VueMacros from 'unplugin-vue-macros/vite'

export default defineConfig({
	plugins: [
		VueMacros({
			plugins: {
				vue: vue(),
			},
		}),
		dts({
			entryRoot: '.',
			outputDir: [resolve(__dirname, './es')],
		}),
		scss({ include: /\.scss$/, sass: dartSass, output: './dist/index.css' }),
	],
	build: {
		target: 'modules',
		emptyOutDir: false,
		minify: false,
		// 忽略
		lib: {
			formats: ['es', 'cjs'],
			entry: resolve(__dirname, 'index.ts'),
			name: 'rudder-ui',
		},
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['vue', '@rudder-ui/utils'],
			output: [
				{
					format: 'es',
					//不用打包成.es.js,这里我们想把它打包成.js
					entryFileNames: '[name].js',
					//让打包目录和我们目录对应
					preserveModules: true,
					//配置打包根目录
					dir: resolve(__dirname, './es'),
				},
				{
					format: 'commonjs',
					//不用打包成.mjs
					entryFileNames: '[name].js',
					//让打包目录和我们目录对应
					preserveModules: true,
					//配置打包根目录
					dir: resolve(__dirname, './lib'),
				},
				{
					format: 'umd',
					entryFileNames: 'index.js',
					globals: {
						vue: 'Vue',
					},
					dir: resolve(__dirname, './dist'),
				},
				{
					format: 'umd',
					entryFileNames: 'index.min.js',
					globals: {
						vue: 'Vue',
					},
					dir: resolve(__dirname, './dist'),
					plugins: [terser()],
				},
			],
		},
	},
})
