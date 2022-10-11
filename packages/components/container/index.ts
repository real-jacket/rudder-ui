import Container from './src/container.vue'

import Header from './src/header.vue'
import Aside from './src/aside.vue'
import Footer from './src/footer.vue'
import Main from './src/main.vue'

Object.entries({ Header, Aside, Footer, Main }).forEach(([key, Comp]) => {
	Container[key] = Comp
})

export default Container
