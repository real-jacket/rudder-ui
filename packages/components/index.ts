import './index.scss'
import type { Plugin, Directive } from 'vue'

import RSwitch from './switch'
import RButton from './button'
import RTabs from './tabs'
import RDialog from './dialog'
import RContainer from './container'
import * as RDirective from './directive'

export const directive = RDirective as Record<string, Directive>

export * from './switch'
export * from './button'
export * from './tabs'
export * from './dialog'
export * from './container'
export * from './directive'

const components = [RSwitch, RButton, RTabs, RDialog, RContainer] as Plugin[]

const rudderPlugin = () => {
	const install: Plugin = (app, ...options) => {
		components.forEach((c) => {
			app.use(c)
		})
	}
	return {
		install,
	}
}

export default rudderPlugin()
