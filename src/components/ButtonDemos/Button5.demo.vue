<demo>
    测试demo
</demo>
<template>
<Button :loading="true">加载中</Button>
<Button>加载完毕</Button>
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
