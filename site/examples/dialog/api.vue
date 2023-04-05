<template>
	<r-button level="main" @click="showDialog">open Dialog</r-button>
</template>

<script lang="ts">
import { openDialog } from 'rudder-ui'

export default {
	setup() {
		const showDialog = () => {
			openDialog({
				title: '标题',
				content: '你好',
				cancel() {
					console.log('close')
				},
				ok() {
					console.log('ok')
					return true
				},
			})
		}
		return {
			showDialog,
		}
	},
}
</script>
