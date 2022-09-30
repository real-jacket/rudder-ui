<script setup lang="ts">
import { computed, ref, watch, nextTick } from 'vue'
import { useToggle, useClipboard, usePermission } from '@vueuse/core'
import Example from './demo/vp-example.vue'
import SourceCode from './demo/vp-source.vue'

const props = defineProps<{
	demos: object
	source: string
	path: string
	rawSource: string
	description?: string
}>()

const { copy, isSupported } = useClipboard({
	source: decodeURIComponent(props.rawSource),
	read: false,
})

const copyCode = async () => {
	if (!isSupported) {
		window.alert('复制失败，暂不支持～')
	}
	try {
		await copy()
		window.alert('复制成功')
	} catch (error: any) {
		window.alert(error.message)
	}
}

const decodedDescription = computed(() =>
	decodeURIComponent(props.description!)
)

const [sourceVisible, toggleSourceVisible] = useToggle()

const formatPathDemos = computed(() => {
	const demos = {}

	Object.keys(props.demos).forEach((key) => {
		demos[key.replace('../../examples/', '').replace('.vue', '')] =
			props.demos[key].default
	})

	return demos
})

const codeArea = ref<InstanceType<typeof SourceCode>>()
const codeContainer = ref<HTMLElement>()

watch(sourceVisible, async (v) => {
	await nextTick()
	if (v) {
		codeContainer.value!.style.height = codeArea.value!.$el.scrollHeight + 'px'
	} else {
		codeContainer.value!.style.height = '0px'
	}
})
</script>

<template>
	<ClientOnly>
		<p text="sm" v-html="decodedDescription" />

		<div class="example">
			<Example :file="path" :demo="formatPathDemos[path]" />

			<div class="divider"></div>

			<div class="op-btns">
				<span class="icon" @click="copyCode">
					<i-ri-file-copy-line />
				</span>

				<span class="icon" @click="toggleSourceVisible(!sourceVisible)">
					<i-rudder-doc-expand v-show="!sourceVisible" />
					<i-rudder-doc-unexpand v-show="sourceVisible" />
				</span>
			</div>

			<Transition name="slide" ref="codeContainer">
				<SourceCode ref="codeArea" v-show="sourceVisible" :source="source" />
			</Transition>

			<div
				v-show="sourceVisible"
				class="example-float-control"
				@click="toggleSourceVisible(false)"
			>
				<span class="icon" :style="{ marginRight: '8px' }">
					<i-bxs-up-arrow />
				</span>
				<span class="hide-text">隐藏源代码</span>
			</div>
		</div>
	</ClientOnly>
</template>
<style scoped lang="scss">
.example {
	border: 1px solid var(--border-color);
	border-radius: var(--border-radius);

	.divider {
		height: 1px;
		border-top: 1px solid var(--border-color);
	}

	.icon {
		cursor: pointer;
		margin: 0 0.5rem;
		opacity: 0.6;
		&:hover {
			opacity: 1;
		}
	}

	.op-btns {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 0.5rem;
		height: 2.5rem;
		color: var(--text-color-lighter);

		> img {
			opacity: 0.55;
			height: 18px;
			width: 18px;
		}
	}

	.slide-enter-active,
	.slide-leave-active {
		transition: height 0.25s ease-in-out;
	}

	.slide-enter-from,
	.slide-leave-to {
		height: 0;
	}

	.example-float-control {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 44px;
		border-top: 1px solid var(--border-color);
		position: sticky;
		cursor: pointer;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
		background: var(--vp-c-bg);

		.hide-text {
			opacity: 0.6;
		}

		&:hover {
			.hide-text,
			.icon {
				opacity: 1;
			}
		}
	}
}
</style>
