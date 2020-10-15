<demo>
    <title>加载状态</title>
    <p>
        通过设置 loading 属性（布尔值）来控制按钮的加载状态
    </p>
</demo>
<template>
<Button loading>加载中</Button>
<Button>加载完毕</Button>
</template>

<script lang="ts">
import {Button} from 'rudder-ui'
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
