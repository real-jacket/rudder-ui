<template>
	<Switch v-model:value="checked" />
</template>

<script lang="ts">
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
