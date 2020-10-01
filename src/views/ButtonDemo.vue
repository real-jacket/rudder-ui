<template>
<div>BUtton 示例</div>
<h1>示例1</h1>
<div>
    <Button>你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
</div>
<h1>示例2</h1>
<div>
    <Button>你好</Button>
    <Button size="big">你好</Button>
    <Button size="small">你好</Button>
</div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
export default {
    name: 'ButtonDemo',
    components: {
        Button
    },
    methods: {
        click() {
            console.log('hi')
        }
    }
}
</script>
