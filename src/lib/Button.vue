<template>
<button class="rudder-button" :class="classes">
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
        },
        size: {
            type: String,
            default: 'normal'
        }
    },
    setup(props, context) {
        const {
            theme,
            size
        } = props
        const classes = {
            [`rudder-theme-${theme}`]: theme,
            [`rudder-size-${size}`]: size
        }

        return {
            classes
        }
    }
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
    cursor: pointer;

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

    &.rudder-theme {
        &-link {
            border: none;
            background: white;
            box-shadow: none;

            &:hover,
            &:focus {
                background: #fafafa;
                color: $color;
            }
        }

        &-text {
            border: none;
            background: white;
            box-shadow: none;
            color: $blue;
        }
    }

    &.rudder-size {
        &-big {
            font-size: 24px;
            height: 48px;
            padding: 0 16px
        }

        &-small {
            font-size: 12px;
            height: 20px;
            padding: 0 4px;
        }
    }
}
</style>
