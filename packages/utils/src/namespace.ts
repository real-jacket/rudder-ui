import { BASECLASS } from './constant'

export function nameSpaceClass(...names: string[]): string {
	return [BASECLASS, ...names].filter(Boolean).join('-')
}
