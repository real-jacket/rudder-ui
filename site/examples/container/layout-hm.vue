<template>
	<div class="common-layout">
		<Container>
			<Header>header</Header>
			<Main>main</Main>
		</Container>
	</div>
</template>
<script lang="ts" setup>
import { Container } from 'rudder-ui'

const { Main, Header } = Container
</script>
