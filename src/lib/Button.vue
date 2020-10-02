<template>
<button class="rudder-button" :class="classes" :disabled='disabled'>
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
        },
        level: {
            type: String,
            default: 'normal'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props, context) {
        const {
            theme,
            size,
            level
        } = props
        const classes = {
            [`rudder-theme-${theme}`]: theme,
            [`rudder-size-${size}`]: size,
            [`rudder-level-${level}`]: level
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
$red:red;
$grey:grey;

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
    transition: background 250ms;

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

    &.rudder-theme-button {
        &.rudder-level-main {
            background: $blue;
            color: white;
            border-color: $blue;

            &:hover,
            &:focus {
                background: darken($blue, 10%);
                border-color: darken($blue, 10%);
            }
        }

        &.rudder-level-danger {
            background: $red;
            color: white;
            border-color: $red;

            &:hover,
            &:focus {
                background: darken($red, 10%);
                border-color: darken($red, 10%);
            }
        }
    }

    &.rudder-theme-link {
        &.rudder-level-main {
            color: $blue;
        }

        &.rudder-level-danger {
            color: $red;

            &:hover,
            &:focus {
                color: darken($red, 10%);
            }
        }
    }

    &.rudder-theme-text {
        &.rudder-level-main {
            color: $blue;

            &:hover,
            &:focus {
                color: darken($blue, 10%);
            }
        }

        &.rudder-level-danger {
            color: $red;

            &:hover,
            &:focus {
                color: darken($red, 10%);
            }
        }
    }

    &.rudder-theme-button {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;

            &:hover {
                border-color: $border-color;
            }
        }

    }

    &.rudder-theme-link,
    &.rudder-theme-text {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;
        }
    }
}
</style>
