<demo>
    测试demo
</demo>
<template>
<Switch v-model:value='checked' />
</template>

<script>
import {
    ref
} from 'vue';
import Switch from '../../lib/Switch.vue';
export default {
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
