<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
	source: {
		type: String,
		required: true,
	},
})

const decoded = computed(() => {
	return decodeURIComponent(props.source)
})
</script>
<template>
	<div class="example-source-wrapper">
		<div class="example-source language-vue" v-html="decoded" />
	</div>
</template>

<style scoped lang="scss">
.example-source-wrapper {
	overflow: hidden;
	.language-vue {
		border-radius: 0;
		margin: 0;
		background: var(--prism-background);
	}
}
</style>
