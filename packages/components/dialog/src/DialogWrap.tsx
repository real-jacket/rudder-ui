import { defineComponent } from 'vue'
import Dialog from './Dialog.vue'

let mousePosition: { x: number; y: number } | null = null
const getClickPosition = (e: MouseEvent) => {
	mousePosition = {
		x: e.pageX,
		y: e.pageY,
	}
	// 100ms 内发生过点击事件，则从点击位置动画展示
	// 否则直接 zoom 展示
	// 这样可以兼容非点击方式展开
	const timerId = setTimeout(() => {
		clearTimeout(timerId)
		mousePosition = null
	}, 100)
}

// 只有点击事件支持从鼠标位置动画展开,兼容一下服务端渲染
if (typeof document !== 'undefined') {
	document.documentElement.addEventListener('click', getClickPosition, true)
}

const DialogWrap = defineComponent({
	name: 'RDialog',
	setup(props, { slots }) {
		return () => {
			return (
				<Dialog {...props} mousePosition={mousePosition}>
					{{ ...slots }}
				</Dialog>
			)
		}
	},
})

export default DialogWrap
