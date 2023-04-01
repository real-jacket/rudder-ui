const typescript = require('rollup-plugin-typescript2')
const { terser } = require('rollup-plugin-terser')
const pkg = require('./package.json')

module.exports = {
	input: 'src/index.ts',
	output: [
		{
			file: pkg.main,
			format: 'cjs',
			sourcemap: true,
			exports: 'auto',
		},
		{
			dir: pkg.module,
			format: 'esm',
			sourcemap: true,
			preserveModules: true,
			chunkFileNames: '[name].js',
		},
	],
	plugins: [
		typescript({
			useTsconfigDeclarationDir: true,
			declarations: true,
			declarationDir: 'es',
		}),
		// 压缩代码
		terser(),
	],
	external: Object.keys(pkg.dependencies || {}),
}
