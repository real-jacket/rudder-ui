<demo>
    <title>按钮类型</title>
    <p>按钮有三种类型：基本按钮、文本按钮和链接按钮。基本按钮在同一个操作区域最多出现一次。</p>
</demo>
<template>
	<Button @click="click">你好</Button>
	<Button theme="link">你好</Button>
	<Button theme="text">你好</Button>
</template>

<script lang="ts">
import { Button } from 'rudder-ui'
export default {
	components: {
		Button,
	},
	setup() {
		const click = () => {
			console.log('hi')
		}

		return {
			click,
		}
	},
}
</script>
