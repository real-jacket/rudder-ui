<template>
	<r-tabs v-model:selected="selected">
		<r-tab-item title="标题一">标题一的内容</r-tab-item>
		<r-tab-item title="标题二比较长一点">标题二的内容</r-tab-item>
		<r-tab-item title="标题三">标题三的内容</r-tab-item>
	</r-tabs>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
	setup(props, context) {
		const selected = ref('标题一')
		return {
			selected,
		}
	},
}
</script>
