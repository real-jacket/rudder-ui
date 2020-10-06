<demo>
    测试demo
</demo>
<template>
<Button @click="click">你好</Button>
<Button theme="link">你好</Button>
<Button theme="text">你好</Button>
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
