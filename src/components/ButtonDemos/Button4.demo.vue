<demo>
    测试demo
</demo>
<template>
<Button disabled>按钮</Button>
<Button theme='link' disabled>链接按钮</Button>
<Button theme='text' disabled>文字按钮</Button>
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
