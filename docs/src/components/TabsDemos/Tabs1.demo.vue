<demo>
    <title>基本使用</title>
    <p>默认选中第一项</p>
</demo>
<template>
	<Tabs v-model:selected="selected">
		<TabItem title="标题一">标题一的内容</TabItem>
		<TabItem title="标题二比较长一点">标题二的内容</TabItem>
		<TabItem title="标题三">标题三的内容</TabItem>
	</Tabs>
</template>

<script lang="ts">
import { Tabs } from 'rudder-ui'
import { TabItem } from 'rudder-ui'
import { ref } from 'vue'
export default {
	name: 'TabsDemo',
	components: {
		Tabs,
		TabItem,
	},
	setup(props, context) {
		const selected = ref('标题一')
		return {
			selected,
		}
	},
}
</script>
