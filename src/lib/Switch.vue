<template>
<button :class="{checked}" @click="toggle"><span></span></button>
</template>

<script>
import {
    ref
} from 'vue'
export default {
    name: 'Switch',
    setup() {
        const checked = ref(false)
        const toggle = () => {
            checked.value = !checked.value
        }

        return {
            checked,
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
    outline: none;
}

span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
}

button.checked {
    background: blue;

    >span {
        left: calc(100% - #{$h2} - 2px);
    }

}
</style>
