<template>
<Switch :value='checked' @input="checked = $event" />
</template>

<script>
import {
    ref
} from 'vue';
import Switch from '../lib/Switch.vue';
export default {
    name: 'SwitchDemo',
    components: {
        Switch
    },
    setup() {
        const checked = ref(false)
        return {
            checked
        }
    }
}
</script>
