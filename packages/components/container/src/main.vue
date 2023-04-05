<template>
	<main :class="nameSpaceClass('main')">
		<slot />
	</main>
</template>

<script lang="ts" setup>
import { nameSpaceClass } from '@rudder-ui/utils'

defineOptions({
	name: 'RMain',
})
</script>
<style lang="scss">
.rudder-main {
	flex: 1;
	flex-basis: auto;
	overflow: auto;
	box-sizing: border-box;
}
</style>
