<template>
<h1>示例1</h1>
<div>
    <Tabs>
        <TabItem title="标题一">第一个</TabItem>
        <TabItem title="标题二">第二个</TabItem>
        <TabItem title="标题三">第三个</TabItem>
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
