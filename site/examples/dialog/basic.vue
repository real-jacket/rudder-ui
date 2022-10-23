<template>
	<r-button level="main" @click="toggle">open Dialog</r-button>
	<r-dialog
		title="标题"
		v-model:visible="visible"
		:closeOnClickMask="false"
		:ok="ok"
	>
		<template v-slot:title>
			<h1>title 具名插槽</h1>
		</template>
		<p>第一行内容。。。。</p>
		<p>第二行内容。。。。</p>
		<p>第三行内容。。。。</p>
	</r-dialog>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
	setup() {
		const visible = ref(false)
		const toggle = () => {
			visible.value = !visible.value
		}
		const ok = () => {
			return true
		}
		return {
			visible,
			toggle,
			ok,
		}
	},
}
</script>
