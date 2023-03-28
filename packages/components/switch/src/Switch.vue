<template>
	<button
		class="rudder-switch"
		:class="{ checked: value, square: square }"
		@click="toggle"
	>
		<span></span>
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'RSwitch',
	props: {
		value: Boolean,
		square: Boolean,
	},
	setup(props, context) {
		const toggle = () => {
			context.emit('update:value', !props.value)
		}
		return {
			toggle,
		}
	},
})
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.rudder-switch {
	height: $h;
	width: $h * 2;
	border: none;
	border-radius: calc($h/2);
	position: relative;
	background: #bfbfbf;

	&:focus {
		outline: none;
	}

	&:active {
		> span {
			width: $h2 + 4px;
		}
	}

	> span {
		position: absolute;
		top: 2px;
		left: 2px;
		height: $h2;
		width: $h2;
		background: white;
		border-radius: calc($h2/2);
		transition: all 250ms ease-in-out;
	}

	&.square {
		border-radius: 4px;

		> span {
			border-radius: 4px;
		}
	}

	&.checked {
		background: #1890ff;

		&:active {
			> span {
				width: $h2 + 4px;
				margin-left: -4px;
			}
		}

		> span {
			left: calc(100% - #{$h2} - 2px);
		}
	}
}
</style>
