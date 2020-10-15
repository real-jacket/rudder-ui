<demo>
    <title>按钮尺寸</title>
    <p>
        按钮有大、中、小三种尺寸。
        通过设置 size 为 large、small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
    </p>
</demo>
<template>
<Button size="big">你好</Button>
<Button>你好</Button>
<Button size="small">你好</Button>
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
