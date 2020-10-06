<demo>
    测试demo
</demo>
<template>
<Button>你好</Button>
<Button size="big">你好</Button>
<Button size="small">你好</Button>
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
