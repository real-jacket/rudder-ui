import { createApp, h } from 'vue'
import Dialog from './Dialog.vue'

export const openDialog = (options) => {
	const { title, content, cancel, ok } = options

	const div = document.createElement('div')
	document.body.appendChild(div)

	const app = createApp({
		render() {
			return h(
				Dialog,
				{
					visible: true,
					'onUpdate:visible': () => {
						close()
					},
					cancel: () => {
						cancel?.()
						close()
					},
					ok: () => {
						if (ok?.() === true) {
							close()
						}
					},
				},
				{
					title,
					content,
				}
			)
		},
	})

	const close = () => {
		app.unmount(div)
		div.remove()
	}

	app.mount(div)
}
