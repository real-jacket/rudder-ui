<template>
<button class="rudder-button" :class="{[`theme-${theme}`]:theme}">
    <slot></slot>
</button>
</template>

<script lang="ts">
export default {
    name: 'Button',
    props: {
        theme: {
            type: String,
            default: 'button'
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
