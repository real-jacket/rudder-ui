<template>
<TopNav />
<div class="banner">
    <h1>rudder ui</h1>
    <h2>一个简单的轮子</h2>
    <p class="actions">
        <a>Github</a>
        <router-link to="/doc">起步</router-link>
    </p>
</div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
export default {
    name: 'Home',
    components: {
        TopNav
    }
}
</script>

<style scoped> 

</style>
