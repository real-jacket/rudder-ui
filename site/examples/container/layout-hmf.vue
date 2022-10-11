<template>
	<div class="common-layout">
		<Container>
			<Header>header</Header>
			<Main>main</Main>
			<Footer>footer</Footer>
		</Container>
	</div>
</template>
<script lang="ts" setup>
import { Container } from 'rudder-ui'

const { Main, Header, Footer } = Container
</script>
