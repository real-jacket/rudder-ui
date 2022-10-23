import { withInstall, withNoopInstall } from '@rudder-ui/utils'

import Container from './src/container.vue'
import Header from './src/header.vue'
import Aside from './src/aside.vue'
import Footer from './src/footer.vue'
import Main from './src/main.vue'

export const RContainer = withInstall(Container, {
	Header,
	Aside,
	Footer,
	Main,
})

export default RContainer
export const RHeader = withNoopInstall(Header)
export const RAside = withNoopInstall(Aside)
export const RFooter = withNoopInstall(Footer)
export const RMain = withNoopInstall(Main)

export type ContainerInstance = InstanceType<typeof Container>
