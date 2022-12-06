import { createApp, h } from 'vue'
import Dialog from './DialogWrap'

export interface DialogOption {
	title: string
	content: any
	cancel: () => void
	ok: () => boolean
	afterClose: () => boolean
}

export const openDialog = (options: DialogOption) => {
	const { title, content, cancel, ok, afterClose } = options

	const div = document.createElement('div')
	document.body.appendChild(div)

	const app = createApp({
		render() {
			return h(
				Dialog,
				{
					visible: true,
					cancel: () => {
						cancel?.()
					},
					ok: () => {
						ok?.()
					},
					afterClose: () => {
						close()
						afterClose?.()
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
		app.unmount()
		div.remove()
	}

	app.mount(div)
}
