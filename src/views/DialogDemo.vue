<template>
<Button level="main">open Dialog</Button>
<Dialog></Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
export default {
    name: 'DialogDemo',
    components: {
        Dialog,
        Button
    }
}
</script>
