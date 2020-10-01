<template>
<button class="rudder-button" :class="{[`rudder-theme-${theme}`]:theme}">
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

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;

.rudder-button {
    height: $h;
    border-radius: $radius;
    padding: 0 12px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    box-shadow: 0 1px 0 fade-out(black, 0.95);

    &+& {
        margin-left: 8px;
    }

    &:hover,
    &:focus {
        color: $blue;
        border-color: $blue;
    }

    &:focus {
        outline: none;
    }

    &::-moz-focus-inner {
        border: 0;
    }
}
</style>
