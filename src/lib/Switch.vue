<template>
<button :class="{checked:value}" @click="toggle"><span></span></button>
</template>

<script lang="ts">
import {
    ref
} from 'vue'
export default {
    name: 'Switch',
    props: {
        value: Boolean
    },
    setup(props, context) {
        const toggle = () => {
            context.emit('input', !props.value)
        }
        return {
            toggle
        }
    }
}
</script>

<style lang="scss" scoped>
$h:22px;
$h2: $h - 4px;

button {
    height: $h;
    width: $h*2;
    border: none;
    border-radius: $h/2;
    position: relative;
    background: grey;

    &:focus {
        outline: none;
    }
}

span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: left 250ms ease-in-out;
}

button.checked {
    background: blue;

    >span {
        left: calc(100% - #{$h2} - 2px);
    }

}
</style>
