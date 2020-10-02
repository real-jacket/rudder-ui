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
<h1>示例3</h1>
<div>
    <dir>
        <Button level="main">主要按钮</Button>
        <Button>一般按钮</Button>
        <Button level="danger">危险按钮</Button>
    </dir>
    <dir>
        <Button theme='link' level="main">主要链接按钮</Button>
        <Button theme='link'>一般链接按钮</Button>
        <Button theme='link' level="danger">危险链接按钮</Button>
    </dir>
    <dir>
        <Button theme='text' level="main">主要文字按钮</Button>
        <Button theme='text'>一般文字按钮</Button>
        <Button theme='text' level="danger">危险文字按钮</Button>
    </dir>
</div>
<h1>示例4</h1>
<div>
    <Button disabled>按钮</Button>
    <Button theme='link' disabled>链接按钮</Button>
    <Button theme='text' disabled>文字按钮</Button>
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
