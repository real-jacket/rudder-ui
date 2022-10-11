<template>
	<Tabs v-model:selected="selected">
		<TabItem title="标题一">标题一的内容</TabItem>
		<TabItem title="标题二比较长一点">标题二的内容</TabItem>
		<TabItem title="标题三">标题三的内容</TabItem>
	</Tabs>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
	name: 'TabsDemo',
	setup(props, context) {
		const selected = ref('标题一')
		return {
			selected,
		}
	},
}
</script>
