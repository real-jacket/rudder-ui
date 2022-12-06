<template>
	<teleport to="body">
		<div v-if="visible">
			<div
				v-if="visible"
				class="rudder-dialog-mask"
				@click="closeOnClikMask"
			></div>
			<div class="rudder-dialog-wrapper">
				<Transition v-bind="transitionProps">
					<div
						class="rudder-dialog"
						v-show="animatedVisible"
						key="dialog-element"
						role="document"
						:style="contentStyleRef"
						ref="dialogRef"
					>
						<div class="rudder-dialog-content">
							<header>
								<slot name="title">{{ title }}</slot>
								<span class="rudder-dialog-close" @click="close"></span>
							</header>
							<main>
								<slot name="content" />
								<slot />
							</main>
							<footer>
								<Button @click="cancel">cancel</Button>
								<Button level="main" @click="ok">ok</Button>
							</footer>
						</div>
					</div>
				</Transition>
			</div>
		</div>
	</teleport>
</template>

<script lang="ts">
import {
	defineComponent,
	ref,
	nextTick,
	computed,
	CSSProperties,
	TransitionProps,
	watch,
} from 'vue'
import Button from '../../button/src/Button.vue'
import { offset } from './utils'

export default defineComponent({
	name: 'Dialog',
	components: {
		Button,
	},
	props: {
		title: {
			type: String,
			default: '提示',
		},
		width: {
			type: [String, Number],
			default: 520,
		},
		height: {
			type: [String, Number],
		},
		visible: {
			type: Boolean,
			default: false,
		},
		closeOnClickMask: {
			type: Boolean,
			default: true,
		},
		ok: Function,
		cancel: Function,
		afterClose: Function,
		mousePosition: {
			type: Object,
			required: false,
			default: null,
		},
	},
	setup(props, context) {
		const animatedVisible = ref(props.visible)
		watch(
			() => props.visible,
			() => {
				if (props.visible) {
					animatedVisible.value = true
				}
			},
			{ flush: 'post' }
		)

		const onVisibleChange = (visible: boolean) => {
			context.emit('update:visible', visible)
		}

		const close = () => {
			animatedVisible.value = false
		}

		const ok = () => {
			props.ok?.()
			close()
		}
		const cancel = () => {
			props.cancel?.()
			close()
		}

		const closeOnClikMask = () => {
			if (props.closeOnClickMask) {
				close()
			}
		}

		const dialogRef = ref<HTMLDivElement>()
		const transformOrigin = ref<string>()

		const contentStyleRef = computed(() => {
			const contentStyle: CSSProperties = {}
			const { width, height } = props
			if (width !== undefined) {
				contentStyle.width = typeof width === 'number' ? `${width}px` : width
			}
			if (height !== undefined) {
				contentStyle.height = typeof height === 'number' ? `${height}px` : height
			}
			if (transformOrigin.value) {
				contentStyle.transformOrigin = transformOrigin.value
			}
			return contentStyle
		}, {})

		const onPrepare = () => {
			nextTick(() => {
				if (dialogRef.value) {
					const elementOffset = offset(dialogRef.value)
					const { left: x, top: y } = elementOffset
					transformOrigin.value = props.mousePosition
						? `${props.mousePosition.x - x}px ${props.mousePosition.y - y}px`
						: ''
				}
			})
		}

		const transitionName = 'rudder-dialog-zoom'

		const transitionProps: TransitionProps = {
			name: transitionName,
			appear: true,
			enterFromClass: `${transitionName}-enter ${transitionName}-enter-prepare`,
			enterActiveClass: `${transitionName}-enter ${transitionName}-enter-prepare`,
			enterToClass: `${transitionName}-enter ${transitionName}-enter-active`,
			leaveFromClass: ` ${transitionName}-leave`,
			leaveActiveClass: `${transitionName}-leave ${transitionName}-leave-active`,
			leaveToClass: `${transitionName}-leave ${transitionName}-leave-active`,
			onBeforeEnter: onPrepare,
			onAfterEnter: () => {
				onVisibleChange(true)
			},
			onAfterLeave: () => {
				onVisibleChange(false)
				props.afterClose?.()
			},
		}

		return {
			close,
			ok,
			cancel,
			closeOnClikMask,
			onPrepare,
			dialogRef,
			contentStyleRef,
			transitionProps,
			animatedVisible,
		}
	},
})
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
$ease-in-back: ease-in;
$ease-out-back: ease-out;
$animation-duration-slow: 0.3s; // Modal
$ease-out-circ: cubic-bezier(0.08, 0.82, 0.17, 1);
$ease-in-out-circ: cubic-bezier(0.78, 0.14, 0.15, 0.86);
$duration: 0.25s;

@keyframes antZoomIn {
	0% {
		transform: scale(0.2);
		opacity: 0;
	}

	100% {
		transform: scale(1);
		opacity: 1;
	}
}

@keyframes antZoomOut {
	0% {
		transform: scale(1);
	}

	100% {
		transform: scale(0.2);
		opacity: 0;
	}
}

.rudder-dialog {
	background: white;
	border-radius: $radius;
	border: 1px solid $border-color;
	box-shadow: 0 0 3px fade_out(black, 0.5);
	display: block;
	margin: auto;
	position: relative;
	top: 100px;
	width: auto;
	max-width: calc(100vw - 32px);

	@media (max-width: 960px) {
		min-width: 50vw;
	}

	&-zoom-enter,
	&-zoom-appear {
		transform: scale(0);
		opacity: 0;
		animation-timing-function: $ease-out-circ;
		animation-duration: $duration;
		animation-fill-mode: both;

		&-prepare {
			transform: none;
		}
	}

	&-zoom-appear,
	&-zoom-enter {
		&-active {
			animation-name: antZoomIn;
		}
	}

	&-zoom-leave {
		animation-timing-function: $ease-in-out-circ;
		animation-duration: $duration;
		animation-fill-mode: both;
		&-active {
			animation-name: antZoomOut;
			pointer-events: none;
		}
	}

	&-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100%;
		background: fade_out(black, 0.5);
		z-index: 999;
	}

	&-wrapper {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		overflow: auto;
		outline: 0;
		z-index: 1000;
	}

	&-content {
		> header {
			padding: 12px 16px;
			border-bottom: 1px solid $border-color;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 20px;
		}

		> main {
			padding: 12px 16px;
		}

		> footer {
			border-top: 1px solid $border-color;
			padding: 12px 16px;
			text-align: right;
		}
	}

	&-close {
		position: relative;
		display: inline-block;
		width: 16px;
		height: 16px;
		cursor: pointer;

		&::before,
		&::after {
			content: '';
			position: absolute;
			height: 1px;
			background: black;
			width: 100%;
			top: 50%;
			left: 50%;
		}

		&::before {
			transform: translate(-50%, -50%) rotate(-45deg);
		}

		&::after {
			transform: translate(-50%, -50%) rotate(45deg);
		}
	}
}
</style>
