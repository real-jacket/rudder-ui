<template>
<router-view></router-view>
</template>

<script lang="ts">
import {
    provide,
    ref
} from 'vue'
export default {
    name: 'App',
    setup() {
        const menueVisible = ref(false)
        provide('menueVisible', menueVisible)
    }
}
</script>
