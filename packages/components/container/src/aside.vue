<template>
	<aside :style="style" :class="nameSpaceClass('aside')">
		<slot />
	</aside>
</template>
<script lang="ts" setup>
import { computed } from 'vue'

import type { CSSProperties } from 'vue'
import { nameSpaceClass } from '@rudder-ui/utils'

defineOptions({
	name: 'RAside',
})

const props = defineProps<{
	width: string
}>()

const style = computed(
	() => (props.width ? { width: props.width } : {}) as CSSProperties
)
</script>
