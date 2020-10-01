<template>
<div class="top-nav">
    <div class="logo" @click="toHome">LOGO</div>
    <ul class="menue">
        <li>菜单一</li>
        <li>菜单二</li>
    </ul>
    <span class="toggleAside" @click="toggleMenue"></span>
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
    },
    methods: {
        toHome() {
            this.$router.push('/')
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

    >.logo {
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

    >.toggleAside {
        display: none;
        width: 24px;
        height: 24px;
        background: red;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
    }

    @media (max-width: 500px) {
        >.menue {
            display: none;
        }

        >.logo {
            margin: 0 auto;
        }

        >.toggleAside {
            display: inline-block;
        }
    }
}
</style>
