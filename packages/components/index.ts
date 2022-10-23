import type { App, Plugin } from 'vue'

import RSwitch from './switch'
import RButton from './button'
import RTabs from './tabs'
import RDialog from './dialog'
import RContainer from './container'

export * from './switch'
export * from './button'
export * from './tabs'
export * from './dialog'
export * from './container'

const components = [RSwitch, RButton, RTabs, RDialog, RContainer] as Plugin[]

const rudderPlugin = () => {
	const install = (app: App, ...options: any[]) => {
		components.forEach((c) => {
			app.use(c)
		})
	}
	return {
		install,
	}
}

export default rudderPlugin() as Plugin
