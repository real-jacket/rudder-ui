<template>
<template v-if="visible">
    <div class="rudder-dialog-mask"></div>
    <div class="rudder-dialog-wrapper">
        <div class="rudder-dialog">

            <header>
                {{title}}
                <span class="rudder-dialog-close" @click="close"></span>
            </header>
            <main>
                <slot />
            </main>
            <footer>
                <Button>cancel</Button>
                <Button level="main">ok</Button>
            </footer>
        </div>
    </div>
</template>
</template>

<script lang="ts">
import Button from './Button.vue';
export default {
    name: 'Dialog',
    components: {
        Button
    },
    props: {
        title: {
            type: String,
            default: '标题'
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    setup(props, context) {
        const close = () => {
            context.emit('update:visible', !props.visible)
        }
        return {
            close
        }
    }
}
</script>

<style lang="scss">
$radius:4px;
$border-color: #d9d9d9;

.rudder-dialog {
    background: white;
    border-radius: $radius;
    border: 1px solid $border-color;
    min-width: 15em;
    max-width: 90%;

    &-mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: fade_out(black, 0.5);
        z-index: 10;
    }

    &-wrapper {
        position: fixed;
        top: 200px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 11;
        box-shadow: 0 0 3px fade_out(black, 0.5);
    }

    >header {
        padding: 12px 16px;
        border-bottom: 1px solid $border-color;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
    }

    >main {
        padding: 12px 16px;
    }

    >footer {
        border-top: 1px solid $border-color;
        padding: 12px 16px;
        text-align: right;
    }

    &-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;

        &::before,
        &::after {
            content: '';
            position: absolute;
            height: 1px;
            background: black;
            width: 100%;
            top: 50%;
            left: 50%;
        }

        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
}
</style>
