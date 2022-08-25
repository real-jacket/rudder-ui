<demo>
   <title>基本</title>
   <p>最简单的用法</p>
</demo>
<template>
	<Switch v-model:value="checked" />
</template>

<script>
import { ref } from 'vue'
import { Switch } from 'rudder-ui'
export default {
	components: {
		Switch,
	},
	setup() {
		const checked = ref(false)
		return {
			checked,
		}
	},
}
</script>
