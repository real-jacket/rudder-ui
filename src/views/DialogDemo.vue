<template>
<Button level="main" @click="toggle">open Dialog</Button>
<Dialog title="标题" v-model:visible="visible" :closeOnClickMask='false' :ok="ok">
    <p>第一行内容。。。。</p>
    <p>第二行内容。。。。</p>
    <p>第三行内容。。。。</p>
</Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
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
        return {
            visible,
            toggle,
            ok
        }
    }
}
</script>
