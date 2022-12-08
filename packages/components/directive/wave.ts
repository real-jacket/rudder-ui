import type { Directive, DirectiveBinding } from 'vue'

type WaveDirectiveBinding = DirectiveBinding & {
	dom: HTMLElement
	click: EventListener
	animationStart: EventListener
	animationsEnd: EventListener
}

const wave: Directive = {
	mounted(el: HTMLDivElement, binding: WaveDirectiveBinding) {
		const waveDom = document.createElement('div')
		binding.dom = waveDom
		el.classList.add('wave-container')
		el.appendChild(waveDom)

		waveDom.classList.add('wave-dom')

		function waveClick() {
			waveDom.classList.add('animate')
		}

		function animationsEnd() {
			waveDom.classList.remove('animate')
		}

		binding.animationsEnd = animationsEnd

		el.addEventListener('click', waveClick)
		waveDom.addEventListener('animationend', animationsEnd)
	},
	unmounted(el: HTMLDivElement, binding: WaveDirectiveBinding) {
		const { dom, click, animationsEnd } = binding
		el.removeEventListener('click', click)
		dom.removeEventListener('animationend', animationsEnd)
	},
}

export default wave
