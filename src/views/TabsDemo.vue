<template>
<h1>示例1</h1>
<div>
    <Tabs v-model:selected="selected">
        <TabItem title="标题一">第一个</TabItem>
        <TabItem title="标题二">第二个</TabItem>
        <TabItem title="标题三">第三个</TabItem>
    </Tabs>
</div>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import TabItem from '../lib/TabItem.vue';
import {
    ref
} from 'vue';
export default {
    name: 'TabsDemo',
    components: {
        Tabs,
        TabItem
    },
    setup(props, context) {
        const selected = ref('标题一')
        return {
            selected
        }
    }
}
</script>
