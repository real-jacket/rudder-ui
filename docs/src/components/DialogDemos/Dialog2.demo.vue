<demo>
    <title>api调用</title>
    <p>
        通过api 的方式打开对话框
    </p>
</demo>
<template>
	<Button level="main" @click="showDialog">open Dialog</Button>
</template>

<script lang="ts">
import { openDialog } from 'rudder-ui'
import { Button } from 'rudder-ui'
export default {
	components: {
		Button,
	},
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
