<template>
<div class="rudder-tabs">
    <div class="rudder-tabs-nav">
        <div class="rudder-tabs-nav-item" :class="{'selected':selected === t}" @click="select(t)" v-for="(t,index) in titles" :key="index">{{t}}</div>
    </div>
    <div class="rudder-tabs-content">
        <component :key="current.props.title" :is="current" />
    </div>
</div>
</template>

<script lang="ts">
import {
    computed
} from 'vue';
import TabItem from './TabItem.vue';
export default {
    name: 'Tabs',
    props: {
        selected: String
    },
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

        const current = computed(() => {
            return children.find(child => {
                return child.props.title === props.selected
            })
        })

        const select = (title) => {
            context.emit('update:selected', title)
        }
        return {
            children,
            titles,
            current,
            select
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

            &.selected {
                color: $blue;
            }
        }

    }

    &-content {
        padding: 8px 0;
    }
}
</style>
