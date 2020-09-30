<template>
<TopNav />
<div class="content">
    <aside class="aside">侧边栏</aside>
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

<style scoped>

</style>
