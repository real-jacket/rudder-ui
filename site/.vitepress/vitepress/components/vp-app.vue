<script setup lang="ts">
import { useData, useRouter } from 'vitepress'
import { onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
const { route, go } = useRouter()
const themeData = useData()
const lang = themeData.lang.value

onMounted(() => {
	if (route.path === '/') {
		go(`/${lang}/`)
	}

	const logTitle = document.querySelector('.VPNavBarTitle > .title')
	logTitle?.setAttribute('href', `/${lang}/`)
})
</script>

<template>
	<Layout />
</template>
