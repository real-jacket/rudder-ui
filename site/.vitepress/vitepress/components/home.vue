<template>
	<div class="wrapper">
		<h1>Rudder UI</h1>
		<h2>一个简洁、高效、轻量、友好的 UI 组件库</h2>
		<p class="actions">
			<a class="quick-start" @click="direct('/guide/quickstart')"
				>快速起步 <i-rudder-doc-right-arrow class="arrow" />
			</a>
			<a
				class="github"
				href="https://github.com/real-jacket/rudder-ui"
				target="_blank"
				>Github</a
			>
		</p>
		<ul class="feature">
			<li>
				<i-rudder-doc-vue />
				<div>
					<h2>基于Vue3</h2>
					<p>使用了 Vue3 的最新特性 Composition API</p>
				</div>
			</li>
			<li>
				<i-rudder-doc-typescript />
				<div>
					<h2>基于Typescript</h2>
					<p>源代码使用 Ts 进行开发 （非严格检查）</p>
				</div>
			</li>
			<li>
				<i-rudder-doc-light />
				<div>
					<h2>代码简单易读</h2>
					<p>每个组件的代码及其简洁，易于理解</p>
				</div>
			</li>
		</ul>

		<i-rudder-doc-team class="cover" />
	</div>
</template>

<script setup lang="ts">
import { useDirect } from '../../utils/direct'

const { direct } = useDirect()
</script>

<style lang="scss" scoped>
.wrapper {
	text-align: center;

	> h1 {
		font-size: 52px;
		line-height: normal;
		font-weight: bolder;
	}
	> h2 {
		margin: 24px auto 40px;
	}
	.actions {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		font-size: 16px;

		.quick-start {
			display: flex;
			align-items: center;

			&:hover {
				.arrow {
					transform: translateX(4px);
				}
			}

			.arrow {
				margin-left: 3px;
				transition: all linear 250ms;
			}
		}

		> a {
			padding: 8px 16px;
			background: #89cebc;
			border-radius: 8px;
			color: white;
			margin-right: 18px;
			cursor: pointer;
			&:hover,
			&:active {
				background: #41b093;
			}
		}
		.github {
			background-color: #f1f1f1;
			color: #476582;
			&:hover {
				background-color: #e5e5e5;
			}
		}
	}
	.feature {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
		text-align: left;

		li {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			margin: 0 20px 10px;
			height: 110px;
			width: 280px;
			font-size: 12px;

			h2 {
				margin: 0;
				line-height: 1.8;
				font-size: 14px;
			}
		}
		svg {
			height: 45px;
			width: 45px;
			margin-right: 16px;
			display: normal;
		}
	}
	> .cover {
		width: 100%;
		max-width: 800px;
		margin: 20px auto;
		display: inline;
	}
}
</style>
