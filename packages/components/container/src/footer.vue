<template>
	<footer :style="style" :class="nameSpaceClass('footer')">
		<slot />
	</footer>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import { nameSpaceClass } from '@rudder-ui/utils'

defineOptions({
	name: 'RFooter',
})

const props = defineProps<{
	height?: string
}>()

const style = computed(
	() => (props.height ? { height: props.height } : {}) as CSSProperties
)
</script>
