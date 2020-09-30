<template>
<div class="top-nav">
    <div class="log">LOGO</div>
    <ul class="menue">
        <li>菜单一</li>
        <li>菜单二</li>
    </ul>
</div>
</template>

<script lang="ts">
export default {
    name: 'TopNav'
}
</script>

<style lang="scss" scoped>
.top-nav {
    background: pink;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;

    .menue {
        display: flex;

        li {
            padding: 10px;
        }
    }
}
</style>
