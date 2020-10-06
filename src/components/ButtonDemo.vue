<template>
<h1>Button </h1>
<Demo :component='ButtonDemo1'></Demo>
<Demo :component='ButtonDemo2'></Demo>
<Demo :component='ButtonDemo3'></Demo>
<Demo :component='ButtonDemo4'></Demo>
<Demo :component='ButtonDemo5'></Demo>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import ButtonDemo1 from './ButtonDemos/Button1.demo.vue'
import ButtonDemo2 from './ButtonDemos/Button2.demo.vue'
import ButtonDemo3 from './ButtonDemos/Button3.demo.vue'
import ButtonDemo4 from './ButtonDemos/Button4.demo.vue'
import ButtonDemo5 from './ButtonDemos/Button5.demo.vue'
export default {
    name: 'ButtonDemo',
    components: {
        Button
    },
    setup() {
        const click = () => {
            console.log('hi')
        }
        return {
            ButtonDemo1,
            ButtonDemo2,
            ButtonDemo3,
            ButtonDemo4,
            ButtonDemo5,
            click,
        }
    }
}
</script>
