<template>
<div class="top-nav">
    <div class="logo" @click="toHome">
        <svg class="icon">
            <use xlink:href="#icon-rudderA"></use>
        </svg>
    </div>
    <ul class="menue">
        <li>
            <router-link to="/doc/intro">文档</router-link>
        </li>
        <li>
            <router-link to="/doc/switch">组件</router-link>
        </li>
        <li>
            <a href="https://github.com/real-jacket/rudder-ui" target="_blank">
                <svg class="icon">
                    <use xlink:href="#icon-github"></use>
                </svg>
                Github
            </a>
        </li>
    </ul>
    <span v-if="toggleVisible" class="toggleAside" @click="toggleMenue"></span>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from 'vue'
export default {
    name: 'TopNav',
    props: {
        toggleVisible: {
            type: Boolean,
            default: false
        }
    },
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
$green:#1e9072;

.top-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    position: relative;
    box-shadow: 0 2px 8px #f0f1f2;

    >.logo {
        margin-right: auto;
        cursor: pointer;

        svg {
            width: 36px;
            height: 36px;
        }
    }

    >.menue {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        font-size: 20px;

        li {
            margin: 0 1em;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px 0;

            svg {
                margin-right: 6px;
            }

            position: relative;

            &:hover {
                color: $green;

                &:before {
                    display: block;
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 2px;
                    width: 100%;
                    background: $green;
                }
            }
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
        z-index: 1000;
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
