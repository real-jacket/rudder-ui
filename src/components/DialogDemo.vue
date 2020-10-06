<template>
<h1>Dialog 对话框</h1>
<Demo :component='DialogDemo1'></Demo>
<Demo :component='DialogDemo2'></Demo>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import DialogDemo1 from './DialogDemos/Dialog1.demo.vue';
import DialogDemo2 from './DialogDemos/Dialog2.demo.vue';

import {
    ref
} from 'vue';
export default {
    name: 'DialogDemo',
    components: {
        Button,
    },
    setup() {
        return {
            DialogDemo1,
            DialogDemo2
        }
    }
}
</script>
