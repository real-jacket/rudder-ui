import Switch from './switch/Switch.vue'
import Button from './button/Button.vue'
import Tabs from './tabs/Tabs.vue'
import TabItem from './tabs/TabItem.vue'
import Dialog from './dialog/Dialog.vue'
import openDialog from './open-dialog/openDialog'
import Container from './container'

import type { App, Plugin } from 'vue'

export { Switch, Button, Tabs, TabItem, Dialog, openDialog, Container }

const components = [Switch, Button, Tabs, TabItem, Dialog, openDialog]

const rudderPlugin = () => {
	const install = (app: App, ...options: any[]) => {
		components.forEach((c) => {
			app.component(c.name!, c)
		})
	}
	return {
		install,
	}
}

export default rudderPlugin() as Plugin
