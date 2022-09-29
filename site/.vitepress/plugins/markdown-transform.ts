import path from 'path'
import fs from 'fs'
import type { Plugin } from 'vite'

import glob from 'fast-glob'

type Append = Record<'headers' | 'footers' | 'scriptSetups', string[]>

export function MarkdownTransform(): Plugin {
	return {
		name: 'rudder-ui-md-transform',
		enforce: 'pre',
		async transform(code, id) {
			if (!id.endsWith('.md')) return

			const componentId = path.basename(id, '.md')
			const append: Append = {
				headers: [],
				footers: [],
				scriptSetups: [
					`const demos = import.meta.globEager('../../examples/${componentId}/*.vue')`,
				],
			}

			code = transformVpScriptSetup(code, append)

			const pattern = `{${[...['en-US', 'zh-CN'], 'zh-CN'].join(',')}}/component`

			const compPaths = await glob(pattern, {
				cwd: path.resolve(__dirname, '../../../site'),
				absolute: true,
				onlyDirectories: true,
			})

			// if (compPaths.some((compPath) => id.startsWith(compPath))) {
			// 	code = transformComponentMarkdown(id, componentId, code, append)
			// }

			return combineMarkdown(
				code,
				[combineScriptSetup(append.scriptSetups), ...append.headers],
				append.footers,
				componentId
			)
		},
	}
}

const vpScriptSetupRE = /<vp-script\s(.*\s)?setup(\s.*)?>([\s\S]*)<\/vp-script>/

const transformVpScriptSetup = (code: string, append: Append) => {
	const matches = code.match(vpScriptSetupRE)

	if (matches) code = code.replace(matches[0], '')
	const scriptSetup = matches?.[3] ?? ''
	if (scriptSetup) append.scriptSetups.push(scriptSetup)
	return code
}

export const REPO_OWNER = 'element-plus'
export const REPO_NAME = 'element-plus'
export const REPO_PATH = `${REPO_OWNER}/${REPO_NAME}`
export const REPO_BRANCH = 'dev'

const GITHUB_BLOB_URL = `https://github.com/${REPO_PATH}/blob/${REPO_BRANCH}`
const GITHUB_TREE_URL = `https://github.com/${REPO_PATH}/tree/${REPO_BRANCH}`

const transformComponentMarkdown = (
	id: string,
	componentId: string,
	code: string,
	append: Append
) => {
	const docUrl = `${GITHUB_BLOB_URL}/site/en-US/component/${componentId}.md`
	const componentUrl = `${GITHUB_TREE_URL}/packages/components/${componentId}`
	const componentPath = path.resolve(
		path.resolve(__dirname, '../../../site'),
		`packages/components/${componentId}`
	)

	const isComponent = fs.existsSync(componentPath)

	const sourceSection = `
  ##
  
  `

	const contributorsSection = `
  ## 
  
  <Contributors id="${componentId}" />
  `

	append.footers.push(sourceSection, isComponent ? contributorsSection : '')

	return code
}

const combineScriptSetup = (codes: string[]) =>
	`\n<script setup>
${codes.join('\n')}
</script>
`

const combineMarkdown = (
	code: string,
	headers: string[],
	footers: string[],
	id: string
) => {
	const frontmatterEnds = code.indexOf('---\n\n') + 4
	const firstSubheader = code.search(/\n## \w/)
	const sliceIndex = firstSubheader < 0 ? frontmatterEnds : firstSubheader

	if (headers.length > 0)
		code = code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex)
	code += footers.join('\n')

	return `${code}\n`
}
