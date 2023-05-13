<template>
	<TopNav />
	<div class="wrapper">
		<div class="banner">
			<h1>Rudder UI</h1>
			<h2>一个简洁、高效、轻量、友好的 UI 组件库</h2>
			<p class="actions">
				<a href="https://github.com/real-jacket/rudder-ui" target="_blank"
					>Github</a
				>
				<router-link to="/doc">快速起步</router-link>
			</p>
			<ul class="feature">
				<li>
					<svg class="icon">
						<use xlink:href="#icon-vue"></use>
					</svg>
					<div>
						<h2>基于Vue3</h2>
						<p>使用了 Vue3 的最新特性 Composition API</p>
					</div>
				</li>
				<li>
					<svg class="icon">
						<use xlink:href="#icon-ts"></use>
					</svg>
					<div>
						<h2>基于Typescript</h2>
						<p>源代码使用 Ts 进行开发 （非严格检查）</p>
					</div>
				</li>
				<li>
					<svg class="icon">
						<use xlink:href="#icon-dengpao"></use>
					</svg>
					<div>
						<h2>代码简单易读</h2>
						<p>每个组件的代码及其简洁，易于理解</p>
					</div>
				</li>
			</ul>
		</div>
		<img src="../assets/team.svg" />
	</div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
	name: 'Home',
	components: {
		TopNav,
	},
}
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding-left: 60px;

	.banner {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		height: 100%;

		> h1 {
			font-size: 52px;
			font-weight: bolder;
		}

		> h2 {
			margin-top: 10px;
		}

		.actions {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;

			> a {
				padding: 0 50px;
				font-size: 24px;
				height: 60px;
				width: 200px;
				color: white;
				background: #89cebc;
				margin-right: 20px;
				margin-top: 20px;
				border-radius: 0 30px 30px 30px;
				display: flex;
				align-items: center;
				justify-content: center;

				&:hover,
				&:active {
					background: #41b093;
				}
			}
		}

		.feature {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			align-items: center;
			margin-top: 20px;

			li {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				margin-right: 20px;
				margin-top: 40px;
				width: 24em;
			}

			svg {
				height: 40px;
				width: 40px;
				margin-right: 10px;
			}
		}
	}

	> img {
		width: 100%;
		max-width: 800px;
	}

	@media (max-width: 960px) {
		flex-wrap: wrap;
		justify-content: center;
		padding: 20px;

		.banner {
			align-items: center;

			> h2 {
				padding: 20px;
			}

			.feature {
				justify-content: center;

				li {
					margin: 0;
					margin-top: 20px;
					padding: 0 20px;
				}
			}
		}

		> img {
			margin: 0;
			margin-top: 50px;
		}
	}
}
</style>
