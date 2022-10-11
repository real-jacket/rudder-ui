<template>
	<div class="common-layout">
		<Container>
			<Aside>aside</Aside>
			<Main>main</Main>
		</Container>
	</div>
</template>
<script lang="ts" setup>
import { Container } from 'rudder-ui'

const { Main, Aside } = Container
</script>
