<template>
<h1>示例1</h1>
<div>
    <Tabs>
        <TabItem></TabItem>
        <TabItem></TabItem>
        <TabItem></TabItem>
    </Tabs>
</div>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import TabItem from '../lib/TabItem.vue';
export default {
    name: 'TabsDemo',
    components: {
        Tabs,
        TabItem
    }
}
</script>
