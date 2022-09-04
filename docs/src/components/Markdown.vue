<template>
	<article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
export default {
	name: 'MarkDown',
	props: {
		// path: {
		//     type: String,
		//     required: true
		// }
		content: {
			type: String,
			required: true,
		},
	},
	// setup(props) {
	//     const content = ref < string > (null)
	//     import(props.path).then(result => {
	//         content.value = result.default
	//     })
	//     return {
	//         content
	//     }
	// }
}
</script>
