<demo>
    <title>按钮状态</title>
    <p>
        按钮有三种状态，通过设置 level 为 main、danger 分别把按钮状态设为主要、危险状态。若不设置 level，则状态默认为一般正常状态 normal。
    </p>
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
