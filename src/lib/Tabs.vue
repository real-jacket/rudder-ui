<template>
<div>
    这是 tabs 组件
</div>
</template>

<script lang="ts">
import TabItem from './TabItem.vue';
export default {
    name: 'Tabs',
    setup(props, context) {
        const children = context.slots.default()
        children.forEach(child => {
            if (child.type !== TabItem) {
                throw new Error('Tabs 标签下只能有 TabItem')
            }
        })
        return {
            children
        }
    }
}
</script>
