import { withInstall, withNoopInstall } from '@rudder-ui/utils'
import Tabs from './src/Tabs.vue'
import TabItem from './src/TabItem.vue'

export const RTabs = withInstall(Tabs, {
	TabItem,
})

export default RTabs

export const RTabItem = withNoopInstall(TabItem)

export type TabsInstance = InstanceType<typeof Tabs>
export type TabItemInstance = InstanceType<typeof TabItem>
