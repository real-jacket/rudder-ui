<template>
<div class="rudder-mask"></div>
<div>

    <head>标题</head>
    <main>
        <p>这是第一行</p>
        <p>这是第二行</p>
    </main>
    <footer>
        <Button>cancel</Button>
        <Button>ok</Button>
    </footer>
</div>
</template>

<script lang="ts">
import Button from './Button.vue';
export default {
    name: 'Dialog',
    components: {
        Button
    }
}
</script>
