<template>
<h1>示例1</h1>
<div>
    <Tab>
        <TabItem></TabItem>
    </Tab>
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
