<template>
	<div class="common-layout">
		<Container>
			<Header>header</Header>
			<Container>
				<Aside>aside</Aside>
				<Main>main</Main>
			</Container>
		</Container>
	</div>
</template>
<script lang="ts" setup>
import { Container } from 'rudder-ui'

const { Main, Header, Aside } = Container
</script>
