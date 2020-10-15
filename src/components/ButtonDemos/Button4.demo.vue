<demo>
    <title>不可用状态</title>
    <p>
        通过设置 disabled 属性（布尔值）来控制按钮的不可点击状态
    </p>
</demo>
<template>
<Button disabled>按钮</Button>
<Button theme='link' disabled>链接按钮</Button>
<Button theme='text' disabled>文字按钮</Button>
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
