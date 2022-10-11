<template>
	<div class="common-layout">
		<Container>
			<Header>header</Header>
			<Container>
				<Aside>aside</Aside>
				<Main>main</Main>
			</Container>
			<Footer>footer</Footer>
		</Container>
	</div>
</template>
<script lang="ts" setup>
import { Container } from 'rudder-ui'

const { Main, Aside, Header, Footer } = Container
</script>
