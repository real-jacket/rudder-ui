import type { Directive } from 'vue'

type WaveDirectiveBinding = {
	dom: HTMLElement
	click?: EventListener
	animationStart?: EventListener
	animationsEnd?: EventListener
}

const directiveContext: Record<string, WaveDirectiveBinding> = {}

const datasetName = 'directive_wave'

const wave: Directive = {
	mounted(el: HTMLDivElement) {
		const waveDom = document.createElement('div')
		const key = new Date().valueOf().toString()
		el.dataset[datasetName] = key
		directiveContext[key] = {
			dom: waveDom,
		}
		el.classList.add('wave-container')
		el.appendChild(waveDom)
		waveDom.classList.add('wave-dom')

		function waveClick() {
			waveDom.classList.add('animate')
		}

		function animationsEnd() {
			waveDom.classList.remove('animate')
		}

		directiveContext[key].click = waveClick
		directiveContext[key].animationsEnd = animationsEnd

		el.addEventListener('click', waveClick)
		waveDom.addEventListener('animationend', animationsEnd)
	},
	unmounted(el: HTMLDivElement) {
		const { dom, click, animationsEnd } =
			directiveContext[el.dataset[datasetName]]
		el.removeEventListener('click', click)
		dom.removeEventListener('animationend', animationsEnd)
		el.removeChild(dom)
	},
}

export default wave
