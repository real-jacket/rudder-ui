<demo>
    测试demo
</demo>
<template>
<div>
    <Button level="main">主要按钮</Button>
    <Button>一般按钮</Button>
    <Button level="danger">危险按钮</Button>
</div>
<div>
    <Button theme='link' level="main">主要链接按钮</Button>
    <Button theme='link'>一般链接按钮</Button>
    <Button theme='link' level="danger">危险链接按钮</Button>
</div>
<div>
    <Button theme='text' level="main">主要文字按钮</Button>
    <Button theme='text'>一般文字按钮</Button>
    <Button theme='text' level="danger">危险文字按钮</Button>
</div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
export default {
    components: {
        Button
    },
    setup() {
        const click = () => {
            console.log('hi')
        }

        return {
            click
        }
    }
}
</script>
