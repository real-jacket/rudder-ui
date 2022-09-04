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

	const element = document.querySelector('.VPNavBarTitle > .title')
	element!.setAttribute('href', '/zh-CN/')
})
</script>

<template>
	<Layout />
</template>
