<template>
<TopNav />
<div class="content">
    <aside class="aside">
        <h2>组件列表</h2>
        <ol>
            <li>
                <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
                <router-link to="/doc/switch">Button 组件</router-link>
            </li>
            <li>
                <router-link to="/doc/switch">Dialog 组件</router-link>
            </li>
            <li>
                <router-link to="/doc/switch">Tabs 组件</router-link>
            </li>
        </ol>
    </aside>
    <main class="main">主内容</main>
</div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
export default {
    name: 'Doc',
    components: {
        TopNav
    }
}
</script>

<style lang="scss" scoped>
.content {
    display: flex;

    aside {
        background: lightblue;
        min-width: 150px;
        padding: 16px;
        position: fixed;
        top: 0;
        left: 0;

        >h2 {
            margin-bottom: 4px;
        }

        >ol {
            >li {
                padding: 4px 0;
            }
        }
    }

    .main {
        flex-flow: 1;
    }
}
</style>
