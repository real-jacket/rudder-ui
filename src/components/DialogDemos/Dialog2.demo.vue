<demo>
测试demo
</demo>
<template>
<Button level="main" @click="showDialog">open Dialog</Button>
</template>

<script lang="ts">
import {
    openDialog
} from '../../lib/openDialog'
import Button from '../../lib/Button.vue'
export default {
    components: {
        Button
    },
    setup() {
        const showDialog = () => {
            openDialog({
                title: '标题',
                content: '你好',
                cancel() {
                    console.log('close')
                },
                ok() {
                    console.log('ok')
                    return true
                }
            })
        }
        return {
            showDialog,
        }
    }

}
</script>
