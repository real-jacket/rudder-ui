<template>
	<section :class="nameContainer(isVertical ? 'vertical' : 'horizontal')">
		<slot />
	</section>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { nameSpaceClass } from '@rudder-ui/utils'

import type { Component, VNode } from 'vue'

const nameContainer = (...names: string[]): string => {
	return nameSpaceClass('container', ...names)
}

defineOptions({
	name: 'RContainer',
})

const props = defineProps<{
	direction?: 'vertical' | 'horizontal'
}>()

const slots = useSlots()

const isVertical = computed(() => {
	if (props.direction === 'vertical') {
		return true
	} else if (props.direction === 'horizontal') {
		return false
	}

	if (slots && slots.default) {
		const vNodes: VNode[] = slots.default()

		return vNodes.some((vNode) => {
			const tag = (vNode.type as Component).name
			return tag === 'RHeader' || tag === 'RFooter'
		})
	}
})
</script>

<style lang="scss">
.rudder-container {
	&-vertical {
		display: flex;
		flex-direction: column;
	}
	&-horizontal {
		display: flex;
		flex-direction: row;
	}
}
</style>
