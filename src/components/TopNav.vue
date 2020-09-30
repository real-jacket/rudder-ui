<template>
<div class="top-nav">
    <div class="log" @click="toggleMenue">LOGO</div>
    <ul class="menue">
        <li>菜单一</li>
        <li>菜单二</li>
    </ul>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from 'vue'
export default {
    name: 'TopNav',
    setup() {
        const menueVisible = inject < Ref < Boolean > > ('menueVisible')
        const toggleMenue = () => {
            menueVisible.value = !menueVisible.value
        }
        return {
            toggleMenue
        }
    }
}
</script>

<style lang="scss" scoped>
.top-nav {
    background: pink;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    position: relative;
    z-index: 10;

    >.log {
        max-width: 6em;
        margin-right: auto;
    }

    >.menue {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        li {
            margin: 0 1em;
        }
    }
}
</style>
