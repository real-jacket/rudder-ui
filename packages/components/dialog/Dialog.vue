<template>
	<template v-if="visible">
		<teleport to="body">
			<div class="rudder-dialog-mask" @click="closeOnClikMask"></div>
			<div class="rudder-dialog-wrapper">
				<div class="rudder-dialog">
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
		</teleport>
	</template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '../button/Button.vue'
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
	},
	setup(props, context) {
		const close = () => {
			context.emit('update:visible', !props.visible)
		}
		const ok = () => {
			if (props.ok?.() === true) {
				close()
			}
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
		return {
			close,
			ok,
			cancel,
			closeOnClikMask,
		}
	},
})
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.rudder-dialog {
	background: white;
	border-radius: $radius;
	border: 1px solid $border-color;
	min-width: 500px;
	box-shadow: 0 0 3px fade_out(black, 0.5);
	display: block;

	@media (max-width: 960px) {
		min-width: 50vw;
	}

	&-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100%;
		background: fade_out(black, 0.5);
		z-index: 1000;
	}

	&-wrapper {
		position: fixed;
		top: 200px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1001;
	}

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
