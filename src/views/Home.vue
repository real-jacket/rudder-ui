<template>
<TopNav />
<div class="banner">
    <h1>Rudder UI</h1>
    <h2>一个简单的轮子</h2>
    <p class="actions">
        <a href="https://github.com/real-jacket/rudder-ui" target="_blank">Github</a>
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

<style lang="scss" scoped>
.banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: #3eaf7c;
    padding: 100px 0;

    h1,
    h2 {
        margin: 10px 0;
        letter-spacing: 5px;
    }

    .actions {
        display: flex;
        justify-content: center;
        align-items: center;

        * {
            background: #dddddd;
            border-radius: 8px;
            padding: 5px 15px;
            margin: 10px;
        }
    }
}
</style>
