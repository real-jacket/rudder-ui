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
        const width = document.documentElement.clientWidth
        const menueVisible = ref(width >= 500 ? true : false)
        provide('menueVisible', menueVisible)
    }
}
</script>
