<script setup lang="ts">
import { useData, useRouter } from 'vitepress'
import { onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useDirect } from '../../utils/direct'
const themeData = useData()
const base = themeData.site.value.base

const { Layout } = DefaultTheme
const { route } = useRouter()

const { homeUrl, direct } = useDirect()

onMounted(() => {
	if (route.path === base) {
		direct()
	}

	const logTitle = document.querySelector('.VPNavBarTitle > .title')
	logTitle?.setAttribute('href', homeUrl)
})
</script>

<template>
	<Layout />
</template>
