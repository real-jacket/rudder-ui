<script setup lang="ts">
import { useData, useRouter } from 'vitepress'
import { onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
const { route, go } = useRouter()
const themeData = useData()
const lang = themeData.lang.value
const base = themeData.site.value.base

const homeUrl = `${base}${lang}/`

onMounted(() => {
	if (route.path === '/') {
		go(homeUrl)
	}

	const logTitle = document.querySelector('.VPNavBarTitle > .title')
	logTitle?.setAttribute('href', homeUrl)
})
</script>

<template>
	<Layout />
</template>
