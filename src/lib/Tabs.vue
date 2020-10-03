<template>
<div class="rudder-tabs-wrapper">
    这是 tabs 组件
    <div class="rudder-tab" v-for="(t,index) in titles" :key="index">{{t}}</div>
</div>
<component v-for="(c,index) in children" :key="index" :is="c" />
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
        const titles = children.map(child => {
            return child.props.title
        })
        return {
            children,
            titles
        }
    }
}
</script>

<style lang="scss">

</style>
