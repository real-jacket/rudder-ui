<template>
	<header :style="style" :class="nameSpaceClass('header')">
		<slot />
	</header>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import { nameSpaceClass } from '@rudder-ui/utils'

defineOptions({
	name: 'Header',
})

const props = defineProps<{
	height?: string
}>()

const style = computed(
	() => (props.height ? { height: props.height } : {}) as CSSProperties
)
</script>
