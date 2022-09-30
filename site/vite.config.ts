import { defineConfig, loadEnv } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { MarkdownTransform } from './.vitepress/plugins/markdown-transform'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import mkcert from 'vite-plugin-mkcert'

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
	{
		find: /^rudder-ui\/(.*)$/,
		replacement: `${path.resolve('..', 'packages/components')}/$2`,
	},
]

export default defineConfig(({ mode }) => {
	// const env = loadEnv(mode, process.cwd(), '')
	return {
		server: {
			host: true,
			https: true,
		},
		resolve: {
			alias,
		},
		plugins: [
			vueJsx(),
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
