<script setup lang="ts">
defineProps({
	file: {
		type: String,
		required: true,
	},
	demo: {
		type: Object,
		required: true,
	},
})
</script>

<template>
	<div class="example-showcase">
		<ClientOnly>
			<component :is="demo" v-if="demo" v-bind="$attrs"></component>
		</ClientOnly>
	</div>
</template>

<style scoped lang="scss">
.example-showcase {
	padding: 1.5rem;
	margin: 0.5px;
}
</style>
