<template>
<TopNav />
<div class="layout">
    <aside class="aside" v-if="menueVisible">
        <h2>组件列表</h2>
        <ol class="nav">
            <li>
                <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
                <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
                <router-link to="/doc/dialog">Dialog 组件</router-link>
            </li>
            <li>
                <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
        </ol>
    </aside>
    <main class="content">
        <router-view></router-view>
    </main>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from 'vue';
import TopNav from '../components/TopNav.vue';
export default {
    name: 'Doc',
    components: {
        TopNav
    },
    setup() {
        const menueVisible = inject < Ref < Boolean >> ('menueVisible')
        return {
            menueVisible
        }
    }
}
</script>

<style lang="scss" scoped>
.layout {
    display: flex;
    min-height: calc(100vh - 52px);

    aside {
        background: lightblue;
        min-width: 150px;
        padding: 16px;
        flex-shrink: 0;
        position: relative;
        z-index: 999;

        >h2 {
            margin-bottom: 4px;
        }

        >ol {
            >li {
                padding: 4px 0;
            }
        }
    }

    .content {
        flex-grow: 1;
        padding-top: 16px;
        padding-left: 16px;
        margin: 10px 0 0 10px;

        @media (max-width: 500px) {
            margin-left: 0;
        }
    }

    @media (max-width: 500px) {
        aside {
            position: fixed;
            top: 0;
            left: 0;
            padding-top: 70px;
        }
    }
}
</style>
