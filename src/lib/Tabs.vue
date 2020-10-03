<template>
<div class="rudder-tabs">
    <div class="rudder-tabs-nav">
        <div class="rudder-tabs-nav-item" v-for="(t,index) in titles" :key="index">{{t}}</div>
    </div>
    <div class="rudder-tabs-content">
        <component v-for="(c,index) in children" :key="index" :is="c" />
    </div>
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
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.rudder-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;

        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }
        }

        &.selected {
            color: $blue;
        }
    }

    &-content {
        padding: 8px 0;
    }
}
</style>
