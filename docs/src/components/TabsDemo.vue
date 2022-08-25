<template>
	<h1>Tabs 标签页</h1>
	<Demo :component="TabsDemo1"></Demo>
</template>

<script lang="ts">
import { ref } from 'vue'
import TabsDemo1 from './TabsDemos/Tabs1.demo.vue'
export default {
	name: 'TabsDemo',
	setup() {
		return {
			TabsDemo1,
		}
	},
}
</script>
