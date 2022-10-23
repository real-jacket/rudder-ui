<template>
	<div class="rudder-tabs">
		<div class="rudder-tabs-nav" ref="nav">
			<div
				class="rudder-tabs-nav-item"
				v-for="(t, index) in titles"
				:ref="
					(el) => {
						if (t === selected) {
							selectedItem = el
						}
					}
				"
				:class="{ selected: selected === t }"
				@click="select(t)"
				:key="index"
			>
				{{ t }}
			</div>
			<div class="rudder-tabs-nav-indicator" ref="indicator"></div>
		</div>
		<div class="rudder-tabs-content">
			<component :key="current.props.title" :is="current" />
		</div>
	</div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watchEffect, defineComponent } from 'vue'
import TabItem from './TabItem.vue'
export default defineComponent({
	name: 'RTabs',
	props: {
		selected: String,
	},
	setup(props, context) {
		const children = context.slots.default?.() || []
		children.forEach((child) => {
			if (child.type !== TabItem) {
				throw ''
			}
		})
		const titles = children.map((child) => child.props?.title)
		const current = computed(() => {
			return children.find((child) => child.props?.title === props.selected)
		})
		const select = (title: string) => {
			context.emit('update:selected', title)
		}

		const nav = ref<HTMLDivElement>()
		const selectedItem = ref<HTMLDivElement>()
		const indicator = ref<HTMLDivElement>()

		onMounted(() => {
			watchEffect(
				() => {
					const { width, left: left2 } = selectedItem.value!.getBoundingClientRect()
					indicator.value!.style.width = width + 'px'

					const { left: left1 } = nav.value!.getBoundingClientRect()
					const left = left2 - left1
					indicator.value!.style.left = left + 'px'
				},
				{
					flush: 'post',
				}
			)
		})

		return {
			children,
			titles,
			current,
			select,
			nav,
			selectedItem,
			indicator,
		}
	},
})
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.rudder-tabs {
	&-nav {
		display: flex;
		color: $color;
		border-bottom: 1px solid $border-color;

		&-item {
			padding: 8px 0;
			margin: 0 16px;
			cursor: pointer;

			&:first-child {
				margin-left: 0;
			}

			&.selected {
				color: $blue;
			}
		}

		position: relative;

		&-indicator {
			position: absolute;
			bottom: -1px;
			left: 0;
			height: 3px;
			width: 20px;
			background: $blue;
			transition: all 250ms ease-in-out;
		}
	}

	&-content {
		padding: 8px 0;
	}
}
</style>
