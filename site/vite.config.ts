import { defineConfig, loadEnv, Alias } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { MarkdownTransform } from './.vitepress/plugins/markdown-transform'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import mkcert from 'vite-plugin-mkcert'
import VueMacros from 'unplugin-vue-macros/vite'

import path from 'path'

const alias: Alias[] = [
	{
		find: /^rudder-ui$/,
		replacement: path.resolve('..', 'packages/components/index.ts'),
	},
	{
		find: /^rudder-ui(\/(es|lib))?\/(.*)$/,
		replacement: `${path.resolve('..', 'packages/components')}/$3`,
	},
]

export default defineConfig(({ mode }) => {
	// const env = loadEnv(mode, process.cwd(), '')
	return {
		server: {
			host: true,
			https: true,
			fs: {
				allow: [path.resolve(__dirname, '..')],
			},
		},
		resolve: {
			alias,
		},
		plugins: [
			VueMacros({
				setupComponent: false,
				setupSFC: false,
				plugins: {
					vueJsx: VueJsx(),
				},
			}),
			Components({
				dirs: ['.vitepress/vitepress/components'],
				allowOverrides: true,
				// custom resolvers
				resolvers: [
					// auto import icons
					// https://github.com/antfu/unplugin-icons
					IconsResolver({
						customCollections: ['rudder-doc'],
					}),
				],
				// allow auto import and register components used in markdown
				include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
			}),
			Icons({
				customCollections: {
					'rudder-doc': FileSystemIconLoader('./public/images', (svg) =>
						svg
							.replace(/^<svg /, '<svg fill="currentColor" ')
							.replace(/(height|width)\="\d*"/g, '')
					),
				},
				autoInstall: true,
			}),
			MarkdownTransform(),
			mkcert(),
		],
	}
})
