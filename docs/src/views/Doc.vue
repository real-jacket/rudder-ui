<template>
	<TopNav :toggleVisible="toggleVisible" />
	<div class="layout">
		<aside class="aside" v-if="menueVisible">
			<h2>文档</h2>
			<ol class="nav">
				<li>
					<router-link to="/doc/intro">介绍</router-link>
				</li>
				<li>
					<router-link to="/doc/install">安装</router-link>
				</li>
				<li>
					<router-link to="/doc/start">快速开始</router-link>
				</li>
			</ol>
			<h2>基础组件</h2>
			<ol class="nav">
				<li>
					<router-link to="/doc/switch">Switch 组件</router-link>
				</li>
				<li>
					<router-link to="/doc/button">Button 组件</router-link>
				</li>
				<li>
					<router-link to="/doc/dialog">Dialog 组件</router-link>
				</li>
				<li>
					<router-link to="/doc/tabs">Tabs 组件</router-link>
				</li>
			</ol>
		</aside>
		<main class="content">
			<router-view></router-view>
		</main>
	</div>
</template>

<script lang="ts">
import { inject, ref, Ref } from 'vue'
import TopNav from '../components/TopNav.vue'
export default {
	name: 'Doc',
	components: {
		TopNav,
	},
	setup() {
		const menueVisible = inject<Ref<Boolean>>('menueVisible')
		const toggleVisible = ref(true)
		return {
			menueVisible,
			toggleVisible,
		}
	},
}
</script>

<style lang="scss" scoped>
$line: #f0f0f0;
$green: #1e9072;
$background: #89cebc;

.layout {
	display: flex;
	margin-top: 30px;
	min-height: calc(100vh - 100px);

	aside {
		min-width: 150px;
		flex-shrink: 0;
		position: relative;
		z-index: 999;
		border-right: 1px solid $line;
		background: white;

		> h2 {
			margin: 4px 40px;
			padding: 20px 0;
			border-bottom: 1px solid $line;
		}

		> ol {
			> li {
				&:hover {
					color: $green;
				}

				a {
					padding: 16px 40px;
					min-width: 14em;
					display: inline-block;
					height: 100%;
					width: 100%;
				}

				> .router-link-exact-active {
					position: relative;
					background: rgba($color: $background, $alpha: 0.6);
					display: inline-block;
					color: $green;

					&:after {
						display: block;
						position: absolute;
						content: '';
						right: 0;
						top: 0;
						width: 4px;
						height: 100%;
						background: $green;
					}
				}
			}
		}
	}

	.content {
		flex-grow: 1;
		padding-left: 16px;
		padding-right: 16px;
		margin: 10px 0 0 10px;

		@media (max-width: 500px) {
			margin-left: 0;
		}
	}

	@media (max-width: 500px) {
		aside {
			position: fixed;
			top: 0;
			left: 0;
			bottom: 0;
			padding-top: 70px;
		}
	}
}
</style>
