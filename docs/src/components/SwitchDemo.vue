<template>
	<h1>Switch 开关</h1>
	<Demo :component="SwitchDemo1"></Demo>
</template>

<script lang="ts">
import { ref } from 'vue'
import { Switch } from 'rudder-ui'
import SwitchDemo1 from './SwitchDemos/Switc1.demo.vue'
export default {
	components: {
		Switch,
	},
	setup() {
		const checked = ref(false)
		return {
			checked,
			SwitchDemo1,
		}
	},
}
</script>
