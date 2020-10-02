<template>
<h1>示例一</h1>
<Button level="main" @click="toggle">open Dialog</Button>
<Dialog title="标题" v-model:visible="visible" :closeOnClickMask='false' :ok="ok">
    <template v-slot:title>
        <h1>title 具名插槽</h1>
    </template>
    <p>第一行内容。。。。</p>
    <p>第二行内容。。。。</p>
    <p>第三行内容。。。。</p>
</Dialog>
<h1>示例二</h1>
<Button level="main" @click="showDialog">open Dialog</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {
    openDialog
} from '../lib/openDialog'
import {
    ref
} from 'vue';
export default {
    name: 'DialogDemo',
    components: {
        Dialog,
        Button
    },
    setup() {
        const visible = ref(false)
        const toggle = () => {
            visible.value = !visible.value
        }
        const ok = () => {
            return true
        }

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
            visible,
            toggle,
            ok,
            showDialog
        }
    }
}
</script>
